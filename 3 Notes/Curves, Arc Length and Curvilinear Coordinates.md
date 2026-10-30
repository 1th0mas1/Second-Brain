---
old: true
Tags:
  - year-1
Index:
Class:
  - Vector Calculus
Topics:
  - arc length
  - curvature
  - torsion
  - frenet-serret
  - jacobian
  - polar coordinates
  - cylindrical coordinates
  - spherical coordinates
  - change of variables
---
up: [[Vector Calculus.base]]

# Curves, Arc Length and Curvilinear Coordinates

## Arc Length

A curve is described by a vector function $\vec r(t)=(x(t),y(t),z(t))$. Splitting it into small straight segments and applying Pythagoras, $\Delta s_i^2=\Delta x_i^2+\Delta y_i^2+\Delta z_i^2$, then taking the limit of infinitely many segments gives $(ds)^2=d\vec r\cdot d\vec r=(dx)^2+(dy)^2+(dz)^2$. Dividing through by $dt$:
$$s=\int_a^b|\vec r'(t)|dt = \int_a^b\sqrt{\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2+\left(\frac{dz}{dt}\right)^2}\,dt$$
This works for any parametrisation $t$, converting the geometric length into an ordinary 1D integral.

## Frenet-Serret Frame

Re-parametrising the curve by its own arc length $s$ gives the **unit tangent** $\hat t=\vec r'(s)$ (unit because $ds=|\vec r'(t)|dt$ by construction). Since $|\hat t|$ is constant, $\hat t\cdot d\hat t/ds=0$, so the tangent's rate of change is always perpendicular to itself. Its magnitude defines the **curvature** $\kappa=|d\hat t/ds|$ (zero for a straight line, since the tangent direction never changes), with **radius of curvature** $\rho=1/\kappa$, and its direction defines the unit **normal** $\hat n=\frac{1}{\kappa}\frac{d\hat t}{ds}$. A third vector, the **binormal** $\hat b=\hat t\times\hat n$, completes a right-handed orthonormal triad.

Differentiating $\hat b\cdot\hat t=0$ and $\hat n\cdot\hat n=1$ and using orthogonality pins down how all three vectors evolve along the curve — the **Frenet-Serret relations**:
$$\frac{d\hat t}{ds}=\kappa\hat n,\qquad \frac{d\hat b}{ds}=-\tau\hat n,\qquad\frac{d\hat n}{ds}=-\kappa\hat t+\tau\hat b$$
where $\tau$ is the **torsion**, measuring how much the curve twists out of the plane spanned by $\hat t,\hat n$ (zero for a planar curve). $(\hat t,\hat n,\hat b)$ is an *intrinsic* coordinate system — unlike the fixed Cartesian frame or the position-dependent (but non-rotating-with-motion) spherical polar frame, it actively rotates as you travel along the curve, always tracking the curve's own local geometry.

## The Jacobian

For a change of variables $(x,y)=T(u,v)$, with $x=g(u,v),\,y=h(u,v)$, a small rectangle $du\times dv$ in the new coordinates maps to a small parallelogram in $(x,y)$ spanned by the edge vectors $\vec a=(g_u\,du,\,h_u\,du)$ and $\vec b=(g_v\,dv,\,h_v\,dv)$. Its area is $|\vec a\times\vec b|$, giving the **Jacobian determinant**:
$$dA = |\vec a\times\vec b| = \left|\begin{matrix}g_u\,du & h_u\,du\\ g_v\,dv & h_v\,dv\end{matrix}\right| = |g_uh_v - g_vh_u|\,dudv$$
This is the multivariable analogue of the substitution rule $dx=|dx/du|\,du$ for 1D integrals — it's exactly how much area distorts under the coordinate change, and must be included whenever you rewrite $\iint f\,dxdy$ in terms of $u,v$.

## Standard Curvilinear Systems

Applying the Jacobian to the standard transformations gives the familiar volume/area elements:
- **Plane polar** ($x=r\cos\theta,\ y=r\sin\theta$): $dA = r\,dr\,d\theta$
- **Cylindrical** (adds $z=z$): $dV = r\,dr\,d\phi\,dz$ — same Jacobian as plane polar since $z$ is untouched
- **Spherical polar** ($x=r\sin\theta\cos\phi,\ y=r\sin\theta\sin\phi,\ z=r\cos\theta$): $dV = r^2\sin\theta\,dr\,d\theta\,d\phi$

Each system also comes with its own orthonormal basis vectors, obtained by projecting the fixed Cartesian basis onto the local radial/angular directions — e.g. in plane polar, $\hat r = \hat i\cos\theta+\hat j\sin\theta$ and $\hat\theta=-\hat i\sin\theta+\hat j\cos\theta$. Unlike $\hat i,\hat j,\hat k$, these basis vectors **change direction from point to point**, which is exactly why derivative operators like the gradient pick up extra $1/r$ factors in [[Gradient: Directional Derivatives and Curvilinear Coordinates]].

# Related
- [[Surface and Multiple Integrals]]
- [[Gradient: Directional Derivatives and Curvilinear Coordinates]]
