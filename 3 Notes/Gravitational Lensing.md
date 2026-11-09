---
old: false
Tags:
  - w-ing
Index: 9
Class:
  - Astrophysics
Topics:
  - Cosmology
---
up: [[Astrophysics.base]]

# Gravitational Lensing

- gravity bends path of photons
	- this makes gravitational lensing powerful tool to study mass distribution of universe
	- independent of if large scale structures have reached equilibrium

## Lensing by a compact object

![[Pasted image 20261104135924.png|514]]
- sun bending light was first test of general relativity
- if gravity of a mass $M{}$, located at point $L{}$, bends light of a source located at $S'{}$ into image plane
	- this plane is perpendicular to line $OL{}$
	- the source will then appear to be located at point $I{}$
	- this was predicted to be given by
$$
\boxed{\alpha{}\approx{}\frac{4GM}{bc^{2}} = \frac{2R_{s}}{b}}
$$
- where $R_{s} = 2GM/c^{2}{}$ is Schwarzschild radius beyond which light cannot escape from gravitational pull
	- we recall this is twice value of predicted newtonian deflection
	- this approximation holds as long as $\alpha{} \ll 1{}$
- ---
- we can now calculate where the image of distant source appears if point mass is placed in front of it
- if the point mass wasn't present we would observe source at angle $\beta{}{}$
	- for $d_{s}\gg y{}$ we use small angle formula to see $\beta{}\approx{}y/d_{S}{}$
	- for a small bending the displacement of point source is given by $x-y = \alpha{} d_{\text{LS}}{}$
	- the impact parameter $b{}$ measuring distance between the intersection of a light ray emitted by source and lens plane to L
		- $b = \theta{} d_{L}{}$ if $d_{L}\gg b{}$
	- thus we find
$$
\theta{}-\beta{} = \alpha{} \frac{d_{\text{LS}}}{d_{S}} = \frac{1}{\theta{}}\frac{4GM}{c^{2}} \frac{d_{\text{LS}}}{d_{\text{L}}d_{\text{S}}} \equiv \frac{1}{\theta{}}\theta{}_{E}^{2}
$$
- where $\theta{}_{E}{}$ is called *Einstein radius*
$$
\theta{}^{2} - \beta{}\theta{} - \theta{}_{E}^{2} = 0
$$
- thus there are solutions
 $$
 \boxed{\theta{} = \frac{\beta{}\pm \sqrt{ \beta{}^{2}+4 \theta{}_{E}^{2} }}{2}}
 $$
 - we thus see if we have a point source located exactly behind the lens
	 - i.e. point S
	- we will see a circle of radius $\theta{}_{E}{}$ (as $\beta{}{}=0$)
- when $\beta{}>0{}$ the image $\theta{}_{+}{}$ is further from the lens since $\theta{}_{+}>\beta{}{}$ and lies outside Einstein radius $\theta{}_{+}>\theta{}_{E}{}$
- the image at $\theta{}_{-}{}$ is inverted since $\theta{}_{-}<0{}$ and lies within $\theta{}_{E}{}$ as $\theta{}_{-}>-\theta{}_{E}{}$

## Lensing by extended sources

- when the lens is entire galaxy or cluster of galaxies we must rewrite equation as
$$
\underline{\alpha{}}[\underline{b}] = \sum_{i} \frac{4GM_{i}}{c^{2}}\frac{\underline{b}-\underline{b}_{i}}{|\underline{b}-\underline{b}_{i}|^{2}}
$$
	- here $M_{i}{}$ is individual point masses in the length, $\underline{b}_{i}{}$ is their position w.r.t lens centre
	- $\alpha{}{}$ and $b{}$ become vectors as spherical symmetry of a single point-like lens broken
- if lens is compact to both $d_{\text{L}}{}$ and $d_{\text{LS}}{}$ then we can treat as *continuous* surface density $\Sigma{}(\underline{b}){}$
	- we must then specify the light ray's closest approach to center by a vector $\underline{b}{}$ and integrate
$$
\underline{\alpha{}}[\underline{b}]\equiv \underline{\nabla}\Psi{}_{\text{L}}[\underline{b}],\quad{} \Psi{}_{L}[\underline{b}] = \frac{4G}{c^{2}} \int_{S} \Sigma{}(\underline{b}')\ln |\underline{b}-\underline{b}'|d^{2}\underline{b}'
$$
	- here the *lensing potential* $\Psi{}_{L}{}$ has similar form to gravitational potential $\phi{}(\underline{b}){}$
		- however it is now 2D not 3D
		- and $1/|\underline{b}-\underline{b}'|{}$ replaced by $\ln|\underline{b}-\underline{b}'|{}$
	- suppose $\Sigma{}{}$ is axis symmetry so only depends on $R{}$
	- we can show that the bending of ray at radius $b{}$ from centre only depends on $M_{<b}{}$
		- mass within projected within that circle
$$
\alpha{}(b) = \frac{4G}{bc^{2}} \int_{0}^{b}\Sigma{}(R)2\pi{} RdR = \frac{4G}{c^{2}}\frac{M_{<b}}{b}
$$
	- now consider again the bending of light by a galaxy of a galaxy behind it
$$
\theta{}-\beta{} = \alpha{} \frac{d_{\text{LS}}}{d_{\text{S}}} = \frac{1}{\theta{}} \frac{4GM_{<b}}{c^{2}} \frac{d_{\text{LS}}}{d_{\text{L}}d_{\text{S}}}
$$
- if we remember that $b=\theta{} d_{L}{}$
$$
\beta{} = \theta{}\left[ 1- \frac{\bar{\Sigma{}}_{<b}}{\Sigma{}_{\text{crit}}} \right] 
$$
	- here $\bar{\Sigma{}}_{<b} \equiv {M}_{<b}/(\pi{} b^{2}){}$
	- $\Sigma_{\text{crit}} \equiv{} (c^{2}/4\pi{} G)(d_{S}/d_{L}d_{LS}){}$
- usually $\Sigma{}(R){}$ declines from a peak at the centre so the average will fall as well
- when $\beta{} = 0{}$ we see a ring forms where $b{}$ creates equality $\bar{\Sigma{}}_{<b}[b_{E}] = \Sigma{}_{\text{crit}}{}$
	- ie $M_{<b_{E}}/(\pi{}b_{E}^{2}) = \Sigma{}_{\text{crit}}{}$
	- this forms angular size $\theta{}_{E} = b_{E}/d_{L}{}$
- if central surface density is smaller than $\Sigma{}_{\text{crit}}{}$ no rings observed
- we also note that all these distances are *cosmological* - cannot ignore expansion of universe
	- as we are only concerned with angles we use *angular distances* for $d_{L}{}$, $d_{LS}{}$ and $d_{S}{}$
		- at $t_{\text{em}}{}$ photon emitted, a galaxy of size $D{}$ is located at *comoving distance* $r_{\text{em}}{}$
		- from observer this galaxy subtends angle
$$
\phi{} = \frac{D}{a_{\text{am}}r_{\text{em}}} = \frac{D(1+z)}{a_{0}r_{\text{em}}} = \frac{D(1+z)}{r_{\text{em}}} \equiv \frac{D}{d_{A}}
$$
	- here we naturally defined angular distance as $d_{A}\equiv r_{\text{em}}/(1+z){}$
- we can find for Einstein‑de Sitter universe with $\Omega{}_{M}[z] = 1{}$ that
$$
r_{\text{em}} = \frac{2c}{H_{0}}\left( 1-\frac{1}{\sqrt{ 1+z }} \right)
$$
- thus:
$$
\boxed{d_{A} = \frac{2c}{H_{0}(1+z)}\left( 1-\frac{1}{\sqrt{ 1+z }} \right) }
$$

![[Pasted image 20261104163604.png|487]]

## Weak gravitational lensing

- when galaxies lie behind a lensing cluster but located well outside Einstein radius images only weakly modified
	- slight magnification
	- slight stretching in tangential direction (circles become ellipses)
- *shear* $\gamma{}{}$ used in weak lensing studies
	- measures difference in amount of compression lens exerts on source in tangential and radial directions
	- for image located at a distance $b\gg \theta{}_{E}d_{L}{}$ we have
$$
\gamma{} \equiv \frac{1}{2}\left[ \frac{d\beta{}}{d\theta{}} - \frac{\beta{}}{\theta{}} \right]  = \frac{\bar{\Sigma{}}_{<b} - \Sigma{}[b]}{\Sigma{}_{\text{crit}}}
$$

# Related