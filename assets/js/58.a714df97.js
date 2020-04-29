(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{305:function(t,r,s){"use strict";s.r(r);var e=s(28),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端安全"}},[t._v("#")]),t._v(" 前端安全")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c6d142151882503b3271f4b",target:"_blank",rel:"noopener noreferrer"}},[t._v("XSS攻击与CSRF攻击"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5bc009996fb9a05d0a055192",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何防止CSRF攻击"),s("OutboundLink")],1),t._v(" 美团技术团队")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5bad9140e51d450e935c6d64",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何防止XSS攻击"),s("OutboundLink")],1),t._v(" 美团技术团队")])]),t._v(" "),s("h2",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),s("p",[t._v("XSS(cross site scripting), 跨站脚本攻击。web中很多信息是不可信的")]),t._v(" "),s("ul",[s("li",[t._v("用户自己填写的内容")]),t._v(" "),s("li",[t._v("第三方连接")]),t._v(" "),s("li",[t._v("URL参数")]),t._v(" "),s("li",[t._v("POST参数")]),t._v(" "),s("li",[t._v("Referer(可能来自不可信的来源)")]),t._v(" "),s("li",[t._v("Cookie(可能来自其他子域注入)")])]),t._v(" "),s("h3",{attrs:{id:"常见的漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的漏洞"}},[t._v("#")]),t._v(" 常见的漏洞")]),t._v(" "),s("ul",[s("li",[t._v("在 HTML 中内嵌的文本中，恶意内容以 script 标签形成注入。")]),t._v(" "),s("li",[t._v("在内联的 JavaScript 中，拼接的数据突破了原本的限制（字符串，变量，方法名等）。")]),t._v(" "),s("li",[t._v("在标签属性中，恶意内容包含引号，从而突破属性值的限制，注入其他属性或者标签。")]),t._v(" "),s("li",[t._v("在标签的 href、src 等属性中，包含 javascript: 等可执行代码。")]),t._v(" "),s("li",[t._v("在 onload、onerror、onclick 等事件中，注入不受控制代码。")]),t._v(" "),s("li",[t._v('在 style 属性和标签中，包含类似 background-image:url("javascript:..."); 的代码（新版本浏览器已经可以防范）。')]),t._v(" "),s("li",[t._v("在 style 属性和标签中，包含类似 expression(...) 的 CSS 表达式代码（新版本浏览器已经可以防范）。")])]),t._v(" "),s("h3",{attrs:{id:"反射型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),s("p",[t._v("反射型XSS，也称为非持久性XSS。发生请求时，XSS代码出现请求URL中，作为参数体检到服务器，")]),t._v(" "),s("h3",{attrs:{id:"存储型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),s("p",[t._v("存储型XSS，也称持久性XSS。攻击者将恶意代码永久存储到目标网站，例如数据库，消息评论，访问日志。")]),t._v(" "),s("h3",{attrs:{id:"dom型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom型"}},[t._v("#")]),t._v(" DOM型")]),t._v(" "),s("p",[t._v("DOM型取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞")]),t._v(" "),s("h3",{attrs:{id:"防止xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防止xss攻击"}},[t._v("#")]),t._v(" 防止XSS攻击")]),t._v(" "),s("ul",[s("li",[t._v("HttpOnly 在 cookie 中设置 HttpOnly 属性后，js脚本将无法读取到 cookie 信息。")]),t._v(" "),s("li",[t._v("输入过滤：规定的格式长度")]),t._v(" "),s("li",[t._v("转义")]),t._v(" "),s("li",[t._v("白名单")]),t._v(" "),s("li",[t._v("永远不要把不受信任的数据防止允许JavaScript的位置\n"),s("ul",[s("li",[s("code",[t._v("script")]),t._v("标签内")]),t._v(" "),s("li",[s("code",[t._v("style")]),t._v(" 属性名")]),t._v(" "),s("li",[t._v("标签名")]),t._v(" "),s("li",[s("code",[t._v("\x3c!-- --\x3e")]),t._v(" HTML注释内")]),t._v(" "),s("li",[t._v("style 标签内")])])]),t._v(" "),s("li",[t._v("向元素中插入不受信任的HTML代码之前一定要进行转义")]),t._v(" "),s("li",[t._v("向元素的属性插入不受信任的代码之前一定要转义")]),t._v(" "),s("li",[t._v("将用户输入的特殊字符进行转义(&, <, >, \", ', /)")]),t._v(" "),s("li",[t._v("限制用户输入的内容,长度")])]),t._v(" "),s("h3",{attrs:{id:"转义库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义库"}},[t._v("#")]),t._v(" 转义库")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/leizongmin/js-xss/blob/master/README.zh.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-xss"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"csrf攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击"}},[t._v("#")]),t._v(" CSRF攻击")]),t._v(" "),s("p",[t._v("CSRF(cross site request forgery) 跨站请求伪造。")]),t._v(" "),s("h3",{attrs:{id:"常见攻击手段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见攻击手段"}},[t._v("#")]),t._v(" 常见攻击手段")]),t._v(" "),s("p",[t._v("表单提交")]),t._v(" "),s("p",[t._v("链接型")]),t._v(" "),s("h3",{attrs:{id:"如何防范csrf攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防范csrf攻击"}},[t._v("#")]),t._v(" 如何防范CSRF攻击")]),t._v(" "),s("ul",[s("li",[t._v("Referer check 请求来源进行限制")]),t._v(" "),s("li",[t._v("token 使用token验证的CSRF防御。 访问页面时，token随机生成，页面提交的请求携带Token，服务器验证Token")])]),t._v(" "),s("h2",{attrs:{id:"cfrf与xss区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cfrf与xss区别"}},[t._v("#")]),t._v(" CFRF与XSS区别")]),t._v(" "),s("p",[t._v("XSS是代码注入问题，CSRF是HTTP问题。发送HTTP请求时自动带上cookie，一般网站的session都存在cookie里面。")])])}),[],!1,null,null,null);r.default=v.exports}}]);