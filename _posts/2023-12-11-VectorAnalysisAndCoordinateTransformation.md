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

线元矢量：$$ d\overrightarrow{l} = d \rho \widehat{e}_{\rho}  + \rho d\varphi \widehat{e}_{\varphi} + dz \widehat{e}_{z} $$

面元矢量：$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\overrightarrow{S}_{\rho}= \rho d\varphi dz \widehat{e}_{\rho}\\
  d\overrightarrow{S}_{\varphi}= d\rho dz \widehat{e}_{\varphi}\\
  d\overrightarrow{S}_{z}= \rho d\rho d\varphi \widehat{e}_{z}
\end{matrix}\right.    
\end{array} $$

体积元：$$ dV = \rho d\rho d\varphi dz $$

### 球坐标系

位置矢量：$$ \overrightarrow{r} =  \rho \widehat{e}_{\rho}  $$

线元矢量：$$ d\overrightarrow{l} = d\rho \widehat{e}_{\rho}  + \rho d\theta \widehat{e}_{\theta} + \rho sin\theta d\varphi \widehat{e}_{\varphi} $$

面元矢量：$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\overrightarrow{S}_{\rho}= \rho^{2} sin\theta d\theta d\varphi \widehat{e}_{\rho}\\ 
  d\overrightarrow{S}_{\theta}= \rho sin\theta d\rho d\varphi \widehat{e}_{\theta}\\ 
  d\overrightarrow{S}_{\varphi}= \rho d\rho  d\varphi \widehat{e}_{\varphi}
\end{matrix}\right.    
\end{array} $$

体积元：$$ dV = \rho ^{2} sin\theta d\rho d\theta d\varphi $$

### 一般正交坐标系

线元矢量：$$ d\overrightarrow{l} = h_{1} du_{1}  \widehat{e}_{{u}_{1}} + h_{2} du_{2}\widehat{e}_{{u}_{2}} + h_{3} du_{3} \widehat{e}_{{u}_{3}} $$

面元矢量：$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\overrightarrow{S}_{\rho}= \rho d\varphi dz \widehat{e}_{\rho}\\
  d\overrightarrow{S}_{\varphi}= d\rho dz \widehat{e}_{\varphi}\\
  d\overrightarrow{S}_{z}= \rho d\rho d\varphi \widehat{e}_{z}
\end{matrix}\right.    
\end{array} $$

体积元：$$ dV = \rho d\rho d\varphi dz $$