---
old: true
Tags:
  - year-1
Index:
Class:
  - Vector Calculus
Topics:
  - gradient
  - nabla
  - directional derivative
  - contour lines
  - curvilinear coordinates
  - spherical polar
---
up: [[Vector Calculus.base]]

# Gradient: Directional Derivatives and Curvilinear Coordinates

## Gradient

For a function of several variables, the analogue of a single derivative is to take partial derivatives $\partial f/\partial x_i$ in every direction and collect them into a vector, the **gradient**:
$$\text{grad}\,f = \nabla f = \left(\frac{\partial f}{\partial x_1},...,\frac{\partial f}{\partial x_n}\right)$$
using the operator $\nabla=\left(\partial/\partial x_1,...,\partial/\partial x_n\right)$, which in 3D Cartesian coordinates is $\nabla=(\partial_x,\partial_y,\partial_z)$.

## Directional Derivatives and Contours

To find how $f$ varies along an arbitrary direction $\hat v$ (not just the coordinate axes), move along $\vec x(t)=\vec x_0+t\hat v$ and differentiate at $t=0$:
$$\partial_v f(\vec x_0) = \lim_{t\to0}\frac{f(\vec x_0+t\hat v)-f(\vec x_0)}{t} = \nabla f(\vec x_0)\cdot\hat v$$
So the **directional derivative** is just the gradient projected onto $\hat v$ via the dot product — the rate of change is largest when $\hat v$ points along $\nabla f$ itself (by the [[Scalar, Vector and Triple Products|Cauchy-Schwarz]] bound $\nabla f\cdot\hat v\le|\nabla f|$), which is why $\nabla f$ points in the direction of **steepest increase**, with magnitude equal to that steepest rate.

**Contour lines** (or surfaces) are where $f$ doesn't change, i.e. $\partial_v f=0$ for $\hat v$ tangential to the contour — since this forces $\nabla f\cdot\hat v=0$, the gradient is always **perpendicular to contours**. This dual picture (gradient ⟂ level sets, gradient ∥ steepest ascent) is exactly what optimisation algorithms like gradient descent exploit: stepping along $-\nabla f$ moves as directly as possible toward lower function values.

## Transforming the Gradient

In Cartesian coordinates $(\nabla f)_i=\partial f/\partial x_i$ directly. Changing to new coordinates $\vec x\to\vec u$, the chain rule gives
$$\frac{\partial f}{\partial u_i}=\sum_j\frac{\partial f}{\partial x_j}\frac{\partial x_j}{\partial u_i}$$
i.e. $\nabla_u f = \mathbf J\,\nabla_x f$ where $\mathbf J$ is the [[Curves, Arc Length and Curvilinear Coordinates|Jacobian matrix]] $\partial(\vec x)/\partial(\vec u)$. This result is still expressed relative to the **Cartesian basis vectors** — it only tells you how the components transform, not what the gradient looks like written in the new system's own (position-dependent) basis vectors like $\hat r,\hat\theta$.

## Gradient in the Curvilinear Basis

Substituting the curvilinear basis vectors directly (e.g. $\hat r=\hat i\cos\theta+\hat j\sin\theta$ for plane polar) converts $\nabla$ into an operator built from the new coordinates themselves. The extra $1/r$-type factors appear because a unit *angular* step $d\theta$ corresponds to an arc length $r\,d\theta$, not $d\theta$ itself — the operator has to compensate for that stretching to keep units of length consistent:

- Plane polar: $\nabla = \left(\partial_r,\ \tfrac1r\partial_\theta\right)$
- Cylindrical: $\nabla = \left(\partial_r,\ \tfrac1r\partial_\theta,\ \partial_z\right)$ ($z$ unaffected, identical Jacobian to plane polar)
- Spherical polar: $\nabla = \left(\partial_r,\ \tfrac1r\partial_\theta,\ \tfrac{1}{r\sin\theta}\partial_\phi\right)$ (the extra $\sin\theta$ accounts for the shrinking radius $r\sin\theta$ of a circle of constant latitude as $\theta\to0$ or $\pi$)

These forms are essential for solving PDEs (e.g. the Schrödinger or Laplace equation) in problems with spherical or cylindrical symmetry, where working in Cartesian coordinates would obscure the symmetry entirely.

# Related
- [[Conservative Fields and the Dirac Delta Function]]
- [[Curves, Arc Length and Curvilinear Coordinates]]
