---
old: true
Tags:
  - year-1
Index:
Class:
  - Calculus
Topics:
  - limits
  - l'hopital's rule
  - differentiation
  - chain rule
  - leibniz theorem
  - stationary points
---
up: [[Calculus.base]]

# Differentiation, Limits and L'Hopital's Rule

## Finding Limits

A limit exists iff the value approached from above equals the value approached from below. Standard tricks: factor/conjugate manipulation to cancel the singular term, dividing throughout by the highest (or lowest) power of $x$ so dominant terms survive, the heuristic "exponentials beat powers beat logs" for $x\to\infty$, and expanding the function as a Taylor series to expose the leading non-cancelling term directly.

## L'Hôpital's Rule

If $\lim_{x\to a} f(x)/g(x)$ is undefined (the $0/0$ or $\infty/\infty$ indeterminate forms), differentiate top and bottom and try again, repeating until the limit is defined:
$$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f^{(n)}(x)}{g^{(n)}(x)}$$
where $n$ is the smallest order for which the limit is no longer indeterminate. This follows directly from Taylor expanding both functions about $a$: if $f(a)=g(a)=0$,
$$\frac{f(x)}{g(x)}=\frac{f(a)+f'(a)(x-a)+\dots}{g(a)+g'(a)(x-a)+\dots}=\frac{f'(a)(x-a)+\dots}{g'(a)(x-a)+\dots}\ \xrightarrow{x\to a}\ \frac{f'(a)}{g'(a)}$$
i.e. dividing through by the common factor $(x-a)$ is exactly the same operation as differentiating numerator and denominator once. If $f'(a)=g'(a)=0$ too, the leading term is second order and you differentiate again, and so on.

## Definition and Chain Rule

The derivative is the instantaneous rate of change, built from the average gradient between $x$ and $x+h$:
$$\text{Gradient}=\frac{f(x+h)-f(x)}{h}\ \xrightarrow{h\to0}\ \frac{d}{dx}f(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$
As $h\to0$, the secant through $(x,f(x))$ and $(x+h,f(x+h))$ becomes the tangent at $x$. For a composite $y=f(g(x))$, write $y=f(u)$, $u=g(x)$; the **chain rule**
$$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$$
differentiates nested functions without expanding them. Together with the standard derivatives ($x^n\to nx^{n-1}$, $e^{f(x)}\to f'(x)e^{f(x)}$, $\ln f(x)\to f'(x)/f(x)$, plus the trig set) this covers essentially all elementary differentiation.

## Stationary Points and Leibniz's Theorem

The sign of $f'$ shows whether the curve is rising ($f'>0$) or falling ($f'<0$); where $f'=0$ the curve is momentarily flat — a **stationary point**. The second derivative resolves its type: $f''<0$ is a concave maximum, $f''>0$ a convex minimum, and $f''=0$ signals a possible point of inflection (concavity changing sign) rather than a guaranteed extremum.

For repeated differentiation of a product $y=u(x)v(x)$, **Leibniz's theorem** generalises the product rule to arbitrary order:
$$y^{(n)}=\sum_{k=0}^n\binom{n}{k}u^{(k)}v^{(n-k)}$$
with $\binom{n}{k}$ the usual binomial coefficients — the same combinatorics as $(u+v)^n$, since each differentiation "chooses" whether to hit $u$ or $v$.

# Related
- [[Integration Techniques and Series Expansions]]
- [[Partial Derivatives and Stationary Points]]
