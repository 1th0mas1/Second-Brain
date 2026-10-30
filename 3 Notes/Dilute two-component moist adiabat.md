---
old: false
Tags:
  - w-ing
Index: 5.3
Class:
  - Atmospheres and Oceans
Topics:
  - Moist thermodynamics
---
up: [[Atmospheres and Oceans.base]]

# Dilute two-component moist adiabat

- a simplified form of [[Two-component moist (pseudo)-adiabat]] is the *dilute two-component moist adiabat*
$$
\frac{d\ln T}{d \ln p} = \frac{R_{u}+\frac{L\xi{}}{T}}{c_{p}+\frac{L^{2}\xi{}}{R_{u}T^{2}}}
$$
- here we define $\xi{}=p_{\text{sat}}/p_{d}{}$ is mixing ratio of the condensible gas 
	- ie ratio of saturation vapour pressure to the partial pressure of the dry gas
- $L{}$ and $c_{p}{}$ are written per mole in this equation

## Discussion

- here we assumed there is a small enough abundance of condensible such that partial pressure doesn't have significant contribution
- dilute limit is reasonable for earth
	- not for atmospheres which are composed of a condensible with high mass mixing ratio
	- breaks down for $\xi{}\gtrsim{}0.05$ - eg warm (~350 K) surfaces
- why dilute form rather than dry or full two-component
	- $q\ll 1$ so drop $q\, c_{p,c}$ type terms
	- but $L$ large so terms in $Lq$ must be kept
- note that $\xi{}\to{}0{}$ we recover dry adiabat, $\xi{}\to{}\infty{}$ we recover one-species moist (pseudo)-adiabat
![[Pasted image 20261004121051.png|505]]
- moist adiabat becomes shallower due to additional latent heat release as saturated parcels with higher concentration rise and condense
- we find moist adiabatic lapse rate is shallower than the dry adiabatic lapse rate if:
$$
\begin{align}
\frac{R_{u}+\frac{L\xi{}}{T}}{c_{p}+\frac{L^{2}\xi{}}{R_{u}T^{2}}} & < \frac{R_{u}}{c_{p}} \\
\frac{1+\frac{L\xi{}}{R_{u}T}}{1+\frac{L^{2}\xi{}}{c_{p}R_{u}T^{2}}} & < 1
\end{align}
$$
- in large $L{}$ limit we find criterion implies $L/(Tc_{p})>1{}$ exactly the same condition as for single-component moist adiabats
- note the moist adiabat starts to deviate from single-component gas when dry terms in numerator and denominator become important
	- $R_{u}{}$ and $c_{p}{}$ ie not involving $\xi{}{}$
- using numerator alone:
	- deviation from single-component moist adiabat occurs when $\xi{}\lesssim \frac{RT}{L}{}$
		- for earth this is $\xi{}\sim{}0.05{}$
		- roughly order magnitude higher than typical mixing ratio of water vapour on earth
			- moist adiabat on earth cannot be well represented in single-component limit
- implies moist adiabat depends on $\xi{}{}$ itself
	- in turn depends on pressure as $\xi{}{}$ is sensitive to tempeerature through [[Clausius-Clapeyron relation||clausius-clapeyron]]
	- moist-adiabatic gradient converge towards dry adiabatic gradient in upper troposphere as $\xi{}\to{} 0{}$

# Related