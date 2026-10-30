---
old: true
Tags:
  - year-2
Index:
Class:
  - Kinetic Theory
Topics:
  - continuity equation
  - momentum equation
  - fluid equations from kinetic theory
  - pressure tensor
  - heat flux
  - viscosity
  - thermal conductivity
  - transport coefficients
---
up: [[Kinetic Theory.base]]

# Kinetic Derivation of Fluid Equations and Transport Coefficients

## Method: Velocity Moments

The continuum fluid equations can be *derived*, not just postulated, by taking **velocity moments** of the kinetic equation for the single-particle distribution $f(\vec r,\vec v,t)$ — multiplying by successive powers of $\vec v$ and integrating over all velocities. Because collisions conserve particle number, momentum, and kinetic energy exactly, the collision term drops out of the first three moments entirely, leaving genuine evolution equations for the macroscopic fields $n(\vec r,t)$, $\vec u(\vec r,t)$ (bulk velocity), $T(\vec r,t)$.

**0th moment (continuity)**: integrating the kinetic equation directly gives
$$\frac{\partial n}{\partial t}+\nabla\cdot(n\vec u)=0$$
just mass/particle conservation, with no assumptions about the detailed shape of $f$.

## Momentum and Energy Moments

Splitting the microscopic velocity into bulk plus thermal parts, $\vec v=\vec u+\vec w$ (so $\langle\vec w\rangle=0$ by definition of $\vec u$), the **1st moment** gives
$$mn\left(\frac{\partial \vec u}{\partial t}+(\vec u\cdot\nabla)\vec u\right) = -\nabla P - \nabla\cdot\hat\Pi$$
— exactly the **Navier-Stokes momentum equation**. The isotropic part of the thermal-velocity second moment gives the ordinary scalar pressure $P$; the anisotropic (traceless) part gives the **viscous stress tensor** $\hat\Pi_{ij}=\int m\,w_iw_j\,\delta F\,d^3w$, where $\delta F$ is the deviation of the distribution from local isotropic equilibrium — viscosity is literally the momentum flux carried by the non-equilibrium part of the velocity distribution.

The **2nd moment (energy)** similarly gives the temperature evolution equation
$$\tfrac32 nk_B\left(\frac{\partial T}{\partial t}+\vec u\cdot\nabla T\right) = -P\nabla\cdot\vec u - \Pi_{ij}\partial_iu_j - \nabla\cdot\vec J$$
with heat flux $\vec J=\int \tfrac12 mw^2\vec w\,\delta F\,d^3w$ — again sourced entirely by the non-equilibrium part of $f$. This moment hierarchy is precisely the rigorous bridge from molecular kinetic theory to the continuum fluid equations used throughout ordinary and geophysical fluid dynamics; it also makes clear *why* Navier-Stokes needs a separate constitutive relation for $\hat\Pi$ and $\vec J$ (Fourier's law, Newtonian viscosity) — the moment equations alone don't close, since each moment's equation involves the next moment up.

## Simple Mean-Free-Path Estimate

A quick ("dodgy" but physically transparent) kinetic estimate: imagine a particle carries whatever property it had (momentum, energy) unchanged for roughly one mean free path $\lambda_\text{mfp}$ before colliding and locally equilibrating to the new surroundings. Momentum transport across a velocity gradient then gives viscosity $\eta\sim nm\bar v\lambda_\text{mfp}$, and energy transport across a temperature gradient gives thermal conductivity $\kappa\sim nk_B\bar v\lambda_\text{mfp}$. Both transport coefficients scale identically with $\bar v$ and $\lambda_\text{mfp}$ (since both are "one property carried one mean free path"), so their ratio — encoded in the dimensionless **Prandtl number** $Pr=\eta c_p/\kappa$ — comes out $\sim1$ for a simple gas, matching experiment to within a factor of order unity.

## Rigorous Route: Solving for the Distribution Deviation

The order-of-magnitude estimate hides a real derivation: solve the kinetic equation for the small deviation $\delta F$ of the distribution from the local Maxwellian, sourced by whatever gradient (in $\vec u$ or $T$) is driving the transport. Once $\delta F$ is known, the viscous stress $\hat\Pi$ and heat flux $\vec J$ (see the kinetic derivation of the fluid equations) can be computed directly as velocity-moment integrals of $\delta F$ — these are the proper **kinetic expressions for the fluxes**, and expanding them out reproduces the mean-free-path scaling above but with precise numerical prefactors and the correct temperature/density dependence (e.g. $\eta$ for a hard-sphere gas turns out to depend on $T$ but not on density or pressure, a genuinely non-obvious result that only falls out of the full kinetic treatment).

# Related
- [[The Kinetic Equation and Local Equilibrium]]
- [[The Kinetic Equation and Local Equilibrium]]
