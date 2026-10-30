---
old: true
Tags:
  - year-1
Index:
Class:
  - Calculus
Topics:
  - partial derivatives
  - total derivative
  - triple product rule
  - stationary points
  - saddle point
  - contour plots
  - hessian
---
up: [[Calculus.base]]

# Partial Derivatives and Stationary Points

## Partial Derivatives

For $z=f(x,y)$, the notation $\left(\frac{\partial f}{\partial x}\right)_y$ means differentiate w.r.t. $x$ while holding $y$ fixed — everything else is treated as a constant. Second partials are written $f_{xx}$, $f_{yy}$, and the mixed partial $f_{xy}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$; for well-behaved functions the order of differentiation doesn't matter, so mixed partials commute: $f_{xy}=f_{yx}$.

## Total Derivative and Identities

Writing the two-variable Taylor expansion of $f$ about a point and keeping only the linear terms in small displacements $\delta x,\delta y$ gives the **total derivative** (the multivariable generalisation of the chain rule):
$$df = \left(\frac{\partial f}{\partial x}\right)_y dx + \left(\frac{\partial f}{\partial y}\right)_x dy$$
This single relation generates a family of useful identities. Writing $dx$ and $dy$ each in terms of $dy,dz$ and $dx,dz$ respectively and substituting one into the other, then holding $z$ constant, gives the **reciprocal relation**:
$$\frac{\partial x}{\partial y}=\left(\frac{\partial y}{\partial x}\right)^{-1}$$
Holding $x$ constant instead and combining with the reciprocal relation gives the **triple product rule**:
$$\frac{\partial y}{\partial z}\cdot\frac{\partial z}{\partial x}\cdot\frac{\partial x}{\partial y}=-1$$
(note the $-1$, not $+1$ — a common slip). These identities are the workhorse of thermodynamics, where many variables are related implicitly through an equation of state and you need to relate partial derivatives that aren't defined independently.

## Contour Sketches

A contour sketch represents $z=f(x,y)$ in two dimensions by drawing curves of constant $z$. Around a maximum or minimum the contours close up into ellipses (or circles), shrinking toward the extremum, with a gradient arrow showing the direction of increase. Around a **saddle point** the contours instead form hyperbolae — the function increases along one direction and decreases along the perpendicular one, so no closed loop encircles the point.

## Classifying Stationary Points

A stationary point requires $f_x=f_y=0$. To classify it, expand $\delta f=f(x,y)-f(a,b)$ as a two-variable Taylor series about the stationary point. Since the linear terms vanish, the leading behaviour is quadratic:
$$\delta f = \tfrac{1}{2}\left[(\delta x)^2 f_{xx} + 2\delta x\delta y\, f_{xy} + (\delta y)^2 f_{yy}\right]=\frac{(\delta x)^2}{2}\left[f_{xx}+2\frac{\delta y}{\delta x}f_{xy}+\left(\frac{\delta y}{\delta x}\right)^2 f_{yy}\right]$$
If $\delta f$ keeps the same sign for every direction $\delta y/\delta x$, the point is a definite extremum: $f_{xx}<0,\,f_{yy}<0$ gives a **maximum**; $f_{xx}>0,\,f_{yy}>0$ gives a **minimum**. If $\delta f$ can be zero along some direction, that direction solves the quadratic
$$\left(\frac{\delta y}{\delta x}\right)^2 f_{yy}+2\frac{\delta y}{\delta x}f_{xy}+f_{xx}=0 \ \Rightarrow\ \frac{\delta y}{\delta x}=\frac{-f_{xy}\pm\sqrt{f_{xy}^2-f_{xx}f_{yy}}}{f_{yy}}$$
which has real roots — i.e. a genuine sign-changing **saddle point** — whenever $f_{xy}^2 \ge f_{xx}f_{yy}$. This is the two-variable Hessian test used generally in optimisation.

# Related
- [[Differentiation, Limits and L'Hopital's Rule]]
- 