---
title: 我用Shortcuts+Numbers做了一个记账程序
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
---

## 概述

- 编译环境：iOS 17.0
- 程序支持的设备：支持 iOS、iPadOS、macOS 的所有设备。建议设备系统：iOS 16 及以上、iPadOS 16 及以上、macOS Ventura 及以上。

## 灵感来源

当前市面上有太多记账软件，然而不少带有云端功能或者付费分级功能。对于高隐私性的数据，其服务器的安全性未知，所以我想做一个本地可用的免费记账软件。那么直接做一个 App 上架 App Store 当然是上策，然而这对个人开发者极不友好：不仅每年要交 $99（¥688）的开发者账号费，而且软件维护要消耗大量精力。所以我结合 Shortcuts 和 Numbers 做了一个记账软件。

## 功能介绍/优点

- [x] 支持总览，可视化数据图表帮助直观了解资金去向；
- [x] 支持分类，当前默认分类可以包含目前几乎所有的门类，并且支持具体备注资金去向；
- [x] 支持云同步、多设备互通。此云同步使用的是 Apple 原生 iCloud，可以极大地保护个人隐私（当然如果不想使用，可以关闭同步）；
- [x] 操作便捷，甚至在主屏幕上就可以直接完成记账；

## 使用方法

1. 从 App Store 上下载 [Shortcuts](https://apps.apple.com/cn/app/shortcuts/id1462947752?l=en-GB) 和 [Numbers](https://apps.apple.com/cn/app/numbers/id361304891?l=en-GB)，macOS的[Numbers在此](https://apps.apple.com/cn/app/numbers/id409203825?l=en-GB&mt=12);
2. 导入 [Numbers 模板](https://github.com/Jo-CRuiSe/Jo-CRuiSe.github.io/blob/main/assets/blog_res/Budget%20Table%20Template%202.zip)，如果想要使用云功能和多设备互联功能，请将此文件放到 iCloud 文件夹下；
3. 导入 [Shortcuts 快捷指令](https://www.icloud.com/shortcuts/2c80885bdc6c4396a19559d645ae7c5f)，如果显示“不允许不受信任的快捷指令”，请查看此[相关文章](https://jiejingku.net/2445.html)；
4. 演示图片：

![MoneyTrackerShotsGroup1](/assets/blog_res/2023-08-20 MoneyTrackerShortcuts.assets/MoneyTrackerShotsGroup1.PNG)

![MoneyTrackerShotsGroup2](/assets/blog_res/2023-08-20 MoneyTrackerShortcuts.assets/MoneyTrackerShotsGroup2.PNG)

![MoneyTrackerShotsGroup3](/assets/blog_res/2023-08-20 MoneyTrackerShortcuts.assets/MoneyTrackerShotsGroup3.PNG)