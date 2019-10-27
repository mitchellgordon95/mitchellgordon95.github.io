---
layout: post
title:  "The MU Puzzle Solution"
categories: math
---
<!-- Load the Paper.js library -->
<script src="/assets/js/acorn.js"></script>
<script type="text/javascript" src="/assets/js/paper-full.min.js"></script>
<!-- Define inlined PaperScript associate it with myCanvas -->
<script type="text/paperscript" canvas="myCanvas">
var CENTER = view.center;
var SIZE = 20;

function circle(pos) {
    var circle = new Shape.Circle(pos, SIZE)
    circle.fillColor = 'black';
    return circle;
}

function group(pos, n) {
    var rect = new Shape.Rectangle(new Point(pos.x - SIZE * 2, pos.y- SIZE * 4.5), new Size(SIZE * 4, SIZE * 9))
    rect.fillColor = 'red'
    offset = new Point(0, SIZE * 3)
    var circle1 = circle(pos - offset)
    var circle2 = circle(pos)
    var circle3 = circle(pos + offset)
    var text = new PointText(new Point(pos.x + SIZE * 3, pos.y));
    text.justification = 'center';
    text.fillColor = 'black';
    text.content = `x ${n}`;
}

function midline() {
    var offset = new Point(0, SIZE*20)
    var path = new Path(CENTER - offset, CENTER + offset)
    path.strokeColor = 'black'
}


n = 1
left = true
midline()
function step() {
    
    var offset = new Point(SIZE * 4, 0)
    if (left) {
        offset = - offset
        project.clear()
        midline()
    }
    
    var text = new PointText(CENTER + offset * 3);
    text.justification = 'center';
    text.fontSize = 25
    if (left) {
        text.content = `N = ${n}`;
    }
    else {
        text.content = `2N = ${2 * n}`;
    }
    if (n % 3 == 0)
        text.fillColor = 'green';
    else
        text.fillColor = 'black';

    
    var location = CENTER + offset
    location -= new Point(0, SIZE * 4)

    if (n >= 3) {
        group(location, Math.floor(n / 3))
    }
    
    if (n % 3 > 1) {
        if (!left) {
          left_location = location - offset * 2
          var rect = new Shape.Rectangle(left_location + new Point(- SIZE * 2, SIZE * 5), new Size(SIZE * 4, SIZE * 5))
          rect.fillColor = 'red'
          var rect = new Shape.Rectangle(left_location + new Point(- SIZE * 2, SIZE * 5), new Size(SIZE * 12, SIZE * 2.5))
          rect.fillColor = 'red'
          circle(left_location + new Point(0, SIZE * 6))
          circle(left_location + new Point(0, SIZE * 9))
        }
        circle(location + new Point(0, SIZE * 9))
    }
    if (n % 3 > 0) {
        circle(location + new Point(0, SIZE * 6))
    }
    if (left) {
        left = false
    } else {
        left = true
        n += 1
    }
}
setInterval(step, 2000)
</script>

My very first blog post was [about the MU Puzzle]({% post_url
2018-05-01-MU-puzzle %}) from Gödel, Escher, Bach by Douglas Hofstader. I promised
that I would post a follow up with the solution. That was a year and a half ago.

I had decided against writing one, until I got an email from an actual person who
read my blog:

> Hi Mitchel. I saw your blog post about getting mu from mi. This problem has
> been driving me crazy. Everywhere online says that no number not divisible by
> three can be doubled and be divisible by three. Is this even true? What about
> 2^54. I believe is divisible by three. Hope you can help.
> \- Andrew

Well now I have to write a post, don't I? (Also there's two L's in my name but
that's fine. Spelling is [made up]({{"/assets/spelling.png" | realtive_url}}) anyway.)

So, as Andrew's figured out, the key to the puzzle has something to do with
the number of I's in our word. We're trying to get from MI to MU, but somehow we
can't get rid of all those pesky I's! When I started this puzzle, I just wrote
down some attempts:

MI  
MIU (Rule 1)  
MIUIU (Rule 2)  
MIUIUIUIU (Rule 2)  
...  

MI  
MII (Rule 1)  
MIIII (Rule 1)  
MIU (Rule 3)  
(We've seen this before!)  

MI  
MII (Rule 1)  
MIIII (Rule 1)  
MIIIIIIII (Rule 1)  
MIIIIIU (Rule 3)  
MIIUU (Rule 3)  
MII (Rule 4)  
...

And so on. A couple things quickly become apparent. First of all, every word
will always start with an M. That's because we start with MI, and none of our
rules change the first letter. Second, no other letters beside the first one
will ever be an M.

Third, and most importantly, it seems really hard to get rid of all the I's. If
you play around with the rules long enough, you might start to suspect that it's
impossible. And indeed, that is what we'll show.

## The Proof

We want to show that

> No matter how you apply the 4 production rules to MI, the
> result will always have an I in it.

This is the same as saying you can't get from MI to MU, because MU doesn't have
an I in it.

Now, if you look at the examples above you'll notice a pattern emerge. The
number of I's either doubles (Rule 1), or decreases by 3 (Rule 3). Rules 2 and 4
don't affect the number of I's. Since Rule 3 is the only way to get rid of I's,
we'll need to figure out whether it's possible to make the number of I's a
multiple of 3.

I'll claim this isn't possible. Why? Because if you start with one I, then you
can never get a multiple of three by any combination of doubling or
subtracting 3. First, notice that subtracting 3 from a number will not change
whether it is a multiple of 3. Second, notice that doubling a number will not
change whether it is a multiple of 3. This is easier to see pictorally, so I
made a short animation below. (You can refresh to restart.)

<div style="text-align: center">
	<canvas id="myCanvas" height="400" width="600"></canvas>
</div>

There are 3 disjoint cases. Either the number is divisible by 3, in which case
doubling it gives us twice as many groups of 3. If the number is not divisible
by 3, then it has either 1 or 2 left over. If it has 1 left over, then doubling
that 1 gives us 2, which is not divisible by 3. If we have 2 left over, then
doubling those 2 gives us 4, which is also not divisible by 3.

More mathematically, say we have some number $$m$$. Then

If $$m = 3n$$ then $$2m = 2(3n) = 3(2n)$$  
If $$m = 3n + 1$$ then $$2m = 2(3n + 1) = 3(2n) + 2$$  
If $$m = 3n + 2$$ then $$2m = 2(3n + 2) = 3(2n+1) + 1$$

So if a number is divisible by 3, it will still be divisible by 3 after
doubling. If a number is not divisble by 3, it will still not be divisible by 3
after doubling. This means no matter how many times we apply Rule 1, we'll never have
the right number of I's to get rid of all of them with Rule 3.

## 2^54

Andrew, however, seems to have some doubts about this proof. Specifically, what
about 2^54? Sure, the proof seems unassailable. But most proofs do until you
prove them wrong. Can we be sure that it's the same even if we multiply a huge
number of times? You've never seen someone calculate 2^54 have you?

Well, fortunately we have computers to crunch these big calculations for us. In
fact, 2^54 isn't that big; you only need a 54 bit integer to represent it in
binary. Most computers use 64 bits by default, but obviously if you're clever
you can handle much bigger numbers.

Anyway, if we use the proof above, we would predict that 2^54 should have
exactly one remainder when divided by 3. This is because each time you multiply
by two, you flip flop between having one remainder and having two remainders.

And indeed, if you use this [big decimal
calculator](https://keisan.casio.com/calculator) you can see that 2^54 =
(6004799503160661 * 3) + 1. If you don't believe me, feel free to write it out.
