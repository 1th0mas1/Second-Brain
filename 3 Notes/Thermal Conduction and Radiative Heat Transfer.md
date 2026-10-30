---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - diffusion equation
  - thermal conduction
  - relaxation time
  - radiative heat transfer
  - kirchhoff's law
  - shape factor
  - grey body
---
up: [[Thermodynamics.base]]

# Thermal Conduction and Radiative Heat Transfer

## The Diffusion Equation

Heat flux is, for modest gradients, proportional to the negative temperature gradient: $\vec J=-\kappa\nabla T$ (Fourier's law, the thermal analogue of Fick's law for particle diffusion). Combined with energy conservation, $\nabla\cdot\vec J=-\partial\rho/\partial t$, and $\delta\rho=c\,\delta T$ ($c$ = heat capacity per unit volume), this gives the **thermal diffusion equation**:
$$\nabla^2T = \frac{c}{\kappa}\frac{\partial T}{\partial t} \equiv \frac1{D_T}\frac{\partial T}{\partial t}$$
In steady state ($\partial_tT=0$) this reduces to Laplace's equation, giving linear 1D temperature profiles; with an internal heat source $H$ it becomes an inhomogeneous, Poisson-type equation instead.

## Relaxation, Skin Depth, and Sound

For time-periodic boundary conditions $T\propto e^{i(kx-\omega t)}$, the diffusion equation gives dispersion relation $k=\pm(1+i)\sqrt{\omega/2D_T}$: perturbations propagate as decaying waves with characteristic decay length (**skin depth**) $\delta=\sqrt{2D_T/\omega}$. More generally, relaxation towards equilibrium after any perturbation of length scale $L$ proceeds on a characteristic **relaxation time** $\tau\sim L^2/D_T$.

The same diffusive/compressive mathematics underlies the **speed of sound**: $v_s=\sqrt{\partial p/\partial\rho}=\sqrt{B/\rho}$ with bulk modulus $B=-V(\partial p/\partial V)$. Since $B_S=\gamma B_T$, adiabatic sound travels faster than isothermal sound by $\sqrt\gamma$; for an ideal gas $v_s=\sqrt{\gamma k_BT/m}$. Whether a sound wave behaves isothermally or adiabatically depends on whether heat can diffuse across a wavelength within one period: short wavelengths ($\lambda\ll\delta$) stay isothermal, long wavelengths are adiabatic.

## Grey Body Exchange Between Plates

A real surface absorbs a fraction $\alpha<1$ of incident radiation and emits at a fraction $\epsilon$ of the black-body rate; **Kirchhoff's law** (from detailed balance at equilibrium) requires $\epsilon=\alpha$ for any surface — a good absorber is equally a good emitter. For two infinite parallel **grey plates** exchanging radiation, accounting for multiple reflections between them (an infinite geometric series in $(1-\alpha_1)(1-\alpha_2)$) sums to a net flux
$$I_+ - I_- = \alpha_{12}\sigma(T_1^4-T_2^4), \qquad \alpha_{12}=\frac{\alpha_1\alpha_2}{\alpha_1+\alpha_2-\alpha_1\alpha_2}$$
Sanity checks: if either plate is a perfect absorber ($\alpha=1$), $\alpha_{12}$ reduces to the other plate's own absorptivity; if both are perfect black bodies ($\alpha_1=\alpha_2=1$), $\alpha_{12}=1$ and the flux is the simple Stefan-Boltzmann difference.

## General Geometry: Shape Factors

For surfaces that aren't simple infinite parallel plates, define the **shape factor** $F_{12}$ = the fraction of radiation leaving surface 1 (in all directions) that happens to strike surface 2 — a purely geometric quantity depending only on shape, size, and relative orientation, not on temperature or material. **Reciprocity**: $A_1F_{12}=A_2F_{21}$, which follows from the symmetry of the underlying view-factor integral and lets you infer one shape factor from the other without recomputing the geometry. For a small body fully enclosed within a cavity, $F_{12}=1$ (everything the small body emits hits the cavity walls) and the net exchanged power is $P_+-P_- = \sigma A_1(T_1^4-T_2^4)\alpha_{12}$.

This two-surface exchange framework — absorptivity/emissivity balance plus geometric view factors — is exactly the building block used to construct radiative transfer through a stack of atmospheric layers, each layer exchanging radiation with its neighbours above and below.

# Related
- [[Adiabatic Processes and Black Body Radiation]]
- [[Adiabatic Processes and Black Body Radiation]]
