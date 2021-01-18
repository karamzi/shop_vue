<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="footer_section">
                    <h4>Клиентам</h4>
                    <div class="footer_nav">
                        <a href="#">Доставка</a>
                        <a href="#">Тренировки</a>
                        <a href="#">Услуги Pro-Shop</a>
                    </div>
                </div>
                <div class="footer_section">
                    <h4>Информация</h4>
                    <div class="footer_nav">
                        <a href="#">О нас</a>
                    </div>
                </div>
                <div class="footer_section">
                    <h4>8-900-000-00-00</h4>
                </div>
            </div>
            <div class="footer_logo">
                <h4>Bowling-Petersburg 2021</h4>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style>
    footer {
        border-top: 1px solid #929292;
        margin-top: 40px;
    }

    .footer {
        display: flex;
        padding: 30px;
        justify-content: space-between;
        align-items: center;
    }

    .footer_section {
        display: flex;
        flex-direction: column;
    }

    .footer_section h4 {
        margin-bottom: 15px;
        font-size: 20px;
    }

    .footer_nav {
        display: flex;
    }

    .footer_nav a {
        display: block;
        text-decoration: none;
        color: #363636;
        padding-right: 20px;
    }

    .footer_nav a:last-child {
        padding-right: 0;
    }

    .footer_nav a:hover {
        transition: color 0.3s ease;
        color: #cccccc;
    }

    .footer_logo {
        display: flex;
        justify-content: center;
        margin: 30px 0;
    }

    .footer_logo h4 {
        font-size: 25px;
    }
</style>