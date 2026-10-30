---
tags:
  - w-ing
Class:
  - Atmospheres and Oceans
Date: 2026-10-19
Topics:
Index: 4
---




# Overview



# Notes

###  Latent heat

- amount of energy released when a unit of mass of a substance changes phase while holding temperature constant
- mars atmosphere close to triple point of CO2
- defined to be positive when heat is released
$$
Q = mL
$$
- while it goes to zero at critical point, it only is about 9.5% change from triple point just before critical
	- approximately treat latent heat as constant

## Clausius-Clapeyron

- clouds allowed when partial pressure of species exceeds saturation pressure
- saturation vapour pressure set by clausius-clapeyron expressed for ideal gas as
$$
\frac{dp_{\text{sat}}}{dT} = \frac{1}{T} \frac{L}{\rho{}_{\text{vap}}^{-1}- \rho{}_{\text{cond}}^{-1}}
$$
- where $\rho{}_{\text{vap}}{}$ is density of vapor phase and $\rho{}_{\text{cond}}{}$ is density of condensed phase
- we expect $\rho{}_{\text{cond}}\gg \rho{}_{\text{vap}}{}$
$$
\frac{dp_{\text{sat}}}{dT}\approx{}\frac{p_{\text{sat}}L}{RT^{2}}
	$$
- here $p_{\text{sat}}{}$ is saturation vapour pressure
- if we assume $L\approx{}constant$ then we can integrate
$$
p_{\text{sat}} = p_{0}\exp\left[ \frac{L}{R}\left( \frac{1}{T_{0}}-\frac{1}{T} \right)  \right] 
$$
- colder reasons are generally drier as saturation pressure is lower at lower temperatures
![[Pasted image 20261019113349.png]]
- consider overlaying planets over saturation curves for different condensables
- assume for the sake of moist thermodynamics, just for simplicity, in this lecture and the next lecture, that saturation vapour pressure, when it's reached the atmosphere, is always a saturation and condensation occurs right away at saturation and we don't have a case where we need supersaturation to allow for condensation to occur

## Single-component moist pseudo adiabat

- we will take ${}p_{\text{sat}}=p_{\text{tot}}$
$$
\frac{dp}{dT} = \frac{pL}{RT^{2}}\to{} \frac{d \ln T}{d \ln p} = \frac{R T}{L}
$$
- compare this to dry
$$
\frac{d \ln T}{d \ln p} = \frac{R}{c_{p}}
$$
- moist will be smaller than dry if $L > c_{p}T{}$
- this is satisfied for basically all condensible species of interest
	- satisfied for H2O, CO2, CH4, N2 at triple point $L/c_{p}T \sim 2-6{}$
- this means atmospheres may be stable to dry convection but unstable to moist convection
- we made approximation that condensate is instantaneously removed from parcel - 'rainout'
	- why it's pseudo-adiabat as rainout makes process irreversible so not true adiabat
		- only true adiabat if amount of retained condensate mass is small
- we can invert equation to find
$$
T(p) = \frac{T_{0}}{1-\frac{RT_{0}}{L}\ln\left( \frac{p}{p_{0}} \right)}
$$
- only tells us where condensation can occur
![[Pasted image 20261019114448.png|470]]



# Related

