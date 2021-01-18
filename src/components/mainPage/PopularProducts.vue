<template>
    <section class="popular">
        <h3>Популярные товары</h3>
        <div class="list_popular_items">
            <div class="popular_item">
                <div class="popular_item_img">
                    <img src="@/assets/img/ball.png" alt="">
                </div>
                <div class="popular_item_title">
                    <h4>DV8 poison</h4>
                </div>
                <div class="popular_item_price">
                    <span>13500 руб</span>
                </div>
            </div>
            <div class="popular_item">
                <div class="popular_item_img">
                    <img src="@/assets/img/ball.png" alt="">
                </div>
                <div class="popular_item_title">
                    <h4>DV8 poison</h4>
                </div>
                <div class="popular_item_price">
                    <span>13500 руб</span>
                </div>
            </div>
            <div class="popular_item">
                <div class="popular_item_img">
                    <img src="@/assets/img/ball.png" alt="">
                </div>
                <div class="popular_item_title">
                    <h4>DV8 poison</h4>
                </div>
                <div class="popular_item_price">
                    <span>13500 руб</span>
                </div>
            </div>
            <div class="popular_item">
                <div class="popular_item_img">
                    <img src="@/assets/img/ball.png" alt="">
                </div>
                <div class="popular_item_title">
                    <h4>DV8 poison</h4>
                </div>
                <div class="popular_item_price">
                    <span>13500 руб</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PopularProducts"
    }
</script>

<style>
    .popular {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin: 20px 0;
        width: 100%;
    }

    .popular h3 {
        font-size: 25px;
        margin-bottom: 30px;
    }

    .list_popular_items {
        display: flex;
        justify-content: space-around;
    }

    .popular_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        margin-right: 20px;
    }

    .popular_item_img {
        margin-bottom: 20px;
    }

    .popular_item_img img {
        width: 100%;
    }

    .popular_item_title {
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: bold;
    }

    .popular_item:last-child {
        margin-right: 0;
    }
</style>