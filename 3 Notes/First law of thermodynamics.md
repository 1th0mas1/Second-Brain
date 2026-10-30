---
old: false
Tags:
  - w-ing
Index: 3.1
Class:
  - Atmospheres and Oceans
Topics:
  - Dry thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# First law of thermodynamics

- first law of thermodynamics is statement of energy conservation
	- rate of change of internal energy is sum of work and heating rates
$$
\frac{dU}{dt} = Q+W
$$
- where $U{}$ is the internal energy, $Q{}$ is the heating rate, $W{}$ is the working rate
- for adiabats $Q=0{}$ as no heating or cooling
	- neglects radiation, latent heat release, turbulent mixing (entrainment)
	- also assumes closed parcel - no exchange of particles ($\mu{} dN$ term = 0)
- for an atmosphere the working rate is dominated by the expansion work done *on* the system
$$
W=-p\frac{dV}{dt}
$$
- $V{}$ is the volume of the system
$$
\frac{dU}{dt} = Q -p\frac{dV}{dt}
$$
- alternate version is used with enthalpy $H=U+pV{}$ instead of internal energy
$$
\frac{dH}{dt} = Q+V\frac{dp}{dt}
$$
- note for a constant $p{}$, constant $T{}$ a process has constant $H{}$ but not constant $U{}$

# Questions

$$
\begin{align}
\text{Adiabats: } c_{p}\frac{dT}{dt}  & = \underbrace{Q}_{=0}+\frac{1}{\rho{}}\frac{dp}{dt} \\
\frac{dT}{dp} & = \frac{1}{\rho{}c_{p}} \\
\text{ideal gas: }\rho{}=\frac{p}{RT}\to{}\frac{dT}{dp} & = \frac{RT}{pc_{p}} \\
\frac{d \ln T}{d \ln p}  & = \frac{R}{c_{p}} \\
\text{hydrostatic: }dp=-\rho{} g dz  & = - \frac{p}{RT}gdz  \\
\to{} \boxed{\frac{dT}{dz} = - \frac{g}{c_{p}}}
\end{align}
$$


# Related

- [[Thermodynamic Potentials and Phase Transitions]]