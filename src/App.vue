<template>
    <div id="app">
        <Header />
        <router-view/>
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    import {mapActions} from 'vuex'

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
        },
        methods: mapActions(['getProducts']),
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html {
        height: 100%;
    }

    body {
        font-family: Roboto, Arial, sans-serif;
        min-width: 1170px;
    }

    .container {
        width: 100%;
        max-width: 1170px;
        min-width: 1170px;
        margin: 0 auto;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>
