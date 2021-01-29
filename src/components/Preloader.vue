<template>
    <div class="preloader">
        <img src="@/assets/img/preloader.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "Preloader"
    }
</script>

<style scoped>
    .preloader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>