# FEX 技术周刊 - 2015/11/23

> 2betop | 23 Nov 2015

> 微信搜索『FEX』关注我们的公众号，及时获得最新资讯。

## 业界会议

**2015中国软件开发者大会**
[http://sdcc.csdn.net/](http://sdcc.csdn.net/)
可重点关注前端专场，期待资料放出。来自美团的“前端分布式编译系统的设计”挺值得关注的，前端已经绕不开编译了，但目前各种工具在代码量庞大时都存在构建时间长的问题。编译比较理想状态是：虽然有编译过程，但开放者基本无感知。所以，编译耗时的优化是值得去研究和解决的一个技术问题。大会还发布了《中国软件开发者白皮书》，不过得登记资料才能下载。

## 深阅读

**Introducing EdgeHTML 13, our first platform update for Microsoft Edge**
[http://blogs.windows.com/msedgedev/2015/11/16/introducing-edgehtml-13-our-first-platform-update-for-microsoft-edge/](http://blogs.windows.com/msedgedev/2015/11/16/introducing-edgehtml-13-our-first-platform-update-for-microsoft-edge/)
Edge 最新版的更新说明，进一步增强对 HTML5 及 ES6 的支持。

**双11技术-对无线电商动态化方案的思考**
[https://github.com/amfe/article/issues/13](https://github.com/amfe/article/issues/13)
[https://github.com/amfe/article/issues/14](https://github.com/amfe/article/issues/14)
[https://github.com/amfe/article/issues/15](https://github.com/amfe/article/issues/15)
双 11 背后的技术，Weex - 一套完全针对无线电商动态化的技术方案：致力于移动端、能够充分调度 native 的能力、能够充分解决或回避性能瓶颈、能够优雅“降级”到 HTML5、能够快速迭代...当然，不要错过这一系列技术文章 [https://github.com/amfe/article/issues](https://github.com/amfe/article/issues) issue 中各路大神的讨论也值得关注。

**What’s in ECMAScript 2016 (ES7)?**
[http://www.2ality.com/2015/11/](http://www.2ality.com/2015/11/)
This blog post describes the details of this new release process, along with four features that will probably be in ECMAScript 2016.

**工程师文化的思考**
[http://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==&mid=401460975&idx=1&sn=8e39520929d2b06c20739d54baf7c2f3](http://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==&mid=401460975&idx=1&sn=8e39520929d2b06c20739d54baf7c2f3)
由肉身翻墙加入 Google 的大神杜传赢带来的分享，内容包括：一：硅谷的工作环境和气氛；二：Google的开发工具体系介绍；三：工作流程：质量与效率的权衡；四：招聘制度对公司及团队的影响；五：工程师文化下的创新意识与员工心态。

**React vs Angular 2**
[https://docs.google.com/document/d/1Ah9IJ72DhV4AzoZ1TJUnMzj42PzQrLrwQUkg9koO0dg/preview](https://docs.google.com/document/d/1Ah9IJ72DhV4AzoZ1TJUnMzj42PzQrLrwQUkg9koO0dg/preview)
React 与 Angular 2 的对比。

**React 源码剖析系列 － 不可思议的 react diff**
[http://zhuanlan.zhihu.com/purerender/20346379](http://zhuanlan.zhihu.com/purerender/20346379)
介绍了 React 中高效的 DOM diff 算法。

**Dependency Injection in Angular 2**
[http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html)
针对 Angular 2 的 DI 的一个讲解，和官方的 angular.io 相比讲述的更加清晰。

**Microsoft + Node.js Guidelines**
[https://github.com/Microsoft/nodejs-guidelines](https://github.com/Microsoft/nodejs-guidelines)
微软整理的 Node 入门基础。

**We need less powerful languages**
[http://lukeplant.me.uk/blog/posts/less-powerful-languages/](http://lukeplant.me.uk/blog/posts/less-powerful-languages/)
Many systems boast of being ‘powerful’, and it sounds difficult to argue that this is a bad thing. Almost everyone who uses the word assumes that it is always a good thing. The thesis of this post is that in many cases we need less powerful languages and systems.

**The Cost of Frameworks**
[https://aerotwist.com/blog/the-cost-of-frameworks/](https://aerotwist.com/blog/the-cost-of-frameworks/)
I recently delivered a talk at FFConf in Brighton, called "You should use , it's the bestestest!". I wanted to do a write-up of the presentation's content here, hopefully so it can start a broader conversation that I think we need to have, mainly around the cost of modern frameworks on mobile devices.

**翻墙路由器的原理与实现**
[http://drops.wooyun.org/papers/10177](http://drops.wooyun.org/papers/10177)
作为个搞技术的人，我们要干点疯狂的事。如果我们不动手，我们就要被比我们差的远的坏技术人员欺负。这太丢人了。眼前就是，GFW这个东西，之前是我们不抱团，让它猖狂了。现在咱们得凑一起，想出来一个办法让它郁闷一下，不能老被欺负吧。要不，等到未来，后代会嘲笑我们这些没用的家伙，就象我们说别人“你怎么不反抗？”

**隐藏在 Node.js 浮点反序列化错误背后的故事**
[http://alinode.aliyun.com/blog/16](http://alinode.aliyun.com/blog/16)
在 Node.js 中，当我们把一个浮点数序列化，再反序列化。我们会发现，再也取不出之前的值了。这篇文章帮我们分析了背后的玄机及解决方案。

**前端开发笔记本**
[https://li-xinyang.gitbooks.io/frontend-notebook/content/](https://li-xinyang.gitbooks.io/frontend-notebook/content/)
前端笔记本涵盖了 Web 前端开发所需的基本知识以及学习路径。它并不能当做一本完整的学习材料，因为在有限的篇幅中无法深入的展开每一个知识点。它更适合作为一个学习清单或者是查询手册，结合其他更在各个方面更专业的图书或者官方文档来进行同步学习。在使用过程中为了达到最佳的学习效果，也因将每个技术点实现并进行适当的拓展。

**码农-21期 A Swift Tour**
[http://www.duokan.com/book/99879](http://www.duokan.com/book/99879)
本期《码农》将带你踏上探寻Swift的旅程。从Hello World开始，再到Swift语言的前世今生。Swift和Objective-C，两种语言现在的共处之道是怎样的？想知道如何用Parse这个强大的移动开发平台开发出像Instagram这样的应用吗？另外，我们还会告诉你一些关于Swift内存管理的冷门知识，了解这些定会开拓你对LLVM的理解。

**Tradeoffs in server side and client side rendering**
[https://medium.com/google-developers/tradeoffs-in-server-side-and-client-side-rendering-14dad8d4ff8b](https://medium.com/google-developers/tradeoffs-in-server-side-and-client-side-rendering-14dad8d4ff8b)
[http://www.onebigfluke.com/2015/01/experimentally-verified-why-client-side.html](http://www.onebigfluke.com/2015/01/experimentally-verified-why-client-side.html)
一个经典话题，需要结合业务场景、终端个点具体分析和选择。

**Closures are not magic**
[http://renderedtext.com/blog/2015/11/18/closures-are-not-magic/](http://renderedtext.com/blog/2015/11/18/closures-are-not-magic/)
Clousures 的科普文。

**Modern Java - A Guide to Java 8**
[https://github.com/winterbe/java8-tutorial](https://github.com/winterbe/java8-tutorial)
This tutorial guides you step by step through all new language features. Backed by short and simple code samples you'll learn how to use default interface methods, lambda expressions, method references and repeatable annotations. At the end of the article you'll be familiar with the most recent API changes like streams, functional interfaces, map extensions and the new Date API. No walls of text, just a bunch of commented code snippets. Enjoy!

**HTTP 代理原理及实现**
[https://imququ.com/post/web-proxy.html](https://imququ.com/post/web-proxy.html)
[https://imququ.com/post/web-proxy-2.html](https://imququ.com/post/web-proxy-2.html)
Web 代理是一种存在于网络中间的实体，提供各式各样的功能。现代网络系统中，Web 代理无处不在。我之前有关 HTTP 的博文中，多次提到了代理对 HTTP 请求及响应的影响。今天这篇文章，我打算谈谈 HTTP 代理本身的一些原理，以及如何用 Node.js 快速实现代理。

**打造最舒适的webview调试环境**
[http://div.io/topic/1449](http://div.io/topic/1449)
对于采用Hybrid开发的web应用，可以利用模拟器+Chrome+Charles舒服完美地调试webview页面。

**Webkit 远程调试协议初探**
[http://taobaofed.org/blog/2015/11/20/webkit-remote-debug-test/](http://taobaofed.org/blog/2015/11/20/webkit-remote-debug-test/)
Webkit 的远程调试协议是 Webkit 在 2012 年引入的。目前所有 Webkit 内核的浏览器都支持这一特性。但是我们还是以 DevTools 和 Chrome 为出发点，来做讨论。

**你不再需要动态网页——编辑-发布-开发分离**
[http://segmentfault.com/a/1190000004006820](http://segmentfault.com/a/1190000004006820)
尽管没有特别的动力去构建一个全新的CMS，但是我还是愿意去撰文一篇来书写如何去做这样的事——编辑-发布-开发分离模式是如何工作的。微服务是我们对于复杂应用的一种趋势，编辑-发布-开发分离模式则是另外一种趋势。

**实战Growth Hacker：Facebook快速增长的秘诀**
[http://mp.weixin.qq.com/s?__biz=MzI1ODA2NTQzMw==&mid=209978942&idx=1&sn=a33ede2d57cd4573f329117c072141ac](http://mp.weixin.qq.com/s?__biz=MzI1ODA2NTQzMw==&mid=209978942&idx=1&sn=a33ede2d57cd4573f329117c072141ac)
[http://www.zhihu.com/question/20629136](http://www.zhihu.com/question/20629136)
Google、Amazon、Facebook、Twitter这些价值数千亿美元的巨头公司，它们的用户规模是如何迅速扩张的？它们对产品的营销是如何实现的？答案正与Growth Hacker有关，而这个名词目前已经成为硅谷最炙手可热的职位之一，在国内也大有兴起之势。与传统的营销模式不同，Growth Hacker在扩增自己用户基数上有自己的一套玩法，能够使产品变得令人赞叹，并且让用户乐于相互分享。他们痴迷于数据，致力于从数据获取对创造新产品的启发和市场行为的指导。

## 新鲜货

**部落图鉴之PHP：迎着全世界的嘲讽占领世界**
[https://mp.weixin.qq.com/s?__biz=MzAxMzMxNDIyOA==&mid=402018920&idx=1&sn=3e8cc1f8165240ecad1949ed0c92cd0a](https://mp.weixin.qq.com/s?__biz=MzAxMzMxNDIyOA==&mid=402018920&idx=1&sn=3e8cc1f8165240ecad1949ed0c92cd0a)

**ied**
[https://github.com/alexanderGugel/ied](https://github.com/alexanderGugel/ied) 号称比 npm 快很多的包管理工具，因为它使用的是并行安装，不过由于某原因，恐怕不如 cnpm 快呢。

**Rollup**
[https://github.com/rollup/rollup](https://github.com/rollup/rollup)
Rollup is a next-generation JavaScript module bundler. Author your app or library using ES2015 modules, then efficiently bundle them up into a single file for use in browsers and Node.js – even if you use advanced features like bindings and cycles.

**GitHub 新版界面 - A new look for repositories**
[https://github.com/blog/2085-a-new-look-for-repositories](https://github.com/blog/2085-a-new-look-for-repositories)
Repositories on GitHub are about to get a brand new look. The new design improves navigation and simplifies page layout, all while improving the code and performance under the hood.

**Grunt 被 jQuery Foundation 接管**
[https://blog.jquery.com/2015/11/19/grunt-rebooted/](https://blog.jquery.com/2015/11/19/grunt-rebooted/)
Grunt is one of the best-known and most popular task runners in the web developer’s toolkit. Now that this project has joined the jQuery Foundation, we’re looking to get the project rolling again.

**Visual Studio Code 正式开演并支持扩展开发**
[https://github.com/microsoft/vscode](https://github.com/microsoft/vscode)
[https://code.visualstudio.com/updates#_vs-code-is-open-source](https://code.visualstudio.com/updates#_vs-code-is-open-source)
VS Code is a new type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. Code provides comprehensive editing and debugging support, an extensibility model, and lightweight integration with existing tools. 感觉发展势头不错。

**Ant Design of React 0.10.0 发布**
[https://github.com/ant-design/ant-design](https://github.com/ant-design/ant-design)
Ant Design of React 全新的 0.10.0 版本终于释出。本版本有大量新特性、改进和 bugfix，欢迎大家跟进升级，享受最新的特性和功能。

**Plotly.js 开源 - 一个专注科学数据可视化的库**
[https://plot.ly/javascript/open-source-announcement/](https://plot.ly/javascript/open-source-announcement/)
[https://github.com/plotly/plotly.js/](https://github.com/plotly/plotly.js/)
Today, Plotly is announcing that we have open-sourced plotly.js, the core technology and JavaScript graphing library behind Plotly’s products (MIT license). It's all out there and free. Any developer can now integrate Plotly’s library into their own applications unencumbered. Plotly.js supports 20 chart types, including 3D plots, geographic maps, and statistical charts like density plots, histograms, box plots, and contour plots.

**Sigma.js: a JavaScript library for graph drawing**
[http://sigmajs.org/](http://sigmajs.org/)
Sigma is a JavaScript library dedicated to graph drawing. It makes easy to publish networks on Web pages, and allows developers to integrate network exploration in rich Web applications.

**使用CSS3 will-change提高页面滚动、动画等渲染性能**
[http://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/](http://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/)

**JavaScript 异步方案 async/await**
[https://blog.leancloud.cn/3910/](https://blog.leancloud.cn/3910/)
JavaScript 一直想在语言层面彻底解决异步调用这个问题，在 ES6 中就已经支持原生的 Promise，还引入了 Generator 函数，终于在 ES7 中决定支持 async 和 await。

**Goo Engine 开源**
[http://goocreate.com/blog/1199/oh-my-code-goo-engine-goes-open-source/](http://goocreate.com/blog/1199/oh-my-code-goo-engine-goes-open-source/)
这是一个商业 WebGL 3D 引擎。

**Apache Geode: Distributed, in-memory database**
[http://geode.incubator.apache.org/](http://geode.incubator.apache.org/)
Geode is an open source, distributed, in-memory database for scale-out applications. Performance is key. Consistency is a must.

**tus.io**
[http://tus.io/](http://tus.io/)
基于 HTTP 的断点续传上传协议。

**React Tree View Component**
[https://github.com/alexcurtis/react-treebeard](https://github.com/alexcurtis/react-treebeard)
React Tree View Component. Fast, Efficient and Customisable.

**Aurelia**
[http://aurelia.io/](http://aurelia.io/)
[http://blog.durandal.io/2015/11/16/aurelia-beta-week-day-1-the-beta-is-here/](http://blog.durandal.io/2015/11/16/aurelia-beta-week-day-1-the-beta-is-here/)
Aurelia is a next gen JavaScript client framework for mobile, desktop and web that leverages simple conventions to empower your creativity.

**Mo.js – motion graphics for the web**
[http://mojs.io/](http://mojs.io/)

**WebTorrent - Streaming torrent client for node & the browser**
[https://github.com/feross/webtorrent](https://github.com/feross/webtorrent)
WebTorrent is a streaming torrent client for node.js and the browser. YEP, THAT'S RIGHT. THE BROWSER. It's written completely in JavaScript – the language of the web – so the same code works in both runtimes.

**JavaScript Air**
[http://javascriptair.com/](http://javascriptair.com/)
The live broadcast podcast all about JavaScript

**阿里巴巴与 Apache 的故事**
[http://mp.weixin.qq.com/s?__biz=MjM5NzA1MTcyMA==&mid=400392268&idx=2&sn=2aedc16dfd601eae8118d11225a5c4bb](http://mp.weixin.qq.com/s?__biz=MjM5NzA1MTcyMA==&mid=400392268&idx=2&sn=2aedc16dfd601eae8118d11225a5c4bb)
[https://github.com/alibaba/jstorm](https://github.com/alibaba/jstorm)
11月19日，阿里巴巴集团宣布正式加入Apache基金会。同时，向Apache基金会捐赠开源项目JStorm。JStorm正式成为Apache Storm里的子项目。JStorm将在 Apache Storm里孵化，孵化成功后会成为Apache Storm主干。

**Windows 30岁了：蓝屏、死机，但它依然是最伟大的操作系统**
[http://www.pingwest.com/windows-30-years/](http://www.pingwest.com/windows-30-years/)
Windows 30岁了。它早已是个人电脑操作系统的霸主。不过，在这个高速前进的行业，它也站在了一个前途未知的路口。本文回顾 Windows 30年来的发展历程，顺便对这个最伟大的操作系统说一声“生日快乐”。

## 产品及其它

**2015美国新媒体研究报告**
[http://mp.weixin.qq.com/s?__biz=MzA5NDMxMTAyMg==&mid=400338781&idx=1&sn=8ca58149fdbf5e7738e648afd2ff0342](http://mp.weixin.qq.com/s?__biz=MzA5NDMxMTAyMg==&mid=400338781&idx=1&sn=8ca58149fdbf5e7738e648afd2ff0342)
[http://tech.qq.com/a/20151112/009810.htm](http://tech.qq.com/a/20151112/009810.htm)
来自美国皮尤（Pew）研究中心的专家Lee Rainie，发布了另一份重磅报告《2015美国新媒体研究报告》：哪三场技术革命彻底改变了媒体行业？第四场革命又将在哪里发生？对新闻业有和影响？今天的美国人如何看新闻？他们和中国读者的喜好一样吗？关于媒体的未来，关于人类与信息交互的未来，美国专家有哪些洞察？另附企鹅智库发布的中国新媒体报告：[http://tech.qq.com/a/20151112/009810.htm#p=1](http://tech.qq.com/a/20151112/009810.htm#p=1)

**傅盛：空杯仰视才有可能改变世界格局**
[http://mp.weixin.qq.com/s?__biz=MjM5MTEzNTg2MA==&mid=401223950&idx=1&sn=ea58fa68a8cd29653749fe298c8f2fff](http://mp.weixin.qq.com/s?__biz=MjM5MTEzNTg2MA==&mid=401223950&idx=1&sn=ea58fa68a8cd29653749fe298c8f2fff)
简单的人一定能做出伟大的事；永远不要去简单地抱怨困难，你的目的是解决困难；树立一个简单的目标，才能冲破重重阻碍；如果你在认知上，落后于这个时代，你就必然会被淘汰；

**Tominsight 移动互联网原罪：颠覆还是堕落**
[https://mp.weixin.qq.com/s?__biz=MzA3NTcwOTIwNg==&mid=402995458&idx=1&sn=aab15de88ba54f2a6593fa9f73932f71](https://mp.weixin.qq.com/s?__biz=MzA3NTcwOTIwNg==&mid=402995458&idx=1&sn=aab15de88ba54f2a6593fa9f73932f71)
TOMsInsight团队通过真实案例分析，和大家一起洞察移动社交流量的底层故事和行业生态，报告的主题是：「移动社交流量：是分享还是传销」。

**马化腾内部讲座：我们希望的产品经理是从技术晋升而来的**
[http://mp.weixin.qq.com/s?__biz=MjM5OTU5NDMxMQ==&mid=400553167&idx=1&sn=7f55b9e5cf29c46418301fb4486fd7f5](http://mp.weixin.qq.com/s?__biz=MjM5OTU5NDMxMQ==&mid=400553167&idx=1&sn=7f55b9e5cf29c46418301fb4486fd7f5)
产品的更新和升级需要产品经理来配合，但我们产品经理做研发出身的不多。而产品和服务是需要大量技术背景的，我们希望的产品经理是非常资深的，做过前端、后端开发的技术研发人员晋升而来。好的产品最好交到一个有技术能力、有经验的人员手上，这样会让大家更加放心。如果产品经理不合格，让很多兄弟陪着干，结果就会发现方向错误是非常浪费和挫伤团队士气的。

**创业者的很多素质是天生的**
[http://mp.weixin.qq.com/s?__biz=MjM5MTk1NjI0MA==&mid=400656547&idx=1&sn=7d6033402280846109ae7df792906afd](http://mp.weixin.qq.com/s?__biz=MjM5MTk1NjI0MA==&mid=400656547&idx=1&sn=7d6033402280846109ae7df792906afd)
开复老师的分享。

