---
title: macOS硬盘健康查询工具
date: 2023-11-20 20:30:00 +0800
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

**很多 Mac 用户担心自己的 Mac 的硬盘寿命，想查看硬盘的读写量，接下来就来介绍Smartmontools这款软件。**

## 安装 [Homebrew](https://brew.sh)

复制以下代码框中的命令，粘贴到“终端”（Terminal） 中，回车运行

如果你有代理，可以使用官方下载地址：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

如果你没有代理，可以使用镜像加快下载速度：

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" 
```

镜像提供下载源的选择，随便选取后按照提示完成安装即可。

## 安装smartmontools

复制以下命令，粘贴到“终端”中回车运行

```bash
brew install smartmontools
```

## 使用方法

### 基础的运行方式

在“终端”中依次运行：

```bash
smartctl -s on disk0
```

```bash
smartctl -a disk0
```

### 命令记不住？教你优雅地运行

打开“脚本编辑器”（Script Editor），新建一个文档。在窗口左上角选择“AppleScript”，粘贴以下代码到脚本编辑器中

![image-20231120201850804](/assets/blog_res/2023-11-20-CheckDiskLife.assets/ChooseAppleScript.png){: w="300"}

```shell
tell application "Terminal" to activate
tell application "Terminal"
	do script "smartctl -s on disk0"
	do script "smartctl -a disk0"
end tell
```

之后点击右上角的 “▶︎”（运行）按钮即可执行

![image-20231120202220479](/assets/blog_res/2023-11-20-CheckDiskLife.assets/ScriptEditorWindow.png)

### 更优雅的方式运行

打开”自动操作”（Automator）新建文档，在模板面板中选择“Application”

![image-20231120212317958](/assets/blog_res/2023-11-20-CheckDiskLife.assets/Automator-Application.png)

在搜索栏中搜索“AppleScript”并将模块拖入到右侧工作区

![image-20231120212532168](/assets/blog_res/2023-11-20-CheckDiskLife.assets/Automator-AppleScriptPanel.png)

将里面的文字替换为

```shell
tell application "Terminal" to activate
tell application "Terminal"
	do script "smartctl -s on disk0"
	do script "smartctl -a disk0"
end tell
```

保存为“Application”即可

![image-20231120212741939](/assets/blog_res/2023-11-20-CheckDiskLife.assets/Automator-SaveAsApplication.png){: w="400" .shadow .rounded-10}

现在我们已经将这个脚本封装成软件了，下次直接双击运行就可以查看了
