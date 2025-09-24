---
title: "Derivation of OLS"
date: "23 February 2025"
tags: ["Machine Learning", "Calculus", "Linear Algebra", "Statistics"]
excerpt: "We formulate and solve for OLS as the solution to a minimization problem."
---

**Setup.** The goal of classical linear regression is to obtain the affine function of best fit given training data $(x_1,y_1)$, ... , $(x_m,y_m)$ where $x_i\in \R^n$ and $y_i\in \R$. An affine function $H$ in variable $x=[x^1,...,x^n]$ is specified by $n+1$ parameters $\beta^T=[\beta^0,\beta^1,...,\beta^n]$ by

$$
\begin{equation}
\begin{split}
H(x)&:=\beta^0+\sum_{i=1}^n x^n\beta^n\\
&=\tilde{x}^T\beta,
\end{split}
\end{equation}
$$

where $\tilde{x}^T = [1, x^T]$. The parameter $\beta^0$ controls the affine shift, while the parameters $\beta^1,...,\beta^n$ define a normal to any level set of $H$. "Best fit" is understood in the sense of quadratic error minimization. Thus, our problem is to find

$$
\begin{equation}
\begin{split}
    \hat{\beta}&=\argmin_{H \text{ affine}}\{\sum_{i=1}^m |y_i-H(x_i)|^2\}\\
    &=\argmin_{\beta\in \R^{n+1}}\{\sum_{i=1}^m |y_i-\tilde{x}_i^T\beta|^2\}\\
    &=\argmin_{\beta\in \R^{n+1}}\{\|y-X\beta\|^2\}.\\
\end{split}
\end{equation}
$$

For the last line, we define the _design matrix_ $X$ as the $m\times (n+1)$ matrix where the $i$th row is the vector $x_i^T$. Also, $y^T:=[y_1,...,y_m]$.

**Minimum.** We can interpret the final form of $(2)$ as the following question: what is the projection of a vector $y\in \R^m$ to the column space of $X$? Note that by convexity, we get a local-to-global property. Therefore, it suffices to compute the first order optimality conditions for $\|y-X\beta\|^2$ to find its minimum. We expand this out as

$$
\begin{equation}
\begin{split}
\hat{\beta}&=\argmin_{\beta} \|y - X\beta\|^2\\
&= \argmin_{\beta} (y - X\beta)^T (y - X\beta) \\
&= \argmin_{\beta} (y^T - \beta^T X^T)(y - X\beta) \\
&= \argmin_{\beta} y^T y - y^T X\beta - \beta^T X^T y + \beta^T X^T X \beta \\
&= \argmin_{\beta} \|y\|^2 - 2 y^T X \beta + \beta^T (X^T X) \beta,
\end{split}
\end{equation}
$$

where the last line follows from the fact that transpose is the identity on scalars. Since the first term doesn't involve $\beta$, it won't appear in the first order optimality condition. For the second term, we compute the partial derivative in coordinates as

$$
\begin{equation}
    \begin{split}
    \partial_{\beta^k}(y^TX\beta)&=\partial_{\beta^k} \sum_{i,j} y_i X^i_j \beta^j\\
     &= \sum_{i,j} y_i X^i_j \partial_{\beta^k} \beta^j \\
    &= \sum_{i,j} y_i X^i_j \delta^j_k \\
    &= \sum_i y_i X^i_k \\
    &= (y^T X)_k \\
    &= (X^T y)^k.
    \end{split}
\end{equation}
$$

The last equality follows from the fact that the $k$th entry of a vector and its dual agree, as well as the convention that tangent vectors are column vectors. It follows that

$$
\begin{equation}
\nabla_\beta(y^TX\beta)=X^Ty.
\end{equation}
$$

For the third term, we set $A:=(X^TX)$ and compute

$$
\begin{equation}
\begin{split}
    \partial_{\beta^k}(\beta^T(X^TX)\beta)&=\partial_{\beta^k} (\beta^T A \beta)\\
    &= \partial_{\beta^k} \sum_{i,j} \beta_i A^i_j \beta^j  \\
    &= \sum_{i,j} A^i_j \partial_{\beta^k} (\beta_i \beta^j) \\
    &= \sum_{i,j} A^i_j (\delta_{ki} \beta^j + \beta_i \delta_{k}^j) \\
    &= \sum_{j} A^k_j \beta^j + \sum_i A^i_k \beta_i \\
    &= (A \beta)^k + (\beta^T A)_k \\
    &= (A \beta)^k + (A^T \beta)^k \\
    &= \bigg((A + A^T) \beta\bigg)^k\\
    &= (2(X^TX)\beta)^k.
\end{split}
\end{equation}
$$

It follows that

$$
\begin{equation}
\nabla_\beta(\beta^T(X^TX)\beta)=2(X^TX)\beta.
\end{equation}
$$

We use these computations to obtain first order optimality conditions. The critical point $\hat{\beta}$ satisfies the constraint

$$
\begin{equation}
\begin{split}
0&=\nabla_\beta\|y-X\beta\|^2\\
&=\nabla_\beta \|y\|^2 - 2 \nabla_\beta (y^T X \beta) + \nabla_\beta(\beta^T (X^T X) \beta)\\
&=-2X^Ty+2(X^TX)\hat{\beta}\\
&=-X^Ty+(X^TX)\hat{\beta}.
\end{split}
\end{equation}
$$

Assuming $(X^TX)$ is invertible, it follows that the minimizer is given by the equation

$$
\begin{equation}
\hat{\beta} = (X^TX)^{-1}X^Ty.
\end{equation}
$$

This gives us the affine function of best fit.
