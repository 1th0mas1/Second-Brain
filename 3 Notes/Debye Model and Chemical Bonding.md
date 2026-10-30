---
old: true
Tags:
  - year-3
Index:
Class:
  - Condensed Matter Physics
Topics:
  - debye model
  - phonons
  - specific heat of solids
  - ionic bonding
  - covalent bonding
  - electronegativity
---
up: [[Condensed Matter Physics.base]]

# Debye Model and Chemical Bonding

## Classical and Einstein Models

**Dulong-Petit law**: classically each atom behaves as a 3D harmonic oscillator, and equipartition gives $C=3k_B$ per atom. This matches most solids at high $T$ but fails at low $T$, where quantum effects freeze out vibrational modes and $C\to0$.

**Einstein's model** treats each atom as an independent quantum harmonic oscillator of a single frequency $\omega$. The partition function $Z_\text{1D}=\sum_n e^{-\beta\hbar\omega(n+1/2)}$ gives mean energy $\langle E\rangle=\hbar\omega(n_B(\beta\hbar\omega)+\tfrac12)$ with Bose occupation $n_B(x)=1/(e^x-1)$; generalising to 3D ($\langle E_{3D}\rangle=3\langle E_{1D}\rangle$) reproduces Dulong-Petit at high $T$ ($k_BT\gg\hbar\omega$) but predicts $C\sim(\hbar\omega/k_BT)^2e^{-\hbar\omega/k_BT}$ at low $T$ — an exponential freeze-out that falls off far too fast against the experimentally observed $C\propto T^3$.

## Debye's Phonon Model and the $T^3$ Law

Debye's fix is to stop treating atoms as independent oscillators and instead quantise the *collective* vibrations of the lattice as sound waves — **phonons**, bosonic quasiparticles with $E=\hbar\omega$, $p=\hbar k$, obeying Bose-Einstein statistics, with dispersion $\omega=v|\vec k|$ ($v$ = sound speed). Converting the sum over $\vec k$ to an integral (via periodic boundary conditions) and using spherical symmetry gives a density of states $g(\omega)=N\,9\omega^2/\omega_D^3$, so
$$\langle E\rangle=\int_0^\infty d\omega\,g(\omega)\,\hbar\omega\,n_B(\beta\hbar\omega)$$
Differentiating and using $\int_0^\infty x^3/(e^x-1)\,dx=\pi^4/15$ gives, at low $T$, exactly the observed law:
$$C = Nk_B\frac{12\pi^4}{5}\left(\frac{T}{T_D}\right)^3$$
This is the same Bose-occupation mathematics as blackbody radiation, but for sound instead of light. The **cutoff (Debye) frequency** $\omega_D$ (with $k_BT_D=\hbar\omega_D$) is fixed by demanding exactly $3N$ total modes for $N$ atoms — $3N=\int_0^{\omega_D}g(\omega)\,d\omega$ — which also recovers Dulong-Petit at high $T$ where $n_B(\beta\hbar\omega)\to k_BT/\hbar\omega$ gives $\langle E\rangle=3Nk_BT$. The cutoff feels somewhat ad hoc (it assumes the linear $\omega=vk$ dispersion holds all the way to arbitrarily large $k$, which is not exact at intermediate temperatures), but it correctly interpolates between the $T^3$ and Dulong-Petit regimes.

## Ionic Bonding

An electron is transferred from a low-electronegativity atom $A$ to a high-electronegativity atom $B$ (e.g. $\text{Na}+\text{Cl}\to\text{Na}^++\text{Cl}^-\to\text{NaCl}$), leaving oppositely charged ions bound by Coulomb attraction. **Ionisation energy** (IE) is the cost of removing an electron from $A$ to form $A^+$; **electron affinity** (EA) is the energy gained adding an electron to $B$ to form $B^-$. Naively $\Delta E_{A+B\to A^++B^-}=\text{IE}_A-\text{EA}_B$, but treating the subsequent $A^++B^-\to AB$ attraction as pure Coulomb over-predicts the energy released, since it ignores short-range repulsion between the ion cores; including the (empirically smaller) **cohesive energy** gives
$$\Delta E = \text{(Ionisation Energy)}_A - \text{(Electron Affinity)}_B - \text{(Cohesive Energy)}_{AB}$$
and the bond forms only if $\Delta E<0$. **Electronegativity** $=\tfrac12(\text{IE}+\text{EA})$ quantifies how strongly an atom pulls electrons toward itself, and the transfer always runs from the lower- to the higher-electronegativity atom.

## Covalent Bonding

Here electrons are shared rather than transferred. The **particle-in-a-box** picture makes the energy gain concrete: an electron confined to one atom sits in a box of size $L$ with energy $E=\hbar^2\pi^2/2mL^2$; once two atoms are close enough that the electron delocalises over both, the effective box doubles to $2L$, lowering the energy to $E=\hbar^2\pi^2/2m(2L)^2$. This kinetic-energy reduction from delocalisation — competing against increased Coulomb repulsion — is the essential quantum-mechanical driver of covalent bonding, and the resulting low-energy state is the **bonding orbital** (the higher-energy alternative being the **antibonding orbital**).

The same physics falls out of the **molecular-orbital / tight-binding** treatment: for one electron and two fixed nuclei, $H=K+V_1+V_2$, solved variationally with trial state $|\psi\rangle=\phi_1|1\rangle+\phi_2|2\rangle$ built from single-atom ground states $|1\rangle,|2\rangle$ (energy $\epsilon_0$ each). The effective $2\times2$ Hamiltonian has diagonal terms $\epsilon_0+V_\text{cross}$ (the extra Coulomb pull from the other nucleus) and off-diagonal **hopping** term $-t=\langle1|V_2|2\rangle$. Diagonalising gives bonding/antibonding eigenstates split by $2t$ — exactly the two-site version of the tight-binding dispersion used for extended solids.

# Related
- [[Factorising Partition Functions and the Quantum Harmonic Oscillator]]
- [[Einstein Model and Rotational Partition Functions]]
- [[Adiabatic Processes and Black Body Radiation]]
- [[Tight Binding Model and Band Filling]]
- [[Quantum Harmonic Oscillator and the Hydrogen Atom]]
- [[Quantum Harmonic Oscillator and the Hydrogen Atom]]
