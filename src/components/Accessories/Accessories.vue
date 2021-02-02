<template>
    <section class="section_category">
        <div class="container">
            <div class="category_title">
                <h2>Аксессуары для боулинга</h2>
            </div>
            <div class="sort">

            </div>
            <div class="category">
                <div class="filter_block">
                    <div class="filter">
                        <h3>Фильтр</h3>
                        <div class="filter_nav">
                            <div @click="showType = !showType" class="category_link">
                                <p href="#">Аксессуары</p>
                                <div class="arrow-8"></div>
                            </div>
                            <div v-show="showType" class="category_link_accordion">
                                <CheckBox v-bind:name="'Для обуви'" v-bind:type="'type'" @checkBox="checkBox"/>
                                <CheckBox v-bind:name="'Для рук'" v-bind:type="'type'" @checkBox="checkBox"/>
                                <CheckBox v-bind:name="'Для шара'" v-bind:type="'type'" @checkBox="checkBox"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Preloader v-if="isLoading" />
                <ProductsItems v-else v-bind:cart="sortedCart"/>
            </div>
        </div>
    </section>
</template>

<script>
    import ProductsItems from "@/components/ProductsItems"
    import CheckBox from "@/components/CheckBox"
    import Preloader from "@/components/Preloader"
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Accessories",
        data() {
            return {
                showType: true,
                sortedCart: [],
                sort: {
                    type: [],
                },
            }
        },

        components: {ProductsItems, CheckBox, Preloader},
        computed: mapGetters(['allProducts', 'isLoading']),
        methods: {
            ...mapActions(['getProducts']),
            checkBox(name, type) {
                this.sort[type].indexOf(name) === -1 ? this.sort[type].push(name) : this.sort[type].splice(this.sort[type].indexOf(name), 1)
                this.sortCart()
            },
            sortCart() {
                this.sortedCart = this.allProducts
                if (this.sort.type.length) {
                    this.sortedCart = this.sortedCart.filter(product => {
                        return this.sort.type.some(company => product.type === company)
                    })
                }
            }
        },
        watch: {
            allProducts: function () {
                this.sortedCart = this.allProducts
            }
        },
        mounted() {
            this.getProducts('accessories')
        },
    }
</script>

<style scoped>
    .category_title {
        width: 100%;
        margin-top: 40px;
    }

    .category_title h2 {
        text-align: center;
    }

    .category {
        display: flex;
        margin-top: 40px;
        position: relative;
    }

    .filter_block {
        width: 20%;
    }

    .filter_block > h3 {
        padding-bottom: 15px;
        margin-bottom: 10px;
        border-bottom: 1px solid #cccccc;
        text-transform: uppercase;
    }

    .filter > h3 {
        margin-top: 40px;
        padding-bottom: 15px;
        margin-bottom: 10px;
        border-bottom: 1px solid #cccccc;
        text-transform: uppercase;
    }

    .category_link {
        display: flex;
        justify-content: space-between;
        padding: 7px 0;
        cursor: pointer;
    }

    .category_link p:hover {
        color: #929292;
        transition: color 0.3s ease;
    }

    .category_link_accordion {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
    }

    .category_link_accordion > a {
        padding: 7px 0;
        text-decoration: none;
        color: #101010;
    }

    .category_link_accordion > a:hover {
        color: #929292;
        transition: color 0.3s ease;
    }

    .filter_nav {
        padding-bottom: 10px;
        border-bottom: 1px solid #cccccc;
    }
</style>