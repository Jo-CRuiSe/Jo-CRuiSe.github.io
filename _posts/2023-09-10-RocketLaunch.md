---
title: Rocket Launching 动画
date: 2023-09-10 18:55:00 +0800
categories: [影视后期]
tags: [After Effects, 动画]
pin: false
author: jo

toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: false
mermaid: true
image: 
  path: /assets/blog_res/title/RocketLaunch.png
---

## 概述

- 整个工程制作用时约2小时。
- 使用的工具：MacBook Air、After Effects。
- 原视频分辨率为`800x800`
- 这是我第一个完全用AE制作的作品
- 该动画按照[李翔SCU](https://www.bilibili.com/video/BV1hi4y1s7Rm/?spm_id_from=333.999.0.0&vd_source=27f8535b972612917de0cca10f45313f)教程制作

![RocketLaunch](/assets/blog_res/2023-09-10-RocketLaunch.assets/RocketLaunch.gif){: width="500" height="500"}

## 制作过程

将目标视频的元素拆分为几部分不难得到：火箭、背景、月亮。首先绘制主体：采用钢笔工具画出火箭轮廓的贝塞尔曲线，接着创建机舱、机翼、火焰图层。为了让图层更有立体感，适当添加阴影效果、明暗效果。

火焰需要复制四个图层并缩放、打关键帧使其异步放大缩小并更改颜色由内到外逐渐变深。复制一团添加到机身尾部形成光晕效果。

![RocketLayer](/assets/blog_res/2023-09-10-RocketLaunch.assets/RocketLayer.png)
_火箭图层_

月亮制作稍需要技巧，因为月亮虽在一直旋转但是其暗部位置始终不变。故应该在主合成中为月亮的预合成添加内阴影，调整角度与透明度使其自然。

最后添加星星随机出现，打上火箭运动路径的关键帧就可以渲染了。

