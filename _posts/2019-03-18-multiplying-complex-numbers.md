---
layout: post
title: "Multiplying Complex Numbers"
categories: math
---
<!-- Load the Paper.js library -->
<script src="/assets/js/acorn.js"></script>
<script type="text/javascript" src="/assets/js/paper-full.min.js"></script>
<!-- Define inlined PaperScript associate it with myCanvas -->
<script type="text/paperscript" canvas="myCanvas">
 ORIGIN = new Point(300, 150)
 SCALE = 10

 // (a + bi)(c + di)
 // = (a + bi)c + (a + bi)di

 var yaxis = new Path([ORIGIN.x, 0], [ORIGIN.x, ORIGIN.y * 2]);
 var xaxis = new Path([0, ORIGIN.y], [ORIGIN.x * 2, ORIGIN.y]);
 yaxis.strokeColor = 'black'
 xaxis.strokeColor = 'black'
 yaxis.dashArray = [4, 4]
 xaxis.dashArray = [4, 4]

 function convertVec(vec){
     // Convert a linear algebra vector into a Paper vector
     return new Point(vec.x, -vec.y) * SCALE
 }

 function convertPaperPos(pos) {
     // Convert a paper pos to a linear algebra vector
     var paperVec = pos - ORIGIN;
     return new Point(paperVec.x, -paperVec.y) / SCALE
 }

 function showText(content, pos, color='black') {
     var text = new PointText(pos);
     text.justification = 'left';
     text.fillColor = color;
     text.content = content;
     text.fontFamily = 'CMSY10'
     return text;
 }

 function showVec(vec, {name=null, start=new Point(0,0), color='black'} = {}) {
     vec = convertVec(vec);
     start = ORIGIN + convertVec(start);
     
     end = vec+start;
     if (name != null) {
	       namePos = start + (vec / 2) + vec.normalize(15).rotate(90)
	       var nameText = showText(name, namePos)
	   }
     vectorItem = new Group([
		     new Path([start, end]),
		     new Path([end, end-vec.normalize(10).rotate(30)]),
		     new Path([end, end-vec.normalize(10).rotate(-30)]),
		     nameText
	   ]);
	   vectorItem.strokeColor = color;
	   
	   return vectorItem
 }
 var mouseVec;
 var a = 10; var b = 2; var c = 2; var d = 1;
 var x = new Point(a, b);
 var drawGroup;
 function onFrame(event) {
     if (drawGroup) drawGroup.remove();
     y = new Point(c,d);
     rightAngle = new Path();
     rightAngle.moveTo(ORIGIN + convertVec((x*d).rotate(90)) + convertVec(x).rotate(90).normalize(10))
     rightAngle.lineTo(ORIGIN + convertVec((x*d).rotate(90)) + convertVec(x).rotate(90).normalize(10) + convertVec(x).normalize(10))
     rightAngle.lineTo(ORIGIN + convertVec((x*d).rotate(90)) + convertVec(x).normalize(10))
     rightAngle.strokeColor = 'black'
     drawGroup = new Group([
         rightAngle,
         showVec(x, {name: 'a+bi', color: 'red'}),
         // showVec(x * c),
         showVec((x * d).rotate(90), {name:"(a+bi)*di", color:"blue"}),
         showVec(x * c, {start:(x * d).rotate(90), name: "(a+bi)*c", color: 'green'}),
         showVec((x * d).rotate(90) + (x * c), {name: "(a+bi)(c+di)"}),
         showText("θ", ORIGIN + convertVec((x * d).rotate(90) + (x * c)).normalize(20).rotate(20), color='purple'),
         showText(`a = ${a.toFixed(2)}, b = ${b.toFixed(2)}, |a + bi| = ${x.length.toFixed(2)}`, ORIGIN + new Point(50, 50), color='red'),
         showText(`c = ${c.toFixed(2)}, `, ORIGIN + new Point(50, 70), color='green'),
         showText(`d = ${d.toFixed(2)}`, ORIGIN + new Point(100, 70), color='blue'),
         showText(`θ = 90 - arctan(c/d) = arctan(d/c) = ${(Math.atan(d/c) / 2 / Math.PI * 360).toFixed(2)}`, ORIGIN + new Point(50, 90), color='purple'),
         showText(`|(a+bi)(c+di)| = ${x.length.toFixed(2)} * ${y.length.toFixed(2)} = ${(x.length * y.length).toFixed(2)}`, ORIGIN + new Point(50, 110)),
     ]);
 }

 function onMouseMove(event) {
	   mouseVec = convertPaperPos(event.point)
	   c = mouseVec.project(x).length / x.length
     d = mouseVec.project(x.rotate(90)).length / x.length
 }

</script>
I've been interested in complex numbers lately[^1], but something bothered me
about complex multiplication: **why is multiplying two numbers the same as adding
their angles and multiplying their lengths**? Luckily, I'm
starting to figure out that [analogies are what make math
beautiful](https://betterexplained.com/articles/math-and-analogies/), and that
doing good math often feels like playing around.

So, what analogies can we use? First, complex numbers can be vectors on a plane.
Second, doing arithmetic (multiplying, adding, etc.) can be [a geometric
transformation](https://betterexplained.com/articles/rethinking-arithmetic-a-visual-guide/).

So instead of asking, "what does $$(a+bi)(c+di)$$ mean?" We can ask "what
geometric transformation is the same as multiplying by $$(c+di)$$?"

To start, we can apply the distributive rule:

$$(a+bi)(c+di) = \textcolor{green}{(a+bi)c} + \textcolor{blue}{(a+bi)di}$$

So now, instead of one transformation, we have three simpler transformations:

<span style="color: green">1. Scale your original complex number by c.</span>

<span style="color: blue">2. Scale your original complex number by d, then
rotate it by 90 degrees.</span> \\
(Multiplying by i is the same as rotating by 90).

<span>3. Add those together.</span>

When you add two vectors together, it's the same as putting the tail of one at
the end of the other, and then drawing a vector to the result. If we plot some
examples, we can see the geometry of these transformations[^2]: (it should move if
you mouse over it)

<div style="text-align: center">
	<canvas id="myCanvas" height="300" width="600"></canvas>
</div>

This trick is what
[3blue1brown](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw) uses in
all his videos: create visual / geometric analogues for abstract concepts to
gain an intuitive and deeper understanding that connects with existing
experience. This is just one type of useful analogy, but it's super useful, so I
want to keep practicing it.

Anyway, we're interested in the black transformed vector: $$(a+bi)(c+di)$$. 

What is the angle $$\color{purple}\theta$$ between our original number and the
transformed one? From the geometry, we can see $$\color{purple}\theta$$ is 90
degrees minus the angle formed by the right triangle. Luckily, we know the
length of the sides of that triangle is the same as our original complex number,
scaled by some scalars c and d:

$$\textcolor{purple}{\theta} = 90 - \arctan(\frac{\textcolor{green}{c \|a+bi\|}}{\textcolor{blue}{d \|a+bi\|}}) = 90 - \arctan(\textcolor{green}{c}/\textcolor{blue}{d}) = \arctan(\textcolor{blue}{d} /\textcolor{green}{c})$$

Where $$\color{red}\|a+bi\|$$ just means the length of $$\color{red}(a+bi)$$.
Notice that $$\arctan(\textcolor{blue}{d} /\textcolor{green}{c})$$ is the same
as the angle of our multiplier, $$(c+di)$$. **So multiplying by $$(c+di)$$
effectively rotates a complex number by the angle of $$(c+di)$$!**

If you play with the sketch above, you can see that when $$d=0$$, there's no
rotation, when $$c=0$$, there's a 90 degree rotation, and when $$c=d$$, the
rotation is exactly 45 degrees.

What about the length? Again, we can use the sides of our right triangle: 

$$\|(a+bi)(c+di)\| = \sqrt{\textcolor{green}{(c\|a+bi\|)^2} + \textcolor{blue}{(d\|a+bi\|)^2}} \\
= \sqrt{(c^2+d^2)\|a+bi\|^2} \\
= \sqrt{\|c+di\|^2\|a+bi\|^2} \\
= \|c+di\|\|a+bi\|$$

**So multiplying by $$(c+di)$$ scales a number by the length of $$(c+di)$$.**

Now, we could have always figured this stuff out by applying definitions and
doing a bunch of algebra. But thinking about the geometry just makes it
feel... obvious. Note that we ignored some very important cases (what about
negative numbers?), but we can figure that out later.

What's nice about having the intution is that extensions come just as naturally.
For example: finding the multiplicative inverse of a complex number. In other
words, what number undoes the transformation of multiplying by $$(c+di)$$?
Obviously it would need to rotate by the opposite angle, and then scale by the
inverse scale. More
[here](https://betterexplained.com/articles/intuitive-arithmetic-with-complex-numbers/).

So yeah, complex numbers are cool. Not sure why I never used them before, but it
seems like they would be cool [to use in machine
learning.](https://medium.com/intuitionmachine/should-deep-learning-use-complex-numbers-edbd3aac3fb8)
What's even cooler is that all of this complex business naturally derives from a
simple question: "how can we solve a polynomial with no real solutions?" When
you answer it, you get all this crazy geometry that's closely related to
oscillations and trigonometry. Wild.

\- Mitchell

[^1]: If you're also interested, I highly recommend checking out BetterExplained's [visual intuitive guide to complex numbers](https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/). If you're really interested, check out the whole series! They go over the details of complex arithmetic, as well as euler's formula and the Fourier Transform. Finally, you can check out 3blue1brown's video on [euler's formula with introductory group theory](https://www.youtube.com/watch?v=mvmuCPvRoWQ) and [the Fourier Transform](https://www.youtube.com/watch?v=spUNpyF58BY) for some of that and more (god I love Grant).

[^2]: Multiplication is associative, so the picture we drew could also (c+di) as the original number and (a+bi) as the transformation. That would create a symmetric picture around our black product vector. Neat.
