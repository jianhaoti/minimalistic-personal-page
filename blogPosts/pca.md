---
title: "Principal Component Analysis"
date: "24 March 2025"
tags: ["statistics", "linear algebra", "measure theory"]
excerpt: "We discuss some very basic ideas from empirical processes and use them to motivate PCA."
---

**Measure Theory.** What's the most natural probability measure associated to a sample $x_1,...,x_m\in \R^n$? The easiest, most unbiased way is to treat these points as your entire measure space with the uniform measure. For simplicity, take $n=1$ so that we're dealing with random variables. We take the Dirac measure $𝟙_{x_j}$ for each data point $x_j$ and define the _empirical measure_ on $\mathbb{R}$ as

$$
\begin{equation}
\mathbb{P}_{\mathbb{X}}:=\frac{1}{m}\sum_{j=1}^m 𝟙_{x_j},
\end{equation}
$$

where we set $\mathbb{X}:=\{x_1,...,x_m\}$. Let's compute the expectation and variance of this distribution. Let $x\sim\mathbb{P}_\mathbb{X}$. We compute the _sample expecation_ as

$$
\begin{equation}
\begin{split}
\mathbb{E}[x]&=\sum_{i=1}^m x_i \mathbb{P}_\mathbb{X}(x=x_i) \\
&=\sum_{i=1}^m x_i \mathbb{P}_\mathbb{X}(x_i) \\
&=\sum_{i=1}^m x_i \left(\frac{1}{m}\sum_{j=1}^m𝟙_{x_j}(x_i)\right)\\
&=\sum_{i=1}^m x_i\left(\frac{1}{m}\sum_{j=1}^m\delta_{ij}\right)\\
&=\frac{1}{m}\sum_{i=1}^m x_i.
\end{split}
\end{equation}
$$

Under this measure, the expected value yields the center-of-mass. Therefore, we set $\bar{x}=\mathbb{E}[x]$. Next, we compute the _sample variance_ as

$$
\begin{equation}
\begin{split}
\mathbb{V}[x]&=\mathbb{E}\left[(x-\bar{x})^2\right]\\
&=\sum_{i=1}^m(x_i-\bar{x})^2\underbrace{\mathbb{P}_\mathbb{X}(x=x_i)}_{=\frac{1}{m}}\\
&=\frac{1}{m}\sum_{i=1}^m(x_i-\bar{x})^2.
\end{split}
\end{equation}
$$

We mention that the second equality in the calculation of the variance relies on the application of [LOTUS](https://en.wikipedia.org/wiki/Law_of_the_unconscious_statistician). Repeating these calculations in higher dimenesions yields the center-of-mass vector for expectation, and sample covariance matrix for variance. Observe that the natural normalization for the sample variance makes it an _biased_ estimator for the population variance.

$${}$$

**PCA.** The goal is to find a direction $p\in \mathbb{S}^{n-1}\subset \R^n$ in which the data has maximal spread. Since data spread is a purely empirical notion, we quantify it à la sample variance. Let $y_i:=p\cdot x_i$ be the projection of $x_i$ in the direction of $p$.
Our goal, therefore, is to find a direction that maximizes the sample variance $\mathbb{Y}=\{y_1,...,y_m\}$. This is formalized by the optimization problem

$$
\begin{equation}
\begin{split}
&\max \mathbb{V}_p[y]\\
&\text{s.t.} \quad \|p\|=1,\\
\end{split}
\end{equation}
$$

for $y\sim \mathbb{P}_\mathbb{Y}$ the emperical distribution over the projected points. The subscript on the variance emphasizes that this is a post-projection computation. Our first goal is to expand out $\mathbb{V}_p$ as a quadratic form.

$$
\begin{equation}
\begin{split}
\mathbb{V}_p[y]&=\frac{1}{m}\sum_{i=1}^m (y_i-\bar{y})^2\\
&=\frac{1}{m}\sum_{i=1}^m \left(p^T x_i-\left(\frac{1}{m}\sum_{j=1}^m {p^T x_j}\right)\right)^2\\
&=\frac{1}{m}\sum_{i=1}^m \left(p^T\left(x_i-\bar{x}\right)\right)^2\\
&=\frac{1}{m}\sum_{i=1}^m (p^T(x_i-\bar{x}))(p^T(x_i-\bar{x}))^T\\
&=p^T\underbrace{\sum_{i=1}^m\frac{1}{m}(x_i-\bar{x})(x_i-\bar{x})^T}_{=C}p,\\
\end{split}
\end{equation}
$$

where $C$ is the sample covariance matrix of the data $\mathbb{X}$. Therefore, our maximization problem becomes

$$
\begin{equation}
\begin{split}
&\max p^TCp\\
&\text{s.t.} \quad \|p\|=1,\\
\end{split}
\end{equation}
$$

which can be solved with Lagrange mulitpliers. Our objective function and constraint together define the Lagrangian

$$
\begin{equation}
\begin{split}
\mathcal{L}(p,\lambda)&=p^TCp-\lambda(p^Tp-1)\\
&=p^T(C-\lambda I )p+\lambda
\end{split}
\end{equation}
$$

which has $p$-critical points at

$$
\begin{equation}
0= \frac{\partial \mathcal{L}}{\partial p}(p)=(C-\lambda I)p.
\end{equation}
$$

This tells us that a maximum to (6) is an eigendirection of $C$. We define a _principal direction_ $p_1$ as an eigendirection with the largest eigenvalue $\lambda_1$. We claim that $p_1$ solves the optimization problem (5). This is because

$$
\begin{equation}
\mathbb{V}_p[y]=p^TCp=p^T(\lambda p)=\lambda,
\end{equation}
$$

so maximizing for the eigenvalue $\lambda$ corresponds to maximizing for the sample variance. Indicidentally, the same computation shows that the covariance matrix $C$ is a positive semi-definite matrix, since variance is a non-negative quantity.
