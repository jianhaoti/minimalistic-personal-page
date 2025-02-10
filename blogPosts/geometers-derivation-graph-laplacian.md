---
title: "A Geometer's Derivation of the Graph Laplacian"
date: "26 October 2024"
tags: ["graph theory", "linear algebra"]
excerpt: "
The graph Laplacian is the central object of study in spectral graph theory, but its ties to the standard Laplacian isn’t apparent in standard references. In this article, we bridge this gap by showing both Laplacians can be interpreted as the difference between a function value and its local average.
"
---

This is essentially one long response to the [MathOverflow question](https://mathoverflow.net/questions/368963/intuitively-what-does-a-graph-laplacian-represent?answertab=scoredesc): _Intuitively, what does the graph Laplacian represent?_ The standard way of generalizing the Laplacian

$$
\Delta f:= \text{div}(\nabla f)
$$

to the discrete case of graphs is to interpret the gradient of a function as a difference between function values on nodes sharing a common edge. Following this line of thought allows you to exploit the link between the Laplacian and energy minimization through à la Euler-Lagrange. This leads to the idea of a Laplacian quadratic form.

$$\text{ }$$

In this article we take a different approach. Our new strategy is to develop a purely _continuous_ heuristic of $\Delta$ involving no derivatives, then to import that idea the graph setting to define the graphical Laplacian.

$$\text{ }$$

> **Heuristic:** _The Laplacian $\Delta$ measures the difference between function value and its local average value._

$$\text{ }$$

To extract this heuristic from $\Delta$, let’s explore why the Laplacian appears in the heat equation. We say $u(x,t)$, subject to the initial condition $u(x,0)=f(x)$ solves the heat equation if

$$
\Delta u(x,t)= \partial_t u.
$$

In the above, f is interpreted as an initial heat distribution, and the solution $u$ is interpreted as the time evolution for $f$. For example, if we take $f(x):= \delta_p(x)$ a delta function at $p$, then this models the case of a singular heat source at $p$. For an initial configuration of heat $u(x,0)$ how does heat spread at $u(x,t)$ for $t>0$? The intuition is that heat averages out. Suppose a point $p$ on average is hotter than its neighbors, then $p$ gets cooler in the future. In detail, if we define the following variables for $x\in B_r(p)$ at future time $t> t_0$

$$\text{ }$$

$$
\text{1. temp}_{\text{future}}(t) := u(p,t),
$$

$$
\text{2. temp}_{\text{current}}:= u(p,t_0),
$$

$$
\text{3. avgCurrTemp} := \int_{x\in B_r(p)} u(x,t_0) dx.
$$

$$\text{ }$$

Then we see that the temperature evolves in the following fashion

$$
\text{temp}_{\text{future}}(t) =
\begin{cases}
    \uparrow & \text{avgCurrTemp} > \text{temp}_{\text{current}}(p)\\
    \downarrow & \text{avgCurrTemp} < \text{temp}_{\text{current}}(p).\\
\end{cases}
$$

$$\text{ }$$

---

$$\text{ }$$

So why does the Laplacian smooth out data? In one-dimension (the higher dimensional cases follow similarly), the Laplacian is the second derivative. Consider the Taylor expansion of the function $u$ around the point $p$. That is for $x\in B_r(p)$, we have the expansion

$$
u(p+x) \approx u(p)+u'(p)x+\frac{1}{2} u''(p)x^2.
$$

Here, $B_r(p):=[p-r,p+r]$ and $r>0$ is a small parameter. The average of $u$ in this interval is defined as

$$
\bar{u}:=\frac{1}{|B_r|}\int_{B_r(p)}u(x)dx,
$$

where $|B_r|:=\text{length}(B_r)=2r$. Integrating the Taylor expansion of $u$ over the ball and dividing $|B_r|$ gives the Taylor expansion of $\bar{u}$. In detail,

$$
\begin{align*}
    \bar{u} &= \frac{1}{|B_r|}\int_{-r}^{r}u(p+x)dx\\
            &\approx \frac{1}{|B_r|}\bigg(\int_{-r}^{r}u(p)dx+\int_{-r}^{r} u'(p)xdx + \frac{1}{2}\int_{-r}^{r}u''(p)x^2dx \bigg).
\end{align*}
$$

Since $u(p), u'(p), u''(p)\in \mathbb{R}$ are independent of $x$, they can be factored out of their corresponding integral. Furthermore, since $x$ is an odd function, the second term vanishes since the domain is symmetric about $0$. Therefore,

$$
\begin{align*}
    \bar{u} &\approx\frac{u(p)}{|B_r|}\int_{-r}^rdx+\frac{u''(p)}{2|B_r|}\int_{-r}^r x^2dx\\
            &= u(p)+\frac{u''(p)}{6}r^2
\end{align*}
$$

Rewriting this, we arrive at the aforementioned heuristic

$$
\frac{6}{|B_r|}(\bar{u}-u(p))\approx u''(p).
$$

Again, this interpretation of the Laplacian is that involves _no derivatives_, making it amenable for generalizing to the discrete case.

$$\text{ }$$

---

$$\text{ }$$

Now for the graph Laplacian. In the spirit of [Trevisan](https://www.youtube.com/watch?v=01AqmIU9Su4&ab_channel=SimonsInstitute), we focus on the case of a $d$-regular graph. Fix a $d$-regular graph $(V,E)$, and let $A$ be its adjacency matrix and $I$ the identity matrix. We write column vectors as $x=(x^1,...,x^{|V|})^T$, with superscripts as indices.

$$\text{ }$$

We briefly recall the underlying vector space $A$ acts on. Since its size is $|V|^2$, it acts on the vector space $\mathbb{R}^V := \text{Functions}(V,\mathbb{R})$, the [free vector space](https://planetmath.org/freevectorspaceoveraset) on $V$. Vertices $x\in V$ are in $1:1$ correspondence to a canonical basis element of $\mathbb{R}^V$, namely the indicator functions $\delta_x$. This justifies conflating a vector $x$ with its corresponding function $x: V\to \mathbb{R}.$ Moving on, we compute

$$
(Ax)^i = \sum\limits_{j\in V} A^i_j x^j = \sum\limits_{j\in N(i)} x^j,
$$

where $N(i)$ denotes the neighbors of the vertex $i$. The last equality follows by the definition of the adjacency matrix, which is defined as the indicator matrix on $E$. In English, this computation tells us after matrix multiplication with the adjacency matrix, the resulting $i^{th}$ component contains the sum over its neighbors. This is awfully close to averaging the function value of $i$ over its neighbors. In fact, dividing out this number by the degree $d\text{ } (:= \# \text{ of neighbors})$ turns the result into a genuine average. Thus, the mapping $x\mapsto \frac{A}{d}x$ is analogous to $u\mapsto \bar{u}$.

$$\text{ }$$

Out analogy is close to full bloom. Since $Ix=x$, multiplying by the identity matrix recovers the function value (for each component). So as advertised, matrix multiplication by $I-\frac{A}{d}$ on a function (vector) gives the difference between the function value and its local average.
