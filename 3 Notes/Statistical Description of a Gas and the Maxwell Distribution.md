---
old: true
Tags:
  - year-2
Index:
Class:
  - Kinetic Theory
Topics:
  - kinetic pressure
  - isotropic distribution
  - thermodynamic limit
  - maxwell distribution
  - thermal velocity
---
up: [[Kinetic Theory.base]]

# Statistical Description of a Gas and the Maxwell Distribution

## Thermodynamic Limit and Fluctuations

Kinetic theory describes a gas statistically via the single-particle distribution function $f(\vec v)$ (or the phase-space density $F(\vec r,\vec v,t)$) rather than tracking every particle's trajectory. Writing the exact energy as $E=\sum_i \tfrac12 mv_i^2$ and assuming particle velocities are independent random variables, the relative RMS fluctuation of $E$ about the mean $U=\langle E\rangle$ scales as $\Delta E_\text{rms}/U \propto 1/\sqrt N$. So in the **thermodynamic limit** ($N\to\infty$, $V\to\infty$, $N/V$ fixed), fluctuations become negligible and $U$ sharply defines a single macroscopic state — justifying why a purely statistical description is physically adequate for systems with $N\sim10^{23}$.

## Kinetic Pressure

Pressure arises from momentum delivered by particles bouncing elastically off a wall. Each collision transfers momentum $\Delta p=2mv_z$; summing the flux of particles with $v_z>0$ striking a wall of area $A$ over time $t$ gives
$$P = mn\int d^3\vec v\, v_z^2\,f(\vec v) = mn\langle v_z^2\rangle$$
so pressure is fundamentally a momentum *flux* — momentum delivered per unit time per unit area — not a force acting at a distance. Assuming isotropy (below) this collapses to $P=\tfrac13mn\langle v^2\rangle = \tfrac23\frac UV$.

## Isotropic Distributions

A distribution is **isotropic** if there's no preferred direction, so $f(\vec v)$ depends only on speed $v=|\vec v|$ and $\langle v_x^2\rangle=\langle v_y^2\rangle=\langle v_z^2\rangle=\tfrac13\langle v^2\rangle$. Converting to spherical velocity coordinates, the speed distribution is $\tilde f(v)=4\pi v^2f(v)$ — the extra $v^2$ is the volume of the spherical shell in velocity space, not a feature of the underlying pdf. Isotropy holds at equilibrium with no external fields, and is one of the two assumptions (together with independence of the velocity components) used to derive Statistical Description of a Gas and the Maxwell Distribution.

## Deriving the Gaussian Form

Assume the gas is in equilibrium (homogeneous, stationary) so $f(\vec v)=f(v)=g(v^2)$ is isotropic, and additionally that the three velocity components are independent random variables, $f(\vec v)=h(v_x^2)h(v_y^2)h(v_z^2)$. Writing $\phi=\ln h$, $\psi=\ln g$, isotropy plus independence forces
$$\phi(v_x^2)+\phi(v_y^2)+\phi(v_z^2) = \psi(v_x^2+v_y^2+v_z^2)$$
which holds only if $\phi,\psi$ are linear in their arguments, i.e. $\psi(v^2)=-\alpha v^2+\text{const}$. So $f(\vec v)=Ce^{-\alpha v^2}$ — a Gaussian is the *unique* form consistent with both isotropy and independence of the velocity components. Normalising, and matching to $P=nk_BT=\tfrac13mn\langle v^2\rangle$, fixes $\alpha=m/2k_BT$, giving the standard form:
$$f(\vec v) = \left(\frac{m}{2\pi k_BT}\right)^{3/2}\exp\left(-\frac{mv^2}{2k_BT}\right)$$
with $v_\text{th}=\sqrt{2k_BT/m}$ the most probable speed.

## Validity of the Classical Limit

Two conditions must hold. **Non-relativistic**: thermal energy must stay well below rest energy, $k_BT\ll mc^2$, i.e. $T\ll T_\text{rel}\equiv mc^2/k_B$ (for air, $T_\text{rel}\sim10^{14}$K — always satisfied at lab temperatures). **No quantum correlations**: using the uncertainty estimate $\delta r\,\delta p\sim\hbar$, particles behave as classical, localisable points only if the interparticle spacing $n^{-1/3}$ greatly exceeds the thermal de Broglie wavelength, requiring $T\gg T_\text{deg}\equiv\hbar^2n^{2/3}/mk_B$ (a few K for air at 1 atm — comfortably satisfied away from liquefaction, but the reason liquid helium and degenerate electron gases need quantum statistics instead).

# Related
- [[Probability: Distributions, Random Variables and Joint Distributions]]
