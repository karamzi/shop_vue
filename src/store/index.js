import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/1.0/',
})

export default new Vuex.Store({
    state: {
        cart: [],
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
        }
    },
})