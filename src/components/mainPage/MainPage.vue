<template>
    <div>
        <Products/>
        <PopularProducts/>
    </div>
</template>

<script>
    import Products from "@/components/mainPage/Products"
    import PopularProducts from "@/components/mainPage/PopularProducts"

    export default {
        name: "MainPage",
        components: {
            Products,
            PopularProducts,
        }
    }
</script>

<style scoped>

</style>