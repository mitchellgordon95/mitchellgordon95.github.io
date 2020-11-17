---
layout: post
title:  "A Software Tester's Perspective on Statistical Learning Theory"
categories: ml
---

You're a software testing engineer, working at a big tech company. While other
engineers on your team write code, your job is to make sure the code is safe
before you push it to production. Your goal isn't to prove the code is
"correct," but rather to assess the risk of potential failures to the company
and [test
accordingly](http://assets.cambridge.org/97811071/72012/excerpt/9781107172012_excerpt.pdf#page=8).
You mainly write tests that try to rule out known or suspected failure modes,
and you spend a lot of time thinking about edge cases.

One day, over your morning cup of coffee, you get an email from the other
engineers on your team. They've decided that writing source code is too hard, so
they've started **randomly guessing** program implementations until one meets
the specification. They call this wacky approach "[Software
2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35)" or something.

"Not to worry," they tell you, "we can prove it works. You don't even have to
write tests any more!" They go on to explain that there's this book called
"[Statistical Learning
Theory](https://en.wikipedia.org/wiki/Statistical_learning_theory#:~:text=Statistical%20learning%20theory%20is%20a,predictive%20function%20based%20on%20data.),"
which describes a mathematical framework that *proves* Software 2.0 can give you
a correct implementation.

Intrigued, you ask them for more details.

# Future Input $$\sim$$ Past Input

First, they have to assume that any future user input will be similar to what
you've seen previously in production. They call this the
[IID](https://en.wikipedia.org/wiki/Independent_and_identically_distributed_random_variables)
assumption.

"But what about hackers?" you ask. "and what happens when we change the UI?
People change their behaviour all the time! This week they're Googling for
election results, but next week they'll go back to Googling Kanye West..."

They concede that maybe you have a point, but they definitely
need this assumption to make it work. You begrudgingly let them continue.

# No Specification

Then they tell you there's no specification. You ask them what the hell that means.

"Ok, hear us out," they say. "The old spec was basically impossible to write.
There were too many edge cases! Our poor product manager didn't even know where
to start, honestly."

Instead, they decided to ask the product manager to write down a bunch of
example user inputs along with the correct output for each example. That would
serve as the defacto specification. They call this "training data." Then they
guess a program that meets those requirements, using this thing called gradient
descent.

You mention that this reminds you of [happy-path
testing](https://medium.com/dev-genius/dont-just-test-the-happy-path-e3fd565bad53),
where you only write tests for things you expect without thinking about possible
failure modes. In this case the training examples test the happy paths. How do
you know there aren't still edge cases and bugs lurking around?

That's where the magic of STL kicks in, they say.

# Future Performance $$\sim$$ Past Performance

If you assume that future inputs look like past inputs, they say, then you can
also assume future performance will look like past performance! As long as you
**have enough training data**, there's a low probability that you'll encounter
edge cases. Basically, you want the happy paths to be the only paths.

"But how many examples do you need to make sure there aren't any unhappy paths?"
you ask. 

It depends on how complicated the program you're guessing is, they say. If the
program is super complex and you don't know anything about it, you basically
need to enumerate all the possible inputs. They've been calling this the "[No
Free Lunch Theorem](https://analyticsindiamag.com/what-are-the-no-free-lunch-theorems-in-data-science/)."

But if it's "simple" somehow and you can use that to narrow down the possible
candidate programs, then you need way less data. That part sounds kind of
reasonable to you. It reminds you of having [branch
coverage](https://en.wikipedia.org/wiki/Code_coverage) when writing unit tests.
If you have more branches, then you have to write more tests. Similarly, if you
have more possible candidate programs, then you need more data to make sure you
pick the right one.

# Bias/Variance Trade-off

"But wait," you say, "what if you're wrong about how the program you're guessing
is simple? Isn't the problem that you don't know the right program in the
first place?"

They tell you you're right, of course, and that there's a trade-off. There are
different kinds of simplicity with different levels of strictness.[^1] If you
suppose the wrong kind of simplicity from the start, that puts a hard cap on how
well you can learn the program. They call this the *bias* or *approximation
error*. On the other hand, if you don't assume anything at all, then you need
way more data. If you don't have enough, then you might encounter *variance* or
*estimation error*.

[^1]: You might assume, for example, that your program is [translation invariant](http://egrcc.github.io/docs/dl/deeplearningbook-convnets.pdf).

The best case, of course, is when you don't have to guess and you know the
correct implementation of the program you want to write. Then you would have
maximum correct bias and no variance.

You muse that the second best case would be to just label every possible input
so that you don't have to assume anything. They tell you that's usually impractical (the
poor product manager can only work so much) but in some cases you basically have
[infinite data](https://arxiv.org/abs/2005.14165) and that's exactly what they do.

# Conclusion

"So let me get this straight," you say. 

- First, you assume that the future will look like the past.

- Next, you get somebody to write down a bunch of example inputs and
correct outputs which you use as the spec. 

- Then, you make some assumptions about the program you're trying to guess. If
you make the wrong assumptions, then you cap your maximum performance. But if
you don't make any, you might accidentally overload your product manager.

- Finally, you guess a random program that fits the spec. As long as
you have enough data, you can guarantee you did the best you could with your
assumptions and that you probably won't hit any edge cases.

They nod. You shake your head. "I don't know guys, this seems kind of fishy. The
IID assumption is one thing, but we also have no idea how much the approximation error is, right?"

They shrug. "Look man, we just don't want to write any code, ok? It's too hard."
You can understand the sentiment. 

"Besides, we don't ever really use STL in practice."

"What?"

"Yeah, we just set aside some of the training data as a test set. If the program
we guess does good on the training data and the test set, we just assume it's
good to go."

"But what if your test set is bad?"

They shrug again. "We just do our best. Sometimes we [craft test
sets](https://www.aclweb.org/anthology/2020.acl-main.442/) that look for
[specific properties](https://arxiv.org/abs/1912.12598)."

You nod knowingly. At the end of the day, you don't write tests to prove
correctness. You write tests to show the [presence or absence of
bugs](http://assets.cambridge.org/97811071/72012/excerpt/9781107172012_excerpt.pdf#page=8)
in a way that appropriately manages risk. Some things never change. You take a
sip of coffee and go back to writing unit tests, suspecting your colleagues
will join you in a few years.

----------
