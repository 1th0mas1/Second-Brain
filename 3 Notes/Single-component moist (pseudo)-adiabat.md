---
old: false
Tags:
  - w-ing
Index: 5.1
Class:
  - Atmospheres and Oceans
Topics:
  - Moist thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Single-component moist (pseudo)-adiabat

- simplest case of a condensible atmosphere is one where entire atmosphere is made up of the condensible species
	- no perfect examples of this in solar system but:
		- mars (CO2 dominated)
		- Triton (N2 dominated) can be well approximated as single condensable
	- saturation vapour pressure is total atmospheric pressure when condensation occurs
	- temperature gradient from [[Clausius-Clapeyron relation|clausius-clapeyron]] is the moist-adiabatic lapse rate of atmosphere
	- moist pseudo-adiabat approximately moist adiabat is amount of retained condensate mass is small
		- generally true for earth
- CC relationship expressed as *single-component moist adiabatic lapse rate*
$$
\frac{d \ln T}{d \ln p} = \frac{ RT}{L}
$$
- p is both total pressure and saturation vapour pressure (gas species always at saturation if it is the only vapour component)
- moist adiabatic gradient smaller than dry if $L>c_{p}T{}$
	- almost always satisfied
	- $L/c_{p}T\sim{}2-6$ for $\text{H}_{2}\text{O}$, $\text{CO}_{2}$, $\text{CH}_{4}$, $\text{N}_{2}$
- if there is no rainout then moist-adiabatic perturbations are reversible
	- if condensation of vapour occurs as air rises then vaporisation of condensate occurs as it sinks
		- follows moist-adiabatic lapse rate for both ascent and descent
- for earth this is not correct for two reasons
	- not comprised of a single-component atmosphere
	- descending air in mid-latitudes is drier than ascending air in hot moist tropics due to rain out
	- in case where descent occurs after drying out, the descending air follows steeper dry adiabat
- note in case $L\approx{}\text{constant}{}$ we can invert prior expression to get
$$
T(p) = \frac{T_{0}}{1-\frac{RT_{0}}{L}\ln\left( \frac{p}{p_{0}} \right) }
$$
- this governs entire atmospheric temp profile if temperature at surface is cold enough for condensation to occur all the way to ground
	- if not near-surface follows the dry adiabat
![[Pasted image 20261001141614.png|455]]


# Related

- [[Thermodynamic Descriptions of Air]]