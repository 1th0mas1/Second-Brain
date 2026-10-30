---
old: true
Tags:
  - year-1
Index:
Class:
  - Ordinary Differential Equations
Topics:
  - ode classification
  - initial value problem
  - existence and uniqueness
  - separable equations
  - homogeneous equations
  - change of variables
---
up: [[Ordinary Differential Equations.base]]

# ODE Classification and Separable and Homogeneous ODEs

## Classification

An ODE's **order** is the order of its highest derivative; a general $n$th-order ODE can be written $F(x,y,y',\dots,y^{(n)})=0$. It is **linear** if it's a linear combination of $y$ and its derivatives, $a_n(x)y^{(n)}+\dots+a_0(x)y=f(x)$, and within that, **homogeneous** if the forcing term $f(x)=0$, **inhomogeneous** otherwise. A solution can be **explicit** ($y=f(x)$, direct substitution gives an identity) or **implicit** ($g(x,y)=0$); plotting solutions in the $x$–$y$ plane gives the **integral curves**.

## General vs Particular Solutions

An $n$th-order ODE has $n$ independent integration constants, so its **general solution** is an $n$-parameter family of curves. Fixing those constants gives a **particular solution**, and the fixing is done via auxiliary conditions: **initial conditions** specify $y,y',\dots$ all at one point $x_0$ (an **initial value problem**), while **boundary conditions** specify $y$ at several different $x$ values (a **boundary value problem**).

**Existence/uniqueness** for a first-order equation $y'=f(x,y)$ with $y(x_0)=y_0$: a unique solution exists in some rectangle around $(x_0,y_0)$ provided $f(x,y)$ and $\partial f/\partial y$ are both continuous there. This matters practically — without it, integral curves can cross or bifurcate, and numerically-integrated trajectories are only trustworthy where the condition holds.

## Separable and Almost Separable

**Separable**: if $y'=f(x)/g(y)$, the variables split cleanly, $f(x)dx=g(y)dy$, and both sides integrate independently: $\int f(x)dx=\int g(y)dy$ (plus any constant root $y_0$ of $g$, which is also a solution).

**Almost separable** $y'=f(ax+by)$ isn't separable as written, but the substitution $z=ax+by$ gives $z'=a+by'=a+bf(z)$, which *is* separable in $z,x$: $\int \frac{dz}{a+bf(z)}=x+C$. Recover $y=(z-ax)/b$ afterward.

## Homogeneous and Almost Homogeneous

**Homogeneous** $y'=f(y/x)$ (equivalently, a ratio of same-degree polynomials in $x,y$): substitute $z=y/x$, so $y=zx$ and $y'=z+xz'$, giving
$$\frac{dz}{dx}=\frac{f(z)-z}{x}$$
which is separable in $z,x$ (or $z=z_0$ is a solution wherever $f(z_0)=z_0$). Recover $y=zx$.

**Almost homogeneous** $y'=f\left(\frac{a_1x+b_1y+c_1}{a_2x+b_2y+c_2}\right)$ has constants $c_1,c_2$ breaking the homogeneity. Shift the origin, $x=X-u,\,y=Y-v$, choosing $(u,v)$ to cancel them:
$$\begin{pmatrix}a_1&b_1\\a_2&b_2\end{pmatrix}\begin{pmatrix}u\\v\end{pmatrix}=\begin{pmatrix}c_1\\c_2\end{pmatrix}$$
In the new variables the equation reduces to $\frac{dY}{dX}=f\left(\frac{a_1+b_1(Y/X)}{a_2+b_2(Y/X)}\right)$, purely homogeneous, and is solved as above.

# Related
- [[Linear ODEs with Constant Coefficients]]
- [[Linear First-Order ODEs and Integrating Factors]]
