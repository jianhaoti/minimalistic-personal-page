---
title: "Object-Oriented versus Functional Paradigms"
date: "23 December 2025"
tags: ["programming"]
excerpt: "We contrast the idea of a function in the object-oriented style versus the functional style."
---

The object-oriented (OO) style of functions treats _data (state) as king_ and functions are transformations of data. Functions are second-class citizens that serve as manipulation devices of data at the behest of the programmer. They are the tools for expressing the programmer's will.

In the mathematical style, there is no concept of data. Functions are simply hashmaps -- that is, key-value pairs. No _specific_ key is the focus. The major paradigm shift is that functions are first-class citizens which constitute study in their own right. Individual functions are no longer the focus, but rather families of functions, where each family is characterized by a _property_. For example, if we focus on analytical properties (e.g. continuity, differentiability) and their interactions, we go down the path of calculus. If we focus on the algebraic properties we go down the path of e.g. groups and rings. This paradigm shift of studying objects through their properties, the interactions of these different properties, the limitations they impose on each other, etc. is how we end up getting _theorems_ which are nothing but formal statements of the aforementioned.

Again, I re-emphasize that individual functions are not usually important (though sometimes individual auxiliary functions are important in a proof). The goal is to study interesting families of functions, where a family is defined via a property. That said, the OO style of thinking is still present in the mathematical style, although it appears in a much more controlled fashion. This is the idea of a group action or a representation. In fact, this last point gets to a good heuristic regarding the divide between OO and functional. OO programming is oriented around _nouns_ while functional programming is oriented around _verbs_.
