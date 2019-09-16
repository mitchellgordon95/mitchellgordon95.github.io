---
layout: post
title:  "AI and Software Patents"
categories: ethics 
---

Recently, the US patent office [called for comments](https://www.reddit.com/r/MachineLearning/comments/d40juv/d_us_patent_office_request_for_comments_on/) on the process of patenting
AI software. I suppose this is a response to Google's [recent ML
patents](https://www.reddit.com/r/MachineLearning/comments/4jrqgq/google_attempting_to_patent_deep_neural_network/),
or [Oracle vs.
Google](https://www.wired.com/story/the-case-that-never-ends-oracle-wins-latest-round-vs-google/),
or the many [software patent
trolls](https://www.washingtonpost.com/news/the-switch/wp/2013/09/03/the-patent-troll-crisis-is-really-a-software-patent-crisis/?noredirect=on).
Most people I've talked to find software patents apalling and a threat to
intellectual freedom: similar to patenting the fact that 2+2=4.

I'm mostly in this camp. Despite
[claims](https://www.theverge.com/2013/4/17/4233818/google-submits-public-comments-on-software-patent-reform)
that Google will only use these to counter-sue any other company that tries to
sue it (a so-called "defensive patent" strategy) it seems Google is failing at
"not being evil."

However, we have to remember the motivation for patents: to quickly spread
innovation through the country. If an inventor is guaranteed a monopoly on an
idea for some time, they'll be much more willing to publicize their idea and how
to replicate it. This will, in the long run, improve the economy.

This can make sense for software, but Google's seq2seq and Dropout patents
totally miss the point: the idea is already well known. You can find it in many
textbooks; it does the public no good to know about Google's "invention" because
everyone already knows about it. These patents should not have been granted; the
public should have had the option to say "we don't want your ideas, we already
know about this." (Although Geoff Hinton probably deserved these patents in 2014.)

In an ideal world, people would patent their hard work, improve the public by
sharing it, and get fairly compensated for that improvement. To keep the spirit
of patents, I think we need to figure out the "hard part" of constructing AI
technology and how to incentivize sharing that. And in every case, we have to
weigh that difficulty against how it ultimately improves or impedes public
progress.

I dislike software patents in general because the difficulty tends to be low and
the public impact negative. For example, patenting an API or a standard (like
Java) is a categorically bad idea. Not only is it pretty easy to design an API,
but the patent ultimately destabilizes public infrastructure via a chilling
effect. The trade-off isn't worth it: all negatives, no positives.

Libraries and open-source software are more difficult to create, but they're
nice precisely they're free. Patenting an essential part of the software stack
feels like pulling bricks out of the middle of a pyramid. It's not clear how
that will go. Besides, if you want to make money off software, plenty of successful
Saas business models exist (like AWS or [AI
services](https://aws.amazon.com/machine-learning/ai-services/)).

Now, AI innovations require a lot of experimentation and work to prove, and
patentability could encourage corporate investment in R&D. That would be good.
But it's not clear how much any individual contribution should be worth. If I
use an ML model with [dropout](https://patents.google.com/patent/US9406017B2/en)
in my business, and you sue me, how much was that usage of dropout worth? All my
revenue? Half? If I didn't use it, my model accuracy might have gone down by 5%.
How do we value that 5%?

And how do we detect and enforce these patents? If I use variational dropout,
does that count? What about neuron pruning? That's like permanent dropout. And
what if someone proves mathematically that dropout is the most optimal
regularization technique? Are we all supposed to just keep using subpar methods,
for fear of being sued by some big company?

All in all, I can't really envision a world in which software or AI patents
postively impact coporate incentives. But hopefully I'll be proved wrong.
