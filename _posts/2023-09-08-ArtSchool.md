---
title: Art School 动画
date: 2022-09-08 12:27:00 +0800
categories: [影视后期]
tags: [Cinema 4D]     
pin: false
author: jo

toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: true
img_path: /assets/blog_res/2023-09-08-ArtSchool.assets/
---

![ArtSchool](ArtSchool.gif){: width="500" height="500"}

## 概述

- 整个工程制作用时2小时。

- 使用的工具：MacBook Air、Cinema 4D。

- 该动画按照[李翔SCU][https://www.bilibili.com/video/BV177411P7d1/?spm_id_from=333.999.0.0&vd_source=27f8535b972612917de0cca10f45313f教程制作]

## 建模过程
先使用基本几何体+布尔、扫描等效果完成楼房建模，再使用长方体+克隆制作台阶，树木使用旋转、扭曲效果器。为突出光线，对天空和地面使用深色背景，楼宇灯光使用橙色（亮度200%），文字灯光使用蓝色发光材质。

## 动画时间线
为模型打关键帧，⌥+⇧+F3打开时间线窗口（F-Curve）调整动画过渡方式。为节省渲染时间，对树木使用“烘焙”，将动画提前定型。

## 渲染
此次渲染使用了物理渲染器，添加全局光照。摄像机使用平行视图避免边缘畸变。

![ArtSchoolUnrendered](ArtSchoolUnrendered.png)

_未渲染场景_

