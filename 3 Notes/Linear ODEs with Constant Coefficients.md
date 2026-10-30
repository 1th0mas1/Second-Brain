---
old: true
Tags:
  - year-1
Index:
Class:
  - Ordinary Differential Equations
Topics:
  - wronskian
  - characteristic equation
  - repeated roots
  - undetermined coefficients
  - particular solution
---
up: [[Ordinary Differential Equations.base]]

# Linear ODEs with Constant Coefficients

## Solution Space and the Wronskian

Because the differential operator is linear, any linear combination of solutions to an $n$th-order linear homogeneous ODE is itself a solution — so the solution set forms an $n$-dimensional vector space: $y=C_1y_1+\dots+C_ny_n$. For this to be the *general* solution, the $y_i$ must be linearly independent, meaning $C_1y_1+\dots+C_ny_n=0$ only for $C_1=\dots=C_n=0$. Stacking each $y_i$ and its first $n-1$ derivatives into a vector $\vec y_i$, this condition is equivalent to $(\vec y_1,\dots,\vec y_n)\vec C=\vec 0$ having only the trivial solution, i.e. the **Wronskian** determinant
$$W(x)=\det(\vec y_1,\dots,\vec y_n)\ne0$$
Checking $W\ne0$ at a single point is enough — if the $y_i$ are genuine solutions, $W(x)$ is either identically zero or never zero.

## Characteristic Equation and Root Types

For constant coefficients $a_ny^{(n)}+\dots+a_0y=0$, try $y=e^{\lambda x}$: substituting gives $(a_n\lambda^n+\dots+a_0)e^{\lambda x}=0$, so $\lambda$ must satisfy the **characteristic equation** $a_n\lambda^n+\dots+a_0=0$. By the fundamental theorem of algebra this factorises into $n$ roots (real coefficients force complex roots to appear in conjugate pairs). Distinct roots $\lambda_1,\dots,\lambda_n$ give $y=C_1e^{\lambda_1x}+\dots+C_ne^{\lambda_nx}$. A root of multiplicity $k$ (i.e. $(\lambda-\lambda_r)^k$ divides the polynomial) instead contributes $k$ independent solutions bundled as $(C_1+C_2x+\dots+C_kx^{k-1})e^{\lambda_r x}$ — the extra powers of $x$ are needed because a repeated root alone can't supply $k$ linearly independent functions. A complex conjugate pair $k\pm i\omega$ combines into the real, oscillatory form $e^{kx}[C_1\sin\omega x+C_2\cos\omega x]$, equivalent to $Ce^{kx}\cos(\omega x+\delta)$ — the damped/growing oscillator solution.

## General Solution Structure

For $a_n(x)y^{(n)}+\dots+a_0(x)y=f(x)$, if $y_1,y_2$ are both solutions then $y_1-y_2$ solves the corresponding homogeneous equation ($f=0$) — the inhomogeneous term cancels in the subtraction. So the general solution always splits as
$$y=y_H+y_P$$
where $y_H$ (the **complementary function**) is the full $n$-parameter homogeneous solution and $y_P$ is *any single* particular solution — different particular solutions just differ by a piece already absorbed into $y_H$.

## Two Methods for the Particular Solution

**Variation of constants**: given known homogeneous solutions, promote their constants to functions of $x$ and substitute. For 2nd order, write $y_P=\alpha(x)y_{H1}+\beta(x)y_{H2}$ with the extra constraint $\alpha'y_{H1}+\beta'y_{H2}=0$ (chosen to keep the algebra linear rather than second-order); solving the resulting pair of equations gives $\alpha,\beta$. Equivalently, $y_P=\psi(x)y_H$ for a single known $y_H$, substituting directly and integrating for $\psi$.

**Undetermined coefficients**: guess $y_P$ in the same "family" as the forcing function $f(x)$ — polynomial forcing gets a polynomial guess, $f=be^{\alpha x}$ gets $y_P=ce^{\alpha x}$ (provided $\alpha$ isn't already a root $\lambda_i$ of the characteristic equation). If the natural guess duplicates a term already in $y_H$, multiply it by the minimum power of $x$ needed to restore linear independence — the same fix as for repeated roots. This method is faster than variation of constants when it applies, but only works for a handful of standard forcing functions.

# Related
- [[ODE Classification and Separable and Homogeneous ODEs]]
- [[Systems of Linear and Autonomous ODEs]]
- [[Linear First-Order ODEs and Integrating Factors]]
