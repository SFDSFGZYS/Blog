import "@babel/polyfill"
import './styles/common.scss'
import Vue from 'vue'
import App from './app.vue'

new Vue({
    el: '#app',
    render: h => h(App),
})
