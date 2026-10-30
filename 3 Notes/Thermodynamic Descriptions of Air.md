---
old: false
Tags:
  - w-ing
Index: 2.1
Class:
  - Atmospheres and Oceans
Topics:
  - Dry thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Thermodynamic Descriptions of Air

## Knudsen number

- focused on scenarios with length scales much larger than mfp of atmospheric species
	- quantify this with the Knudsen number
$$
\text{Kn} = \frac{\lambda{}}{\mathcal{L}}
$$
- $\lambda{}{}=1/ (n\sigma{})$ is mean free path and $\mathcal{L}{}$ is typical length scale of interest
- we note for most atmospheric processes $\text{Kn}\ll1{}$
	- able to describe atmosphere with continuum equations of mechanics and thermodynamics

## Equation of state

- EoS is relationship between thermodynamic variables
	- typically this includes pressure, temperature and density
- *ideal gas law* generally suffices as EoS for atmospheres
	- ocean uses a different EoS
	- breaks down deep in gas giants
$$
p = nR_{u}T
$$
- where $R_{u}{}$ is universal gas constant
	- atmospheric scientists will define *specific gas constant* $R=\frac{R_{u}}{\mu{}}{}$ where $\mu{}{}$ is mean molecular weight (mass per mole)
	- we can thus write ideal gas law using $\rho{}{}$ the mass density (mass per volume)
$$
p = \rho{}RT
$$
- $R$ is mass weighted so changes with composition
	- eg varies with water vapour content - not just a constant of proportionality

| **Atmosphere**    | ** $\mu{}$ ** ($\text{kg}/\text{mole}$) | **R** ($J/\text{kg K}{}$) |
| ----------------- | --------------------------------------- | ------------------------- |
| Earth             | 0.029                                   | 287                       |
| Jupiter           | 0.0023                                  | 3600                      |
| $\text{CO}_{2}{}$ | 0.044                                   | 189                       |

- we can also use **specific volume** $v = 1/\rho{}{}$
$$
pv = RT
$$
- each individual component of air obey their own ideal-gas type relationship
$$
p_{i} = \rho{}_{i} R_{i} T_{i}
$$
- here $p_{i}{}$ is the partial pressure ie *pressure a component would have in isolation with same density and temperature as mixture*
- total pressure is thus
$$
p = \sum_{i} p_{i}
$$

## Expressing concentrations

- air is compressible such that absolute concentrations (densities) can change even if number of moles is fixed
	- typically express concentrations of species $i{}$ relative to total concentration
	- simplest way to express relative concentration is the **mole fraction**
$$
f_{i} \equiv \frac{n_{i}}{n}
$$
- not useful when we take into account processes that change relative abundance such as condensation
- use dry air as a reference point rather than to entire mixture
$$
q_{i} = \frac{\rho{}_{i}}{\rho{}_{d}} = \frac{\mu{}_{i}}{\mu{}_{d}}\frac{n_{i}}{n_{d}} = \frac{\mu{}_{i}}{\mu{}_{d}}\frac{p_{i}}{p_{d}};\quad{}\text{mass mixing ratio}
$$
- we can do with volume equivalently
$$
\xi{}_{i} = \frac{n_{i}}{n_{d}}
$$
- MMR in kg/kg (or g/g), VMR usually unitless
	- papers often just say 'mixing ratio' - check which is meant


# Related

- [[Thermodynamics.base]]
- [[Thermodynamic Systems and Equations of State]]
- [[Collision Cross-Section, Mean Free Path and Effusion]]
- 