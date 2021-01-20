<template>
    <section class="products">
            <router-link to="/category/balls" class="product_item" style="background-color: #f1dfded1">
                <div class="products_title">
                    <h3>Шары</h3>
                </div>
                <img src="@/assets/img/ball.png" alt="">
            </router-link>
        <router-link to="/category/bags" class="product_item" style="background-color: #f8f0e9b5">
            <div class="products_title">
                <h3>Сумки</h3>
            </div>
            <img src="@/assets/img/bag.png" alt="">
        </router-link>
        <router-link to="/category/shoes" class="product_item" style="background-color: #e6e6e6">
            <div class="products_title">
                <h3>Обувь</h3>
            </div>
            <img src="@/assets/img/shoes.png" alt="">
        </router-link>
        <router-link to="/category/accessories" class="product_item" style="background-color: #e0f1ded1">
            <div class="products_title">
                <h3>Аксессуары</h3>
            </div>
            <img src="@/assets/img/acs.png" alt="">
        </router-link>
    </section>
</template>

<script>
    export default {
        name: "Products"
    }
</script>

<style scoped>
    .products {
        display: flex;
        padding: 0 20px;
        margin: 20px 0;
        width: 100%;
    }

    .product_item {
        position: relative;
        width: 25%;
        height: 500px;
        margin-right: 20px;
        z-index: 1;
        border-radius: 10px;
    }

    .product_item img {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 80%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    .products_title {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        background-color: rgba(250, 250, 250, 0.6);
        backdrop-filter: blur(5px);
    }

    .products_title h3 {
        color: #363636;
        font-size: 25px;
        padding: 15px 0;
    }

    .product_item:last-child {
        margin-right: 0;
    }
</style>