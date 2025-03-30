---
title: "Rescaling Errors"
date: "29 March 2025"
tags: ["probability", "statistics"]
excerpt: "We investigate the appearance of the scaling factor sqrt(n)/σ in the central limit theorem."
---

Recall the strong law of large numbers.

$${}$$

**Theorem [SLLN].** _Let_ $X_1,...,X_n$ _be a sequence of i.i.d. random variables with finite mean_ $\mu$ _and variance_ $\sigma^2.$ _Then, the sequence of sample means_ $\bar{X}_n:=\frac{1}{n}\sum_{i=1}^m X_i$ _converges almost surely to $\mu$. In other words, almost surely_

$$
\begin{equation}
\varepsilon_n:=\bar{X}_n-\mu \to o(1).
\end{equation}
$$

Under a signal-noise interpretation, SLLN tells the signal (mean) dominates asymptotically. This result is sharpened by the central limit theorem.

$${}$$

**Theorem [CLT].** _Let_ $X_1,...,X_n$ _be a sequence of i.i.d. random variables with finite mean_ $\mu$ _and variance_ $\sigma^2.$ _Then the sequence of properly normalized sample means_ $\bar{X}_n:=\frac{1}{n}\sum_{i=1}^mX_i$ _convergences in distribution to the Gaussian_

$$
\begin{equation}
\frac{\sqrt{n}}{\sigma}(\bar{X}_n - \mu)=\frac{\sqrt{n}}{\sigma}\varepsilon_n\xrightarrow{d} \mathcal{N}(0, 1).
\end{equation}
$$

The signal-noise interpretation is that amplifying the signal by the noise (standard deviation) reveals the Gaussian. We try to elucidate the normalization of $\sqrt{n}$ in (2). We begin by asking for a quantitative, pre-asymptotic version of SLLN in order to quantify the decay on the error $\varepsilon_n$. This is the goal of [Chebyshev's inequality](/blog/markov-chebyshev-chernoff). Since the sample variance of $\bar{X}_n$ is $\frac{\sigma^2}{n}$, we compute

$$
\begin{equation}
\mathbb{P}(|\varepsilon_n|\geq t)\leq \frac{\sigma^2}{nt^2}.
\end{equation}
$$

Taking the change of variables $t\mapsto \frac{t\sigma}{\sqrt{n}}$,

$$
\begin{equation}
\mathbb{P}(\frac{\sqrt{n}}{\sigma}|\varepsilon_n|\geq t)=\mathbb{P}\left(|\varepsilon_n|\geq \frac{t \sigma}{\sqrt{n}}\right)\leq \frac{1}{t^2},
\end{equation}
$$

which pins down the scale in natural units on the tolerance as the standard deviation $\frac{\sigma}{\sqrt{n}}$, since the right hand side is no longer artifically dependent on the sample size $n$. Notice the appearce of $\frac{\sqrt{n}}{\sigma}\varepsilon_n$ in both the CLT and Chebyshev's inequality. Both cases point out that amplifying by the standard deviation stablizes the error $\varepsilon_n$, implying its decay rate is of order $O(n^{-1/2})$.
