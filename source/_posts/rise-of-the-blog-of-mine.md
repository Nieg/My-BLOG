---
title: 吾的小破博客的搭建过程
date: 2021-11-20 14:51:09
categories: 备忘
tags: [hexo, nexT, Typora, markdown]
typora-root-url: ..
---
本着自己不写别人已经写烂了的话题的原则，这本是一篇不应存在的博文。但有两个原因，让我觉得自己还是得做个记录，进而导致了这篇博文的诞生。
首先，自己实在是太懒了，长时间不折腾博客，偶尔上来继续，都得先查查资料怎么弄，要不就得查查自己的Commits记录。其次，很多人写的教程都是有点误人子弟的感觉。当然，很多人写的教程，也包括了我和我写的这篇。
<!-- more -->
## gh-pages
这博客目前是放在github上托管的。用的是gh-pages。默认使用 jekyll (基于 Ruby) 技术，gh-pages 有两个用法。
 * 用户名.github.io 同名仓储可以通过其域名直接访问。
 * 任何github的仓库，创建 gh-pages 分支。 那么 gh-pages 里的内容，会作为一个子站点可以通过 用户名.github.io/仓库名 访问。直接在 settings->pages 可以创建一个简单的页面。

例如 <a href="https://nieg.github.io/" target="_blank" rel="noopener">本站域名</a> 和 <a href="https://nieg.github.io/codedemo4blog/" target="_blank" rel="noopener">本站的示例代码</a>

从上面两点可知，github pages 是github提供的 对你自己个人博客和在github上的开源资源介绍的最好工具。毕竟，免费还有这服务质量，还要啥自行车。
![要啥自行车](/images/meme/fav/bikes.jpg)

## 博客 hexo
这是 jekyll 以外的另一个博客工具，官网[hexo.io](https://hexo.io/zh-cn/)，最终会以编译好的纯静态Html 方式发布。可以直接用web服务器发布。
记录这个的原因是我记录一下我使用的插件，和自己的插件 配置 的关键字，方便我后续查找。

| 插件               | 类型       | 官网(文档)                                                   | 配置备忘                         |
| ------------------ | ---------- | ------------------------------------------------------------ | -------------------------------- |
| hexo               | 博客工具   | hexo [官方文档](https://hexo.io/zh-cn/docs/)                 |                                  |
| hexo-filter-*      | 博客插件   | 同上                                                         | package.json，包括发布工具       |
| hexo-helper-live2d | 左下角黑猫 | Github <a href="https://github.com/EYHN/hexo-helper-live2d" target="_blank" rel="noopener">EYHN/hexo-helper-live2d</a> | package.json，我选的模型是黑猫。 |
| nexT               | 主题       | GIthub <a href="https://github.com/next-theme/hexo-theme-next" target="_blank" rel="noopener">next-theme/hexo-theme-next</a> | _config.yml，data/next.yml       |
| three              | 背景       | Github <a href="https://github.com/theme-next/theme-next-three" target="_blank" rel="noopener">theme-next/theme-next-three</a> | data/next.yml,目前配置了cdn      |
| Gulp 系列          | 工具       |                                                              | package.json, gulpfile.js        |

## 皮肤 nexT

nexT 皮肤的应用方面，是我写这篇文章的重要原因之一。**网上大部分教程，在皮肤使用上都是有点误人子弟的。**按照hexo的官方使用方式，皮肤都应该themes目录下。
我选取的是 nexT 主题。 科技感十足，配置项多。使用本身使用 gulp和swig,模板等技术开发。
在我使用的是 github托管博客代码，使用 gh-pages 来发布 我的博客的前提下，如果选用的皮肤也是开源的产品的话。

皮肤使用的最佳实践是：
1. 选用好目标皮肤仓库。
2. [可选操作]自己fork一个作为自己的仓库。作为新的目标仓库。(自己控制，自己改动后，合并upstream的更新。)
3. 以git submodule 或者 svn子模块的形式，把目标仓库下载到 themes子目录下。(方便后续皮肤的更新)
4. **在\_source/\_data目录下，建立${皮肤名称}.yml的文件，用以更改皮肤的设置**，例如我用的是nexT 的皮肤。我会有 **\_source/\_data/next.yml**此文件上的配置项会覆盖掉 themes/${皮肤名称}/\_config.yml 的对应配置项。
5. **在\_source目录下（例如images、robots.txt）的文件，在打包后，会被拷贝到对应根目录。**

这样的好处是方便后续的皮肤更新，减少自己的配置与皮肤的源码的冲突。如果操作了步骤2，还可以把皮肤纳入自己的管理下。

## 工具 Typora(已弃用)
**工具已更换到 hexoEditor，请看下一章，更换原因，Typora正版收费了，破解非常简单，但这是不对的。**
工欲善其事必先利其器，博客弄好后，就要考虑可视化编辑，所见即所得的了。我暂时觉得编辑这个的最好用的工具是 **Typora**。
1. 写文章时，用 Typora打开 博客的 **source**目录。
2. 视图->显示侧边栏，视图->文件树。 可以让编辑时有完整的目录可以看。
![侧边栏](/images/posts/rise-of-the-blog-of-mine/Typora-setting-2.jpg)
3. 格式->图像->设置图片根目录。也是选择 **source**作为根目录。
4. 文件->偏好设置->图像 ，勾上 对本地位置图片应用上述规则、优先使用相对路径。 
 ![偏好设置](/images/posts/rise-of-the-blog-of-mine/Typora-setting-4.jpg)

## 新工具 HexoEditor 
我也是毒奶奶满，刚推荐  Typora 作为 可见即所得的编辑工具之后，Typora 马上更改了商业模式，开始恰饭了。我找了一段时间，所有和Markdown相关的工具都换掉了。目前写作工具是 HexoEditor， markdown主要用 Joplin。
hexoEditor对hexo和next主题制度非常好。
配置项只有：
![配置项](/images/posts/rise-of-the-blog-of-mine/hexoEditor-setting.png)

## 总结汇总

要做完上述的设置后，博客的配置基本完成。可以开始愉快地爬格子了。
除了hexo的用法，各种插件的用法，这些需要花时间去查资料外。需要大量的额外的小知识，对于新手的人来说，需要提前准备的知识，包括但不限于：
* git的主要命令，submodule 操作命令；配置github 的 ssl key； config多用户配置（如果有多个git平台账号，不能导致冲突。）
* git 冲突等的解决方案，但纯粹拿来主义，自己不做修改问题不大。
* github desktop工具的使用。使用gui工具能事半功倍。但如果你是 git 命令行高手，当我没说。
* gulp 相关的打包工具链的学习。 hexo 默认的话，没有把js、css什么的压缩。目前我采用的方案是生成后，再执行一次压缩(详细看gulpfile.js,package.json)
* 简单的网络知识，或者 对应的托管平台的使用方式学习。
* 可能需要 科学上网。 有时候，发布的时候，会受神秘力量所影响，无法上传。需要通过科学的方案，保证自己能够战胜神秘力量，deploy成功。
* 另外，告诉大家一个好消息，本站已在中国能流畅访问的全球知名的搜索引擎 “bing.com” 达成 战略合作。对于不懂的知识，如果你在浏览器输入bing.com，在新打开的页面上，输入你想找的问题，点搜索按钮，就很容易获得你想要的答案。

## 博文源码
本文相关的代码是本博客代码本身的仓库，博客的示例代码仓库，还有 hexo deploy 后的目标仓库：
- 博客本身的代码: <a href="https://github.com/nieg/My-BLOG/" target="_blank" rel="noopener">Nieg/My-BLOG/</a>
- 博客的示例代码: <a href="https://github.com/nieg/codedemo4blog/" target="_blank" rel="noopener">Nieg/codedemo4blog/</a>
- 博客的发布代码: <a href="https://github.com/nieg/nieg.github.io/" target="_blank" rel="noopener">Nieg/nieg.github.io/</a>

-EOF-
