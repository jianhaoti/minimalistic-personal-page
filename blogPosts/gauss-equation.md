---
title: "Gauss Equation"
date: "10 February 2025"
tags: ["geometry", "linear algebra", "Riemannian geometry"]
excerpt: "
We take two traces of the Gauss equation to get a scalar relationship between intrinsic and extrinsic curvature quantities of an embedding.
"
---

The most fundamental equation of Riemannian geometry is the Gauss equation, which relates intrinsic and extrinsic curvatures of an embedding $\Sigma\subset M$. Here's the full beast.

$$\text{ }$$

**Theorem [Gauss]** Given a embedding of a hypersurface $\Sigma^{n-1}$ into a Riemannian manifold $M^n$, for vector fields $X,Y,Z,W\in \mathfrak{X}(\Sigma)$,

$$
\begin{equation}
\begin{split}
Rm(X,Y,Z,W)&= Rm_\Sigma(X,Y,Z,W)\\
&- A(X,W)A(Y,Z)\\
&+ A(X,Z)A(Y,W).
\end{split}
\end{equation}
$$

$$\text{ }$$

For notation, a quantity with a subscript of $\Sigma$ means that it's associated with the hypersurface $\Sigma$, while no subscript means that it's associated with the ambient manifold $M$. In the above, $Rm$ denotes the $(0,4)$ Riemannian curvature tensor,
$A(X,Y):=\langle \nabla_X N, Y\rangle$ denotes the second fundamental form, and $N$ denotes a unit normal to $\Sigma$. Later, we use $Ric$ to denote Ricci curvature, $R$ to denote scalar curvature, and $H:=\sum_{i=1}^{n-1} A(e_i,e_i)$ to denote mean curvature.

$$\text{ }$$

Geometers typically find $Rm$ too difficult to study and historically they've reduced complexity by taking traces. We claim that after taking two traces, Gauss equation reduces to the following scalar formula.

$$\text{ }$$

**Theorem [Gauss]** Under the same assumptions as above,

$$
\begin{equation}
\begin{split}
Ric(N,N)=\frac{1}{2}(R-R_\Sigma +H^2-|A|^2).
\end{split}
\end{equation}
$$

$$\text{ }$$

To this end, we will take traces _wrt_ an orthonormal frame $E:=\{e_1,...,e_{n-1}\}$ along $\Sigma$. We first take a single trace in the $X,W$ slots to get

$$
\begin{equation}
\begin{split}
Ric(Y,Z) - Ric(N,N)&= Ric_\Sigma(Y,Z)\\
&- \underbrace{\bigg(\sum_{i=1}^{n-1} A(e_i,e_i)\bigg)}_{=H}A(Y,Z)\\
&+\sum_{i=1}^{n-1}  A(e_i,Z)A(Y,e_i).
\end{split}
\end{equation}
$$

The extra negative term in the top line comes from the fact that we took trace over only $n-1$ directions, and $E\cup N$ is an orthonormal frame for $M$. Second, we take a trace in the $Y,Z$ slots to get

$$
\begin{equation}
\begin{split}
R - 2Ric(N,N)&= R_\Sigma- H\underbrace{\bigg(\sum_{j=1}^{n-1} A(e_j,e_j)\bigg)}_{=H}\\
&+\sum_{i,j=1}^{n-1}  A(e_i,e_j) \underbrace{A(e_j,e_i)}_{=A(e_i,e_j)}.\\
&=R_\Sigma-H^2+|A|^2,
\end{split}
\end{equation}
$$

which gives the result. Again, an extra negative term comes in during this round of trace. The last line follows from the definition of norm for a $(0,2)$-tensor. In applications, particularly those pertaining to rigidity, we usually only care that it is a non-negative function. Finally, we show that $A$ is symmetric. We compute

$$
\begin{equation}
    \begin{split}
        A(X,Y)-A(Y,X)&=\langle \nabla_X N,Y \rangle - \langle \nabla_Y N,X \rangle\\
        &=\underbrace{X\langle N,Y\rangle}_{=0} - \langle N,\nabla_X Y\rangle\\
        &- \underbrace{Y\langle  N, X \rangle}_{=0}+ \langle N,\nabla_Y X\rangle\\
        &=\langle N, [X,Y] \rangle\\
        &=0.
    \end{split}
\end{equation}
$$

The second and third equalities come from the defining properties of the Levi-Civita connection. The last equality follows since $[X,Y]\in \mathfrak{X}(\Sigma)$, as $X,Y$ both are.
