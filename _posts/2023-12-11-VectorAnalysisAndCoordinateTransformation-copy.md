---
title: 矢量分析与坐标变换知识整理
date: 2024-03-03 14:39:00 +0800
categories: [学习笔记]
tags: [数理方法]
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: true
mermaid: true
image:
  path: /assets/blog_res/title/VectorAnalysisAndCoordinateTransformation.jpg
  lqip: /assets/blog_res/title/VectorAnalysisAndCoordinateTransformation.jpg

---

## 坐标变换[^1]

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

线元矢量：$$ d\overrightarrow{l} = h_{1} du_{1}  \widehat{e}_{u_{1}} + h_{2} du_{2}\widehat{e}_{u_{2}} + h_{3} du_{3} \widehat{e}_{u_{3}} $$

面元矢量：$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\overrightarrow{S}_{1}= h_{2} h_{3} du_{2} du_{3} \widehat{e}_{u_{1}}\\ 
  d\overrightarrow{S}_{2}= h_{1} h_{3} du_{1} du_{3} \widehat{e}_{u_{2}}\\ 
  d\overrightarrow{S}_{3}= h_{1} h_{2} du_{1} du_{2} \widehat{e}_{u_{3}}
\end{matrix}\right.    
\end{array} $$

体积元：$$ dV = h_{1} h_{2} h_{3} du_{1} du_{2} du_{3}$$

其中 $$ h_{1} ,h_{2}, h_{3} $$ 叫做拉梅系数

**不同坐标系下的拉梅系数：**

|          | $$ h_{1} $$ | $$ h_{2} $$ |     $$ h_{3} $$      |
| :------: | :---------: | :---------: | :------------------: |
| 直角坐标 |      1      |      1      |          1           |
|  柱坐标  |      1      | $$ \rho $$  |          1           |
|  球坐标  |      1      | $$ \rho $$  | $$ \rho sin\theta $$ |

**坐标变换矩阵：**

$$\begin{bmatrix}
\widehat{e}_{\rho}\\
\widehat{e}_{\varphi}\\
\widehat{e}_{z}
\end{bmatrix} =
\begin{bmatrix}
cos\varphi & sin\varphi & 0\\
-sin\varphi & cos\varphi & 0\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\widehat{e}_{x}\\
\widehat{e}_{y}\\
\widehat{e}_{z}
\end{bmatrix} $$

$$ \begin{bmatrix}
\widehat{e}_{\rho}\\
\widehat{e}_{\theta}\\
\widehat{e}_{\varphi}
\end{bmatrix} =
\begin{bmatrix}
sin\theta cos\varphi & sin\theta sin\varphi & cos\theta\\
cos\theta cos\varphi & cos\theta sin\varphi & -sin\theta\\
-sin\varphi & cos\varphi & 0
\end{bmatrix}
\begin{bmatrix}
\widehat{e}_{x}\\
\widehat{e}_{y}\\
\widehat{e}_{z}
\end{bmatrix} $$

## 梯度 散度 旋度[^2]

### 梯度

1. 方向导数：$$ \frac{\partial u}{\partial \overrightarrow{l} } = u_{x} cos\alpha + u_{y} cos\beta + u_{z} cos\gamma $$，其中 $$ cos\alpha, cos\beta, cos\gamma $$ 为 $$ \overrightarrow{l} $$的方向余弦
2. 符号：记为 $$ gradf $$ 或 $$ \triangledown f $$ ，其中 $$ \triangledown  = \frac{1}{h_{1}}\frac{\partial}{\partial u_{1}} \widehat{e}_1 + \frac{1}{h_{2}}\frac{\partial}{\partial u_{2}} \widehat{e}_2 + \frac{1}{h_{3}}\frac{\partial}{\partial u_{3}} \widehat{e}_3    $$ 

参考

[^1]: 郭旭涵.第8章 矢量分析与坐标变换[Z]，2023.

[^2]: 上海交通大学数学学科学学院微积分课程组.大学数学 微积分[M].北京：高等教育出版社，2017：88-228.