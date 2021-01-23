<template>
    <section class="section_cart">
        <div class="container">
            <div class="cart_block">
                <h2>Корзина</h2>
                <div v-if="cart.length === 0" class="cart_empty">
                    <p>В вашей корзине нет товаров</p>
                </div>
                <div v-else class="cart_list">
                    <div v-bind:key="product.vendor_code" v-for="product in cart" class="cart_item">
                        <img :src="product.img" alt="">
                        <div class="cart_item_name">
                            <router-link :to="'/' + product.category + '/' + product.vendor_code ">{{ product.name }}
                            </router-link>
                        </div>
                        <div class="cart_item_count">
                            <span><p>{{ product.quantity }}</p></span>
                            <div class="count_buttons">
                                <span @click="addOneAction(product)" class="plus">+</span>
                                <span @click="removeOneAction(product)" class="minus">-</span>
                            </div>
                        </div>
                        <p>x</p>
                        <div class="cart_item_price">{{ product.price }} руб</div>
                        <p>=</p>
                        <div class="cart_item_amount">{{ totalPrice(product) }} руб</div>
                        <span @click="deleteFromCartAction(product)" class="cart_item_delete">x</span>
                    </div>
                </div>
                <div class="cart_amount">
                    <p>Итого:</p>
                    <span>{{ totalCartPrice }} руб</span>
                </div>
                <div class="cart_buttons">
                    <router-link to="/" class="continue_buy">Продолжить покупки</router-link>
                    <router-link to="/order" class="end_buy">Оформить заказ</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Cart",
        computed: mapGetters(['cart', 'totalCartPrice']),
        methods: {
            ...mapActions(['addOneAction', 'removeOneAction', 'deleteFromCartAction']),
            totalPrice(product) {
                return product.quantity * product.price
            }
        },
    }
</script>

<style scoped>
    .cart_block {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    .cart_block > h2 {
        font-size: 30px;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
    }

    .cart_empty {
        width: 100%;
        background-color: #fbf8e3;
        border-radius: 5px;
    }

    .cart_empty > p {
        padding: 20px;
        color: #929292;
        font-size: 20px;
    }

    .cart_item {
        text-decoration: none;
        color: #101010;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        padding: 10px;
        border-bottom: 1px solid #929292;
    }

    .cart_item img {
        width: 50px;
        height: 50px;
    }

    .cart_item_name a {
        text-decoration: none;
        color: #101010;
    }

    .cart_item_name a:hover {
        transition: color 0.3s ease;
        color: #929292;
    }

    .cart_item_count {
        display: flex;
    }

    .cart_item_count > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33px;
        height: 47px;
        border: 1px solid #929292;
    }

    .count_buttons {
        display: flex;
        flex-direction: column;
    }

    .count_buttons span {
        padding: 2px 6px;
        border: 1px solid #929292;
        border-left: none;
        cursor: pointer;
    }

    .count_buttons span:first-child {
        border-bottom: none;
    }

    .count_buttons span:hover {
        transition: all 0.3s ease;
        background-color: #363636;
        color: #cccccc;
    }

    .cart_item_delete {
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
    }

    .cart_amount {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 50px;
    }

    .cart_amount > p {
        margin-right: 100px;
        font-size: 25px;
        text-transform: uppercase;
    }

    .cart_amount > span {
        font-size: 20px;
        font-weight: bold;
    }

    .cart_buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }

    .continue_buy {
        display: block;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #929292;
        border-radius: 3px;
        color: white;
        font-size: 20px;
    }

    .continue_buy:hover {
        transition: all 0.3s ease;
        background-color: #363636;
    }

    .end_buy {
        display: block;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #363636;
        border-radius: 3px;
        color: white;
        font-size: 20px;
    }

    .end_buy:hover {
        transition: all 0.3s ease;
        background-color: #929292;
    }
</style>