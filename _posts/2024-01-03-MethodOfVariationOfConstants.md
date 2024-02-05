---
title: 二阶方程常数变易法
date: 2024-01-03 16:45:00 +0800
categories: [学习笔记]
tags: [数理方法]
pin: false
author: jo
toc: true
commments: true
typora-root-url: ../../Jo-CRuiSe.github.io/
math: true
mermaid: true
public: true
image:
  path: /assets/blog_res/title/MethodOfVariationOfConstant.jpg
  lqip: /assets/blog_res/title/MethodOfVariationOfConstant.jpg
---

## 公式推导

已知方程：

$$\begin{cases}
   y''(x) + \omega^{2}(x) = f(x)\\
   y(0) = \alpha, \quad y'(0) = \beta
\end{cases}$$

可以得到相应的齐次方程：$ y^{\prime \prime}(x) + \omega^{2}(x) = 0 $

通解：$ y(x) = C_{1}cos(\omega x) + C_{2}sin(\omega x) $

由常数变易法，$ y(x) = u(x)cos(\omega x) + v(x)sin(\omega x) $

构造二元线性方程组

$$ y'(x) = [u'(x) cos(\omega x) + v'(x) sin(\omega x) + [-\omega u(x) sin(\omega x) + \omega v(x)cos(\omega x)] $$

令第一个方程为 0，即

$$\begin{equation}
u'(x) cos(\omega x) + v'(x) sin(\omega x) = 0 \tag{1}
\end{equation} $$

余下部分再求导：

$$ y''(x) = [-\omega u'(x) sin(\omega x) + \omega v'(x) cos(\omega x)] - [\omega^{2} u(x) cos(\omega x) + \omega^{2} v(x) sin(\omega x)] $$

代入原方程得到：

$$ \begin{equation}
-\omega u'(x) sin(\omega x) + \omega v'(x) cos(\omega x) = f(x) \tag{2}
\end{equation}$$

(1)、(2)联立得

$$ \begin{bmatrix}  
  cos(\omega x) & sin(\omega x) \\
  -\omega sin(\omega x) & \omega cos(\omega x)
\end{bmatrix} 
\begin{bmatrix}  
  u'(x) \\
  v'(x)
\end{bmatrix} 
=\begin{bmatrix} 
  0 \\
  f(x)
\end{bmatrix} $$

由克莱姆法则：

$$ D =  
\begin{vmatrix}  
  cos(\omega x) & sin(\omega x) \\
  -\omega sin(\omega x) & \omega cos(\omega x)
\end{vmatrix} 
= \omega $$

$$ D_{1} =  
\begin{vmatrix}  
  0 & sin(\omega x) \\
  f(x) & \omega cos(\omega x)
\end{vmatrix} 
= -f(x)sin(\omega x) $$

$$ D_{2} =  
\begin{vmatrix}  
  cos(\omega x) & 0  \\
  -\omega sin(\omega x) & f(x)  
\end{vmatrix} 
= f(x)cos(\omega x) $$

解得：

$$ u'(x) = \frac{D_1}{D} = -\frac{1}{\omega}f(x)sin(\omega x) $$

$$ v'(x) = \frac{D_2}{D} = \frac{1}{\omega}f(x)cos(\omega x) $$

代入通解中得到：

$$ \begin{equation}
y = -\frac{1}{\omega} cos(\omega x) \int_{0}^{x} sin(\omega \xi) f(\xi) d\xi + \frac{1}{\omega} \int_{0}^{x} cos(\omega \xi)f(\xi)d\xi + C_3 cos(\omega x) + C_4 sin(\omega x) \tag{3}
\end{equation}$$

利用初始条件：$ C_3 = \alpha, C_4 = \frac{\beta}{\omega} $ 代入 (3) 中，并用和差化积公式化简：

$$ y(x) = \alpha cos(\omega x) + \frac{\beta}{\omega} sin(\omega x) + \frac{1}{\omega} \int_{0}^{x}sin[\omega (x - \xi)] f(\xi)d\xi $$

## 补充知识——和差化积、积化和差公式

### 和差化积

$$ sin \alpha + sin \beta = 2 sin \frac{\alpha + \beta}{2} cos \frac{\alpha - \beta}{2}  $$

$$ sin \alpha - sin \beta = 2 cos \frac{\alpha + \beta}{2} sin \frac{\alpha - \beta}{2} $$

$$ cos \alpha + cos \beta = 2 cos \frac{\alpha + \beta}{2} cos \frac{\alpha - \beta}{2}  $$

$$ cos \alpha - cos \beta = - 2 sin \frac{\alpha + \beta}{2} sin \frac{\alpha - \beta}{2}  $$

### 积化和差

$$ sin \alpha cos \beta = \frac{1}{2} [sin(\alpha + \beta) + sin(\alpha - \beta)] $$

$$ cos \alpha sin \beta = \frac{1}{2} [cos(\alpha + \beta) - sin(\alpha - \beta)] $$

$$ cos \alpha cos \beta = \frac{1}{2} [cos(\alpha + \beta) + cos(\alpha - \beta)] $$

$$ sin \alpha sin \beta = -\frac{1}{2} [cos(\alpha + \beta) - cos(\alpha - \beta)] $$
