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
        title: '安装',
        secondary: 'Install',
        routePath: 'install',
        subMenu: [],
        component: resolve => require(['./documents/startup/install.md'], resolve)
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
                title: '辅助类',
                secondary: 'Utility',
                routePath: 'utility',
                component: resolve => require(['./documents/style/utility.md'], resolve)
            },
            {
                title: '文字排版',
                secondary: 'Typography',
                routePath: 'typography',
                component: resolve => require(['./documents/style/typography.md'], resolve)
            },
            {
                title: '状态页',
                secondary: 'StatePage',
                routePath: 'statePage',
                component: resolve => require(['./documents/style/statepage.md'], resolve)
            }
        ]
    },
    {
        title: '基础组件',
        secondary: 'Basic component',
        routePath: 'component',
        subMenu: [
            {
                title: '顶部导航',
                secondary: 'Navbar',
                routePath: 'navbar',
                component: resolve => require(['./documents/basicComponent/navbar.md'], resolve)
            },
            {
                title: '底部导航',
                secondary: 'Tabbar',
                routePath: 'tabbar',
                component: resolve => require(['./documents/basicComponent/tabbar.md'], resolve)
            },
            {
                title: '按钮',
                secondary: 'Button',
                routePath: 'button',
                component: resolve => require(['./documents/basicComponent/button.md'], resolve)
            },
            {
                title: '按钮组',
                secondary: 'Button Group',
                routePath: 'buttongroup',
                component: resolve => require(['./documents/basicComponent/buttongroup.md'], resolve)
            },
            {
                title: '列表',
                secondary: 'List',
                routePath: 'list',
                component: resolve => require(['./documents/basicComponent/list.md'], resolve)
            },
            {
                title: '徽章',
                secondary: 'Badge',
                routePath: 'badge',
                component: resolve => require(['./documents/basicComponent/badge.md'], resolve)
            }
        ]
    },
    {
        title: 'JS 组件',
        secondary: 'JS Component',
        routePath: 'dynamiccomponent',
        subMenu: [
            {
                title: '加载',
                secondary: 'Loading',
                routePath: 'loading',
                component: resolve => require(['./documents/jsComponent/loading.md'], resolve)
            },
            {
                title: '提示',
                secondary: 'Toast',
                routePath: 'toast',
                component: resolve => require(['./documents/jsComponent/toast.md'], resolve)
            },
            {
                title: '弹窗',
                secondary: 'Popup',
                routePath: 'popup',
                component: resolve => require(['./documents/jsComponent/popup.md'], resolve)
            },
            {
                title: '操作面板',
                secondary: 'Action Sheet',
                routePath: 'actionsheet',
                component: resolve => require(['./documents/jsComponent/actionsheet.md'], resolve)
            },
            {
                title: '搜索',
                secondary: 'Search',
                routePath: 'search',
                component: resolve => require(['./documents/jsComponent/search.md'], resolve)
            }
        ]
    },
    {
        title: '表单组件',
        secondary: 'Form component',
        routePath: 'form',
        subMenu: [
            {
                title: '表单项',
                secondary: 'Form Item',
                routePath: 'formitem',
                component: resolve => require(['./documents/form/formitem.md'], resolve)
            }
        ]
    }
]
