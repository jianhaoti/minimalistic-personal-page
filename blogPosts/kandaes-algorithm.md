---
title: "Kandae's Algorithm, Geometrically"
date: "1 June 2025"
tags: ["algorithms"]
excerpt: "We give a simple graphical interpretaion to Kandae's solution to the maximum subarray problem."
---

Recall the goal of the [maximum subarray problem](https://leetcode.com/problems/maximum-subarray/description/) is given an integer array $A$, find a subarray $S$ such that the sum of the entries $S$ is maximized among all subarrays of $A$. Kandae's solution is, roughly speaking, greedily maximize _wrt_ no non-positive prefixes. We provide a graphical interpretation of this explanation.

We interpret $A$ as narrating the _movement along a path_ starting at an arbitrary initial position. From this, we graph out the current position. In other words, we interpret a positive/negative integer $a\in A$ as moving right/left from our current position by $|a|$ units. Maximizing subarray sum is equivalent to maximizing the displacement along this path.

For example, suppose $A=[1,2,-4,7,-2,5,-10,5]$. Assuming our initial position is at $0$, then the plot associated to $A$ is given by the picture below.

<div style="text-align: center;">
    <img src="/images/kandaeExample.png" alt="Kandae Example">
    <p><em>Plot associated to [1,2,-4,7,-2,5,-10,5].</em></p>
</div>

Notice that there are two non-positive prefixes, namely the subarrays $[1,2,-4]$ and $[7,−2,5,−10]$. In the plot, these would constitutes as "restarts", since they take down to or below the previous minimum. Between each "restart" we can just obviously employ a simple greedy scheme of keeping max displacement.

An alterantive interpretation is to interpret the above plot as the price action chart of a stock. Under this interpretation, we see that this problem becomes [best time to buy and sell stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/).
