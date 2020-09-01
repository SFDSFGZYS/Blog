import "@babel/polyfill"

import Vue from 'vue'
import App from './app.vue'

import '@/mock'

import '@/styles/common.scss'

new Vue({
    el: '#app',
    render: h => h(App),
})
