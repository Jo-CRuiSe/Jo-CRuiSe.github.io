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
image:
  path: /assets/blog_res/title/VectorAnalysisAndCoordinateTransformation.jpg
  lqip: /assets/blog_res/title/VectorAnalysisAndCoordinateTransformation.jpg

---

>2024.03.05 将电磁场的内容合并进来，证明过程见电磁场相关书籍
{: .prompt-info}

## 坐标变换[^1]

### 直角坐标系

位置矢量：

$$ \vec{r} = x \widehat{e}_{x}  + y \widehat{e}_{y} + z \widehat{e}_{z} $$

线元矢量：

$$ d\vec{l} = dx \widehat{e}_{x}  + dy \widehat{e}_{y} + dz \widehat{e}_{z} $$

面元矢量：

$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\vec{S}_{x}= dy dz \widehat{e}_{x}\\ 
  d\vec{S}_{y}= dx dz \widehat{e}_{y}\\ 
  d\vec{S}_{z}= dx dy \widehat{e}_{z}
\end{matrix}\right.    
\end{array} $$

体积元：

$$ dV = dxdydz $$

### 柱坐标系

位置矢量：

$$ \vec{r} = \rho \widehat{e}_{\rho}  + z \widehat{e}_{z} $$

线元矢量：

$$ d\vec{l} = d \rho \widehat{e}_{\rho}  + \rho d\varphi \widehat{e}_{\varphi} + dz \widehat{e}_{z} $$

面元矢量：

$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\vec{S}_{\rho}= \rho d\varphi dz \widehat{e}_{\rho}\\
  d\vec{S}_{\varphi}= d\rho dz \widehat{e}_{\varphi}\\
  d\vec{S}_{z}= \rho d\rho d\varphi \widehat{e}_{z}
\end{matrix}\right.    
\end{array} $$

体积元：

$$ dV = \rho d\rho d\varphi dz $$

### 球坐标系

位置矢量：

$$ \vec{r} =  \rho \widehat{e}_{\rho}  $$

线元矢量：

$$ d\vec{l} = d\rho \widehat{e}_{\rho}  + \rho d\theta \widehat{e}_{\theta} + \rho sin\theta d\varphi \widehat{e}_{\varphi} $$

面元矢量：

$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\vec{S}_{\rho}= \rho^{2} sin\theta d\theta d\varphi \widehat{e}_{\rho}\\ 
  d\vec{S}_{\theta}= \rho sin\theta d\rho d\varphi \widehat{e}_{\theta}\\ 
  d\vec{S}_{\varphi}= \rho d\rho  d\varphi \widehat{e}_{\varphi}
\end{matrix}\right.    
\end{array} $$

体积元：$$ dV = \rho ^{2} sin\theta d\rho d\theta d\varphi $$

### 一般正交坐标系

线元矢量：

$$ d\vec{l} = h_{1} du_{1}  \widehat{e}_{u_{1}} + h_{2} du_{2}\widehat{e}_{u_{2}} + h_{3} du_{3} \widehat{e}_{u_{3}} $$

面元矢量：

$$ \begin{array}{l} 
  \left\{\begin{matrix} 
  d\vec{S}_{1}= h_{2} h_{3} du_{2} du_{3} \widehat{e}_{u_{1}}\\ 
  d\vec{S}_{2}= h_{1} h_{3} du_{1} du_{3} \widehat{e}_{u_{2}}\\ 
  d\vec{S}_{3}= h_{1} h_{2} du_{1} du_{2} \widehat{e}_{u_{3}}
\end{matrix}\right.    
\end{array} $$

体积元：

$$ dV = h_{1} h_{2} h_{3} du_{1} du_{2} du_{3} \quad  (\text{其中} h_{1} ,h_{2}, h_{3} \text{叫做拉梅系数})$$

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

#### 方向导数

$$ \frac{\partial u}{\partial \vec{l} } = u_{x} cos\alpha + u_{y} cos\beta + u_{z} cos\gamma \quad (\text{其中} cos\alpha, cos\beta, cos\gamma \text{为} \vec{l} \text{的方向余弦})$$

#### 符号

记为 $$ gradf $$ 或 $$ \nabla f $$ 

$$ \nabla  = \frac{1}{h_{1}}\frac{\partial}{\partial u_{1}} \widehat{e}_1 + \frac{1}{h_{2}}\frac{\partial}{\partial u_{2}} \widehat{e}_2 + \frac{1}{h_{3}}\frac{\partial}{\partial u_{3}} \widehat{e}_3    $$ 

#### 梯度与方向导数的联系：

$$ \frac{\partial u}{\partial \vec{l}} = \nabla u \cdot \vec{l}=\lvert {\nabla u}\rvert \lvert\vec{l} ^{0} \rvert  cos\varphi $$ 

当 $$ \varphi = 0 $$ 时，$$ \frac{\partial u}{\partial \vec{l}} $$ 取最大值；当 $$ \varphi = \pi $$ 时，$$ \frac{\partial u}{\partial \vec{l}} $$ 取最小值

#### 梯度积分公式（证明需要用到散度定理）

$$ \int_{V} \nabla \phi dV = \oint_{S} \phi dS $$

### 散度

#### 通量

设向量场

$$\vec{F} = P(x, y, z) \vec{i} + Q(x, y, z) \vec{j} + R(x, y, z) \vec{k} , (x, y, z) \in \Omega $$

其中 $$ P，Q，R $$具有一阶连续偏导数，$$\Sigma$$ 为场中的定侧曲面，则称曲面积分 $$ \Phi = \iint\limits_{\Sigma }^{} \vec{F} \cdot d\vec{S}$$ 为向量场 $$\vec{F}$$ 通过定侧曲面 $$\Sigma$$ 的通量

#### 符号

记为 $$ div \vec{F} $$ ，$$ div \vec{F} =  \nabla \cdot \vec{F} $$

#### 散度定理/高斯定理：

$${\oiint}_{S^{+}} \vec{F} \cdot d\vec{S} = \iiint\limits_{\Sigma}^{} div \vec{F} dV $$ 

即矢量场在 $$ S $$ 的通量等于其散度在 $$ S $$ 包围的区域上的三重积分

### 旋度

#### 环量

矢量$$\vec{A}$$沿一闭曲线$$\vec{l}$$的线积分定义为矢量$$\vec{A}$$沿该闭合曲线的环量

$$\Gamma  = \oint_{l} \vec{A} \cdot d \vec{l}$$

#### 符号

记为$$ rot \vec{F} $$ 或 $$ curl \vec{F} $$

$$ rot \vec{F} = \nabla \times \vec{F} = \vec{a}_{n} \lim_{\Delta S \to 0} \left ( \frac{\oint_{S} \vec{F} \cdot d \vec{l}}{\Delta S}\right)$$

#### 旋度定理

$$\int_{V}(\nabla \times \vec{A}) dV = - \oint_{S} \vec{A} \times d \vec{S} = \oint_{S} d \vec{S} \times \vec{A}$$

#### 斯托克斯定理 

$$ \oint_{C} Pdx + Qdy + Rdz = \iint\limits_{\Sigma}\begin{vmatrix} 
cos\alpha & cos\beta & cos\gamma\\
\frac{\partial }{\partial x} & \frac{\partial }{\partial y} & \frac{\partial }{\partial z}\\
P & Q & R   
\end{vmatrix}dS $$

其中$$ (cos\alpha, cos\beta, cos\gamma) $$ 为 $$ \Sigma $$ 上任意指定侧的单位法向量

或

$$\int_{S} (\nabla \times \vec{A}) \cdot d \vec{S} = \oint_{l} \vec{A} \cdot d \vec{l}$$

公式揭示了沿曲面 $$ \Sigma $$ 的曲面积分与其边界曲线 $$ C $$ 的曲线积分间的关系

## 标量场与矢量场的性质

### 梯度场的旋度恒为0

$$ \nabla \times \left( \nabla u \right) \equiv 0 $$

### 旋度场的散度恒为0

$$ \nabla \cdot \nabla \times \vec{A} \equiv 0 $$

## 标量场与矢量场的定理[^3]

### 标量格林定理

#### 标量第一格林定理

$$\int_{V}(\psi \nabla^{2} \phi + \nabla \psi \cdot \nabla \phi )dV = \oint_{S} (\psi \nabla \phi )\cdot \vec{a}_{n}dS = \oint_{S}\psi \frac{\partial \phi }{\partial n} dS $$

$$\int_{V}(\phi \nabla^{2} \psi + \nabla \phi \cdot \nabla \psi )dV = \oint_{S} (\phi \nabla \psi )\cdot \vec{a}_{n}dS = \oint_{S}\phi \frac{\partial \psi }{\partial n} dS $$

特别地，当$$\phi = \psi$$时

$$\int_{V}(\phi \nabla^{2} \phi + |\nabla \phi|^{2} )dV = \oint_{S} (\phi \nabla \phi )\cdot \vec{a}_{n}dS = \oint_{S}\phi \frac{\partial \phi }{\partial n} dS $$

#### 标量第二格林定理

$$\int_{v} (\phi \nabla^{2} \psi - \psi \nabla ^{2} \phi )dV = \oint_{S} (\phi \frac{\partial \psi }{\partial n} - \psi \frac{\partial \phi }{\partial n})dS  $$

### 矢量场的唯一性定理

一个矢量场被其散度、旋度和区域边界上的边界条件（边界上的切向或法向边界条件）唯一确定

### 亥姆霍兹定理

若矢量场$$\vec{f}$$在给定的无限空间域$$V$$内处处单值，且其导数连续、有界，而源分布在有限区域中，则矢量场$$\vec{f}$$可分解为无旋场$$\vec{f}_{d}$$和无散场$$\vec{f}_{c}$$之和，并且f可表示为一个标量函数的梯度与一个矢量函数的旋度之和，即

$$\begin{align}
\vec{f} &= \vec{f}_{d} + \vec{f}_{c}   \\
&= - \nabla \phi + \nabla \times \vec{A} \\ 
&= - \nabla \left \{ \int_{V} \left [ \frac{\nabla^{\prime} \cdot \vec{f}(r^{\prime}) }{4 \pi R} dV^{\prime} - \oint_{S} \left [ \frac{\vec{f}(r^{\prime}) \cdot \vec{a}_n}{4 \pi R} \right ] \right ] dS^{\prime} \right \}  \\
&+ \nabla \times \left \{ \int_{V} \left [ \frac{\nabla^{\prime} \times \vec{f}(r^{\prime})}{4 \pi R}dV^{\prime} \right ]  + \oint_{S} \left [ \frac{\vec{f}(r^{\prime}) \times \vec{a}_n }{4 \pi R} \right ] dS^{\prime} \right \}
\end{align}$$

## 正交曲线坐标系中场论的表达式

### 标量$$\phi$$的梯度

$$ \nabla f = \frac{1}{h_{1}}\frac{\partial \phi}{\partial u_{1}} \vec{a}_1 + \frac{1}{h_{2}}\frac{\partial \phi}{\partial u_{2}} \vec{a}_2 + \frac{1}{h_{3}}\frac{\partial \phi}{\partial u_{3}} \vec{a}_3 $$

### 矢量$$\vec{A}$$的散度

$$ \nabla \cdot \vec{A} = \frac{1}{h_{1}h_{2}h_{3}} \left [ \frac{\partial }{\partial u_{1}} (h_{2}h_{3}A_{1}) + \frac{\partial }{\partial u_{2}} (h_{1}h_{3}A_{2}) + \frac{\partial }{\partial u_{3}} (h_{1}h_{2}A_{3}) \right ]  $$

### 矢量$$\vec{A}$$的旋度

$$ \nabla \times \vec{A} = \frac{1}{h_{1}h_{2}h_{3}} 
\begin{vmatrix}  
h_{1}\vec{a}_{1} & h_{2}\vec{a}_{2} & h_{3}\vec{a}_{3}\\
\frac{\partial }{\partial u_{1}} & \frac{\partial }{\partial u_{2}} & \frac{\partial }{\partial u_{3}}\\
h_{1}A_{1} & h_{2} A_{2} & h_{3} A_{3}
\end{vmatrix} $$

### $$\nabla^{2} \phi$$的展开式为

 $$ \nabla^{2} \phi = \frac{1}{h_{1}h_{2}h_{3}} \sum_{i=1}^{3} \frac{\partial}{\partial u_{i}}(\frac{h_{1}h_{2}h_{3}}{h_{i}^{2}}\frac{\partial \phi}{\partial u_{i}}) $$

导出公式： $$ \nabla^{2} \vec{A} = \nabla (\nabla \cdot \vec{A}) - \nabla \times \nabla \times \vec{A} $$

参考

[^1]: 郭旭涵.第8章 矢量分析与坐标变换[Z]，2023.

[^2]: 上海交通大学数学学科学学院微积分课程组.大学数学 微积分[M].北京：高等教育出版社，2017：88-228.

[^3]: 周希郎.电磁场与波基础[M].北京：机械工业出版社，2014：15-24
