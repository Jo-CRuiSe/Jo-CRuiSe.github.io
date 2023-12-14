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

|      |   $$ h_{1} $$   |   $$ h_{2} $$   |   $$ h_{3} $$   |
| :--: | :--: | :--: | :--: |
| 直角坐标 | 1 | 1 | 1 |
| 柱坐标 | 1 | $$ \rho $$ | 1 |
| 球坐标 | 1 | $$ \rho $$ | $$ \rho sin\theta $$ |

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
-sin\theta & cos\varphi & 0
\end{bmatrix}
\begin{bmatrix}
\widehat{e}_{x}\\
\widehat{e}_{y}\\
\widehat{e}_{z}
\end{bmatrix} $$

## 梯度 散度 旋度

### 梯度

1. 方向导数：$$ \frac{\partial u}{\partial \overrightarrow{l} } = u_{x} cos\alpha + u_{y} cos\beta + u_{z} cos\gamma $$，其中 $$ cos\alpha, cos\beta, cos\gamma $$ 为 $$ \overrightarrow{l} $$的方向余弦
2. 符号：记为 $$ gradf $$ 或 $$ \triangledown f $$ ，其中 $$ \triangledown  = \left ( \frac{\partial }{\partial x}, \frac{\partial }{\partial y}  \right ) $$ 
3. 梯度与方向导数的联系：$$ \frac{\partial u}{\partial \overrightarrow{l}} = \triangledown u \cdot \overrightarrow{l}=\lvert {\triangledown u}\rvert \lvert\overrightarrow{l} ^{0} \rvert  cos\varphi $$ <br> 当 $$ \varphi = 0 $$ 时，$$ \frac{\partial u}{\partial \overrightarrow{l}} $$ 取最大值；当 $$ \varphi = \pi $$ 时，$$ \frac{\partial u}{\partial \overrightarrow{l}} $$ 取最小值
4. 梯度的旋度恒为0 <br> $$ \triangledown \times \left( \triangledown u \right) \equiv 0 $$

### 散度

1. 通量：设向量场$$ \overrightarrow{F} = P(x, y, z) \overrightarrow{i} + Q(x, y, z) \overrightarrow{j} + R(x, y, z) \overrightarrow{k} , (x, y, z) \in \Omega $$ ，其中$$ P，Q，R $$具有一阶连续偏导数，$$ \Sigma $$为场中的定侧曲面，则称曲面积分 $$ \Phi = \iint\limits_{\Sigma }^{} \overrightarrow{F} \cdot d\overrightarrow{S} $$ 为向量场$$ \overrightarrow{F} $$通过定侧曲面的$$ \Sigma $$通量
2. 符号：记为 $$ div \overrightarrow{F} $$ <br>  $$ div \overrightarrow{F} =  \triangledown \cdot \overrightarrow{F} $$
3. 直角坐标系下：<br> $$ \triangledown \cdot \overrightarrow{A} = \frac{\partial A_{x}}{\partial x}  + \frac{\partial A_{y}}{\partial y} +\frac{\partial A_{z}}{\partial z} $$ <br> 柱坐标系下：<br> $$ \triangledown \cdot \overrightarrow{A} = \frac{1}{r} \frac{\partial }{\partial r} (rA_{r}) + \frac{1}{r} \frac{\partial }{\partial \varphi} A_{\varphi} + \frac{\partial }{\partial z}A_{z} $$ <br> 球坐标系下：<br> $$ \triangledown \cdot \overrightarrow{A} = \frac{1}{r^{2}} \frac{\partial }{\partial r}(r^{2}A_{r}) + \frac{1}{rsin\theta} \frac{\partial }{\partial \theta}(sinA_{\theta}) + \frac{1}{rsin\theta} \frac{\partial }{\partial \varphi}A_{\varphi} $$ <br> 用拉梅系数表示：<br> $$ \triangledown \cdot \overrightarrow{A} = \frac{1}{h_{1}h_{2}h_{3}} \left [ \frac{\partial }{\partial u_{1}} (h_{2}h_{3}A_{1}) + \frac{\partial }{\partial u_{2}} (h_{1}h_{3}A_{2}) + \frac{\partial }{\partial u_{3}} (h_{1}h_{2}A_{3}) \right ]  $$
4. 散度定理/高斯定理：<br> $$ \unicode{8751}_{S^{+}} \overrightarrow{F} \cdot d\overrightarrow{S} = \iiint\limits_{\Sigma}^{} div \overrightarrow{F} dV $$ <br> 即矢量场在 $$ S $$ 的通量等于其散度在 $$ S $$ 包围的区域上的三重积分

### 旋度

1. 环量：设有向量场$$ \overrightarrow{F} = P(x, y, z)\overrightarrow{i} + Q(x, y, z)\overrightarrow{j} + R(x, y, z)\overrightarrow{k}, (x, y, z)\in \Omega $$  ，其中 $$ P, Q, R $$ 具有一阶连续偏导数，$$ L $$ 为场中的定向曲线，称曲线积分$$\int\limits_{L} \overrightarrow{F} \cdot d\overrightarrow{r} = \int\limits_{L}Pdx + Qdy + Rdz$$ 为向量场$$ \overrightarrow{F} $$ 沿定向曲线L的环量
2. 符号：记为$$ rot \overrightarrow{F} $$ 或 $$ curl \overrightarrow{F} $$ <br> $$ rot \overrightarrow{F} = \triangledown \times \overrightarrow{F} $$
3. 直角坐标系下：<br> $$ \triangledown \times \overrightarrow{F} = 
    \begin{vmatrix}  
   \widehat{e}_{x} & \widehat{e}_{y} & \widehat{e}_{z}\\
   \frac{\partial }{\partial x} & \frac{\partial }{\partial y} & \frac{\partial }{\partial z}\\
   F_{x} & F_{y} & F_{z}
    \end{vmatrix}  $$ <br> 柱坐标系下：<br> $$ \triangledown \times \overrightarrow{F} = \frac{1}{\rho} 
    \begin{vmatrix}  
   \widehat{e}_{\rho} & \rho \widehat{e}_{\varphi} & \widehat{e}_{z}\\
   \frac{\partial }{\partial \rho} & \frac{\partial }{\partial \varphi} & \frac{\partial }{\partial z}\\
   F_{\rho} & \rho F_{\varphi} & F_{z}
    \end{vmatrix} $$ <br> 球坐标系下：<br> $$ \triangledown \times \overrightarrow{F} = \frac{1}{\rho ^{2}sin\theta} 
    \begin{vmatrix}  
   \widehat{e}_{\rho} & \rho \widehat{e}_{\theta} & \rho sin\theta\widehat{e}_{\varphi}\\
   \frac{\partial }{\partial \rho} & \frac{\partial }{\partial \theta} & \frac{\partial }{\partial \varphi}\\
   F_{\rho} & \rho F_{\varphi} & \rho sin\theta F_{\varphi}
    \end{vmatrix} $$ <br> 用拉梅系数表示：<br> $$ \triangledown \times \overrightarrow{F} = \frac{1}{h_{1}h_{2}h_{3}} 
    \begin{vmatrix}  
   h_{1}\widehat{u}_{1} & h_{2}\widehat{u}_{2} & h_{3}\widehat{u}_{3}\\
   \frac{\partial }{\partial u_{1}} & \frac{\partial }{\partial u_{2}} & \frac{\partial }{\partial u_{3}}\\
   h_{1}F_{1} & h_{2} F_{2} & h_{3} F_{3}
    \end{vmatrix} $$
4. 旋度的散度恒为0：<br> $$ \triangledown \cdot \triangledown \times \overrightarrow{A} \equiv 0 $$
5. 斯托克斯定理：<br> $$ \oint_{C} Pdx + Qdy + Rdz = \iint\limits_{\Sigma}\begin{vmatrix} 
    cos\alpha & cos\beta & cos\gamma\\
    \frac{\partial }{\partial x} & \frac{\partial }{\partial y} & \frac{\partial }{\partial z}\\
    P & Q & R   
    \end{vmatrix}dS $$ <br> $$ (cos\alpha, cos\beta, cos\gamma) $$ 为 $$ \Sigma $$ 上任意指定侧的单位法向量<br> 公式揭示了沿曲面 $$ \Sigma $$ 的曲面积分与其边界曲线 $$ C $$ 的曲线积分间的关系

## 补充知识——拉普拉斯运算
1. 对标量场：<br> $$ \triangledown^{2}u = \triangledown \cdot (\triangledown u) $$
2. 对矢量场：<br> $$ \triangledown^{2} \times \overrightarrow{A} = \triangledown (\triangledown \cdot \overrightarrow{A}) - \triangledown \times (\triangledown \times \overrightarrow{A}) $$
3. 两者联系：<br> $$ \begin{alignat}{3}
        (\triangledown^{2} \overrightarrow{A}) _{x}& = [\triangledown (\triangledown \cdot \overrightarrow{A})]_{x} - [\triangledown \times (\triangledown \times \overrightarrow{A})]_{x}\\
        & = \frac{\partial^{2}A_{x}}{\partial x^{2}} + \frac{\partial^{2}A_{x}}{\partial y^{2}} + \frac{\partial^{2}A_{x}}{\partial z^{2}}\\
        & = \triangledown^{2}A_{x}
      \end{alignat} $$

