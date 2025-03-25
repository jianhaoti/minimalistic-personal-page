---
title: "Failure of the Central Limit Theorem"
date: "20 March 2025"
tags: ["probability", "statistics", "calculus"]
excerpt: "We discuss why a naive application of a CLT approximation fails, motivating us to develop Hoeffding's inequality."
---

Consider the following example. Given $n$ independent, fair coin flips, estimate the chace that we see $75\%$ heads. Rephrasing, we define the random variable $S_n:=\# \text{heads for } n \text{ flips}$, and we seek an upper bound on $\mathbb{P}(S_n\geq \frac{3}{4}n)$. Observe that we've framed this question as asking for a tail bound. Since $S_n\sim \text{Binom}(n,\frac{1}{2}),$ its expected value and variance is given by $\mathbb{E}S_n=\frac{n}{2}$ and $\mathbb{V}S_n=\frac{n}{4}$. As a first pass, we use [Chebyshev's](/blog/markov's-inequality) to estimate

$$
\begin{equation}
\begin{split}
\mathbb{P}\left(S_n\geq \frac{3}{4}n\right)&=\mathbb{P}\left(S_n - \mathbb{E}S_n\geq \frac{3}{4}n-\frac{1}{2}n\right)\\
&\leq \mathbb{P}\left(|S_n - \mathbb{E}S_n|\geq \frac{n}{4}\right)\\
&\leq \frac{\mathbb{V}S_n}{(\frac{n}{4})^2}\\
&=\frac{4}{n}.
\end{split}
\end{equation}
$$

Can we get exponential bounds on the tail? One idea of attack is to the de Moivre-Laplace CLT which states that a properly normalized $S_n$ converges to the standard Gaussian $\mathcal{N}(0,1)$. As we'll calculate below, the Gaussian has exponentially tails, so for large $n$ we can replace a normalized $S_n$ with the Gaussian to get our desired tail bound. Let $X\sim \mathcal{N}(0,1)$, then using a change of variables $y=x-t$ we compute

$$
\begin{equation}
\begin{split}
\mathbb{P}(X\geq t)&=\int_t^\infty \frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}dx\\
&=\int_0^\infty \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}}e^{-ty}\underbrace{e^{-\frac{y^2}{2}}}_{\leq 1}dy\\
&\leq\frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}}\underbrace{\int_0^\infty e^{-ty}dy}_{=\frac{1}{t}}\\
&=\frac{1}{t\sqrt{2\pi}}e^{-\frac{t^2}{2}}.
\end{split}
\end{equation}
$$

We're in good shape. Let's carry out this mode of attack. Let us define the normalization $Z_n:=\frac{S_n-\mathbb{E}S_n}{\sqrt{\mathbb{V}[S_n]}}$. Then, for large $n$,

$$
\begin{equation}
\begin{split}
\mathbb{P}\left(S_n\geq \frac{3}{4}n\right)&=\mathbb{P}\left(S_n-\frac{n}{2}\geq \frac{n}{4}\right)\\
&=\mathbb{P}\left(\frac{S_n- \frac{n}{2}}{\sqrt{\frac{n}{4}}}\geq \frac{\frac{n}{4}}{\sqrt{\frac{n}{4}}}\right)\\
&=\mathbb{P}\left(Z_n\geq \sqrt{\frac{n}{4}}\right)\\
&\approx \frac{1}{\sqrt{2\pi}}e^{-\frac{\left(\sqrt{\frac{n}{4}}\right)^2}{2}}\\
&\leq\frac{1}{n\sqrt{2\pi}}e^{-\frac{n}{8}}.
\end{split}
\end{equation}
$$

The approximation is by de Moivre-Laplace CLT, while the inequality is by the Gaussian tails computation. All good? No. What fails is this argument is that the approximation error large, on the order of $O(N^{-\frac{1}{2}})$, so in fact the final inequality would be on this order. This is worse than our initial Chebyshev's bound! The relevant fact here is the Berry-Esseen CLT theorem, which is a quantitative, pre-asymptotic version of CLT.

$$\text{}$$

**Theorem [Berry-Esseen].** _Suppose that $X_i$ is a sequence of iid random variables with mean $0$ and variance $1$, and $X_1$ has a finite third moment. Let $Y\sim \mathcal{N}(0,1)$. Then,_

$$
\begin{equation}
\left|\mathbb{P}\left(\frac{1}{\sqrt{n}}\sum_{i=1}^nX_i\geq t\right)-\mathbb{P}(Y\geq t) \right|\leq \frac{C}{\sqrt{N}}.
\end{equation}
$$

Note that we've chosen this normalization so it has mean $0$ and varaince $1$ which makes it comprable to $\mathcal{N}(0,1)$. The asymptotics of Berry-Esseen are actually sharp, by considering specific binomial distributions. To circumvent this issue, we develop [Hoeffding's inequality](/blog/hoeffding) which will directly give an exponential tail bound.

$$\text{}$$

**Theorem [Hoeffding].** _Suppose $X_1,...,X_n$ are bounded random variables such that $X_i\in [a_i,b_i]$. Then,_

$$
\begin{equation}
\mathbb{P}\left(\frac{1}{\sqrt{n}}\sum_{i=1}^n(X_i-\mathbb{E}X_i)\geq t\right)\leq \exp\left(-\frac{2nt^2}{\sum_{i=1}^n (b_i-a_i)^2}\right).
\end{equation}
$$

_In particular, if all $X_i$ are drawn from the same distribution, have mean $0$, and $X_i\in[a,b]$, then_

$$
\begin{equation}
\mathbb{P}\left(\frac{1}{\sqrt{n}}\sum_{i=1}^nX_i\geq t\right)\leq \exp\left(-\frac{2t^2}{(b-a)^2}\right).
\end{equation}
$$
