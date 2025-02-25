---
title: "Bias-Variance, Randomness, and Gauss-Markov"
date: "22 February 2025"
tags: ["Machine Learning", "Probability", "Randomness", "Statistics"]
excerpt: "We use the bias-variance decomposition in machine learning as a backdrop to explore some probability-theoretic ways of thinking. We also make a comparison between the bias in Gauss-Markov and in bias-variance."
---

All the computer scientists I've talked to have a very intuitive grasp of randomness, which comes through in the language they use. They'll say phrases like "sources of randomness" which reflects a level of comfort that I'd like to achieve. Let's explore this line of thinking.

$$\text{ }$$

**Setup.** Let's suppose the "true" relation between features $x$ and labels $y$ is given by the function $f$. The goal is to learn $f$, through restricted access via $y$. This will be further complicated by the noise in the system (due to measurement error, random fluctuations, white noise, etc). This leads us to model our relation between features and labels as a deterministic-random decomposition

$$
\begin{equation}
y=f(x)+\epsilon,\end{equation}
$$

where $\epsilon$ is assumed to to have mean $0$ and variance $\sigma^2$. The mean $0$ assumption is natural, and as far as I can tell, finite variance is a smallness assumption on the noise. Furthermore, we assume that $x,\epsilon$ are independent, because why wouldn't they be?

$$\text{}$$

Let $\hat{y}$ be whatever predictor we built in our effort to learn $f$. This requires training data, denoted by $\mathcal{D}$, and different training data will lead to different predictors $\hat{y}$. This accounts for the first source of randomness, namely in the variability in the training data. Furthermore, since the creation of $\hat{y}$ is via a deterministic process, all of the randomness in $\hat{y}$ is concentrated in the variability of $\mathcal{D}$.

$$\text{ }$$

**Statistics.** In order to measure how badly our model $\hat{y}$ predicts labels $\mathbb{y}$, we introduce a _loss function_ $L(x)=L(y(x),\hat{y}(x))$, where $x$ is a fixed but arbitrary test point. Of course testing over individual points is too much information, so we average over points in $x$ to define the _test error_ statistic

$$
\begin{equation}
Err_{\mathcal{D}}:=\mathbb{E}^x[L|\mathcal{D}].
\end{equation}
$$

This accounts for the second source of randomness, namely averaging over test data. $Err_\mathcal{D}$ forms a measurement, _wrt a chosen L_, of the performance of the estimator $\hat{y}$. We emphasize again that $\hat{y}$ is fixed since $\mathcal{D}$ is, and test points $x$ are averaged over. This makes it a dead-end approach. To see why, assume that $x$ is drawn from some distribution with a density $p$. Then, the test error is given by the formula

$$
\begin{equation}
Err_{\mathcal{D}}=\int_{x\in \mathbb{R}^n} L(x)p(x)dx.
\end{equation}
$$

In order to compute $Err_{\mathcal{D}}$, we would need complete knowledge of the density function $p$. Equivalently, this means we need to know the distribution that $x$ was sampled from. However, since _we can only draw finitely many samples_ (via a training set $\mathcal{D}$), we can only estimate $p$.

$$\text{}$$

To circumvent this problem, we instead compute the _expected generalization error_ by averaging the test error over all training data $\mathcal{D}$,

$$
\begin{equation}
Err:=\mathbb{E}^\mathcal{D}[Err_{\mathcal{D}}]=\mathbb{E}^{x,\mathcal{D}}[L],
\end{equation}
$$

where we take a joint expectation over both the test points and the training data $\mathcal{D}$ used to build our model $\hat{y}$. The insight is to use the [tower law / Fubini's theorem](https://en.wikipedia.org/wiki/Law_of_total_expectation) to flip the order of iterating expectations. This allows us to write the expected generalization error as

$$
\begin{equation}
Err=\mathbb{E}^{\mathcal{x}}[\mathbb{E}^{\mathcal{D}}[L|x]],\\
\end{equation}
$$

where the inner expectation averages over training data $\mathcal{D}$ and the outer expectation averages over test points $x$.

$$\text{}$$

**Bias-variance.** The goal of this section is to calculate the inner expectation $Err(x):=\mathbb{E}^{\mathcal{D}}[L|x]$ when $L$ is the $L^2$ loss (how else would variance enter?). For notation, we denote the conditional expectation with subscripts

$$
\begin{equation}
\mathbb{E}_x[f]:=\mathbb{E}[f|x].
\end{equation}
$$

On a test data point $(x,y)$,

$$
\begin{equation}
\begin{split}
Err(x) &= \mathbb{E}[(y-\hat{y})^2|x]\\
&=\mathbb{E}_x[(y-\hat{y})^2]\\
&=\mathbb{E}_x[(f+\epsilon-\hat{y})^2]\\
&=\mathbb{E}_x[(f-\hat{y})^2+\epsilon^2-2(f-\hat{y})\epsilon]\\
&=\mathbb{E}_x[(f-\hat{y})^2]+\mathbb{E}_x[\epsilon^2]-2\mathbb{E}_x[(f-\hat{y})\epsilon]\\
&=\mathbb{E}_x[(f-\hat{y})^2]+\mathbb{E}_x[\epsilon^2]-2\mathbb{E}_x[(f-\hat{y})]\mathbb{E}_x[\epsilon].\\
\end{split}
\end{equation}
$$

The last line requires some justification. Recall that $x,\epsilon$ are assumed to be independent. First, since $f$ is deterministic in $x$, it follows that $f,\epsilon$ are independent. The second point is a bit more subtle. Recall that the sources of randomness in $\hat{y}$ are from variability in the training data $\mathcal{D}$ and from the test data $x$. When conditioned on $x$, the only source of randomness is from $\mathcal{D}$. In particular, none of the randomness in $\hat{y}$ comes from any randomness in the noise in the test data $\epsilon$. Therefore, $\epsilon,\hat{y}$ are also independent. The last line follows. We continue

$$
\begin{equation}
\begin{split}
Err(x) &= \mathbb{E}_x[(f-\hat{y})^2]+\mathbb{E}_x[\epsilon^2]-2\mathbb{E}_x[(f-\hat{y})]\mathbb{E}_x[\epsilon]\\
&=\mathbb{E}_x[(f-\hat{y})^2]+\mathbb{E}[\epsilon^2]-2\mathbb{E}_x[(f-\hat{y})]\underbrace{\mathbb{E}[\epsilon]}_{=0}\\
&=\mathbb{E}_x[(f-\hat{y})^2]+\mathbb{E}[\epsilon^2]-\underbrace{\mathbb{E}[\epsilon]^2}_{=0^2}\\
&=\mathbb{E}_x[f^2-2f\hat{y}+\hat{y}^2]+\sigma^2\\
&=\mathbb{E}_x[f^2]-2\mathbb{E}_x[f\hat{y}]+\mathbb{E}_x[\hat{y}^2]+\sigma^2\\
&=\mathbb{E}_x[f^2]-2\mathbb{E}_x[f\hat{y}]+\mathbb{E}_x[\hat{y}^2]\pm\mathbb{E}_x[\hat{y}]^2+\sigma^2\\
&=\mathbb{E}_x[f^2]-2\mathbb{E}_x[f\hat{y}]+\mathbb{E}_x[\hat{y}]^2+\mathbb{V}_x[\hat{y}]+\sigma^2\\
&=\mathbb{f}(x)^2\underbrace{\mathbb{E}_x[1]}_{=1}-2f(x)\mathbb{E}_x[\hat{y}]+\mathbb{E}_x[\hat{y}]^2+\mathbb{V}_x[\hat{y}]+\sigma^2.\\
\end{split}
\end{equation}
$$

In the second line, we use the fact that $x,\epsilon$ are independent to get rid of the conditioning on $x$. In the last line, we use the fact that $f$ is deterministic, so conditioning is just evaluation. Therefore,

$$
\begin{equation}
\begin{split}
Err(x)&=\mathbb{f}(x)^2-2f(x)\mathbb{E}_x[\hat{y}]+\mathbb{E}_x[\hat{y}]^2+\mathbb{V}_x[\hat{y}]+\sigma^2\\
&=\underbrace{(f(x)-\mathbb{E}_x[\hat{y}])^2}_{\text{Bias(x)}^2}+\mathbb{V}_x[\hat{y}]+\sigma^2.
\end{split}
\end{equation}
$$

**Gauss-Markov.** Gauss-Markov tells us that OLS is unbiased and variance minimizing among all linear unbiased estimators. At a glance, this seems to contradict most of the pictures drawn when discussing bias-variance. Usually, the picture suggests that the data follows a (e.g.) quadratic $f$, and linear models are said to underfit with high-bias-low-variance, while high degree polynomials are said to overfit with low-bias-high-variance. So why can Gauss-Markov claim that OLS, a linear function, is unbiased? Are we overloading the word bias?

$$\text{}$$

First, realize that built into Gauss-Markov are stronger assumptions on the errors, but more importantly, the underlying assumption that the true function $f$ is linear in the features. This restricts your search space to affine functions from the get-go. In other words, we assume that

$$
\begin{equation}
y= X\beta +\epsilon,
\end{equation}
$$

for some column vector $\beta$ and design matrix $X$. This resolves the apparent contradiction that arose with the pictures. Now for a discussion of two senses of "bias". In classical OLS, we solve for the estimator $\hat{\beta}$ as

$$
\begin{equation}
\hat{\beta} = (X^TX)^{-1}X^Ty,
\end{equation}
$$

which is calculated in [this blog post](/blog/OLS-derivation). The claim that "OLS is unbiased" is classically understood in terms of _parameter estimation_, namely $\mathbb{E}[\hat{\beta}|X]=\beta$. Note that the design matrix (training data) is seen as a deterministic given. The proof of this comes from expanding out $\hat{\beta}$ as

$$
\begin{equation}
\begin{split}
\hat{\beta}&=(X^TX)^{-1}X^Ty\\
&=(X^TX)^{-1}X^T (X\beta+\epsilon)\\
&=(X^TX)^{-1}X^TX\beta+(X^TX)^{-1}X^T\epsilon\\
& =\beta + (X^TX)^{-1}X^T\epsilon,
\end{split}
\end{equation}
$$

and so

$$
\begin{equation}
\begin{split}
    \mathbb{E}[\beta-\hat{\beta}|X]&=\mathbb{E}[(X^TX)^{-1}X^T\epsilon|X]\\
    &=(X^TX)^{-1}X^T\mathbb{E}[\epsilon|X]\\
    &=0.
\end{split}
\end{equation}
$$

In machine learning, however, we're more interested in predictions. So let's instead view OLS as a _prediction model_. In this case, the bias of OLS is now understood as

$$
\begin{equation}
\begin{split}
\text{Bias}(x)&=f(x)-\mathbb{E}^X[\hat{y}|x]\\
&= x^T\beta-\mathbb{E}^X[x^T\hat{\beta}|x]
\end{split}
\end{equation}
$$

where we now take expectation over design matrices $X$, and $(x, x^T\hat{\beta})$ is a fixed test point. Note that the design matrix is now random. To show OLS is unbiased in this sense, it follows from the fact that $\mathbb{E}^X[\hat{\beta}|x]=\beta$. Assuming this, we compute

$$
\begin{equation}
\begin{split}
\text{Bias}(x)&=x^T\beta-\mathbb{E}^X[x^T\hat{\beta}|x]\\
&=x^T(\beta-\mathbb{E}^X[\hat{\beta}|x])\\
&=0.
\end{split}
\end{equation}
$$

To show this fact, we compute

$$
\begin{equation}
\begin{split}
\mathbb{E}^X[\hat{\beta}|x]&=\mathbb{E}^X[(X^TX)^{-1}X^TY|x]\\
&=\mathbb{E}^X[(X^TX)^{-1}X^T(X\beta+\epsilon)|x]\\
&=\mathbb{E}^X[\beta|x]+\mathbb{E}[(X^TX)^{-1}X^T\epsilon|x]\\
&=\beta+\mathbb{E}[(X^TX)^{-1}X^T|x]\underbrace{\mathbb{E}[\epsilon|x]}_{=0},
\end{split}
\end{equation}
$$

where the last equality comes from the fact that $\epsilon$ is randomness from the test data, which is independent from the randomness that comes from the training data $X$. Compare equations $(13)$ and $(16)$. It's interesting to note that the two senses of unbiased basically follow the same proof, up until the last line.

<!--
**Rant.** I _really_ dislike that people tend to suppress specifying which which variable is being integrated over when writing down an expectation with multiple sources of randomness. Did your teacher not take off enough points when you wrote

$$
\begin{equation}
\int f(x,y)
\end{equation}
$$

in your calc III classes? -->
