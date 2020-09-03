import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */'@/views/home/index.vue')
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */'@/views/login/login.vue')
    },
]

export default new VueRouter({
    routes
})