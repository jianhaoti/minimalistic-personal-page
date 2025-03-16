---
title: "The Russian Tail Bounds"
date: "16 March 2025"
tags: ["Probability", "Measure Theory", "Analysis"]
excerpt: "
We record a simple proof of Markov's inequality via indicator functions, then discuss how how to tighten it using various transformations.
"
---

Markov's inequality is fundamentally a statement about indicator functions of superlevel sets. Given a non-negative function $f:X\to \mathbb{R}^{\geq 0}$ and a number $t>0$, consider the superlevel set $S_t$ defined by

$$
\begin{equation}
S_t:=\{x: f(x)\geq t\}.
\end{equation}
$$

It is clear, by construction, the minimum that $f$ can take on $S_t$ is $t$. In other words, on $S_t$,

$$
\begin{equation}
f \geq t.
\end{equation}
$$

If we partition $X=S_t \sqcup (S_t)^c$, then we can convert (2) into an inequality on $X$ by

$$
\begin{equation}
f \geq \begin{cases}
t & \text{in } S_t\\
0 & \text{in } (S_t)^c
\end{cases}= t 𝟙_{S_t},
\end{equation}
$$

where $𝟙_S$ denotes the indicator function of the set $S$. Let $\mu$ denote the measure on $X$. Integrating (3) yields

$$
\begin{equation}
\int_X f\geq t \int_X  𝟙_{S_t} = t \mu(S_t).
\end{equation}
$$

Dividing through by $t$ yields [Markov's inequality](https://en.wikipedia.org/wiki/Markov%27s_inequality). When $\mu=\mathbb{P}$ is a probability measure, we can intepret this as a weak tail bound. For a non-negative random variable $X\geq 0$ with finite mean $\mu=E[X]$,

$$
\begin{equation}
\mathbb{P}(|X-\mu|\geq t) \leq \frac{\mathbb{E}|X-\mu|}{t} = O(t^{-1}).
\end{equation}
$$

Let's begin improving this. Using the second moment yields an even tighter bound that gives a quadratic decay at infinity. Therefore, we additionally assume that $X$ has finite variance. The key insight is that

$$
\begin{equation}
\{x: |X-\mu|\geq t\} = \{x:|X-\mu|^2 \geq t^2\},
\end{equation}
$$

since squaring is monotonically increasing. Apply $\mathbb{P}$ to (6) and using Markov's inequality yields [Chebyshev's inequality](https://en.wikipedia.org/wiki/Chebyshev%27s_inequality)

$$
\begin{equation}
\begin{split}
\mathbb{P}(|X-\mu|\geq t) &= \mathbb{P}(|X-\mu|^2 \geq t^2)\\
&\leq \frac{\mathbb{E}[|X-\mu|^2]}{t^2}\\
&= \frac{\mathbb{V}[X]}{t^2}\\
&=O(t^{-2}).
\end{split}
\end{equation}
$$

Our Pavlovian reaction to witnessing Chebyshev's inequality is to try higher and higher central moments in order to improve the polynomial decay. Chernoff does us one better by obtaining an exponential bound using _all_ the central moments at once via the exponential function $\exp(z)=\sum_{k=1}^\infty \frac{z^k}{k!}$. We additionally assume the mgf of $X$ is defined in a neighborhood of $0$, and let $s\geq 0$ be a small enough free parameter. Then,

$$
\begin{equation}
\begin{split}
\mathbb{P}(X-\mu\geq t) &=\mathbb{P}(\exp(s(X-\mu))\geq \exp(st))\\
&\leq \frac{\mathbb{E}[\exp(s(X-\mu))]}{\exp(st)}\\
&\leq \frac{\exp(\mathbb{E}[s(X-\mu)])}{\exp(st)}\\
&= \frac{\exp(s(\mathbb{E}[X]-\mu))}{\exp(st)}\\
&= \exp(-s(\mu+t))\exp(s E[X])\\
&=O(\exp(-t)),
\end{split}
\end{equation}
$$

where the third line is [Jensen's inequality](https://en.wikipedia.org/wiki/Jensen%27s_inequality). Minimizing over $s$ in the domain where the mgf of $X$ is defined yields [Chernoff's inequality](https://en.wikipedia.org/wiki/Chernoff_bound). It's important to note that we've dropped the absolute value in the discussion of Chernoff, so this is really a 1-sided bound, i.e. we implicitly assumed that $X$ lies above its mean.
