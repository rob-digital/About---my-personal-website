import VueRouter from 'vue-router'
import MainPage from './views/MainPage'
import ExampleComponent from './components/ExampleComponent'

const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'main-page'
    },
    {
        path: '/example',
        component: ExampleComponent,
        name: 'example-component'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

