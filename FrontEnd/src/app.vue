<template>
    <!-- <router-view /> -->
    <div>hello world !</div>
</template>

<script>
import { testApi } from "./api/test";
import { login } from "./api/login";

export default {
    created() {
        login().then(res=>console.log(res))
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
