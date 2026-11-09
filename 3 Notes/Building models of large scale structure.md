---
old: false
Tags:
  - w-ing
Index: 6
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# Building models of large scale structure

- we must define initial conditions
	- the seeds of structure
- then we must characterise how perturbations of different length scales evolve
- finally we must identify how we should characterise large scale structure today
- ---
- one set of possible starting conditions is the universe started as a quasi-chaotic initial state
	- thermal initial state smoothed out the large inhomogeneities
	- leaves a rise of fluctuations when they evolved to form structure
	- not a viable proposal unless we severely modify the nature of the universe
- we have a proposal that tends to smooth out the universe and that changes the causal structure of space-time
	- inflation takes place on microscopic patch of universe in thermal equilibrium
		- well within the Jeans wavelength at that time and expands it to macroscopic and cosmological proportions
	- inflation solves the problem of how to homogenise but also provides a mechanism for seeing structure
	- due to quantum nature of space-time and matter the universe is driven by quantum fluctuations on microscopic scales
	- a period of inflation will amplify and stretch these quantum fluctuations to macroscopic scales which will be many times larger than cosmological horizon
- form of initial conditions arising from inflation have a helpful feature
	- correspond to a *random field* which has a *scale invariant* gravitational potential
	- random field is a 3D function generated through some random process
		- not a surprise as source of fluctuations is a quantum process
		- there must be an element of randomness
	- our theory doesn't say if something will be in an exact spot
		- instead we talk how much more probable structures of certain sizes are compared to others
		- we talk about our density contrast, $\delta{}{}$, or gravitational potentials being a random field
			- from which we calculate statistical properties
- ---
- characterise random field in same way as any random process
$$
\langle \delta{}(\underline{x}) \rangle  = 0
$$
- characterise its variance in terms of a *correlation function* $\xi{}(r){}$
$$
\xi{}(|\underline{x}- \underline{x}'|)\equiv \langle \delta{}(\underline{x})\delta{}(\underline{x}') \rangle 
$$
	- alternatively we consider its *power spectrum*
$$
\boxed{P(k) \equiv \langle |\delta{}_{\underline{k}}|^{2} \rangle }
$$
- often useful to consider dimensionless version of power spectrum - *mass variance*
$$
\Delta{}^{2}(k) = \frac{k^{3}P(k)}{4\pi{}}
$$
	- this tells us how unevenly matter is distributed in the universe on a particular spatial scale
- what is meant by scale invariance?
$$
\Phi{}(R) = \frac{1}{V_{R}} \int_{V_{R}}d^{3}x \Phi{}(x)
$$
	- where $V_{R}{}$ is the volume of the ball
	- define the variance of $\Phi{}{}$ on scale to simply be
$$
\sigma{}_{R}^{2}(\Phi{}) = \langle \Phi{}^{2}(R) \rangle 
$$
	- here we defined the ensemble average i.e. over many possible configurations of $\Phi{}{}$
	- a scale invariant spectrum corresponds to variance independent of $R{}$
		- $\sigma{}_{R}^{2}(\Phi{})\propto \text{constant}{}$
	- we can relate $\sigma{}^{2}_{R}(\Phi{}){}$ to $\delta{}(t,\underline{k}){}$ through the Newton-Poisson equation
$$
\sigma{}_{R}^{2}(\Phi{})\propto \frac{k^{3}}{4\pi{}}\langle |\Phi{}(t,\underline{k})|^{2} \rangle \propto \frac{1}{k}\langle |\delta{}(t,\underline{k})|^{2} \rangle 
$$
- here $k=2\pi{}/R{}$
- if it is scale invariant then power spectrum of the density fluctuations at initial time $t_{i}{}$
	- $P_{i}(\underline{k})\equiv \langle |\delta{}(t_{i},\underline{k})|^{2} \rangle{}$ takes form
		- $P_{i}(k)\propto k{}$
- in practice choosing scale invariant initial conditions for the density field corresponds to picking amplitude of density field to be given by $|\delta{}(t,\underline{k})|\propto k^{1/2}{}$
- ---
- having chosen a set of initial conditions we predict large scale structure of universe for different sets of assumptions
- we try this for three model universes
	- a universe solely made of baryons and known as Baryonic Dark Matter (BDM)
	- a universe which also contains pressureless dark matter known as Cold Dark Matter (CDM)
	- a universe where matter is dominated by massive neutrinos and is known as Hot Dark Matter (HDM)
![[Pasted image 20261102101735.png|588]]

## A Baryonic Dark Matter Universe

- want to predict distribution of matter in universe today
	- assuming universe contains baryons, photons, $\Lambda{}{}$ but no non-baryonic matter
		- $\Omega{}_{B}h^{2}\simeq 0.024{}$ thus fractional energy density must be around $5\%{}$ and $\Omega{}_{\Lambda{}} =0.95{}$
	- want to predict matter power spectrum $P(k)= \langle |\delta{}_{k}|^{2} \rangle{}$
- inflation gives us an initial spectrum
$$
P_{i}(k)\propto k
$$
- perturbations on different scales grow differently
	- large scale perturbations corresponding to small $k{}$ - perturbation A
	- small scale perturbations corresponding to large $k{}$ - perturbation B
- initially both are outside sound horizon $r_{s}(\eta{})\simeq c\eta{}/\sqrt{ 3 }{}$
	- during radiation dominated era perturbations outside the sound horizon grow with $\delta{}_{k}\propto \eta{}^{2}{}$
	- the importance of this boundary is it determines if a photon pressure can affect a density perturbation across its entire scale
- the sound horizon grows with time
	- eventually it becomes comparable to perturbation B - *sound-horizon entry*
		- $\eta{}_{\text{entry}}\sim \sqrt{ 3 }/kc{}$
- after perturbation B enters sound horizon
	- baryonic nature becomes important
	- before recombination photons and baryons are tightly coupled
		- gravity tries to compress overdense, photon pressure resists
			- leads to oscillation
$$
\delta{}_{k}\propto\cos \left( \frac{kc\eta{}}{\sqrt{ 3 }} \right)
$$
- before entry growing mode went as $\delta{}\propto \eta{}^{2}{}$
	- so perturbation B has stopped gaining amplitude from gravitational growth
- at this point perturbation B stopped growing while A continues to grow
- we consider the conformal time $\eta{}_{\text{eq}}{}$ where $\rho{}_{m}=\rho{}_{r}{}$ (approximately $z_{*} = 3300{}$)
	- by this point perturbation A has remained outside sound horizon and continued growing
	- perturbation B has been oscillating
![[Pasted image 20261102134140.png|626]]\
- at around $z_{*}=1100{}$ recombination occurs
	- electrons and protons combine to form neutral atoms
	- photons decouple from baryons
	- photon pressure no longer prevents barons from clustering gravitationally
	- baryonic perturbations can grow as $\delta{}_{k}\propto a{}$
- small scale perturbations begin gravitational growth with amplitudes already suppressed
- eventually $\Lambda{}{}$ dominates and further linear growth is strongly suppressed
	- going to calculate mass variance at this late stage
- ---
- suppose perturbation enters sound horizon at conformal time $\eta{}_{\text{entry}}{}$
	- before entry it grows as $\delta{}_{k}\propto \eta{}^{2}{}$
	- after entry growth is suppressed
	- the amount of growth it achieves before entry is proportional to $\eta{}^{2}_{\text{entry}}{}$
		- however we know $kc\eta{}_{\text{entry}}=\sqrt{ 3 }{}$ thus $\eta{}_{\text{entry}}\propto k^{-1}{}$
			- relative suppression factor is thus $T(k) = \delta{}_{\text{suppressed}}/\delta{}_{\text{unsuppressed}}{}\sim [\delta{}_{i}(k)(\eta{}_{\text{entry}}/\eta{}_{i})^{2}]/[\delta{}_{i}(k)(\eta{}_{\text{eq}}/\eta{}_{i})^{2}]\sim (\eta{}_{\text{entry}}/\eta{}_{\text{eq}})^{2}$
			- $\eta{}_{\text{eq}}{}$ is constant for each suppression hence
$$
T(k)\propto \eta{}_{\text{entry}}^{2}\propto k^{-2}
$$
- how does this change the power spectrum?
	- initial power spectrum we said was $P_{i}(k)\propto k{}$
	- evolved power spectrum is given by
$$
P(k) = T^{2}(k)P_{i}(k)
$$
	- thus for large scales we maintain
$$
\boxed{\text{Large Scales: }P(k)\propto k}
$$
	- for small scales we find
$$
\boxed{\text{Small Scales: }P(k)\propto k^{-3}}
$$
---
- starting with the dimensional mass variance $\delta{}^{2}(k) = k^{3}P(k)/(4\pi{}){}$
	- so for large scales we simply have $P(k)\propto k{}$ throughout thus $\Delta{}^{2}(k)\propto k^{4}{}$
	- for small scales we would think using $P(k)\propto k^{-3}{}$ thus $\Delta{}^{2}(k)\propto \text{constant}{}$
		- small-scale mass variance has approximately flat envelope
	- before recombination we have to take into account oscillations thus $\delta{}_{k}(\eta{})\propto \cos (kc\eta{}/\sqrt{ 3 }){}$ ([[The Evolution of Large Scale Structure]])
		- thus the transfer function becomes $T(k)\propto k^{-2}\cos(kc\eta{}_{\text{eq}}/\sqrt{ 3 }){}$ at $\eta{}_{\text{eq}}{}$
$$
P(k)\propto k^{-3}\cos^{2}\left( \frac{kc\eta{}_{\text{eq}}}{\sqrt{ 3 }} \right) \to{} \Delta{}^{2}(k)\propto\cos^{2}\left( \frac{kc\eta{}_{\text{eq}}}{\sqrt{ 3 }} \right)
$$
	- we then must take into account silk damping ([[The Evolution of Large Scale Structure]])
		- we approximate suppression of density amplitude due to photon diffusing out of overdense regions with Gaussian damping $D(k)\propto \exp[-(k/k_{S})^{2}]{}{}$
			- thus ${}T(k)\propto \exp[-(k/k_{S})^{2}]$
- finally we arrive at
$$
\begin{align}
\boxed{\Delta{}^{2}(k)\propto k^{4}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}\text{ }\text{if }kc\eta{}_{\text{eq}}/\sqrt{ 3 }<1 \\
\Delta{}^{2}(k)\propto \cos^{2}[kc\eta{}_{\text{eq}}/\sqrt{ 3 }]\times \exp[-2(k/k_{S})^{2}]\quad{}\text{if }kc\eta{}_{\text{eq}}/\sqrt{ 3 }>1}
\end{align}
$$
- if somehow we underestimated density of baryons and actually $\Omega{}_{B} = 0.25{}$ then we call BDM and
![[Pasted image 20261103154132.png|447]]
- we see transition from increasing power spectrum $P(k)\propto k{}$ for large scales and $P(k) \propto k^{-3}{}$ on small
	- peak around $k \sim k_{\text{eq}} = \sqrt{ 3 }/(c\eta{}_{\text{eq}}){}$

## A Cold Dark Matter Universe

- once again we have radiation baryons and $\Lambda{}{}$
	- but now a component of pressureless, non-relativistic matter that does not interact with the radiation
	- call this the cold dark matter scenario (CDM)
	- on large scales ($k c\eta{} \ll 1{}$ for all times before equality between radiation and matter) density contrast grows as $\eta{}^{2}{}$ until; $\Lambda{}{}$ domination
		- using ${}$$kc \eta{}_{eq} =1{}$ (particle horizon) not $\sqrt{ 3 }{}$ (sound horizon)
			- cold dark matter does not experience oscillations
				- but its gravitational growth is still affected by radiation dominated universe
	- for smaller scales that cross this threshold ($k c\eta_{eq}> 1{}$) density contrast will have evolution suppressed to logarithmic growth
		- this lasts between wavelength of perturbation that has same size as particle horizon and transition from radiation to matter domination
- rough estimate of mass variance is
$$
\begin{align}
\boxed{\Delta{}^{2}(k)\propto k^{4}\quad{}\quad{} \quad{}\text{ if }k \eta_{\text{eq}}< 1
 \\
\Delta{}^{2}(k)\propto (\ln(k))^{2}\quad{}\text{if }k \eta{})_{\text{eq}}>1}
\end{align}

$$
## A Hot Dark Matter Universe

- another simple model to consider
	- replace the pressureless matter in CDM with massive neutrinos
- we know neutrinos exist and tentative evidence they have mass
	- they will not evolve as a fluid and will free stream while relativistic
- neutrinos are weakly interacting, dark (don't interact with light) and move relativistically (hot)
	- thus called Hot Dark Matter scenario
$$
\boxed{\Delta{}^{2}(k)\propto k^{4}\exp(-k\lambda{}_{\text{FS}})}
$$



# Related

- [[The Evolution of Large Scale Structure]]