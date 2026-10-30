---
old: true
Tags:
  - year-3
Index:
Class:
  - Subatomic Physics
Topics:
  - shell model
  - magic numbers
  - angular momentum addition
  - clebsch-gordan coefficients
  - helicity
---
up: [[Subatomic Physics.base]]

# Nuclear Shell Model and Angular Momentum Addition

## Magic Numbers

The SEMF captures the smooth overall trend of binding energy with $A$, but nuclei with certain particular values of $Z$ or $N$ are found to be anomalously more strongly bound than the formula predicts — even below $A\sim20$ where the SEMF isn't expected to apply, e.g. $^4_2$He already stands out. These special values are the **magic numbers**,
$$2,\ 8,\ 20,\ 28,\ 50,\ 82,\ 126,$$
and nuclei with $Z$ or $N$ equal to one of these are unusually tightly bound. Nuclei with *both* $Z$ and $N$ magic — **doubly magic**, e.g. $^4_2$He and $^{208}_{82}$Pb — are more strongly bound still. The interpretation is that these numbers correspond to completely filling a discrete quantum energy level, exactly as filled electron shells give the chemical inertness of the noble gases.

## The Nuclear Potential

Confining a particle quantises its energy levels, so the shell model treats each nucleon as moving independently in an average potential produced by all the other nucleons (rather than trying to solve the full many-body problem exactly, which isn't tractable beyond simple cases). This effective potential should be roughly constant and negative (bound) inside the nucleus and fall off at the nuclear surface — matched well by the **Woods-Saxon potential**
$$V(r) = -\frac{V_0}{1+e^{(r-a)/d}},$$
with $a\simeq r_0A^{1/3}$ setting the nuclear radius and $d$ setting the "skin thickness" ($\sim1$ fm) over which the potential rises to zero. This doesn't have a simple analytic solution, so it's compared against simpler solvable potentials — an infinite square well or a 3D harmonic oscillator — both of which give quantised levels with occupancy $2(2l+1)$ per orbital angular-momentum state $l$ (2 for spin, $2l+1$ for $l_z$), plus an effective centrifugal term $V(r)\to V(r)+l(l+1)\hbar^2/2mr^2$ that pushes higher-$l$ levels up in energy. Both toy potentials correctly reproduce the first three magic numbers (2, 8, 20) from successive shell closures, but disagree beyond that — getting the higher magic numbers right requires adding a strong spin-orbit coupling term, which reorders the levels.

## Combining Angular Momenta

Total angular momentum $\vec J=\vec L+\vec S$. For two independent angular momenta $\vec J_1,\vec J_2$, $\vec J_\text{tot}=\vec J_1+\vec J_2$ so $\vec J_\text{tot}^2=\vec J_1^2+\vec J_2^2+2\vec J_1\cdot\vec J_2$, the z-components simply add, $m_\text{tot}=m_1+m_2$, while the total quantum number ranges over $|j_1-j_2|\le j_\text{tot}\le j_1+j_2$. The simultaneous eigenstates $|j_\text{tot},m_\text{tot}\rangle$ are not themselves product states but linear combinations of the product basis $|j_1,m_1\rangle|j_2,m_2\rangle$,
$$|j_\text{tot},m_\text{tot}\rangle=\sum C^{j_\text{tot}m_\text{tot}}_{j_1m_1j_2m_2}\,|j_1,m_1\rangle|j_2,m_2\rangle,$$
with the expansion coefficients the **Clebsch-Gordan coefficients**. For spin-1 ⊗ spin-1/2 (e.g. combining an orbital/vector-particle spin with a fermion spin), $j=3/2$ or $1/2$: the stretched states $|3/2,\pm3/2\rangle$ are pure products, but lowering with $J_-=J_{1,-}\otimes I_2+I_1\otimes J_{2,-}$ shows the other $m$ states mix, e.g. $|3/2,1/2\rangle=\sqrt{2/3}\,|1,0\rangle|1/2,1/2\rangle+\sqrt{1/3}\,|1,1\rangle|1/2,-1/2\rangle$.

## Helicity

Rather than projecting spin onto a fixed lab z-axis, particle physics often resolves spin along the particle's own direction of motion — its **helicity**,
$$h=\frac{\vec S\cdot\vec p}{|\vec p|}.$$
This is the natural quantisation axis for relativistic or massless particles, since it is frame-independent under boosts along $\vec p$ (unlike a fixed z-axis, which isn't preserved once you switch frames). In the ultra-relativistic limit $v\to c$, helicity and **handedness/chirality** coincide (helicity $+1/2\to$ right-handed, $-1/2\to$ left-handed); at finite $v$ a helicity state is a mixture of right- and left-handed chirality components in proportion $(1\pm v/c)/2$. This distinction is central to the weak interaction, which couples only to left-handed fermions (and right-handed antifermions) and hence violates parity maximally.

# Related
- [[Liquid Drop Model and the Semi-Empirical Mass Formula]]
- [[Degenerate Fermi Gas, Heat Capacity and Bose-Einstein Condensation]]
- [[Time Evolution, Entanglement and Bell Inequalities]]
- [[Angular Momentum Operators and Spin]]
- [[Weak Interaction: Parity and Charge Conjugation]]
