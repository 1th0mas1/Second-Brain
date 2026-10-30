---
old: true
Tags:
  - year-2
Index:
Class:
  - Electromagnetism
Topics:
  - boundary conditions
  - maxwell's equations
  - multipole expansion
  - laplace's equation
  - spherical harmonics
---
up: [[Electromagnetism.base]]

# Boundary Conditions and Multipole Expansion

## The Four Conditions

At an interface between two media, Maxwell's equations force four matching conditions on the fields either side: the perpendicular component of $\vec E$ **jumps** by $\sigma/\varepsilon_0$ (surface charge density $\sigma$); the perpendicular component of $\vec B$ is **continuous**; the parallel (tangential) component of $\vec E$ is **continuous**; the parallel component of $\vec B$ **jumps** according to any surface current present. In free-charge/current-free regions with no surface charge or current, all four components are simply continuous.

## Derivation via Pillboxes and Loops

Each condition follows from applying an integral Maxwell equation to a construction straddling the boundary and shrinking it to zero thickness. For $E^\perp$: apply Gauss's law to a thin pillbox straddling the surface — as the pillbox height $\to0$, only the two flat end-caps contribute flux, giving $E_1^\perp-E_2^\perp=\sigma/\varepsilon_0$. For $B^\parallel$: apply Ampère's law to a thin rectangular loop straddling the surface — as its height $\to0$, only the two sides parallel to the surface contribute circulation, giving the jump set by the enclosed surface current. $B^\perp$ continuity follows the same pillbox argument applied to $\nabla\cdot\vec B=0$ (no magnetic charge, so no jump term); $E^\parallel$ continuity follows the same loop argument applied to Faraday's law (the loop's enclosed area $\to0$ kills the $\partial B/\partial t$ term). In a medium with free charges/currents but no bound ones tracked explicitly, the same four conditions hold with $\vec D,\vec H$ replacing $\vec E,\vec B$ and $\sigma_\text{free}$ replacing $\sigma$.

## Separation of Variables in Spherical Coordinates

Solving Laplace's equation $\nabla^2\phi=0$ by separation of variables in spherical coordinates, $\phi=R(r)\Theta(\theta)\Phi(\varphi)$, splits into three ODEs: the azimuthal equation forces $\Phi\propto e^{im\varphi}$ with integer $m$; the polar equation is Legendre's equation, solved by **Legendre polynomials** $P_l^m(\cos\theta)$ (or, combined with the azimuthal part, **spherical harmonics** $Y_l^m(\theta,\varphi)$); the radial equation gives $R(r)\propto r^l$ or $r^{-(l+1)}$. For a potential that must vanish at infinity (outside a localised charge distribution), only the decaying $r^{-(l+1)}$ solutions survive.

## The Multipole Series

The general exterior solution is therefore a sum
$$\phi(\vec r) = \sum_{l=0}^\infty \frac{A_l}{r^{l+1}}\,P_l(\cos\theta)$$
(axially symmetric case) — the **multipole expansion**, with successive terms falling off faster with distance: monopole ($l=0$, $\propto1/r$, total charge), dipole ($l=1$, $\propto1/r^2$), quadrupole ($l=2$, $\propto1/r^3$), and so on. The coefficients $A_l$ are fixed by matching to the actual charge distribution (equivalently, by expanding $1/|\vec r-\vec r'|$ in Legendre polynomials and integrating against the source). Far from any localised charge distribution ($r\gg$ source size), the lowest-order *non-vanishing* multipole moment dominates the potential — e.g. a neutral distribution with zero net dipole moment (like some symmetric molecules) is dominated by its quadrupole term at long range, falling off as $1/r^3$ rather than $1/r$ or $1/r^2$.

# Related
- [[Coulomb's Law and Gauss's Law]]
- [[Magnetostatics and Electromagnetic Induction]]
- [[Poisson and Laplace Equations and Electric Multipoles]]
- [[Poisson and Laplace Equations and Electric Multipoles]]
- [[Sturm-Liouville Theory and Generalised Fourier Series]]
