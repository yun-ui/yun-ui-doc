import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    Root,
    Home,
    Download,
    Docs
} from 'pages'

Vue.use(VueRouter)

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
        children: [
            {
                path: 'button',
                component: resolve => require(['docs/README.md'], resolve)
            }
        ]
    }
]

export default new VueRouter({
    component: Root,
    routes,
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active'
})
