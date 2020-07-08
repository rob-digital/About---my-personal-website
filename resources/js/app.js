require('./bootstrap');

import router from './routes'
import VueRouter from 'vue-router'
// import Vuetify from 'vuetify'

// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'

window.Vue = require('vue');

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('Index', require('./Index.vue').default)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);


Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuelidate)


const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
          },
    }),
});
