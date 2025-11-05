---
title: "Instrumental Variables"
date: "4 November 2025"
tags: ["statistics"]
excerpt: "
We introduce the idea behind instrumental variables (IVs) and compare them to randomized control trials (RCTs)."
---

The idea behind IVs is the adage _"you can lead a horse to water, but you can't make it drink"_. The ideal test of causality is RCTs, but we illustrate a situation where ethics would force us to pursue IVs. Consider a treatment $D$, outcome $Y$, and a vector of covariates $X$.

Consider a medical testing setting, where $Y$ is the recovery from a disease, and $D$ is a new treatment. In this setting, it is nature of patient control that determines if our study in an RCT or an IV setting. An RCT would be the doctor forcing the treatment onto every patient in the treated group. In other words, everyone is forced to comply with the doctor's orders. To contrast, an IV setting, gives agency back to the patient. In such a case, denote $Z$ as a randomized filtering mechanism that splits our testing group into control and treatment. The patient's indivdual agency, however, allows them to decide if they want to comply with their group sorting. Consider the potential outcomes framework where a patient is divided into four categories, based on their reactions to their potetial filterings: always takers, compliers, defiers, and never takers. Experimental design can allow us to rule out two of these categories, namely the defiers and the always-takers. This is the basic idea behind a one-sided non-compliance testing environment, which removes agency from the control group. Would-be defiers, by experimental design alone, are forced to be never-takers.

At this stage we need to make a further assumption. The reason is that we've given agency to the treated group, which makes the setup differ from an RCT where the entire population is compliant. Good for ethics but bad for causality. The assumption we make is that the filtering mechanism

1. has causal influence if the patient takes the treatment $D$, and
2. has no causal affects on the outcome $Y$ otherwise.

The second assumption is known as _exclusion restriction_. These assumptions are reasonable in this setup, and this assumption eliminates the effect of the never takers from causal consideration (as well as the always takers, but they don't exist in our framework). From a causality standpoint, this assumption is what allows to get back to the RCT framework, where the population consists only of compliants. Techincally, this also eliminates always takers, so we can relax the one-sided noncompliance to just exclude defiers. However, I've yet to think of a situation where taking out only defiers is natural.

Generally speaking, one must be incredibly careful when claiming exclusion restriction. A famous source of debate is the Vietnam war draft on life expectancy. A lottery system was employed to determine conscription, where low numbers were more likely chosen to serve. The lottery system was based on birthdays, so it serves as a plausible randomization procedure. Altogether, of a population of, say, men who did not voluntarily take arms (to rule out defiers and always takers), we have $Z$ as the (binary) lottery, $D$ as (binary) conscription, and $Y$ as life expectancy. Here is an argument that $Z$ does not serve as an IV, as it plausibly breaks exclusion restriction. Having a low number encourages individuals to engage in draft-dodging behaviors such as

1. fleeing to Canda,
2. applying to graduate school for further eduction,
3. self-harm resulting in a disability.

All three behaviors listed above have clear impacts to life expectancy. If he dodged the draft to canada, then he will be projected to have the average Canadian life expectancy. If he pursued graduate school, this would have impacted future wages, which would impact his life expectancy. And if he had commited self-harm resulting in a disability, then that would have had obvious effects to life expectancy.
