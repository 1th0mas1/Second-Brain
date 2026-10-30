---
old: true
Tags:
  - year-1
Index:
Class:
  - Vector Calculus
Topics:
  - green's theorem
  - line integral
  - work done
---
up: [[Vector Calculus.base]]

# Line Integrals, Work and Green's Theorem

## Statement

$$\oint_\gamma(Pdx+Qdy) = \iint_R\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dxdy$$

Green's theorem relates a closed line integral around a region's boundary $\gamma$ to a double integral over its interior $R$ — a 2D instance of the general pattern "boundary integral = integral of a derivative over the interior" that also underlies the fundamental theorem of calculus, the [[Divergence and Curl: The Divergence and Stokes Theorems|divergence theorem]], and [[Divergence and Curl: The Divergence and Stokes Theorems|Stokes' theorem]].

## Proof Sketch and Significance

The proof handles each term separately by treating $R$ as y-simple, bounded between $y_1(x)$ and $y_2(x)$:
$$\iint_R\frac{\partial P}{\partial y}\,dxdy=\int_a^b dx\int_{y_1(x)}^{y_2(x)}\frac{\partial P}{\partial y}dy=\int_a^b\big[P(x,y_2(x))-P(x,y_1(x))\big]dx=-\oint_\gamma P\,dx$$
(the two boundary values correspond exactly to the top and bottom pieces of the closed loop, with signs matching the loop's orientation). The analogous calculation for $Q$ over an x-simple decomposition gives $+\oint_\gamma Q\,dy$, and adding the two results yields the theorem.

Setting $P=-F_y,\ Q=F_x$ turns Green's theorem into the 2D [[Divergence and Curl: The Divergence and Stokes Theorems|divergence theorem]]; keeping $P,Q$ as general components of a planar field instead reproduces the 2D case of [[Divergence and Curl: The Divergence and Stokes Theorems|Stokes' theorem]] with $(\nabla\times\vec F)\cdot\hat k = \partial_xF_y-\partial_yF_x$. Green's theorem is therefore the common ancestor both 3D theorems reduce to when one dimension is dropped.

## Setup

A **line integral** integrates a scalar or vector function along a path rather than over an interval. Motivating example: the mass of a non-uniform string of length $L$ with line density $\rho(s)$ is $m=\int_0^L\rho(s)\,ds$ — but parametrising a curve directly by arc length $s$ is often awkward, so instead substitute a generic parameter $t$ using $ds=|\vec r'(t)|dt$ (from [[Curves, Arc Length and Curvilinear Coordinates]]):
$$m=\int_a^b \rho(s(t))\,|\vec r'(t)|\,dt$$

## Two Types of Line Integral

There are two genuinely different line integrals, distinguished by what goes in and what comes out:

**Scalar field along a path** (input scalar function, output *vector*): integrating with respect to the displacement vector itself,
$$\int f(\vec r)\,d\vec r = \int f(x,y,z)\left(\hat i\,dx+\hat j\,dy+\hat k\,dz\right)$$

**Vector field along a path** (input vector function, output *scalar*): the dot product with displacement,
$$\int \vec A\cdot d\vec r = \int A_x\,dx + A_y\,dy + A_z\,dz$$

**Work done** by a force is the physical example of the second type: $W = \int \vec F\cdot d\vec r$ — summing the component of force along the direction of motion over the whole path. Whether this integral depends on the path taken, or only on the endpoints, is exactly the question [[Conservative Fields and the Dirac Delta Function]] answers.

# Related
- [[Conservative Fields and the Dirac Delta Function]]
- [[Divergence and Curl: The Divergence and Stokes Theorems]]
- [[Divergence and Curl: The Divergence and Stokes Theorems]]
- [[Curves, Arc Length and Curvilinear Coordinates]]
