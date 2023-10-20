---
title: Art School 动画
date: 2023-09-08 12:27:00 +0800
categories: [影视后期]
tags: [Cinema 4D, 动画]
pin: false
author: jo

toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: true
image: 
  path: /assets/blog_res/title/ArtSchool.png
  lqip: /assets/blog_res/title/ArtSchool.png
---
## 概述

- 整个工程制作用时约2小时。

- 使用的工具：MacBook Air、Cinema 4D。

- 原视频分辨率为`720x720`

- 该动画按照[李翔SCU](https://www.bilibili.com/video/BV177411P7d1/?spm_id_from=333.999.0.0&vd_source=27f8535b972612917de0cca10f45313f)教程制作

![ArtSchool](/assets/blog_res/2023-09-08-ArtSchool.assets/ArtSchool.gif){: width="500" height="500"}
_效果图_

## 建模过程

建模过程首先利用基本几何体和布尔、扫描等效果完成了楼房的建模。然后使用长方体和克隆工具制作了台阶，利用旋转和扭曲效果器创建了树木。为了突出光线效果，天空和地面采用了深色背景，楼宇灯光使用了橙色（亮度200%），文字灯光则采用了蓝色发光材质。

## 动画时间线

在动画制作过程中，我为模型设置了关键帧，并通过快捷键⌥+⇧+F3打开了时间线窗口（F-Curve），以调整动画过渡方式。为了节省渲染时间，对树木进行了"烘焙"处理，提前将动画定型。

## 渲染

该项目采用了物理渲染器进行渲染，并添加了全局光照效果。为了避免边缘畸变，摄像机使用了平行视图。

![ArtSchoolUnrendered](/assets/blog_res/2023-09-08-ArtSchool.assets/ArtSchoolUnrendered.png)
_未渲染场景_

