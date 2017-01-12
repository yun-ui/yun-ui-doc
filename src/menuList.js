export default [
    {
        title: '关于yunui',
        secondary: 'About',
        routePath: 'about',
        subMenu: [],
        component: resolve => require(['./documents/startup/about.md'], resolve)
    },
    {
        title: '快速上手',
        secondary: 'Quick Start',
        routePath: 'quickstart',
        subMenu: [],
        component: resolve => require(['./documents/startup/quickstart.md'], resolve)
    },
    {
        title: '更新日志',
        secondary: 'Changelog',
        routePath: 'changelog',
        subMenu: [],
        component: resolve => require(['./documents/startup/changelog.md'], resolve)
    },
    {
        title: '基础样式',
        secondary: 'Basic CSS',
        routePath: 'basic',
        subMenu: [
            {
                title: '颜色',
                secondary: 'Color',
                routePath: 'color',
                component: resolve => require(['./documents/style/color.md'], resolve)
            },
            {
                title: '布局',
                secondary: 'Layout',
                routePath: 'layout',
                component: resolve => require(['./documents/style/layout.md'], resolve)
            },
            {
                title: '状态页',
                secondary: 'StatePage',
                routePath: 'statePage',
                component: resolve => require(['./documents/style/statepage.md'], resolve)
            },
            {
                title: '文字排版',
                secondary: 'Typography',
                routePath: 'typography',
                component: resolve => require(['./documents/style/typography.md'], resolve)
            },
            {
                title: '辅助类',
                secondary: 'Utility',
                routePath: 'utility',
                component: resolve => require(['./documents/style/utility.md'], resolve)
            }
        ]
    },
    {
        title: 'CSS组件',
        secondary: 'Basic component',
        routePath: 'component',
        subMenu: [
            {
                title: '徽章',
                secondary: 'Badge',
                routePath: 'badge',
                component: resolve => require(['yun-ui/packages/badge/README.md'], resolve)
            },
            {
                title: '按钮',
                secondary: 'Button',
                routePath: 'button',
                component: resolve => require(['yun-ui/packages/button/README.md'], resolve)
            },
            {
                title: '按钮组',
                secondary: 'Button Group',
                routePath: 'buttonGroup',
                component: resolve => require(['yun-ui/packages/buttonGroup/README.md'], resolve)
            },
            {
                title: '列表',
                secondary: 'List',
                routePath: 'list',
                component: resolve => require(['yun-ui/packages/listItem/README.md'], resolve)
            },
            {
                title: '顶部导航',
                secondary: 'Navbar',
                routePath: 'navbar',
                component: resolve => require(['yun-ui/packages/navbar/README.md'], resolve)
            },
            {
                title: '底部导航',
                secondary: 'Tabbar',
                routePath: 'tabbar',
                component: resolve => require(['yun-ui/packages/tabbar/README.md'], resolve)
            }
        ]
    },
    {
        title: 'JS 组件',
        secondary: 'JS Component',
        routePath: 'dynamiccomponent',
        subMenu: [
            {
                title: '操作面板',
                secondary: 'Action Sheet',
                routePath: 'actionSheet',
                component: resolve => require(['yun-ui/packages/actionSheet/README.md'], resolve)
            },
            {
                title: '加载',
                secondary: 'Loading',
                routePath: 'loading',
                component: resolve => require(['yun-ui/packages/loading/README.md'], resolve)
            },
            {
                title: '弹窗',
                secondary: 'Popup',
                routePath: 'popup',
                component: resolve => require(['yun-ui/packages/popup/README.md'], resolve)
            },
            {
                title: '搜索',
                secondary: 'Search',
                routePath: 'search',
                component: resolve => require(['yun-ui/packages/search/README.md'], resolve)
            },
            {
                title: '提示',
                secondary: 'Toast',
                routePath: 'toast',
                component: resolve => require(['yun-ui/packages/toast/README.md'], resolve)
            }
        ]
    },
    {
        title: '表单组件',
        secondary: 'Form component',
        routePath: 'form',
        subMenu: [
            {
                title: '复选框',
                secondary: 'Checkbox',
                routePath: 'checkbox',
                component: resolve => require(['yun-ui/packages/checkbox/README.md'], resolve)
            },
            {
                title: '计数器',
                secondary: 'Counter',
                routePath: 'counter',
                component: resolve => require(['yun-ui/packages/counter/README.md'], resolve)
            },
            {
                title: '单行输入框',
                secondary: 'Input',
                routePath: 'input',
                component: resolve => require(['yun-ui/packages/input/README.md'], resolve)
            },
            {
                title: '单选框',
                secondary: 'Radio',
                routePath: 'radio',
                component: resolve => require(['yun-ui/packages/radio/README.md'], resolve)
            },
            {
                title: '开关',
                secondary: 'Switch',
                routePath: 'switch',
                component: resolve => require(['yun-ui/packages/switch/README.md'], resolve)
            },
            {
                title: '多行输入框',
                secondary: 'Textarea',
                routePath: 'textarea',
                component: resolve => require(['yun-ui/packages/textarea/README.md'], resolve)
            }
        ]
    }
]
