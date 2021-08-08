import VueRouter from 'vue-router'
import MainLayout from './views/MainLayout'
import Upload from './views/Upload'
import Gallery from './views/Gallery'
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
    {
        path: '/upload',
        component: Upload,
        name: 'upload'
    },
    {
        path: '/gallery',
        component: Gallery,
        name: 'gallery'
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

