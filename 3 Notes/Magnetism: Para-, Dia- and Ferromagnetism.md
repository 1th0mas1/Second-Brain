---
old: true
Tags:
  - year-3
Index:
Class:
  - Condensed Matter Physics
Topics:
  - paramagnetism
  - diamagnetism
  - mean field theory
  - ising model
  - self-consistency
  - curie temperature
  - ferromagnetism
  - domains
  - hysteresis
---
up: [[Condensed Matter Physics.base]]

# Magnetism: Para-, Dia- and Ferromagnetism

Magnetisation $\vec M$ (moment per unit volume) relates linearly to applied field for small fields, $\vec M=\chi\vec H\approx(\chi/\mu_0)\vec B$, defining the dimensionless susceptibility $\chi$. A **paramagnet** has $\chi>0$ (moments align with the field); a **diamagnet** has $\chi<0$ (induced response opposes the field).

## Curie (Free-Spin) Paramagnetism

For a free spin-1/2 with Hamiltonian $\mathcal H=-g\mu_B\vec B\cdot\vec\sigma$, the two eigenstates $\pm\mu_BB$ give partition function $Z=e^{-\beta\mu_BB}+e^{\beta\mu_BB}$, hence a magnetic moment $m=-dF/dB=\mu_B\tanh(\beta\mu_BB)$. Linearising at small field gives susceptibility
$$\chi=\lim_{B\to0}\frac{dM}{dH}=\frac{\rho\mu_0\mu_B^2}{k_BT}$$
with $\rho$ the density of spins — **Curie's law**, $\chi\propto1/T$: thermal agitation increasingly randomises the moments as $T$ rises, so susceptibility grows as $T$ falls. This is the same two-level partition function used for the paramagnetic solid. True free spins require electrons localised on individual sites (e.g. Mott insulators, where strong Coulomb repulsion prevents hopping); in ordinary metals the analogous but temperature-*independent* effect is **Pauli paramagnetism**, $\chi_\text{Pauli}=\mu_0\mu_B^2g(E_F)$, set by the density of states at the Fermi surface rather than by thermal population.

## Larmor Diamagnetism

Diamagnetism is present in *all* materials, including those with no permanent moments, as a Lenz's-law response: an applied field induces circulating currents that oppose it. Starting from $\hat H_\text{DM}=(e^2/2m_e)\vec A^2$ with $\vec A=\tfrac12\vec B\times\vec r$, and averaging over a spherical charge distribution ($\langle x^2+y^2\rangle=\tfrac23\langle r^2\rangle$), gives $\langle\hat H\rangle=(e^2/12m_e)B^2\langle r^2\rangle$, hence moment $m=-(e^2B/6m_e)\langle r^2\rangle$ and susceptibility
$$\chi_\text{DM}=-\frac{\mu_0e^2\rho}{6m_e}\langle r^2\rangle$$
always negative, and essentially $T$-independent (no thermal population factor enters). This Larmor contribution is small ($\chi\sim10^{-6}\text{-}10^{-5}$), comparable to the Landau diamagnetism of conduction electrons, so it's only the dominant effect where no paramagnetic contribution swamps it — e.g. filled-shell atoms with no unpaired spins, or superconductors in the extreme (perfect) diamagnetic limit.

## Setting Up the Effective Field

**Mean field theory** approximates a many-body interacting system in two steps: treat one site exactly, replacing its interaction with neighbours by their *average* effect; then impose **self-consistency** — the average used must equal the average the exact treatment predicts. Applied to the ferromagnetic Ising model $\mathcal H=-\tfrac12\sum_{\langle i,j\rangle}J\sigma_i\sigma_j-g\mu_BB\sum_i\sigma_i$, isolating site $i$ gives a single-site Hamiltonian $\mathcal H_i=-(J\sum_j\sigma_j+g\mu_BB)\sigma_i$, where the sum runs over its $z$ neighbours. Reading the bracket as an effective field, $g\mu_B B_\text{eff,i}=J\sum_j\sigma_j+g\mu_BB$, reduces the problem to the familiar single-spin paramagnet, with partition function $Z_i=e^{-\beta g\mu_B\langle B_\text{eff}\rangle/2}+e^{\beta g\mu_B\langle B_\text{eff}\rangle/2}$ and hence $\langle\sigma_i\rangle=\tfrac12\tanh(\beta g\mu_B\langle B_\text{eff}\rangle/2)$.

## Self-Consistency and the Phase Transition

Imposing that every site looks the same, $\langle\sigma_j\rangle=\langle\sigma\rangle$ for all $z$ neighbours, turns the effective field into $g\mu_B\langle B_\text{eff}\rangle=Jz\langle\sigma\rangle+g\mu_BB$, giving the closed self-consistency equation
$$\langle\sigma\rangle = \frac12\tanh\left(\frac{\beta[Jz\langle\sigma\rangle+g\mu_BB]}{2}\right)$$
At $B=0$ this can be solved graphically by plotting $y=\langle\sigma\rangle$ against $y=\tfrac12\tanh(\beta Jz\langle\sigma\rangle/2)$: at high $T$ the curve's slope at the origin is shallow and $\langle\sigma\rangle=0$ is the only intersection, but below a critical temperature the slope at the origin exceeds 1 and two further, non-zero (spontaneously magnetised) intersections appear. The critical point is set by the curves becoming exactly tangent at the origin, giving $k_BT_c=Jz/4$ — the mean-field prediction of a **ferromagnetic phase transition**. The two non-zero solutions ($\langle\sigma\rangle>0$ and $\langle\sigma\rangle<0$) are degenerate in energy and correspond to spontaneous breaking of the up/down spin symmetry: the system must pick one, but nothing in the Hamiltonian says which.

Mean field / self-consistent-field ideas recur throughout physics and machine learning (e.g. Boltzmann machines, variational inference) as a general strategy for approximating intractable many-body/many-variable problems by an effective single-variable problem plus a consistency condition.

## Exchange Order

Nearest-neighbour spins couple via the Heisenberg exchange Hamiltonian $H=-\tfrac12\sum_{\langle i,j\rangle}J\vec S_i\cdot\vec S_j$. If $J>0$, aligned neighbours are lower energy; the ground state has every spin parallel, developing a macroscopic moment — a **ferromagnet**, spontaneously magnetised below a critical (**Curie**) temperature. If $J<0$, anti-aligned neighbours are favoured, giving an alternating (**Néel**) ground state with zero net moment but genuine magnetic order — an **antiferromagnet**. If the unit cell contains more than one magnetic sublattice with unequal opposing moments, the cancellation is incomplete and a net moment survives — a **ferrimagnet**. None of this fixes *which* direction the moment points (the Heisenberg Hamiltonian is rotationally symmetric); a small anisotropy term (e.g. $-\kappa\sum_i(S_i^z)^2$) breaks this symmetry and, if large enough, reduces the model to the Ising form $\sigma_i=\pm S$.

## Domains and Domain Walls

Exchange favours global alignment, but a uniformly magnetised sample pays a large long-range magnetostatic (dipolar) energy cost — like two north poles facing each other. Splitting the sample into **domains**, regions of uniform magnetisation pointing in different directions, lowers this energy at the price of **domain walls**, where the exchange energy is locally unsatisfied (aligned neighbours cost is paid across the boundary). Balancing the exchange stiffness (favouring wide, gradual walls) against the anisotropy energy $\kappa$ (favouring narrow walls aligned with easy axes) gives a wall thickness $N\sim\sqrt{J/\kappa}$ lattice constants and a minimum wall energy per unit area $\sim S^2\sqrt{J\kappa}$. Real (disordered) crystals further **pin** domain walls at lattice defects, since routing a wall through a missing atom reduces the number of unsatisfied bonds — this pinning is central to the next section.

## Hysteresis and Coercivity

For a single-domain crystallite in field $B\hat z$, the energy per spin $E/N=E_0-g\mu_BSB\cos\theta-\kappa S^2\cos^2\theta$ is non-monotonic in $\theta$ for small $B$: alongside the global minimum aligned with $B$, there remains a local minimum with the moment pointing opposite to it, stable up to a critical field $B_\text{crit}=2\kappa S/(g\mu_B)$. Flipping out of this local minimum requires an activation energy that scales with the number of spins in the crystallite, so it can be enormous — the moment resists reversal. In bulk samples the same resistance comes from domain-wall pinning at disorder: applying a field moves domain walls to grow favourably-aligned domains, but pinning traps them in local energy minima. Together these effects mean magnetisation lags the applied field (**hysteresis**): a sample retains remanent magnetisation at zero field and needs a reverse **coercive field** to demagnetise it — the physical basis of magnetic memory.

# Related
- [[Paramagnetic Solids and Polyatomic Ideal Gases]]
- [[Maximum Entropy and Lagrange Multipliers]]
