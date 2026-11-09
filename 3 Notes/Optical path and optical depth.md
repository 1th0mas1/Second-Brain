---
old: false
Tags:
  - w-ing
Index: 8.4
Class:
  - Atmospheres and Oceans
Topics:
  - Radiative transfer 1
---
up: [[Atmospheres and Oceans.base]]

# Optical path and optical depth

- define **optical path** $\tilde{\tau{}}{}$ as
$$
\tilde{\tau{}}_{\nu{}} = \int_{0}^{l}\rho{}k_{\nu{}}dl'
$$
- this is convenient measure of amount of absorption/emission along a path followed by incident radiation
	- represents the e-folding distance for absorption/emissions
	- this definition allows us to define schwarzschild equation as
$$
\frac{dI_{\nu{}}}{d\tilde{\tau{}}_{\nu{}}} = B_{\nu{}}-I_{\nu{}}
$$
- we define **optical depth** $\tau{}{}$ related to optical path
$$
d\tau{} = -\mu{} d\tilde{\tau{}}
$$
- here $\mu{} \equiv \cos \theta{}{}$ where $\theta{}{}$ is angle between radiation's direction of travel and the upward vertical
- thus can express Schwarzschild equation as
$$
\boxed{\mu{} \frac{dI_{\nu{}}}{d\tau{}} = I_{\nu{}}-B_{\nu{}}}
$$
- remember $I_{\nu{}}{}$ is just the radiation travelling in a particular direction
	- essentially $\tau{}{}$ is a vertical coordinate, increasing downwards from top of atmosphere
		- upward-oriented radiances $\mu{}>0{}$
		- downward-oriented radiances $\mu{} < 0{}$

### Photosphere pressure

- clear that optical depth is a critical parameter for estimating radiative properties
	- if optical depth $\tau{}\gg1{}$ then region is optically thick and $I_{\nu{}}\approx{} B_{\nu{}}{}$
		- think of $B_{\nu{}}{}$ as what *would emit* at that temperature so equality means acting as though thermal equilibrium
		- ie each element little bits of radiation absorbed and emitted and after enough optical depth this approaches black body
	- if optical depth $\tau{}\ll 1{}$ then region is optically thin and $I_{\nu{}}\approx{} I_{\nu{}}(0){}$
	- if $\tau{} \approx{} 1{}$ then *both* incoming starlight is absorbed and radiation escapes to space
		- special region of the atmosphere is 'photosphere'
		- estimate photosphere using
$$
\tau{} \approx{} 1 = \int_{z}^{\infty } k_{\nu{}}\rho{}dz = k_{\nu{}}\frac{p}{g}
$$
	- integrated assuming hydrostatic balance ($-\rho{}dz = dp /g{}$)
	- assume absorption coefficient (ie the opacity) is constant we can estimate the photosphere pressure where $\tau{} = 1{}$
$$
p(\tau{}=1) \approx{} \frac{g}{k_{\nu{}}}
$$
- for hot jupiter exoplanet with $g = 10\text{ m s}^{-2}{}$ and $k_{IR} = 4\times10^{-3}{}\text{ cm}^{2}\text{ g}^{-1}$ we find $p_{IR}\approx{} 0.25 \text{ bars}{}$
---


# Related