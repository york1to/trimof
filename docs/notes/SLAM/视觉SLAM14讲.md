# 视觉SLAM14讲

[[toc]]

## 3 三维空间刚体运动

### 3.1 欧式变换

按照表示方法分类

#### 3.1.1 旋转矩阵

旋转矩阵可以从单位正交基中简单得出。现在有一个向量$x$,他可以被表示为正交基乘以坐标
$$
\begin{bmatrix}
   e_1 & e_2 & e_3
\end{bmatrix}
\begin{bmatrix}
   a_1 \\ a_2 \\ a_3
\end{bmatrix}
=
\begin{bmatrix}
   e_1' & e_2' & e_3'
\end{bmatrix}
\begin{bmatrix}
   a_1' \\ a_2' \\ a_3'
\end{bmatrix}
$$
左乘transpose得到单位矩阵，那么就能得到$a = R a'$ 的形式，其中$R$是：
$$
\begin{bmatrix}
   e_1^Te_1' & e_1^Te_2' & e_1^Te_3'\\
   e_2^Te_1' & e_2^Te_2' & e_2^Te_3' \\
   e_3^Te_1' & e_3^Te_2' & e_3^Te_3'
\end{bmatrix}
$$
一个旋转矩阵是一个正交矩阵，所以他的Tranpose等于他的inverse。构成一个特殊正交群 SO(n)

*TODO: 书中没有给证明，如何证明*

一个旋转矩阵+平移可以给出任意一个空间中的刚体变换，形式如下：
$$
a' = Ra + t
$$




#### 3.1.2 变换矩阵

两个旋转+平移的表达式不是线性的，所以要更换一种表达方式，把平移给加到矩阵当中：
$$
\begin{bmatrix}
R & t \\
0^T & 1
\end{bmatrix}
$$

#### 3.1.3 旋转向量

旋转向量已经非常偏向四元数了，从旋转向量到旋转矩阵需要使用罗德里格斯公式进行推导，还涉及到特征值和特征向量的知识。先给出两个结论公式
$$
R = cos\theta I + (1-cos\theta) n n^T + sin\theta n^{反变换}
$$

$$
\theta = arccos(\frac{tr(R)-1}{2})
$$

#### 3.1.4 欧拉角

我最喜欢的row pitch yaw，记得当时还在质疑为啥不使用欧拉角进行坐标变换，看了这本书才知道是因为会遇见Gimbal Lock的现象。Intuitively, 在一个旋转角为90度时，会缺少一个自由度。

同时，注意到欧拉角要事先规定很多东西，比如是固定轴还是旋转轴。

#### 3.1.5 四元数

到了我最喜欢的四元数了，四元数自由度只有4，但是能不带奇异性地解决所有旋转表示。建议直接看3B1B视频：

<iframe width="560" height="315" src="https://www.youtube.com/embed/d4EgbgTm0Bg?si=7IUYhx5U0ppZUAG1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

然后再去他们的interactive video玩一下[111](https://eater.net/quaternions)

注意到四元数和欧拉公式的关系，可以发现他基本就是一个四维的欧拉公式，然后由于一维表示角度，三维有奇异性，所以用四维的标准圆进行一个投影，然后就能表示一个三位的旋转。

### 3.2 非欧式变换：仿射变换

后面再说

## 4 李群李代数







