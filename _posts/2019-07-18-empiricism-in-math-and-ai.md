---
layout: post
title:  "Empiricism in Math and AI"
categories: philosophy
---

## Empricism

> The senses, although they are necessary for all our actual knowledge, are not
> sufficient to give us the whole of it, since the senses never give anything
> but instances... From which it appears that necessary truths, such as we find
> in pure mathematics, and particularly in arithmetic and geometry, must have
> principles whose proof does not depend on instances, nor consequently on the
> testimony of the senses, although without the senses it would never have
> occurred to us to think of
> them...  
> \- Leibniz: Philosophical Writings 

When trying to build AI, eventually you run into this choice between empiricism
  and rationalism. Where does knowledge come from? What is logic? How do we learn?
  
To me, this is a practical question rather than a philosophical one. How do I
  build a machine that learns and reasons like a human?
  
To me, accepting [rationalism](https://en.wikipedia.org/wiki/Rationalism) (like
  Leibniz, above) is a non-starter for general AI because it concedes that human
  thought is extra-ordinary. And if it's extra-ordinary, then we can't build a
  machine to simulate it out of ordinary stuff like silicon.

And so thought can't be abstract. Thought has to be physical, or at least
  empirically observable. Thought has to follow from physical materials
  interacting with the same rules as other physical systems. That assumption
  lets us pursue the construction of a general AI, within the framework of
  physics. (A single theory of everything.)
  
To most people, this means thought == brain, and they're fine with that.
  Thought is just neurons and biochemical reactions, governed by the same
  electromagnetism etc. that exists outside of the body.
  
But if (I assume) thought is physical, then (I have to assume) everything else
  is physical. Specifically, mathematics and logic. Again, this is because to
  build general AI, I have to understand how to implement these things in my
  machine. They have to be empirically measurable; they're not allowed to be
  hand-wavy and abstract.
  
## Math

> All our knowledge begins with the senses, proceeds then to the understanding,
> and ends with reason. There is nothing higher than reason.  
> \- Immanuel Kant, [Critique of Pure Reason](https://en.wikipedia.org/wiki/Critique_of_Pure_Reason)

But how do you define math and logic
  [operationally](https://en.wikipedia.org/wiki/Operational_definition), in
  terms of base senses? After all, the point is that "math is true." People
  believe in math the same way they believe in God: it exists on some
  higher-plane of existence, and it's authoritative. You start with
  unquestionable axioms and proceed via unquestionable logic. Adding empricial
  observations is just corrupting the pureness of it.
  
Now, I'm *not* saying that "math isn't true." There are certainly regularities
  in the universe: gravity, relativity, electromagnetism. Linear systems exist
  and are predictable. Arithmetic is useful in predicting outcomes of practical
  daily situations.
  
The caveat is that discovering and codifying these regularities is carried out
  by humans, who are messy and error-prone. And that's what I mean by an
  empirical approach to math: viewing the people as the physical system under
  study.

> A mathematician's work is mostly a tangle of guesswork, analogy, wishful
> thinking and frustration, and proof, far from being the core of discovery, is
> more often than not a way of making sure that our minds are not playing tricks.  
> \- Gian-Carlo Rota
  
  
So I view math as a natural process, involving humans (or constructed robots),
  which resembles a distributed consensus algorithm. Many people [try
  math](http://empslocal.ex.ac.uk/people/staff/mrwatkin//zeta/RHproofs.htm) and
  publish proofs. Only the ones that are accepted by the majority pass the
  filter to become "accepted math." This lets us carry on a single line of
  reasoning over the millenia.
  
This is the essence of math: we establish a common language (axioms), we
  reason about those axioms, and then we build trust in that reasoning via
  distributed proof-checking.

## Metaphor
  
> The sciences do not try to explain, they hardly even try to interpret, they
> mainly make models. By a model is meant a mathematical construct which, with the
> addition of certain verbal interpretations, describes observed phenomena. The
> justification of such a mathematical construct is solely and precisely that it
> is expected to work.
> 
> \- John Von Neumann

But how should my "thinking machine" construct axioms or apply proven theorems
  to the real world? What is the observable mechanism behind this?
  
I think about "metaphor" as the building block for this operation.
  Specifically, metaphor as described by [Lakoff and
  Johnson](https://www.amazon.com/Metaphors-We-Live-George-Lakoff/dp/0226468011),
  which I've talked about [before]({% post_url 2019-07-18-empiricism-in-math-and-ai %}).
  
In [their model](http://theliterarylink.com/metaphors.html), everything starts
  with basic senses. And as we live, we learn to associate certain experiences
  with other past experiences. Argument is war, time is money, 3 gold coins is a sheep.
  That's metaphor. And they stack to build more complicated metaphors.

And to me, the reason we developed this faculty was so we can [predict the
  future](https://www.amazon.com/Intelligence-Understanding-Creation-Intelligent-Machines/dp/0805078533)
  better. "He sank like a lead weight." You've never seen him sink before, but
  you've seen a lead weight sink. It's like that.

A reasonable physical implementation of this in my machine looks like a neural
  network. Of course, the details are fuzzy, but that's what the whole field of
  ML is about. How does one look at an image and decide if it looks like a dog
  or a cat? In other words, how does a machine build abstract metaphor?

Getting back to math (and I've made this point [before]({% post_url
  2019-07-18-empiricism-in-math-and-ai %})): the whole endeavor can be thought
  of as building metahpors between real world-scenarios and axiomatic symbols on
  the page. The symbols ought to change via rules that maintain the
  metaphor. Then you can use the theorems to make predictions about your
  real-world system.

> Mathematics is the study of analogies between analogies. All science is.
> Scientists want to show that things that don't look alike are really the same.
> That is one of their innermost Freudian motivations. In fact, that is what we
> mean by understanding.  
> \- Gian-Carlo Rota
  
> Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.  
> \- Jean Baptiste Joseph Fourier

To be useful, the system ought to relate via metaphor to a high variety of
  physical systems. One way to do this is to keep your axioms really simple
  (like things in a [set](https://en.wikipedia.org/wiki/Set_theory)) so that
  they apply whenever someone can recognize countable "things" that may or may
  not be in a collection. Another way is to discover symbols that helps you
  predict something about literally everything (E=mc^2).
  
But again, the application of these axioms in my "thinking machine" depends on
  some physical neural networks, which have been trained through experience. The
  metaphors employed during reasoning also depend on experience. I suspect
  people are not different. Math doesn't happen in a vacuum. No matter how
  "pure" and "right" you think math is, eventually you need a messy brain to
  pattern-match real-world systems to axioms, and back again.

Except for pure math, I suppose. And I can't entirely disregard it, because even
  negative numbers and complex numbers were "pure math" at some point. [Paul
  Lockhart](https://www.amazon.com/Arithmetic-Paul-Lockhart/dp/0674972236) would
  say they were "extended" via symmetry and then only later reified to concrete
  domains (like debts and electrical circuits). It's curious that our aesthetic
  sense of symmetry should have any relation at all to what happens in the
  world. There's probably deeper truth here, but I can't put my finger on it.
  
## Conclusion

  I'm an empiricist. I'll likely live and die and empiricist. Feel free to put
  "empricist" on my tombstone.
  
And this has changed how I think about math. The whole thing, to me, is
pattern-matching via metaphor which exploits regularities in the universe. Math
is only possible because for some reason, these symbols $$-at^2+v_0t$$, when
shuffled around correctly, behave exactly like a ball falling through the air.

It's wild stuff.

And when viewed as less-than perfect art, the short-comings of math become
apparent. Some math is wrong. (Probably not linear algebra, though.) Some math
is beautiful (in the eyes of the community) but not useful. (It does not relate
via metaphor to any real-world phenomenon which we can make predictions about.)

There is not one "right" way to do math. There are many symbols to choose and
many ways to prove a theorem. The important thing is that the metaphor is
maintained. The symbols must refelect some regularity in the universe. And it
has to be beautiful.

> Therefore psychologically we must keep all the theories in our heads, and
> every theoretical physicist who is any good knows six or seven different
> theoretical representations for exactly the same physics.  
> \- Richard Feynman

And in the end, the kind of math we create and will accept as beatiful and true
is limited by the physical constraints of our wetware. There might be
regularities in the universe that are universal but too complicated for us to
store in our brains.

However, all this requires abandoning the conceit that humans are special. If
you are willing to propose that you and I are fundamentally different from the
robot I am building out of stones and such (or even the people whose heads we've
opened up and looked inside), feel free to ignore everything I've said.

\- Mitchell
