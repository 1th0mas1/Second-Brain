---
old: false
Tags:
  - w-ing
Index: 8
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# Comparing to observations

## The spatial distribution of galaxies

- a typical survey of galaxies looks like
![[Pasted image 20261104122145.png|491]]
- we have been talking about $\delta{}{}$
	- continuous field defined over all space
	- what we actually see are galaxies - bright dots in sky
	- must relate theory to observations
- take starting point of mean density expanded in terms of density contrast
$$
\rho{} = \rho{}_{0}+\delta{}\rho{} = \rho{}_{0}\left( 1+\frac{\delta{}\rho{}}{\rho{}_{0}} \right) = \rho{}_{0}(1+\delta{})
$$
- galaxies must trace this density
	- if density is high we expect more galaxies (more dots)
	- if density is low we expect less galaxies (void)
- make this comparison more qualitative
	- take distribution of galaxies and lay down balls of radius $\lambda{}$ all over
	- calculate mass contained in each ball
$$
M(\lambda{}) = \int_{S_{\lambda{}}}d^{3}\underline{x}\rho{}(\underline{x})
$$
	- where $S_{\lambda{}}{}$ is a sphere of radius $\lambda{}{}$
- we may average over all balls to find
$$
\bar{M}(\lambda{}) \equiv \langle M(\lambda{}) \rangle =\frac{4\pi{}}{3}\lambda{}^{3}\rho{}_{0}
$$
- now suppose we calculate variance
$$
[\delta{}M(\lambda{})]^{2}\equiv\langle \left[ M(\lambda{})-\bar{M}(\lambda{}) \right] ^{2} \rangle
$$
- some balls are heavier, some are lighter
	- there should be a scatter
	- once can show mass variance is given by
$$
\Delta{}^{2}(k) \equiv \left[ \frac{\delta{} M(\lambda{})}{\bar{M}(\lambda{})} \right] ^{2} \simeq \frac{k^{3}}{2\pi{}^{2}} P(k)
$$
	- where $k = 2\pi{}/\lambda{}{}$
- $P(k){}$ gives fluctuations in mass of balls with a given radius
	- different clumping leads to different $P(k){}$
- problem that perturbations in baryons can't grow due to how they link up with radiation (before recombination)
	- solution is to have a form of non-relativistic matter that doesn't interact with radiation
	- it won't feel that baryon pressure and will have Jean's wavelength of zero
	- doesn't interact with light - 'dark matter'
	- dark matter wells allow baryons to fall into them after recombination
![[Pasted image 20261104123749.png|532]]


## Anisotropies in the Cosmic Microwave Background

- ignoring the important role radiation plays in early times up until now
	- at early times universe was highly ionized - hydrogen dissociated into free electrons and protons
		- mean free path of photons is effectively ${}0$
			- universe effectively opaque
	- at late times, the universe is neutral - protons and electrons are in hydrogen
		- photons free to propagate
			- universe is transparent
	- transition from one state to another related to binding energy of hydrogen and ionization fraction
$$
X \equiv \frac{n_{p}}{n_{p}+n_{H}}
$$
	- at sufficiently early times we see $X=1{}$
	- as it crosses a certain threshold electrons and protons combine to form Hydrogen
		- happens when temperature of universe around $T\simeq 3570\text{ K}{}$ ($0.308\text{ eV}{}$)
		- approximately at redshift of $1100{}$ (recombination)
	- may have expected threshold to be $13.6\text{ eV}{}$
		- however at given temp there is always photons with energies large than average
			- this only becomes unimportant at sufficiently low temperatures
- ---
- reconstruct history of photons left over from recombination
	- post recombination a photon has been travelling along a straight path from then to now
	- travelled a distance $d_{*}\simeq \eta{}_{0} - \eta{}_{*}{}$
		- $\eta{}_{0}{}$ ($\eta{}_{*}{}$) is conformal time today (recombination)
	- before recombination the mean free path was essentially 0 (staying still)
		- think of recombination as the time when the photons were let free to travel in space
	- when we look at a fixed point in sky we receive photons that have travelled in straight line since $\eta{}_{*}{}$
		- the point they are released from map onto 2D sphere of radius $d_{*}{}$
	- universe was in thermal equilibrium so radiation should have black body spectrum
		- approximately homogeneous on large scales so black body will be same in all directions with peak at same temperature
	- also know that it is perturbed and hence we should see deviations
	- variations have multiple different contribution
		- we have Stefan-Boltzmann law $\rho{}_{\gamma{}} = \sigma{} T^{4}{}$
			- we thus have $\delta{}T/T = (1/4)\delta{}\rho{}_{\gamma{}}/\rho{}_{\gamma{}}{}$
			- i.e. the more compressed it is the hotter it is
			- points of last scattering with higher density of radiation look hotter - *intrinsic term*
		- the protons or electrons releasing photons may have peculiar velocity $\underline{v}_{B}{}$
			- this gives a Doppler shift to the photons $T' = T(1-\underline{v}_{B}\cdot{}\underline{\hat{n}}){}$
				- this means $\delta{}T/T = -\underline{v}_{B}\cdot{}\underline{\hat{n}}{}$
		- there is a gravitational effect (*Sachs-Wolfe* term)
			- if photons are caught in gravitational well on last scatter it is held back (gravitationally redshifted)
				- $\delta{}T/T = -\Phi{}{}$
		- as photon propagates towards us through empty space, spacetime warps and changes (*integrated sachs-wolfe* term)
			- blue or redshifted
				- according to $\delta{}T/T = -2 \int_{\eta{}_{*}}^{\eta{}_{0}}d \eta{} \dot{\Phi{}}{}$
		- bringing all together
$$
\boxed{\frac{\delta{}T}{T}[\underline{\hat{n}}] = \frac{1}{4}\delta{}[\eta{}_{*}, d_{*}\underline{\hat{n}}]-(\underline{v}_{B}\cdot{}\underline{\hat{n}})[\eta{}_{*}, d_{*}\underline{\hat{n}}]-\Phi{}[\eta{}_{*},d_{*}\underline{\hat{n}}]- 2\int_{\eta{}_{*}}^{\eta{}_{0}}d \eta{}' \dot{\Phi{}}[\eta{}',(\eta{}_{0}-\eta{}_{*})\underline{\hat{n}}]}
$$
- so a measurement of $\delta{}T/T{}$ is a snapshot of universe at $t_{*}{}$
	- related to quantities we know from large scale structures
	- use it to do 'archaeology' of universe
- ---
- what do we expect to see?
	- we already looked at how perturbations in radiation and baryons evolve in radiation era before recombination (remember they're tightly coupled)
	- on small scales there a series of acoustic oscillations
		- $\delta{}_{\gamma{}}\propto J_{2}(k \eta{}/\sqrt{ 3 }){}$
	- we also know $\underline{\nabla}\cdot{}\underline{v}= -\dot{\delta{}}{}$
		- $\underline{v}_{B}\cdot{}\underline{\hat{n}}\propto sun(k \eta{}/\sqrt{ 3 }){}$
	- so we should see an oscillatory pattern in $\delta{}T/T{}$
		- spacing of $k \eta{}_{*}/\sqrt{ 3 }{}$
	- during recombination as photons decouple from baryons they begin to propagate
		- move around a little and leak energy from high density regions to low density regions
		- net effect of reducing high density regions
			- smooth out perturbations
	- to analyse CMB we take a Fourier transform equivalent on surface of a sphere
	- work on basis of spherical harmonic functions
$$
\frac{\delta{}T}{T}[\underline{\hat{n}}] = \sum_{lm}a_{lm}Y_{lm}[\underline{\hat{n}}]
$$
	- and we may plot the power spectrum
$$
C_{l} = \frac{1}{2l+1}\sum_{m}|a_{lm}|^{2}
$$
![[Pasted image 20261104131618.png|523]]
# Related