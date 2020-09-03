import "@babel/polyfill"

import Vue from 'vue'
import App from './app.vue'

import '@/api/request'

import '@/mock'

import '@/styles/common.scss'

import router from '@/router'

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
