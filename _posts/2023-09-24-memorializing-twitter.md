---
layout: post
title:  "Memorializing My Twitter Side-Project"
categories: ml
---
This is a short memorial post for my dead Twitter summarizer project, aka "Twitter at a Glance."

Links: <a href="http://twitter.mitchgordon.me">Demo</a> (if it's still up), <a href="https://github.com/mitchellgordon95/TwitterSummary" target="_blank">Github</a>

## What It Does

Twitter at a Glance<sup>&trade;</sup> summarizes your Twitter feed so you can stay on top of what's happening. Concretely it:

- Grabs your timeline tweets from the last 24 hours
- Clusters them using ChatGPT (maybe twice, hierarchically)
- Summarizes those clusters

This gets you a nice compact homepage with some topics you can click through to see the tweets.

<img src="{{'/assets/taag_demo.png' | relative_url }}">
<a href="{{'/taag_demo.html' | relative_url }}">Interactive</a>

## How It Works

# Hashtag Generation & Clustering

Clustering operates on hashtags, which we get from a simple prompt to GPT-3.5:

```
TWEET:
{tweet}

Generate 30 possible hashtags that could go with TWEET.

Rules:
If TWEET refers to a location or event, include at least one hashtag containing the name of the event.
If TWEET refers to a specific object or thing, include at least one hashtag containing the name of that thing.
```
<a href="https://chat.openai.com/share/957c094d-0849-416c-b49a-51b4ce57db72">ChatGPT example</a>

We then pick hashtags which are associated with 7 tweets or less[^2] and use those as clusters. For smaller clusters, we also "pack" them by greedily grabbing tweets that have a high hashtag-overlap with the existing tweets in the cluster.[^1]

[^2]: which is a magic number I picked because more felt like it overloaded my working memory

[^1]: NB: I tried a few other things that didn't work nearly as well. Naively embedding and kmeans clustering tended to produce "dirty" clusters that had too many topics. I tried to fix this via various heuristics (prompting the model to identify dirty clusters and sub-clustering them, or sub-clustering when the summary was too long) but the quality was still pretty sub-par. TL;DR: picking the "k" in kmeans turned out to be pretty non-trivial.

# Summarization

Then just ask for a summary:

```
TWEETS:
"""
{tweets_text}
"""

What topic do all TWEETS have in common? Rules:

- The topic must begin with "{num_tweets} tweets are about"
- The topic must be no more than 1 sentence.
- The topic must be discussed in a majority of the tweets.
- The topic must be related to {hashtags}

Think out loud, then state the topic prefixed with the TOPIC label.
```
<a href="https://chat.openai.com/share/98892dd4-d6aa-45d1-9ef2-9bfade0793a7">ChatGPT example</a>

Which, you know, could probably still use some elbow grease. But it works ok. We do something similar for the meta-clusters, where the inputs to that prompt are just the summaries from the sub-clusters.

If we do meta-summarization, we can also re-summarize the sub-clusters to get more specific about what makes that cluster different:

```
TWEETS:
\"\"\"
{tweets_text}
\"\"\"

What topic do all TWEETS have in common? Rules:

- The topic must be no more than 1 sentence.
- The topic must be discussed in a majority of the tweets.
- The topic must be related to {hashtags}
- The topic must begin with "{num_cluster_tweets} tweets are about {cluster_summary}.  More specifically, {num_tweets} are about"

Do not think. Just say the topic and only the topic.
```
<a href="https://chat.openai.com/share/af0f95ff-3e3e-42e9-8cc1-9ff617e92f87">ChatGPT Example</a>

## Why It's Dead

# Price

The Twitter API is ridiculously priced, at $100 / month to retrieve up to 10k tweets for the basic tier. We can serve ~4 DAUs for that price, assuming each page view retrieves 100 tweets. The next tier up costs $5k / month. Which brings me to...

# Usefulness

Common feedback I've gotten is that most people tend to have pretty domain-specific feeds (AI, crypto, etc.). So the clusters all tend to be about the same thing. Take my feed for example:

<img src="{{'/assets/taag_mitchg.png' | relative_url }}">

All the clusters are some variation of "advances in AI". The meta-clustering and resummarization give a little bit more specificity, but I usually end up clicking through most of the clusters anyway.

# Takeaways

Perhaps a flood of information is just a flood of information, regardless of how you slice and dice it? I will say that the experience is _slightly_ nicer than infinite scrolling because it makes the content feel more finite and manageable. But not worth $25 / month.

I still think there's a huge potential for LMs to fundamentally change how we consume information. If the Twitter API were less egregious, I might keep experimenting with different presentation formats (interactive cluster subjects, perhaps, or intents like "keep up with AI developments") and different prompting strategies.

But alas, the planets spin quite outside of my grasp.

------