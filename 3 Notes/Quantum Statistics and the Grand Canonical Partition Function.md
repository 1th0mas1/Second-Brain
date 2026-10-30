---
old: true
Tags:
  - year-2
Index:
Class:
  - Quantum Gases
Topics:
  - exchange symmetry
  - pauli exclusion principle
  - identical particles
  - grand canonical ensemble
  - fermi-dirac distribution
  - bose-einstein distribution
---
up: [[Quantum Gases.base]]

# Quantum Statistics and the Grand Canonical Partition Function

## Exchange symmetry and the spin-statistics link
For indistinguishable particles, swapping labels 1 and 2 cannot change any observable, so the wavefunction can change at most by a phase: $\psi(2,1)=e^{i\phi}\psi(1,2)$. Swapping twice must return the original state, $\psi(1,2)=e^{2i\phi}\psi(1,2)$, forcing $e^{2i\phi}=1$, i.e. $e^{i\phi}=\pm1$. Only two exchange symmetries are consistent with quantum mechanics: **bosons** (integer spin) have symmetric wavefunctions, $\psi(2,1)=+\psi(1,2)$; **fermions** (half-integer spin) have antisymmetric wavefunctions, $\psi(2,1)=-\psi(1,2)$. This particle/spin pairing (the spin-statistics theorem) is assumed here rather than derived, but it fixes which sign a given species uses.

## Pauli exclusion and occupation numbers
Setting both particles in the same single-particle state for fermions gives $\psi(1,1)=-\psi(1,1)$, forcing $\psi(1,1)=0$: no two fermions can occupy the same state. This shows up directly in the allowed occupation numbers of a single-particle level $i$: bosons allow $n_i=0,1,2,...$ (any number), fermions restrict $n_i=0$ or $1$. Crucially, this constraint holds even for an "ideal" (non-interacting) gas — the particles exert no force on each other, yet the system as a whole "knows" which states are already occupied. This is a purely quantum statistical correlation with no classical analogue, and it is the input that fixes the grand partition function and mean occupation numbers (Fermi-Dirac vs Bose-Einstein) used throughout quantum gas theory.

## Building the grand partition function
Working in occupation-number microstates $\alpha=\{n_i\}$, the energy and particle number of a microstate are $E_\alpha=\sum_i n_i\epsilon_i$ and $N_\alpha=\sum_i n_i$. The grand partition function factorises over single-particle states:
$$\mathcal Z=\sum_{\{n_i\}}e^{-\beta\sum_i n_i(\epsilon_i-\mu)}=\prod_i\sum_{n_i}e^{-\beta n_i(\epsilon_i-\mu)}$$
For fermions the inner sum only has $n_i=0,1$, giving $1+e^{-\beta(\epsilon_i-\mu)}$; for bosons $n_i$ runs over all non-negative integers, giving a geometric series $1/(1-e^{-\beta(\epsilon_i-\mu)})$. Combined:
$$\ln\mathcal Z = \pm\sum_i \ln\left[1\pm e^{-\beta(\epsilon_i-\mu)}\right] \quad (+\text{fermions}, -\text{bosons})$$

## Occupation numbers and thermodynamics
Differentiating $\ln\mathcal Z$ with respect to a single level's energy gives the mean occupation number directly, $\bar n_j = -\tfrac1\beta \partial\ln\mathcal Z/\partial\epsilon_j$, which evaluates to
$$\bar n_i = \frac{1}{e^{\beta(\epsilon_i-\mu)}\pm1}$$
**Fermi-Dirac** ($+$) or **Bose-Einstein** ($-$) statistics. Given the single-particle levels $\epsilon_i$ (from quantum mechanics) and a target density $n=N/V$, $\mu(n,T)$ is fixed implicitly by $N=\sum_i\bar n_i$. From here the mean energy $U=\sum_i\epsilon_i\bar n_i$, grand potential $\Phi=-k_BT\ln\mathcal Z=-PV$, and entropy $S=(U-\Phi-\mu N)/T$ all follow — this expression is the starting point for both the degenerate Fermi gas and Bose-Einstein condensation.

# Related
- [[Degenerate Fermi Gas, Heat Capacity and Bose-Einstein Condensation]]
- [[Degenerate Fermi Gas, Heat Capacity and Bose-Einstein Condensation]]
