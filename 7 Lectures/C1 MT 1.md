---
tags:
  - w-ing
Class:
  - Astrophysics
Date: 2026-10-12
Topics:
Index: 1
---




# Overview



# Notes

## Perturbed Universe

- isotropic homogeneous background solution to the universe
	1. static universe
		- same matter and density at every point in the universe
		- not dynamically consistent
	2. universe is dynamic
		- can be self-consistent
- dynamical equation eg motion of universe
- position vector given by:
$$
r(t) = a(t)l
$$
- where $l{}$ is the comoving coordinate
	- dimensionful quantity - metres
- $a(t){}$ is dimensionless scale factor
- consider the velocity $v(t)=dr/dt\equiv\dot{r}{}$
$$
\begin{align}
\underline{v}(t)  & = \dot{a}l = \left( \frac{\dot{a}}{a} \right)\underline{r} \\
A(t) & = \frac{d\underline{v}}{dt} = \left( \frac{\ddot{a}}{a} \right)\underline{r} \\
\to{} -\frac{4\pi{}G \underline{r}}{3}  & = \frac{\ddot{a}}{a}\underline{r}  \\
 \to{} 2E  & = \dot{a}^{2} - \frac{8\pi{}\rho{}a^{2}}{3}
\end{align}
$$
- now consider using GR
$$
ds^{2} = \begin{pmatrix}
cdt,dr,d\theta{},d\phi{})\end{pmatrix}\begin{pmatrix}
-1 &  &  &  \\
 & \frac{a^{2}}{1-kr^{2}} &  &  \\
 &  &  a^{2}r^{2} &  \\
 &  &   & a^{2}r^{2}\sin^{2}\theta{}
\end{pmatrix}\begin{pmatrix}
cdt \\
dr \\
d\theta{} \\
d\phi{}
\end{pmatrix}
$$
$$
ds^{2} =-c^{2}dt^{2} +a^{2}\left[ \frac{dr^{2}}{1-kr^{2}}+r^{2}d\theta{}^{2}+r^{2}\sin^{2}\theta{} \right] 
$$
- introduce conformal time $dt = a d \eta{}$
$$
ds^{2} = a^{2}\left[ -c^{2}d\eta^{2}+\frac{dr^{2}}{1-kr^{2}}+r^{2}d\theta{}^{2}+r^{2}\sin^{2}\theta{}d\phi{}^{2} \right] 

$$
- this is the **Friedmann Lemaitre-Robertson-Walker** solution

## Matter

- consider the stress-energy/Energy-momentum tensor
$$
{T^{\mu{}}}_{\nu{}} =\begin{pmatrix}
\epsilon{}   & &  \underline{S} &  \\
 &  &  &  \\
 \underline{S} &  & \sigma{} &  \\
  &  &  & 
\end{pmatrix}
$$
- can also be written as
$$
T_{\mu{}\nu{}} = \rho{}(t)U_{\mu{}}U_{\nu{}}+P(t)\left[ g_{\mu{}\nu{}}+\frac{1}{c^{2}}U_{\mu{}}U_{\nu{}} \right]
$$
- we can use $g_{\nu{}\mu{}}g^{\mu{}\alpha{}}= \delta{}_{\nu{}}^{\alpha{}}{}$
$$
{T^{\mu{}}}_{\nu{}} = \rho{}U^{\mu{}}U_{\nu{}} + P(t)\left[ \delta{}^{\mu{}}_{\nu{}}+\frac{1}{c^{2}}U^{\mu{}}U_{\nu{}} \right]

$$
- due to isotropy $U_{\mu{}}=(-c,0,0,0){}$ thus
$$
T^{\mu{}}_{\nu{}} =\begin{pmatrix}
-\rho{}c^{2} &  &  &  \\
 & p &  &  \\
 &  &  p &  \\
 &  &   & p
\end{pmatrix}
$$
- we also have **equation of state** $P(t) = P(\rho{}){}$
- we have Einstein's field equation
$$
R_{\mu{}\nu{}} - \frac{1}{2} g_{\mu{}\nu{}}R = -\frac{8\pi{}G}{c^{4}} T_{\mu{}\nu{}} +\Lambda{}g_{\mu{}\nu{}}
	$$
- we can look at the $R_{00}{}$ term to see
$$
\dot{a}^{2} = \frac{8\pi{}Ga^{2}}{3}\rho{}+\frac{\Lambda{}ac^{2}}{3}-Kc^{2}
$$
- look at the $R_{rr}{}$
$$
\ddot{a} =- \frac{4\pi{}Ga}{3}\left[ \rho{}(t)+\frac{3P(t)}{c^{2}} \right] +\frac{\Lambda{}ac^{2}}{3}
$$
- this is the **Friedmann-Lemaitre** FL equations
- introduce the **Hubble parameter**
$$
H(t) = \frac{\dot{a}}{a} \equiv \text{expansion}
$$
- introduce the critical density
$$
\rho{}_{c} = \frac{3H(t)^{2}}{8\pi{}G}
$$
- useful to write equation in terms of cosmological redshift $z{}$ as we can't directly observe $a{}$
$$
z = \frac{a_{0}}{a(t)}-1
$$
	- generally subscript zero means at time $t_{0}{}$ which for normalisation usually set $a_{0}=a(t_{0})=1{}{}$
$$
z = \frac{\lambda{}_{0}}{\lambda{}}-1
$$
- we can then get
$$
\rho{}_{c}(z) = \rho{}(z) +\frac{\Lambda{}c^{2}}{8\pi{}G} - \frac{3Kc^{2}(1+z)^{2}}{8\pi{}G}
$$
- we will define relative densities $\Omega{}_{i} = \rho{}_{i}(z)/\rho{}_{c}(z){}$ thus
$$
1 = \Omega{}_{m}(z)+\Omega{}_{\gamma{}}(z)+\Omega{}_{\Lambda{}}+\Omega{}_{K}{}
$$
- we get relationships to redshift of
	- $\rho{}_{m}(z)\propto (1+z)^{3}{}$
	- $\rho{}_{\gamma{}}(z)\propto(1+z)^{4}{}$
	- $\rho{}_{\Lambda{}}\propto \text{const}{}$
	- $\rho{}_{K}\propto (1+z)^{2}{}$
- we may therefore rewrite as
$$
H^{2}(z)=H_{0}^{2}[\Omega{}_{m,0}(1+z)^{3}+\Omega{}_{\gamma{},0}(1+z)^{4}+\Omega{}_{\Lambda{},0}+\Omega{}_{K,0}(1+z)^{2}]
$$
- we measured $\Omega{}_{m,0}=0.317{}$, $\Omega{}_{\Lambda{}}=0.683{}$ and $H_{0} = 67.2{}$

---

- consider comoving, particle, horizon
$$
\begin{align}
R_{h}[t] c\eta  & = c\int_{0}^{t}\frac{dt'}{a(t')} \\
\text{physical: }R^{\text{ph}}_{h}[t]  &= a R_{h}
\end{align}
$$



# Related

