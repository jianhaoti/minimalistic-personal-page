---
title: "Jensen's Implies Cauchy-Schwarz"
date: "11 September 2025"
tags: ["probability", "statistics", "calculus", "analysis"]
excerpt: "
We derive Cauchy-Schwarz via Jensen's inequality.
"
---

In this, we aim to prove the following theorem

$${}$$

**Theorem [Cauchy-Schwarz].** Given $u_i,v_i\in \R$,

$$
\begin{equation}
\sum_{i=1}^n u_iv_i\leq \sqrt{\sum_{i=1}^n u_i^2}\sqrt{\sum_{i=1}^n v_i^2}.
\end{equation}
$$

via the following inequality

$${}$$

**Theorem [Jensen's].** Given a random vector $Z\in \R^n$ and $f$ concave,

$$
\begin{equation}
\mathbb{E}[f(Z)]\leq f(\mathbb{E}[Z]).
\end{equation}
$$

$${}$$

The key is concavity of the function $f(x,y):=x^py^{1-p}$ for $x,y> 0$ and $0\leq p\leq 1$. Applying Jensen's to $f$ yields

$$
\begin{equation}
\mathbb{E}[f(X,Y)]\leq f(\mathbb{E}[X,Y]).
\end{equation}
$$

Let $X,Y$ be r.v.'s taking values in $\{x_i\},\{y_i\} \subset \mathbb{R}^{>0}$, both with probabilities $\{\lambda_i\}$. We analyzie the left and right hand sides of $(4)$.

$$
\begin{equation}
\begin{split}
\text{LHS} &= \mathbb{E}[X^pY^{1-p}]\\
&=\sum_{i=1}^n \lambda_i x_i^py_i^{1-p}
\end{split}
\end{equation}
$$

and

$$
\begin{equation}
\begin{split}
\text{RHS} &= f\left(\sum_{i=1}^n \lambda_ix_i, \sum_{i=1}^n\lambda_iy_i\right)\\
&=\left(\sum_{i=1}^n \lambda_ix_i\right)^p\left(\sum_{i=1}^n \lambda_i y_i\right)^{1-p}.
\end{split}
\end{equation}
$$

Now set $\lambda_i=1/n$ and $p=1/2$. Thus,

$$
\begin{equation}
\begin{split}
\text{LHS} &= \frac{1}{n}\sum_{i=1}^n x^{1/2}y^{1/2}\\
&=\frac{1}{n}\sum_{i=1}^n \sqrt{x_iy_i}
\end{split}
\end{equation}
$$

and

$$
\begin{equation}
\begin{split}
\text{RHS} &=\sqrt{\sum_{i=1}^n \frac{x_i}{n}}\sqrt{\sum_{i=1}^n \frac{y_i}{n}}
\\
&=\left(\sqrt{\frac{1}{n}}\right)^2 \sqrt{\sum_{i=1}^n x_i} \sqrt{\sum_{i=1}^n y_i}.
\end{split}
\end{equation}
$$

Cancelling the $1/n$ on both sides, and performing a change of variables $u_i:=\sqrt{x_i}$ and $v_i:=\sqrt{y_i}$ (recall x,y>0 so we can take square roots) yield

$$
\begin{equation}
\begin{split}
\text{LHS} &= \sum_{i=1}^n \sqrt{u_i^2v_i^2}\\
&=\sum_{i=1}^nu_iv_i
\end{split}
\end{equation}
$$

and

$$
\begin{equation}
\begin{split}
\text{RHS}
&= \sqrt{\sum_{i=1}^n u_i^2} \sqrt{\sum_{i=1}^n v_i^2},
\end{split}
\end{equation}
$$

yielding the conclusion for $u_i,v_i>0$. The other cases are obvious.
