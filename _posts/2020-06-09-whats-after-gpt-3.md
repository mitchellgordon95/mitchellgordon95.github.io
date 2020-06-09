---
layout: post
title:  "What's After GPT-3?"
categories: ml
---

The ML community is buzzing about GPT-3, OpenAI's latest and greatest creation.
It's so great that many junior researchers are sure to be discouraged, thinking
NLP has already been solved and they can all go home.

But worry not! In this post, I'll make some totally unfounded predictions about
how GPT-3 will eventually lead to AGI, which you can spend your dissertation disproving.


## Phase 1: The Honeymoon Phase

The NLP community will, invariably, spend the next 6-12 months salivating over
GPT-3 in exactly the same way they salivated over BERT. Exactly how many NLP
tasks can GPT-3 solve? And how many can it few-shot?

After our last "BERT" event which shattered the leaderboards, there was a
veritable cottage industry of creating harder tasks that BERT couldn't solve.
[^lipton] [^gardner] [^drop] [^superglue] [^hans] [^hella] GPT-3 evaluates on some of
these, but only in the few-shot setting. There will be many papers (once again)
showing that pre-trained language models can or can't beat the rest of these
benchmarks when using fine-tuning. Some paper titles will probably be:


[^lipton]: Kaushik, Divyansh, Eduard Hovy, and Zachary C. Lipton. 2019. “Learning the Difference That Makes a Difference with Counterfactually-Augmented Data.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/1909.12434. 

[^gardner]: Gardner, Matt, Yoav Artzi, Victoria Basmova, Jonathan Berant, Ben Bogin, Sihao Chen, Pradeep Dasigi, et al. 2020. “Evaluating NLP Models via Contrast Sets.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/2004.02709.

[^drop]: Dua, Dheeru, Yizhong Wang, Pradeep Dasigi, Gabriel Stanovsky, Sameer Singh, and Matt Gardner. 2019. “DROP: A Reading Comprehension Benchmark Requiring Discrete Reasoning Over Paragraphs.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/1903.00161.

[^superglue]: Wang, Alex, Yada Pruksachatkun, Nikita Nangia, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, and Samuel R. Bowman. 2019. “SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/1905.00537.

[^hans]: Thomas McCoy, R., Ellie Pavlick, and Tal Linzen. 2019. “Right for the Wrong Reasons: Diagnosing Syntactic Heuristics in Natural Language Inference.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/1902.01007.

[^hella]: Zellers, Rowan, Ari Holtzman, Yonatan Bisk, Ali Farhadi, and Yejin Choi. 2019. “HellaSwag: Can a Machine Really Finish Your Sentence?” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/1905.07830.

- GPT-3 is Cleverer Than Hans
- DROP What Your Doing, GPT-3 Will Do It For You
- GPT-3 Beats Your Benchmark

And then there's the few-shotting aspect of GPT-3, which was the big innovative
claim in the paper. A few more papers here on classic tasks...

- Can GPT-3 Few-Shot Syntactic Parsing?
- ... Semantic Parsing?
- ... Machine Translation?

That last one is actually discussed in the paper, but there will definitely be a
push in the direction of MT. Unsupervised machine-translation is an extremely
popular field right now, and they get SOTA results... without really even
trying. It's incredible. And also very enticing.

And we'll probably go through the whole linguistic probing thing again. How does
GPT-3 think? Does it have syntax trees on the inside?[^syntax] Is it really just
re-discovering the classical NLP pipeline?[^pipe] There have been some
interesting developments in this area, so I expect some applications to GPT-3. [^lena] [^ryan] [^hewitt]

[^syntax]: Hewitt, John, and Christopher D. Manning. 2019. “A Structural Probe for Finding Syntax in Word Representations.” In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), 4129–38.

[^pipe]: Tenney, Ian, Dipanjan Das, and Ellie Pavlick. 2019. “BERT Rediscovers the Classical NLP Pipeline.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/1905.05950.

[^hewitt]: Hewitt, John, and Percy Liang. 2019. “Designing and Interpreting Probes with Control Tasks.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/1909.03368.

[^ryan]: Pimentel, Tiago, Josef Valvoda, Rowan Hall Maudslay, Ran Zmigrod, Adina Williams, and Ryan Cotterell. 2020. “Information-Theoretic Probing for Linguistic Structure.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/2004.03061.

[^lena]: Voita, Elena, and Ivan Titov. 2020. “Information-Theoretic Probing with Minimum Description Length.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/2003.12298.

- Waiter, There's a Syntax Tree in My GPT-3

And finally, GPT-3 is really difficult to use given the number of parameters.
I'm sure at least a few papers will come out in the next 6 months which will
compress GPT-3 using various compression methods to improve the computational
cost of inference.

- Distilling GPT-3: DistillGPT
- Quantizing GPT-3 With Quantization Noise
- Pruning GPT-3 In a Way That's Totally Better Than All The Other Pruning Methods 

I will probably be guilty of one of these. 

## Phase 2: Grounding and Multi-Task

Setting aside the merits of GPT-3 for a moment, there are some real issues that
could be improved. Many of them are listed in the paper.

**Common-sense and Physical Reasoning** I have no doubt that if we had
*infinite* data, language modeling could give us a model which understands and
reasons about anything in the world. Unfortunately we only have a finite amount
of data, and within that data there's certain things that GPT-3 is entirely
unlikely to learn. One example that GPT-3 has a hard time with: "if you put
cheese in the fridge, will it melt?"

**Coherence** GPT-3, like GPT-2, has a tendency to repeat itself semantically at
the document-level when generating long passages of text. It can also breakdown,
contradict itself, and output non-sequitor sentences as the sequence length
increases.

**Sample Efficiency** Let's not forget that we had to train on terabytes of text
from the internet to get these kinds of improvements, which is way more than a
human sees in their lifetime.

**Bias and Interpretability** And when everything you learn about the world comes
from what other people write on the internet, there's a good chance your
preception will be a bit skewed. There's a large body of work on analyzing the
prejudice inherent in language models and potential ways of mitigating them.

To me, a partial answer to these problems is *grounding*, which really just
means getting data that has both text and other modalities, like images, videos,
and sound. Intuitively, a language model is trying to learn about how the world
is, as viewed through the lens of language. It would make sense to give the
learning system more direct access to the world (and the invariances we expect
in those representations). Then we might need less text data to learn more
common-sense and physical reasoning. 

This is already happening with BERT-like models [^vilbert] and is a growing
trend in NLP in general.[^grounding] The scale of compute necessary to handle
video pre-training is maybe a ways in the future, however, and there will need
to be some fundamental breakthroughs in computational efficiency to get us
there. That being said, I'd expect something in this vein within the next year or two.

[^vilbert]: Lu, Jiasen, Dhruv Batra, Devi Parikh, and Stefan Lee. 2019. “ViLBERT: Pretraining Task-Agnostic Visiolinguistic Representations for Vision-and-Language Tasks.” arXiv [cs.CV]. arXiv. http://arxiv.org/abs/1908.02265.

[^grounding]: Bisk, Yonatan, Ari Holtzman, Jesse Thomason, Jacob Andreas, Yoshua Bengio, Joyce Chai, Mirella Lapata, et al. 2020. “Experience Grounds Language.” arXiv [cs.CL]. arXiv. http://arxiv.org/abs/2004.10151. 

Another potential answer is really just understanding why pre-training works in
a more scientific way. One working theory is that language modeling is actually
an amalgamation of many separable sub-tasks. As the model pre-trains, it picks
up many useful sub-routines that it then mixes and matches depending on the
available context to make the best prediction. If we can enumerate the types of
subtasks, their associated algorithms, and their associated data, we might be
able to explicitly encode them in our inductive biases, thereby reducing the
amount of data and compute needed to get good performance.

We might also be able to define more tasks which could boost the model's
generalizability. It's not clear, however, whether the "pre-trained algorithm"
can really be separated this way.


## Phase 3: Agency

And finally, once these problems are solved people will probably start looking
towards AGI. GPT-3 almost seems to be generally intelligent already, being able
to few-shot so many tasks. One of my friends has said, "if we had a BERT-type
model for reinforcement learning, I would say that's probably sufficient for AGI."

But that's exactly what GPT-3 is missing: agency. We might think
of this as a different type of grounding, one which gives the model a sense of
time, space, embodiment, and collaboration. We're talking about walking, talking
robots, here.

This is so far in the future and outside of my understanding that I'm not going
to talk much about it. I do think, however, that dialogue agents would be a good
place to start. Dialogue agents are chatbots which collaborate with humans to
accomplish tasks via a pre-defined action space. Effective dialogue agents will
need to draw on lessons from pre-training, multi-modal grounding, and
reinforcement learning, while also learning how to collaborate with humans.

Significant progress in this area is probably at least two years out, if not more.

----
