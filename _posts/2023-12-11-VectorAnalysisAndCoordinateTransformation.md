---
title: 矢量分析与坐标变换知识整理
date: 2023-12-11 14:39:00 +0800
categories: [学习笔记]
tags: [数理方法]
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: true
mermaid: true
published: true
image:
  path: /assets/blog_res/title/VectorAnalysisAndCoordinateTransformation.jpg
  lqip: /assets/blog_res/title/VectorAnalysisAndCoordinateTransformation.jpg
---

## 坐标变换

### 直角坐标系

位置矢量：$$ \overrightarrow{r} = x \widehat{e}_{x}  + y \widehat{e}_{y} + z \widehat{e}_{z} $$

线元矢量：$$ d\overrightarrow{l} = dx \widehat{e}_{x}  + dy \widehat{e}_{y} + dz \widehat{e}_{z} $$

面元矢量：$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\overrightarrow{S}_{x}= dy dz \widehat{e}_{x}\\ 
  d\overrightarrow{S}_{y}= dx dz \widehat{e}_{y}\\ 
  d\overrightarrow{S}_{z}= dx dy \widehat{e}_{z}
\end{matrix}\right.    
\end{array} $$
体积元：$$ dV = dxdydz $$

### 柱坐标系
位置矢量：$$ \overrightarrow{r} = \rho \widehat{e}_{\rho}  + z \widehat{e}_{z} $$

线元矢量：$$ d\overrightarrow{l} = d \rho \widehat{e}_{\rho}  + \rho dy\widehat{e}_{y} + dz \widehat{e}_{z} $$

面元矢量：$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\overrightarrow{S}_{\rho}= \rho d\varphi dz \widehat{e}_{\rho}\\
  d\overrightarrow{S}_{\varphi}= d\rho dz \widehat{e}_{\varphi}\\
  d\overrightarrow{S}_{z}= \rho d\rho d\varphi \widehat{e}_{z}
\end{matrix}\right.    
\end{array} $$
