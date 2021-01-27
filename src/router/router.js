import Vue from 'vue'
import VueRouter from "vue-router"

import MainPage from "@/components/mainPage/MainPage"
import Bowls from "@/components/bowls/Bowls"
import Ball from "@/components/bowls/Ball"
import Bags from "@/components/Bags/Bags"
import Bag from "@/components/Bags/Bag"
import Shoes from "@/components/shoes/Shoes"
import CurrentShoes from "@/components/shoes/CurrentShoes"
import Accessories from "@/components/Accessories/Accessories"
import Accessory from "@/components/Accessories/Accessory"
import Cart from "@/components/cart/Cart"
import Order from "@/components/Order/Order"
import Training from "@/components/Training"


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        component: MainPage,
    }, {
        path: '/category/balls',
        component: Bowls,
    }, {
        path: '/ball/:id',
        component: Ball,
    }, {
        path: '/cart',
        component: Cart,
    }, {
        path: '/category/bags',
        component: Bags,
    }, {
        path: '/bag/:id',
        component: Bag,
    }, {
        path: '/category/shoes',
        component: Shoes,
    }, {
        path: '/Shoes/:id',
        component: CurrentShoes,
    }, {
        path: '/category/accessories',
        component: Accessories,
    }, {
        path: '/accessory/:id',
        component: Accessory,
    }, {
        path: '/order',
        component: Order,
    }, {
        path: '/training',
        component: Training,
    }
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})
