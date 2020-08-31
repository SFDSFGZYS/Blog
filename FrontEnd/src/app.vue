<template>
    <div>hello world!111</div>
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
body {
    color: #f00;
}
</style>
