---
old: false
Tags:
  - w-ing
Index: 5.2
Class:
  - Atmospheres and Oceans
Topics:
  - Moist thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Two-component moist (pseudo)-adiabat

- consider limiting case atmosphere with one condensible species alongside a background non-condensible species
	- relevant to H20 on earth, CH4 on titan
- derive generalised moist adiabat for a single condensible by generalising first law of thermodynamics to two species
- make the following assumptions:
	1. rainout of condensate (condensate instantaneously is removed from atmosphere on formation), don't need to track effect of condensate on density or specific heat of parcel
	2. atmosphere follows the ideal gas law, reasonable approximation for earth-like pressures and temperatures
	3. $\rho{}_{\text{sat}}<\rho{}_{\text{condensate}}{}$ consistent with assumption about rainout
- first law of thermodynamics for a system with $N_{d}{}$ moles of dry gas and $N_{\text{sat}}{}$ moles of condensible gas at its saturation vapour pressure:
$$
C_{p,d}dT+C_{p,c}dT - Vdp +LdN_{\text{sat}} = \delta{}Q
$$
- $C_{p,d}{}$ is heat capacity of dry atmospheric component, $C_{p,c}{}$ is heat capacity of the condensible vapour, $dN_{\text{sat}}{}$ is number of moles of condensible vapour
- rewrite using specific heat capacity
$$
m_{d}c_{p,d}dT + m_{c}c_{p,c}dT - \frac{m_{d}}{\rho{}_{d}} dp_{d} - \frac{m_{c}}{\rho{}_{c}}dp_{c}+Ldm_{c} = (m_{d}+m_{c})\delta{}q = 0
$$
- we expanded using $V=m/\rho{}{}$
- no term included for heat storage in condensed phase, consistent with assumption of rainout
- we then substitute ideal gas law
$$
0=m_{d}c_{p,d}dT +m_{c}c_{p,c}dT - m_{d}R_{d}T\frac{dp_{d}}{p_{d}}-m_{c}R_{c}T\frac{dp_{c}}{p_{c}}+Ldm_{c}
$$
- dividing by $m_{d}dT{}$ and collecting terms
$$
0=c_{p,d}d\ln T - R_{d}d \ln p_{d} + q_{c}[c_{p,c}d \ln T - R_{c d\ln p_{c}}]+ \frac{L}{T}dq_{c}
$$
- we defined $q_{c} = m_{c}/m_{d}{}$ is mass mixing ratio
- final term $Ldq_{c}/T{}$ introduces change in entropy due to condensation
- make assumption that the atmosphere is saturated when it begins to lie on moist pseudo-adiabatic
	- replace $p_{c}{}$ by $p_{c,\text{sat}}{}$ so we may use $d\ln p_{\text{sat}}/dT = L/R_{c}T^{2}$ [[Clausius-Clapeyron relation]]
	- replace $q_{c}{}$ by $q_{\text{sat}}{}=(\mu{}_{c}/\mu{}_{d})(p_{c,\text{sat}}/p_{d})$ [[Thermodynamic Descriptions of Air]]
- bringing this all together:
$$
0=d \ln T \left[ c_{p,d}+q_{\text{sat}} \left( c_{p,c} - \frac{L}{T}+\frac{L^{2}}{R_{c}T^{2}} \right)  \right] - d \ln p_{d}\left[ R_{d} + \frac{L}{T}q_{\text{sat}} \right] 
$$
- can now divide to obtain **two-component moist adiabatic lapse rate** in specific (per mass) units
$$
\frac{d\ln T}{d\ln p_{d}} = \frac{R_{d}+\frac{L}{T}q_{\text{sat}}}{c_{p,d}+q_{\text{sat}}\left( c_{p,c} - \frac{L}{T}+ \frac{L^{2}}{R_{c}T^{2}} \right) }
$$
- see that if $q_{\text{sat}}\to{} 0{}$ this reduces to dry adiabat [[[Adiabatic Processes and Black Body Radiation]]] as expected

# Related