<template>
    <!-- <router-view /> -->
    <div>hello world !</div>
</template>

<script>
import { testApi } from "./api/test";

export default {
    created() {
        const data = {
            name: 'zhi',
            password: '123456'
        }
        testApi(data)
    },
}
</script>

<style>
</style>
