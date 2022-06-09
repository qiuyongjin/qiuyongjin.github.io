import{_ as n,c as s}from"./app.60b2f4e8.js";const a={},e=s(`<h1 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> log</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B 5 \u6761\u8BB0\u5F55</span>
<span class="token function">git</span> log -5

<span class="token comment"># --after \u67E5\u770B\u67D0\u4E2A\u65F6\u95F4\u4E4B\u540E\u7684\u8BB0\u5F55</span>
<span class="token function">git</span> log --after<span class="token operator">=</span><span class="token number">2022</span>-04-05

<span class="token comment"># --pretty=oneline \u4E00\u884C\u663E\u793A</span>
<span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline

<span class="token comment"># \u65F6\u95F4\u6392\u5E8F</span>
<span class="token function">git</span> log --reverse

<span class="token comment"># \u7EC4\u5408\u4F7F\u7528</span>
<span class="token function">git</span> log --after<span class="token operator">=</span><span class="token number">2022</span>-04-05 --pretty<span class="token operator">=</span>oneline --reverse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,2);function p(r,l){return e}var o=n(a,[["render",p],["__file","log.html.vue"]]);export{o as default};
