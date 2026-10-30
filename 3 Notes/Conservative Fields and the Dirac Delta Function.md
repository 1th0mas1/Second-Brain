---
old: true
Tags:
  - year-1
Index:
Class:
  - Vector Calculus
Topics:
  - conservative field
  - potential function
  - path independence
  - dirac delta
  - distributions
  - discrete to continuous
---
up: [[Vector Calculus.base]]

# Conservative Fields and the Dirac Delta Function

## Definition and Consequence

A field is **conservative** if the [[Line Integrals, Work and Green's Theorem|line integral]] $\int_\gamma \vec A\cdot d\vec r$ depends only on the path's endpoints, not the route taken between them. This holds exactly when $\vec A$ is the gradient of some scalar **potential** $\phi$, $\vec A=\nabla\phi$: substituting in,
$$\int_\gamma\vec A\cdot d\vec r=\int_\gamma\nabla\phi\cdot d\vec r=\int_\gamma\left(\frac{\partial\phi}{\partial x}dx+\frac{\partial\phi}{\partial y}dy+\frac{\partial\phi}{\partial z}dz\right)=\int_\gamma d\phi = \phi(\vec b)-\phi(\vec a)$$
The integral collapses to the boundary values of $\phi$ alone — this is precisely why path-independence holds, and it's the vector-calculus generalisation of the fundamental theorem of calculus. Immediately, any **closed loop** gives zero: $\oint_\gamma\vec A\cdot d\vec r=0$, since start and end point coincide. This requires the region to be **simply connected** (no holes) — otherwise a loop around a hole can pick up a non-zero circulation even for a locally curl-free field.

## Testing for a Potential

Rather than guessing $\phi$, check whether $\vec A$ *could* be a gradient using the mixed-partial-derivative consistency of $\phi$ (since $\partial^2\phi/\partial x\partial y=\partial^2\phi/\partial y\partial x$ for any well-behaved $\phi$):
$$\frac{\partial A_x}{\partial y}=\frac{\partial A_y}{\partial x},\qquad \frac{\partial A_x}{\partial z}=\frac{\partial A_z}{\partial x},\qquad \frac{\partial A_y}{\partial z}=\frac{\partial A_z}{\partial y}$$
These three conditions are exactly the statement that [[Divergence and Curl: The Divergence and Stokes Theorems|$\nabla\times\vec A=\vec 0$]] — a conservative field is precisely an irrotational one (on a simply connected domain), linking path-independence directly to the vanishing of microscopic circulation.

## Definition

The Dirac delta is defined entirely by its action under an integral, not by a value at each point:
$$\int_{-\infty}^{\infty}f(x)\delta(x)dx=f(0)$$
It should **not** be thought of as an ordinary function mapping reals to reals — it's only meaningful when integrated against a "test function" $f(x)$ over a range containing the spike. Setting $f(x)=1$ gives the normalisation $\int_{-\infty}^\infty\delta(x)dx=1$: an infinitely narrow, infinitely tall spike enclosing unit area. Shifting the spike to $x_0$:
$$\int_{-\infty}^{\infty} f(x)\delta(x-x_0)dx=f(x_0)$$
i.e. $\delta(x-x_0)$ "picks out" the value of $f$ at $x_0$ — it acts as a continuous analogue of the Kronecker delta's index-selecting role from [[Special Matrix Types and Index Notation]].

The **derivative** of the delta is also defined via integration by parts: $\int f(x)\delta'(x)dx = [f(x)\delta(x)]-\int f'(x)\delta(x)dx = -f'(0)$, since the boundary term vanishes.

## Bridging Discrete and Continuous

The delta's main practical use is letting a **discrete** random variable be written with a **continuous** PDF. If $X$ takes values $x_1,...,x_n$ with probabilities $p_1,...,p_n$, define
$$f(x)=\sum_{i=1}^n p_i\,\delta(x-x_i)$$
Then the usual continuous-variable machinery still works: $P(a<X\le b)=\int_a^b f(x)dx = \sum_{i\,:\,x_i\in[a,b]} p_i$, recovering exactly the discrete probability sum. This is what allows [[Probability: Distributions, Random Variables and Joint Distributions]] formulas (expectation, variance as integrals) to be applied uniformly to discrete distributions too, without separate discrete/continuous bookkeeping.

# Related
- [[Line Integrals, Work and Green's Theorem]]
- [[Divergence and Curl: The Divergence and Stokes Theorems]]
- [[Probability: Distributions, Random Variables and Joint Distributions]]
