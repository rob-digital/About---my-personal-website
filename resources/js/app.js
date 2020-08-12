require('./bootstrap');

import router from './routes'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import PrismicVue from 'prismic-vue';
import linkResolver from './prismic/link-resolver';
import storeDefinition from './store'

window.Vue = require('vue');

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('Index', require('./Index.vue').default)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuelidate)

Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver
  });

const store = new Vuex.Store(storeDefinition)

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
        },
          theme: {
            themes: {
              light: {
                main: '#fff',
                primary: '#363636', // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.lightBlue.darken4, // #3F51B5
                colorBrown: colors.brown.darken4,
                colorBlueDarken: colors.blueGrey.darken4,
                lightBg: colors.blueGrey.lighten5,
                textAccent: colors.red.darken1,
                contactColor: colors.blueGrey.lighten2,
                // footerColor: colors.grey.lighten1
              },
              dark: {
                main: colors.grey.darken4,
                primary: '#363636',
                colorBlueDarken: colors.blueGrey.darken4,
                lightBg: colors.blueGrey.darken3,
                textAccent: colors.yellow.accent2,
                contactColor: colors.grey.darken4
                // footerColor: colors.grey.darken3

              }
            },
          },
    }),
});
