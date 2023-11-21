---
title: macOS无法验证App
date: 2023-04-02 10:01:00 +0800
categories: [实用工具]
tags: [macOS]
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: true
published: true
image:
  path: /assets/blog_res/title/CheckDiskLife.png
  lqip: /assets/blog_res/title/CheckDiskLife.png
---

## 问题来源

有时在 macOS 上安装或打开文件会提示：

**无法打开"xxx"，因为它来自身份不明的开发者。**

## 解决方法

**一、允许“任何来源”开启**

苹果从macOS Sierra 10.12 开始，已经**去除了允许“任何来源”的选项**，如果不开启“任何来源”的选项，会直接影响到无法运行的第三方应用。

所以开启“任何来源”的方法如下：

打开【启动台】，选择【终端】，输入：

sudo spctl --master-disable

然后回车，继续输入密码（密码输入时是不可见的），然后回车。

接着打开【系统偏好设置】，选择【安全性与隐私】，选择【通用】，可以看到【任何来源】已经选定。

接着打开文件进行安装。

**二、发现还是显示“已损坏，无法打开。 您应该将它移到废纸篓”，不急，接下来用这种方法：**

在终端粘贴复制输入命令（注意最后有一个空格）：

sudo xattr -r -d com.apple.quarantine 

**先不要按回车！先不要按回车！先不要按回车！先不要按回车！**

然后打开 **“访达”（Finder）**进入 **“应用程序”** 目录，找到该软件图标，将图标拖到刚才的终端窗口里面，会得到如下组合(如图所示)：

sudo xattr -r -d com.apple.quarantine /Applications/WebStrom.app

回到终端窗口按回车，输入系统密码回车即可。