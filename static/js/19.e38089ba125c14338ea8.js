webpackJsonp([19,25],{60:function(t,e,n){var h,a,c=n(105);a=h=h||{},"object"!=typeof h.default&&"function"!=typeof h.default||(a=h=h.default),"function"==typeof a&&(a=a.options),a.render=c.render,a.staticRenderFns=c.staticRenderFns,t.exports=h},105:function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("section",[t._h("h1",["动作面板 ActionSheet"])," ",t._h("p",["创建可交互的弹出动作面板，显示在屏幕下方，可填入分享、列表项、表单项的元素。"])," ",t._h("h3",["使用场景"])," ",t._h("p",["常见用于分享网页、发送文件、弹出型选择、弹出型勾选框等。"])," ",t._h("h3",["引入"])," ",t._h("pre",[t._h("code",{staticClass:"language-javascript"},[t._h("span",{staticClass:"hljs-keyword"},["import"])," Vue ",t._h("span",{staticClass:"hljs-keyword"},["from"])," ",t._h("span",{staticClass:"hljs-string"},["'vue'"]),"\n",t._h("span",{staticClass:"hljs-keyword"},["import"])," {ActionSheet} ",t._h("span",{staticClass:"hljs-keyword"},["from"])," ",t._h("span",{staticClass:"hljs-string"},["'yun-ui'"]),"\n",t._h("span",{staticClass:"hljs-keyword"},["import"])," ",t._h("span",{staticClass:"hljs-string"},["'yun-ui/dist/yun/ActionSheet/index.css'"]),"\n\nVue.component(ActionSheet.name, ActionSheet)\n"])])," ",t._h("h3",["代码示例"])," ",t._h("pre",[t._h("code",{staticClass:"language-javascript"},['<template>\n    <!-- 创建一个用于分享的弹出面板 -->\n    <y-action-sheet type="panel" panelTitle="分享到" :actionSheetItem="actionSheetPanelItem"\n                @maskClicked="maskClicked" :show="showActionPanel" @cancel="maskClicked">\n    </y-action-sheet>\n    <!-- 创建一个列表型的弹出面板 -->\n    <y-action-sheet type="list" @maskClicked="maskClicked" :show="showActionList"\n                @cancel="maskClicked" :actionSheetItem="actionSheetPanelItem">\n    </y-action-sheet>\n    <!-- 创建一个含表单的弹出面板 -->\n    <y-action-sheet type="checkbox" @maskClicked="maskClicked" @confirm="maskClicked" @change="actionSheetChange"\n                @cancel="maskClicked" :show="showActionCheckbox" :actionSheetItem="actionSheetCheckboxItem">\n    </y-action-sheet>\n</template>\n<script>\nexport default {\n    props: {},\n    data () {\n        return {\n            actionSheetPanelItem: [\n                {\n                    title: \'同事圈\',\n                    icon: require(\'../assets/placeholder-figure.png\'),\n                    callback: this.actionItemClick\n                },\n                {\n                    title: \'收藏\',\n                    icon: require(\'../assets/placeholder-figure.png\'),\n                    callback: this.actionItemClick\n                }\n            ],\n            actionSheetCheckboxItem: [\n                {\n                    title: \'上传到电脑\',\n                    checked: true,\n                    value: \'upload\',\n                    icon: require(\'../assets/placeholder-figure.png\'),\n                    callback: this.actionItemClick\n                },\n                {\n                    title: \'转发\',\n                    icon: require(\'../assets/placeholder-figure.png\'),\n                    callback: this.actionItemClick\n                }\n            ],\n            showActionPanel: false,\n            showActionList: false,\n            showActionCheckbox: false\n        }\n    },\n    methods: {\n        maskClicked: function () {\n            console.log(\'mask clicked\')\n            this.showActionList = false\n            this.showActionCheckbox = false\n            this.showActionPanel = false\n            this.showPop = false\n        },\n        checkboxChange: function (value, status) {\n            console.log(value)\n            console.log(status)\n        },\n        actionItemClick: function () {\n            console.log(\'action item clicked\')\n        },\n        actionSheetChange: function (value, status) {\n            console.log(value，status)\n        }\n    }\n}\n</script>\n'])])," ",t._h("h3",["API"])," ",t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["参数"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["可选值"])," ",t._h("th",["默认值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["type"])," ",t._h("td",["弹出面板类型"])," ",t._h("td",["String"])," ",t._h("td",["panel,list,checkbox"])," ",t._h("td")])," ",t._h("tr",[t._h("td",["panelTitle"])," ",t._h("td",["panel类型时的标题"])," ",t._h("td",["String"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["actionSheetItem"])," ",t._h("td",["传入的菜单项，每一项为一个对象"])," ",t._h("td",["Array"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["show"])," ",t._h("td",["此actionSheet是否显示"])," ",t._h("td",["Boolean"])," ",t._h("td",["true,false"])," ",t._h("td",["false"])])," ",t._h("tr",[t._h("td",["change"])," ",t._h("td",["面板为checkbox类型时，复选框变化时的回调函数，第一个参数为复选框变化后的值，第二个参数为复选框的label值"])," ",t._h("td",["Function"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["maskClicked"])," ",t._h("td",["点击蒙层时的回调函数,用于控制切换actionSheet的显隐状态"])," ",t._h("td",["Function"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["cancel"])," ",t._h("td",["点击X按钮或点击取消按钮时的回调函数"])," ",t._h("td",["Function"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["confirm"])," ",t._h("td",["点击确定时的回调函数"])," ",t._h("td",["Function"])," ",t._h("td")," ",t._h("td")])])])," ",t._h("h3",["actionSheetItem"])," ",t._h("p",["actionSheetItem内各个项需要传入的参数说明："])," ",t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["参数"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["可选值"])," ",t._h("th",["默认值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["title"])," ",t._h("td",["通用，菜单项的标题"])," ",t._h("td",["String"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["icon"])," ",t._h("td",["通用，菜单项的图标"])," ",t._h("td",["String"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["callback"])," ",t._h("td",["通用，菜单项点击后的事件回调，参数为当前菜单项"])," ",t._h("td",["Function"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["value"])," ",t._h("td",["checkbox类型专用，用于区分不同菜单项"])," ",t._h("td",["String"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["checked"])," ",t._h("td",["checkbox类型专用，菜单项默认是否勾选"])," ",t._h("td",["Boolean"])," ",t._h("td",["true,false"])," ",t._h("td",["false"])])])])])}]}},117:function(t,e,n){t.exports=n(60)}});
//# sourceMappingURL=19.e38089ba125c14338ea8.js.map