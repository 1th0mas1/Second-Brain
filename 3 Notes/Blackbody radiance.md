---
old: false
Tags:
  - w-ing
Index: 7.2
Class:
  - Atmospheres and Oceans
Topics:
  - Radiative transfer 1
---
up: [[Atmospheres and Oceans.base]]

# Blackbody radiance

- require knowledge of how light is transferred, absorbed and scattered through a planetary atmosphere
- requires wavelength-dependent understanding
	- first gain understanding using simpler model assuming emission follows black body
- radiance of blackbody depends on temperature and frequency, given by **Planck function**
$$
\boxed{B_{\nu{}}(T) = \frac{2h\nu{}^{3}}{c^{2}}\frac{1}{e^{h\nu{}/k_{B}T}-1} = \frac{2k_{B}^{3}T^{3}}{h^{2}c^{2}}\frac{u^{3}}{e^{u}-1}}
$$
- u is a dimensionally quantity
	- equal to half the ratio of photon energy to the thermal energy in one dof of matter
$$
u = \frac{h\nu{}}{k_{B}T} = \frac{hc}{\lambda{}k_{B}T}
$$
- may also write for wavelength
$$
\boxed{B_{\lambda{}}(T) = \frac{2hc^{2}}{\lambda{}^{5}}\frac{1}{e^{hc/\lambda{}k_{B}T}-1} {}=\frac{2k_{B}^{5}T^{5}}{h^{4}c^{3}}\frac{u^{5}}{e^{u}-1}}
$$
- note these aren't equivalent
	- peak of blackbody curve dependent on if written in wavelength or frequency space
	- thus peak of blackbody curve has no intrinsic meaning
![[Pasted image 20261014145623.png]]
- note that cooler curves have smaller peak frequencies and longer peak wavelength
- relate blackbody radiance $B{}$ (radiation energy per second meter squared per steradian of solid angle per unit of frequency or wavelength) to energy flux $F{}$ (radiation energy per second per meter squared per unit of frequency or wavelength) with $F = \pi{}B{}$

## Wien's law

- peak of blackbody curve in frequency or wavelength is given by **Wien's law**
$$
\boxed{\nu{}_{\text{max}} = 5.87\times 10^{10}\frac{T}{K}\text{Hz}}\quad{}\boxed{ \lambda{}_{\text{max}} = 2897 \frac{K}{T}\mu{}\text{m}}
$$
- alternative to characterise blackbody radiation not by peak frequency or wavelength but by *median emission frequency*
	- splits energy flux such that half is greater, half is lower
	- this isn't unit dependent so happens at $u=3.503{}$ for wavelength and frequency

## Stefan-Boltzmann law

- integrate $F_{\nu{}}{}$ over all frequencies or $F_{\lambda{}}{}$ over all wavelengths to obtain total flux emitted by blackbody
- known as the **Stefan-Boltzmann law**
$$
F(T) = \int_{0}^{\infty }\pi{}B_{\nu{}}(T)d\nu{}= \int_{0}^{\infty }\pi{}B_{\lambda{}}(T)d\lambda{}=\left[ \frac{2\pi{}k_{B}^{4}}{h^{3}c^{2}}\int_{0}^{\infty }\frac{u^{3}}{e^{u}-1}du \right]T^{4}=\sigma{}T^{4} 
$$
- here $\sigma{} = 5.67 \times 10^{-8}\text{W m}^{-2}\text{K}^{-4}{}$ is Stefan-Boltzmann constant


# Related