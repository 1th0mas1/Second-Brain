---
old: true
Tags:
  - year-1
Index:
Class:
  - Calculus
Topics:
  - integration
  - fundamental theorem of calculus
  - integration by parts
  - substitution
  - taylor series
  - maclaurin series
  - geometric series
---
up: [[Calculus.base]]

# Integration Techniques and Series Expansions

## Fundamental Theorem of Calculus

Define $I(x)=\int_a^x f(x')\,dx'$, the running area under $f$. Squeezing $I(x)$ between rectangles of height $f(x)$ and $f(a)$ over a small interval, $(x-a)f(x)\le I(x)\le(x-a)f(a)$, and taking $a\to x$ forces both bounds to $f(x)$. Hence
$$\frac{d}{dx}\int_a^x f(x')\,dx' = f(x)$$
— integration and differentiation are inverse operations. Useful corollaries follow from the chain rule on the limits: $\frac{d}{dx}\int_a^{g(x)}f\,dx'=g'(x)f(g(x))$, and $\frac{d}{dx}\int_a^b f\,dx'=0$ since the result doesn't depend on $x$.

## Techniques and Definite Integral Properties

Beyond standard forms (memorised, since integration has no general algorithm like differentiation does) the main techniques are: **inspection** (guess-and-check, e.g. $\int xe^{x^2}dx=\tfrac12 e^{x^2}+C$), **substitution** (change variables to simplify the integrand, e.g. $x=\sin\theta$ turns $\int dx/\sqrt{1-x^2}$ into $\int d\theta=\theta+C=\sin^{-1}x+C$), trig identities ($\cos^2x+\sin^2x=1$, $\sin2x=2\sin x\cos x$, etc.), partial fractions, and **integration by parts**, which reverses the product rule $\frac{d}{dx}(uv)=v\frac{du}{dx}+u\frac{dv}{dx}$:
$$\int u\,\frac{dv}{dx}dx = uv - \int v\,\frac{du}{dx}dx$$

For definite integrals: $\int_a^b f = -\int_b^a f$ (from $\int_a^a f=0$ split at any point $b$); the integral splits additively across sub-intervals, $\int_a^c f=\int_a^b f+\int_b^c f$; and by symmetry an even $f$ on $[-a,a]$ gives $2\int_0^a f$, while an odd $f$ gives exactly $0$.

## Series

A **geometric series** advances by a fixed common ratio: $a+ar+ar^2+\dots+ar^n=\sum_{k=0}^n ar^k$, with partial sum $S=\frac{a(1-r^n)}{1-r}$. As $n\to\infty$, $r^n\to0$ for $|r|<1$ so the series converges to $S_\infty=\frac{a}{1-r}$; for $|r|>1$ it diverges since each term grows in magnitude. An **arithmetic series** instead advances by adding a fixed common difference $d$: $a+(a+d)+\dots+(a+nd)$, with sum $S=\frac n2(2a+(n-1)d)$ — since terms don't shrink, this never converges as $n\to\infty$.

## Taylor Series

A Taylor series approximates $f(x)$ near a chosen point $a$ using its derivatives there:
$$f(x)=\sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!}(x-a)^n = f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\dots$$
Each successive term matches one more derivative of $f$ at $a$, so truncating after $N$ terms gives the best degree-$N$ polynomial approximation locally. The special case $a=0$ is called a **Maclaurin series**. The expansions worth memorising —
$$e^x=1+x+\frac{x^2}{2!}+\dots,\quad \cos x=1-\frac{x^2}{2!}+\dots,\quad \sin x = x-\frac{x^3}{3!}+\dots,\quad \sqrt{1+x}\approx1+\tfrac12x-\tfrac18x^2,\quad \ln(1+x)=x-\tfrac12x^2+\dots$$
— are the standard small-parameter approximations used throughout physics whenever a quantity is "small" (e.g. weak fields, low velocities, small oscillations), and the same quadratic-truncation idea underlies linearising/quadratic-approximating cost functions in optimisation and ML. 

# Related

- [[Differentiation, Limits and L'Hopital's Rule]]
