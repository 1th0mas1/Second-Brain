---
tags:
  - w-ing
Class:
  - Astrophysics
Date: 2026-10-16
Topics:
Index: 3
---




# Overview



# Notes

## Relativistic Cosmological Perturbation Theory

- going over lecture 2 but relativistically
- consider gauge dependence
	- convenient to working in terms of electric potential
	- $$
	\begin{align}
	\underline{E}  & = - \underline{\nabla} V \\
	\underline{B} &  = \underline{\nabla}\times \underline{A} \\
	\text{Gauge transformation: }V\to{}V- \frac{ \partial f }{ \partial t } & \quad{} \underline{A} \to{} \underline{A}+ \underline{\nabla}f
	\end{align}
	$$
- in GR we have *differomorphism* invariance
- the coordinates $x{},y,z,t$ are just labels, different smooth choices can describe same physical spacetime
---
- consider isotropic and homogeneous thus
	- $\rho{}[\underline{x},t] = \bar{\rho{}}[t]{}$
	- define a new time coordinate $t'{}$ such that $t' = \delta{} t[\underline{x},t]{}$ a smooth and small perturbation to time
	- $\rho{}'[\underline{x},t']\equiv \bar{\rho{}}[t[\underline{x},t']]{}$
	- when we evaluate $\rho{}'{}$ on hypersurface $t' =  \text{const}{}$ it will in general depend on $\underline{x}{}$
$$
\begin{align}
\bar{\rho{}}[t]  & = \bar{\rho{}}[t' - \delta{}t[\underline{x},t]] \simeq \bar{\rho{}}[t']- \dot{\bar{\rho{}}}\delta{}t[\underline{x},t] \\
 & \equiv \bar{\rho{}}[t']+\delta{}\rho{}[\underline{x},t']
\end{align}
$$
- this is just a different coordinate system so is valid but has a problem
- overcome this in 2 ways:
	1. only measure observables
	2. calculate only metric perturbations which are *gauge invariant* - bardeen variables
	3. fix the gauge and keep track of **all** perturbations of metric **and** matter
- here we use (conformal) newtonian gauge
- we also restrict ourselves to scalar perturnations
	- 3 scalars - scalars that rotated in 3d space remain the same
- consider just flat universes ie $K=0{}$
$$
ds^{2}= a^{2}[\eta]\left( -\left( 1-\frac{2\Phi{}}{c} \right)c^{2}d \eta^{2} + \left( 1-\frac{2\Phi{}}{c^{2}}\right)\delta{}_{ij}dx^{i}dx^{j}  \right)
$$
- we make a small perturbation to metric such that
$$
g_{\mu{}\nu{}} = \underbrace{\bar{g}_{\mu{}\nu{}}}_{FLRW}+\delta{}g_{\mu{}\nu{}}
$$
---
- now we consider $\delta{}G_{\mu{}\nu{}} = - \frac{8\pi{}G}{c^{4}}\delta{} T_{\mu{}\nu{}}{}$ from perturbing $G_{\mu{}\nu{}} = R_{\mu{}\nu{}}-\frac{1}{2}g_{\mu{}\nu{}}R{}$
$$
\begin{align}
g_{\alpha{}\beta{}} & = a^{2}[\eta]\begin{pmatrix}
-(1+2\Phi{}/c^{2}) & 0 \\
0 & (1-2\Phi{}/c^{2}\delta{}_{ij})
\end{pmatrix}
\end{align}
$$
- we then use for $2\Phi{}/c^{2}\ll 1{}$ thus $1/(1+2\Phi{}/c^{2})\simeq 1-2\Phi{}/c^{2}{}$ thus
$$
g^{\alpha{}\beta{}} = \frac{1}{a^{2}[\eta]}\begin{pmatrix}
-(1-2\Phi{}/c^{2}) & 0 \\
0 & (1+2\Phi{}/c^{2})\delta{}^{ij}
\end{pmatrix}
$$
- consider LHS we see
$$
\begin{align}
G_{00} & = -\frac{2\mathcal{H}^{2}}{c^{2}} - 2\frac{\nabla^{2}\Phi{}}{c^{2}}+6\mathcal{H}\frac{\Phi{}'}{c^{4}} \\
G_{0i} & = -2\mathcal{H}\frac{\partial{}_{i}\Phi{}}{c^{3}}-2\frac{\partial{}_{i}\Phi{}'}{c^{3}}  \\
G_{ij} & =\left( \frac{2\mathcal{H}'}{c^{2}}+\frac{\mathcal{H}^{2}}{c^{2}} - 8\mathcal{H}' \frac{\Phi{}}{c^{4}} - 6\mathcal{H}\frac{\Phi{}'}{c^{4}}-\frac{2\Phi{}''}{c^{4}} - \frac{4\mathcal{H}^{2}\Phi{}}{c^{4}} \right) 
\end{align}
$$
- now consider RHS
$$
\begin{align}
{T^{\mu{}}}_{\nu{}}  & = {\bar{T}^{\mu{}}}_{\nu{}}+{\delta{}T^{\mu{}}}_{\nu{}} \\
 & = \left( \bar{\rho{}}+\delta{}\rho{}+\frac{\bar{P}+\delta{}P}{c^{2}} \right)\bar{U^{\mu{}}}\bar{U}_{\nu{}} \\
 &  + \left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right)(\delta{}U^{\mu{}}\bar{U}_{\nu{}}+\bar{U}^{\mu{}}\delta{}U_{\nu{}}) \\
 &  + (\bar{P}+\delta{}P){\delta{}^{\mu{}}}_{\nu{}}
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
- define momentum density as $q^{i}\equiv \left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right)v^{i}{}$
- and we can sum of types of matter
$$
T_{\mu{}\nu{}}= \sum_{x}T_{\mu{}\nu{},x}
$$
- where $x{}$ is photons, baryons, dark matter then
$$
\delta{}\rho{} = \sum_{x} \delta{}\rho{}_{x},\quad{}\delta{}P = \sum_{x}\delta{}P_{x}, q^{i} = \sum_{x}q^{i}_{x}
$$
- so using $G_{00}= -(8\pi{}G/c^{4}) g_{0\nu{}}T^{\nu{}}_{0}{}$
- thus
$$
-\frac{3\mathcal{H}^{2}}{c^{2}}- \frac{2\nabla^{2}\Phi{}}{c^{2}}+\frac{6\mathcal{H}\Phi{}'}{c^{4}} = - \frac{8\pi{}Ga^{2}}{c^{2}}\rho{}\left( 1+\delta{}+\frac{2\Phi{}}{c^{2}} \right)
$$
- here we define $\delta{} \equiv \delta{}\rho{}/\bar{\rho{}}{}$
- use 1st FL $\mathcal{H}^{2} = (8\pi{}Ga^{2}/3)\bar{\rho{}}{}$
$$
\boxed{\nabla^{2}\Phi{}= 4\pi{}Ga^{2}\bar{\rho{}}\delta{}+3\frac{\mathcal{H}}{c^{2}}(\mathcal{H}{\Phi{}}+\Phi{}')}
$$
- we use $\Phi{}' \sim \mathcal{H}\Phi{}{}$ and recall $\mathcal{H}\sim 1/\eta{}$
- and we fourier transform such that $\nabla^{2} \to{} 1/k^{2}{}$
- thus for $kc\eta = kc/\mathcal{H}\gg 1{}$ then GR corrections term is negligible
- now we consider 
$$
G_{ij} = -\frac{8\pi{}G}{c^{4}}g_{i\nu{}}T^{\nu{}}_{j}
$$
- and we use 2nd FL
$$
\mathcal{H}' = - \frac{4\pi{}Ga^{2}}{3}\left( \bar{\rho{}}+\frac{3\bar{P}}{c^{2}} \right)
$$
- thus we get next equation
$$
\boxed{\Phi{}''+3\mathcal{H}\Phi{}'+(2\mathcal{H}'+\mathcal{H}^{2})\Phi{} =4\pi{}Ga^{2}c_{s}^{2}\bar{\rho{}}\delta{}}
$$
- where again $c_{s}^{2}= (\partial{} P/\partial{}\rho{})_{S}{}$ at constant entropy
---
- to find equivalence to calssical consider christoffel symbols
$$
\begin{align}
\nabla_{\mu{}}T^{\mu{}}_{\nu{}} & = 0 \\
\partial{}_{\mu{}}T^{\mu{}}_{\nu{}}+ \Gamma{}^{\mu{}}_{\mu{}\alpha{}}T^{\alpha{}}_{\nu{}}- \Gamma{}^{\alpha{}}_{\mu{}\nu{}}T^{\mu{}}_{\alpha{}} & =0
\end{align}
$$
---
- consider the $\nu{} = 0{}$ component
$$
\partial{}_{0}T^{0}_{0}+\partial{}_{i}T^{i}_{0}+\Gamma{}^{i}_{i0}T^{0}_{0}+\Gamma{}^{j}_{ji}T^{i}_{0}-\Gamma{}^{i}_{00}T^{0}_{i}-\Gamma{}^{j}_{i0}T^{i}_{j}=0
$$
- we thus get equation
$$
\bar{\rho{}}' +\bar{\rho{}}' \delta{} + \bar{ \rho{}}\delta{}' +\left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right) \frac{ \partial \underline{v} }{ \partial \underline{x} } +3\left( \mathcal{H}- \frac{\Phi{}'}{c^{2}} \right)\left( \bar{\rho{}}+\frac{\bar{P}}{c^{2}} \right)+3\mathcal{H}\left( \delta{}\rho{}+\frac{\delta{}P}{c^{2}} \right)=0
$$
- at 0th order $\bar{\rho{}}' +3\mathcal{ H} \bar{\rho{}}(1+\bar{P}/\bar{\rho{}}c^{2})=0{}$
- at 1st order
$$
\boxed{\delta{}'+\left( 1+\frac{\bar{P}}{\bar{\rho{}}c^{2}} \right)\left( \frac{ \partial \underline{v} }{ \partial \underline{x}}-\frac{3\Phi{}'}{c^{2}}   \right)+3\mathcal{H}\left( \frac{c_{s}^{2}}{c^{2}}- \frac{\bar{P}}{\bar{\rho{}}c^{2}} \right)\delta{}}
$$
- euler comes from the $\nu{} = i{}$ component
$$
\underline{v}' +\mathcal{ H}\underline{v} - 3 \mathcal{ H} \frac{ c_{s}^{2}}{c^{2}}\underline{v} - \frac{ \partial \Phi{} }{ \partial \underline{x} }  - \frac{c_{s}^{2}}{1+\bar{P}/\bar{\rho{}}c^{2}}\frac{ \partial \delta{} }{ \partial \underline{x} } 
$$
- we see that $\mathcal{H}_{'0} = 4.3 \times 10^{3}{}\text{ Mpc}$ but $BAO\sim 100 \text{ Mpc}{}$ so we can neglect GR perturbations and use newtonian results
- consider CMB $z\sim 1100{}$ where newtonian limits begins to degrad


# Related

