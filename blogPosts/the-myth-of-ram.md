---
title: "The Myth of RAM"
date: "23 October 2025"
tags: ["hardware", "algorithms", "geometry"]
excerpt: "
We extract the core insights from Ernerfeldt's blog post series 'The Myth of RAM', and present a link between his ideas and the isodiametric problem."

---

I like algorithms. I really do. But somewhere near the end of a one-year sequence of algorithms I got a bit disillusioned, and I think it started when my instructor introduced Strassen's matrix multiplication algorithm. This algorithm made me realize there was a divorce between the big-O analysis we were doing, and the actual runtime performance.

Ernerfeldt's blog post series gives a good attempt to capture this dissonance. His first insight is that we should shift our focus from analyzing the big-O of the number of operations, to the big-O of the _runtime_ in a hardware agnostic way. This is, after all, closer to the the performance metric that low-level engineers actually care about. For this metric, we must accept that the RAM model - randomly _accessing_ memory is a O(1) operation - is false. The reality is that access time is at least to $\Omega(\sqrt{N})$, for $N$ memory registers.

Fundamentally, accessing memory is an inherently geometric variational problem, namely the isodiametric problem. Given $N$ memory registers, of equal size, what is the optimal layout in terms of minimizing diameter?

We also assume, as a first step, the entire inside space is available for transversal. A obvious competitor for the optimizer is the ball, which is a disk in 2D (to align with the reality of chip manufacturing). Since we can freely transverse inside, the geodesics are straight lines. Since the speed of light gives an upper bound on the speed of memory access time, it follows that the memory access time is at least proportional to the radius of the disk. Let $N$ denote the fixed total measure ($\approx$ total number of memory registers), and $T$ denote the access time. Then, $T=\Omega(r)$ by the arguments outlined above, and $N\propto r^2$ by the formula for the area of a disk. It follows that $T= \Omega(\sqrt{N})$ which completes the argument. In fact, one can prove that the ball is an optimizer via Steiner symmetrization, so this competitor is the optimizer.
