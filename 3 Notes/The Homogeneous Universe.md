---
old: false
Tags:
  - w-ing
Index: 2
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# The Homogeneous Universe

- static homogeneous isotropic newtonian universe is not self-consistent
	- it would collapse under its own gravity
	- universe must be dynamic - expanding or contracting
- newtonian route: write physical position $\underline{r}(t)=a(t)\underline{l}$
	- $a$ dimensionless scale factor, comoving coordinate $\underline{l}$ carries units (metres)
	- acceleration gives $\ddot{a}/a = -4\pi{}G\rho{}/3$
	- with $\rho{}a^{3}=\text{const}$ integrating gives $\dot{a}^{2}-\frac{8\pi{}G\rho{}a^{2}}{3}=2E$ - same form as 1st FL with $E\leftrightarrow{}-Kc^{2}/2$
- most general spacetime metric is homogeneous and isotropic
$$
\boxed{ds^{2} = -c^{2}dt^{2}+a^{2}[t]\left( \frac{dr^{2}}{1-Kr^{2}}+r^{2}d \theta{}^{2}+r^{2} \sin^{2}\theta{}d\phi{}^{2} \right) }
$$
- $g_{\mu{}\nu{}}{}$ is diagonal *covariant* metric tensor
- we define $K{}$ such that
	- $=0{}$ for a flat (Euclidean) universe
	- $>0{}$ for a closed (spherical) universe
	- $<{}0$ for an open (hyperbolic) universe
- $r{}$, $\theta{}{}$, $\phi{}{}$ are comoving coordinates
	- a system in which an observer at rest moves along with the expansion of the universe
- this metric is **Friedmann-Lemaitre-Robertson-Walker** (FLRW) metric
- ---
- consideration about homogeneity and isotropy imply in comoving frame where fluid filling universe is at rest then energy-momentum tensor:
$$
\boxed{T_{\mu{}}^{\nu{}} = \begin{pmatrix}
-\rho{}[t]c^{2} & 0 & 0 & 0 \\
0 & P[t]  & 0 & 0 \\
0 & 0 & P[t] & 0 \\
0 & 0 & 0 & P[t]
\end{pmatrix}}
$$
- we can also start from general energy-momentum tensor with $U_{\mu{}} = (-c,0,0,0){}$
$$
T_{\mu{}\alpha{}} = (\rho{}[t]+P[t]/c^{2})U_{\mu{}}U_{\alpha{}}+P[t]g_{\mu{}\alpha{}}
$$
- ---
- we also have einstein field equation
$$
\boxed{R_{\mu{}\nu{}}-\frac{1}{2}g_{\mu{}\nu{}}R = - \frac{8\pi{}G}{c^{4}}T_{\mu{}\nu{}}+\Lambda{}g_{\mu{}\nu{}}}
$$
- using explicit forms of the FLRW metric and ideal fluid energy-momentum tensor we yield:
	- Friedmann-Lemaitre FL equations
$$
\begin{align}
\boxed{\left( \frac{da}{dt} \right) ^{2}   = \frac{8\pi{}Ga^{2}[t]}{3}\rho{}[t] +\frac{\Lambda{} a^{2}[t]c^{2}}{3}- Kc^{2} \\
\frac{d^{2}a}{dt^{2}}=-\frac{4\pi{}Ga[t]}{3}\left( \rho{}[t]+3 \frac{P[t]}{c^{2}} \right) +\frac{\Lambda{}a[t]c^{2}}{3}}
\end{align}

$$
- without $\Lambda$ both dust ($P=0$) and radiation ($P=\rho{}c^{2}/3$) always decelerate expansion
	- acceleration needs $\Lambda$ (or a scalar field with $P<-\rho{}c^{2}/3$)
- convenient to define *Hubble parameter* aka the expansion rate of the universe
	- $H[t] = \dot{a}[t]/a[t]{}$
- we also define the critical density
$$
\rho{}_{c} [t] = \frac{3H^{2}[t]}{8\pi{}G}
$$
- we obtain this by setting $\Lambda{} = 0{}$ and $K=0{}$
- we also speak of *cosmological redshift* $z \equiv a_{0}/a[t]  - 1{}$
	- this is the quantity we directly observe as a wavelength shift $z = \lambda{}_{0}/\lambda{}[t]-1{}$
- ---
- we can rewrite 1st FL
$$
\rho{}_{c}[z] = \rho{}[z] +\frac{\Lambda{} c^{2}}{8\pi{}G} - \frac{3Kc^{2}(1+z)^{2}}{8\pi{}G}
$$
- ---
- we may also compare all energy densities of form $\rho{}_{X}[z]c^{2}{}$
	- subscript $X = {\gamma{},M,V,K}{}$
	- indicates contribution from relativistic matter, non relativistic matter, vacuum energy, and curvature
- we can write the ratio as dimensionless functions of redshift
$$
\Omega{}_{X}[z] = \frac{\rho{}_{X}[z]}{\rho{}_{c}[z]}
$$
- we already have the V and K terms
$$
\rho{}_{V}[z] = \frac{\Lambda{} c^{2}}{8\pi{}G},\quad{} \rho{}_{K}[z] = - \frac{3Kc^{2}(1+z)^{2}}{8\pi{}G}
$$
- now we just have to separate $\rho{}[z]{}$ into relativistic $\rho{}_{\gamma{}}[z]{}$ and non relativistic $\rho{}_{M}[z]{}$
$$
\Omega{}_{M}[z]+\Omega{}_{\gamma{}}[z]+\Omega{}_{V}[z]+\Omega{}_{K}[z] = 1
$$
- we note that $\Omega{}_{K}[z]{}$ can be negative in this equation
- scaling with $z{}$ go as 
	- $\rho{}_{M}[z]\propto (1+z)^{3}{}$
	- $\rho{}_{\gamma{}}[z]\propto (1+z)^{4}{}$
	- $\rho{}_{V}[z] = \text{const}{}$
	- $\rho{}_{K}[z]\propto (1+z)^{2}{}$
- if we choose as a reference point present day values then
$$
H^{2}[z] = H_{0}^{2}\left( \Omega{}_{M,0}(1+z)^{3}+\Omega{}_{\gamma{},0}(1+z)^{4}+\Omega{}_{V,0}+\Omega{}_{K,0}(1+z)^{2} \right) 
$$
- current best estimates are $\Omega{}_{M,0} = 0.317{}$, $\Omega{}_{V,0}=0.683{}$, $\Omega{}_{K,0} = 0.0{}$, $\Omega{}_{\gamma{},0}= 9 \times 10^{-5}{}$ and $H_{0} = 67.2 \text{km}/\text{s}/\text{Mpc}{}$
	- baryons only ~5%, rest of matter is dark matter
	- *hubble tension*: CMB (inverse distance ladder) gives $H_{0}\approx{}68$, supernovae give $\approx{}73$ km/s/Mpc - $>5\sigma$ discrepancy
	- BAO + CMB fits hint at dark energy with evolving equation of state (~$3\sigma$)
- ---
- we may define a new variabele known as *conformal time* $d\eta \equiv dt/ a[t]{}$
$$
ds^{2} = a^{2}[\eta]\left( -c^{2}d\eta^{2} + \frac{dr^{2}}{1-Kr^{2}}+r^{2}d\theta{}^{2} + r^{2}\sin^{2}\theta{} d\phi{}^{2} \right) 
$$
- for $K=0$ this is just minkowski metric multiplied by $a^{2}$
- $\eta{}$ is the amount of time it would take a photon to travel from where an observer is located to largest distance it can observe
	- provided the universe stopped expanding
- ---
- define the notion of *comoving* or *particle horizon* $R_{h}[t]{}$
	- the maximum distance a massless particle can have travelled since the big bang
$$
R_{h}[t] = c\eta = c \int_{0}^{t}\frac{dt'}{a[t']} = R_{h}[z] = c\int_{z}^{\infty } \frac{dz'}{H[z']}
$$
- note the proper distance is equal to the comoving distance times the expansion factor
	- proper distance to the particle horizon at any redshift is $d_{h}[z] = R_{h}[z]/(1+z){}$

# Related
