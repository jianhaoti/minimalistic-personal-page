---
title: "Stein's Paradox "
date: "23 September 2025"
tags: ["probability", "geometry", "measure theory", "analysis"]
excerpt: "
We present the ideas behind Stein's paradox via radial symmmetry. This avoids integration by parts.

"
---

Let $X\in \mathcal{N}^d(\theta,I)$ be sampled from a Gaussian in $d$ dimensions. Charles Stein famously showed that for $d\geq 3$, $X$ is an inadmissible predictor of $\theta$. Namely, he constructed an estimator with uniformly lower mean squared error. Define the James-Stein estimator as

$$
\begin{equation}
JS(X):=\begin{cases}(1-\frac{d-2}{\|X\|^2})X & X\neq 0\\
0 & X=0.\end{cases}
\end{equation}
$$

We center coordinates at $\theta=0$ via, say, an oracle. It turns out centering anywhere works (as it should), but this choice will be convenient for calculations. The goal is to show the inequality

$$
\begin{equation}
\mathbb{E}\|\theta-X\|^2 > \mathbb{E}\|\theta-JS(X)\|^2.
\end{equation}
$$

Let $\gamma$ denote the Gausisan measure, and $\chi$ denote the $\chi$-measure. Since $\theta=0$,

$$
\begin{equation}
\begin{split}
\mathbb{E}\|\theta-X\|^2&=\mathbb{E}\|X\|^2\\
&=\int_{\R^d} \|X\|^2 d\gamma\\
&=\int_0^\infty r^2d\chi.
\end{split}
\end{equation}
$$

Next, again since $\theta=0$,

$$
\begin{equation}
\begin{split}
 \mathbb{E}\|\theta-JS(X)\|^2&=\int_{\R^d} \|JS(X)\|^2d\gamma\\
 &=\int_{\R^d} \|(1-\frac{d-2}{\|X\|^2})X)\|^2d\gamma\\
 &=\int_0^\infty (1-\frac{d-2}{r^2})^2r^2 d\chi.\\
\end{split}
\end{equation}
$$

To show positivity of (2), it suffices to show positivity of the integrand _wrt_ the $\chi$ measure in (3)-(4)

$$
\begin{equation}
r^2-(1-\frac{d-2}{r^2})^2r^2>0.
\end{equation}
$$

After some algebra, inequality (4) holds iff $d>2$.
