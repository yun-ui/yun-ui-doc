webpackJsonp([4,25],{75:function(s,t,a){var l,c,e=a(90);c=l=l||{},"object"!=typeof l.default&&"function"!=typeof l.default||(c=l=l.default),"function"==typeof c&&(c=c.options),c.render=e.render,c.staticRenderFns=e.staticRenderFns,s.exports=l},90:function(s,t){s.exports={render:function(){var s=this;return s._h("section",[s._h("h1",["布局 Layout"])," ",s._h("p",["YunUI 提供了一套简单的基于flex布局的栅格系统。 你可以通过引用预定好的类来达到想要的布局。"])," ",s._h("h3",["计算规则"])," ",s._h("blockquote",[s._h("p",["等分网格： 每一个 ",s._h("code",[".yun-flex-container"])," 控制一个 ",s._h("code",["行"]),"，",s._h("code",[".yun-flex-item"])," 就是每一个行中的 ",s._h("code",["列"]),"，这些列等宽。"])])," ",s._h("blockquote",[s._h("p",["栅格： 每一个 ",s._h("code",["yun-grid-container"])," 控制一个 ",s._h("code",["行"]),"，",s._h("code",["yun-grid-col-*"])," 控制每一行中的 ",s._h("code",["列宽"])," 。 ",s._h("code",["*"])," 值为 1-5。"])])," ",s._m(0)," ",s._h("h3",["代码示例"])," ",s._h("p",["等分网格 AVG Grid"])," ",s._m(1)," ",s._h("p",["栅格 Grid"])," ",s._m(2)])},staticRenderFns:[function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-css"},["//示例 1行3列，1：2：1 的列比例\n\n<",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-container"]),'">\n    <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-1"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">1</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    <",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-2"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">2</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    <",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-1"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">1</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n</",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-css"},["<",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-flex-container"]),'">\n    <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-flex-item"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-flex-content"]),'">1/2</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    <",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-flex-item"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-flex-content"]),'">1/2</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n</",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-css"},["<",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-container"]),'">\n    <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-1"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">1</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    <",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-2"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">2</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    <",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-3"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">3</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    <",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-4"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">4</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    <",s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-grid-col-5"]),'">\n        <',s._h("span",{staticClass:"hljs-selector-tag"},["div"])," ",s._h("span",{staticClass:"hljs-selector-tag"},["class"]),'="',s._h("span",{staticClass:"hljs-selector-tag"},["yun-gird-content"]),'">5</',s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n    </",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n</",s._h("span",{staticClass:"hljs-selector-tag"},["div"]),">\n"])])}]}},138:function(s,t,a){s.exports=a(75)}});
//# sourceMappingURL=4.f40870008bb92867fb0b.js.map