---
title: 用Shortcuts+Numbers做一个便捷记账程序
date: 2023-08-20 8:26:00 +0800
categories: [软件应用]
tags: [Shortcuts]
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: true
image:
  path: /assets/blog_res/title/MoneyTracker.png
  lqip: /assets/blog_res/title/MoneyTracker.png
---

## 概述

- 编译环境：iOS 17.0
- 程序支持的设备：运行 iOS、iPadOS、macOS 的所有设备。建议设备系统：iOS 16 及以上、iPadOS 16 及以上、macOS Ventura 及以上。

>2024.04.09更新：移除了英文版，增加了对中文版的支持，目前只可在中文系统下运行；修改了代码逻辑，丰富了子类，增强了自定义内容功能
{: .prompt-info} 

## 灵感来源

当前市面上有太多记账软件，然而不少带有云端功能或者付费分级功能。对于高隐私性的数据，其服务器的安全性未知，所以我想做一个本地可用的免费记账软件。那么直接做一个 App 上架 App Store 当然是上策，然而这对个人开发者极不友好：不仅每年要交 $99（¥688）的开发者账号费，而且软件维护要消耗大量精力。所以我结合 Shortcuts 和 Numbers 做了一个记账程序。

## 功能介绍/优点

- [x] 支持总览，可视化数据图表帮助直观了解资金去向；
- [x] 支持分类，当前默认分类可以包含目前几乎所有的门类，并且支持具体备注资金去向；
- [x] 支持云同步、多设备互通。此云同步使用的是 Apple 原生 iCloud，可以极大地保护个人隐私（当然如果不想使用，可以关闭同步）；
- [x] 拥有强大的自定义功能，可自己添加二级子类；
- [x] 操作便捷，添加小组件后在主屏幕上就可以直接完成记账；

## 使用方法

1. 从 App Store 上下载 [Shortcuts](https://apps.apple.com/cn/app/shortcuts/id1462947752?l=en-GB) 和 [Numbers](https://apps.apple.com/cn/app/numbers/id361304891?l=en-GB)，macOS的[Numbers在此](https://apps.apple.com/cn/app/numbers/id409203825?l=en-GB&mt=12);
2. 导入 [Numbers 模板](https://easylink.cc/objumj)（如果链接失效了，请[在此](https://github.com/Jo-CRuiSe/Jo-CRuiSe.github.io/blob/main/assets/blog_res/Budget Table Template(中文版).zip)下载），如果想要使用云功能和多设备互联功能，请将此文件放到 iCloud 文件夹下；
3. 导入 [Shortcuts 快捷指令](https://www.icloud.com/shortcuts/87ebbd442d4345d9be8076a9466f20ed)，如果显示“不允许不受信任的快捷指令”，请查看此[相关文章](https://jiejingku.net/2445.html)；
4. 按图示配置文件：

![SetupStep1](/assets/blog_res/2023-08-20-MoneyTrackerShortcuts.assets/SetupStep1.png)

![SetupStep2](/assets/blog_res/2023-08-20-MoneyTrackerShortcuts.assets/SetupStep2.png)

![SetupStep3](/assets/blog_res/2023-08-20-MoneyTrackerShortcuts.assets/SetupStep3.png)


5. 自定义子类

![SetupStep4](/assets/blog_res/2023-08-20-MoneyTrackerShortcuts.assets/SetupStep4.png)

6. 演示图片：

![MoneyTrackerShotsGroup1](/assets/blog_res/2023-08-20-MoneyTrackerShortcuts.assets/MoneyTrackerShotsGroup1.png)

![MoneyTrackerShotsGroup2](/assets/blog_res/2023-08-20-MoneyTrackerShortcuts.assets/MoneyTrackerShotsGroup2.png)

## 注意事项
- 请在使用前仔细阅读文章内容（包括图片中的提示）；
- 请勿随意更改快捷指令中的程序，除非您对里面程序的内容非常了解；
- 当前 Numbers 限制无法将表格长度自动延伸，如有需要请手动延长；
- 如果已导入模板，下次想通过模板创建新的表格时，请记得在快捷指令中按照图片第6、7步重新修改文件位置，否则新数据会写入原有文件。

## 最后

如果您有好的建议或者对这篇文章有疑问，欢迎随时通过 Email 或下方评论区进行留言！

