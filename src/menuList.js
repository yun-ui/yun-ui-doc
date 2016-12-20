export default [
    {
        title: '更新日志',
        subMenu: [],
        routePath: 'changelog',
        component: resolve => require(['docs/README.md'], resolve)
    },
    {
        title: '没有子集没路由',
        subMenu: [],
        routePath: 'cs',
        component: resolve => require(['docs/README2.md'], resolve)
    },
    {
        title: '没有子集有路由',
        subMenu: [],
        routePath: 'b',
        component: resolve => require(['docs/README1.md'], resolve)
    },
    {
        title: '基础组件',
        routePath: 'basic',
        subMenu: [
            {
                title: '布局',
                routePath: 'layout',
                component: resolve => require(['docs/README.md'], resolve)
            },
            {
                title: '颜色',
                routePath: 'color',
                component: resolve => require(['docs/README.md'], resolve)
            },
            {
                title: '字体',
                routePath: 'font',
                component: resolve => require(['docs/README.md'], resolve)
            },
            {
                title: '图标',
                routePath: 'icons',
                component: resolve => require(['docs/README.md'], resolve)
            },
            {
                title: '按钮',
                routePath: 'buttons',
                component: resolve => require(['docs/README.md'], resolve)
            }
        ]
    }
]
