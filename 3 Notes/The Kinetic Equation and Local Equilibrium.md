---
old: true
Tags:
  - year-2
Index:
Class:
  - Kinetic Theory
Topics:
  - boltzmann equation
  - collision operator
  - local equilibrium
  - conservation laws
---
up: [[Kinetic Theory.base]]

# The Kinetic Equation and Local Equilibrium

## Deriving the Kinetic Equation

Particles travelling freely for a short time $\Delta t$ move from $\vec r-\vec v\Delta t$ to $\vec r$, so absent collisions $F(t+\Delta t,\vec r,\vec v)=F(t,\vec r-\vec v\Delta t,\vec v)$. Adding a small collisional change $\Delta F_c$ and Taylor-expanding in $\Delta t$ gives, in the limit $\Delta t\to0$:
$$\frac{\partial F}{\partial t} + \vec v\cdot\nabla F = C[F]$$
the **Boltzmann equation** (with force terms added on the left if external fields act), where $C[F]=\lim_{\Delta t\to0}\Delta F_c/\Delta t$ is the **collision operator**. The left-hand side is just conservation of particle density in phase space — free streaming; all the physics of molecular collisions is packaged into $C[F]$ on the right.

## The Collision Operator and Krook Model

Physically, $C[F]$ must: drive $F$ towards the local Maxwellian, so $C[F_M]=0$; relax towards it on the collision timescale $\tau_c$; and conserve particle number, momentum, and energy exactly,
$$\int d^3v\,C[F]=0, \quad \int d^3v\,m\vec v\,C[F]=0, \quad \int d^3v\,\tfrac12mv^2\,C[F]=0$$
— these three identities are exactly what make the moment (fluid) equations of [[Kinetic Derivation of Fluid Equations and Transport Coefficients]] independent of the collision operator's detailed form. The simplest model satisfying all three is the **Krook (BGK) operator**, $C[F] = -(F-F_M)/\tau_c \equiv -\delta F/\tau_c$. Solving the kinetic equation perturbatively for $\delta F=F-F_M\ll F_M$, sourced by the gradients $\nabla T$ and $\nabla\vec u$ that push $F$ away from local equilibrium, yields explicit expressions for $\delta F$ — and from these, the [[Kinetic Derivation of Fluid Equations and Transport Coefficients]] (viscosity, thermal conductivity).

## Local Maxwellian Equilibrium

Away from global equilibrium, kinetic theory tracks the phase-space distribution $F(t,\vec r,\vec v)$, defined so $F\,d^3r\,d^3v$ is the mean number of particles in spatial volume $d^3r$ with velocity in $d^3v$. If collisions are frequent enough that each small "fluid element" relaxes internally on a timescale much shorter than the scale over which bulk properties vary, the element behaves as its own homogeneous gas in equilibrium — **local thermodynamic equilibrium**:
$$F_M(t,\vec r,\vec v) = \frac{n(t,\vec r)}{[\sqrt\pi v_\text{th}(t,\vec r)]^3}\exp\left[-\frac{w^2}{v_\text{th}^2(t,\vec r)}\right], \qquad \vec w = \vec v - \vec u(t,\vec r)$$
with $n,\vec u,T$ now slowly-varying fields rather than global constants. This assumption is precisely what lets a kinetic (particle) description reduce to a fluid description.

## Conservation Laws from Moments

Fluid variables are recovered as velocity moments of $F$: the 0th moment gives number density $n=\int d^3v\,F$, the 1st gives momentum density $mn\vec u=\int d^3v\,m\vec v F$, and the 2nd gives energy density $\tfrac{mnu^2}2+\epsilon=\int d^3v\,\tfrac{mv^2}2F$, where $\epsilon=n\langle\tfrac12 mw^2\rangle$ is the internal-energy density. For a closed, isolated system each moment integrates over all space to a globally conserved quantity ($N$, total momentum, $K+U$). Locally, each moment instead obeys its own transport (continuity-type) equation — this hierarchy of moment equations is worked out in full in [[Kinetic Derivation of Fluid Equations and Transport Coefficients]].

# Related
- [[Kinetic Derivation of Fluid Equations and Transport Coefficients]]
- [[Kinetic Derivation of Fluid Equations and Transport Coefficients]]
- [[Collision Cross-Section, Mean Free Path and Effusion]]
- [[Integration Techniques and Series Expansions]]