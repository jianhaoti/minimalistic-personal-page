---
title: "A Simple Proof of Markov's Inequality"
date: "16 March 2025"
tags: ["Probability", "Measure Theory", "Analysis"]
excerpt: "
We record a simple proof of Markov's inequlity via indicator functions.
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

Dividing through by $\lambda$ yields Markov's inequality. When $\mu=\mathbb{P}$ is a probability measure, we can intepret this as a weak tail bound.
