---
old: false
Tags:
  - w-ing
Index: 4.2
Class:
  - Atmospheres and Oceans
Topics:
  - Moist thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Clausius-Clapeyron relation

- clouds form in atmospheres where species are thermodynamically favoured to undergo phase transition from vapour to solid phases
- cloud condensation thermodynamically allowed when partial pressure of species exceeds saturation vapour pressure
- saturation vapour pressure extremely sensitive to temperature
- saturation vapour pressure set by **Clausius-Clapeyron** relationship which (for ideal gas law):
$$
\frac{dp_{\text{sat}}}{dT} = \frac{1}{T} \frac{L}{\rho{}_{\text{vap}}^{-1} - \rho{}_{\text{cond}}^{-1}}
$$
- $\rho{}_{\text{vap}}{}$ is density of the vapour phase, $\rho{}_{\text{cond}}{}$ is of condensed phase, $p_{\text{sat}}{}$ is saturation water vapour pressure
- if $\rho{}_{\text{cond}}\gg \rho{}_{\text{vap}}{}$ (case for most atmospheric condensible) then using ideal gas law
$$
\frac{dp_{\text{sat}}}{dT}\approx{}\frac{p_{\text{sat}}L}{RT^{2}}
$$
- if we assume $L{}\approx{}\text{constant}$ we obtain *saturation vapour pressure curve*
$$
p_{\text{sat}} = p_{0}\exp\left[ \frac{L}{R}\left( \frac{1}{T_{0}}-\frac{1}{T} \right)  \right] 
$$
- as a result we see saturation vapour pressure scales exponentially with $-1/T{}$
![[Pasted image 20261001131822.png|490]]
- the exact slope depends on the condensible of interest
- steep decline of temperature with height for [[Adiabatic Processes and Black Body Radiation|adiabatic atmosphere]]
	- condensible water vapour mixing ratios are orders of magnitude smaller at tropopause than surface
- more generally implies condensible water vapour mixing ratios are smaller in colder regions of planet
	- implies a decrease in atmospheric moisture from hotter equator towards colder pole
- using condensation temperature instead of saturation vapour pressure:
	- equivalently state condensation from gas to cloud thermodynamically allowed at given pressure when $T<T_{\text{cond}}{}$
	- clouds form at high altitudes in planetary atmospheres as temperature decreases with height in troposphere
		- clouds form at altitudes where temperature is cool enough to allow for condensation
	- exception is when local saturation vapour is enhanced
		- e.g due to mixing
		- this increases partial pressure of a species to allow for condensation

# Related