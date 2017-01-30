import Vue from 'vue';
import VueResource from 'vue-resource'
import Counter from './Components/Counter.vue';

Vue.use(VueResource);

new Vue({
    el: '.vue',
    components: {
        Counter
    }
});