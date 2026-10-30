---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - sound waves
  - speed of sound
  - surface gravity waves
  - deep water waves
  - capillary waves
  - internal gravity waves
  - buoyancy frequency
  - brunt-vaisala frequency
---
up: [[Fluids.base]]

# Waves in Fluids: Sound, Surface and Internal Gravity Waves

## Derivation and Speed of Sound
Take an inviscid fluid at rest, uniform background $\rho_0,p_0$, and perturb $\rho=\rho_0+\rho_1$, $p=p_0+p_1$, $\vec v=\vec v_1$ (all small). Linearising the compressible Euler equation ($\rho_0\partial\vec v_1/\partial t = -\nabla p_1$) and the continuity equation ($\partial\rho_1/\partial t=-\rho_0\nabla\cdot\vec v_1$), and eliminating $\vec v_1$, gives a wave equation for the pressure (or density) perturbation with speed of sound
$$c^2 = \left(\frac{\partial p}{\partial\rho}\right)_S$$
The derivative is taken at constant entropy (**adiabatic**, not isothermal) because compressions and rarefactions in a sound wave oscillate too fast for heat to diffuse between them — each fluid element's compression is effectively insulated. For an ideal gas this gives $c=\sqrt{\gamma p/\rho}=\sqrt{\gamma R T/M}$: sound speed depends only on temperature (and gas species) for a given gas, not on pressure or density separately. Since $c$ doesn't depend on the amplitude or wavelength of the perturbation, sound waves are **non-dispersive** — all frequencies travel at the same speed, and the wave keeps its shape.

## Energy
Sound waves are **longitudinal** (velocity perturbation parallel to propagation direction, unlike transverse gravity waves). As with waves on a string, the energy in a linear sound wave splits equally between kinetic energy (of the oscillating fluid motion) and potential energy (stored in compression against the restoring pressure) — the same equipartition result that appears throughout linear wave theory. Since sound waves are non-dispersive, this energy is transported at the group velocity, which here simply equals the phase velocity $c$.

## Dispersion Relation
For an inviscid, incompressible fluid of depth $h$ with a free surface, seek an irrotational perturbation: $\phi$ satisfies Laplace's equation with a rigid-bottom condition ($v_z=0$ at $z=-h$) and, at the free surface $z=\eta$, both the kinematic condition ($\partial\eta/\partial t=v_z$, linearised) and the dynamic condition (linearised Bernoulli, pressure = atmospheric at the surface). Seeking $\eta\propto e^{i(kx-\omega t)}$ and matching these conditions gives the dispersion relation for gravity waves:
$$\omega^2 = gk\tanh(kh)$$

## Limiting Regimes
**Deep water** ($kh\gg1$, so $\tanh(kh)\to1$): $\omega^2=gk$ — the wave doesn't "feel" the bottom. This is **dispersive**: phase velocity $c=\omega/k=\sqrt{g/k}\propto\sqrt{\lambda}$ (longer waves travel faster), and the group velocity works out to exactly half the phase velocity — visible as individual wave crests appearing to emerge from the back of a wave packet and vanish at the front. **Shallow water** ($kh\ll1$, so $\tanh(kh)\to kh$): $\omega^2=gk^2h$, i.e. $\omega=k\sqrt{gh}$ — **non-dispersive**, every wavelength travels at the same speed $\sqrt{gh}$, set purely by depth. This shallow-water speed is central to geophysical fluid dynamics and is why tsunamis (wavelength $\gg$ ocean depth) propagate as a single coherent, non-spreading pulse across an entire ocean basin.

Including surface tension modifies the dynamic boundary condition (pressure jump $\propto$ curvature) and gives **gravity-capillary waves**: $\omega^2=gk+\gamma k^3/\rho$ — the extra $\gamma k^3/\rho$ term dominates at short wavelength (large $k$, where curvature is sharp) while gravity dominates at long wavelength, with a minimum phase speed at the crossover (the wavelength below which "ripples" rather than ordinary waves are the relevant description).

## Buoyancy Frequency
In a continuously (stably) stratified fluid with background density $\rho_0(z)$ decreasing with height, displace a parcel vertically by $\delta z$: it finds itself surrounded by fluid of different density and feels a net restoring buoyancy force, giving simple harmonic oscillation at the **buoyancy (Brunt-Väisälä) frequency**:
$$N^2 = -\frac{g}{\rho_0}\frac{d\rho_0}{dz}$$
(derived from Newton's second law on the displaced parcel using the Boussinesq/linearised buoyancy force). $N^2<0$ (density *increasing* with height) means unstable stratification — the "restoring" force instead accelerates the parcel further away, exactly the instability that drives Rayleigh-Bénard-type convection. $N$ is the *maximum* possible oscillation frequency, achieved for purely vertical displacement; any horizontal component of motion reduces the effective restoring force.

## Dispersion Relation and Group Velocity
Linearising the stratified Euler equations about the background state and seeking plane-wave solutions $\propto e^{i(\vec k\cdot\vec r-\omega t)}$ gives the internal-wave dispersion relation
$$\omega = N\sin\theta = \frac{Nk_x}{k}$$
where $\theta$ is the angle of the wavevector $\vec k$ from the vertical (so $k_x=k\sin\theta$ is the horizontal component). Since $|\sin\theta|\le1$, propagation is only possible for $\omega\le N$ — frequencies above the buoyancy frequency simply cannot propagate as internal waves. The striking, non-intuitive feature is that **group velocity is perpendicular to phase velocity**: wave crests (phase fronts) move along $\vec k$, but energy (group velocity, $\nabla_{\vec k}\omega$) propagates at right angles to that — so an internal wave's energy travels along the crests, not with them. This is the essential wave-theory result underlying how internal waves transport momentum and energy vertically in the atmosphere and ocean, often far from where they were generated.

# Related
- [[Wave Equation: d'Alembert's Solution and Separation of Variables]]
- [[Dispersion, Phase and Group Velocity and Impedance]]
- [[Adiabatic Processes and Black Body Radiation]]
- [[Kelvin-Helmholtz Instability and Rayleigh-Benard Convection]]
