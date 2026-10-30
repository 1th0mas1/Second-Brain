---
old: true
Tags:
  - year-2
Index:
Class:
  - Quantum Gases
Topics:
  - fermi energy
  - degenerate fermi gas
  - fermi temperature
  - sommerfeld expansion
  - fermi gas heat capacity
  - bose-einstein condensation
  - critical temperature
---
up: [[Quantum Gases.base]]

# Degenerate Fermi Gas, Heat Capacity and Bose-Einstein Condensation

## Filling states up to the Fermi energy
At $T=0$ the Fermi-Dirac occupation $1/(e^{\beta(\epsilon-\mu)}+1)$ becomes a sharp step: $\bar n=1$ for $\epsilon<\mu(0)$, $\bar n=0$ above. Particles "stack up" from the lowest energy state until all $N$ are placed, defining the **Fermi energy** $\epsilon_F\equiv\mu(T=0)$ as the energy of the highest filled state. Fixing $N$ by integrating the density of states up to $\epsilon_F$,
$$N = \int_0^{\epsilon_F} g(\epsilon)\,d\epsilon \quad\Rightarrow\quad \epsilon_F = \frac{\hbar^2}{2m}\left(\frac{6\pi^2n}{2s+1}\right)^{2/3}$$
The $T=0$ picture (the "Fermi sea") is a good approximation whenever $T\ll T_F\equiv\epsilon_F/k_B$, the **Fermi temperature** — the width of the smeared-out step in the occupation function is only $\sim k_BT$, small compared to $\epsilon_F$ itself in this regime.

## Mean energy and degeneracy pressure
Averaging energy over the filled Fermi sea, $U/N = \int_0^{\epsilon_F}\epsilon\,g(\epsilon)\,d\epsilon\big/\int_0^{\epsilon_F}g(\epsilon)\,d\epsilon = \tfrac35\epsilon_F$, so even at absolute zero the gas has nonzero mean energy $U=\tfrac35N\epsilon_F$ — Pauli exclusion forces particles into higher momentum states purely because the low-energy ones are already full. This produces a **degeneracy pressure** $P=\tfrac25n\epsilon_F$ that is completely independent of temperature, since it comes from quantum statistics rather than thermal motion. This is the mechanism that holds white dwarfs (electron degeneracy pressure) and neutron stars (neutron degeneracy pressure) up against gravitational collapse, with no need for thermal pressure at all.

## A qualitative estimate of the linear term
At small but nonzero $T\ll T_F$, the Fermi-Dirac step is smeared over a width $\Delta\epsilon\sim k_BT$ around $\epsilon_F$. Only fermions within this thin shell can be thermally excited to nearby empty states — everyone else is Pauli-blocked, since the states they'd need to move to are already full. The number of excited particles is roughly $\Delta N_\text{excited}\sim g(\epsilon_F)\,k_BT$, and each gains an extra energy of order $k_BT$, so the excess energy above the $T=0$ value is
$$\delta U(T) \sim g(\epsilon_F)(k_BT)^2 \sim \frac{N(k_BT)^2}{\epsilon_F}$$
using $g(\epsilon_F)\sim N/\epsilon_F$. Differentiating gives the heat capacity
$$C_V \sim Nk_B\frac{T}{T_F}$$
— **linear in $T$**, not the classical $\tfrac32Nk_B$, because only a fraction $\sim T/T_F$ of the fermions are able to absorb thermal energy at all.

## Sommerfeld expansion and experimental signature
The **Sommerfeld expansion** makes this estimate quantitative by systematically expanding Fermi integrals in powers of $(T/T_F)^2$, giving the exact numerical prefactor for $C_V\propto T$ at low $T$, which crosses over and asymptotes to the classical $\tfrac32Nk_B$ once $T\gtrsim T_F$. This linear-in-$T$ electronic heat capacity is the standard experimental fingerprint of a degenerate Fermi gas — most famously conduction electrons in a metal, where $T_F$ is tens of thousands of kelvin, so room temperature is deep in the degenerate ($T\ll T_F$) regime and the linear term dominates the low-temperature specific heat once the phonon ($T^3$, Debye) contribution has died away.

## Why a critical temperature appears
For bosons, $\bar n_i=1/(e^{\beta(\epsilon_i-\mu)}-1)$ requires $\mu<\epsilon_0=0$ (ground state energy) to keep every occupation number positive. Converting the constraint $N=\sum_i \bar n_i$ to an integral over the continuum density of states gives a transcendental equation for $\mu$,
$$f(\beta\mu) \equiv \frac{2}{\sqrt\pi}\int_0^\infty \frac{\sqrt x\,dx}{e^{x-\beta\mu}-1} = \frac{n}{n_Q}$$
Since $\mu\le0$, the left side is bounded above: $f(\beta\mu)\le f(0)=\zeta(3/2)\approx2.612$. If $n/n_Q$ exceeds this bound the equation has no solution with $\mu<0$ — this happens below a **critical temperature**
$$T_c \approx \frac{2\pi\hbar^2}{mk_B}\left[\frac{n}{2.612(2s+1)}\right]^{2/3}$$

## The condensate below $T_c$
Below $T_c$, $\mu$ is pinned at (just below) zero, and the continuum integral no longer counts all $N$ particles — it only counts those in excited states, $N_\text{excited}=n_QVf(0) = N(T/T_c)^{3/2}$. The remainder collapses into the single ground state:
$$\bar n_0 = N - N_\text{excited} = N\left[1-(T/T_c)^{3/2}\right]$$
This is a genuine phase transition with no classical analogue — driven purely by quantum statistics (bosons statistically "prefer" to share a state, unlike fermions), not by any interaction between particles. Its heat capacity $C_V\propto T^{3/2}$ below $T_c$ has a discontinuous derivative at $T_c$, marking the transition. This ideal-gas picture is the starting point before adding weak interactions (Bogoliubov theory) to describe real condensates.

# Related
- [[Quantum Statistics and the Grand Canonical Partition Function]]
