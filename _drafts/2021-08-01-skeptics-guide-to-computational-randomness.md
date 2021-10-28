---
layout: post
title:  "A Skeptic's Guide To Computational Randomness"
categories: math
---

What does it mean to be random? In popular mathematics, there are a
few flavors of probability theory, each with its own philosophical
justification for why we should consider one event or another to be
"random." An event could be considered random if...

- **Classical**: all outcomes are symmetric, so
  we have no justification in assigning a higher probability to one
  outcome than another. For example, rolling a particular side of a
  die is assumed to be equiprobable, as is drawing a card from a deck.

- **Frequentist**: the event is "repeatable," with the outcome
  depending on some initial condition totally unobservable to
  us. Furthermore, the ratio of outcomes must approach some limiting
  frequency as $$n \rightarrow \inf$$. (These assumptions tend to be
  quite arduous to attain in practice.)
  
- **Bayesian**: you, the subjective observer, consider it to be
   random, given the information at your disposal.
  
I've always
[struggled](http://mitchgordon.me/math/2021/04/02/probability.html)
with these assumptions, which has made it hard to engage with
probability theory. And as a coder, I like to implement axioms and
theorems in code, when possible, as part of my learning process. But
none of the above axiomatic definitions of a "random event" are easily
implementable in code, making it difficult to code up an empirical
demonstration of a probability theorem (like the Law of Large
Numbers). The closest I got was:

```python
import numpy.random as random
samples = random.random(100)
```

How in the world is this function implemented? How would you write a
unit test for this? To find answers, I started digging into the
literature on Pseudo-Random Number Generators (PRNGs), of which
`numpy.random.random` is one. This post is about what I've learned. In
summary:

1. Randomness depends on your *computational frame of reference*. A
   bit stream is *theoretically random* if there **does not exist** a
   computer program which can predict the next bit in a reasonable
   amount of time. 
   
1. A bit stream is *empirically random* if we **try
   really hard** to predict the next bit (via a suite of statistical
   tests) and fail.
   
1. There are several physical sources of bits (thermal, chaotic,
   quantum) which seem to be empirically random. These are called true
   random number generators (TRNGs).
   
1. We often apply deterministic functions to random bit streams
   (averages, gaussian transformations, etc.). Probability theory is
   about leveraging properties of these functions to turn statements
   of ignorance and inability (per #1) into statements of certainty.

## A Computational Definition of Randomness

### Computational Frame of Reference

We'll begin with a thought experiment from []().

> A and B want to play head and tail in 4 different ways. In all of them A "fairly" flips a "fair" coin. In the first way. A asks B to bet and then flips the coin. In such a case we expect B to win with a 50% frequency. 

> In the second way. A flips the coin and while it is spinning in the air, she asks B to bet. We are still expecting B to win with a 50% frequency. However, in the second case the outcome of the toss is determined when B bets: in principle, he could solve the equation of the motion and win !

> The third way is similar to the second one: B is allowed to bet when the coin is spinning in the air. but he is also given a pocket calculator. Nobody will doubt that in this case B is going to win with 50% frequency, as while he is still initializing any computation the coin will have come up head or tail.

> The fourth way is similar to the third. except that now B is given a very powerful computer. able to take pictures of the spinning coin, and quickly compute its speed. momentum etc. In such a case we will not say that B will always win, but we may suspect he may win 51% of the time ! 

This example intends to suggest that **the randomness of an event is relative to the specific model of computation with a specified amount of computing resources.** We will call this the *computational frame of reference*.

### The Formal-ish Definition

### Empirical Randomness Via Statistical Tests

## Random Number Generators

### True Random Number Generators

### Pseudo-Random Number Generators

### Generating Non-Uniform Numbers

## Probability Theory: From Uncertainty to Certainty

We have a formal definition random bits: no computer program exist
which can predict the next bit (with some time and frequency
constraints). This can be seen as an *interface* which an RNG attempts
to implement.

```python
def uniform_random_bit():
    """Returns a uniformly random bit. We guarantee that there is no polynomial-time program which can predict this bit with frequency > 0.5 given the previous outputs of this function."""
    return sample_from_chaotic_light_array()
```

If we assume that the interface is successfully implemented 

### Mean and Variance
