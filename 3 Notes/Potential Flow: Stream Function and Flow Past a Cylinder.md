---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - velocity potential
  - stream function
  - circulation
  - potential flow
  - sources and sinks
  - flow past a cylinder
---
up: [[Fluids.base]]

# Potential Flow: Stream Function and Flow Past a Cylinder

## Velocity Potential and Circulation
**Irrotational** flow ($\nabla\times\vec v=0$) admits a **velocity potential** $\phi$ with $\vec v=\nabla\phi$, since any curl-free field is (locally) a gradient. Combined with incompressibility $\nabla\cdot\vec v=0$, this gives $\nabla^2\phi=0$ — Laplace's equation, so 2D and 3D potential flow reuses the entire electrostatics/Laplace-equation toolkit (superposition, uniqueness theorems, image methods).

**Circulation** around a closed loop, $\Gamma=\oint\vec v\cdot d\vec l$, measures net rotational tendency of the flow along that loop. By Stokes' theorem $\Gamma=\int(\nabla\times\vec v)\cdot d\vec S$ equals the flux of vorticity through any surface bounded by the loop — so $\Gamma=0$ automatically for irrotational flow around any simply-connected loop (one that can be shrunk to a point without leaving the fluid). Crucially, a loop encircling a line vortex is *not* simply-connected in this sense (it can't be shrunk past the vortex core), so $\Gamma\ne0$ is possible even in an otherwise irrotational flow — this is exactly how circulation around an aerofoil coexists with irrotational flow everywhere except at the bound vortex.

## Stream Function
For 2D incompressible flow, define the **stream function** $\psi$ via $v_x=\partial\psi/\partial y$, $v_y=-\partial\psi/\partial x$ — this automatically satisfies continuity ($\partial_xv_x+\partial_yv_y=0$) for *any* $\psi$, exactly analogous to how $\phi$ automatically satisfies irrotationality. Contours of constant $\psi$ are streamlines (since $\vec v\cdot\nabla\psi=0$ along them), and the volume flux between two streamlines equals the difference in $\psi$. If the flow is also irrotational, $\psi$ additionally satisfies Laplace's equation, and $\phi,\psi$ are related by Cauchy-Riemann-like conditions ($\partial_x\phi=\partial_y\psi$, $\partial_y\phi=-\partial_x\psi$) — meaning $w(z)=\phi+i\psi$ is a holomorphic function of $z=x+iy$, the basis of complex-potential methods (conformal mapping, flow past a cylinder/aerofoil).

## Elementary Potential Flows
Since irrotational, incompressible flow satisfies $\nabla^2\phi=0$ (Laplace's equation, linear), elementary solutions can be superposed to build more complex flows: **uniform flow** ($\phi=Uz\cos\theta$-type, constant velocity), **line vortex** ($\phi\propto\theta$, all the circulation $\Gamma$ concentrated at the origin, $v_\theta=\Gamma/2\pi r$), **source/sink** ($\phi\propto\ln r$, representing a net volume flux emerging from/vanishing into a point), and **dipole** (the source+sink limit as their separation $\to0$ with strength fixed, giving a flow with zero net flux but a directional asymmetry).

## Flow Past a Cylinder and the Magnus Force
Superposing a uniform flow with a dipole gives streamlines that divide into an interior and exterior region separated by a circular streamline — interpreting that circle as a rigid boundary gives **flow past a circular cylinder** with no circulation, symmetric fore-aft and top-bottom (so, by the symmetry of the resulting pressure field via Bernoulli, zero net force — d'Alembert's paradox). Adding a line vortex on top breaks the top-bottom symmetry: circulation $\Gamma$ around the cylinder speeds up flow on one side and slows it on the other, so Bernoulli ($p+\tfrac12\rho v^2=\text{const}$) gives lower pressure where the flow is faster. Integrating this pressure asymmetry over the surface produces a net transverse force — the **Magnus force**, $F=\rho U\Gamma$ per unit span — the same mechanism (circulation → asymmetric pressure) that underlies lift on aerofoils, formalised by the Kutta-Joukowski theorem.

# Related
- [[Fluid Kinematics: Material Derivative and Mass Conservation]]
- [[Vorticity: Rate of Strain and the Vorticity Equation]]
- [[Bernoulli's Theorem and the Kutta-Joukowski Theorem]]
