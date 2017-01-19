webpackJsonp([17,25],{62:function(t,n,s){var h,a,o=s(107);a=h=h||{},"object"!=typeof h.default&&"function"!=typeof h.default||(a=h=h.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=h},107:function(t,n){t.exports={render:function(){var t=this;return t._h("section",[t._h("h1",["Popup"])," ",t._h("p",["弹出窗。"])," ",t._h("h3",["使用场景"])," ",t._h("p",["常用于 操作提醒 和 确认操作，另外可作为宣传弹窗用。"])," ",t._h("h3",["引入"])," ",t._m(0)," ",t._h("h3",["代码示例"])," ",t._h("p",["确认类弹窗 （标题 + 文本内容）"])," ",t._m(1)," ",t._h("p",["输入类弹窗 （标题 + 单行/多行输入框）"])," ",t._m(2)," ",t._h("p",["按钮弹窗 （标题 + 文本 + 按钮）"])," ",t._m(3)," ",t._h("p",["宣传弹窗 （标题 + 列表 + 封面图片）"])," ",t._m(4)," ",t._h("h3",["API"])," ",t._m(5)," ",t._h("h3",["textList"])," ",t._h("p",["textList内各个项需要传入的参数说明："])," ",t._m(6)," ",t._h("h3",["Slot"])," ",t._m(7)," ",t._h("blockquote",[t._h("p",["可嵌入ButtonGroup组件使用，ButtonGroup使用方法请参考",t._h("a",{attrs:{href:"./buttonGroup"}},["ButtonGroup文档"])])])])},staticRenderFns:[function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"language-javascript"},[t._h("span",{staticClass:"hljs-keyword"},["import"])," Vue ",t._h("span",{staticClass:"hljs-keyword"},["from"])," ",t._h("span",{staticClass:"hljs-string"},["'vue'"]),"\n",t._h("span",{staticClass:"hljs-keyword"},["import"])," {Popup} ",t._h("span",{staticClass:"hljs-keyword"},["from"])," ",t._h("span",{staticClass:"hljs-string"},["'yun-ui'"]),"\n",t._h("span",{staticClass:"hljs-keyword"},["import"])," ",t._h("span",{staticClass:"hljs-string"},["'yun-ui/dist/yun/Popup/index.css'"]),"\n\nVue.component(Popup.name, Popup)\n"])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"language-javascript"},["<y-popup title=",t._h("span",{staticClass:"hljs-string"},['"标题"'])," content=",t._h("span",{staticClass:"hljs-string"},['"文本内容"']),'>\n    <y-button-group slot="buttonGroup">\n        <y-tab-item title="取消"></y-tab-item>\n        <y-tab-item class="active" title="确认"></y-tab-item>\n    </y-button-group>\n</y-popup>\n'])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"language-javascript"},["<y-popup title=",t._h("span",{staticClass:"hljs-string"},['"标题"'])," input=",t._h("span",{staticClass:"hljs-string"},['"input"']),'>\n    <y-button-group slot="buttonGroup">\n        <y-tab-item title="取消"></y-tab-item>\n        <y-tab-item class="active" title="确定"></y-tab-item>\n    </y-button-group>\n</y-popup>\n'])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"language-javascript"},["<y-popup title=",t._h("span",{staticClass:"hljs-string"},['"标题"'])," content=",t._h("span",{staticClass:"hljs-string"},['"文本内容"']),'>\n    <y-button size="large" type="normal" slot="button">文本</y-button>\n    <y-button size="large" type="normal" disabled slot="button">文本</y-button>\n    <y-button-group slot="buttonGroup">\n        <y-tab-item title="知道了"></y-tab-item>\n    </y-button-group>\n</y-popup>\n'])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"language-javascript"},["<y-popup title=",t._h("span",{staticClass:"hljs-string"},['"标题"'])," :textList=",t._h("span",{staticClass:"hljs-string"},['"textListArray"']),'>\n    <img src="../assets/popup-cover.png" slot="cover"/>\n    <y-button-group slot="buttonGroup">\n        <y-tab-item title="知道了"></y-tab-item>\n        <y-tab-item class="active" title="了解更多"></y-tab-item>\n    </y-button-group>\n</y-popup>\n'])])},function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["参数"])," ",t._h("th",["描述"])," ",t._h("th",["类型"])," ",t._h("th",["可选值"])," ",t._h("th",["默认值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["title"])," ",t._h("td",["标题文字"])," ",t._h("td",["String"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["content"])," ",t._h("td",["内容文本"])," ",t._h("td",["String"])," ",t._h("td")," ",t._h("td")])," ",t._h("tr",[t._h("td",["input"])," ",t._h("td",["输入框类型"])," ",t._h("td",["String"])," ",t._h("td",["input,textarea"])," ",t._h("td")])," ",t._h("tr",[t._h("td",["textList"])," ",t._h("td",["输入文字列表项，每一项为对象"])," ",t._h("td",["Array"])," ",t._h("td")," ",t._h("td")])])])},function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["参数"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["可选值"])," ",t._h("th",["默认值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["content"])," ",t._h("td",["输入的文字列表项的值"])," ",t._h("td",["String"])," ",t._h("td")," ",t._h("td")])])])},function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["参数"])," ",t._h("th",["描述"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["cover"])," ",t._h("td",["封面图片"])])," ",t._h("tr",[t._h("td",["button"])," ",t._h("td",["加入按钮"])])," ",t._h("tr",[t._h("td",["buttonGroup"])," ",t._h("td",["在底部加入按钮组"])])])])}]}},127:function(t,n,s){t.exports=s(62)}});
//# sourceMappingURL=17.17e1676f073779439062.js.map