BetterExplained has a great explanation of the basics of complex numbers and intuitive analogies to help understand them geometrically. But, missing a little detail: why does multiplying by a complex number effectively rotate by the angle of that number? [Explain complex number multiplication rotates in complex space 3blue1brown style with Grant's python library.] 

Basically, (a + bi)(c + di) can be broken into distinct transformations:

(a+bi)c + (a+bi)di

In words: scale your number by c. Then make a copy, scale that by d, then rotate by 90 degrees. Add them together. What does the resulting picture look like? (see hand drawn picture in this dir)

Easy to see scaling factor is sqrt(c^2 + d^2). If c is 0, easy to see rotation is 90. If d is 0, easy to see no rotation. And if c = d, easy to see 45degree roation.

Then make it precise:

The rotation is given by 90 - theta = 90 - arctan(c/d) = 90 - (90 - arctan(d/c)) = arctan(d/c) = angle of multiplier.

It's maybe also easy to see what a complex conjugate would be. What complex number, when you multiply by it, undoes the multiplication? Well, it would have to scale by the inverse of sqrt(c^2 + d^2), and also rotate by the negative initial rotation.

Which complex number does that? Just flip your number over the real axis. (Note 180 == -180). Then divide by the magnitude of your original. Also easy to see that every complex number has an inverse.

Final interesting tidbit: multiplication is associative. Therefore, the picture we drew is actually symmetric, and we can write down a connection between the final angle, the angle of x, and the angle of y: final angle = angle of x + angle of y. And the final magnitude = |x||y|.
