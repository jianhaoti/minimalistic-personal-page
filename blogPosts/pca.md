---
title: "Principal Component Analysis"
date: "29 March 2025"
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
&=\sum_{i=1}^m x_i \left(\frac{1}{m}\sum_{j=1}^m 𝟙_{x_j}(x_i)\right)\\
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

**p1.** The goal is to find a direction $p\in \mathbb{S}^{n-1}\subset \R^n$ in which the data has maximal spread. Since data spread is a purely empirical notion, we quantify it à la sample variance. Let $y_i:=p\cdot x_i$ be the projection of $x_i$ in the direction of $p$.
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

This tells us that a maximum to (6) is an eigendirection of $C$. At this point there's an ambiguity in the sign of $\lambda$, since the contraints are equality constraints. We will fix this ambiguity later. We define a _first principal direction_ $p_1$ as an eigendirection with the largest eigenvalue $\lambda_1$. We claim that $p_1$ solves the optimization problem (5). This is because

$$
\begin{equation}
\mathbb{V}_p[y]=p^TCp=p^T(\lambda p)=\lambda,
\end{equation}
$$

so maximizing for the eigenvalue $\lambda$ corresponds to maximizing for the sample variance. Indicidentally, the same computation constrains the sign of $\lambda$ and shows that the covariance matrix $C$ is a positive semi-definite matrix, since variance is a non-negative quantity.

**Why orthogonality?** The further principal components are computed iteratively under the same variance maximization scheme, but under the new constraint that $p_{i+1}$ is orthogonal to the previous principal direction $\{p_1,...,p_i\}$. This orthogonality condition enables the use of [Rayleigh's principle](https://en.wikipedia.org/wiki/Rayleigh_quotient), allowing us to compute the eigenvalues of the covariance matrix iteratively via Lagrangians.

It's not immediately clear why orthogonality is more than just a convenient mathematical trick. What is the statistical motivation behind enforcing this condition? The answer gets to what covariance _is_ and why we employ it as the natural inner product. For our purposes, it's best to define covariance as the error term blocking variance from being an additive homorphism. In other words, define for random variables $X,Y$ their covariance

$$
\begin{equation}
\text{Cov}(X,Y):=\frac{1}{2}\bigg(\mathbb{V}[X+Y]-\mathbb{V}[X]-\mathbb{V}[Y]\bigg).
\end{equation}
$$

The prefactor of one half is for the convenient normalization $\text{Cov}(X,X)=\mathbb{V}[X]$. We say random variables are _uncorrelated_ if and only if their covariance is $0$. The key here is that the concept of being uncorrelated, or equivalently variance additivity, captures the idea of _variance independence_.

Back to PCA. If we were in the business of maximizing variance through unscrupulous means, ideally we'd try to reach a total variance of $n\mathbb{V}_{p_1}[y_1].$ [Being the crafty and morally onerous mathematician that I am](https://www.youtube.com/watch?v=kxN_qPuefrM&ab_channel=CalvinLim), I fix a cone $C_\epsilon$ of small opening angle $\epsilon$ around $p_1$ and arbitrarily pick directions $p_2,...,p_n\in C_\epsilon$ to form the basis $\{p_1,...,p_n\}$. The total variance of the basis is nearly $n\mathbb{V}_{p_1}[y_1]$, since I've esssentially captured the variance in the $p_1$ direction $n$ times. The issue is that _the sources of variation are highly dependent_; the fix is to impose variance independence. As discussed, this is equivalent to asking the principal directions be uncorrelated. This motivates us to define covariance as our inner product, and the orthogonality constraint on the principal directions follows.
