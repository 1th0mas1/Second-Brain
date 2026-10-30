---
old: true
Tags:
  - year-1
Index:
Class:
  - Mechanics
Topics:
  - central force
  - effective potential
  - conserved angular momentum
  - kepler's laws
  - orbital eccentricity
  - scattering angle
---
up: [[Mechanics.base]]

# Central Forces and Kepler's Laws

## Central Forces and Conservation of Angular Momentum

A **central force** $\vec F=f(r)\hat r$ acts along the radius vector and depends only on distance $r$ (gravity and the Coulomb force are the standard examples). Since $\vec F\parallel\vec r$, the torque $\vec\tau=\vec r\times\vec F=0$, so angular momentum $\vec J$ is conserved — and because $\vec J=\vec r\times\vec p$ is fixed in direction, the motion is confined to a single plane. Writing the equation of motion in plane polars, the $\hat\theta$-component reads $m(2\dot r\dot\theta+r\ddot\theta)=0$, which is exactly $\frac{d}{dt}(mr^2\dot\theta)=0$ — so $J=mr^2\dot\theta$ is constant, the same conservation law derived directly from the torque argument. Central forces are also always conservative ($\nabla\times\vec F=0$), so total energy $E=T+U(r)$ is separately conserved.

## Effective Potential and Orbit Classification

Using $|\vec v|^2=\dot r^2+r^2\dot\theta^2$ and eliminating $\dot\theta$ via $J=mr^2\dot\theta$, the energy becomes purely a function of $r$ and $\dot r$:
$$E=\tfrac12 m\dot r^2 + \underbrace{\frac{J^2}{2mr^2} + U(r)}_{U_\text{eff}(r)}$$
Bundling the centrifugal term $J^2/2mr^2$ into an **effective potential** turns the 2D orbit problem into an effectively 1D radial one, letting you read off qualitative features without solving for $r(t)$: since $\tfrac12m\dot r^2=E-U_\text{eff}\ge0$, motion is only allowed where $E\ge U_\text{eff}$, and turning points occur exactly where $E=U_\text{eff}$. For the gravitational case $U_\text{eff}=J^2/2mr^2-GmM/r$, this gives three regimes: $E<0$ traps the particle between two turning points — a bound, elliptical orbit; $E\ge0$ allows $r\to\infty$ — an open hyperbolic (or, at $E=0$, parabolic) orbit; and $E=\min(U_\text{eff})$ pins $r$ at a single value — a circular orbit.

## The Orbit Equation and Kepler's Laws

Solving the radial equation of motion for an attractive inverse-square force $f(r)=-\alpha/r^2$ gives the orbit shape directly in terms of angle:
$$r(\theta) = \frac{r_0}{1+e\cos\theta}$$
with eccentricity fixed by energy and angular momentum, $e=\sqrt{1+\frac{2EJ^2}{m\alpha^2}}$. This single formula covers every conic section depending on $e$: circle ($e=0$), ellipse ($0<e<1$), parabola ($e=1$), hyperbola ($e>1$) — matching the $E<0/E=0/E>0$ classification from the effective potential. Comparing to $r_\text{min}=a(1-e)$, $r_\text{max}=a(1+e)$ identifies the semi-major axis $a=-\alpha/2E$, so $E=-\alpha/2a$: the energy alone fixes orbit size.

**Kepler's laws** follow: (I) bound orbits are ellipses with the attracting mass at one focus (the $0<e<1$ case above); (II) equal areas are swept in equal times — a direct restatement of $J=mr^2\dot\theta=\text{constant}$, since the area swept per unit time is $\tfrac12r^2\dot\theta$; (III) $T^2\propto a^3$, obtainable by combining the orbit period with the area-sweep rate.

## Scattering Angle for Open Orbits

For an unbound (hyperbolic) orbit characterised by impact parameter $b$ and incoming speed $v_0$, angular momentum is $J=mv_0b$ and the initial energy is purely kinetic, $E=\tfrac12mv_0^2$. Two routes to the deflection angle $\phi$: geometrically, $r\to\infty$ requires $\cos\theta_\infty=-1/e$ combined with $\phi/2=\theta_\infty-\pi/2$ gives $\sin(\phi/2)=1/e$; equivalently, computing the impulse $\Delta p_x=\int F_x\,dt$ directly (converting $dt\to \frac{mr^2}{J}d\theta$ via angular momentum conservation) and matching it to the momentum triangle $\Delta p_x=-2mv_0\sin(\phi/2)$. Both give the same relation between deflection angle and impact parameter:
$$\cot\frac{\phi}{2} = \frac{mv_0^2b}{\alpha}$$
— the basis of Rutherford-type scattering problems, where a small $\phi$ ⟺ large-$b$, glancing collision and a large $\phi$ ⟺ small-$b$, near head-on collision.

# Related
- [[Noether's Theorem and Angular Momentum]]
