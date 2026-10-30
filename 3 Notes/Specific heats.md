---
old: false
Tags:
  - w-ing
Index: 3.2
Class:
  - Atmospheres and Oceans
Topics:
  - Dry thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Specific heats

- using chain rule we can re-state change in internal energy as
$$
\frac{dU}{dt} = \frac{ \partial U }{ \partial T } \frac{dT}{dt}+\frac{ \partial U }{ \partial V } \frac{dV}{dt}
$$
- define heat capacity at constant volume $C_{v}{}$ to be
$$
C_{v} \equiv \left( \frac{ \partial U }{ \partial T }  \right) _{v}
$$
- this is a *specific heat* ($c_{p}{}$) when defined per mass or per mole
- for ideal gas changes in internal energy due to changes in volume neglected
	- they arise from inter-molecular interaction which aren't important for ideal gas
$$
\frac{dU}{dt}=C_{v}\frac{dT}{dt}
$$
- equivalently perform chain rule on enthalpy
$$
\frac{dH}{dt} = \frac{ \partial H }{ \partial T } \frac{dT}{dt} + \frac{ \partial H }{ \partial p } \frac{dp}{dt}
$$
- define heat capacity at constant pressure
$$
C_{p}\equiv\left( \frac{ \partial H }{ \partial T }  \right) _{p}
$$
- for ideal gas the enthalpy change due to pressure change is negligible hence
$$
\frac{dH}{dt} = C_{p}\frac{dT}{dt}
$$
- thus we relate heat capacities at constant pressure and volume
$$
C_{p} = C_{v}+\frac{ \partial U }{ \partial V } \frac{ \partial V }{ \partial T } +p\frac{ \partial V }{ \partial T } 
$$
- for ideal gas case:
	- $\partial{}U/\partial{}V=0{}$
	- $\partial{}V/\partial{}T{} = NR_{u}/p$
$$
\begin{align}
C_{p}  & = C_{v}+NR_{u} \\
c_{p} & = c_{v} +R_{u}
\end{align}
$$
- heat capacity $C_{v}{}$ per molecule is $k_{B}/2{}$ per degree of freedom
	- $c_{v} = R_{u}/2{}$ per degree of freedom of molecule
	- e.g. for diatomic molecules
		- 2 rotational DoF and 3 translational
		- $c_{v}=(5/2)R_{u}{}$ and $c_{p} = (7/2)R_{u}{}$
	- vibrational modes only unlock at high temperatures (upper atmosphere / thermosphere)
- careful with units
	- per mole: $c_{p}=c_{v}+R_{u}$, per mass: $c_{p}=c_{v}+R$
- common combinations of specific heat are
$$
\begin{align}
\gamma{}  & \equiv \frac{c_{p}}{c_{v}}
 \\
\kappa{}  & \equiv \frac{R}{c_{p}}
\end{align}
$$
- for earth:
	- $\gamma{} \approx{} 1.4{}$ (1.3-1.6 across gases)
	- $\kappa{}\approx{}0.286{}$









# Related

- [[Thermodynamic Potentials and Phase Transitions]]