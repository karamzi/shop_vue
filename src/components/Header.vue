<template>
    <header>
        <div class="container">
            <div class="header">
                <div class="logo">
                    <router-link to="/"><h1>Bowling-Petersburg</h1></router-link>
                </div>
                <div class="navbar">
                    <nav>
                        <div class="nav_item">
                            <router-link to="/category/balls">Шары</router-link>
                        </div>
                        <div class="nav_item">
                            <router-link to="/category/bags">Сумки</router-link>
                        </div>
                        <div class="nav_item">
                            <router-link to="/category/shoes">Обувь</router-link>
                        </div>
                        <div class="nav_item">
                            <router-link to="/category/accessories">Акссесуары</router-link>
                        </div>
                    </nav>
                    <router-link to="/cart" class="cart">
                        <img src="@/assets/img/cart.png" alt="">
                        <span>{{ productsCount }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Header",
        computed: mapGetters(['productsCount'])
    }
</script>

<style>
    .header {
        display: flex;
        flex-direction: column;
    }

    .logo {
        width: 100%;
    }

    .logo a {
        text-decoration: none;
        color: #101010;
    }

    .logo h1 {
        font-weight: bold;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 50px;
    }

    .navbar {
        display: flex;
    }

    nav {
        display: flex;
        width: 100%;
    }

    .nav_item {
        display: flex;
        padding: 10px 15px;
    }

    .nav_item a {
        text-decoration: none;
        color: #363636;
        font-size: 20px;
    }

    .nav_item a:hover {
        transition: color 0.3s ease;
        color: #929292;
    }

    .arrow-8 {
        position: relative;
        width: 10px;
        height: 10px;
        margin-left: 10px;
        margin-top: 3px;
    }

    .arrow-8:before,
    .arrow-8:after {
        content: '';
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-left: 4px solid #337AB7;
        border-bottom: 4px solid #337AB7;
        animation: arrow-8 3s linear infinite;
    }

    .arrow-8:after {
        animation: arrow-8 3s linear infinite -1.5s;
    }

    @keyframes arrow-8 {
        0% {
            opacity: 0;
            transform: translate(0, -10px) rotate(-45deg);
        }
        10%, 90% {
            opacity: 0;
        }
        50% {
            opacity: 1;
            transform: translate(0, 0) rotate(-45deg);
        }
        100% {
            opacity: 0;
            transform: translate(0, 10px) rotate(-45deg);
        }
    }

    .cart {
        text-decoration: none;
        color: #101010;
        display: flex;
        align-items: center;
        margin-right: 50px;
    }

    .cart span {
        font-size: 20px;
        color: #363636;
        margin-left: 10px;
    }
</style>