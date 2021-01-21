import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/1.0/',
})

function get_cookie(name) {
    let results = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')

    if (results)
        return JSON.parse(unescape(results[2]))
    else
        return []
}


function setCookie(value) {
    let expires = ""
    let date = new Date()
    date.setTime(date.getTime() + (90 * 1000))
    expires = "; expires=" + date.toUTCString()
    document.cookie = 'cart' + "=" + (value || "") + expires + ";"
}


export default new Vuex.Store({
    state: {
        cart: get_cookie('cart'),
        products: [],
        product: null,
        isLoading: false,
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        setProduct(state, product) {
            state.product = product
        },
        startLoading(state) {
            state.isLoading = true
        },
        stopLoading(state) {
            state.isLoading = false
        },
        addToCart(state, product) {
            if (state.cart.some(item => item.vendor_code == product.vendor_code)) {
                let cart = state.cart.map(item => {
                    if (item.vendor_code == product.vendor_code) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
                state.cart = cart
            } else {
                state.cart.push(product)
            }
            setCookie(JSON.stringify(state.cart))
        },
        addOne(state, product) {
            state.cart.forEach(item => {
                if (item.vendor_code == product.vendor_code) {
                    item.quantity = item.quantity + 1
                }
            })
            setCookie(JSON.stringify(state.cart))
        },
        removeOne(state, product) {
            state.cart.forEach((item, index, array) => {
                if (item.vendor_code == product.vendor_code) {
                    if (item.quantity > 1) {
                        item.quantity = item.quantity - 1
                    } else {
                        array.splice(index, 1)
                    }
                }
            })
            setCookie(JSON.stringify(state.cart))
        },
        deleteFromCart(state, product) {
            state.cart.forEach((item, index, array) => {
                if (item.vendor_code == product.vendor_code) {
                    array.splice(index, 1)
                }
            })
            setCookie(JSON.stringify(state.cart))
        },
    },
    actions: {
        getProducts({commit}, {category, params}) {
            commit('startLoading')
            instance.get(`${category}/`, {
                params: {...params}
            }).then(response => {
                commit('setProducts', response.data)
                commit('stopLoading')
            })
        },
        getProduct({commit}, {category, id}) {
            commit('startLoading')
            instance.get(`${category}/${id}/`).then(response => {
                commit('setProduct', response.data)
                commit('stopLoading')
            })
        },
        addToCartAction({commit}, product) {
            let p = {
                vendor_code: product.vendor_code,
                name: product.name,
                img: product.img,
                quantity: 1,
                price: product.price,
                category: product.category,
                size: product.size
            }
            commit('addToCart', p)
        },
        addOneAction({commit}, product) {
            commit('addOne', product)
        },
        removeOneAction({commit}, product) {
            commit('removeOne', product)
        },
        deleteFromCartAction({commit}, product) {
            commit('deleteFromCart', product)
        }
    },
    getters: {
        allProducts(state) {
            return state.products
        },
        productsCount(state) {
            return state.cart.length
        },
        product(state) {
            return state.product
        },
        isLoading(state) {
            return state.isLoading
        },
        cart(state) {
            return state.cart
        },
        totalCartPrice(state) {
            return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }
    },
})