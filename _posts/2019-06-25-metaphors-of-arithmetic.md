---
layout: post
title: "The Metaphors of Arithmetic"
categories: math
---
<!-- Load the Paper.js library -->
<script src="/assets/js/acorn.js"></script>
<script type="text/javascript" src="/assets/js/paper-full.min.js"></script>
<!-- Define inlined PaperScript associate it with myCanvas -->
<script type="text/paperscript" canvas="myCanvas">
var center = view.center;
var MARGIN = 20;
var left = MARGIN;
var right = view.size.width - MARGIN;

function tick(x, height) {
    var tick = new Path([x, center.y-height], [x, center.y+height]);
    tick.strokeColor = 'black';
    return tick;
}

function showText(content, pos, color='black') {
    var text = new PointText(pos);
    text.justification = 'center';
    text.fillColor = color;
    text.content = content;
    text.fontFamily = 'CMSY10'
    return text;
}

var group;
function divide(num) {
    if (group) {group.remove()}

    group = new Group();
    group.addChild(showText(num, [center.x, view.size.height - MARGIN]))

    var height = 5;
    group.addChild(tick(left, height));
    group.addChild(tick(right, height));

    for (i = 1; i < num; i=i+1) {
        if (num % i == 0) {
            var parts = num / i;
            var width = (right - left) / parts;
            for (part = 1; part < parts; part=part+1) {
                group.addChild(tick(left + part * width, height))
            }
            height += 10;
        }
    }
}

var parts = 3;
function paint(){
    if (parts < 300) {
      divide(parts); parts = parts + 1;
    }
  }
paint()
setInterval(paint, 1000)
</script>

<div style="text-align: center">
<canvas id="myCanvas" style="width:100%"></canvas>
<h6 style="line-height: initial">Patterns In Fractions</h6>
<h6 style="margin: 0px; line-height: initial">The width is one unit. It is subdivided equally into a number of parts shown below the line.</h6>
<h6 style="line-height: initial">Groups of dividers are made taller if they also divide the width into an equal number of parts. The smaller the group, the taller the line.</h6>
</div>

I've been reading
[Arithmetic](https://www.amazon.com/dp/0674972236/ref=cm_sw_em_r_mt_dp_U_0fOeDbT294445)
by Paul Lockhart. It's an excellent book, and I highly recommend it to anyone
who's even vaguely interested in mathematics. It's about the history of probably
the first and most fundamental mathematical abstraction: counting. The
abstractions and metaphors used to count and compare things efficiently are
simply a delight to learn about. The book is also filled with fun and crazy
questions, like the following:

> The multiples of $$\wedge$$, $$\Delta$$, and $$II$$ have particularly nice
> patterns in the Banana system. What are these patterns? How do they compare
> with the multiples of 5, 9, and 11 in the Hindu-Arabic system?

Besides the history, fun facts, and puzzles, I think this book is really
important for a couple other reasons...

## Keeping the Inutition

First, I've noticed that while doing proofs for upper-level math classes, I
breeze through the algebra without really thinking about what it is I'm doing. I
don't have any intuition. For example, I can write down:[^1]

<div style="text-align: center">
$$\frac{e^{a_i}\Sigma-e^{a_j}e^{a_i}}{\Sigma^2}=\frac{e^{a_i}}{\Sigma}\frac{\Sigma - e^{a_j}}{\Sigma}$$
</div>

But it's just symbol munging; I've basically memorized that these symbols behave
this way. If I have any intuition about what these quantities *mean* and the
metaphors at play, I've definitely lost it after doing any mildly complex
algebra. And like I've [said
before](http://localhost:4000/math/2019/05/09/the-importance-of-not-taking-math-too-seriously.html),
intuition and metaphor is not optional in mathematics. It's the difference
between being a mindless mechanized robot and a human being who can see the
beauty in maths and come up with new solutions.

The fault lies, I think, with my grade school education. Instead of starting
with the metaphors, they teach arithmetic via [memorizing
algorithms](https://www.ducksters.com/kidsmath/long_multiplication.php). Which
is great if you're a cog in the British empire's [bureaucratic
machine](https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud?language=en):
you can still do the multiplication. You just won't be able to ground it via
metaphor to anything that actually makes sense. [^2]

So this book basically took me back to grade school and gave me a bunch of
tools and perspectives that can help me understand the rest of mathematics. I
really wish I had this book 10 years ago. After all:

> Arithmetic can be a gateway drug for mathematics. - Paul Lockhart

## Metaphor

The second reason I like this book is because arithmetic is perhaps the simplest
example of using metaphor to shortcut computation, which is something I've been
thinking about a lot lately. This might be a stretch for some people, so let me break it down:

First, consider the linguistic theory of [Metaphors We Live
By](https://www.amazon.com/Metaphors-We-Live-George-Lakoff/dp/0226468011) by
Lakoff and Johnson. Metaphor, rather than simply being a poetic device, is in
fact the elementary building block out of which our entire conceptual system
is built. And our conceptual system is basically all we have: everything we think and do can be described in terms of the metaphors we employ to relate sensory experiences to one another.

> The concepts that govern our thought are not just matters of intellect. They
> also govern our everyday functioning [...] what we percieve, how we get around
> in the world, and how we relate to other people. Our conceptual system thus
> plays a central role in defining our everyday realities.  
> \- Lakoff and Johnson

Metaphors also stack, compounding to form more complicated and higher-level
abstractions. We don't usually think about this system, probably because it's
difficult to introspect and think about thinking.

But one way to study it is to look at how it appears in our language. ARGUMENT
is the first example given for how a concept might be metaphorical, and how it
might structure an activity. The conceptual metaphor ARGUMENT IS WAR is
reflected in everyday language in a variety of expressions:

> Your claims are **indefensible**.  
> He **attacked every weak point** in my argument.  
> His criticisms were **right on target**.  
> I **demolished** his argument.  
> I've never **won** an argument with him.  
> You disagree? Okay, **shoot!**  
> If you use that **strategy**, he'll **wipe you out**.  
> He **shot down** all of my arguments.

> It is important to see that we don't just *talk* about arguments in terms of
> war. We can actually win or lose arguments. We see the person we are arguing
> with as an opponent. We attack his positions and we defend our own. [...] Many
> of the things we *do* in arguing are partially structured by the concept of
> war. Though there is no physical battle, there is a verbal battle, and the
> structure of an argument [...] reflects this. [...]

> **The essence of metaphor is understanding and experiencing one kind of thing
> in terms of another.** Arguments and wars are different kinds of things [...]
> but ARGUMENT is partially structured, understood, and performed, and talked
> about in terms of WAR. [...] Moreover, this is the **ordinary** way of having
> an argument and talking about one. - Lakoff and Johnson

They go on to imagine a culture in which argument is instead viewed as dance,
where participants are performers, and the goal is to perform in a "balanced and
aesthetically pleasing way." But we're not really interested in dance or
argument; instead, we're interested in...

## Computation

So here's my hot take: *math* involves metaphor just as much as language and
everything else does. And *computation* involves a very specific kind of
metaphor: one in which the state of one side of the metaphor can be used to
*predict* specific qualities of the other side.[^3]

> The point is that there are things, and sometimes we want to count them. - Paul Lockhart

Consider one of the first examples of a metaphor Paul gives us: Piles of Rocks.
Suppose you're an ancient shepherd. Not just any ancient shepherd, but a
competitive ancient shepherd: you want to know if you have a bigger flock than
that guy down the street.

How could you figure out who has the bigger flock? Well, if you've got five
sheep, and he's got three, you can kind of just look and figure it out. This is
called number perception, and it's built into our brains. We're pretty good at
recognizing when things repeat (pattern recognition). The problem with number
perception is it starts to break down above 6 or 7. If you've both got
thirty-ish sheep, it's really hard to tell just by looking. Also, sheep are kind
of hard to count. They run around a lot, and unless you've got a tower or
something, it's hard to see all of them at once.

<div style="text-align: center">
<img  widht="200px" height="200px" src="{{'/assets/sheep.png' | absolute_url }}">
<h6>Some sheep. <a href="https://www.agridirect.ie/blog/sheep-welfare-scheme-requirements/">Source</a></h6>
</div>

Now, if it were you and me, we could probably herd all the sheep through a gate,
one by one, and count them as they go through. We do the same for our neighbor's
flock, and then "compare" our counts somehow. There's a problem with this
approach, however. As an ancient shepherd, you're illiterate. You don't even
know the names of the numbers. Maybe numbers haven't even been invented yet.

So here's where the metaphor comes in to help us out. A SHEEP IS A ROCK. Suppose
that every time we see a sheep, we put a rock in our bag. Every time we see our
neighbor's sheep, we put a rock in his bag.

<div style="text-align: center">
<img  widht="200px" height="200px" src="{{'/assets/rocks.jpg' | absolute_url }}">
<h6>Source - <a href="https://www.rocksforkids.com/RFK/howrocks.html">Rocks for Kids</a></h6>
</div>

Now, we don't have to compare sheep directly, but we can compare bags of rocks.
This is decidedly easier. If we're feeling lazy, we can just see which bag feels
heavier. Or, if we want to be precise, we can line up our stones in pairs, one
from our bag and one from our neighbors, until one of us runs out. Whoever runs
out has less sheep.

Also, we never have to count our sheep again. (As long as we keep our bag
of rocks with us, and none of our sheep dies or gives birth, in which case we
would add or remove rocks.)

Notice that in order for this to work, there has to be some kind of regularity
in our world that we can exploit. This one is fairly mundane: if I have one
sheep and one rock now, I will likely still have one sheep and one rock in the
future. (If I do nothing.) That is, rocks tend to stay rocks and don't
spontaneously break apart or burst into flames and disappear.[^4] Same goes for
sheep. So we can say rocks are like sheep, at least in this aspect, and we can
exploit that to make predictions about one, given the other. This is metaphor.

This is what I mean by short-cutting computation. I don't have to run a full
computer simulation of my flock
[Sims-style](https://en.wikipedia.org/wiki/The_Sims) just to know how many sheep
I'll have at time $$t$$. I don't even have to look at my sheep again. Instead, I
exploit some pattern I see in the world to be lazy.[^5] 

My conjecture is that all of math and science is basically just this, but for
more complicated relationships.

<div style="text-align: center">
<img  widht="200px" height="200px" src="{{'/assets/coins.jpg' | absolute_url }}">
<h6>Ancient Egyptian money coins, not counting coins. - <a href="http://www.ancientegyptianfacts.com/ancient-egyptian-coins.html">Source</a></h6>
</div>

Furthermore, if the whole Pile of Rocks metaphor isn't cutting it for you (bag's
too heavy, or rocks take too long to line up), you can stack metaphors on top of
each other to make things even more convenient.

Consider this metaphor: a RED ROCK IS 10 ROCKS. So if we have 10 rocks in our
bag, we can throw them out and just add a single red rock. Very convenient. Then
when we want to compare to our neighbor, we can just compare red rocks directly.
(We might need to do some exchanging to make the comparison work.) If we get too
many red rocks, we can add another metaphor: BLUE ROCK IS 10 RED ROCKS. So a blue rock is 100
rocks. 

In fact, this is exactly how the ancient [Egyptian
system](https://en.wikipedia.org/wiki/Egyptian_numerals) of counting worked.
They even had counting coins (similar to our colored rocks), which could be
strewn about on a table called a "counter" to do arithmetic. (And that's why you
have a kitchen counter.)

And remember, all of this is based on top of the metaphor SHEEP are ROCKS,
although we could swap out sheep for anything else we want to count. The rest of
Paul's book is basically about more metaphors, different metaphors, and ways to
stack metaphors that make counting easier. (Of course, he doesn't exactly frame
it this way.) But all of these metaphors / different perspectives make certain
things easier to do and other things harder. (Binary makes working with powers
of 2 a breeze.)

So yes, it's a good book. And it has a very clear view of how language, math,
metaphor, and computation are all inextricably intertwined. I have more to say
(and learn) about this, so I'll probably circle back around to this topic soon.

\- Mitchell

----
[^1]: This is from the [derivative of softmax](https://eli.thegreenplace.net/2016/the-softmax-function-and-its-derivative/).

[^2]: Common core actually recently started teaching the [box
    method](http://www.elementarymathconsultant.com/teaching-box-method-multiplication/),
    which moves more in the right direction, I think.

[^3]: This is probably partially true of metaphors in general, but science and
    engineering typically require the relationship to be consistently
    predictable. (Heuristics are less valuable.)

[^4]: What if rocks did tend to split in half, but only when their associated sheep gave birth? Now that would be *crazy*! (And super convenient.)

[^5]: This short-cutting might not always be possible. No matter what metaphor you choose, it might not let you be lazy at all! If you're someone like Stephen Wolfram, you might call this [computational irreducibility](http://mathworld.wolfram.com/ComputationalIrreducibility.html)
