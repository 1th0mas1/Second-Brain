---
old: true
Tags:
  - year-1
Index:
Class:
  - Vector Calculus
Topics:
  - gaussian distribution
  - exponential distribution
  - cauchy distribution
  - pareto distribution
  - heavy tails
  - probability density function
  - expectation value
  - variance
  - moments
  - joint distribution
  - marginal distribution
  - conditional distribution
  - independence
---
up: [[Vector Calculus.base]]

# Probability: Distributions, Random Variables and Joint Distributions

## Light-Tailed Distributions

- **Uniform**: $f(x)=\text{const}$ on a finite range — the simplest possible PDF, requiring a bounded domain so it can still normalise to 1. Used for random number generation and Monte Carlo simulation, where every outcome in a range needs equal weight.
- **Exponential**: $f(x)=\lambda e^{-\lambda x}$. Models the waiting time between events in a Poisson process (constant event rate $\lambda$), so it's the natural choice for failure rates/lifetimes in reliability engineering — it has the defining "memoryless" property that the time to the next event doesn't depend on how long you've already waited.
- **Gaussian**: $f(x)=\frac{1}{\sqrt{2\pi}\sigma}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$. The default model for noise and measurement uncertainty, largely because sums of many independent random effects tend toward this shape (central limit theorem) — $\mu$ sets the centre, $\sigma$ the spread.

## Heavy-Tailed Distributions

These decay more slowly than the Gaussian's $e^{-x^2}$, so extreme/outlier values are far more probable than a Gaussian model would predict:
- **Cauchy/Lorentzian**: $f(x)=\frac{1}{\pi b}\left(\frac{(x-a)^2}{b^2}+1\right)^{-1}$. Superficially bell-shaped like a Gaussian but with a power-law ($1/x^2$) tail rather than exponential decay — notoriously, its variance is undefined (the integral diverges). Used for spectral line shapes and in robust statistics, precisely because it doesn't let a handful of outliers dominate a fit as violently as a Gaussian assumption would mishandle them.
- **Pareto**: $f(x)=\alpha k^\alpha/x^{\alpha+1}$ for $x\ge k$. An even heavier power-law tail, popular in social sciences for modelling wealth distribution and city sizes — quantities where a small number of extreme values (billionaires, megacities) dominate the total.

The mean, variance, and other moments of any of these are computed via the standard expectation value machinery, $E[X^k]=\int x^k f(x)\,dx$ — for the heavy-tailed cases, some of these integrals simply don't converge.

## PDF and CDF

The **probability density function** (PDF) $f(x)$ is defined by $P(x<X\le x+dx)=f(x)dx$, so probability over a finite range is
$$P(a<X\le b)=\int_a^b f(x)dx$$
Two conditions make this a valid probability model: normalisation over the whole sample space, $\int_S f(x)dx=1$ (certainty of *some* outcome), and non-negativity $f(x)\ge0$ everywhere (no negative probabilities).

The **cumulative distribution function** (CDF) $F(x)=\int_{-\infty}^x f(u)du$ accumulates probability up to $x$, so range probabilities become a simple difference: $P(a<X\le b)=F(b)-F(a)$.

## Expectation and Moments

The **expectation value** of any function $g(X)$ of the random variable is $E[g(X)]=\int_S g(x)f(x)dx$ — a probability-weighted average. The most useful choices of $g$ are the **$k$-th moments**, $E[X^k]=\int_S x^k f(x)dx$:
- $k=1$ gives the **mean** $\mu=E[X]=\langle x\rangle$, the distribution's centre of mass.
- The **variance** measures spread around that centre, $\sigma^2=E[(X-\mu)^2]$, which expands out to the more practical computational form
$$\sigma^2 = E[X^2]-E[X]^2$$
(same trick as computing moment of inertia about the centroid: subtract off the square of the mean rather than integrating the squared deviation directly). Higher moments capture skew and kurtosis, but mean and variance are what characterise the standard distributions in practice.

## Joint Distributions

For two random variables $X,Y$ described together, the **joint PDF** $f_{XY}(x,y)$ gives probability as $dP(X,Y)=f_{XY}(x,y)\,dxdy$, so the probability of landing in some 2D region $D$ is $P((X,Y)\in D)=\iint_D f_{XY}\,dxdy$. As with the single-variable case it must be normalised over the whole sample space, $\iint_S f_{XY}\,dxdy=1$.

$X$ and $Y$ are **independent** iff the joint density factorises into separate single-variable functions, $f_{XY}(x,y)=g_X(x)h_Y(y)$ — knowing $Y$ then gives no information about $X$'s distribution, since the $x$-dependence and $y$-dependence never interact.

## Marginal and Conditional Distributions

The **marginal** distribution of $X$ describes its probability irrespective of $Y$'s value — obtained by integrating the joint density over all of $Y$ (summing up every possible $y$ the pair could have had):
$$f_X(x)=\int f(x,y)\,dy, \qquad f_Y(y)=\int f(x,y)\,dx$$

The **conditional** distribution asks a different question: given $Y$ is fixed at a specific value $y_0$, what's the distribution of $X$? Take the slice of the joint density at $y_0$ and renormalise it (since $f(x,y_0)$ alone doesn't integrate to 1 over $x$) by dividing by the marginal at that point:
$$C(x) = \frac{f(x,y_0)}{f_Y(y_0)}$$
The marginal value $f_Y(y_0)$ acts purely as a normalisation constant here, restoring $\int C(x)\,dx=1$.

# Related
- [[Conservative Fields and the Dirac Delta Function]]

