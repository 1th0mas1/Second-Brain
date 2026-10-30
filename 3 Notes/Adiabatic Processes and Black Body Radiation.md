---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - adiabatic expansion
  - lapse rate
  - adiabatic atmosphere
  - black body radiation
  - stefan-boltzmann law
  - planck distribution
  - photon gas
---
up: [[Thermodynamics.base]]

# Adiabatic Processes and Black Body Radiation

## Adiabatic Expansion of an Ideal Gas

For a reversible adiabatic (isentropic) process, $(\partial p/\partial V)_S=\gamma(\partial p/\partial V)_T=-\gamma p/V$. If $\gamma$ is independent of temperature (a good approximation for an ideal gas, especially monatomic gases far from any phase boundary), this integrates directly to
$$pV^\gamma = \text{const}$$
Compared to an isothermal process ($pV=\text{const}$), the adiabat is steeper on a $p$-$V$ diagram: compressing adiabatically raises the temperature (no heat escapes), so pressure rises faster than volume shrinks than in the isothermal case.

## Adiabatic Atmosphere and the Lapse Rate

In a gravitational field, hydrostatic balance gives $dp=-\rho g\,dz$, and with $\rho=mn=mp/(k_BT)$ this becomes $dp/dz = -(mg/k_B)(p/T)$. Modelling a rising air parcel as expanding adiabatically with roughly constant $\gamma$, $pV^\gamma=\text{const}$ combined with the ideal gas law $V=Nk_BT/p$ gives, after eliminating $V$:
$$\frac{dp}{p} = \frac{\gamma}{\gamma-1}\frac{dT}{T}$$
Substituting into hydrostatic balance and writing $dp/dz=(dp/dT)(dT/dz)$ then gives a **linear** temperature decrease with height — the **adiabatic lapse rate**:
$$\frac{dT}{dz} = -\left(\frac{\gamma-1}{\gamma}\right)\frac{mg}{k_B} = -\frac{gM_\text{molar}}{C_p}$$
This is the direct thermodynamic derivation of the dry adiabatic lapse rate central to atmospheric structure and convective stability: air parcels rising faster than this rate cool faster than their surroundings and sink back (stable), while those cooling slower keep rising (unstable, driving convection).

## Photon Gas Basics

Thermal (cavity) radiation is modelled as a **photon gas**: massless and relativistic, with energy-momentum relation $E=\hbar\omega=pc$, and — since photon number isn't conserved, as the cavity walls freely create and absorb photons — zero chemical potential, $\mu=0$. Treating it as a relativistic gas gives radiation pressure $p=u/3$ (compare $p=\tfrac23u$ for a non-relativistic ideal gas; the different equation of state reflects the different energy-momentum relation).

## Planck Distribution and Stefan-Boltzmann Law

Quantising the cavity's electromagnetic modes and applying Bose-Einstein statistics (each mode occupied by an integer number of photons of energy $\hbar\omega$) gives the **Planck distribution** for spectral energy density:
$$\rho_\omega(\omega,T) = \frac{\hbar}{\pi^2c^3}\frac{\omega^3}{e^{\hbar\omega/k_BT}-1}$$
Integrating over all frequencies gives the total energy density $u(T)=\int_0^\infty\rho_\omega\,d\omega=\tfrac4c\sigma T^4$. The power radiated by a perfect absorber/emitter (**black body**) of area $A$ follows from the isotropic energy flux through a small aperture, $P=\tfrac14uc\cdot A$, giving the **Stefan-Boltzmann law**:
$$P=\sigma AT^4, \qquad \sigma = \frac{\pi^2k_B^2}{60\hbar^3c^2}$$
This is the microscopic (quantum-statistical) basis for treating the emission spectrum of the Earth, the Sun, and other astrophysical bodies as black-body spectra, and underlies [[Thermal Conduction and Radiative Heat Transfer]] between surfaces at different temperatures.

# Related
- [[Internal Energy, the First Law and Heat Capacities]]
- [[Thermodynamic Systems and Equations of State]]
- [[Thermal Conduction and Radiative Heat Transfer]]
- [[Maxwell's Equations: Capacitance, Displacement Current and EM Waves]]
