---
title: 解决macOS无法验证App等问题
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
  path: /assets/blog_res/title/AuthorizeUnknownDevelopers.png
  lqip: /assets/blog_res/title/AuthorizeUnknownDevelopers.png
---

## 问题来源

有时在 macOS 上安装或打开文件会提示：

**无法打开“xxx”，因为它来自身份不明的开发者。**

**“XXX”已损坏，无法打开。你应该推出磁盘映像。**

**无法打开“XXX”，因为Apple无法检查其是否包含恶意软件。**

**“XXX”已损坏，无法打开。你应该将它移到废纸篓。**

这些错误信息通常与操作系统或应用程序的安全设置和文件完整性有关，它们旨在保护计算机免受潜在的恶意软件或损坏文件的威胁。对于一些 cracked 应用，这种提示常常会弹出，然而这可能只是 crack 之后导致签名失效而造成的，对于系统安全性并无其他影响，那么我们需要手动允许其运行在我们的电脑上。接下来我将阐述如何解决这些问题。

## 解决方法

### 开启允许“任何来源”

打开“终端”，粘贴以下命令，回车执行

```shell
sudo spctl --master-disable
```

此时提示输入密码，输入用户登录密码，然后回车。（输入密码时内容不可见）

接着打开“系统设置”（macOS Monterey 及以前名为“系统偏好设置”），选择【安全性与隐私】，选择【通用】，可以看到【任何来源】已经选定。

此时您已允许 Mac 安装任何来源的 App。

### 已损坏修复

在终端粘贴复制输入命令（注意最后有一个空格）：

```shell
sudo xattr -r -d com.apple.quarantine 
```

然后打开 “访达”（Finder）进入 “应用程序”目录，找到该软件图标，将图标拖到刚才的终端窗口里面，会得到如下组合(如图所示)：

sudo xattr -r -d com.apple.quarantine /Applications/WebStrom.app

回到终端窗口按回车，输入系统密码回车即可。