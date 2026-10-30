---
old: true
Tags:
  - year-1
Index:
Class:
  - Ordinary Differential Equations
Topics:
  - variation of constants
  - bernoulli equation
  - riccati equation
  - complementary function
  - exact differential
  - integrating factor
---
up: [[Ordinary Differential Equations.base]]

# Linear First-Order ODEs and Integrating Factors

## Homogeneous Solution and Variation of Constants

For $y'+a(x)y=f(x)$, the general solution splits as $y=y_H+y_P$: the **complementary function** $y_H$ solves the homogeneous equation $y_H'+a(x)y_H=0$, a separable equation giving $y_H=Ce^{-\int a\,dx}$; $y_P$ is any one particular solution of the full equation.

Rather than guessing $y_P$, **variation of constants** promotes the constant $C\to\Phi(x)$ in $y_H$ and substitutes $y_P=\Phi(x)e^{-\int a\,dx}$ into the full equation. The $a(x)\Phi$ terms cancel, leaving a direct equation for $\Phi'$:
$$\Phi'=f(x)e^{\int a\,dx}\ \Rightarrow\ \Phi=\int f(x)e^{\int a\,dx}dx$$
so $y_P=e^{-\int a\,dx}\int f(x)e^{\int a\,dx}dx$ — the same result the integrating factor method gives, arrived at differently.

## Bernoulli and Riccati Equations

**Bernoulli** ($y'+a(x)y=b(x)y^n$, $n\ne0,1$): dividing by $y^n$ gives $y'/y^n+a(x)y^{1-n}=b(x)$, and since $\frac{d}{dx}y^{1-n}=(1-n)y^{-n}y'$, the substitution $z=y^{1-n}$ linearises it into $z'+(n-1)a(x)z=(n-1)b(x)$ — solvable by the method above. ($y=0$ is a separate solution lost in the division.)

**Riccati** ($y'=a(x)y^2+b(x)y+c(x)$): has no general closed form, but if one particular solution $y_P$ can be spotted, writing $y=y_P+y_H$ shows $y_H$ satisfies $y_H'-[2a(x)y_P+b(x)]y_H=a(x)y_H^2$ — a Bernoulli equation with $n=2$, hence linearisable.

## Exact Differentials

$P(x,y)dx+Q(x,y)dy=0$ is an **exact differential** if some function $f(x,y)$ has $df=P\,dx+Q\,dy$ identically — then the ODE just says $df=0$, so $f(x,y)=C$ is an implicit general solution. Since mixed partials commute ($f_{xy}=f_{yx}$), exactness requires
$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$
To construct $f$ when this holds: integrate $P$ over $x$ to get $f=\int P\,dx+C(y)$, then differentiate w.r.t. $y$ and match against $Q$ to pin down $C(y)$.

## Integrating Factors

If $\partial P/\partial y\ne\partial Q/\partial x$, the equation isn't exact, but multiplying by a suitable $\Lambda(x,y)$ — an **integrating factor** — can make $\Lambda P\,dx+\Lambda Q\,dy$ exact, i.e. force $\partial_y(\Lambda P)=\partial_x(\Lambda Q)$. There's no general algorithm for finding $\Lambda$; you inspect for single-variable forms $\Lambda(x)$ or $\Lambda(y)$ first.

One important case always works: the linear first-order equation $y'+a(x)y=f(x)$, written as $dy+[a(x)y-f(x)]dx=0$. Demanding $\Lambda=\Lambda(x)$ makes the exactness condition into
$$\frac{d\Lambda}{dx}=\Lambda\,a(x)$$
a separable equation in $\Lambda$ alone, solved by
$$\Lambda(x)=\exp\left(\int a(x)\,dx\right)$$
Multiplying the original equation through by this $\Lambda$ makes the left side collapse to a total derivative, $\frac{d}{dx}(y\Lambda)=\Lambda f(x)$, so both sides integrate directly. This is the fastest route to solving any linear 1st-order ODE.

# Related
- [[Linear ODEs with Constant Coefficients]]
- [[ODE Classification and Separable and Homogeneous ODEs]]
- [[Linear ODEs with Constant Coefficients]]
