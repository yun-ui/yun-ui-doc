import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    Root,
    Home,
    Download,
    Docs
} from 'pages'
import menuList from 'src/menuList'

Vue.use(VueRouter)

let docsRoutes = []
menuList.map(parent => {
    if (parent.component) {
        docsRoutes.push({
            path: parent.routePath,
            name: parent.routePath,
            component: parent.component
        })
    }
    parent.subMenu.map(child => {
        docsRoutes.push({
            path: `${parent.routePath}/${child.routePath}`,
            name: child.routePath,
            component: child.component
        })
    })
})

const routes = [
    {
        path: '/',
        redirect: to => {
            return `/docs/${docsRoutes[0].path}`
        },
        component: Home
    },
    {
        path: '/download',
        component: Download
    },
    {
        path: '/docs',
        component: Docs,
        children: docsRoutes
    }
]

const router = new VueRouter({
    component: Root,
    routes,
    base: __dirname,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    if (window.frames[0]) {
        window.frames[0].postMessage({redirectName: to.name}, '*')
    }
    next()
})

export default router
