<template>
    <section class="order_section">
        <div class="container">
            <div v-if="success" class="success">{{ success }}</div>
            <div v-bind:key="error" v-for="error in errors" class="error">{{ error }}</div>
            <h2>Оформление заказа</h2>
            <div class="order_block">
                <div class="order_form">
                    <h3>Контактная форма</h3>
                    <div class="form_input">
                        <label class="required">контактное лицо (фио):</label>
                        <input v-model="name" type="text">
                    </div>
                    <div class="form_input">
                        <label class="required">контактный телефон:</label>
                        <input v-model="phone" type="text">
                    </div>
                    <div class="form_input">
                        <label>e-mail:</label>
                        <input v-model="email" type="email">
                    </div>
                    <p @click="dispatchOrder()">Подтвердить заказ</p>
                </div>
                <div class="order_cart">
                    <h3>Ваш заказ ({{ rightDeclination() }})</h3>
                    <div v-bind:key="product.vendor_code" v-for="product in cart" class="item">
                        <img :src="product.img">
                        <div class="description">
                            <p>{{ product.name }}</p>
                            <p>{{ product.quantity }} x {{ product.price }} руб</p>
                        </div>
                    </div>
                    <div class="amount">
                        <p>Итого:</p>
                        <p>{{ totalCartPrice }} руб</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Order",
        data() {
            return {
                name: '',
                phone: '',
                email: '',
                success: '',
                errors: [],
            }
        },
        computed: mapGetters(['cart', 'totalCartPrice', 'productsCount']),
        methods: {
            ...mapActions(['sendOrder']),
            rightDeclination() {
                if (this.productsCount % 100 >= 11 && this.productsCount % 100 <= 19) {
                    return this.productsCount + ' товаров'
                } else {
                    switch (this.productsCount % 10) {
                        case 1:
                            return this.productsCount + ' товар'
                        case 2:
                            return this.productsCount + ' товара'
                        case 3:
                            return this.productsCount + ' товара'
                        case 4:
                            return this.productsCount + ' товара'
                        default:
                            return this.productsCount + ' товаров'

                    }
                }
            },
            dispatchOrder() {
                let order = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    totalPrice: this.totalCartPrice,
                }
                if (this.validate()) {
                    this.sendOrder(order)
                    this.success = 'Ваш заказ успешно создан'
                    setTimeout(() => this.success = '', 10000)
                    this.name = ''
                    this.phone = ''
                    this.email = ''
                }
            },
            validate() {
                this.errors = []
                if (this.name === '') {
                    this.errors.push('Поле "контактное лицо (фио)" не заполнено')
                    return false
                }
                if (this.phone === '') {
                    this.errors.push('Поле "контактный телефон" не заполнено')
                    return false
                }
                return true
            }
        }
    }
</script>

<style scoped>

    .error, .success {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 100%;
        margin: 10px 0;
        border-radius: 5px;
    }

    .error {
        color: #721c24;
        background-color: #f8d7da;
    }

    .success {
        color: #155724;
        background-color: #d4edda;
    }

    h2 {
        text-transform: uppercase;
        text-align: center;
        margin: 20px 0;
    }

    .order_block {
        display: flex;
        justify-content: space-between;
    }

    .order_form {
        width: 45%;
    }

    .order_form h3 {
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #101010;
    }

    .form_input {
        display: flex;
        margin-bottom: 30px;
        justify-content: space-between;
        align-items: center;
    }

    .required:after {
        content: '*';
        color: #f44336;
    }

    input {
        border: 1px solid #929292;
        border-radius: 3px;
        padding: 3px 10px;
        height: 32px;
        width: 50%;
    }

    .order_form p {
        display: block;
        text-align: center;
        color: #e6e6e6;
        padding: 10px 0;
        background-color: #101010;
        margin-top: 60px;
        cursor: pointer;
    }

    .order_form p:hover {
        transition: all 0.3s ease;
        background-color: #929292;
    }

    .order_cart {
        width: 35%;
        display: flex;
        flex-direction: column;
    }

    .order_cart h3 {
        padding-bottom: 10px;
        margin-bottom: 5px;
        border-bottom: 1px solid #101010;
    }

    .item {
        display: flex;
        margin-top: 10px;
        border-bottom: 1px solid #cccccc;
        margin-bottom: 15px;
    }

    .item img {
        width: 40px;
        height: 40px;
        margin-right: 30px;
        margin-bottom: 10px;
    }

    .amount {
        display: flex;
        justify-content: space-between;
    }

</style>