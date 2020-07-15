import VueRouter from 'vue-router'
import MainLayout from './views/MainLayout'
import ExampleComponent from './components/ExampleComponent'

const routes = [
    {
        path: '/',
        component: MainLayout,
        name: 'main-layout'
    },
    {
        path: '/example',
        component: ExampleComponent,
        name: 'example-component'
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

