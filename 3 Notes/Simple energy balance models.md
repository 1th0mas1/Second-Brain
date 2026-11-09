---
old: false
Tags:
  - w-ing
Index: 7.3
Class:
  - Atmospheres and Oceans
Topics:
  - black body radiation
---
up: [[Atmospheres and Oceans.base]]

# Simple energy balance models

- use blackbody radiation to develop idealised energy balance model for planetary surface temperature
	- we will both ignore and then include infrared radiative effect of overlying atmosphere

## Equilibrium temperature

- we write statement of energy balance for isothermal object with no internal heat source as
$$
f\pi{}R_{p}^{2}\epsilon{}\sigma{}T_{\text{eq}}^{4}= (1-\alpha{})F_{\text{inc}}\pi{}R_{p}^{2}
$$
- here $R_{p}{}$ is radius of planet, $f{}$ is a redistribution factor across planet ($f=4{}$ for full redistribution across sphere, $f=1{}$ for no redistribution), $\epsilon{}{}$ is emissivity, $\alpha{}{}$ is albedo, $F_{\text{inc}}{}$ is incoming stellar flux
$$
T_{\text{eq}} = \left[ \frac{(1-\alpha{})F_{\text{inc}}}{f\epsilon{}\sigma{}} \right] ^{1/4}
$$
- $f=4{}$ we typically call 'full-redistribution equilibrium temperature', for $f=1{}$ we call 'irradiation temperature' or 'zero-redistribution equilibrium temperature'
- use inverse square law
$$
F_{\text{inc}}=F_{*}=  \frac{L_{*}}{4\pi{} r_{\text{orb}}^{2}}
$$
- from Stefan-Boltzmann we see $L_{*} = 4\pi{} R_{*}^{2}\sigma{}T_{*}^{4}{}$, $r_{\text{orb}}{}$ is planet-star separation
- assuming $\epsilon{}=1{}$ we can find
$$
T_{\text{eq}} = T_{*}\left[ \frac{1-\alpha{}}{f} \right] ^{1/4}\sqrt{ \frac{R_{*}}{r_{\text{orb}}} }
$$
- bond albedo $\alpha{}{}$ is fraction of total energy incident on planet not absorbed and re-radiated
- factor $f=4$ is ratio of emitting area $4\pi{}R_{p}^{2}$ to intercepting area $\pi{}R_{p}^{2}$
	- equivalently average of $\cos$ of sun's incidence angle over sphere
	- why equator is warmer than poles - incidence angle, not distance


# Related