---
old: true
Tags:
  - year-2
Index:
Class:
  - Statistical Mechanics of Simple Systems
Topics:
  - paramagnetism
  - curie's law
  - magnetic susceptibility
  - ideal gas partition function
  - phase space cells
---
up: [[Statistical Mechanics of Simple Systems.base]]

# Paramagnetic Solids and Polyatomic Ideal Gases

## Two-level partition function and magnetisation
A spin-1/2 paramagnet in field $B_\text{ext}$ has energy levels $\epsilon=\pm\mu_BB_\text{ext}$ (from $H=-\vec\mu\cdot\vec B$ with $g_J=2$). The single-particle partition function is $\mathcal Z_1 = e^{-\beta\mu_BB_\text{ext}}+e^{\beta\mu_BB_\text{ext}} = 2\cosh(\beta\mu_BB_\text{ext})$; since the spins are localised (distinguishable), the full partition function is simply $\mathcal Z=\mathcal Z_1^N$. From $U=-\partial\ln\mathcal Z/\partial\beta$ and the free energy $F=-Nk_BT\ln[2\cosh(\mu_BB_\text{ext}/k_BT)]$, the magnetisation follows from $M=-\tfrac1V(\partial F/\partial B_\text{ext})_T$:
$$M=\frac{N\mu_B}{V}\tanh\left(\frac{\mu_BB_\text{ext}}{k_BT}\right)$$

## Curie's law and the third-law check
Expanding $\tanh$ for $\mu_BB_\text{ext}\ll k_BT$ (high temperature or weak field) gives **Curie's law**, $M\propto B_\text{ext}/T$, i.e. susceptibility $\chi=\mu_0(\partial M/\partial B_\text{ext})_T\propto1/T$. In the opposite limit $\mu_BB_\text{ext}\gg k_BT$, $\tanh\to1$ and the magnetisation saturates at $M=N\mu_B$ — every spin aligned with the field. The entropy $S=(U-F)/T$ interpolates between these limits: at high $T$, $S\to Nk_B\ln2$ (all $2^N$ spin configurations equally likely, maximum ignorance); at low $T$, $S\to0$ (only the single all-aligned ground state is accessible) — a clean, exactly-solvable illustration of the third law of thermodynamics.

## Phase-space counting
Instead of quantising momentum states in a box directly, discretise position-momentum ("phase") space into cells of volume $\hbar^3$ (one quantum state per cell, from the uncertainty principle) and convert the resulting sum to an integral:
$$\mathcal Z_1 = \sum_r g_r e^{-\beta\epsilon_r} \approx \frac{1}{\hbar^3}\iiint d^3\vec r\iiint d^3\vec p\; e^{-\beta p^2/2m}$$
The position integral just gives $V$; the momentum integral (Gaussian, done in spherical coordinates) gives $(2\pi m/\beta)^{3/2}$, so
$$\mathcal Z_1 = V\left(\frac{2\pi m}{\hbar^2\beta}\right)^{3/2}$$
identical to $V/\lambda_\text{th}^3$ obtained from the quantised-box calculation — a shortcut that bypasses explicitly solving for quantised $\vec k$-states.

## Recovering thermodynamics
With indistinguishability, $\mathcal Z=\mathcal Z_1^N/N!$. Differentiating $\ln\mathcal Z$ gives $U = \tfrac32Nk_BT$ (equipartition: three quadratic momentum degrees of freedom per particle), and from the free energy $F=-k_BT\ln\mathcal Z$ one recovers the ideal gas law $P=Nk_BT/V$ and the Sackur-Tetrode entropy $S=Nk_B[\tfrac52-\ln(n\lambda_\text{th}^3)]$ — exactly the results from the more careful quantised-box derivation, confirming the phase-space counting shortcut is equivalent once the $\hbar^3$ cell size and $N!$ indistinguishability factor are both included.

# Related
- [[Canonical Ensemble and Thermal Equilibrium]]
- [[Classical Ideal Gas: Gibbs Paradox and the Sackur-Tetrode Equation]]
- [[Classical Ideal Gas: Gibbs Paradox and the Sackur-Tetrode Equation]]
