---
title: "The Dual Problem to SVM"
date: "14 March 2025"
tags: ["calculus", "optimization", "machine learning"]
excerpt: "
We derive the dual problem to soft margin SVM. 
"
---

Suppose we have $m$ data points $(x_1,y_1),...,(x_m,y_m)$, where $y_i\in \{\pm 1\}$. Recall the primal problem of SVM in its constrained form

$$
\begin{equation}
\begin{split}
&\min_{w,b,\epsilon} \frac{1}{2}\|w\|^2 + C\sum_{i=1}^m\epsilon_i,\\
&\text{s.t.} \quad \text{ }y_i(w^Tx_i+b) \geq 1 - \epsilon_i,\\
&\text{and}\quad \epsilon_i \geq 0.
\end{split}
\end{equation}
$$

We set up the Lagrangian from the constraints as follows. Define $2m$ positive variables $\alpha_i,\beta_i\geq 0$ where

$$
\begin{equation}
\begin{split}
&\mathcal{L}(w,b,\epsilon,\alpha,\beta)=\\
&\frac{1}{2}\|w\|^2 + C\sum_{i=1}^m\epsilon_i + \sum_{i=1}^m \alpha_i(1-\epsilon_i-(y_i(w^Tx_i+b))) - \sum_{i=1}^m \beta_i\epsilon_i.
\end{split}
\end{equation}
$$

Our aim is to use first-order optimality conditions to get equations on our old variables, subsitute them into $\mathcal{L}$, then rewrite everything in terms of our new variables. Maximizing the Lagrangian after the subsitution converts the primal problem into the dual. Taking derivative in the $w^j$th direction gives

$$
\begin{equation}
\begin{split}
0=\frac{\partial \mathcal{L}}{\partial w^j}&=\frac{1}{2}\frac{\partial}{\partial w^j}\sum_{i=1}^n (w^i)^2-\frac{\partial}{\partial w^j}\sum_{i=1}^m \alpha_i y_i (\sum_{k=1}^n w_kx^k_i)\\
&=\frac{1}{2}\sum_{i=1}^m w^i\delta^i_j - \sum_{i,k=1}^m \alpha_iy_ix_i^k\delta_{jk}\\
&=w^j-\sum_{i=1}^m \alpha_iy_ix^j_i.
\end{split}
\end{equation}
$$

Since this holds for each coordinate $w^j$, this implies

$$
\begin{equation}
w=\sum_{i=1}^m \alpha_i y_ix_i.
\end{equation}
$$

Taking a derivative in the $b$th direction gives

$$
\begin{equation}
0=\frac{\partial \mathcal{L}}{\partial b}=-\sum_{i=1}
^m \alpha_iy_i.
\end{equation}
$$

Taking a derivative in the $\epsilon_j$th direction gives

$$
\begin{equation}
\begin{split}
0=\frac{\partial \mathcal{L}}{\partial \epsilon_j}&=C\frac{\partial}{\partial \epsilon_j}\sum_{i=1}^m \epsilon_i- \frac{\partial}{\partial \epsilon_j}\sum_{i=1}^m \alpha_i\epsilon_i- \frac{\partial}{\partial \epsilon_j} \sum_{i=1}^m \beta_i\epsilon_i\\
&=C\sum_{i=1}^m\delta_{ij}-\sum_{i=1}^m\alpha_i\delta_{ij}-\sum_{i=1}^m\beta_i\delta_{ij}\\
&=C-\alpha_j-\beta_j.
\end{split}
\end{equation}
$$

This, of course, implies

$$
\begin{equation}
\beta_j=C-\alpha_j.
\end{equation}
$$

Subsituting these constraints in gives us the dual objective function $\mathcal{L}^*$, which we maximize below.

$$
\begin{equation}
\begin{split}
\max_{\alpha,\beta} \mathcal{L}^* &= \max_{\alpha}\frac{1}{2} \left\|\sum_{i=1}^m \alpha_i y_i x_i \right\|^2+ \underbrace{C\sum_{i=1}^m\epsilon_i}_{(*)}- \sum_{i=1}^m (\underbrace{C}_{(*)}-\underbrace{\alpha_i}_{(**)}) \epsilon_i\\
&\quad \quad +\sum_{i=1}^m \alpha_i \underbrace{- \sum_{i=1}^m \alpha_i\epsilon_i}_{(**)} - \sum_{i=1}^m \alpha_iy_i(w^Tx_i+\cancel{b})\\

&=\max_\alpha \frac{1}{2} \sum_{i,j=1}^m \alpha_i \alpha_j y_i y_j x_i^T x_j + \sum_{i=1}^m \alpha_i\\
&\quad \quad - \sum_{i=1}^m \alpha_i y_i \left(\sum_{j=1}^m \alpha_j y_j x_j^T \right)x_i\\

&=\max_\alpha -\frac{1}{2} \sum_{i,j=1}^m \alpha_i \alpha_j y_i y_j x_i^T x_j + \sum_{i=1}^m \alpha_i\\
&=\min_\alpha \frac{1}{2} \sum_{i,j=1}^m \alpha_i \alpha_j y_i y_j x_i^T x_j - \sum_{i=1}^m \alpha_i\\
\end{split}
\end{equation}
$$

For our constraints, one comes from $\sum_{i=1}^m\alpha_iy_i=0$. A second comes from $\alpha_i\geq 0$. The last comes from

$$
\begin{equation}
C\geq \alpha_i+\beta_i\geq \alpha_i,
\end{equation}
$$

since $\beta_i\geq 0$. This gives the full dual problem to SVM as

$$
\begin{equation}
\begin{split}
&\min_\alpha \frac{1}{2} \sum_{i,j=1}^m \alpha_i \alpha_j y_i y_j x_i^T x_j - \sum_{i=1}^m \alpha_i\\
&\text{s.t.} \quad \sum_{i=1}^m\alpha_iy_i=0,\\
&\text{and}\quad 0\leq \alpha_i\leq C.
\end{split}
\end{equation}
$$
