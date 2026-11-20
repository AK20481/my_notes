make the smallest value 1 in a triangle equation
split unknown triangle into 2 to calculate
how to do pascal triangle without drawing it out?
	row#/positioninrow(row#-positioninrow)
	To generate any row $n$ from scratch without drawing previous rows, start with $1$, then multiply by $\frac{n - k + 1}{k}$ for each step
	$\text{Term}_k = \text{Term}_{k-1} \times \frac{n - k + 1}{k}$
# shapes
180(sides−2) = total degrees
sometimes, you will see degrees written with minutes; i.e. next to ° there will be number with (shown below for easier seeing)
# `'`
	this is 1 out of 60. so 30 is equal to a decimal of dot 5
why is a circle 2pi radians
	it's literally radius to circumference formula
	no really. you can find radians just from circumference formula
counterclockwise is positive rotation (think opposite of normal clock)
clockwise is negative rotation (think normal clock)
to convert degrees to radians, multiply by pi divide 180
to convert radians to degrees, multiply by 180 divide pi
coterminal angles are add or minus 360
terminal side is an infinite hypotenuse
is it possible to skip sohcahtoa?
	I think it is possible, but I haven’t tested yet
	basically, draw a graph of the triangle yourself.
	then apply your memory to that
	how to position the triangle?
		angle at origin
		line with right angle on x axis (but right angle not at origin)
		so, you get what I mean
	you SHOULD skip sohcahtoa actually. the americans are unique (fucking stupid) in that they decide to not teach you coordinates right after teaching sohcahtoa
	I never memorized the exact for each angle in sohcahtoa (only memorized the abbreviation). but in a single day yesterday (Oct 1, 2026), I memorized that sincostan is y divide r, x divide r, y divide x
	the problem with sohcahtoa is spatial decoding
function<sup>2</sup> angle means function angle times function angle, like a normal number
when converting (any number) times pi/(any number) radians to degrees, just replace pi with 180
sin/cos/tan of an angle equals oh/ah/oa
angle equals negative (correct word is inverse) sin/cos/tan of oh/ah/oa
**do not put in the wrong values for the 2 above.**
	only angles can be put in sincostan(input)
	only sides can be put in inverse sincostan(input)
by the way, you did not know this, but inverse sincostan
	looks like (function)<sup>-1</sup>(x)
	and is called arc(function)
	the input for arcfunction is recommended have denominator converted to 1 for easier understanding
		why?
		well, you had a problem where you didn't understand why we needed the radius for arcfunction
		we need it because the ratio matters at all times.
csc,sec,cot=1/sin,cos,tan
	so, equal to ho/ha/ao
	just like memorize the word "sincostan", memorize the word "cscseccot" (pronounce like "see es see secot")
add up to 90
	cot and tan
	cos and sin
	csc and sec
quick memorization of trig function on graph
	sin angle = y/r
	cos angle = x/r
	tan angle = y/x
	just swap the variables between each other for csc,sec,cot
	(r is radius)
whatever this shit is (trig quadrants)
	sin/csc is positive when y is positive
	cos/sec is positive when x is positive
	tan/cot is positive when x and y are both positive/negative
	and generally, just swap the words with negative when x and/or y are negative
		except for tan, where you instead have to find if the words are different
	by positive/negative, we mean that function(angle) equals positive/negative
	Q1 is +x,+y
	Q2 is -x,+y
	Q3 is -x,-y
	Q4 is +x,-y
	because of that, **finding arcfunction cannot have a result that is outside it's quadrant**.
**and this is also why you need to use the plus sign. because the placement matters.**
remember
	sin is y coordinate
	cos is x coordinate
	tan is y/x
	csc, sec, cot, is 1 divide the 3 above (in that order)
		(yeah, that means cot is x divide y)
		also means that
			tan is sin divide cos
			cot is cos divide sin
	$cos^2(angle) + sin^2(angle) = 1$, just like $x^2 + y^2 = 1$ for the equation of a circle
reference angle
	always between 0 and 90, or 0 and pi/2 radians
	always positive
	always measure in relation to x axis
		but 180 and 90-limit contradiction?
		explained from inference below
	so, you get the point
	Q1, the angle itself is the reference angle
	Q2, 180 (or pi) minus angle
	Q3, angle minus 180 (or pi)
	Q4, 360 (or 2pi) minus angle
negative trig functions?
	this directly relates to the section right above
	when doing conversion of a trig function reference angle
	you check the quadrant the angle is in
	check the trig function of that quadrant ("negative or positive", you are supposed to ask)
	and yeah, that is exactly it. just append the negative sign to the trig function if it's negative, thats all.
that actually relates to result of arctan
	well, not exactly
	time to fuck your brain up
	when outside (output) is negative, flip graph across x axis
	when inside (input) is negative, flip graph across y axis
unit circle
	okay, so
	0,15,30,45 degrees
	the x and y (cos and sin) coordinates are
		1 with 0 for 0
		$\frac{\sqrt{6} + \sqrt{2}}{4}$ with $\frac{\sqrt{6} - \sqrt{2}}{4}$ for 15
		sqrt3/2 with 1/2 for 30
		sqrt2/2 (both) for 45 (half of 90)
	the method to find radians and degrees is already said
		`to convert degrees to radians, multiply by pi divide 180`
		`to convert radians to degrees, multiply by 180 divide pi`
	tan (y/x, which is literally just slope) values
		0 for 0° (0 / 1)
		2 - sqrt3 for 15°
		1 / sqrt3 for 30° (or sqrt3 / 3)
		1 for 45° (anything divided by itself)
		sqrt3 for 60° (just flip 30°)
		2 + sqrt3 for 75° (just flip 15°)
		undefined for 90° (divide by zero)
	and then, just apply all that to the entire graph
		you can just flip some parts. the y value if going down, the x value if going to the left, both if going to both.
		apply them to pairs. 0 and 90, 15 and 75, 30 and 60. just swap the xy, and multipy the radians by (new angle divide old angle)
		check if it's downhill or uphill for slope.
	that is basically all. just 2 more edge cases to say
		$\tan$ and $\sec$ break (divide by zero) at $90^\circ$ and $270^\circ$ ($\pi/2, 3\pi/2$) because $x = 0$. Likewise, $\csc$ and $\cot$ break at $0^\circ$ and $180^\circ$ ($0, \pi$) because $y = 0$.
		Clockwise rotation means negative angles (e.g., $-30^\circ$ lands on $330^\circ$). Angles past $360^\circ$ ($2\pi$) just wrap back around.
quadrantal angles
	they literally lie on the x or y axis. you can't see them unless they are marked.
```
trig function | 0 or 2pi | pi/2  | pi | 3pi/2
--------------+----------+-------+----+------
sin x         | 0        | 1     | 0  | -1
cos x         | 1        | 0     | -1 | 0
tan x         | 0        | undef | 0  | undef
as already said far above, cosine is the x value, sine is the y value. thats also why tan is undefined when cos is zero, because tan is sine divide cosine
```
# trig functions on a graph
ok, so you are wondering, why does a trig function on a graph go up to down to up to down...?
	in a (counterclockwise) circle, the line goes up y, left x, down y, right x.
	but isn't it a circle, not a half circle?
	ok, so basically, the x measures the circumference. the y measures the actual x (if its cos) or y (if its sin) value.
a periodic function repeats over regular intervals
amplitude is half of y-range (I swear, why did they have to call x-range "range". thats so stupid.)
why below?
	cos x starts at 1 and goes down
	sin x starts at 0 and goes up
	answer : in the unit circle, x and y both eventually touch the same numbers in their coordinates. the starting positions are just different.

| Arcfunction        | Notation       | Input                               | Output (Radians)                                          |
| :----------------- | :------------- | :---------------------------------- | :-------------------------------------------------------- |
| $\arcsin(x)$       | $\sin^{-1}(x)$ | $[-1, 1]$                           | $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$              |
| $\arccos(x)$       | $\cos^{-1}(x)$ | $[-1, 1]$                           | $[0, \pi]$                                                |
| $\arctan(x)$       | $\tan^{-1}(x)$ | $(-\infty, \infty)$ or $\mathbb{R}$ | $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$              |
| $\text{arccot}(x)$ | $\cot^{-1}(x)$ | $(-\infty, \infty)$ or $\mathbb{R}$ | $(0, \pi)$                                                |
| $\text{arcsec}(x)$ | $\sec^{-1}(x)$ | $(-\infty, -1] \cup [1, \infty)$    | $[0, \pi], \; y \neq \frac{\pi}{2}$                       |
| $\text{arccsc}(x)$ | $\csc^{-1}(x)$ | $(-\infty, -1] \cup [1, \infty)$    | $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right], \; y \neq 0$ |

# trig identities and equations
sin squared plus cos squared is one
	sec squared minus tan squared is one
	csc squared minus cot squared is one
negative angle formulas
	sin(-A)=-sinA
	cos(-A)=cosA
	tan(-A)=-tanA
sum and difference identitites
	sinA(symbol)B=sinAcosB(symbol)cosAsinB
	cosA(symbol)B=cosAcosB(opposite symbol)cosAsinB
	tanA(symbol)B=(tanA(symbol)tanB) divide 1(oppositesymbol)tanAtanB
	here, A and B are just 2 random angles in the circle
	(yes, the 1 is needed here. you just don't see it because of the way you write it. symbol and opposite symbol are add and subtract symbols)
double angle formulas
	sin2A=2sinAcosA
	tan2A=2tanA/(1-tan<sup>2</sup>A)
$\Huge(cos2A)equals(cos^2A-sin^2A)equals(1-2sin^2A)equals(2cos^2A-1)$
power reducing formulas
	sin<sup>2</sup>A=(1-cos2A)/2
	cos<sup>2</sup>A=(1+cos2A)/2
	tan<sup>2</sup>A=(1-cos2A)/(1+cos2A)
half angle formulas
$\Huge sin\frac{1}{2}x=\pm\sqrt\frac{1-cos(x)}{2}$    $\Huge cos\frac{1}{2}x=\pm\sqrt\frac{1+cos(x)}{2}$    $\Huge tan\frac{1}{2}x=\pm\sqrt\frac{1-cos(x)}{1+cos(x)}$
yeah, I know you want to kill yourself after seeing all this. don't worry, you are not alone.
how the fuck am I supposed to memorize all that?
	for sin squared plus cos squared equals one
		divide all sides of the equation by cos or sin, and you will get the other 2 equations
	for negative angles
		since sin is y, negative angle leads to negative y value
		since cos is x, negative angle doesn't do shit
		this is because negative just flips over x axis
		since tan is y/x, and negative times positive is negative, then tan is negative
do not look at the stuff above for stuff below. The A and B above mean angles in the circle.
# solving triangles
ABC is the points
abc is the sides **opposite of the points**
area of a triangle
	so, the area is either
	bc1/2sinA
	ac1/2sinB
	ab1/2sinC
law of sines
	a/sinA=b/sinB=c/sinC
	this is needed when the following is given
		Angle-Angle-Side
		Side-Side-Angle
		Angle-Side-Angle
law of cosines
	needed when
		Side-Angle-Side
		Side-Side-Side
	I'm just going to simplify
$\Huge aa=bb+cc-bc2cosA$
	those angles can be anything btw. they just need to suit your (forced) need, and thats exactly what I said above.
angle and triangle names
	acute angle is between 0 and 90
	obtuse angle is between 90 and 180
	acute triangle has no sides over 90
	obtuse triangle has one side over 90
lets say they say that an angle is acute while only giving you SSA. four situations are possible.
	a smaller than height : no triangle
	a equal to height : one right triangle
	a larger than or equal to b : one triangle
	a between height and b : 2 triangles
		specifically one triangle will be obtuse and the other acute.
	yes, we are still using the 2 facts at the top of this header
if angle is obtuse while SSA
	a smaller than or equal to b : no triangle
	a larger than b : 1 obtuse triangle
2 forces, angles, resultants (whatever this shit is)
	so, they give a problem that says "find the resultant or magnitude of these 2 forces, considering these 2 forces at this angle"
	so, this angle is actually of a rhombus. you just have to find the diagonal of the rhombus from the angle. the forces are the sides of the rhombus
	resultant is the line itself, magnitude is the measurement of that line.
# parametric
polar coordinates
	measured in $(r, \theta)$ instead of $(x, y)$.
	r is the distance (hypotenuse), theta is the angle
	Polar to $(x, y)$
		$x = r \cos(\theta)$
		$y = r \sin(\theta)$
	$(x, y)$ to Polar
		$r = \sqrt{x^2 + y^2}$
		$\tan(\theta) = y / x$ (adjusting for the correct quadrant)
	if you use those xy coordinates memorized in the unit circle, the polar distance (r) is always 1.
now, r can be negative.
	it shouldn't be, but it sometimes is asked.
	in that case, just find the angle, and graph by flipping it backwards (by how it looks). don't rewrite the angle.
	so, either r negative or theta goes far enough to get to a point
