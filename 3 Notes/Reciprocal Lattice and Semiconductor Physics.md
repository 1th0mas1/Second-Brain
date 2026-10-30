---
old: true
Tags:
  - year-3
Index:
Class:
  - Condensed Matter Physics
Topics:
  - reciprocal lattice
  - brillouin zone
  - fourier transform of lattice
  - semiconductors
  - doping
  - carriers
---
up: [[Condensed Matter Physics.base]]

# Reciprocal Lattice and Semiconductor Physics

## Defining the Reciprocal Lattice

For a direct lattice $\vec R=n_1\vec a_1+n_2\vec a_2+n_3\vec a_3$ (integers $n_i$, primitive vectors $\vec a_i$), the **reciprocal lattice** is the set of $\vec G$ satisfying $e^{i\vec G\cdot\vec R}=1$ for every $\vec R$ — the condition under which a plane wave $e^{i\vec G\cdot\vec r}$ looks identical at every direct lattice point. Writing $\vec G=m_1\vec b_1+m_2\vec b_2+m_3\vec b_3$ for integers $m_i$ and demanding $\vec a_i\cdot\vec b_j=2\pi\delta_{ij}$ automatically satisfies this, since $e^{i\vec G\cdot\vec R}=e^{2\pi i(\vec n\cdot\vec m)}=1$ for any integers $n_i,m_i$; this also confirms the reciprocal lattice is itself a genuine lattice. Explicitly, $\vec b_1=2\pi\,\vec a_2\times\vec a_3/[\vec a_1\cdot(\vec a_2\times\vec a_3)]$ (and cyclic permutations for $\vec b_2,\vec b_3$).

## Fourier Transform and Lattice Planes

The reciprocal lattice is literally the **Fourier transform** of the (periodic) density of the direct lattice: $\mathcal F[\rho(\vec r)]\propto\sum_{\vec G}\delta^D(\vec k-\vec G)$ — a set of delta-function peaks at reciprocal lattice points, diverging exactly when $\vec k$ hits the reciprocal lattice. This connects directly to diffraction: each reciprocal lattice vector $\vec G$ corresponds to a *family* of parallel, equally-spaced **lattice planes** normal to $\vec G$, with spacing $d=2\pi/|\vec G_\text{min}|$ set by the shortest $\vec G$ in that direction. These families are conventionally labelled by **Miller indices** $(h,k,l)$, defined via $\vec G_{(h,k,l)}=h\vec b_1+k\vec b_2+l\vec b_3$ with $h,k,l$ having no common divisor.

## The Brillouin Zone

Shifting any wavevector $k\to k+G$ leaves plane waves on the lattice unchanged (from the defining property above), so $k$ and $k+G$ describe physically identical crystal momentum — the **Brillouin zone** is the set of inequivalent $k$, conventionally taken as the Wigner-Seitz cell of the reciprocal lattice (all points closer to $\vec G=0$ than to any other reciprocal lattice point). Because every physically distinct $k$ appears exactly once inside it, all band-structure and phonon dispersion diagrams need only ever be plotted within the first Brillouin zone.

## Electrons, Holes, and Effective Mass

A **semiconductor** is a band insulator with a small enough gap ($\sim1$ eV) that thermal excitation (or photon absorption) promotes a non-negligible number of electrons from the filled **valence band** to the empty **conduction band** at room temperature. Since a completely filled band is inert, it's convenient to track only the absence left behind — a **hole** — rather than every electron in the valence band; an electron and hole can recombine ("annihilate"), releasing the gap energy $E_\text{gap}$, much like a particle-antiparticle pair. Both carry current: near a band extremum, $E=E_\text{min/max}\pm\alpha|\vec k-\vec k_\text{min/max}|^2$, so each behaves like a free particle with **effective mass** $\hbar^2/m^*=|\partial^2E/\partial k^2|$; holes are conventionally assigned a *positive* effective mass ($m_h^*=-m_e^*$ evaluated at the valence band maximum, where the electron's curvature is negative) so that, in Drude transport, both electrons and holes accelerate sensibly under an applied field despite opposite charge — this also resolves the puzzle of metals/semiconductors showing a positive Hall coefficient, since $R_H=1/nq$ with $q>0$ for hole-dominated conduction.

## Doping and Carrier Control

**Doping** substitutes a small fraction of lattice atoms with impurities to donate extra carriers directly, without needing thermal excitation across the full gap. **n-type** (donor impurities, e.g. group-V P in Si) contribute an extra electron; **p-type** (acceptor impurities, e.g. group-III Al in Si) contribute an extra hole. A donor is analogous to a hydrogen atom embedded in the lattice — its binding energy is a rescaled Rydberg,
$$E_\text{bind}=E_R\left(\frac{m^*}{m}\frac{1}{\epsilon_r^2}\right)\sim\text{meV}$$
tiny compared to $13.6$ eV because the effective mass is small and the lattice's relative permittivity $\epsilon_r$ screens the Coulomb attraction strongly (correspondingly the orbit is large, $a_0^\text{eff}=a_0(\epsilon_r\,m/m^*)$). This places the donor level just below the conduction band edge (mirror image for acceptors, just above the valence band edge), so only a small thermal energy is needed to ionise it — at very low $T$ carriers instead **freeze out**, binding back to their host atoms. Without impurities the Fermi level sits mid-gap; doping shifts it toward the conduction band (n-type) or valence band (p-type), controlling conductivity by orders of magnitude — the basis of semiconductor devices (diodes, transistors) built from p-n junctions.

# Related
- [[Fourier Transforms, Convolution and the Dirac Delta]]
- [[Tight Binding Model and Band Filling]]
- [[Drude Theory and the Nearly Free Electron Model]]
- [[Tight Binding Model and Band Filling]]
- [[Degenerate Fermi Gas, Heat Capacity and Bose-Einstein Condensation]]
