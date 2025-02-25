---
title: "A Geometer's Derivation of the Graph Laplacian"
date: "26 October 2024"
tags: ["graph theory", "linear algebra"]
excerpt: "
The graph Laplacian is central in spectral graph theory, but its link to the standard Laplacian is often unclear. We show both represent the difference between a function and its local average.
"
---

**Introduction.** This is essentially one long response to the [MathOverflow question](https://mathoverflow.net/questions/368963/intuitively-what-does-a-graph-laplacian-represent?answertab=scoredesc): _Intuitively, what does the graph Laplacian represent?_ The standard way of generalizing the Laplacian

$$
\begin{equation}
\Delta f:= \text{div}(\nabla f)
\end{equation}
$$

to the discrete case of graphs is to interpret the gradient of a function as a difference between function values on nodes sharing a common edge. Following this line of thought allows you to exploit the link between the Laplacian and energy minimization through à la Euler-Lagrange. This leads to the idea of a Laplacian quadratic form.

$$\text{ }$$

In this article we take a different approach. Our new strategy is to develop a purely _continuous_ heuristic of $\Delta$ involving no derivatives, then to import that idea the graph setting to define the graphical Laplacian. As a small technicality, we're going to generalize the _negative_ Laplacian, namely the negative of equation $(1)$.

$$\text{ }$$

<div style="border:0.5px solid black; padding:10px ;">
    <u>Heuristic:</u> The negative Laplacian measures the difference between a function value and its local average value.
</div>

$$\text{ }$$

**Heat equation Intuition.** To extract this heuristic from $\Delta$, let’s explore why the Laplacian appears in the heat equation. We say $u(x,t)$, subject to the initial condition $u(x,0)=f(x)$ solves the heat equation if

$$
\begin{equation}
\Delta u(x,t)= \partial_t u.
\end{equation}
$$

In the above, f is interpreted as an initial heat distribution, and the solution $u$ is interpreted as the time evolution for $f$. How does heat spread with time? The basic intuition is that heat averages out by comparison to its neighbors. If a point $p$ on is hotter (cooler) than its neighbors, then the point $p$ gets cooler (hotter) in the future. This intuition combined with equation $(2)$ suggests that as time passes, the Laplacian performs an averaging process on $u$.

$$\text{ }$$

**Formalism.** Let's justify this intuition with quick Taylor expansion. In one-dimension (the higher dimensional cases follow similarly), the Laplacian is the second derivative. Consider the Taylor expansion of the function $u$ around the point $p$. That is for $x\in B_r(p)$, we have the expansion

$$
\begin{equation}
u(p+x) \approx u(p)+u'(p)x+\frac{1}{2} u''(p)x^2.
\end{equation}
$$

Here, $B_r(p):=[p-r,p+r]$ and $r>0$ is a small parameter. The average of $u$ in this interval is defined as

$$
\begin{equation}
\bar{u}:=\frac{1}{|B_r|}\int_{B_r(p)}u(x)dx,
\end{equation}
$$

where $|B_r|:=\text{length}(B_r)=2r$. Integrating the Taylor expansion of $u$ over the ball and dividing $|B_r|$ gives the Taylor expansion of $\bar{u}$. In detail,

$$
\begin{equation}
    \begin{split}
        \bar{u} &= \frac{1}{|B_r|}\int_{-r}^{r}u(p+x)dx\\
                &\approx \frac{1}{|B_r|}\bigg(\int_{-r}^{r}u(p)dx+\int_{-r}^{r} u'(p)xdx + \frac{1}{2}\int_{-r}^{r}u''(p)x^2dx \bigg).
    \end{split}
\end{equation}
$$

Since $u(p), u'(p), u''(p)\in \mathbb{R}$ are independent of $x$, they can be factored out of their corresponding integral. Furthermore, since $x$ is an odd function, the second term vanishes since the domain is symmetric about $0$. Therefore,

$$
\begin{equation}
    \begin{split}
        \bar{u} &\approx\frac{u(p)}{|B_r|}\int_{-r}^rdx+\frac{u''(p)}{2|B_r|}\int_{-r}^r x^2dx\\
                &= u(p)+\frac{u''(p)}{6}r^2
    \end{split}
\end{equation}
$$

Rewriting this, we arrive at the aforementioned heuristic

$$
\begin{equation}
\frac{6}{|B_r|}(\bar{u}-u(p))\approx u''(p).
\end{equation}
$$

Again, this interpretation of the Laplacian is that involves _no derivatives_, making it amenable for generalizing to the discrete case.

$$\text{ }$$

**Graph Laplacian.** Now for the graph Laplacian. In the spirit of [Trevisan](https://www.youtube.com/watch?v=01AqmIU9Su4&ab_channel=SimonsInstitute), we focus on the case of a $d$-regular graph. Fix a $d$-regular graph $(V,E)$, and let $A$ be its adjacency matrix and $I$ the identity matrix. We write column vectors as $x=(x^1,...,x^{|V|})^T$, with superscripts as indices.

$$\text{ }$$

We briefly recall the underlying vector space $A$ acts on. Since its size is $|V|^2$, it acts on the vector space $\mathbb{R}^V := \text{Functions}(V,\mathbb{R})$, the [free vector space](https://planetmath.org/freevectorspaceoveraset) on $V$. Vertices $x\in V$ are in $1:1$ correspondence to a canonical basis element of $\mathbb{R}^V$, namely the indicator functions $\delta_x$. This justifies conflating a vector $x$ with its corresponding function $x: V\to \mathbb{R}.$ Moving on, we compute

$$
\begin{equation}
(Ax)^i = \sum\limits_{j\in V} A^i_j x^j = \sum\limits_{j\in N(i)} x^j,
\end{equation}
$$

where $N(i)$ denotes the neighbors of the vertex $i$. The last equality follows by the definition of the adjacency matrix, which is defined as the indicator matrix on $E$. In English, this computation tells us after matrix multiplication with the adjacency matrix, the resulting $i^{th}$ component contains the sum over its neighbors. This is awfully close to averaging the function value of $i$ over its neighbors. In fact, dividing out this number by the degree $d\text{ } (:= \# \text{ of neighbors})$ turns the result into a genuine average. Thus, the mapping $x\mapsto \frac{A}{d}x$ is analogous to $u\mapsto \bar{u}$.

$$\text{ }$$

Out analogy is close to full bloom. Since $Ix=x$, multiplying by the identity matrix recovers the function value (for each component). So as advertised, matrix multiplication by $I-\frac{A}{d}$ on a function (vector) gives the difference between the function value and its local average.
