---
old: true
Tags:
  - year-2
Index:
Class:
  - Open Systems Stat Mech
Topics:
  - grand canonical ensemble
  - chemical potential
  - grand potential
  - barometric formula
  - boltzmann distribution
  - chemical potential in a field
---
up: [[Open Systems Stat Mech.base]]

# Grand Canonical Ensemble and Barometric Equilibrium

## Deriving the grand canonical distribution
For a system exchanging both energy and particles with a reservoir, maximise entropy subject to fixed mean energy $U=\sum_\alpha p_\alpha E_\alpha$ *and* fixed mean particle number $\bar N=\sum_\alpha p_\alpha N_\alpha$, using Lagrange multipliers $\beta$ and $\beta\mu$ respectively. The same maximisation procedure as the canonical ensemble, but now with a second constraint, gives
$$p_\alpha = \frac{e^{-\beta(E_\alpha-\mu N_\alpha)}}{\mathcal Z(\beta,\mu)}, \qquad \mathcal Z=\sum_\alpha e^{-\beta(E_\alpha-\mu N_\alpha)}$$
Differentiating $\ln\mathcal Z$ with respect to $\beta$ and $\mu$ recovers $U$ and $\bar N$ directly: $U=-\partial\ln\mathcal Z/\partial\beta+\mu\bar N$ and $\bar N=\tfrac1\beta\partial\ln\mathcal Z/\partial\mu$.

## Thermodynamics and particle equilibrium
The fundamental relation becomes $dU=T\,dS-P\,dV+\mu\,d\bar N$, identifying $\mu=(\partial U/\partial\bar N)|_{S,V}$: a positive $\mu$ means adding a particle costs energy (particles tend to flow away, like diffusion downhill), while negative $\mu$ means adding particles lowers the energy (spontaneous). The **grand potential** $\Phi=-k_BT\ln\mathcal Z=F-\mu\bar N=-PV$ packages the equation of state directly: knowing $\Phi(T,V,\mu)$ hands you $P=-\Phi/V$, $S=-\partial\Phi/\partial T|_{V,\mu}$, and $\bar N=-\partial\Phi/\partial\mu|_{T,V}$ all at once. Applying the same maximum-entropy argument to two systems in thermal *and* particle contact shows equilibrium requires equal $T$ **and** equal $\mu$ simultaneously — particles flow from high to low chemical potential exactly as heat flows from high to low temperature.

## Setting up equilibrium in an external potential
Consider a gas embedded in a position-dependent potential energy $\varphi(\vec r)$, e.g. gravity with $\varphi(z)=mgz$. Thermal and particle equilibrium across the system still demand uniform $T$ and uniform $\mu$ everywhere — if either varied spatially, heat or particles would flow to increase entropy. But equilibrium doesn't require uniform density: the single-particle partition function itself picks up a position-dependent Boltzmann factor from the potential, $Z_1(z) = Z_1(0)\,e^{-\beta mgz}$, since each particle carries the extra energy $mgz$.

## Deriving the density profile
Using the ideal-gas chemical potential $\mu = k_BT\ln(n\lambda_\text{th}^3/Z_1^\text{(internal)})$ evaluated at height $z$, requiring $\mu(z)=\mu(0)$ for all $z$ forces
$$\mu(0) + mgz = k_BT\ln\frac{n(z)\lambda_\text{th}^3}{Z_1^\text{(internal)}} + mgz = \text{const}$$
Solving for $n(z)$ gives the barometric (Boltzmann) density profile:
$$n(z) = n(0)\,e^{-mgz/k_BT}$$
This is the statistical-mechanics derivation of exponential atmospheric density falloff with height, valid for an isothermal atmosphere. It is the direct starting point before adding the more realistic adiabatic temperature structure, where $T$ itself varies with height and the falloff is no longer a pure exponential.

# Related
- [[Canonical Ensemble and Thermal Equilibrium]]
- [[Thermodynamic Potentials and Phase Transitions]]
- [[Adiabatic Processes and Black Body Radiation]]
