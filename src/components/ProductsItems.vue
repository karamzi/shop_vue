<template>
    <div class="product_items">
        <router-link v-bind:key="product.vendor_code"
                     v-for="product in cart" :to="`/${product.category}/${product.vendor_code}`"
                     class="product_item">
            <div class="product_container" @click="showProduct(product)">
                <div class="product_item_img">
                    <img :src="product.img" alt="">
                </div>
                <div class="product_item_title">
                    <h4>{{ product.name }}</h4>
                </div>
                <div class="product_item_price">
                    <span>{{ product.price }} руб</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapMutations} from "vuex"

    export default {
        name: "ProductsItems",
        props: {
            cart: {
                type: Array,
                default() {
                    return []
                }
            },
        },
        methods: {
            ...mapMutations(['setProduct']),
            showProduct(product) {
                this.setProduct(product)
            }
        },
    }
</script>

<style scoped>
    .product_items {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 20px;
    }

    .product_item {
        text-decoration: none;
        color: #101010;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.3333%;
        padding: 20px 0;
    }

    .product_container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product_item_img {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        height: 200px;
    }

    .product_item_img img {
        width: 60%;
    }

    .product_item_title {
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: bold;
    }

    .product_item:last-child {
        margin-right: 0;
    }
</style>