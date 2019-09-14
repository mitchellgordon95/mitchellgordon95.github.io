---
layout: post
title:  "Improving ML Conferences"
categories: logistics
---

Yesterday someone told me "more than half of ML papers are bad" and "most of the
proofs are wrong."

I don't necessarily agree with this person (who comes from statistics), but they
had some decent points about our current system of peer reviewing and together
we came up with some suggestions to improve the state of things. First the
problems:

**Problem 0:** Conferences are facing a deluge of papers, many of them "low
quality." How do we keep the bar high while not becoming an exclusive club, in
which only known labs can publish papers?

**Problem 1:** There aren't enough (high-quality) reviewers. ML conferences often
email out last minute requests for more reviewers, and many reviewers are
first-year graduate students. How can we expect first-year graduate students to
give decent feedback or even know where the bar is? (I'm saying this as an early
second year graduate student.)

**Problem 2:** Reviewers don't have enough time to review papers. Reviewers for ML
conferences are often given a week to review 6 - 10 papers, some of which might
include very long proofs. These proofs are often relegated to the appendix and
never even glanced at during the review process.

These problems have contributed to the consistent degradation in the quality of
papers over time. And even when papers [are
wrong](https://openreview.net/forum?id=ryQu7f-RZ) no one bothers to retract
them! Just try looking for CS / ML papers on retractionwatch.com.

As far as solutions go, there are at least two points we can improve: the source
of the papers and the filtering process.

**Potential Filter Fix:** Journals are for papers, conferences are for talks.

Many of our problems stem from the fact that few people in ML read journals or
assign any value to the papers published there. We are a conference driven
field. However, journals have many reedeeming qualities. 

For example, a conference must review every single paper submitted before the
day of the conference, or else some papers will be forever ignored. Journals
don't have this problem: instead, they have a rolling queue for admissions,
since a paper can always simply be published in the next issue. Because of this,
journals don't have to scrounge for first-year graduate student reviewers; they
have a few high-quality reviewers who can really dig into papers with high
standards. The trade-off is that the queue for getting reviewed for a journal is much
longer.

Because of this higher reviewing standard, people in other fields assign higher
value to journal papers. If you want to get your work out there, you can still
submit to conferences. But in some fields, you only submit abstracts to
conferences. If the abstract is interesting, then you give a talk.

There are already a few ML journals, but I don't know about any of them. How can
we build a journal's reputation, so that it has the same value as publishing at
a conference?


**Potential Source Fix:** Lower author caps.

Now, we could try to be the change we want to see in the world: simply don't
submit papers unless you are confident in the quality of the work. Unfortunately
greed and ignorance will likely interfere with this strategy. Our incentives are
not aligned with restraint in publishing papers. Many published papers == money
and fame, regardless of actual paper quality. In a game theoretic sense, there
will always be those bad actors who screw things up for the rest of us.

But even without ill-will, most people don't even know where the bar is. I
didn't last year, and I'm not sure my bar's high enough today. I guess I'll find
out when I get my next round of reviews back.

You might claim that it's the advisor's job to raise the bar for graduate
students. Some do, some don't know where the bar is, and some ignore it because
of mis-aligned incentives. One way we could potentially force advisors to raise
the bar is to limit how many papers you can submit to a conference (as last
author). If a professor knows they can only have 5 papers from their lab
submitted, they'll be more careful about which they choose and give honest
feedback about quality.

**Potential Incentive Fix:** Don't count papers, count citations?

I just thought of this one, but maybe instead of counting papers we should count
the number of citations those papers get? (And by "we" I mean whoever's checking
grant / job applications.) Of course we'd want to filter self-citations and
circular citations (between friendly groups). Is this already done?

Anyway, this remains a hard problem. But, like I talked about in my previous
post, I believe we should view the scientific community as a big "truth-seeking
machine," which occassionally will need some remodeling and elbow grease.
