---
old: true
Tags:
  - year-2
Index:
Class:
  - Statistical Mechanics of Simple Systems
Topics:
  - factorisable partition function
  - independent degrees of freedom
  - harmonic oscillator partition function
  - zero point energy
---
up: [[Statistical Mechanics of Simple Systems.base]]

# Factorising Partition Functions and the Quantum Harmonic Oscillator

## Why additive energy factorises the partition function
Whenever the Hamiltonian splits into independent pieces acting on separate degrees of freedom, $\epsilon_{ij}=E_i+\varepsilon_j$, the single-particle partition function factorises:
$$\mathcal Z_1=\sum_i\sum_j e^{-\beta(E_i+\varepsilon_j)} = \left(\sum_i e^{-\beta E_i}\right)\left(\sum_j e^{-\beta\varepsilon_j}\right) = \mathcal Z_1^A\mathcal Z_1^B$$
Since $U_1=-\partial\ln\mathcal Z_1/\partial\beta$ and $\ln$ turns products into sums, the mean energies simply add: $U_1=U_1^A+U_1^B$, with no cross term — independent degrees of freedom never talk to each other statistically.

## Worked example: the 3D harmonic oscillator
A 3D oscillator has Hamiltonian $H=(p_x^2/2m+\tfrac12m\omega^2x^2)+(\text{y-term})+(\text{z-term})$ — three independent 1D oscillators. Each contributes identically by symmetry, so
$$\mathcal Z_1 = (\mathcal Z_1^{\text{1D}})^3 \quad\Rightarrow\quad U_\text{3D}=3\,U_\text{1D}$$
This factorisation trick generalises immediately: any Hamiltonian that separates into independent quadratic pieces (translational, rotational, vibrational modes of a molecule; spin and orbital degrees of freedom) gives a product of single-mode partition functions, and the mean energy is just the sum of each mode's contribution — the reason equipartition can be applied mode-by-mode rather than needing to solve the full coupled problem at once.

## Deriving the partition function
Quantum harmonic oscillator levels are $\epsilon_n=(n+\tfrac12)\hbar\omega$. Summing the Boltzmann factors as a geometric series,
$$\mathcal Z_1=\sum_{n=0}^\infty e^{-\beta(n+1/2)\hbar\omega} = e^{-\beta\hbar\omega/2}\sum_{n=0}^\infty e^{-n\beta\hbar\omega} = \frac{1}{2\sinh(\beta\hbar\omega/2)}$$
Differentiating $-\partial\ln\mathcal Z_1/\partial\beta$ gives the mean energy of a single oscillator:
$$U_1 = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega}-1}$$

## Low- and high-temperature limits
At low $T$ ($\beta\hbar\omega\gg1$), $U_1\to\hbar\omega/2 + \hbar\omega e^{-\beta\hbar\omega}$: the oscillator sits in its zero-point state and the heat capacity is exponentially suppressed, $C_\omega\to k_B(\beta\hbar\omega)^2e^{-\beta\hbar\omega}\to0$ — modes "freeze out" once $k_BT\ll\hbar\omega$. At high $T$ ($\beta\hbar\omega\ll1$), $U_1\to\hbar\omega/2+k_BT\approx k_BT$, recovering the classical equipartition result, with $C_\omega\to k_B$. For $N$ independent distinguishable oscillators (e.g. localised atoms), total energy and heat capacity simply scale by $N$: $U=NU_1$, $C=NC_\omega$ — the building block used directly in the Einstein model of a crystal.

# Related
- [[Einstein Model and Rotational Partition Functions]]
- [[Einstein Model and Rotational Partition Functions]]
