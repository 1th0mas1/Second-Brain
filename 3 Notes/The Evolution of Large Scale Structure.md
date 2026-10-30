---
old: false
Tags:
  - w-ing
Index: 5
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# The Evolution of Large Scale Structure

- let us look back at equation from [[Newtonian Evolution of Cosmological Perturbations]]
$$
\delta{}_{k}'' + \mathcal{H}\delta{}_{k}'+(c_{s}^{2}k^{2}-4\pi{}Ga^{2}\bar{\rho{}})\delta{}_{k}=0
$$
- we can identify some features of evolution of $\delta{}_{k}{}$ without solving
	- it is equation of a damped harmonic oscillator with time dependent damping coefficient and spring constant
	- damping is due to the expansion of the universe and will tend to suppress growth
	- spring constant changes signs based on if $k{}$ is large or not
- define the *physical* wavelength (also known as *Jeans wavelength*)
$$
\boxed{\lambda{}_{J}= \frac{2\pi{}}{k_{J}} = c_{s}\sqrt{ \frac{\pi{}}{G\bar{\rho{}}} }}
$$
	- this defines the transition between these two behaviours
		- for $\lambda{}> \lambda{}_{J}{}$ gravitational collapse dominates and perturbations grow
		- for $\lambda{}<\lambda{}_{j}{}$ pressure wins and perturbations do not grow
- we note that $c_{s}^{2}\sim k_{B}T/m{}$ we can thus rewrite Jeans length $\lambda{}_{J} = \sqrt{ \pi{}k_{B}T/(Gm\bar{\rho{}}) }{}$
	- clear that a system that is hot and/or made up of light particles has large $\lambda{}_{J}{}$ and vice versa
- we will apply perturbations to matter density for structures so $\bar{\rho{}}\to{} \bar{\rho{}}_{M}{}$
---
- we now change equations for multi-component
	- matter: $\bar{\rho{}}_{M}{}$, $\delta{}_{M}{}$
	- radiation: $\bar{\rho{}}_{\gamma{}}{}$, $\delta{}_{\gamma{}}{}$
- for each component $i{}$ its density contrast is
$$
\delta{}_{i} \equiv \frac{\delta{}\rho{}_{i}}{\bar{\rho{}}_{i}}
$$
- in two domains:
	- matter dominated: $\bar{\rho{}}_{\text{tot}}\simeq \bar{\rho{}}_{M}{}$
	- radiation domination: $\bar{\rho{}}_{\text{tot}}\simeq \bar{\rho{}}_{\gamma{}}{}$
	- these statements contain average densities not what component's perturbation is being followed
- at linear order the total density perturbation is given by
$$
\delta{}\rho{}_{\text{tot}} = \bar{\rho{}}_{M} \delta{}_{M}+ \bar{\rho{}}_{\gamma{}}\delta{}_{\gamma{}}
$$
- gravitation potential can receive contributions from both components weighted by background densities
---
- when we consider $\delta{}_{k}'' + \mathcal{H}\delta{}_{k}' + (c_{s}^{2}k^{2}-4\pi{}Ga^{2}\bar{\rho{}})\delta{}_{k}=0{}$ we have terms with distinct roles:
	- $\mathcal{H}\delta{}_{k}'{}$: expansion damps the evolution
	- $c_{s}^{2}k^{2}\delta{}_{k}{}$: pressure resists compression and supports sound waves
	- $-4\pi{} G a^{2}\bar{\rho{}}\delta{}_{k}{}$: the fluid's own gravity encourages collapse
- so for a pressureless single fluid $c_{s}\simeq 0 {}$ and a multi_component universe the gravitational source can have other components
$$
\delta{}_{M,k}''+\mathcal{H}\delta{}_{M,k}' - 4\pi{}Ga^{2}\bar{\rho{}}_{M}\delta{}_{M,k}= S_{\gamma{}\to{}M,k}
$$
	- here $S_{\gamma{}\to{}M,k}{}$ is gravitational forcing on matter due to radiation

## Pressureless Fluid in the Matter Dominated Era

- here we have $c_{s}^{2}\simeq 0 {}$ and thus $\lambda{} \gg \lambda{}_{J}{}$
	- we thus discard the term which depends on pressure
- further restrict to matter dominated such that $\bar{\rho{}}\simeq \bar{\rho{}}_{M}{}$
	- $\Omega{}_{M}[\eta]=1{}$
	- $\bar{\rho{}}_{M} [\eta]= \rho{}_{c}[\eta] = 3\mathcal{H}^{2}[\eta]/(8\pi{}a^{2}G){}$
- equation thus simplifies to
$$
\delta{}_{M,k}'' + \mathcal{ H}\delta{}_{M,k}' - \frac{3}{2} \mathcal{H}^{2}\delta{}_{M,k} = 0
$$
- this equation yields results
	- $a \propto \eta^{2}{}$
		- $\mathcal{H} = 2/\eta{}$
	- $\delta{}_{k}\propto \eta^{\alpha{}}{}$ yields
$$
\boxed{\delta{}_{M,k} =C_{1}\eta^{2}+C_{2}\eta^{-3}}
$$
-  we may rewrite as a function of the expansion factor $\delta{}_{k}= c_{1}a + c_{2}a^{-3/2}{}$
	- as $a{}$ increases with time as universe expands, we deduce the second term decays and becomes sub dominant quickly
	- left with first term which continues to grow under the effect of gravity is called the *growing mode*
	- we may have done this with 'normal' time giving $\delta{} = c_{1}' t^{2/3} + c_{2}' t^{-1}{}$ which are growing and decaying mode respectively

## Pressureless Matter in the $\Lambda{}{}$ Dominated Era

- we still have $c_{s}^{2}\simeq 0 {}$ and $\lambda{} \gg \lambda{}_{J}{}$
- now the universe is $\Lambda{}{}$ dominated we say $\bar{\rho{}}\simeq \bar{\rho{}}_{V}{}$
	- $\Omega{}_{V}[\eta]=1{}$ 
	- $\bar{\rho{}}_{V} = \rho{}_{c}[\eta] = 3\mathcal{H}^{2}[\eta]/(8\pi{}a^{2}G){}$
	- by definition there exists no fluctuation in cosmological constant which could source perturbations in gravitational potential
$$
\delta{}_{M,k}''+\mathcal{H}\delta{}_{M,k}' - 4\pi{} Ga^{2} \bar{\rho{}}_{M}\delta{}_{M,k}= \delta{}_{M,k}''+\mathcal{H}\delta{}_{M,k}'\underbrace{-\frac{3}{2}\mathcal{H}^{2}\frac{\bar{\rho{}}_{M}}{\bar{\rho{}}_{V}}\delta{}_{M,k}}_{=0}=0
$$
- final term is zero as pressureless fluid is not driving the expansion of the background universe such $\bar{\rho{}}_{M}\ll \bar{\rho{}}_{V}\simeq \bar{\rho{}}{}$
- this yields
	- $a \propto 1/\eta{}$
		- $\mathcal{H}=-1/\eta{}$
$$
\delta{}_{M,k}= C_{1}+C_{2}\eta^{2}
$$
- writing again in terms of $a{}$ we get
	- $\delta{}_{M,k} = c_{1}+c_{2}a^{-2}{}$
	- second term decays and becomes subdominant
	- if we used $t{}$ instead of $\eta{}$
$$
\delta{}_{M,k}= c_{1}' + c_{2}'\exp\left( -2\sqrt{ \frac{\Lambda{}}{3} }t \right)
$$

## Relativistic Fluid in the Radiation Dominated Era

- **now we look at radiation perturbations**
- radiation behaves as a gravitating fluid with pressure $\bar{P}= \frac{1}{3}\bar{\rho{}}c^{2}{}$
	- the adiabatic speed of sound is $c_{s}= \frac{1}{\sqrt{ 3 }}c{}$
- in radiation dominated era we have $\bar{\rho{}}\simeq \bar{\rho{}}_{\gamma{}}{}$
	- in conformal coordinates $\Omega{}_{\gamma{}}[\eta{}]= 1 {}$
		- $\bar{\rho{}}_{\gamma{}}[\eta{}] = \rho{}_{c}[\eta{}] = \frac{3\mathcal{H}^{2}}{8\pi{}a^{2}G}{}$
	- this yields $a \propto \eta{}{}$
	- $\mathcal{H} = 1/\eta{}{}$
- we can use $\mathcal{H}^{2} = \frac{8\pi{} Ga^{2}}{3}\bar{\rho{}}{}$ and $\mathcal{H}' = - \frac{4\pi{}Ga^{2}}{3}\left( \bar{\rho{}}+ 3 \frac{\bar{P}}{c^{2}} \right){}$
	- this yields $\mathcal{H}^{2} = - \mathcal{H}' = 1/\eta{}^{2}{}$
- consider again Einstein field equation ([[Relativistic Cosmological Perturbation Theory]])
$$
\Phi{}''+3\mathcal{H}\Phi{}'+(2\mathcal{H}'+\mathcal{H}^{2})\Phi{} -4\pi{}Ga^{2}\bar{\rho{}}\delta{} c_{s}^{2}=0
$$
- we can rewrite the relativistic Poisson equation as
$$
4\pi{}Ga^{2}\bar{\rho{}}_{\gamma{}} \delta{}_{\gamma{}}= \nabla^{2} \Phi{} - 3 \frac{\mathcal{H}}{c^{2}}(\mathcal{H}\Phi{} + \Phi{}')
$$
- we then use $\mathcal{H}^{2} = - \mathcal{H}'{}$ and Fourier transform to see
$$
\Phi{}_{k}'' + 4\mathcal{H}\Phi{}_{k}' + c_{s}^{2}k^{2}\Phi{}_{k}= 0
$$
- finally using the expansion factor scaling with conformal time we can simplify further as
$$
\Phi{}_{k}'' + \frac{4}{\eta{}}\Phi{}_{k}' + \frac{c^{2}k^{2}}{3}\Phi{}_{k}=0
$$
- the solution of this differential equation is
$$
\Phi{}_{k} = A_{1}\frac{\sqrt{ 3 }}{kc\eta{}}j_{1}\left[ \frac{kc\eta{}}{\sqrt{ 3 }} \right]+A_{2} \frac{\sqrt{ 3 }}{kc\eta{}}y_{1}\left[ \frac{kc\eta{}}{\sqrt{ 3 }} \right]
$$
	- here we use spherical bessel functions
		- $j_{1}[x]=\sin[x]/x^{2}-\cos[x]/x{}$
		- $y_{1}[x] = - \cos[x]/x^{2}-\sin[x]/x{}$
	- consider early times $\eta \to{} 0{}$ we deduce that $A_{2}= 0{}$ otherwise potential would blow up
	- contrary to if we followed modified Newtonian road this solution is valid for any wavenumber $k{}$ even corresponding to super-horizon wavelengths
	- if we only consider sub-horizon models ($kx\eta{}\gg1{}$) then we get
$$
\Phi{}_{k} \simeq - \frac{3A_{1}}{(kc\eta{})^{2}}\cos \left[ \frac{kc\eta{}}{\sqrt{ 3 }} \right]
$$
- we return to Poisson equation to find
$$
\delta{}_{\gamma{},k} = \frac{2}{3\mathcal{H}^{2}}\left( -k^{2}\Phi{}_{k} - 3 \frac{\mathcal{H}}{c^{2}}(\mathcal{H}\Phi{}_{k}+\Phi{}_{k}') \right) = - \left( \frac{2}{3}k^{2}\eta{}^{2}+\frac{2}{c^{2}} \right) \Phi{}_{k} - \frac{2\eta{}}{c^{2}}\Phi{}_{k}'
$$
- for sub-horizon energy density perturbations we see first RHS term dominates
$$
\boxed{\delta{}_{\gamma{},k}\simeq - \frac{2}{3}k^{2}\eta{}^{2}\Phi{}_{k} = \frac{2A_{1}}{c^{2}}\cos \left[ \frac{kc\eta{}}{\sqrt{ 3 }} \right] }
$$
	- sub-horizon energy density perturbations in relativistic fluid oscillate around $\delta{}_{k} = 0{}$ at a frequency $kc/\sqrt{ 3 }{}$ with constant amplitude
- for super-horizon we can find both $\Phi{}_{k}{}$ and $\delta{}_{k}{}$ are constant (counterintuitive)

## Pressureless Matter in the Radiation Dominated Era

- now we can look at what happens to sub-dominant pressureless matter perturbations ($c_{s}^{2}\simeq 0 {}$) in radiation dominated era
	- just as we did for $\Lambda{}{}$ dominated
- consider cold dark matter density fluctuations during the radiation dominated era
	- they are decoupled from the baryon + radiation fluid
- the pressureless matter will:
	- play sub-dominant role the expansion of the universe ie $\bar{\rho{}}_{\gamma{}}[\eta{}]\simeq \bar{\rho{}}_{c}= 3\mathcal{H}^{2}[\eta{}]/(8\pi{}a^{2}G){}$
	- make a negligible contribution to the Poisson equation (neglect self-gravity)
$$
\nabla^{2}\Phi{} = 4\pi{}G(\bar{\rho{}}_{\gamma{}}\delta{}_{\gamma{}}+\bar{\rho{}}_{M}\delta{}_{M}) 4 \pi{} G \bar{\rho{}}_{\gamma{}}\left( \delta{}_{\gamma{}} + \underbrace{\frac{\bar{\rho{}}_{M}}{\bar{\rho{}}_{\gamma{}}}\delta{}_{M}}_{=0} \right) \simeq 4\pi{}G\bar{\rho{}}_{\gamma{}} \delta{}_{\gamma{}} 
$$
- we already know that the evolution of $\delta{}_{\gamma{}}{}$ oscillates about zero on sub-horizon scales so using $S_{\gamma{}\to{}M,k}\propto \bar{\rho{}}_{\gamma{}} \delta{}_{\gamma{},k}\to{} 0{}$
	- time averaged amplitude $\langle \delta{}_{k,\gamma{}} \rangle_{\eta{}}=0{}$ thus we simplify 
$$
\delta{}_{M,k}'' + \mathcal{ H}\delta{}_{M,k}' = \delta{}_{M,k}'' + \frac{1}{ \eta{}}\delta{}_{M,k}' = 0
$$
- this has solution
$$
\boxed{\delta{}_{M,k} = C_{1}\ln \eta{} + C_{2}}
$$
- interest that even though $\delta{}_{\gamma{},k}{}$ do not grow in dominant term, but the sub-dominant pressureless matter component does

## Damping of Cosmological Perturbations

### The Boltzmann Equation

- how do we treat matter distribution without assuming it to be a fluid
	- consider the phase space distribution function $f(\underline{x},\underline{p}){}$ where $\underline{x}{}$ is position and $\underline{p}{}$ is the momentum of individual particles
	- evolution of $f{}$ is described by Boltzmann equation
$$
\left( \frac{ \partial  }{ \partial t } + \frac{ \partial \underline{x} }{ \partial t } \cdot{} \underline{\nabla}_{\underline{x}} + \frac{ \partial \underline{p} }{ \partial t } \cdot{}\underline{\nabla}_{\underline{p}} \right) f = \mathcal{Q}(f)
$$
- its general relativistic generalisation writes
$$
\left( p^{\alpha{}}\frac{ \partial  }{ \partial x^{\alpha{}} } -\Gamma{}^{\alpha{}}_{\mu{}\nu{}}p^{\mu{}}p^{\nu{}}\frac{ \partial  }{ \partial p^{\alpha{}} }  \right) f= \left( \frac{ \partial f }{ \partial t }  \right) _{\text{coll}}
$$

### Damping During Recombination

- recombination is when early universe cooled enough for free electrons to join atomic nuclei to form atoms
	- before recombination photons and charged particles are tightly coupled together
		- mean free path of the photons is negligible and this radiation and baryon combination can be treated as a single relativistic fluid
	- as universe expands density and temperature of fluid drop, photons end up with not enough energy to prevent protons from capturing free electrons to form neutral hydrogen
- mean free path is given by $\lambda{}_{\text{mfp}}\approx{}1/(\sigma{}_{T}n_{e}){}$
	- $n_{e}{}$ is number density of free electrons
	- $\sigma{}_{T}{}$ the Thompson scattering cross-section
- as universe recombines (around $z_{*} \simeq 1100{}$):
	- $n_{e}{}$ plummets over a redshift change of $\Delta{}z \simeq 80{}$
		- photons and electrons aren't perfectly coupled at that time the photons will be able to randomly walk out of over densities as they scatter off free electrons
			- in doing so they drag matter from overdense to underdense regions and therefore damp out perturbations on scales smaller than characterised random walk scale
- we can derive approximately
	- consider a photon that suffers $N = c\Delta{}t/\lambda{}_{\text{mfp}}[t]{}$ collisions during recombination
	- between two collisions it travels coming distance $\lambda{}_{\text{mfp}}/a[t]{}$
	- this is a random walk so the photon acquires mean squared comoving displacement $(\Delta{}x)^{2} = N(\lambda{}_{\text{mfp}}/a)^{2}{}=c\lambda{}_{\text{mfp}}[t]\Delta{} t/a^{2}[t]$
		- the total mean square comoving distance it travels until time of decoupling is
$$
x^{2} \equiv \int_{0}^{t_{*}} \frac{ cdt}{\sigma{}_{T}n_{e}[t]a^{2}[t]} = \int_{0}^{\eta{}_{*}} \frac{c d \eta{}}{\sigma{}_{T}n_{e}[\eta{}]a[\eta{}]} = \frac{c \eta{}_{*}}{5\sigma{}_{T}n_{e}[\eta{}_{*}]a[\eta{}_{*}]}
$$
- we use fact that recombination occurs during the matter dominated epoch
	- such that $a[\eta{}]=  a[\eta{}_{*}](\eta{}/\eta{}_{*})^{2}{}$ and $n_{e}[\eta{}] = n_{e}[\eta{}_{*}](a[\eta{}]/a[\eta{}_{*}])^{-3} = n_{e}[\eta{}_{*}](\eta{}/\eta{}_{*})^{-6}{}$
	- this yields a comoving silk damping scale
$$
\lambda{}_{S}^{c}\equiv x = \sqrt{ \frac{c\eta{}_{*}}{5a[\eta{}_{*}]\sigma{}_{T}n_{e}[\eta{}_{*}]} }
$$
- we use $c\eta{}_{*} =262 \text{ Mpc}{}$, $a[\eta{}_{*}]\simeq 1/1101 = 9.08 \times 10^{-4}{}$, $\sigma{}_{T}= 6.65 \times 10^{-25}\text{ cm}^{2}{}$ and $n_{e}[\eta{}_{*}]\simeq 332 \text{ cm}^{-3}{}$ yields
	- $\lambda{}_{S}^{c}\simeq 9.2 \text{ Mpc}{}$
		- fluctuation below this scale will be washed away

### Massive Neutrinos During Any Era

- neutrinos can't be described as a fluid
	- they interact weakly with each other and so evolution must be studied by boltzmann equation
	- as for silk damping it is possible to derive an approximation of their effect
- on very large scales $> R_{h}(t_{\text{eq}}) {}$ 





# Related
