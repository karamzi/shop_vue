<template>
    <div class="filter_nav">
        <div @click="showBallsCategory = !showBallsCategory" class="category_link">
            <p href="#">Шары</p>
            <div class="arrow-8"></div>
        </div>
        <div v-if="showBallsCategory" class="category_link_accordion">
            <router-link to="/balls?subcategory=Storm">Storm</router-link>
            <router-link to="/balls?subcategory=Hammer">Hammer</router-link>
            <router-link to="/balls?subcategory=Motive">Motive</router-link>
            <router-link to="/balls?subcategory=Track">Track</router-link>
        </div>
        <div @click="showBagsCategory = !showBagsCategory" class="category_link">
            <p href="#">Сумки</p>
            <div class="arrow-8"></div>
        </div>
        <div v-if="showBagsCategory" class="category_link_accordion">
            <p>Storm</p>
            <p>Hammer</p>
            <p>Motive</p>
            <p>Track</p>
        </div>
        <div @click="showShoesCategory = !showShoesCategory" class="category_link">
            <p href="#">Обувь</p>
            <div class="arrow-8"></div>
        </div>
        <div v-if="showShoesCategory" class="category_link_accordion">
            <p>Storm</p>
            <p>Hammer</p>
            <p>Motive</p>
            <p>Track</p>
        </div>
        <div @click="showAccessoriesCategory = !showAccessoriesCategory" class="category_link">
            <p href="#">Аксесуары</p>
            <div class="arrow-8"></div>
        </div>
        <div v-if="showAccessoriesCategory" class="category_link_accordion">
            <p>Storm</p>
            <p>Hammer</p>
            <p>Motive</p>
            <p>Track</p>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "CategoryAccordion",
        data() {
            return {
                showBallsCategory: false,
                showBagsCategory: false,
                showShoesCategory: false,
                showAccessoriesCategory: false,
            }
        },
        methods: mapActions(['getProducts']),
    }
</script>

<style scoped>
    .category_link {
        display: flex;
        justify-content: space-between;
        padding: 7px 0;
    }

    .category_link p {
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