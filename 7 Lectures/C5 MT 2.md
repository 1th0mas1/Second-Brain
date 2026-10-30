---
tags:
  - w-ing
Class:
  - Atmospheres and Oceans
Date: 2026-10-14
Topics:
Index: 2
---




# Overview



# Notes

- why can we treat atmosphere as continuum
	- quantify with knudsen number
$$
\text{Kn} = \frac{\lambda{}}{\mathcal{L}}
$$
- for the atmosphere $\text{Kn}\ll1{}$
- we will only assume one equation of state ie ideal gas law
$$
p=nR_{u}T
$$
- we define specific gas constant $R \equiv R_{u}/\mu{}{}$ where $\mu{}{}$ is mass per mole
	- thus we can write the ideal gas law as
$$
p = \rho{} R T
$$
- this implies relationship between pressure and temperature is dependent on the gas of constant
- for air $\mu{}=29\text{g}/\text{mole}{}$ thus $R = 287 \text{J}/\text{kg }K{}$
- ideal gas law breaks down deep into gas giant
---
- each component of air follows own ideal gas law
$$
p_{i} = \rho{}_{i}R_{i}T
$$
---
## Expressing concentrations

- commonly express relative concentration as **mole fraction**
$$
f_{i} \equiv \frac{n_{i}}{n}
$$
- condensables raining out changes this, so useful to use dry air as a reference point instead
$$
q_{i} = \frac{\rho{}_{i}}{\rho{}_{d}} = \frac{\mu{}_{i}}{\mu{}_{d}}\frac{n_{i}}{n_{d}} = \frac{\mu{}_{i}}{\mu{}_{d}}\frac{p_{i}}{p_{d}}
$$
- we also have volume mixing ratio
$$
\xi_{i} = \frac{n_{i}}{n_{d}}
$$
---
## Hydrostatic balance

- for tropospheres we make approximation that $g=  \text{const} \approx{} GM_{p}/R_{p}^{2}{}$
	- less good approximation above troposphere
- what happens if you relax constant g
$$
\begin{align}
g & = \frac{GM_{p}}{r^{2}} \\
\to{} \frac{dp}{dr} &  = - \rho{} \frac{GM_{p}}{r^{2}} \\
\frac{1}{\rho{}}\frac{dp}{dr} & = -\frac{GM_{p}}{r^{2}} \\
\frac{1}{p}\frac{dp}{dr}  & = - \frac{GM_{p}}{r^{2}} \frac{1}{RT} \\
\to{} \frac{d \ln p}{dr} &  =- \frac{GM_{p}}{r^{2}RT} \\
\to{} \int_{p_{0}}^{p}d \ln p  & = - \frac{GM_{p}}{RT}\int_{r_{0}}^{r} \frac{dr'}{r'^{2}} \\
\to{} p &  = p_{0}\exp \left[  -\frac{GM_{p}}{RT_{0}}\left( 1-\frac{r_{0}}{r} \right) \right] 
\end{align}
$$
- this goes to a constant - non physical we expect 0
- we need a flow - 'parker wind'
	- implies constant mass loss

---

- final expression
$$
\boxed{\frac{dp}{dz}=-\rho{}g}
$$
- we can thus find
$$
\frac{p}{g} = \rho{}z \equiv \frac{\text{mass}}{\text{area}} = \Sigma{}
$$
- substitute in ideal gas law
$$
p = p_{0}e^{-z/H}
$$
- where $H{}$ is scale height $H = RT/g{}=R_{u}T/\mu{}g$
	- implies hotter atmosphere is puffier
	- heavier atmosphere less puffy
- not an exact rule but generally works
	- wiggles in line due to temperature dependence

---
## Thermodynamics

### First law

- statement of conservation of energy
$$
\boxed{\text{first law: }\frac{dU}{dt} = Q+W}
$$
- here $W{}$ is working rate and is dominated by expansion
$$
W = -p\frac{dV}{dt}
$$
- in atmosphere we tend to use enthalpy
$$
\frac{dH}{dt} = Q + V \frac{dp}{dt}
$$
- we prefer $H{}$ as constant $p{}$ constant $T{}$ has constant $H{}$ but not constant $U{}$

### Specific heats

$$
\frac{dU}{dt} = \frac{ \partial U }{ \partial T }  \frac{dT}{dt} + \frac{ \partial U }{ \partial V } \frac{dV}{dt}
$$
- we define
$$
C_{v} \equiv \frac{ \partial U }{ \partial T } _{v}
$$
- and changes in internal energy by changes in volume only if inter-molecular interactions important which we say isn't so second term neglected
- do a similar process for enthalpy
$$
\frac{dH}{dt} = \frac{ \partial H }{ \partial T } \frac{dT}{dt} + \frac{ \partial H }{ \partial p } \frac{dp}{dt}
$$
- and we say $C_{p} = \partial{}H/\partial{}T_{p}{}$ thus
$$
\frac{dH}{dt} = C_{p}\frac{dT}{dt}
$$
- for same reasons as before
- we now relate the heat capacities
$$
\frac{dH}{dt} = C_{p}\frac{dT}{dt} = \frac{dU}{dt}+p\frac{dV}{dt}+V\frac{dp}{dt}
$$
- thus
$$
C_{p} = C_{v}+\frac{ \partial U }{ \partial V } \frac{ \partial V }{ \partial T } +p\frac{ \partial V }{ \partial T }
$$
- for ideal case again we use $\partial{}U/\partial{}V\equiv0{}$ thus
$$
\begin{align}
C_{p}  & = C_{v}+NR_{u} \\
c_{p}  & = c_{v}+R_{u} 
\end{align}
$$
- recall that the total heat capacity per molecule is $k_{B}/2{}$ per d.o.f
- and we use $R_{u} = N_{A}k_{B}{}$
- this implies that specific $c_{v}{}$ will be $c_{v} = R_{u}/2{}$ per dof
- on earth we have 3 translational and 2 rotational for diatomic molecules, but 2 vibrational modes unlocks at high temperatures (thermosphere)
---
- common combinations of specific heats are
$$
\begin{align}
\gamma{}  & \equiv \frac{c_{p}}{c_{v}} \\
\kappa{} & \equiv \frac{R}{c_{p}} & 
\end{align}
$$
- for earth $\gamma{} \approx{}1.4{}$ and $\kappa{} = 2/7{}$



# Related

