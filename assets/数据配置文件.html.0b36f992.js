import{_ as n,c as s}from"./app.60b2f4e8.js";const a={},p=s(`<h1 id="\u6570\u636E\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6570\u636E\u914D\u7F6E\u6587\u4EF6</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u8FD9\u91CC typeorm \u4F7F\u7528 ^0.2 \u7248\u672C, Nestjs8 \u4ECD\u7136\u4F7F\u7528 typeorm@^0.2.</span>
<span class="token comment"># pnpm add @nestjs/typeorm typeorm@^0.2 mysql2</span>
<span class="token function">pnpm</span> <span class="token function">add</span> @nestjs/typeorm typeorm mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6DFB\u52A0 <code>ormconfig.json</code> \u6587\u4EF6</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
  <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;entities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dist/**/*.entity{.ts,.js}&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;migrations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/migration/*.js&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;synchronize&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cli&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;entitiesDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/entity&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;migrationsDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/migration&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subscribersDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/subscriber&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u7F16\u8F91 app.module.ts\uFF0C\u6DFB\u52A0\u4EE3\u7801</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>TypeOrmModule<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/typeorm&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>TypeOrmModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="use-typeorm-migration-files" tabindex="-1"><a class="header-anchor" href="#use-typeorm-migration-files" aria-hidden="true">#</a> Use TypeORM migration files</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># generate migration file</span>
typeorm migration:generate -n CreateUserTable

<span class="token comment"># run migration</span>
typeorm migration:run

<span class="token comment"># \u8FD8\u539F</span>
typeorm migration:revert
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4FEE\u6539\u6587\u4EF6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// app.module.tsJS</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>DataSource<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>PhotoModule<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./modules/photo/photo.module&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>TypeOrmModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> PhotoModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> dataSource<span class="token operator">:</span> DataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// photo.entity.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Entity<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  isActive<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,10);function t(e,o){return p}var l=n(a,[["render",t],["__file","\u6570\u636E\u914D\u7F6E\u6587\u4EF6.html.vue"]]);export{l as default};
