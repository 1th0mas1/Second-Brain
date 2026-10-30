---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - bernoulli's theorem
  - kutta-joukowski theorem
  - lift
  - conformal mapping
---
up: [[Fluids.base]]

# Bernoulli's Theorem and the Kutta-Joukowski Theorem

## Derivation
Start from the (inviscid) Euler equation for steady flow, $(\vec v\cdot\nabla)\vec v = -\nabla p/\rho - \nabla\chi$ (with $\chi$ the gravitational potential, $\vec g=-\nabla\chi$, and constant $\rho$). Using the vector identity $(\vec v\cdot\nabla)\vec v = \vec\omega\times\vec v + \nabla(\tfrac12v^2)$ (with $\vec\omega=\nabla\times\vec v$ the vorticity) turns the advective term into a gradient plus a term perpendicular to $\vec v$:
$$\nabla\left(\frac12v^2+\frac{p}{\rho}+\chi\right) = \vec v\times\vec\omega$$
The right side is perpendicular to $\vec v$, so taking the dot product with $\vec v$ kills it, showing that $H\equiv\frac12v^2+\frac{p}{\rho}+\chi$ has zero rate of change *along* a streamline (where $d\vec r\parallel\vec v$):
$$H = \frac12 v^2 + \frac{p}{\rho} + \chi = \text{const along a streamline}$$

## Significance and the Irrotational Case
If the flow is additionally irrotational ($\vec\omega=0$ everywhere), the right side $\vec v\times\vec\omega$ vanishes identically, not just along the streamline direction — so $\nabla H=0$ everywhere, meaning $H$ is the *same* constant throughout the entire flow, not just conserved along each individual streamline. This is the workhorse relation for pressure-velocity tradeoffs: it's what converts a velocity increase (through a constriction, over an aerofoil, or around a rotating cylinder) directly into a pressure drop, underlying lift, the Magnus force, Venturi-tube flow meters, and the draining-tank (Torricelli) problem.

## Conformal Mapping and the Kutta Condition
2D potential flow is governed by the holomorphic complex potential $w(z)=\phi+i\psi$ ($z=x+iy$); because holomorphic maps preserve solutions of Laplace's equation, a **conformal map** (e.g. the Joukowski transformation $Z=z+c^2/z$) can carry a known solution — flow past a circular cylinder — into flow past an aerofoil-shaped body in the mapped plane. Ideal potential flow past a cylinder admits circulation $\Gamma$ of *any* value (it only shifts the stagnation points), so on its own the problem is underdetermined. Real aerofoils have a sharp trailing edge, and physically the flow cannot whip around a sharp corner at infinite speed; requiring the flow to leave the trailing edge smoothly — the **Kutta condition** — is the extra physical input that fixes $\Gamma$ to a unique value for a given aerofoil shape and angle of attack.

## The Kutta-Joukowski Theorem
Once $\Gamma$ is fixed, integrating the pressure (from Bernoulli) around the body surface gives a net force purely perpendicular to the oncoming flow $U$:
$$L = \rho U\Gamma$$
the **lift per unit span** — remarkably, lift depends only on the circulation, not on the detailed shape of the body. Physically, the bound circulation $\Gamma$ arises from viscosity: as an aerofoil accelerates from rest, viscous effects near the sharp trailing edge shed a **starting vortex** into the wake; Kelvin's circulation theorem then requires the circulation around a large contour enclosing both the aerofoil and the starting vortex to remain zero (since that contour was never touched by viscosity), forcing an equal and opposite circulation to be bound around the aerofoil itself — so although $\Gamma$'s origin is viscous, once established the resulting flow away from the thin boundary layer is well described by inviscid potential flow with that fixed $\Gamma$.

# Related
- [[Cauchy Momentum Equation and Navier-Stokes]]
- [[Potential Flow: Stream Function and Flow Past a Cylinder]]
