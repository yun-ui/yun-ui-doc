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
            component: parent.component
        })
    }
    parent.subMenu.map(child => {
        docsRoutes.push({
            path: `${parent.routePath}/${child.routePath}`,
            component: child.component
        })
    })
})

const routes = [
    {
        path: '/',
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

export default new VueRouter({
    component: Root,
    routes,
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active'
})
