---
old: false
Tags:
  - w-ing
Index: 3
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# Newtonian Evolution of Cosmological Perturbations

- we before treated universe as [[The Homogeneous Universe|homogeneous and isotropic universe]]
	- we know the universe can't be perfectly smooth
	- to understand the existence of large scale structures we must introduce perturbations
- here we use newtonian gravity to derive the differential equations that govern the growth of small inhomogeneities
	- *it is impossible to study cosmology using newtonian gravity in a mathematically rigorous and self-consistent way, for all type of fluid and at all perturbation wavelengths*
	- its good enough to provide qualitative and quantitative behaviour of perturbations in case of massive, non-relativistic particles
- ---
- consider case where matter is an **ideal, non relativistic self-gravitating fluid**
	- at the epoch where it is the dominant component the equations governing its dynamic are
$$
\frac{ \partial \rho{} }{ \partial t } [\underline{r},t] + \frac{ \partial 
 }{ \partial \underline{r} } (\rho{}\underline{r})[\underline{r},t] = 0
$$
- here $\underline{r}{}$ is the position of a fluid element in physical (proper) coordinates and $\underline{u}{}$ its corresponding velocity
	- this equation represents mass (energy) conservation
- we also have conservation of momentum (Euler's equation)
$$
\frac{ \partial \underline{u} }{ \partial t } [\underline{r},t]+\left( \underline{u}\frac{ \partial  }{ \partial \underline{r} }  \right) \underline{u}[\underline{r},t] = - \frac{ \partial  }{ \partial \underline{r} } \Psi{}[\underline{r},t] - \frac{1}{\rho{}}\frac{ \partial  }{ \partial \underline{r} } P[\underline{r},t]
$$
- finally we have poisson equation for the gravitational potential $\Psi{}{}$
$$
\left( \frac{ \partial  }{ \partial \underline{r} }  \right)^{2}\Psi{}[\underline{r},t] = 4\pi{} G \rho{}[\underline{r},t] 
$$
- technically these equations are only valid on scales which are small compared to the particle horizon and when fluid is far away enough from a black hole
- ---
- we may rewrite these equations in a comoving coordinate system defined by
	- $\underline{x} = \underline{r}/a[t]{}$
	- such that $\underline{u}= \dot{a}\underline{x}+\underline{v}[\underline{x},t]{}$
		- here $\dot{a}\underline{x}{}$ is the *hubble flow*
		- $\underline{v}{}$ is the *peculiar velocity*
	- recall $\partial{}_{t}|_{\underline{r}}=\partial{}_{t}|_{\underline{x}}-(\dot{a}/a)(\underline{x}\cdot{}\partial{}_{\underline{x}})|_{t}{}$ and $\partial{}_{\underline{r}}|_{t}=(1/a)\partial{}_{\underline{x}}|_{t}{}$
$$
\begin{align}
\frac{ \partial \rho{} }{ \partial t } [\underline{x},t]+\frac{3\dot{a}}{a}\rho{}[\underline{x},t] +\frac{1}{a}\frac{ \partial  }{ \partial \underline{x} } (\rho{}\underline{v})[\underline{x},t] & = 0 \\
\frac{ \partial \underline{v} }{ \partial t } [\underline{x},t] + \frac{1}{a}\left( \underline{v}\frac{ \partial  }{ \partial \underline{x} }  \right) \underline{v}[\underline{x},t] + \frac{\dot{a}}{a}\underline{v}[\underline{x},t] & = - \frac{1}{a}\frac{ \partial  }{ \partial \underline{x} } \Phi{}[\underline{x},t] - \frac{1}{a\rho{}}\frac{ \partial  }{ \partial \underline{x} } P[\underline{x},t] \\
\left( \frac{1}{a}\frac{ \partial  }{ \partial \underline{x} }  \right) ^{2}\Phi{}[\underline{x},t] & = 4\pi{} G \rho{}[\underline{x},t] + 3 \frac{ \ddot{a}}{a}
\end{align}
$$
- here we defined a new gravitational potential $\Phi{} = \Psi{} + \frac{1}{2}a \ddot{a}\underline{x}^{2}{}$
	- subtracts the expansion part so mean density cancels in poisson equation - $\Phi$ only sourced by $\delta$
- ---
- in limit where fluid only slightly perturbed compared to homogeneous and isotropic background we may write
	- $\rho{}[\underline{x},t] = \bar{\rho{}}[t](1+\delta{}[\underline{x},t]){}$
	- hence density contrast $\delta{}[\underline{x},t]\equiv (\rho{}[\underline{x},t]-\bar{\rho{}}(t))/\bar{\rho{}}[t]{}\ll 1$
		- early universe perturbations ~$10^{-5}$ so linear theory works well
	- we also see $\underline{v} \ll \dot{ a} \underline{x}{}$
	- $P[\underline{x},t] = \bar{P}[t]+\delta{}P[\underline{x},t]=\bar{P}[t]+(\partial{}P/\partial{}\rho{})_{S}\delta{}\rho{}[\underline{x},t]{}= \bar{P}[t]+c_{s}^{2}\bar{\rho{}}[t]\delta[\underline{x},t]{}$
	- associated speed of sound $c_{s}^{2}=  \partial{}P/\partial{}\rho{}{}$
	- $\Phi{}[\underline{x},t]\ll (1/2)a \ddot{a} \underline{x}^{2}{}$
- we can thus linearise the equations to find
$$
\begin{align}
\boxed{\frac{ \partial \delta{} }{ \partial t } [\underline{x},t]+\frac{1}{a}\frac{ \partial \underline{v} }{ \partial \underline{x} }[\underline{x},t]=0 \\
\frac{ \partial \underline{v} }{ \partial t } [\underline{x},t] + \frac{\dot{a}}{a}\underline{v}[\underline{x},t]=-\frac{1}{a}\frac{ \partial  }{ \partial \underline{x} } \Phi{}[\underline{x},t] -\frac{c_{s}^{2}}{a}\frac{ \partial  }{ \partial \underline{x} } \delta{}[\underline{x},t]  \\
\nabla^{2}_{\underline{x}}\Phi{}[\underline{x},r]=4\pi{} G \bar{\rho{}}a^{2}\delta{}[\underline{x},t]}
\end{align}
$$
- using $\rho{}_{c}=3H^{2}/8\pi{}G$ poisson is often written as $\nabla^{2}_{\underline{x}}\Phi{}=\frac{3}{2}\Omega{}_{M}[t]H^{2}[t]a^{2}\delta{}$
---
- we can combine these equations to find
$$
\ddot{\delta{}}[\underline{x},t] + 2H \dot{\delta{}}[\underline{x},t]- \frac{c_{s}^{2}}{a^{2}}\nabla^{2}_{\underline{x}}\delta{}[\underline{x},t]= 4\pi{} G \bar{\rho{}}\delta{}[\underline{x},t]
$$
- easier to study in Fourier space where $\delta{}[\underline{x},t] = (1/(2\pi{})^{3})\int d^{3}\underline{k}\delta{}_{k}\exp(-i\underline{k}\cdot{}\underline{x}){}$
$$
\ddot{\delta{}}_{k}+2H\dot{\delta{}}_{k}+\left( \frac{c_{s}^{2}}{a^{2}}k^2 - 4 \pi{} G \bar{\rho{}}\right)\delta{}_{k}=0 
$$
- we can then go to conformal space
	- denote $\partial{}/\partial{}\eta{}$ with $'{}$ instead of $\dot{}{}$ for $\partial{}/\partial{}t{}$
	- and $\mathcal{H} \equiv a'/a=aH{}$ as conformal equivalent of $H{}$
$$
\boxed{\delta{}_{k}''+\mathcal{H}\delta{}_{k}'+(c_{s}^{2}k^{2}- 4\pi{} Ga^{2}\bar{\rho{}})\delta{}_{k}=0}
$$
- growth set by expansion rate (damping) and balance of pressure support vs gravitational collapse
---
- linear theory fails where $\delta{}\not\ll 1$ eg clusters and groups
	- nonlinear term $(\underline{v}\cdot{}\nabla)\underline{v}$ couples different $k$ modes
- *smoothed effective theory*: smooth fields on scale $\Lambda$, $\delta{}\to{}\delta{}_{\Lambda{}}$
	- continuity and poisson unchanged, euler gains an effective stress term
		- form constrained by equivalence principle and isotropy
	- extra terms only enter beyond linear order - linear results stay correct
- cosmological simulations evolve gas with these newtonian equations
	- dark matter treated as pressureless fluid or via boltzmann equation





# Related

- [[The Homogeneous Universe]]