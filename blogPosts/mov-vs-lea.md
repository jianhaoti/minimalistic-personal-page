---
title: "mov vs lea"
date: "2 November 2025"
tags: ["Systems"]
excerpt: "
We give a simple explanation of why the lea command is used in compliers over mov when performing computation.
"
---

The one sentence summary is _function evaluation (dereferencing) commutes with algebra, so don't evaluate (dereference) until the end_.

We have two separate units in a standard computation model, the data storage (RAM) and the computation (CPU). Transferring data between these two units is expensive, so it should be minimized. Also, the CPU is stupid, so it can only take in primitive instructions.

Suppose we're interested in evaluating the polynomial

$$
\begin{equation}
p(x):= 5x-x
\end{equation}
$$

for various values of $x$. Hold off for the moment with identifying $p$ as $4x$. Since the CPU requires all arithmetic operations to be binary operations, we $p$ as the composition

$$
\begin{equation}
p(x)=\text{sub}(q(x),x),
\end{equation}
$$

where

$$
\begin{equation}
\begin{split}
q&: x \mapsto 5x\\
\text{sub}&: x,y \mapsto x-y\\
\end{split}
\end{equation}
$$

There are two ways to view the composition expression (2). First, we can view both $q(x)$ and $\text{sub}(q(x),x)$ as _numbers_ for a given _number_ x. This leads us to using mov, which pulls $x$ from memory and feeds it into the computational machine $q(x)$, then pulls $x$ again to feed it into the computational machine $\text{sub}(q(x),x)$. Notice that we've retrieved $x$ twice.

The alternative, more powerful viewpoint is to view $x$ as a _symbol_ as you would in basic algebra. This in turn leads us to interpret $q(x)$ and $\text{sub}(q(x),x)$ not as numbers but as symbols as well. The power here is that you can perform symbolic simplification, without ever evaluating. This is just enunciating the kneejerk evaluation of simplifying (2) to $4x$ without ever specifying a value for $x$. Taking this viewpoint, we see that only one retrieval of $x$ is necessary. This is the idea behind lea.
