---
title: "Perturbations to Flow Networks"
date: "5 March 2025"
tags: ["Algorithms"]
excerpt: "
We discuss how to find a min cut with the minimum number of edges via a perturbative argument on flow networks.
"
---

This post is adapted from a homework problem in my algorithms class. The goal is to find a best min in a flow network $G$, where a _best min cut_ is defined to be a min cut with the minimum number of crossing edges.

$${}$$

The solution comes from analyzing the behavior of cuts when we perturb $G$ in both an _additive_ and _multiplicative_ manner. We define the additive perturbation by $\alpha$ as the flow network $G+\alpha$, where all capacities increase by an additive factor of $\alpha$. We define the multiplicative perturbation by $\beta$ as the flow network $\beta G$, where all capacities increase by a multiplicative factor of $\beta$. The underlying observation is that cuts are purely topological, while our perturbations affect only the value of the capacities. (In particular, we're not in the business of taking [graph limits](https://ocw.mit.edu/courses/18-217-graph-theory-and-additive-combinatorics-fall-2019/b28726e8c835f149e978ee24a6294d81_MIT18_217F19_ch5.pdf).) Therefore, cuts will be preserved by our perturbations, but their values will not.

$${}$$

Let $C$ be a cut in $G$ with a total capacity of $c=\sum_{i=1}^k c_i$, where $c_i$ is the capacity of the $i$th crossing edge. When we perturb our flow multiplicatively by $\beta$, the value of $C$ in $\beta G$ becomes
$\beta c$ by the distributive property. It's important to note that min cuts in $G$ will remain min cuts in $\beta G$ for $\beta >0$, since multiplication by $\beta$ is monotonic. When we perturb the flow network additively by $\alpha$, the value of $C$ in $G+\alpha$ becomes

$$
\begin{equation}
\sum_{i=1}^k(c_i+\alpha)=c+k\alpha.
\end{equation}
$$

In particular, note that the factor $k\alpha$ counts of the number of edges between a cut, up to a scaling factor of $\alpha$. However, for the same reason, minimality may be destroyed. Consider the case where we have a cut with a single edge of capacity $d$ in $G$, and a best min cut has capacity $c$ and $k$ edges. Therefore, $c\leq d$ in $G$. However, looking at the value of these cuts in $G+\alpha$, it is no longer true that the inequality

$$
\begin{equation}
c+k\alpha \leq d+\alpha
\end{equation}
$$

necessarily holds if $k$ is large enough. This dependence on $k$ can cause arbitrarily large additive errors. For this reason, we cannot look for best min cuts in $G+\alpha$, but we must look in to $\beta G+\alpha$ for large enough $\beta$. Scaling up the capacities first will cause any additive errors to be small.

$${}$$

For concreteness, we pin down additive the scaling factor as $\alpha=1$, and it turns out $\beta=|E|+1$ will be a large enough scaling prefactor. Let $H$ denote the flow network $(|E|+1)G+1$. Let $D$ be an _non-minimal_ cut in $G$ with value $d$ and $\ell$ edges, and let $C$ be a best minimal cut with value $c$. In particular, $d\geq c+1$. It follows that

$$
\begin{equation}
\begin{split}
val_{H}(D)=(|E|+1)d+\ell&> (|E|+1)d\\
&\geq(|E|+1)(c+1)\\
&> (|E|+1)c + |E|\\
&\geq val_H(C),
\end{split}
\end{equation}
$$

where the last line follows because $C$ can have at most $|E|$ crossing edges. This proves that non-minimal cuts in $G$ will remain non-minimal cuts in $H$. Therefore, a minimal cut in $H$ corresponds to a best minimal cut in $G$.
