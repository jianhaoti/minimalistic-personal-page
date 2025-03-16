---
title: "Simple Proofs of Markov's and Chebyshev's"
date: "16 March 2025"
tags: ["Probability", "Measure Theory", "Analysis"]
excerpt: "
We record a proofs of Markov's and Chebyshev's inequalities via indicator functions.
"
---

Markov's inequality is fundamentally a statement about indicator functions of superlevel sets. Given a non-negative function $f:X\to \mathbb{R}^{\geq 0}$ and a number $\lambda>0$, consider the superlevel set $S_\lambda$ defined by

$$
\begin{equation}
S_\lambda:=\{x: f(x)\geq \lambda\}.
\end{equation}
$$

It is clear, by construction, the minimum that $f$ can take on $S_\lambda$ is $\lambda$. In other words, on $S_\lambda$,

$$
\begin{equation}
f \geq \lambda.
\end{equation}
$$

If we partition $X=S_\lambda \sqcup (S_\lambda)^c$, then we can convert (2) into an inequality on $X$ by

$$
\begin{equation}
f \geq \begin{cases}
\lambda & \text{in } S_\lambda\\
0 & \text{in } (S_\lambda)^c
\end{cases}= \lambda 𝟙_{S_\lambda},
\end{equation}
$$

where $𝟙_S$ denotes the indicator function of the set $S$. Let $\mu$ denote the measure on $X$. Integrating (3) yields

$$
\begin{equation}
\int_X f\geq \lambda \int_X  𝟙_{S_\lambda} = \lambda \mu(S_\lambda).
\end{equation}
$$

Dividing through by $\lambda$ yields Markov's inequality. When $\mu=\mathbb{P}$ is a probability measure, we can intepret this as a weak tail bound. The statement is for non-negative random variable $X\geq 0$ with finite mean $\mu=E[X]$,

$$
\begin{equation}
\mathbb{P}(X\geq t) \leq \frac{\mu}{t} = O(t^{-1}).
\end{equation}
$$

This isn't very good since it's not even normalized at the mean. We could replace $X$ by $|X-\mu|$, but actually squaring this quantity and using the second moment yields a tighter bound, giving a quadratic decay at infinity. Therefore we additionally assume that $X$ has finite variance. The key insight is that

$$
\begin{equation}
\{x: |X-\mu|\geq t\} = \{x:|X-\mu|^2 \geq t^2\},
\end{equation}
$$

since squaring is monotonically increasing. Apply $\mathbb{P}$ to (6) and using Markov's inequality yields Chebyshev's inequality

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
