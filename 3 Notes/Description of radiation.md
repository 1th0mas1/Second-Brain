---
old: false
Tags:
  - w-ing
Index: 7.1
Class:
  - Atmospheres and Oceans
Topics:
  - Radiative transfer 1
---
up: [[Atmospheres and Oceans.base]]

# Description of radiation

## Solid angle

- consider a ray
	- ie a unit vector pointing in a given direction
- describe ray by spherical coordinates $(\theta{},\phi{}){}$, and contains information about direction but not length
- a **solid angle**, $\Omega{}{}$, is a measure of set of rays pointing in a range of directions
	- integrate over all directions we get $\Omega{} = 4\pi{}{}$
	- integrate over just upward directions we get $\Omega{} = 2\pi{}{}$
![[Pasted image 20261007165955.png|550]]

## Radiance

- **radiance**, typically $I_{\nu{}}{}$ (or $B_{\nu{}}{}$ for blackbody) is rate at which radiation energy flows per unit frequency (or wavelength) per unit solid angle per unit time per unit area of a surface perpendicular to direction identified by $\vec{\mathcal{L}}{}$
	- radiance is sometimes called *intensity*
- unit of radiance is $\text{W}\text{ m}^{-2}\text{Hz}^{-1}\text{steradian}^{-1}{}$
- radiance is positive by definition
- $I_{\nu{}}d\nu{}d\Omega{}dA{}$ is the radiation energy between frequencies $\nu{}{}$ and $\nu{}+d\nu{}{}$, direction within solid angle $d\Omega{}{}$ of vector $\vec{\mathcal{L}}{}$ that flows per unit time through area $dA{}$ perpendicular to $\vec{\mathcal{L}}{}$
![[Pasted image 20261007170720.png|500]]

## Flux

- **flux** (typically $F_{\nu{}}{}$) is the total radiation energy per unit frequency (or wavelength) per unit area, of all directions
$$
F_{\nu{}} = \int_{\Omega{}{}} I_{\nu{}}\cos \theta{}d\Omega{} = \int_{0}^{2\pi{}}\int_{0}^{\pi{}}I_{\nu{}}(\phi{},\theta{})\cos \theta{} \sin \theta{} d\theta{}d\phi{}
$$
-  $\cos \theta{}{}$ as flux is measured what's crossing surface *perpendicularly*
- we can consider upward and downward fluxes
$$
\begin{align}
F_{\nu{}}^{+}  & = \int_{0}^{2\pi{}}\int_{0}^{\pi{}/2}I_{\nu{}}(\phi{},\theta{})\cos \theta{}\sin \theta{}d\theta{}d\phi{} \\
F_{\nu{}}^{-} & =-\int_{0}^{2\pi{}}\int_{\pi{}/2}^{\pi{}}I_{\nu{}}(\phi{},\theta{})\cos \theta{}\sin \theta{}d\theta{}d\phi{}
\end{align}
$$
- thus we see $F_{\nu{}}= F_{\nu{}}^{+}-F_{\nu{}}^{-}{}$
- total flux is given by
$$
F \equiv \int_{0}^{\infty }F_{\nu{}}d\nu{}= \int_{0}^{\infty }F_{\lambda{}}d\lambda{}
$$
- we note for *isotropic radiation* $F_{\nu{}}^{+}=F_{\nu{}}^{-}=\pi{}I_{\nu{}}{}$
	- thus $F_{\nu{}} =0{}$




# Related

- [[Adiabatic Processes and Black Body Radiation]]
- 