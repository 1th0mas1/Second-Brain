---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - kelvin-helmholtz instability
  - shear instability
  - rayleigh-benard convection
  - boussinesq approximation
---
up: [[Fluids.base]]

# Kelvin-Helmholtz Instability and Rayleigh-Benard Convection

## Setup and Dispersion Relation
Two stacked inviscid, irrotational fluids (density $\rho_1$ below, $\rho_2$ above) each with uniform horizontal velocity, so there's a relative shear $U$ across the interface. Each layer is potential flow (satisfies Laplace's equation for $\phi$); perturb the interface by a small displacement $\propto e^{i(kx-\omega t)}$, apply the kinematic condition (interface moves with each fluid) and the dynamic condition (pressure continuity via Bernoulli, including surface tension) to match the two potential-flow solutions across the interface. This linear system has a solvability condition that fixes $\omega(k)$:
$$(\rho_1+\rho_2)\omega = \rho_2 Uk \pm \left\{(\rho_1+\rho_2)[\gamma k^3+(\rho_1-\rho_2)gk] - \rho_1\rho_2U^2k^2\right\}^{1/2}$$

## Instability Condition
If the term under the square root is negative, $\omega$ acquires a nonzero imaginary part: since the perturbation goes as $e^{-i\omega t}$, this means one root grows exponentially in time — **instability**. The bracket shows the competition directly: $(\rho_1-\rho_2)gk$ and $\gamma k^3$ are stabilising (gravity favours the heavier fluid staying below; surface tension resists interface curvature), while $-\rho_1\rho_2U^2k^2$ is destabilising and grows with the shear. Consequently even a *gravitationally stable* stratification ($\rho_1>\rho_2$) can be destabilised once $U$ is large enough to overcome the restoring terms — pure shear instability. This is the basic mechanism generating billow clouds, wind-driven waves on water, and turbulent mixing at density interfaces throughout the atmosphere and ocean.

## Setup and the Boussinesq Approximation
Fluid heated from below, layer depth $H$, temperature difference $\Delta T$ across it, with a linear equation of state $\rho=\rho_0[1-\alpha(T-T_0)]$ — the paradigm forced-dissipative convection problem. Exchanging two fluid parcels vertically releases potential energy whenever density increases with height ($\partial\rho/\partial z>0$, i.e. hot fluid trapped below cold): the energy source driving spontaneous convective motion, resisted by viscosity and thermal diffusion.

**Boussinesq approximation**: treat density as constant ($\rho_0$) everywhere in the equations — including inertia and heat capacity — *except* in the buoyancy term of the momentum equation, where its temperature dependence is retained. This makes the coupled Navier-Stokes + heat-diffusion system tractable while keeping the one piece of physics (buoyancy) that actually drives the instability.

## Linear Stability and the Rayleigh Number
Linearising about the static conduction state (background $\bar T$ linear in $z$, no flow) and seeking normal-mode perturbations $\propto e^{\sigma t}$ gives a growth rate $\sigma$ satisfying a quadratic whose sign is controlled by the dimensionless **Rayleigh number**
$$\text{Ra} = \frac{g\alpha\Delta T H^3}{\kappa\nu}$$
— the ratio of the destabilising buoyancy driving to the stabilising viscous ($\nu$) and thermal ($\kappa$) dissipation. Instability ($\sigma>0$) requires $\text{Ra}$ to exceed a critical value; minimising over the horizontal wavenumber of the perturbation gives
$$\text{Ra}_c = \frac{27\pi^4}{4}\approx 658$$
Above $\text{Ra}_c$, the conduction state is unstable to a specific band of horizontal wavenumbers, and the flow organises into steady **convection rolls/cells**: hot fluid rises, cold fluid sinks, and the resulting advective heat transport far exceeds pure conduction. This linear-stability-plus-critical-parameter structure (perturb, linearise, find $\text{Ra}_c$) is the template for convective instability arguments throughout atmospheric and oceanic dynamics.

# Related
- [[Waves in Fluids: Sound, Surface and Internal Gravity Waves]]
- [[Reynolds Number and Turbulence]]
- [[Waves in Fluids: Sound, Surface and Internal Gravity Waves]]
- [[Adiabatic Processes and Black Body Radiation]]
- [[Cauchy Momentum Equation and Navier-Stokes]]
