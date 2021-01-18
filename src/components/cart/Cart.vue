<template>
    <section class="section_cart">
        <div class="container">
            <div class="cart_block">
                <h2>Корзина</h2>
                <div class="cart_empty">
                    <p>В вашей корзине нет товаров</p>
                </div>
                <div class="cart_list">
                    <router-link to="/product/1" class="cart_item">
                        <img src="@/assets/img/ball.png" alt="">
                        <div class="cart_item_name">
                            <a href="#">Jackal Flash</a>
                        </div>
                        <div class="cart_item_count">
                            <span>1</span>
                            <div class="count_buttons">
                                <span class="plus">+</span>
                                <span class="minus">-</span>
                            </div>
                        </div>
                        <p>x</p>
                        <div class="cart_item_price">2900 руб</div>
                        <p>=</p>
                        <div class="cart_item_amount">2900 руб</div>
                        <span class="cart_item_delete">x</span>
                    </router-link>
                </div>
                <div class="cart_amount">
                    <p>Итого:</p>
                    <span>2900 руб</span>
                </div>
                <div class="cart_buttons">
                    <a href="#" class="continue_buy">Продолжить покупки</a>
                    <a href="#" class="end_buy">Оформить заказ</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Cart"
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
    }

    .cart_empty {
        width: 100%;
        background-color: #fbf8e3;
        margin-top: 30px;
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
        width: 70px;
    }

    .cart_item_name a {
        text-decoration: none;
        color: black;
    }

    .cart_item_name a:hover {
        transition: color 0.3s ease;
        color: #929292;
    }

    .cart_item_count {
        display: flex;
    }

    .cart_item_count > span {
        padding: 12px 14px;
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