---
title: SwiftUI 计算器使用指南
date: 2024-06-24 14:40:00 +0800
categories: [SwiftUI]
tags: []
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: false
---

## 主屏幕快捷操作

通过使用 Haptic Touch 来触发快捷操作，上次计算的结果将保存在剪贴板中

<img src="/assets/blog_res/2024-06-24-SwiftUICalculatorIntroduction.assets/SwiftUICalculator1.gif" alt="SwiftUICalculator1" style="zoom:33%;" />

## 计算功能

与iPhone原生计算器相同，四则运算的优先级进行运算，支持百分号、符号切换、连等等运算顺序及逻辑，支持滑动删除最后一位。

<div style="display: flex;justify-content: center;align-items: center">
<img src="/assets/blog_res/2024-06-24-SwiftUICalculatorIntroduction.assets/SwiftUICalculator2.gif" alt="SwiftUICalculator2" style="zoom:33%;" />
</div>
## 文本替换功能

输入触发密钥（初始值为12345）并长按来进入设置界面。在“设置-文本替换”中点击右上角加号新增文本替换。输入码是触发字符，通常为数字，短语为要替换成的文本。设置成功后摇动您的iPhone即可替换显示。

<div style="display: flex;justify-content: center;align-items: center">
<img src="/assets/blog_res/2024-06-24-SwiftUICalculatorIntroduction.assets/SwiftUICalculator3.gif" alt="SwiftUICalculator3" style="zoom:33%;" />
</div>
<img src="/assets/blog_res/2024-06-24-SwiftUICalculatorIntroduction.assets/SwiftUICalculator4.gif" alt="SwiftUICalculator4" style="zoom:33%;" />

> 您可以轻点来编辑文本替换，向右滑动来禁用某一文本替换，也可向左滑动删除该文本替换。
{:.prompt-tip}

<img src="/assets/blog_res/2024-06-24-SwiftUICalculatorIntroduction.assets/SwiftUICalculator5.gif" alt="SwiftUICalculator5" style="zoom:33%;" />

## 表情雨功能

当短语中包含以下emoji的其中之一就会触发表情雨：

```
🎂 💕 🫶 🫰 🥰 🥳 💓 ❤️ ✨ 😘
```

<img src="/assets/blog_res/2024-06-24-SwiftUICalculatorIntroduction.assets/SwiftUICalculator6.gif" alt="SwiftUICalculator6" style="zoom:33%;" />

> 您可以在设置中控制表情雨生成速率、持续时长。
{:.prompt-tip}

## 触感反馈

当在设置中打开“触感反馈”时，点击计算器按钮会带来触觉反馈，关闭后则与原生计算器相同，不再提供触觉反馈

> 即使关闭“触感反馈”在设置中的其他页面仍有触感反馈
{:.prompt-info}

## 多语言

该App支持中英两种语言，可按需切换