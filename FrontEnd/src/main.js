import Vue from 'vue';
import App from './app.vue';
import { print } from './store';
print()

console.log(33333);


new Vue({
    el: '#app',
    render: (h) => h(App)
});
