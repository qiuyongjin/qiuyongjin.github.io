import{_ as s,r as n,o as t,a as r,b as e,d as o,F as l,c,e as d}from"./app.60b2f4e8.js";const i={},h=c(`<h1 id="\u751F\u6210\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u7B7E\u540D" aria-hidden="true">#</a> \u751F\u6210\u7B7E\u540D</h1><blockquote><p>\u4F7F\u7528keytool -genkey\u547D\u4EE4\u751F\u6210\u8BC1\u4E66\uFF1A</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>keytool -genkey -alias testalias -keyalg RSA -keysize <span class="token number">2048</span> -validity <span class="token number">36500</span> -keystore test.keystore
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>testalias</code> \u662F\u8BC1\u4E66\u522B\u540D\uFF0C\u53EF\u4FEE\u6539\u4E3A\u81EA\u5DF1\u60F3\u8BBE\u7F6E\u7684\u5B57\u7B26\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57</li><li><code>test.keystore</code> \u662F\u8BC1\u4E66\u6587\u4EF6\u540D\u79F0\uFF0C\u53EF\u4FEE\u6539\u4E3A\u81EA\u5DF1\u60F3\u8BBE\u7F6E\u7684\u6587\u4EF6\u540D\u79F0\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5B8C\u6574\u6587\u4EF6\u8DEF\u5F84</li><li><code>36500</code> \u662F\u8BC1\u4E66\u7684\u6709\u6548\u671F\uFF0C\u8868\u793A100\u5E74\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u5929\uFF0C\u5EFA\u8BAE\u65F6\u95F4\u8BBE\u7F6E\u957F\u4E00\u70B9\uFF0C\u907F\u514D\u8BC1\u4E66\u8FC7\u671F</li></ul><h2 id="\u67E5\u770B\u8BC1\u4E66\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8BC1\u4E66\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u8BC1\u4E66\u4FE1\u606F</h2><p><code>test.keystore</code> \u662F\u8BC1\u4E66\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>keytool -list -v -keystore test.keystore
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,8),u={href:"https://ask.dcloud.net.cn/article/35777",target:"_blank",rel:"noopener noreferrer"},p=d("https://ask.dcloud.net.cn/article/35777");function _(k,b){const a=n("ExternalLinkIcon");return t(),r(l,null,[h,e("ul",null,[e("li",null,[e("a",u,[p,o(a)])])])],64)}var y=s(i,[["render",_],["__file","\u751F\u6210\u7B7E\u540D.html.vue"]]);export{y as default};
