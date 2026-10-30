---
old: true
Tags:
  - year-3
Index:
Class:
  - Subatomic Physics
Topics:
  - liquid drop model
  - binding energy
  - saturation
  - semf
  - coulomb term
  - asymmetry term
  - pairing term
  - beta-stability
---
up: [[Subatomic Physics.base]]

# Liquid Drop Model and the Semi-Empirical Mass Formula

## Setup

The nuclear force is short-range ($\sim1$ fm, about one nucleon radius) and **saturates** — it has large repulsion at very short distances and is negligible beyond nearest neighbours, so a nucleon does not bind to every other nucleon in the nucleus, only to those next to it. With many nucleons, this means they spread out to fill a finite volume rather than crowding at the centre — exactly analogous to a liquid drop, where short-range van der Waals forces between molecules mean only nearest-neighbour interactions matter. This picture immediately gives two predictions: the nuclear volume grows linearly with $A$, so radius $r=r_0A^{1/3}$ with $r_0\approx1.2$ fm (constant nuclear density), and since each nucleon only binds to a fixed number of neighbours regardless of $A$, the total binding energy should scale linearly too, $BE\propto A$.

## Volume and Surface Terms

Nucleons at the surface have fewer neighbours than those deep inside the nucleus, so they are less strongly bound — precisely the nuclear analogue of surface tension in a liquid drop, which also costs energy proportional to surface area ($\propto A^{2/3}$ for a sphere of volume $\propto A$). Combining the **volume term** (bulk binding, $a_vA$) with this **surface correction** gives
$$BE = a_vA - a_sA^{2/3}.$$
This is a good approximation for $A\gtrsim20$ and correctly predicts a roughly constant binding energy per nucleon, matching the empirical $\sim8$ MeV/nucleon plateau seen across most of the periodic table. It is, however, incomplete: it depends only on $A$, with no separate dependence on $Z$ and $N$ individually, and ignores quantum effects entirely — both addressed by extending it to the full Liquid Drop Model and the Semi-Empirical Mass Formula.

## Three Corrections to the Liquid Drop Model

The liquid drop model alone predicts binding energy depends only on $A$, ignoring $Z$ and $N$ individually and any quantum structure — three further terms fix this.

**Coulomb term** $-a_cZ(Z-1)/A^{1/3}$: EM repulsion between protons reduces binding energy. Since protons are (roughly) uniformly spread through the nuclear volume and the EM force is long-range, every proton repels every *other* proton, giving a $Z(Z-1)$ dependence (the $-1$ removing a proton's unphysical self-interaction) rather than the nearest-neighbour-only scaling of the strong force. Working through the electrostatic self-energy of a uniformly charged sphere gives $a_c=\tfrac35\,e^2/4\pi\epsilon_0r_0\approx0.72$ MeV.

**Asymmetry term** $-a_a(N-Z)^2/A$: nucleons are spin-1/2 fermions filling discrete levels 2 at a time (proton and neutron levels separately), exactly the physics of a Fermi level. Building a nucleus from only neutrons (or only protons) forces particles into ever-higher, less-bound levels, so the nucleus is more tightly bound when $N\approx Z$ and the levels fill from the bottom on both sides simultaneously; detailed level counting gives the quadratic penalty $\propto(N-Z)^2/A$.

**Pairing term** $+a_p/\sqrt A$ (even-even), $-a_p/\sqrt A$ (odd-odd), $0$ (odd-A): two identical nucleons occupying the same spatial state with opposite spins (required for the antisymmetric total wavefunction) have maximal spatial overlap, binding more tightly than an unpaired configuration — so nuclei with both $Z$ and $N$ even are especially stable, and this term alone is why $J=0$ for every even-even ground state.

Putting it together,
$$BE = a_vA - a_sA^{2/3} - a_c\frac{Z(Z-1)}{A^{1/3}} - a_a\frac{(N-Z)^2}{A} + \frac{a_p}{\sqrt A},$$
with best-fit values around $a_v=15.8$, $a_s=18.4$, $a_c=0.73$, $a_a=23.3$, $a_p=\pm11.3$ MeV.

## The Beta-Stability Curve

For fixed $A=N+Z$, $BE$ is quadratic in $Z$: the asymmetry term pulls the maximum toward $Z=A/2$, while the Coulomb term pulls it toward smaller $Z$ (fewer protons, less repulsion) — since the asymmetry term falls off as $1/A$ but the Coulomb term only as $1/A^{1/3}$, the Coulomb term wins out more and more as $A$ grows, bending the locus of maximum binding energy — the **beta-stability curve** — increasingly neutron-rich at high $A$. Nuclei near this curve for their $A$ are long-lived, since beta decay (interconverting protons and neutrons) can relax any nucleus toward it; the pairing term adds a secondary zig-zag along lines of constant odd $A$, alternating which nearby $Z$ is favoured. Binding energy per nucleon is roughly constant for $A\gtrsim60$ and peaks near $^{56}$Fe, the most tightly bound nucleus — hence [[Alpha Decay and Nuclear Fission|fission]] (heavy → medium) and fusion (light → medium) both release energy.

# Related
- [[Nuclear Shell Model and Angular Momentum Addition]]
- [[Alpha Decay and Nuclear Fission]]
