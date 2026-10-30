---
tags:
  - w-ing
Class:
  - Atmospheres and Oceans
Date: 2026-10-16
Topics:
Index: 3
---




# Overview



# Notes

![[Pasted image 20261016112831.png|461]]
- if lapse rate is less than adiabatic lapse rate then perturbing parcel up it becomes warmer than environment and convectively moves up
- if lapse rate is higher than adiabatic lapse rate then perturbing parcel up it becomes cooler than environment and returns back down
- there is no atmosphere that is environmentally more negative than the adiabatic lapse rate
	- its unstable so over some timeframe will return to dry adiabatic lapse rate
- radiative heating and cooling must control temperature in stratosphere while convective process control temperature in troposphere
---
## Potential temperature

$$
d \ln \theta{} \equiv d \ln T - \underbrace{\frac{R}{c_{p}}}_{\kappa{}} d \ln p
$$
- temperature that a parcel of dry air at pressure $p{}$ and temperature $T{}$ would have if it were expanded or compressed adiabatically to reference pressure
$$
\theta{} = T \left( \frac{p_{0}}{p} \right) ^{\kappa{}}
$$
- relate the potential temperature variation with height to the lapse rate
$$
\begin{align}
\frac{1}{\theta{}}\frac{d\theta{}}{dz}  & = \frac{1}{T}\frac{dT}{dz} - \frac{\kappa{}}{p}\frac{dp}{dz} \\
 & = \frac{1}{T}\frac{dT}{dz} + \frac{\kappa{}}{p}\rho{}g \\
 \boxed{\frac{1}{\theta{}}\frac{d\theta{}}{dz} = \frac{1}{T}\left( \frac{dT}{dz}+\frac{g}{c_{p}} \right) }
\end{align}
$$
- this implies that for dry adiabat $d\theta{}/dz = 0{}$

![[Pasted image 20261016114005.png|525]]
- potential temperature of air at plane height that's pumped in is very high about 350C even though it's about -50 as potential temperature increases

---
## CAPE Convective available potential energy

![[Pasted image 20261016114233.png]]
- upper limit of kinetic energy of given parcel that a statistically unstable parcel can acquire
	- assuming no mixing with the environment and instantaneous adjustment to the local environmental pressure
- write acceleration of a parcel due to buoyancy $b{}$ where density of a parcel is $\rho{}_{p}{}$ and of environment $\rho{}_{e}{}$
$$
b = g \frac{\rho{}_{e}-\rho{}_{p}}{\rho{}_{p}} = g \frac{T_{p}-T_{e}}{T_{e}}
$$
- calculate maximum kinetic energy of a parcel displaced vertically from level of free convection
	- LFC is the vertical point where deep convection begins
	- to the level of neutral balance
		- LNB the higher level above LFC where convection is inhibited
$$
\frac{w_{\text{max}}^{2}}{2} = \int_{z_{LFC}}^{z_{LNB}}g \left( \frac{T_{p}-T_{e}}{T_{e}} \right) dz = \boxed{\int_{p_{LNB}}^{p_{LFC}} R(T_{p}-T_{e})d \ln p \equiv \text{CAPE}}
$$
- CIN is inhibition to convection
---



# Related

- [[Convective (in)stability]]