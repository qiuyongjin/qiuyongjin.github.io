import{_ as t,r as p,o as r,a as c,b as n,d as e,F as l,e as s,c as o}from"./app.60b2f4e8.js";const i={},u=n("h1",{id:"\u521D\u59CB\u5316\u9879\u76EE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521D\u59CB\u5316\u9879\u76EE","aria-hidden":"true"},"#"),s(" \u521D\u59CB\u5316\u9879\u76EE")],-1),m={href:"https://docs.nestjs.com",target:"_blank",rel:"noopener noreferrer"},d=s("https://docs.nestjs.com"),b={href:"https://docs.nestjs.cn",target:"_blank",rel:"noopener noreferrer"},k=s("https://docs.nestjs.cn"),h=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># install nest cli</span>
<span class="token function">npm</span> i -g @nestjs/cli

<span class="token comment"># new project</span>
nest new project_name

<span class="token comment"># development mode</span>
<span class="token function">npm</span> rum start:dev

<span class="token comment"># Add TypeORM</span>
<span class="token function">npm</span> <span class="token function">install</span> --save @nestjs/typeorm typeorm mysql2

<span class="token comment"># generate module</span>
nest g resource modules/xxx
<span class="token comment"># \u4E0D\u751F\u6210\u6D4B\u8BD5\u6587\u4EF6</span>
nest g resource modules/xxx --no-spec

<span class="token comment"># \u521B\u5EFA modules \u76EE\u5F55</span>
<span class="token function">mkdir</span> src/modules
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="setting-cors" tabindex="-1"><a class="header-anchor" href="#setting-cors" aria-hidden="true">#</a> Setting CORS</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">enableCors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The core code</span>
<span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="get-parameters" tabindex="-1"><a class="header-anchor" href="#get-parameters" aria-hidden="true">#</a> Get Parameters</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// get\u53C2\u6570
fun(@Query(&quot;id&quot;) id: string){
}

// header\u53C2\u6570
fun(@Headers(&#39;token&#39;) token: string){
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,5);function _(g,f){const a=p("ExternalLinkIcon");return r(),c(l,null,[u,n("blockquote",null,[n("p",null,[n("a",m,[d,e(a)])]),n("p",null,[n("a",b,[k,e(a)])])]),h],64)}var v=t(i,[["render",_],["__file","\u521D\u59CB\u5316\u9879\u76EE.html.vue"]]);export{v as default};
