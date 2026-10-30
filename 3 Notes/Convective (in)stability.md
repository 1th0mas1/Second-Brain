---
old: false
Tags:
  - w-ing
Index: 3.3
Class:
  - Atmospheres and Oceans
Topics:
  - Dry thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Convective (in)stability

## Common expressions for the lapse rate

- use ideal gas law to convert lapse rate $dT/dp{}$ to a simplified expression
$$
\frac{d(\ln T)}{d(\ln p)} = \frac{R}{c_{p}}
$$
- note that hydrostatic equilibrium states $dp = -\rho{}gdz{}$ thus *adiabatic lapse rate*
$$
\frac{dT}{dz} = -\frac{g}{c_{p}}
$$
- typical values in $K/\text{km}{}$ on bodies in solar system are:
	- $-10.8{}$ for Venus
	- $-9.8{}$ for Earth
		- real earth mean is ~$-8$ K/km - gap due to moisture and latent heat
	- $-4.6{}$ for Mars
	- $-1.3{}$ for Titan

## Convective (in)stability criteria

- atmospheres with temperature profiles that decrease sharper with height than adiabatic profile are unstable to convection
![[Pasted image 20260930122120.png|413]]
- if a parcel is perturbed at same density as surrounding:
	- parcel density changes according to adiabatic relation
	- pressure kept close to surroundings
- if density is less than environmental density for upward perturbation then it will accelerate away
	- this initialises convection and stable temperature profiles
- if parcel hotter than surroundings then less dense
- atmosphere unstable to convection if temperatures decreases faster with height than adiabatic lapse rate $-g/c_{p}{}$
$$
\begin{align}
\frac{dT}{dz}  & < -\frac{g}{c_{p}}\quad{}\text{unstable} \\
\frac{dT}{dz} & = -\frac{g}{c_{p}}\quad{} \text{marginally stable} \\
\frac{dT}{dz}  & > -\frac{g}{c_{p}}\quad{} \text{stable} 
\end{align}
$$
- atmospheres forced to be unstable adjust via convection to have lapse rates approximately stable
	- ie $dT/dz\approx{} -g/c_{p}{}$
- so dry adiabat has two meanings
	- temperature path of a parcel lifted / lowered adiabatically
	- background profile wherever convection dominates heat transport
	- real convection entrains surrounding air so not truly adiabatic

## Potential temperature

- potential temperature is defined such that
$$
d\ln \theta{} \equiv d\ln T - \frac{R}{c_{p}} d\ln p
$$
- equivalent to entropy in atmospheric constant
$$
\theta{} = T \left( \frac{p_{0}}{p} \right)^{\kappa{}}
$$
- for constant $R/c_{p} \equiv \kappa{}{}$
- potential temperature is the temperature a parcel of dry air at pressure $p{}$ and temp $T{}$ would have if it expanded / compressed adiabatically to pressure $p_{0}{}$
- further relate potential temperature variations with height ($d\theta{}/dz{}$) to the lapse rate ($dT/dz{}$)
$$
\begin{align}
\frac{1}{\theta{}}\frac{d\theta{}}{dz}  & = \frac{1}{T}\frac{dT}{dz} - \frac{\kappa{}}{p}\frac{dp}{dz} \\  & =\frac{1}{T}\frac{dT}{dz} + \frac{\kappa{}}{p}\rho{}g \\
 & = \frac{1}{T}\left( \frac{dT}{dz} + \frac{g}{c_{p}} \right) 
\end{align}
$$
- this implies if $d\theta{}/dz{} =0$ then $dT/dz = -g/c_{p}{}$ 
	- ie dry adiabat
	- thus we can write
$$
\begin{align}
\frac{d\theta{}}{dz} & <0\quad{}\text{unstable} \\
\frac{d\theta{}}{dz} & =0\quad{}\text{marginally stable} \\
\frac{d\theta{}}{dz} & > 0\quad{}\text{stable}
\end{align}
$$
![[Pasted image 20261001120413.png|498]]

## Convective available potential energy (CAPE)

- CAPE is a useful measure to determine susceptibility of given temperature profile to deep convection
	- measure of maximum possible kinetic energy that a statistically unstable parcel can acquire
		- assumes no mixing with the environment
		- instantaneous adjustment to the local environmental pressure
- find the acceleration of a parcel due to buoyancy ($b{}$)
$$
b = g \frac{ \rho{}_{e}-\rho{}_{p}}{\rho{}_{p}} = g \frac{1/T_{e} -1/T_{p}}{1/T_{p}} = g \frac{T_{p} - T_{e}}{T_{e}}
$$
- density of parcel is $\rho{}_{p}{}$ and environment $\rho{}_{e}{}$
- temperature of parcel is $T_{p}{}$ and environment $T_{e}{}$
- calculate maximum kinetic energy of parcel displaced vertically from:
	- LFC (level of free convection) the vertical point where convection begins to
	- LNB (level of neutral buoyancy) higher level above LFC where convection is inhibited
$$
\frac{w_{\text{max}}^{2}}{2} = \int_{z_{\text{LFC}}}^{\text{z}_{\text{LNB}}}g \left( \frac{T_{p}-T_{e}}{T_{e}} \right) dz = \int_{p_{\text{LNB}}}^{p_{\text{LFC}}}R(T_{p}-T_{e})d\ln p
$$
- second equality uses ideal gas law and hydrostatic balance
- this is the definition of CAPE thus
$$
\text{CAPE} \equiv \int_{p_{\text{LNB}}}^{p_{LFC}}R(T_{p}-T_{e})d\ln p
$$
- *convective inhibition* (CIN) is effectively negative CAPE
	- energy barrier parcel must overcome before reaching LFC
	- CAPE and CIN together quantify strength of convection
![[Pasted image 20261001121827.png|517]]


# Related

