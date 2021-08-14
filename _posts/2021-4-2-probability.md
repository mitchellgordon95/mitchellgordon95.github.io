---
layout: post
title:  "My Struggle With Probability Theory"
categories: math
---

There are many circumstances in which uncertainty is warranted.[^uncertainty]
Gas temperature measurements, weather forecasts, horse races, coin flips, and
clinical trials all have some uncertainty involved. Probability theory is the
science that finds commonality among these seemingly disconnected phenomena. We
can observe, for example, that the summation of many "repeatable" random events,
properly normalized, begins to look like a gaussian distribution (aka the
central limit theorem). We can notice common shapes in the histograms of these
repeatable experiments, such as "fat-tailed" or "power law" distributions. And
if the event is not repeatable, we can at least apply the rules of probability
theory to avoid inconsistencies in our thinking (which would allow a savvy
adversary to take advantage of us when gambling).

[^uncertainty]: Many events are unpredictable to us in practice, either because the laws governing the outcome are not known, or because the laws are known but the observations required are too arduous to make. Sometimes the required observations are too numerous to collect (as in statistical mechanics), and other times the non-linear, chaotic nature of the system necessitates observations that are too precise to be practical. Quantum experiments seem to be inherently unpredictable, although whether this is a fundamental facet of nature is a matter of debate.


However, I believe there are tasteful and distasteful applications of
probability theory. This is because the application of probability to a
particular event requires a suspension of disbelief. To consider an event as
repeatable and iid is to accept that the causal factors driving the outcome are
(practically) unobservable and therefore ignorable. In effect, it means giving
up on deeply understanding a causal explanation of the phenomena and instead
sweeping the details under the rug of "the distribution."

This makes probability theory the science of last resort. Only after truly
exhausting your ability to investigate causal factors and processes should you
indulge in probabilistic thinking. Doing otherwise is a cop-out, one that
dangerously *feels* "scientific."

### Examples of Distaste

The tastefulness of a particular application of probability theory is a matter
of context. Consider the humble coin flip. A lay-person may reasonably assume
that this event is a repeatable, iid experiment with a uniform prior; they may
be working with a variety of coins, fingers, and surfaces, and may not have
equipment available to make precise measurements. To the physicist, however,
this is obviously a cop-out. The physicist knows that the coin's trajectory can
be precisely captured by the laws of classical mechanics, and therefore
predicted with almost certainty.[^1] Where the average person gives up and
shrugs, the scientist continues searching for explanations.

[^1]: There may be some chaos in the bounce on a hard surface or drift in the
    wind, so we would need a properly controlled environment and [precise
    engineering](https://www.npr.org/templates/story/story.php?storyId=1697475).
    
Similar things can be said about drawing a card from a deck of cards. A casual
observer may reasonably assign uncertainty to the event. But to the magician who
controls the precise method of shuffling, this is obviously a cop-out. 

Or consider a randomized clinical study in which a drug harms patients in 0.01%
of cases. It's easy to sweep the causal factors under the rug and assume the
effects are "randomly distributed." But we can imagine more information
gathering revealing that all instances of harm occured in an ethnic minority. In
practice, "randomness" is more often a cop-out than an unavoidable facet of the
system under study.

### Human Nature

My struggle with probability theory is that it lends itself to distaste. Humans
are lazy, and when presented with the option of doing more investigative leg
work or simply assuming data is randomly iid, they will often choose the latter,
especially when the latter appears to be "scientifically and mathematically
rigorous." However, mathematics are only as correct as the assumptions made at
the beginning, and by hiding the causal factors of an event behind the
abstraction of a "probability distribution" we deprive ourselves of the ability
to identify when those causal factors change and our assumptions no longer hold
(i.e. the distribution shifts).[^magnets]

[^magnets]: For example, I may experiment with a coin and decide that it is fair when tossing it onto a wooden surface, only to discover later that the coin is magnetized and slightly biased towards heads on metallic surfaces.

And even when the assumption of iid is justified, the logic of probability
theory is more often misapplied than not, despite supposedly being a "guide
towards logical consistency." In my experience, probability theory is more often
used to prove a point in scientific papers than it is a self-check for
correctness. Just look at the p-value crisis of the 2010's.[^2] As they say,
there are lies, damned lies, and statistics. Even Bayesians, who seem to think
they're always right, can occasionally get it wrong as evidenced by E.T. Jaynes'
humorous exploration of a paper that proved a woman had ESP.[^3][^4]

[^2]: https://www.americanscientist.org/article/the-statistical-crisis-in-science

[^3]: http://www.med.mcgill.ca/epidemiology/hanley/bios601/GaussianModel/JaynesProbabilityTheory.pdf

[^4]: I also highly recommend Chapter 10.

Given the prevalence of misapplication, I can only conclude that probability
theory needs to be redesigned as a mental device. I don't want to be a
probability theory nazi, but all the evidence seems to indicate that probability
theory is a science for people who have given up on science, rather than the
rigorous system of analysis it purports to be.

-------
