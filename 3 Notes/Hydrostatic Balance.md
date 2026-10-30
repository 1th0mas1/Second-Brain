---
old: false
Tags:
  - w-ing
Index: 2.2
Class:
  - Atmospheres and Oceans
Topics:
  - Dry thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Hydrostatic Balance

## Derivation

![[Pasted image 20260928111144.png]]
- newton first law implies for hydrostatic balance
$$
\left[ p(z+\Delta{}z) - p(z) \right] \delta{}A = -\rho{}g\Delta{}z \delta{}A
$$
- here we are using $g = GM_{p}/(R_{p}+z)^{2}\approx{}GM_{p}/R_{p}^{2}{}$ is gravity assumed to be constant in thin-atmosphere
$$
\frac{p(z+\Delta{}z)-p(z)}{\Delta{}z} = -\rho{}g
$$
- using infinitesimal limit we see
$$
\lim_{ z \to 0 } \frac{p(z+\Delta{}z)-p(z)}{\Delta{}z} = \frac{dp}{dz}
$$
- thus we rewrite hydrostatic balance as
$$
\frac{dp}{dz} = -\rho{}g
$$
- this is a very good approximation for large-scale flow
- constant $g$ fine for tropospheres but worse higher up
	- letting $g = GM_{p}/r^{2}$ gives $p \to{}$ nonzero constant as $r\to{}\infty$ - unphysical
	- fix by adding outflow - *Parker wind*
		- implies every atmosphere constantly loses mass to space
- key assumption is vertical acceleration is negligible
	- ie $Dw/Dt$ much smaller than pressure gradient and gravity terms
	- things still move vertically, just small in vertical force budget
- breaks down for convection and weather fronts
- since $\rho{}, g>0$ pressure is monotonic in $z$
	- can use pressure coordinates instead of height
		- historically useful as balloons can easily measure pressure but not height

## Implications of hydrostatic balance

- integrate vertically assuming constant gravity we find surface density (mass per area) in a given atmosphere column increases with pressure and decreases with gravity
$$
\frac{\text{mass}}{\text{area}} = \Sigma{}= \frac{p}{g}
$$
- pressure at a level is set by weight of atmosphere above it
	- $\Delta{} p/g$ is mass per area in a layer
	- e.g. 1-10 bar holds ~10x mass of 0.1-1 bar
	- column mass above a level sets opacity above it - matters for radiative transfer
- substitute in ideal gas law and integrate we find (assuming g constant)
$$
\begin{align}
\frac{1}{p}\frac{dp}{dz}  & = - \frac{g}{RT} \\
\ln \left( \frac{p}{p_{0}} \right)  & = - \int _{z_{0}}^{z} \frac{g}{RT}dz' \\
p = p_{0}\exp\left( -\int_{z_{0}}^{z}\frac{g}{RT}dz' \right) =  & p_{0}\exp\left( -\int_{z_{0}}^{z}\frac{dz'}{H} \right) 
\end{align}
$$
- $H = RT/g{}$ is the pressure scale height
	- hotter, lighter (low $\mu$) or lower gravity atmospheres are puffier
	- earth near surface $H\approx{}8.5\text{ km}$
- for isothermal atmosphere this simplifies to
$$
p=p_{0}e^{-z/H}
$$
- $H{}$ is thus the 'isothermal' scale height

## Vertical structure of planetary atmospheres

- in Earth's atmosphere the dependence of pressure and density on height is approximately exponential
![[Pasted image 20260928135417.png|455]]
- slight deviations due to change in temperature with height
	- isothermal approximation is insufficient to calculate detailed profile
- dependence of temperature on height is not so straightforward
	- earth has multiple atmospheric levels defined by the temperature gradient
	- region near surface where temperature decreases with increasing height is *troposphere*
	- region overlying that where temperature increases with height is *stratosphere*
	- these are ubiquitous in our solar system
- boundary is the *tropopause*
	- below: convection dominates heat transport so profile close to adiabat
	- above: radiation dominates, very stable so convection can't take hold
		- why anvil clouds spread out at tropopause - strong restoring force
	- height set partly by vigour of convection and partly by radiative processes
	- sits near ~0.1 bar for many solar system bodies
- stratosphere only warms with height if there's a shortwave absorber
	- eg ozone on earth, photochemical haze on pluto and triton
	- venus: temperature still decreases, just less steeply
- plotted with log p on y-axis as $\ln p$ acts as quasi-height ($z \approx{} -H\ln(p/p_{0})$)
	- 'steep' lapse rate means large change in $T$ with height
		- looks *flat* on a $T$ vs log p plot
![[Pasted image 20260928140541.png|558]]


# Related

- [[Waves in Fluids: Sound, Surface and Internal Gravity Waves]]
- 