---
tags:
  - w-ing
Class:
  - Atmospheres and Oceans
Date: 2026-10-21
Topics:
Index: 5
---




# Overview



# Notes

- vast majority of planetary atmospheres composed of multiple components
	- includes condensible and non-condensible
- treat similar to dry but now must consider point where condensation first begins
- earth we consider water dilute condensible and nitrogen dry (don't get to temperatures where its condensible)
---
### Two-component moist (pseudo)-adiabat

- assumptions:
	1. **rainout of condensate** - condensate instantaneously removed from the atmosphere upon formation
	2. atmosphere follows **ideal gas law**
	3. assume $\rho{}_{\text{sat}}<\rho{}_{\text{condensate}}{}$ which drives with 1 such that it rains out
- for system with $N_{d}{}$ moles of dry gas and $N_{\text{sat}}{}$ moles of condensible gas at saturation pressure
$$
C_{p,d}dT+C_{p,c}dT-Vdp+LdN_{\text{sat}} = \delta{}Q = \underbrace{0}_{\text{assuming adiabatic}}
$$
- we then expand this out to see
$$
m_{d}c_{p,d}dT + m_{c}c_{p,c}dT - \frac{m_{d}}{\rho{}_{d}}dp_{d}-\frac{m_{c}}{\rho{}_{c}} dp_{c}+Ldm_{c} = 0
$$
- using ideal gas law
$$
0=\underbrace{c_{p,d}d \ln T - R_{d} d \ln p_{d}}_{\text{dry vapour}} + \underbrace{q_{c} [c_{p,x}d \ln T - R_{c} d \ln p_{c}]}_{\text{moist vapour}} +\underbrace{ \frac{L}{T}dq_{c}}_{\text{phase change}}
$$
- in dilute approximation $q_{c}\ll 1{}$ thus
$$
0 = c_{p,d}d \ln T - R_{d} d \ln p_{d} + \frac{L}{T}dp_{c}
$$
- make assumption atmosphere is saturated when it lies on moist pseudo adiabat so replace $p_{c}{}$ by $p_{c,\text{sat}}{}$ and $q_{c}{}$ by $q_{\text{sat}}{}$
- we will use Clausius–Clapeyron $d \ln p_{\text{sat}} = \frac{L}{R_{c}T}d \ln T{}$
	- $q_{\text{sat}} = (p_{c,\text{sat}}/p_{d})(\mu{}_{c}/\mu{}_{d}){}$
- we see
$$
dq_{\text{sat}} = \frac{\mu{}_{c}}{\mu{}_{d}}d \left( \frac{p_{c,\text{sat}}}{p_{d}} \right)  = \underbrace{\frac{\mu{}_{c}}{\mu{}_{d}}\frac{p_{c}}{p_{d}}}_{q_{\text{sat}}}d \ln \frac{p_{c}}{p_{d}} = q_{\text{sat}}(d \ln p_{c,\text{sat}}- d \ln p_{d})= q_{\text{sat}}\left( \frac{L}{R_{c}T}d \ln T - d \ln p_{d} \right) 
$$
- we thus can rearrange 1st law to say
$$
0 = c_{p}d \ln T - R_{d} d \ln p_{d} + \frac{ q_{c} L^{2}}{R_{c}T^{2}} d \ln T - \frac{Lq_{c}}{T}d \ln p_{d}
$$
- thus rearrange to find the dilute moist adiabat
$$
\frac{d \ln T}{d \ln p} = \frac{R_{d}+\frac{q_{c}L}{T}}{c_{p}+ \frac{q_{c}L^{2}}{R_{c}T^{2}}}
$$
- convert from $q{}$ to $\xi{}$ using $q = \xi(\mu{}_{c}/\mu{}_{d}){}$ we can write
$$
\frac{d \ln T}{d \ln p} = \frac{R_{u} + \frac{L\xi}{T}}{c_{p}+\frac{L^{2}}{R_{u}T^{2}}}
$$
---
- compare when moist dilute compared to dry
$$
\underbrace{\frac{R_{u}+\frac{L\xi}{T}}{c_{p}+\frac{L^{2}\xi}{R_{u}T^{2}}}}_{\text{moist}}< \underbrace{\frac{R_{u}}{c_{p}}}_{\text{dry}}
$$
- in limit of large L we find criterion implies $L/(Tc_{p})>1{}$ same as for single-component moist adiabat

---
## Moist stability criterion

- moist adiabat always shallower than dry for any of interest
- conditionally stable if in between the two
	- condition is if air is significantly moist to reach saturation

- moist convection on earth is very local
	- tropics are local but typically speaking

![[Pasted image 20261021114704.png]]

---
## Humidity metrics



# Related

