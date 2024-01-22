---
title: 用SwiftUI做一个微信
date: 2023-10-19 11:59:00 +0800
categories: []
tags: []
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: true
public: false
hidden: true
---

## 准备阶段

### UI准备

- [ ] UI图标素材：https://github.com/weui/weui-design ，Figma
- [ ] avatar：https://zhuanlan.zhihu.com/p/203173866
- [ ] 分割各个部分控件：Navigation Bar, Chat List, Tab Bar, Chat Window, Menu, Emoji panel, Tool Bar, Input Box

![ChatList](/assets/blog_res/2023-10-19-WeChatDevelopment.assets/ChatList.jpg)
_Chat List_

![ChatWindow](/assets/blog_res/2023-10-19-WeChatDevelopment.assets/ChatWindow.jpg)
_Chat Window_


### 功能设计

- [ ] 用户第一次打开需要注册（虚拟账号）
- [ ] 长按 “+” 可以添加新账号
- [ ] 通知推送（本地）
- [ ] 发朋友圈功能，创建外链
- [ ] Settings 里输入验证码打开隐藏功能：更改转账界面、更改红包界面、更改零钱数额、允许截屏/录屏、集赞助手、虚拟用户名
- [ ] 搜索（Not important）

### 代码准备

- [ ] Navigation Bar etc & Notification: Swift Learning
- [ ] Assets Folder 层级建立方法
- [ ] Forbid Screen Shot/Recording: Bilibili

>争取2024.2前开发完成
{: .prompt-info}

