---
old: true
Tags:
  - year-2
Index:
Class:
  - Statistical Mechanics of Simple Systems
Topics:
  - einstein model
  - heat capacity of solids
  - rotational partition function
  - equipartition theorem
---
up: [[Statistical Mechanics of Simple Systems.base]]

# Einstein Model and Rotational Partition Functions

## Setting up the model
The Einstein model treats a crystal as $N$ independent atoms, each vibrating as a 3D quantum harmonic oscillator at the *same* frequency $\omega$ (ignoring the real spread of vibrational frequencies). Using the composite-system result that a 3D oscillator is three independent 1D oscillators, and the single-oscillator mean energy $U_1=\hbar\omega/2+\hbar\omega/(e^{\beta\hbar\omega}-1)$, the total energy of the crystal (relative to some equilibrium energy $U_0$) is
$$U = U_0 + 3Nk_B\hbar\omega\left(\frac12+\frac{1}{e^{\beta\hbar\omega}-1}\right)$$
Differentiating with respect to $T$ gives the heat capacity:
$$C_V = 3Nk_B\left(\frac{\beta\hbar\omega}{2}\right)^2\frac{1}{\sinh^2(\beta\hbar\omega/2)}$$

## Successes and the low-temperature failure
At high $T$ ($k_BT\gg\hbar\omega$), this correctly reduces to the classical **Dulong-Petit** law $C_V=3Nk_B$ — each of the $3N$ vibrational quadratic degrees of freedom contributing $\tfrac12k_BT$ by equipartition. But at low $T$, the model predicts $C_V\propto e^{-\hbar\omega/k_BT}/T^2$, an exponential freeze-out — because all $3N$ oscillators share exactly the same gap $\hbar\omega$, so once $k_BT\ll\hbar\omega$ they can barely be excited at all. Real crystals instead show $C_V\propto T^3$ at low $T$. The fix is the **Debye model**, which replaces the single frequency with a realistic spectrum of vibrational mode frequencies (a phonon density of states) — allowing low-frequency modes to stay thermally active even at very low $T$.

## From quantised rotor levels to the high-T partition function
A rigid rotor has energy levels $E_l=l(l+1)\hbar^2/2I$ with degeneracy $g_l=2l+1$, giving $\mathcal Z_1=\sum_{l=0}^\infty(2l+1)e^{-\beta l(l+1)\hbar^2/2I}$. Defining a characteristic temperature $\theta=\hbar^2/2Ik_B$, at low $T$ only the first few terms matter ($\mathcal Z_1\approx1+3e^{-2\theta/T}+\dots$), but at high $T$ ($T\gg\theta$, many levels populated) the level spacing becomes small compared to $k_BT$ and the sum can be approximated as an integral:
$$\mathcal Z_1 \approx \int_0^\infty (2l+1)e^{-l(l+1)\theta/T}\,dl = \frac{T}{\theta}$$
This gives, for $N$ rotators, $U=Nk_BT$ and $C=Nk_B$ — a full $k_BT$ per rotator, not the $\tfrac12k_BT$ of a single quadratic term.

## Equipartition and why rotation contributes a full $k_BT$
The **equipartition theorem** states each independent quadratic term in the Hamiltonian contributes $\tfrac12k_BT$ to the mean energy, provided that mode is thermally excited ($k_BT$ large compared to its level spacing). Rotational kinetic energy $L^2/2I$ is quadratic in *two* independent variables (giving two rotational degrees of freedom for a linear rotor), so it contributes $2\times\tfrac12k_BT=k_BT$ total — matching the integral result above. This same reasoning explains why vibrational and rotational modes "freeze out" (drop below their equipartition contribution) at low temperature: equipartition only applies once $k_BT$ exceeds the mode's characteristic energy spacing, exactly as seen in the quantum harmonic oscillator.

# Related
- [[Factorising Partition Functions and the Quantum Harmonic Oscillator]]
- [[Factorising Partition Functions and the Quantum Harmonic Oscillator]]
