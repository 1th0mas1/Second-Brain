---
old: false
Tags:
  - w-ing
Index: 6.3
Class:
  - Atmospheres and Oceans
Topics:
  - Moist thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Some moisture-related definitions to know

## Humidity metrics

- there are two humidity metrics to be used regularly
1. **specific humidity** - this is *specific concentration of water vapour*, defined as ratio of mass of a given substance to the total mass of particle (different to mass mixing as thats done with respect to dry not the total)
$$
q_{A}\equiv \frac{\rho{}_{c}}{\rho{}_{\text{tot}}} = \frac{\mu{}_{c}}{\bar{\mu{}}}\frac{p_{c}}{p_{\text{tot}}} = \frac{\mu{}_{c}}{\bar{\mu{}}}\xi{}_{c}
$$
2. **relative humidity** - degree of saturation, equivalent to the *saturation ratio*. $p_{c,\text{sat}}{}$ is saturation vapour pressure of condensible (given by [[Clausius-Clapeyron relation|clausius-clapeyron]])
$$
\text{RH} = \frac{ p_{c}}{p_{c,\text{sat}}}
$$
- equivalently $\text{RH}\approx{} q/q_{\text{sat}}$ (mixing ratio over saturation mixing ratio)
- another common quantity for moisture (sub)saturation is 'dew point' or 'frost point' depression
	- defined as $T-T_{\text{dew},\text{frost}}(p_{c}){}$
	- here $T_{\text{dew},\text{frost}}{}$ is condensation temperature following CC

## Virtual temperature

- quantity used to represent the temp dry air needs to have same pressure and density as moist air
- we know from ideal gas law that:
	- $p_{d}=\rho{}_{d}R_{d}T{}$ and $p_{c}= \rho{}_{c}R_{c}T{}$
$$
\begin{align}
p_{d} = \rho{}_{d}R_{d}T, & \quad{}p_{c}=\rho{}_{c}R_{c}T \\
\rho{} = \frac{m_{d}+m_{c}}{V} &  = \rho{}_{d}+\rho{}_{c} \\
p  & = p_{d}+p_{c} \\
\to{} \rho{}  & = \frac{p-p_{c}}{R_{d}T} + \frac{p_{c}}{R_{c}T} \\
\text{compare to: } & p=\rho{}R_{d}T_{v} \\
\to{} T_{v}  & = \frac{T}{1-\frac{p_{c}}{p}\left( 1-\frac{R_{d}}{R_{c}} \right)}
\end{align}
$$
- we note that $T_{v}\geq T{}$ and the difference is typically quite small


# Related

- [[Classical Ideal Gas: Gibbs Paradox and the Sackur-Tetrode Equation]]
- [[Thermodynamic Systems and Equations of State]]