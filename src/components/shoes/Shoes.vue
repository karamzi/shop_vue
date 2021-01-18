<template>
    <section class="section_category">
        <div class="container">
            <div class="category_title">
                <h2>Сумки для боулинга</h2>
            </div>
            <div class="sort">

            </div>
            <div class="category">
                <div class="filter_block">
                    <h3>Каталог</h3>
                    <CategoryAccordion />
                    <div class="filter">
                        <h3>Фильтр</h3>
                    </div>
                </div>
                <ProductsItems />
            </div>
        </div>
    </section>
</template>

<script>
    import ProductsItems from "@/components/ProductsItems"
    import CategoryAccordion from "@/components/CategoryAccordion"

    export default {
        name: "Shoes",
        components: {CategoryAccordion, ProductsItems},
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
</style>