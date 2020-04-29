(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{296:function(a,s,e){"use strict";e.r(s);var t=e(28),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"脚本配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本配置文件"}},[a._v("#")]),a._v(" 脚本配置文件")]),a._v(" "),e("p",[a._v("常常会在项目中看到一些配置文件，脚本文件。例如 .sh, .yml, Makerfile")]),a._v(" "),e("h2",{attrs:{id:"_1-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-yaml"}},[a._v("#")]),a._v(" 1.YAML")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://yaml.org/spec/1.2/spec.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML"),e("OutboundLink")],1),a._v(", Yet Another Markup Language，用于编写配置文件。")]),a._v(" "),e("h3",{attrs:{id:"语法特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法特点"}},[a._v("#")]),a._v(" 语法特点")]),a._v(" "),e("ul",[e("li",[a._v("大小写敏感")]),a._v(" "),e("li",[a._v("缩进表示层级")]),a._v(" "),e("li",[a._v("空格缩进")]),a._v(" "),e("li",[a._v("相同层级的元素左侧对齐")])]),a._v(" "),e("h3",{attrs:{id:"数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[a._v("#")]),a._v(" 数据结构")]),a._v(" "),e("ul",[e("li",[a._v("对象")])]),a._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" myname\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("数组")])]),a._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" grren\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" yellow\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" black\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("ul",[e("li",[a._v("纯量\n"),e("ul",[e("li",[a._v("字符串 "),e("code",[a._v("str: '字符串'")])]),a._v(" "),e("li",[a._v("布尔值 "),e("code",[a._v("boolean: true")])]),a._v(" "),e("li",[a._v("整数   "),e("code",[a._v("num: 12")])]),a._v(" "),e("li",[a._v("浮点数 "),e("code",[a._v("number: 12.30")])]),a._v(" "),e("li",[a._v("Null "),e("code",[a._v("isSet: -")])]),a._v(" "),e("li",[a._v("时间 "),e("code",[a._v("iso8601: 2001-12-14t21:59:43.10-05:00")])]),a._v(" "),e("li",[a._v("日期 "),e("code",[a._v("date: 2020-02-2")])])])])]),a._v(" "),e("h3",{attrs:{id:"完善编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完善编辑器"}},[a._v("#")]),a._v(" 完善编辑器")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("yaml"),e("OutboundLink")],1),a._v(" vscode扩展，全面的YAML语言支持。支持JSON Schema 7及以下版本。")])]),a._v(" "),e("h2",{attrs:{id:"_2-makefile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-makefile"}},[a._v("#")]),a._v(" 2.Makefile")]),a._v(" "),e("p",[a._v("大型项目通常会有很多源文件需要同时编译，不同功能模块的文件放在不同的文件夹下。Makefile决定编译哪些文件，编译的顺序，是否需要重新编译。")]),a._v(" "),e("h3",{attrs:{id:"规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[a._v("#")]),a._v(" 规则")]),a._v(" "),e("div",{staticClass:"language-makefile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-makefile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("//target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 目标文件\n"),e("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("//prerequisites")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 依赖文件\n"),e("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("//command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 执行命令\n"),e("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("target  ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" prerequisites\ncommand\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[a._v("#")]),a._v(" 变量")]),a._v(" "),e("h3",{attrs:{id:"函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),e("h3",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("运行命令后，会按照GNUmakefile、makefile、Makefile顺序查找文件，也可显示规定makefile文件")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" mymakefile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);