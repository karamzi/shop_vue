<template>
    <section class="section_product">
        <div class="container">
            <div v-if="!isLoading" class="product_block">
                <div class="product_img">
                    <img :src="product.img" alt="">
                </div>
                <div class="product_details">
                    <div class="product_title">{{ product.name }}</div>
                    <div v-if="product.availability" class="product_status">В наличии</div>
                    <div v-else class="product_status" style="color: #f44336">Нет в наличии</div>
                    <div class="product_price">{{ product.price }} руб</div>
                    <div class="product_description">{{ product.description }}</div>
                    <div class="product_buttons">
                        <div class="product_add_to_cart">
                            <a href="#">Добавить в корзину</a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>Загрузка</div>
        </div>
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Accessory",
        computed: mapGetters(['product', 'isLoading']),
        methods: mapActions(['getProduct']),
        created() {
            if(!this.product) {
                this.getProduct({category: 'accessory', id: this.$route.params.id})
            }
        }
    }
</script>

<style scoped>
    .product_block {
        display: flex;
    }

    .product_img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        padding: 60px;
    }

    .product_img img {
        width: 100%;
    }

    .product_details {
        width: 50%;
        padding: 60px 20px;
    }

    .product_title {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .product_status {
        color: #3c763d;
        margin-bottom: 30px;
    }

    .product_price {
        font-size: 25px;
        font-weight: bold;
        border-bottom: 1px solid #929292;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    .product_description {
        line-height: 1.6;
        color: #101010;
        margin-bottom: 30px;
        text-align: justify;
    }

    .product_buttons {
        display: flex;
        margin-bottom: 30px;
    }

    .product_add_to_cart a {
        display: block;
        text-decoration: none;
        color: white;
        background-color: #363636;
        padding: 10px 20px;
    }

    .product_add_to_cart a:hover {
        transition: background-color 0.3s ease;
        background-color: #929292;
    }
</style>