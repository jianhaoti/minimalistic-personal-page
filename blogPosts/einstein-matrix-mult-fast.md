---
title: "Einstein Notation and Fast Matrix Multiplications"
date: "30 November 2025"
tags: ["low-level", "linear algebra"]
excerpt: "We discuss how Einstein notation can help clarify why kij loops are used when implementing naive matrix multiplication."
---

This algorithm is still relevant as of the time of this blog post, since the naive way is fundamentally the way most (all?) libraries implement, albeit with blocking methods (architecture specific) for performance. Theoretical methods have not taken over yet.

Suppose we want to compute the product of two matrices $A,B$ and save it into a matrix $C$. In Einstein notation, we would write the entry $(i,j)$ of $C$ as

$$
\begin{equation}
C^i_j = A^i_k B^k_j,
\end{equation}
$$

where $k$ is a dummy index. To fill in matrix $C$, we must loop over $i,j$ as well. Therefore, all together we must loop over indices $i,j,k$ but the order in which we do so does not matter by Fubini's / commutativity of addition. This raises the question of which index we should put into the hot loop?

The insight is that in row-major order languages, to obey spatial locality, we fix the row and iterate over the columns. In Einstein notation, this corresponds to fixing the top index and moving the bottom one. Looking at equation (1), we see a repeat of index $j$ on both sides of the equation (namely on matrices C and B). Therefore, we choose hot index $j$, which means choosing either $ikj$ or $kij$.

Contrast this to the naive $ijk$ implementation, where the dummy index $k$ is hot. In that case, $B$ disobeys spatial locality since matrix multiplication has an access with stride $p$, where $p$ is the number of columns of $A$.
