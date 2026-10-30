---
old: true
Tags:
  - year-3
Index:
Class:
  - Mechanics
Topics:
  - liouville's theorem
  - phase space
  - hamiltonian chaos
  - noether's theorem
  - generators
  - symmetry
---
up: [[Mechanics.base]]

# Liouville's Theorem and Noether's Theorem in Hamiltonian Mechanics

## Phase-Space Flow Is Incompressible

A Hamiltonian system's state traces a trajectory through **phase space** $(\vec q,\vec p)$, with "velocity field" $(\dot{\vec q},\dot{\vec p})$ given by Hamilton's equations. This flow is divergence-free:
$$\sum_i\left(\frac{\partial \dot q_i}{\partial q_i}+\frac{\partial \dot p_i}{\partial p_i}\right) = \sum_i\left(\frac{\partial^2H}{\partial q_i\partial p_i}-\frac{\partial^2H}{\partial p_i\partial q_i}\right) = 0$$
since mixed partial derivatives of $H$ commute — true for *any* Hamiltonian system. Tracking a small rectangular phase-space element $\Delta V=\Delta q_1\cdots\Delta p_n$ as it's carried along by the flow, the rate of change of each side is set by the local velocity gradient there, giving $\frac{d}{dt}\Delta V=\Delta V\sum_i(\partial\dot q_i/\partial q_i+\partial\dot p_i/\partial p_i)=0$. This is **Liouville's theorem**: phase-space volume is conserved along the flow — phase space is "incompressible," exactly analogous to a divergence-free velocity field in fluid dynamics. Consequence: Hamiltonian systems can never have **attractors**, which by definition are zero-volume sets that trajectories converge onto. Contrast a dissipative pendulum, $\dot p_\theta=-mgl\sin\theta-\lambda p_\theta$, where the friction term gives divergence $-\lambda\ne0$ and $\Delta V=\Delta V_0e^{-\lambda t}$ — volume shrinks onto the attractor at rest.

## Uncertainty-Principle Analogy and Hamiltonian Chaos

Liouville's theorem is the closest classical mechanics gets to the quantum uncertainty principle. For a shearing Hamiltonian $H=-\gamma xp$, Hamilton's equations give $\dot x=-\gamma x$, $\dot p=\gamma p$, so a rectangular element $\Delta x_0\times\Delta p_0$ stretches in one direction and compresses in the other, $\Delta x=\Delta x_0e^{-\gamma t}$, $\Delta p=\Delta p_0e^{\gamma t}$, keeping the product — and hence the area — $\Delta x\,\Delta p$ exactly constant, mirroring $\Delta x\Delta p\gtrsim\hbar$. In systems with $\ge3$ phase-space dimensions per degree of freedom, trajectories can fold and tangle arbitrarily without ever violating volume conservation — **Hamiltonian chaos** (e.g. the double pendulum), qualitatively different from dissipative chaos, since there's no strange attractor to fold onto (attractors require volume loss).

## Generators and Symmetries

A phase-space function $G(\vec q,\vec p)$ (taken without explicit time dependence) **generates** an infinitesimal transformation
$$\delta\vec q=\frac{\partial G}{\partial\vec p}\delta\lambda, \qquad \delta\vec p=-\frac{\partial G}{\partial \vec q}\delta\lambda$$
— formally identical to Hamilton's equations with $G$ playing the role of $H$ and $\lambda$ the role of time; viewed this way, the Hamiltonian is just the generator that propagates $\vec q,\vec p$ forward in *actual* time. The induced change in the Hamiltonian under this transformation follows from the chain rule:
$$\delta H = \frac{\partial H}{\partial\vec q}\cdot\delta\vec q + \frac{\partial H}{\partial\vec p}\cdot\delta\vec p = [H,G]\,\delta\lambda$$
If the transformation is a **symmetry** — it leaves the Hamiltonian unaltered, $\delta H=0$ — then $[H,G]=0$, and by antisymmetry $\dot G=[G,H]=0$: $G$ is **conserved**. Because the argument runs both ways, every symmetry gives a conserved quantity *and* every conserved quantity generates a symmetry — Hamiltonian mechanics makes the symmetry↔conservation-law correspondence of Noether's theorem exact and two-directional.

## Worked Examples: Time, Space, and Rotation

Three familiar conservation laws fall out as special cases. **Time translation**: setting $G=H$ gives $\delta\vec r=\dot{\vec r}\,\delta t$, $\delta\vec p=\dot{\vec p}\,\delta t$, and the invariance condition $[H,H]=0$ is trivially satisfied, so $dH/dt=0$ — energy conservation. **Spatial translation**: $G=\vec P\cdot\hat n=(\sum_i\vec p_i)\cdot\hat n$ generates $\delta\vec r_i=\hat n\,\delta x$, $\delta\vec p_i=0$; if $[H,G]=0$ (translational symmetry) then $\frac{d}{dt}(\vec P\cdot\hat n)=0$ — the momentum component along $\hat n$ is conserved. **Rotation**: $G=\vec M\cdot\hat n$ generates $\delta\vec r_i=\hat n\times\vec r_i\,\delta\phi$, $\delta\vec p_i=\hat n\times\vec p_i\,\delta\phi$; rotational symmetry ($[H,G]=0$) gives $\frac{d}{dt}(\vec M\cdot\hat n)=0$. This Poisson-bracket structure is precisely what becomes the commutator structure of generators (momentum, angular momentum, Hamiltonian) in quantum mechanics.

# Related
- [[Canonical Coordinates and Poisson Brackets]]
- [[Commutators, Uncertainty and Symmetry]]
- [[Systems of Linear and Autonomous ODEs]]
- [[Noether's Theorem and Angular Momentum]]
- [[Canonical Coordinates and Poisson Brackets]]
- [[Groups, Symmetry Transformations and Representations]]
