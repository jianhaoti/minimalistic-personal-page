---
title: "A Simple Proof of No Cloning"
date: "11 December 2024"
tags: ["quantum computing", "linear algebra"]
excerpt: "
We provide a simple proof of the no cloning theorem from quantum computing.
"
---

The no cloning theorem is traditionally stated in terms of unitary operators. In this post, we give a simple proof of a generalized version of this theorem.

$$\text{ }$$

**Theorem**

The mapping $\Delta: V \to V \otimes V$

$$
v \mapsto v \otimes v
$$

of sending an element to the diagonal is _not_ a linear transformation.

$$\text{ }$$

_Proof:_ Suppose otherwise, and consider the mapping on $u + v$. We compute:

$$
\begin{aligned}
u \otimes u + u \otimes v + v \otimes u + v \otimes v
&= (u + v) \otimes (u + v) \\
&= \Delta(u+v) \\
&= \Delta(u) + \Delta(v) \\
&= u \otimes u + v \otimes v.
\end{aligned}
$$

Moving terms around, we find $u \otimes v = -v \otimes u$, which is false for general vectors $u, v$. □

$$\text{ }$$

Note that we don't need to appeal to any norms or Cauchy-Schwarz, which means this theorem holds in more general categories than normally stated. It's also interesting to observe that if we were in the exterior algebra, then cloning would be allowed.
