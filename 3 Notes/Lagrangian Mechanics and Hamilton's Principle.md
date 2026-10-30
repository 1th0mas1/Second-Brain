---
old: true
Tags:
  - year-1
Index:
Class:
  - Mechanics
Topics:
  - generalised coordinates
  - constraints
  - euler-lagrange equation
  - calculus of variations
  - functional
  - hamilton's principle
  - action
---
up: [[Mechanics.base]]

# Lagrangian Mechanics and Hamilton's Principle

## Generalised Coordinates and the Lagrangian

**Generalised coordinates** $q_k(t)$ are any set of independent parameters that fully specify a system's configuration — not necessarily Cartesian (angles, arc lengths, etc. are all fair game, chosen for convenience). The number of independent $q_k$ is the number of **degrees of freedom**. Physical constraints (a bead on a wire, a rigid rod) reduce the degrees of freedom below $3N$ for $N$ particles; **holonomic** constraints (expressible as $f(q_1,\dots,q_n,t)=0$) can be eliminated by choosing coordinates that automatically respect them, or enforced explicitly via Lagrange multipliers — either way, the constraint forces themselves never need to be written down, since they act perpendicular to the allowed motion and do no work.

## The Euler-Lagrange Equation

Defining the Lagrangian $L=T-U$ (kinetic minus potential energy) as a function of $(q_k,\dot q_k,t)$, the equations of motion are the **Euler-Lagrange equations**:
$$\frac{d}{dt}\left(\frac{\partial L}{\partial\dot q_k}\right) = \frac{\partial L}{\partial q_k}$$
one for each degree of freedom. This replaces Newton's vector second-order ODEs (which require identifying and resolving every force, including awkward constraint forces) with a scalar formulation built purely from energies — often dramatically simpler for systems with constraints or non-Cartesian symmetry (central forces, pendulums, coupled oscillators). It is also the master equation of the subject: the same Euler-Lagrange structure, applied to a Lagrangian *density*, underlies classical field theory (electromagnetism, general relativity) and is the classical skeleton that canonical and path-integral quantisation are built on top of.

## Deriving the Euler-Lagrange Equation

A **functional** $I[y]=\int_{x_0}^{x_1} f(y,y')\,dx$ assigns a number to each path $y(x)$ between fixed endpoints $y(x_0)=y_0$, $y(x_1)=y_1$. To find the path that makes $I$ stationary, perturb it slightly, $y\to y+\delta y$ with $\delta y(x_0)=\delta y(x_1)=0$, giving $f\to f+\frac{\partial f}{\partial y}\delta y+\frac{\partial f}{\partial y'}\delta y'$. Integrating the second term by parts,
$$\int_{x_0}^{x_1}\frac{\partial f}{\partial y'}\frac{d}{dx}\delta y\,dx = \left[\frac{\partial f}{\partial y'}\delta y\right]_{x_0}^{x_1} - \int_{x_0}^{x_1}\frac{d}{dx}\left(\frac{\partial f}{\partial y'}\right)\delta y\,dx$$
the boundary term vanishes (fixed endpoints), leaving $\delta I=\int\left[\frac{\partial f}{\partial y}-\frac{d}{dx}\frac{\partial f}{\partial y'}\right]\delta y\,dx$. Since $\delta y$ is arbitrary, $\delta I=0$ for all perturbations exactly when the bracket vanishes everywhere — the **Euler-Lagrange equation**:
$$\frac{\partial f}{\partial y} - \frac{d}{dx}\left(\frac{\partial f}{\partial y'}\right) = 0$$

## Hamilton's Principle

**Hamilton's principle**: a mechanical system evolves between two configurations along the path that makes the **action** $I=\int_{t_0}^{t_1}L\,dt$ (with $L=T-U$) stationary. Applying the same variational argument with $y\to q_k$ and $x\to t$ turns the Euler-Lagrange equation above directly into $\frac{\partial L}{\partial q_k}-\frac{d}{dt}\left(\frac{\partial L}{\partial\dot q_k}\right)=0$ — so Newtonian dynamics is recast as a single stationarity condition on one scalar functional, with none of the vector bookkeeping of forces. This variational formulation is what generalises most cleanly to field theory (the action becomes an integral of a Lagrangian *density* over spacetime) and to the path-integral formulation of quantum mechanics.

# Related
- [[Hamiltonian Mechanics and Conjugate Momenta]]
- [[Noether's Theorem and Angular Momentum]]
