---
title: "Monte Carlo and the Curse of Dimensionality"
date: "19 March 2025"
tags: ["probability", "statistics", "calculus", "analysis"]
excerpt: "
We use Monte Carlo integration as a backdrop to explore how introducing probablistic ideas help alleviate the curse of dimensionality.
"
---

The curse of dimensionality is easy to understand - volume grows exponentially with dimension. This implies we need to sample exponentially many data points relative to the number of features in order to have anything meaningful. What isn't so clear is why injecting randomness helps alleviate the issue. We use Monte Carlo integration as a backdrop to investigate this phenomenon.

We open with a seemingly unrelated lemma. In time, we will see that this lemma is the backbone to this phenomenon.

**Lemma.** _On a bounded domain $(\Omega,\mu)$, for $q\geq p$ we have the inclusion $L^q(\Omega,\mu)\subset L^p(\Omega,\mu)$. In fact, up to a constant $C=C(\mu(\Omega),p,q)$ which is independent of the dimension,_

$$
\|f\|_p\leq C \|f\|_q.
$$

<u>Proof.</u> This is an straightforward application of Hölder's inequality. We begin by setting $s$ as the Hölder conjugate to $\frac{q}{p}$. We compute

$$
\begin{equation}
\int_\Omega |f|^p\leq \left(\int_\Omega (|f|^p)^{\frac{q}{p}}\right)^{\frac{p}{q}}\left(\int_\Omega 1^s\right)^{\frac{1}{s}}=\|f\|_q^p \cdot \mu(\Omega)^{\frac{1}{s}}.
\end{equation}
$$

Taking $p$-th roots gives the claim.

Actually, for our purposes, we'll need to control only the variance of a random variable $Y$. In this case, we can achieve a (usually) sharper constant of $1$. For this, we only need the convexity of the $q$-norms.

**Lemma.** _For a random variable $Y\in L^q$ with $q\geq 2$, we have_

$$
\begin{equation}
\mathbb{V}[Y]\leq \|Y\|_q^2.
\end{equation}
$$

_In other words, the standard deviation of $Y$ is controlled by all its higher moments_.

<u>Proof.</u> This is a simple application of Jensen's inequality. When applied to the $s$-norm for $s\geq 1$, it states

$$
\begin{equation}
\mathbb{E}[Y]\leq \left(\mathbb{E}[Y^s]\right)^{\frac{1}{s}}.
\end{equation}
$$

Applying this to $s=\frac{q}{2}$, we see

$$
\begin{equation}
\begin{split}
\mathbb{V}[Y]&= \mathbb{E}[Y^2]-(\mathbb{E}[Y])^2\\
&\leq \mathbb{E}[Y^2]\\
&\leq \left(\mathbb{E}[Y^{2\cdot \frac{q}{2}}]\right)^\frac{2}{q}\\
&\leq \|Y\|_q^2.
\end{split}
\end{equation}
$$

Let's turn to integration. Let $\Omega\subset \R^n$ be a box. Clasically, we'd draw evenly spaced grid lines and integrate by sampling along all corners. As discussed, this is a bad idea by the curse of dimensionality. Instead, let $\mu$ denote the uniform measure on $\Omega$, and we draw $m$ iid samples $X_1,...,X_m$ in $\Omega$. For conveneince, set $X$ as an auxillary random variable also sampled from $(\Omega,\mu)$. Our first goal is to show the random Riemann sum $\frac{1}{m}\sum_{i=1}^m f(X_i)$ forms an unbiased estimator for the true integral $\int_\Omega f\; dx$. We compute

$$
\begin{equation}
\begin{split}
\mathbb{E}\left[\frac{1}{m} \sum_{i=1}^m f(X_i)\right] &= \frac{1}{m} \sum_{i=1}^m \mathbb{E}[f(X_i)] \\
&= \frac{1}{m} \sum_{i=1}^m \mathbb{E}[f(X)] \\
&= \mathbb{E}[f(X)]\\
&= \int_{\R^n} f\; 𝟙_\Omega dx\\
&= \int_\Omega f\; dx.
\end{split}
\end{equation}
$$

By SLLN, as $m\to \infty$, we get that $\frac{1}{m}\sum_{i=1}^m f(X_i) \to \int_\Omega f$ almost surely. As with all these asymptotic results, they're useless in practice. We need information on the rate of convergence. Henceforth, assume $f\in L^q(\Omega)$ for some $q>2$. For example, if $\Omega$ is closed and $f$ is continuous, we automatically get that $f\in L^\infty(\Omega)$. Rates of convergence are measured in the $L^2$ sense _(why?)_, so setting $S_m:=\frac{1}{m}\sum_{i=1}^mf(X_i)$ we see

$$
\begin{equation}
\begin{split}
\mathbb{E}\left(\frac{1}{m}\sum_{i=1}^mf(X_i)- \int_\Omega f dx\right)^2&=\mathbb{E}\left(S_m- \mathbb{E}[S_m] \right)^2\\
&=\mathbb{V}[S_m]\\
&=\frac{1}{m^2}\mathbb{V}[\sum_{i=1}^m f(X_i)]\\
&=\frac{1}{m}\mathbb{V}f(X)\\
&\leq \frac{C(\mu(\Omega),q,2)\|f\circ X\|_q}{m},
\end{split}
\end{equation}
$$

where the last equality follows from our initial lemma. In fact, we could set this constant to be $1$ with our second lemma. Either way, this means the expected error of Monte Carlo integration is _dimension independent_ with rate $O(m^{-\frac{1}{2}})$ when measured in an $L^2$ sense.
