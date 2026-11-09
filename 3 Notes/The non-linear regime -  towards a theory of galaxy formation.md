---
old: false
Tags:
  - w-ing
Index: 7
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# The non-linear regime -  towards a theory of galaxy formation

- in [[Building models of large scale structure]] we modelled galaxies as ensemble of mathematical point masses which trace underlying continuous density field
- using the perturbative framework we can go a step further and derive one point statistics of collapsed dark mater structures hosting galaxies or galaxies themselves
	- i.e. the mass function and its time evolution

## Growth of an isolated 'top hat' dark matter density perturbation

- we consider Einstein-de Sitter universe (but applicable to most general cases)
	- $\Omega{}_{M}[z]= 1{}$, $\Omega{}_{V}[z]=0{}$, $\Omega{}_{\gamma{}}[z]=0{}$, $\Omega{}_{K}[z]=0{}$
	- purely practical choices
		- all integrals have explicit closed analytical forms in this universe
		- the universe seems to have been matter dominated most of its lifetime
- consider small perturbation of radius $r_{i}{}$ in otherwise homogeneous dark matter density field at early time $t_{i}{}{}$
	- assume it has peculiar velocity $\underline{v}_{i}=\underline{0}{}$
		- perturbation exactly follows from expansion of universe at $t_{i}{}$
	- density contrast is $\delta{}_{i} = (\rho{}[t_{i}]-\bar{\rho{}}_{M}[t_{i}])/\bar{\rho{}}_{M}[t_{i}]\ll 1{}$
		- from [[The Evolution of Large Scale Structure]] we know the growing mode $\delta{} \propto a{}$
		- we can express the density contrast of perturbation as function of redshift
$$
\delta{}[z] = \frac{3}{5}\frac{1+z_{i}}{1+z} \delta{}_{i}
$$
- use it to define *linearly extrapolated density contrast* $\delta{}_{0}\equiv (3/5)(1+z_{i})\delta{}_{i}{}$
	- contrast our perturbation would have today ($z=0{}$)
	- allows us to use present time as common origin instead of different initial times
- use newtonian equation of motion to track spherically symmetric homogeneous top hat perturbation evolution
	- $r_{b}{}$ is radius of background (unperturbed sphere) while $r{}$ is the perturbed sphere radius
$$
\begin{align}
\frac{d^{2}r_{b}[t]}{dt^{2}}  & = -\frac{4\pi{}G\bar{\rho{}}_{M}[t_{i}]r_{i}^{3}}{3r_{b}^{2}[t]} \\
\frac{d^{2}r[t]}{dt^{2}} & = - \frac{4\pi{}G\bar{\rho{}}_{M}[t_{i}](1+\delta{}_{i})r_{i}^{3}}{3r^{2}[t]}
\end{align}
$$
- where both unperturbed and perturbed have same initial radius $r_{i} = r[t_{i}] = r_{b,i} = r_{b}[t_{i}]{}$
	- but different perturbed mass
- we can multiply by $\dot{r}_{b}{}$ and $\dot{r}{}$ respectively and integrate to find
$$
\begin{align}
\frac{\dot{r}_{b}^{2}[t]}{2} - \frac{4\pi{}G\bar{\rho{}}_{M}[t_{i}]r_{i}^{3}}  {3r_{b}[t]} & = E_{b} \\
\frac{\dot{r}^{2}[t]}{2} - \frac{4\pi{}G\bar{\rho{}}_{M}[t_{i}](1+\delta{}_{i})r_{i}^{3}}  {3r[t]} & = E_{p}
\end{align}
$$

- without loss of generality set $E_{b}=0{}$
	- use initial conditions $r[t_{i}] =r_{b}[t_{i}]{}$ and $\dot{r}[t_{i}]=\dot{r}_{b}[t_{i}]{}$ to see $E_{p} = -4\pi{}G\bar{\rho{}}_{M}[t_{i}]\delta{}_{i}r_{i}^{2}/3{}$
	- we can thus rewrite our equation as
$$
\dot{r}[t] = \sqrt{ \Omega{}_{M}[z_{i}]H^{2}[z_{i}]r_{i}^{2}\left[ (1+\delta{}_{i})\frac{r_{i}}{r[t]}-\delta{}_{i} \right]  }
$$
- we elected to only define $\Omega{}_{M}{}$ and $H{}$ for the homogeneous
	- $\dot{r}_{i}/r_{i}= H[z_{i}]=H_{0}(1+z_{i})^{3/2}{}$ 
		- last equality being valid EdS universe
- in such a universe overdensity bound as background density is already critical
	- i.e. that which divides open and closed universes
	- expansion of initially slightly overdense perturbation becomes slower and slower with respect to homogeneous background
		- at time $t_{\text{max}}{}$ it reaches radius of maximum expansion $r_{\text{max}}{}$
			- called the *turb around radius* where $\dot{r}[t_{\text{max}}]=0{}$
		- we find that
$$
r_{\text{max}} = \frac{1+\delta{}_{i}}{\delta{}_{i}}r_{i}
$$
- if we separate variables $t{}$ and $r{}$ and integrating after setting $u = \sqrt{ r/r_{i} }{}$ and $\Omega{}_{M}[z_{i}]=\Omega{}_{M}[0]=1{}$
$$
\begin{align}
\int_{t_{i}}^{t_{\text{max}}} dt  & = \frac{1}{H_{0}(1+z_{i})^{3/2}}\int_{1}^{\sqrt{ r_{\text{max}}/r_{i} }}\frac{2u^{2}du}{\sqrt{ 1+\delta{}_{i} - \delta{}_{i}u^{2} }} \\
t_{\text{max}}  & = t_{i} + \frac{1}{H_{0}(1+z_{i})^{3/2}}\left\{ \frac{r_{\text{max}}}{r_{i}} - 1 + \frac{r_{\text{max}}}{r_{i}}\sqrt{ \frac{r_{\text{max}}}{r_{i}}-1 }\left( \frac{\pi{}}{2} - \arcsin \sqrt{ \frac{r_{\text{max}}}{r_{i}} } \right)  \right\} 
\end{align}
$$
- we know that $r_{\text{max}}/r_{i}{}\gg1$ and $t_{\text{max}}/t_{i}\gg1{}$
	- we can replace $r_{\text{max}}{}$ but its expression as a function of $\delta{}_{i}{}$ and $r_{i}{}$
	- using the definition of $\delta{}_{0}{}$ we find
$$
t_{\text{max}}\simeq \frac{\pi{}}{2H_{0}}\left( \frac{3}{5\delta{}_{0}} \right) ^{3/2}
$$
- now the perturbation will collapse to a point in time $t_{\text{coll}}\simeq 2t_{\text{max}}{}$
	- this time of collapse will correspond to a redshift of collapse $z_{\text{coll}}{}$ defined by
$$
t_{\text{coll}} = \frac{2}{3H_{0}}\frac{1}{(1+z_{\text{coll}})^{3/2}}
$$
- we can equate two expressions to find *linearly extrapolated density contrast* that a perturbation must have in order to collapse **exactly** at $z_{\text{coll}}{}$
	- i.e. the critical initial density contrast extrapolated to today
$$
\boxed{\delta{}_{0,c}[1+z_{\text{coll}}]= \frac{3(12\pi{})^{2/3}}{20}(1+z_{\text{coll}})}
$$

---
- for exactly homogeneous perturbation density becomes ifinite at center at $z_{\text{coll}}{}$ as arrives at same time
	- not a very good model of dark matter halo collapse
	- in reality due no fluctuations are exactly homogeneous
		- 'sub-halos' will collapse first and merge together
			- form a bigger hallo called 'violent relaxation'
			- dark matter particles end up populating avaliable phase space equiproably and the stationary state is most probable
	- in case where only mass and total energy conserved
		- final density progile proportional to $r^{-2}{}$ called *isothermal sphere profile*
		- the *virial radius* (estimate of size of gravitationally bound, settles dark matter halo) is $r_{\text{vir}}\approx{}0.5r_{\text{max}}{}$
		- the final density of halo at $z_{\text{coll}}{}$ is $\delta{}_{h}=18\pi{}^{2}{}$
			- this scenario and numbers are corroborated by numberical modelling using N-body simulations

## The mass function of virialised dark matter halos

- we calculated for an isolated perturbation
	- we can wonder how these halos are distributed in mass
	- how this mass function evolves over time
- return to initial density fluctuations constituting gaussian random field
	- consider field in Fourier space $\delta{}[\underline{k}]{}$
	- we have freedom to rewrite as $\delta{}[V]{}$
		- in terms of variance $V= \sigma{}_{0}^{2}[M]{}$ at mass scale M
		- universe assumed to be smooth on large scales $\lim_{ M \to \infty }V =0{}$
		- as we reduce smoothing scale (increase $\underline{k}_{V}{}$) (averaging density over smaller regions)
			- such that $\langle |\delta{}[V]|^{2} \rangle = V{}$ by definition of variance
			- net result is a 'top hat' in Fourier space
$$
W_{k} = \begin{cases}
1 & \text{if }k\leq k_{V} \\
0 & \text{if }k> k_{V} 
\end{cases}
$$
- $\delta{}[V]{}$ performs random walk
	- when $V[k_{V}]{}$ increases it's from different shell of Fourier modes
		- increment to $\delta{}[V]{}$ not related to previous increment
	- thus the trajectories of $\delta{}[V]{}$ follow simple diffusion equation
$$
\frac{ \partial D }{ \partial V }  = \frac{1}{2}\frac{ \partial ^2D }{ \partial \delta{}^{2} } 
$$
	- here $D[\delta{},V]{}$ is number of trajectories in $[\delta{},\delta{}+\partial{}\delta{}]{}$ at pseudo-'time' $V{}$
	- to compute number of virialized halos of given mass at time $t{}$
		- need a barrier to absorb trajectories at $\delta{}_{0,c}[t]{}$
			- when trajectory reaches this threshold the model identifies a region that collapses into halo (absorbed)
$$
D[\delta{},V,\delta{}_{0,c}[t]]d\delta{} = \frac{1}{\sqrt{ 2\pi{} V }}\left( \exp\left[ -\frac{\delta{}^{2}}{2V} \right] -\exp\left[ -\frac{(\delta{}-2\delta{}_{0,c}[t])^{2}}{2V} \right]  \right) d\delta{}
$$
- probability $PdV{}$ that a trajectory absorbed between $V{}$ and $V+dV{}$ must equal difference between total number of trajectories before and after crossing barrier
$$
\begin{align}
P[V,\delta{}_{0,c}[t]]dV &  = - \frac{ \partial  }{ \partial V } \left( \int_{-\infty }^{\infty }D[\delta{},V,\delta{}_{0,c}[t]]d\delta{} \right)dV  \\
 & = - \left[ \frac{1}{2}\frac{ \partial D }{ \partial \delta{} }  \right] ^{\infty }_{-\infty }dV
\end{align}
$$
- inserting analytic expression of $D{}$ into previous equation yields
$$
P[V,\delta{}_{0,c}[t]]dV = \frac{\delta{}_{0,c}[t]}{\sqrt{ 2\pi{} V^{3} }}\exp\left[ -\frac{\delta{}_{0,c}^{2}[t]}{2V} \right] dV
$$
- this is *fraction of universe's matter assigned to halos whose smoothing variance lies between $V{}$ and $V+dV{}$* (ie a certain mass range)
- easily calculate number density of virialised halos of mass $M{}$ as a function of time
	- we get the Press-Schechter formula
$$
\begin{align}
\boxed{\frac{dn}{dM}[M,t]dM = \frac{\bar{\rho{}}_{M}[0]}{M}P(V,\delta{}_{0,c}[t])\left| \frac{dV}{dM} \right| dM \\
\quad{}\quad{}\quad{}\quad{}\quad{}\quad{}= \left( \frac{2}{\pi{}} \right) ^{1/2}\frac{\bar{\rho{}}_{M}[0]}{M^{2}}\frac{\delta{}_{0,c}[t]}{\sigma{}_{0}(M)}\left| \frac{d \ln \sigma{}_{0}}{d \ln M} \right| \exp\left[ -\frac{\delta{}^{2}_{0,c}[t]}{2\sigma{}_{0}[M]^{2}} \right] dM}
\end{align}
$$
	- possible to extend this to take into account mergers with a two barrier (conditional probability)
- for construction of black holes must take into account relevant baryonic physics, not just haloes
	- much more complicated

# Related