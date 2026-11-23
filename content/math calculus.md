there are 3 variables
	time
	velocity (distance over time, at an infinitesimally small point)
	total distance
when we measure these on 2 graphs of
	x axis equals time
	y axis equals velocity (this is the first graph)
	y axis equals distance (this is the second graph)
	you will find that, at the end of the x axis, the
		area (yx) under the velocity graph is the y-value of the distance graph
		slope (y/x) of the distance graph is the y-value of the velocity graph
so, for v(t) and d(t)
	vt=d
	d/t=v
	wow, that sounds obvious as fuck.
to measure something with a velocity increased by a constant at a sudden time
	d(t)=initial_position + old_velocity **times** time
		if time is smaller than the time when velocity increases
	d(t)=initial_position +old_velocity times time + new_velocity **times** (t minus maximum_number_before_velocity_increase)
		if time is larger than or equal to the time when velocity increases
lets say the velocity is a constant times time
	remember, the distance is the area under the curve
	so, that would be input times output divide 2
	in which case, time times velocity divide 2
	so, for v=2t, d=tt
# limits
$\Huge\lim_{x \to c}f(x)$
that is the equation. "as x approaches c, what is y?"
it only exists if one-sided-limits on both sides are the same
	"what?" says the person seeing this
	$\Huge\lim_{x \to c^-}f(x)$ is left sided. as x approaches c as x is a number smaller than c.
	$\Huge\lim_{x \to c^+}f(x)$ is right sided. as x approaches c as x is a number larger than c.
	if x cannot be larger or smaller than c (like from an sqrt), then the main limit is invalid.
it only exists if both sides are equal
if a limit leads to 0 (because of a fraction) or approaches 0, you have to change it through known methods
		multiply both sides by conjugate
	and/or
		divide out common factor
limit as x approaches infinity or negative infinity?
	check the leading degrees of numerator and denominator
	if they are the same, divide their coefficients. that's the answer.
	if they are different
		when numerator has higher degree
			the limit doesn't exist.
			it goes to infinity or negative infinity
			negative or not is determined by if leading coef / leading coef is negative or not
				if x approaches negative infinity, it's determined by that, but flipped if top degree - bottom degree is odd
		when denominator has higher degree, answer is always zero
	all constants have a degree of zero
	all variables have a degree of at least one
	this means that limit of 1/x as x approaches infinity or negative infinity, is zero, because zero divide 1 is zero
	by the way, all this is about horizontal asymptote, which a function can intersect all the time.
	vertical asymptote is the line going up or down forever.
continuity
	it's continuous if
		you can constantly trace pencil over specific interval
		WITHOUT a hole
		WITHOUT an asymptote
	so, the types of discontinuities are
		point discontinuity or removable discontinuity when point not exist (looks like white circle in a line)
		jump discontinuity if both sides are unequal (from one-sided-limits)(looks like teleport on graph)
		infinite discontinuity or essential discontinuity if infinite (asmyptote)(looks like reaching but never touching on graph)
$\Huge\lim_{x \to c}kf(x)=k\lim_{x \to c}f(x)$
if    $\Huge\lim_{x \to c}f(x)=L_1$    and    $\Huge\lim_{x \to c}g(x)=L_2$    then    $\Huge\lim_{x \to c}[f(x)+g(x)]=l_1+l_2$
if    $\Huge\lim_{x \to c}f(x)=L_1$    and    $\Huge\lim_{x \to c}g(x)=L_2$    then    $\Huge\lim_{x \to c}[f(x)\cdot g(x)]=l_1\cdot l_2$
# limits (trig)
what if you want to find the limit of (sinx)<sup>3</sup>/x as x approaches infinity?
	you know that the value of sine goes between -1 and 1 constantly
	so, just replace that. -1/$\infty$ and 1/$\infty$. both of them lead to zero.
	because what the main function is between is the same value, **the main function is that value**
	that is the squeeze theorem.
now, there are common limits of trigfunctions
$\Huge\lim_{x \to 0}\frac{\sin x}{x}=1$ because the value of sinx becomes very similar to x as x approaches zero
$\Huge\lim_{x \to 0}\cos x=1$
$\Huge\lim_{x \to 0}\sin x=0$
$\Huge\lim_{x \to 0}\frac{\sin x}{\cos x}=0$ (that just means tan)
$\Huge\lim_{x \to 0}\frac{\cos x-1}{x}=0$
$\Huge\lim_{x \to 0}\frac{a \sin bx}{c \tan dx}=\frac{ab}{cd}$
# slope of a tangent line
a secant line intersects the curve in 2 points
	lets say it has 2 points : P and Q. In that order, from lower x to higher x, on an increasing curve, so you know where they are.
	P is (x,f(x))
	if Q is H units to the right of P, then
		Q is (x+h,f(x+h))
	when you simplify the slope of this line, you will find that you get
		$\Huge\frac{f(x+h)-f(x)}{h}$
		called the difference quotient
		as h approaches zero, that is the slope of the tangent line at p, also called the derivative
			**(for those asking later, derivative is when the difference quotient has h approaching zero)**
		no shit? that's easy to see on the graph
		yes, but that is a method to calculate the derivative, that doesn't involve super small scales, as you will find as you use it
	the derivative of a function can be expressed as
		$\Huge f'(x)$    $\Huge y'$    $\Huge f^{(n)}(x)$    $\Huge\dot{x}$    $\Huge\frac{dy}{dx}$        $\Huge\lim_{h \to 0}\frac{f(x+h)-f(x)}{h}$
		and $\Huge\frac{dy}{dx}$ is not read as a fraction, by the way. it's read as "d y, d x."
			by the way, you will keep seeing it. what d just means is delta (or difference if you forgot)
	the second derivative of a function can be expressed as
		$\Huge f''(x)$    $\Huge y''$    $\Huge\frac{d^2y}{dx^2}$    $\Huge\frac{ddy}{dxx}$    $\Huge\ddot{x}$
	so, when you get the derivative, that's not enough if they are asking for the tangent line.
		first, you plugin the x value they asked to get the actual slope
		then you have to do this shit
		<span style="font-size: 40px;">y minus y they gave you = (slope)(x minus x they gave you)</span>
		the resulting equation is the tangent line at that point.
<span style="font-size: 40px;">a tangent line is a slope that we know where it is</span>
now that you know how to get it, here are some shortcuts
	the derivative of a constant (y equals number) is always zero
	the derivative of a linear line is the slope of that line i.e. derivative of y=kx is k
	the derivative of y=x<sup>n</sup> is n(x<sup>n-1</sup>)
	to find the derivative of a polynomial (multi-term equation), find the derivative of each term in the polynomial
		remember, the constant in that polynomial becomes zero
	if you see an expression in parentheses, raised to a power, once again, more shit
		the answer to it is derivative (obvious) times derivative of the expression (think about if the power was removed)
		yeah, I have no idea how the fuck that even exists
by the way, "differentiate" means "finding the derivative"
when they ask "find the equation of a function that has this point and this slope", you integrate the slope, not the tangent line
# derivative (trig)
if f(x)=sinx then f(x+h)=sin(x+h)
if f(x)=cosx then f(x+h)=cos(x+h)
this is because you just need to replace x with x+h, no matter the function
	yeah, I am cooked. here are these formulas to memorize instead
	$\Huge \frac{d\sin x}{dx}=\cos x$
	$\Huge \frac{-d\sin x}{dx}=-\cos x$
	$\Huge \frac{d\cos x}{dx}=-\sin x$
	$\Huge \frac{-d\cos x}{dx}=\sin x$
	yeah, the trigfunction was substituted for y, also known as the output
	so, to remember
		$\Huge\lim_{h \to 0}\frac{f(x+h)-f(x)}{h}$
		No, really. Your brain works differently depending on the time.
	so, the way to solve it is to just remember a bunch of stuff and long time.
	specifically
		sinA(symbol)B=sinAcosB(symbol)cosAsinB
		cosA(symbol)B=cosAcosB(opposite symbol)cosAsinB
# integration
antiderivative
	obviously it means opposite
	antiderivative of a(x<sup>n</sup>) is a(x<sup>n+1</sup>)/(n+1) + c
		c is a constant
		yes, this is different from differentiation. one answer vs infinite number of answers because of the constant.
antidifferentiation is also called integration
$\Huge\int$ is the symbol for integration
if $\Huge\frac{dy}{dx}=f(x)$
then $\Huge y=\int f(x)dx=F(x)+C$
where $\Huge F'(x)=f(x)$
when replacing the symbols with words (make sure to read all lines)
	if delta y divide delta x equals function(x)
	then y equals the antidiffferentiation of ( function(x) delta x equals other_function(x) plus constant )
	where the derivative of other_function(x) is equal to function(x)
# area under a curve
if function f is continuous on the closed interval [a,b] and F(x) is an antiderivative of f(x)
	the area under function f is
	$\Huge\int_{a}^{b}f(x)dx=F(b)-F(a)$
	the constants a and b are the limits of integration and are the endpoints of the interval.
	$\Huge\int f(x)dx$ is an indefinite integral because it leads to many functions (because many constants)
	$\Huge\int_{a}^{b}f(x)dx$ is an definite integral since it represents a single number
properties of definite integrals
	$\Huge\int_{a}^{a}f(x)dx=0$
	$\Huge\int_{a}^{b}kdx=k(b-a)$ where k is some nonzero constant
	$\Huge\int_{a}^{b}kf(x)dx=k\int_{a}^{b}f(x)dx$ where k is some nonzero constant
	$\Huge\int_{b}^{a}f(x)dx=-\int_{a}^{b}f(x)dx$
	$\Huge\int_{a}^{b}[f(x)\pm g(x)]dx=\int_{b}^{a}f(x)dx\pm \int_{b}^{a}g(x)dx$
