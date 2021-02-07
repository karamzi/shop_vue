<template>
    <section class="popular">
        <h3>Популярные товары</h3>
        <Preloader v-if="isLoading" />
        <div v-else class="list_popular_items">
            <div @click="showProduct(product.product)" :key="product.product.vendor_code" v-for="product in popularProducts" class="popular_item">
                <router-link :to="`${product.product.category}/${product.product.vendor_code}`" >
                    <div class="popular_item_img">
                        <img :src="product.product.img" alt="">
                    </div>
                    <div class="popular_item_title">
                        <h4>{{ product.product.name }}</h4>
                    </div>
                    <div class="popular_item_price">
                        <span>{{ product.product.price }} руб</span>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import Preloader from "@/components/Preloader"
    import {mapActions, mapGetters, mapMutations} from 'vuex'

    export default {
        name: "PopularProducts",
        components: {Preloader},
        computed: mapGetters(['popularProducts', 'isLoading']),
        methods: {
            ...mapActions(['getPopularProducts']),
            ...mapMutations(['setProduct']),
            showProduct(product) {
                this.setProduct(product)
            }
        },
        mounted() {
            this.getPopularProducts()
        }
    }
</script>

<style>
    .popular {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin: 20px 0;
        width: 100%;
        min-height: 200px;
    }

    .popular h3 {
        font-size: 25px;
        margin-bottom: 30px;
    }

    .list_popular_items {
        display: flex;
        justify-content: space-around;
    }

    .list_popular_items a {
        text-decoration: none;
        color: #101010;
    }

    .popular_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        margin-right: 20px;
    }

    .popular_item_img {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        height: 200px;
        padding: 20px;
    }

    .popular_item_img img {
        object-fit: contain;
        width: 100%;
    }

    .popular_item_title {
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }

    .popular_item_price {
        text-align: center;
    }

    .popular_item:last-child {
        margin-right: 0;
    }
</style>