---
tags:
  - w-ing
Class:
  - Astrophysics
Date: 2026-10-19
Topics:
Index:
---




# Overview



# Notes

## Evolution of large scale structures

$$
\mathcal{H}^{2} = \mathcal{H}^{2}_{0}\left[ \frac{\Omega{}_{m,0}}{a}+ \frac{\Omega{}_{R,0}}{a^{2}}+\omega{}_{k,0}+\Omega{}_{\Lambda{},0}a^{2} \right]
$$
- we also have perturbation equation
$$
\delta{}''_{k}+\mathcal{H}\delta{}'_{k} +[c_{s}^{2}K^{2} - 4\pi{}Ga^{2} \bar{\rho{}}]\delta{}_{k}=0
$$
- we see this is a damped harmonic oscillator

## The Physical Wavelength $\lambda{}_{j}{}$

- controls transition between pressure dominated and gravity dominated
$$
\lambda{}_{J} = \frac{2\pi{}}{k_{J}} = c_{s}\left( \frac{\pi{}}{G\bar{\rho{}}} \right) ^{1/2}
$$

1. if $p > -(1/3)\rho{}c^{2}{}$ then $\lambda{}_{J}{}$ grows faster than a
2. for a shell of mass M and radius R $t_{\text{free-fall}}\sim R^{3/2}/\sqrt{ GM }\sim 1/\sqrt{ G \bar{ \rho{}} }{}$, sound crossing time $R/c_{s}{}$ and so $t_{FF}\sim t_{\text{sound}}{}$
3. if $c_{s}^{2} \sim k_{B}T/m{}$ then $\lambda{}_{J}= \sqrt{ \pi{} k_{B} T/ GM \bar{ \rho{}} }{}$

### Pressureless fluid in a matter dominated era

- we have $c_{s}^{2}\simeq 0{}$ thus $\lambda{} \gg \lambda{}_{J}{}$
	- thus discard term that depends on pressure
- further restrict ourselves by saying $\bar{\rho{}}\simeq \bar{\rho{}}+M{}$
	- thus in conformal coordinates $\Omega{}_{M}[\eta]=1{}$ ie $\bar{\rho{}}_{M}[\eta]=\rho{}_{c}[\eta] = 3\\mathcal{ H}^{2}[\eta]/(8\pi{} a^{2}G){}$
---
$$
\delta{}''_{k}+\mathcal{H}\delta{}'_{k}-\frac{3}{2}\mathcal{H}^{2}\delta{}_{k} = 0
$$
- we also can yield $a \propto \eta^{2}{}$ such that $\mathcal{H}=2/\eta{}$ and so trying $\delta{}_{k}\propto \eta^{\alpha}{}$ we find
$$
\delta{}_{k} = C_{1}\eta^{2}+C_{2}\eta^{-3}
$$
- thus we have
	- $\delta{}_{k}\propto a{}$ is the growing mode ($\delta{} \propto t^{2/3}{}$)
	- $\delta{} \propto a^{-3/2}{}$ is the decaying mode ($\delta{}_{k}\propto 1/t{}$)

###  Pressureless matter in the $\Lambda{}{}$ dominated era

- we still have $c_{s}^{2} = 0{}$ and hence $\lambda{} \gg \lambda{}_{J}{}$
- however now we have $\bar{\rho{}} = \bar{\rho{}}_{\Lambda{}}{}$
	- $\bar{\rho{}}_{\Lambda{}}= \rho{}_{c} = 3\mathcal{H}^{2}/8\pi{} G a^{2} G{}$
- $\Lambda{}{}$ is said to be completely constant and so no $\delta{}_{\Lambda{}}{}$ fluctuations and so $4\pi{} G \rho{}_{\Lambda{}}\delta{}_{\Lambda{}} = 0{}$
$$
\delta{}''_{k}+\mathcal{H}\delta{}_{k}' - 4\pi{} G a^{2} \bar{\rho{}}_{M} \delta{} _{k} = \delta{}''_{k} + \mathcal{H}\delta{}'_{k} -\underbrace{ \frac{3}{2} \mathcal{H}^{2} \frac{\bar{\rho{}}_{M}}{\bar{\rho{}}_{\Lambda{}}}\delta{}_{k}}_{=0 \text{ in }\Lambda{} \text{ dominated}} =0
$$
- we can also use $\mathcal{H}^{2}= \mathcal{H}_{0}^{2}\Omega{}_{\Lambda{},0}a^{2}{}$ and so $a \propto 1/\eta{}$ so $\mathcal{H}= -1/\eta{}$ and finally $\delta{}_{k} \propto \eta ^{\alpha{}}{}$
$$
\delta{}_{k} = C_{1} +C_{2}\eta^{2}
$$
- $\delta{}_{k}\approx{}\text{const}{}$ is growing mode
- $\delta{}_{k}\propto a^{-2}{}$ is decaying mode $\delta{} \propto \exp[-2\sqrt{ \Lambda{} / 3 }t]{}$ and $a \propto \exp[\sqrt{ 1/3 }t]{}$ **this doesn't make sense dimensionally**

## Relativistic fluid in the radiation dominated era

- radiation are strongly interacting with the baryons
- radiation behaves like a relativistic fluid
	- $\bar{P} = \frac{1}{3}\bar{\rho{}}c^{2}{}$ and so $c_{s} = \frac{1}{\sqrt{ 3 }}c{}$
1. consider classical momentum flux $\partial{}p/\partial{} t + \underline{\nabla}\cdot{}(\rho{}\underline{u}) =0{}$ and we can relativistically replace with $(\rho{}+P/c^{2})\underline{u}{}$
	1. $\dot{\delta{}}+\frac{4}{3a}\underline{\nabla}\cdot{}\underline{u}=-{}$
	2. $\underline{\dot{u}}+\mathcal{H}\underline{v}=-\underline{\nabla}\phi{}/a -c^{2}\nabla \delta{}/3a{}$
	3. $\nabla^{2}\phi{}{}=8\pi{} G \bar{ \rho{}}a^{2}\delta{}$
2. we can also use relativistic perturbation equations
	1. $\bar{\rho{}}= \rho{}_{\gamma{}}{}$
	2. $\rho{}_{\gamma{}} = \rho{}_{c} = 3 \mathcal{H}^{2}/8\pi{} a^{2} G{}$
	3. $\mathcal{ H}^{2} \propto H_{0}^{2} \Omega{}_{R,0}/a^{2}{}$
	4. $a \propto \eta{}$ some$\mathcal{H}\propto 1/\eta{}$ and $\mathcal{H} = -1/\eta^{2}{}$
	5. $\Phi{}''+3\mathcal{H}\Phi{}'+(2\mathcal{H}'+\mathcal{H}^{2})\Phi{} - 4\pi{} G a^{2}\bar{\rho{}}\delta{} c_{s}^{2}=0{}$
- we can rewrite relativistic poisson as
$$
4\pi{} G a^{2} \bar{\rho{}}\delta{} = \nabla^{2}\Phi{} - 3 \frac{ \mathcal{H}}{c^{2}}(\mathcal{H}\Phi{}+\Phi{}')
$$
- get rid of $\delta{}{}$ term and Fourier transform to get
$$
\Phi{}_{k}'' + 4 \mathcal{H}\Phi{}_{k}' + c_{s}^{2}k^{2}\Phi{}_{k}=0
$$
- finally use the expansion factor scaling with conformal time to simplify as
$$
\Phi{}''_{k}+4\mathcal{H}\Phi{}'_{k}+c_{s}^{2}k^{2}\Phi{}_{k}=0
$$
- this has spherical bessel function solutions
$$
\Phi{}_{k} = A_{1}\frac{\sqrt{ 3 }}{kc\eta}j_{1}\left[ \frac{kc\eta}{\sqrt{ 3 }} \right] + A_{2}\frac{\sqrt{ 3 }}{kc\eta}y_{1}\left[ \frac{kc\eta}{\sqrt{3 }} \right] 
$$
- here the bessel functions are
$$
\begin{align}
j_{1}(x) & = \frac{\sin x}{x^{2}} - \frac{\cos x}{x} \\
y_{1}(x) & = -\frac{\cos x}{x^{2}}-\frac{\sin x}{x}
\end{align}
$$
- we see that as $\eta \to{} 0{}$ that $y_{1}(x)\to{} \infty{}$ so can set $A_{2} =0{}$
- for modes inside the horizon $kc/\mathcal{H}\gg1{}$ we find
$$
\Phi{}_{k}\simeq - \frac{3A_{1}}{(kc\eta)^{2}}\cos \left[ \frac{kc\eta}{\sqrt{ 3 }} \right] 
$$
	- thus gravitational potential on small scales oscillate with frequency $kc/\sqrt{ 3 }{}$ with amplitude decaying with conformal time as $\eta^{-2}{}$ or in terms of scale factor $a^{-2}{}$
- turn back to energy density fluctuations in relativistic fluid we can re-arrange as
$$
\delta{}_{k} = \frac{2}{3\mathcal{H}^{2}}\left( -k^{2}\Phi{}_{k}- 3 \frac{ \mathcal{ H}}{c^{2}}(\mathcal{H}\Phi{}_{k}+\Phi{}_{k}') \right) = -\left( \frac{2}{3}k^{2}\eta^{2} +\frac{2}{c^{2}} \right)\Phi{}_{k} - \frac{2\eta}{c^{2}}\Phi{}_{k}' 
$$
- consider again for $kc/\mathcal{H}\gg 1{}$
$$
\delta{}_{k}\simeq - \frac{2}{3}k^{2}\eta^{2}\Phi{}_{k}= \frac{2A_{1}}{c^{2}}\cos \left[ \frac{kc\eta}{\sqrt{ 3 }} \right] 
$$
- oscillate around $\delta{}_{k}= 0{}$ at frequency $kc/\sqrt{ 3 }{}$

### Pressureless matter in the radiation dominated era

- again $c_{s}^{2} = 0{}$
- no the background density is not going to be set by background density
- $\rho{}_{c} = \rho{}_{\gamma{}} = 3\mathcal{H}^{2}/8\pi{} G a^{2}{}$
- on sub horizon scales $kc/\mathcal{H}\gg1{}$
$$
\nabla^{2}\Phi{} = 4\pi{} G (\bar{\rho{}}_{\gamma{}}+\underbrace{\bar{\rho{}}_{M}\delta{}_{M}}_{0}) = 4\pi{} G \bar{\rho{}}_{\gamma{}}\delta{}_{\gamma{}}
$$
- sub this back in we can use the fact that perturbations fluctiuate around zero $\langle \delta{}_{k,\gamma{}} \rangle_{\eta} =0{}$
$$
\delta{}_{k}''+\mathcal{H}\delta{}_{k}' = \delta{}_{k}'' +\frac{1}{\eta}\delta{}_{k}' 
$$
- solution to this equation is
$$
\delta{}_{k} = C_{1}\ln \eta + C_{2}
$$
- growing mode $\ln \eta{}$ can be rewritten as $\ln a{}$
- decay mode $\text{const}{}$

- notice radiation oscillate due to gravity and pressure
- pressureless has gravitational collapse and no pressure to push back away
	- gravitation potential decays so we get less growth hence only log growth of perturbation

# Related

