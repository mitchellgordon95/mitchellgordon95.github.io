---
layout: post
title:  "Why Use Research Workflow Management?"
categories: misc
---

Research involves running long jobs with complex dependencies.

This is very nicely modeled by a DAG. Obviously nodes are tasks and arrows are
dependencies. Abstracting away the definition of the workflow from the execution
lets you do some very nice things. For example, you can

1. automatically manage which tasks have been run, so you don't accidentally
   re-run them
2. This lets you try simple things then add complexity without running the whole
   thing again.
3. Automatically parallelize things that can be parallelized,
4. which can be integrated with the job scheduler of your choice (Sun Grid
   Engine etc.)

Research also involves running the same workflow many times with slight changes
(such is the scientific method). This can be modeled as coloring nodes in the
DAG depending on which parameters you're using (aka a hyper-workflow). This lets
you

1. automatically namespace output files depending on which experiment you're
   running.
2. These namespaces are automatically generated in a consistent way based on the
   parameter changes
3. Only execute a subset of the possible experiments with an easy syntax.
4. Parallelize experiments as well as tasks.

So there's a couple workflow management tools, like Airflow, Luigi, and
[Ducttape](https://github.com/jhclark/ducttape). Airflow and Luigi, while being the most widely used, don't really
support hyper-workflows as far as I can tell. Ducttape does, but AFAIK it's only
used by about 100 people. It's also all bash, which I had previously sworn off
of, since anything you can do in bash you can also do in python. I just think
bash is hard to read and write.

So maybe I'll end up writing py-ducttape. I've been avoiding doing this because
I don't have a clear vision of the ideal syntax in my head. I also thought
integrating with SGE would be hard, but it turns out I can just parallelize with
multi-threading and then do the actual work with qsub -sync.

There's also [tape4nmt](https://github.com/shuoyangd/tape4nmt), which is (obviously) a ducttape workflow for neural
machine translation. It's got a lot of good stuff that you'll probably want to
use (if you're doing NMT). My only complaint so far is that they assume your DAG
will be structured a certain way and only let you fiddle with the hyper-workflow
parameters. This is a little too rigid for what I want to do, so I'm in the
process of gutting the thing and turning most of the tasks into re-usable
functions.

