export default [
    {
        title: '基础样式',
        secondary: 'Basic CSS',
        routePath: 'basic',
        subMenu: [
            {
                title: '颜色',
                secondary: 'Color',
                routePath: 'color',
                component: resolve => require(['./documents/README.md'], resolve)
            },
            {
                title: '布局',
                secondary: 'Layout',
                routePath: 'layout',
                component: resolve => require(['./documents/README.md'], resolve)
            },
            {
                title: '辅助类',
                secondary: 'Utility',
                routePath: 'utility',
                component: resolve => require(['./documents/README.md'], resolve)
            },
            {
                title: '文字排版',
                secondary: 'Typography',
                routePath: 'typography',
                component: resolve => require(['./documents/README.md'], resolve)
            },
            {
                title: '状态页',
                secondary: 'StatePage',
                routePath: 'statePage',
                component: resolve => require(['./documents/README.md'], resolve)
            }
        ]
    },
    {
        title: '基础组件',
        secondary: 'Basic component',
        routePath: 'component',
        subMenu: [
            {
                title: 'Navbar',
                secondary: 'Navbar',
                routePath: 'navbar',
                component: resolve => require(['./documents/README.md'], resolve)
            },
            {
                title: 'tabbar',
                secondary: 'Tabbar',
                routePath: 'tabbar',
                component: resolve => require(['./documents/README.md'], resolve)
            },
            {
                title: '按钮',
                secondary: 'Button',
                routePath: 'button',
                component: resolve => require(['./documents/README.md'], resolve)
            },
            {
                title: '按钮组',
                secondary: 'Button Group',
                routePath: 'buttongroup',
                component: resolve => require(['./documents/README.md'], resolve)
            }
        ]
    },
    {
        title: '表单组件',
        secondary: 'Form component',
        routePath: 'form',
        subMenu: [
            {
                title: 'Cell',
                secondary: 'Cell',
                routePath: 'cell',
                component: resolve => require(['./documents/README.md'], resolve)
            }
        ]
    }
]
