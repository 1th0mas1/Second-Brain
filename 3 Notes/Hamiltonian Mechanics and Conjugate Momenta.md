---
old: true
Tags:
  - year-1
Index:
Class:
  - Mechanics
Topics:
  - hamiltonian
  - phase space
  - legendre transform
  - conjugate momentum
  - cyclic coordinate
  - lagrange multipliers
---
up: [[Mechanics.base]]

# Hamiltonian Mechanics and Conjugate Momenta

## From Lagrangian to Hamiltonian

The **Hamiltonian** is defined via a Legendre transform of the Lagrangian,
$$H \equiv \sum_k p_k\dot q_k - L$$
which trades the Lagrangian's configuration-space variables $(q_k,\dot q_k)$ for the **phase-space** variables $(q_k,p_k)$ — position and momentum treated as independent. Since $p_k=\partial L/\partial\dot q_k$ by definition, this is the same manoeuvre as swapping $V\to P=-\partial U/\partial V$ in thermodynamics. Taking the total time derivative and using the Euler-Lagrange equation to simplify gives $\frac{dH}{dt} = -\frac{\partial L}{\partial t}$: if $L$ has no explicit time dependence, $H$ is a conserved quantity — for an unconstrained, non-driven system this conserved $H$ works out to be the total energy $T+U$.

## Hamilton's Equations

Differentiating $H(q_k,p_k,t)$ directly and comparing with the differential obtained from the definition above yields **Hamilton's equations**:
$$\dot q_k = \frac{\partial H}{\partial p_k}, \qquad \dot p_k = -\frac{\partial H}{\partial q_k}$$
For $n$ degrees of freedom this is $2n$ coupled *first-order* ODEs, replacing the $n$ *second-order* Euler-Lagrange equations — the same trade as splitting $m\ddot x=F$ into $\dot x=v$, $m\dot v=F$. Geometrically, a system's state is now a single point flowing through $2n$-dimensional phase space, with $(\dot q_k,\dot p_k)$ playing the role of a velocity field there. This phase-space picture — not the configuration-space Lagrangian one — is what canonical quantisation promotes directly to operators, replacing $(q_k,p_k)$ with $(\hat q_k,\hat p_k)$ satisfying $[\hat q_k,\hat p_k]=i\hbar$.

## Conjugate Momentum and Cyclic Coordinates

The **conjugate (generalised) momentum** to coordinate $q_k$ is defined as $p_k \equiv \partial L/\partial\dot q_k$ — not necessarily linear momentum (e.g. for an angle $q_k=\theta$, $p_k$ comes out as angular momentum). This definition turns the Euler-Lagrange equation into the compact statement $\dot p_k=\partial L/\partial q_k$. Immediately, if $L$ simply doesn't contain $q_k$ at all (only $\dot q_k$ appears) — a **cyclic** (or ignorable) coordinate — then the right-hand side vanishes and $p_k$ is a constant of motion. This is often the fastest route to a conservation law: spotting a coordinate absent from $L$ immediately hands you a conserved quantity without solving any equations of motion.

## Lagrange Multipliers for Constraints

To enforce a holonomic constraint $f(q_1,\dots,q_n)=0$ (e.g. $r-l=0$ for a pendulum of fixed length $l$), form the augmented Lagrangian $L'=L+\lambda f$, treating the multiplier $\lambda$ as an extra generalised coordinate. Since $f=0$ along the true motion, $L'$ and $L$ agree there, so the physics is unchanged — but $\lambda$ is now free to vary, and its own Euler-Lagrange equation reproduces the constraint $f=0$ while the equations for the $q_i$ pick up an extra **constraint force** term $Q_i=\lambda\,\partial f/\partial q_i$. This is the standard way to extract forces of constraint (tension, normal force) that are invisible in the unconstrained Lagrangian, since they do no work and so never appear once a constraint is used to simply eliminate a coordinate.

# Related
- [[Lagrangian Mechanics and Hamilton's Principle]]
- [[Noether's Theorem and Angular Momentum]]
