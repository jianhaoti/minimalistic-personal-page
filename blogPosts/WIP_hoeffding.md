---
title: "Hoeffding's Inequality via Symmetrization"
date: "30 March 2025"
tags: ["probability", "statistics", "calculus"]
excerpt: "
TODO
"
---

Our first goal is to compute the mgf for a Gaussian random $X\sim \mathcal{N}(\mu,\sigma^2)$. We begin by computing the mgf for the standard Gaussian $N(0,1)$, then we use a change of variables to handle the general case. If $Z\sim \mathcal{N}(0,1)$, then

$$
\begin{equation}
\begin{split}
\mathbb{E}[e^{tZ}]=M_Z(t)&=\int e^{Zt}\frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}Z^2}dZ\\
&=\int \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(Z^2-2Zt)}dZ\\
&=\int \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(Z^2-2Zt+t^2)+\frac{t^2}{2}}dZ\\
&=e^{\frac{t^2}{2}}\int\frac{1}{\sqrt{2\pi}}e^{\frac{-1}{2}(Z-t)^2}dZ\\
&=e^{\frac{t^2}{2}}\int\frac{1}{\sqrt{2\pi}}e^{\frac{1}{2}Y^2}dY\\
&=e^{\frac{t^2}{2}}.
\end{split}
\end{equation}
$$

For the general case, if $X\sim \mathcal{N}(\mu,\sigma^2)$, then we make a change of variables $Z=\frac{X-\mu}{\sigma}$ so that $dX=\sigma dZ$ and

$$
\begin{equation}
\begin{split}
\mathbb{E}[e^{tX}]=M_X(t)&=\int e^{Xt}\frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(X-\mu)^2}{2\sigma^2}}dX\\
&=\int e^{(Z\sigma+\mu)t} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{Z^2}{2}}\sigma dZ\\
&=e^{\mu t}\underbrace{\int \frac{1}{\sqrt{2\pi}}e^{Z\sigma t} e^{-\frac{Z^2}{2}}}_{=M_Z(\sigma t)}\\
&=e^{\mu t} e^{\frac{(\sigma t)^2}{2}}.\\
\end{split}
\end{equation}
$$

Recall the Chernoff bounds we derived in a [previous post](/blog/markov's-inequality). Then,

$$
\begin{equation}
\begin{split}
\min_{s>0} e^{-s(\mu+t)}\mathbb{E}[e^{sX}]&=\min_{s>0}e^{-s(\mu+t)}e^{\mu s}e^{\frac{(\sigma s)^2}{2}}\\
&=\min_{s>0}e^{-s t+\frac{(\sigma s)^2}{2}}\\
\end{split}
\end{equation}
$$

Since minima are preserved under monotonically increasing functions,

$$
\begin{equation}
\argmin_{s>0} e^{-s t+\frac{(\sigma s)^2}{2}} = \argmin_{s>0} -s t+\frac{(\sigma s)^2}{2},
\end{equation}
$$

and the latter occurs exactly when $s=\frac{t}{\sigma^2}$. It follows that

$$
\begin{equation}
\min_{s>0}e^{-s t+\frac{(\sigma s)^2}{2}}= e^{-\frac{t^2}{\sigma^2} + \frac{(\sigma \cdot\frac{t}{\sigma^2})^2}{2}}=e^{-\frac{t^2}{2\sigma}},
\end{equation}
$$

giving us the 1-sided tail bound on the Gaussian

$$
\begin{equation}
\mathbb{P}(X-\mu>t)\leq e^{-\frac{t^2}{2\sigma}}.
\end{equation}
$$

We say a random variable $X$ is $\sigma$ _sub-Gaussian_ if (2) holds with inequality $\leq$. In this case, all the proofs go through and we still achieve the 1-sided tail bound of (6). The classic example is to show Rademacher random variables, i.e. random signs, are $1$ sub-Gaussian.
