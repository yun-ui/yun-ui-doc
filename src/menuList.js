export default [
    {
        title: '更新日志',
        secondary: 'Update Log',
        subMenu: [],
        routePath: 'changelog',
        component: resolve => require(['docs/README3.md'], resolve)
    },
    {
        title: '没有子集没路由',
        secondary: 'Update Log',
        subMenu: [],
        routePath: 'cs',
        component: resolve => require(['docs/README2.md'], resolve)
    },
    {
        title: '没有子集有路由',
        secondary: 'Update Log',
        subMenu: [],
        routePath: 'b',
        component: resolve => require(['docs/README1.md'], resolve)
    },
    {
        title: '基础组件',
        secondary: 'Basic CSS',
        routePath: 'basic',
        subMenu: [
            {
                title: '布局',
                secondary: 'Layout',
                routePath: 'layout',
                component: resolve => require(['docs/README3.md'], resolve)
            },
            {
                title: '颜色',
                secondary: 'Color',
                routePath: 'color',
                component: resolve => require(['docs/README3.md'], resolve)
            },
            {
                title: '字体',
                secondary: 'Update Log',
                routePath: 'font',
                component: resolve => require(['docs/README1.md'], resolve)
            },
            {
                title: '图标',
                secondary: 'Update Log',
                routePath: 'icons',
                component: resolve => require(['docs/README3.md'], resolve)
            },
            {
                title: '按钮',
                secondary: 'Update Log',
                routePath: 'buttons',
                component: resolve => require(['docs/README3.md'], resolve)
            }
        ]
    }
]
