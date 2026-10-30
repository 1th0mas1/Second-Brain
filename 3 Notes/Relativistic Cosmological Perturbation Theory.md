---
old: false
Tags:
  - w-ing
Index: 4
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# Relativistic Cosmological Perturbation Theory

- newtonian method in [[Newtonian Evolution of Cosmological Perturbations]] has clear limitations
	- it fails for:
		- sizes comparable or larger than the particle horizon
		- fully relativistic fluids at both large and short wavelengths as fluid pressure also contributes significantly to active gravitational mass
- physical interpretation is less clear in GR due to freedom of choice of coordinates
	- imagine $\rho{}[\underline{x},t] = \bar{\rho{}}[t]{}$
	- define new time coordinate $t'{}=t+\delta{}t[\underline{x},t]$
	- mass (energy) density in new system $\rho{}'[\underline{x},t]\equiv \bar{\rho{}[t[\underline{x},t]]}{}$
	- assuming $\delta{}t\ll t{}$ we see $\bar{\rho{}}[t]\simeq \bar{\rho{}}[t']-\dot{\bar{\rho{}}}\delta{}t[\underline{x},t]\equiv \bar{\rho{}}[t']+\delta{} \bar{\rho{}}[\underline{x},t']{}$
	- we now have a linear perturbation term entirely due to a changed time coordinate
- there are two ways to combat this problem
	- calculate only combinations of metric perturbations which are gauge invariant
		- ie identical under any change of coordinate system - *bardeen variables*
		- fix the gauge and keep track of all perturbations, metric and matter
- ---
- we will do second option and use the convenient *newtonian gauge*
- we will restrict ourselves to *scalar* perturbations of the metric and associated energy density inhomogeneities
	- these are most relevant for structure formation which is the main topic of these lectures
- our starting point will
	- be conformal metric with $K=0{}$
	- cartesian spatial coordinates instead of spherical
		- spherical symmetry is broken
- we perturb this metric with a single scalar $\Phi{}{}$
$$
ds^{2} = a^{2}[\eta]\left( -\left( 1+\frac{2\Phi{}}{c^{2}} \right) c^{2}d\eta^{2} +\left( 1-\frac{2\Phi{}}{c^{2}} \right) \delta{}_{ij}dx^{i}dx^{j} \right)
$$
- Newtonian limit is when we set $a[\eta]=1{}$ and this becomes standard Newtonian gravitational potential
- we may view this as a 0th order part (FLRW metric) with a linear perturbation
	- $g_{\mu{}\nu{}} = \bar{g}_{\mu{}\nu{}}+\delta{} g_{\mu{}\nu{}}{}$
- ---
- we must work out a linearly perturbed Einstein field equation
	- if we ignore cosmological constant then
$$
\delta{}G_{\mu{}\nu{}} = - \frac{8\pi{}G}{c^{4}}\delta{}T_{\mu{}\nu{}}
$$
- consider LHS
$$
\begin{align}
G_{00} & = -\frac{2\mathcal{H}^{2}}{c^{2}} - 2\frac{\nabla^{2}\Phi{}}{c^{2}}+6\mathcal{H}\frac{\Phi{}'}{c^{4}} \\
G_{0i} & = -2\mathcal{H}\frac{\partial{}_{i}\Phi{}}{c^{3}}-2\frac{\partial{}_{i}\Phi{}'}{c^{3}}  \\
G_{ij} & =\left( \frac{2\mathcal{H}'}{c^{2}}+\frac{\mathcal{H}^{2}}{c^{2}} - 8\mathcal{H}' \frac{\Phi{}}{c^{4}} - 6\mathcal{H}\frac{\Phi{}'}{c^{4}}-\frac{2\Phi{}''}{c^{4}} - \frac{4\mathcal{H}^{2}\Phi{}}{c^{4}} \right) 
\end{align}
$$
- consider RHS
$$
\begin{align}
G_{00} & = -\frac{2\mathcal{H}^{2}}{c^{2}} - 2\frac{\nabla^{2}\Phi{}}{c^{2}}+6\mathcal{H}\frac{\Phi{}'}{c^{4}} \\
G_{0i} & = -2\mathcal{H}\frac{\partial{}_{i}\Phi{}}{c^{3}}-2\frac{\partial{}_{i}\Phi{}'}{c^{3}}  \\
G_{ij} & =\left( \frac{2\mathcal{H}'}{c^{2}}+\frac{\mathcal{H}^{2}}{c^{2}} - 8\mathcal{H}' \frac{\Phi{}}{c^{4}} - 6\mathcal{H}\frac{\Phi{}'}{c^{4}}-\frac{2\Phi{}''}{c^{4}} - \frac{4\mathcal{H}^{2}\Phi{}}{c^{4}} \right) 
\end{align}
$$
	- thus we find
$$
\begin{align}
T^{0}_{0}  & = - (\bar{\rho{}}+\delta{}\rho{})c^{2} \\
T^{i}_{0}  & = - \left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right)cv^{i} \\
T^{0}_{j} & = \left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right)cv_{j} \\
T^{i}_{j} & = (\bar{P}+\delta{}P)\delta{}^{i}_{j}
\end{align}

$$
- we now may define momentum density $q^{i}\equiv\left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right)v^{i}{}$
- and we sum all types of matter as
$$
T_{\mu{}\nu{}} = \sum_{i}T_{\mu{}\nu{},i}
$$
- where $i{}$ is photons, baryons, dark matter
$$
\delta{}\rho{} = \sum_{i} \delta{}\rho{}_{i},\quad{}\delta{}P = \sum_{i}\delta{} P_{i},\quad{} q^{j}= \sum_{i}q_{i}^{j}
$$
- we can then use $G_{00}= -(8\pi{}G/c^{4})g_{0\nu{}}T_{0}^{\nu{}}{}$
$$
-\frac{3\mathcal{H}^{2}}{c^{2}}- \frac{2\nabla^{2}\Phi{}}{c^{2}}+\frac{6\mathcal{H}\Phi{}'}{c^{4}} = - \frac{8\pi{}Ga^{2}}{c^{2}}\rho{}\left( 1+\delta{}+\frac{2\Phi{}}{c^{2}} \right)
$$
	- here we used $\delta{} \equiv \delta{}\rho{}/\bar{\rho{}}{}$
- if we use the 1st FL $\mathcal{H}^{2}= (8\pi{}Ga^{2}/3)\bar{\rho{}}{}$
$$
\boxed{\nabla^{2}\Phi{}= 4\pi{}Ga^{2}\bar{\rho{}}\delta{}+3\frac{\mathcal{H}}{c^{2}}(\mathcal{H}{\Phi{}}+\Phi{}')}
$$
- now we can use $\Phi{}'\sim \mathcal{H}\Phi{}{}$ and $\mathcal{H}\sim 1/\eta{}$
- use Fourier transform such that $\nabla^{2}\to{} 1/k^{2}{}$
	- for $kc\eta = kc/\mathcal{H}\gg 1{}$ then  **GR corrections term is negligible**
- ---
- now consider
$$
G_{ij} = - \frac{8\pi{}G}{c^{4}}g_{i\nu{}}T^{\nu{}}_{j}
$$
	- and we use 2nd FL ([[The Homogeneous Universe]])
$$
\mathcal{H}' = - \frac{4\pi{}Ga^{2}}{3}\left( \bar{\rho{}}+\frac{3 \bar{P}}{c^{2}} \right) 
$$
- thus we get next equation
$$
\boxed{\Phi{}''+3\mathcal{H}\Phi{}'+(2\mathcal{H}'+\mathcal{H}^{2})\Phi{} =4\pi{}Ga^{2}c_{s}^{2}\bar{\rho{}}\delta{}}
$$
- where once again $c_{s}^{2}= (\partial{}P/\partial{}\rho{})_{S}{}$
- ---
- we find classical equivalence by using conservation of energy momentum $\nabla_{\mu{}}T^{\mu{}}_{\nu{}} = \partial{}_{\mu{}}T^{\mu{}}_{\nu{}}+\Gamma{}^{\mu{}}_{\mu{}\alpha{}}T^{\alpha{}}_{\nu{}}-\Gamma{}^{\alpha{}}_{\mu{}\nu{}}T^{\mu{}}_{\alpha{}}=0{}$
- if we consider $\nu{}=0{}$
$$
\partial{}_{0}T^{0}_{0}+\partial{}_{i}T^{i}_{0}+\Gamma{}^{i}_{i0}T^{0}_{0}+\Gamma{}^{j}_{ji}T^{i}_{0}-\Gamma{}^{i}_{00}T^{0}_{i}-\Gamma{}^{j}_{i0}T^{i}_{j}=0
$$
- from this we get
$$
\bar{\rho{}}' +\bar{\rho{}}' \delta{} + \bar{ \rho{}}\delta{}' +\left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right) \frac{ \partial \underline{v} }{ \partial \underline{x} } +3\left( \mathcal{H}- \frac{\Phi{}'}{c^{2}} \right)\left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right)+3\mathcal{H}\left( \delta{}\rho{}+\frac{\delta{}P}{c^{2}} \right)=0
$$
- at 0th order $\bar{\rho{}}' + 3\mathcal{H}\bar{\rho{}}(1+\bar{P}/\bar{\rho{}}c^{2})=0{}$
- at 1st order
$$
\boxed{\delta{}'+\left( 1+\frac{\bar{P}}{\bar{\rho{}}c^{2}} \right)\left( \frac{ \partial \underline{v} }{ \partial \underline{x}}-\frac{3\Phi{}'}{c^{2}}   \right)+3\mathcal{H}\left( \frac{c_{s}^{2}}{c^{2}}- \frac{\bar{P}}{\bar{\rho{}}c^{2}} \right)\delta{}}
$$
- we can also derive Euler from the $\nu{}=i{}$ component
$$
\boxed{\delta{}'+\left( 1+\frac{\bar{P}}{\bar{\rho{}}c^{2}} \right)\left( \frac{ \partial \underline{v} }{ \partial \underline{x}}-\frac{3\Phi{}'}{c^{2}}   \right)+3\mathcal{H}\left( \frac{c_{s}^{2}}{c^{2}}- \frac{\bar{P}}{\bar{\rho{}}c^{2}} \right)\delta{}}
$$
- we see that $\mathcal{H}_{'0} = 4.3 \times 10^{3}{}\text{ Mpc}$ but $BAO\sim 100 \text{ Mpc}{}$ so we can neglect GR perturbations and use newtonian results
- consider CMB $z\sim 1100{}$ where Newtonian limits begin to degrade


# Related

- [[Newtonian Evolution of Cosmological Perturbations]]