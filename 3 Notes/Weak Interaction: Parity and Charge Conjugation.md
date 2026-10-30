---
old: true
Tags:
  - year-3
Index:
Class:
  - Subatomic Physics
Topics:
  - weak force
  - charged current
  - neutral current
  - parity
  - charge conjugation
  - discrete symmetries
---
up: [[Subatomic Physics.base]]

# Weak Interaction: Parity and Charge Conjugation

## Charged and Neutral Currents

The weak force is carried by two types of massive vector boson, giving it much shorter range than the massless photon/gluon: $W^\pm$ mediate the **charged current** (changes particle flavour — e.g. converts $d\to u$ in beta decay, or drives muon/tau decay — since without it charged leptons would be stable), and $Z^0$ mediates the **neutral current** (flavour-conserving, more like a heavy photon). The $Z^0$ coupling combines a parity-conserving vector piece and a parity-violating axial-vector piece, with coefficients
$$C_V = I_3^W - 2\sin^2\theta_W Q,\qquad C_A = I_3^W,$$
depending on weak isospin $I_3^W$, charge $Q$, and the weak mixing angle $\theta_W$ — because $C_V\ne C_A$ in general, the neutral current couples unequally to left- and right-handed fermions, so parity is violated but only *partially*.

## Maximal Violation in the Charged Current

The charged current, by contrast, violates parity **maximally**: the $W^\pm$ vertex coupling strength depends on the fermion's helicity (spin resolved along its momentum), and $W$ bosons only ever couple to $h=-1/2$ fermions (and $h=+1/2$ antifermions). In the ultra-relativistic limit helicity coincides with the frame-independent quantum property chirality, so this is usually phrased as "the weak force is left-handed" — it couples only to left-handed fermions and right-handed antifermions. Since a parity transformation flips momentum but not spin (an axial vector), it flips a left-handed state into a right-handed one — a state the $W$ doesn't couple to — so a weak process and its parity-mirrored version generally do *not* occur at the same rate (indeed one of the two rates is exactly zero in the relativistic limit). The same helicity argument separately violates charge conjugation $\hat C$ (which swaps particle for antiparticle but not helicity), but applying $\hat C$ *and* $\hat P$ together restores agreement — the combination $\hat C\hat P$ is respected, at least to the level probed by this argument (see Weak Interaction: Parity and Charge Conjugation for the subtler CP violation seen in kaon mixing).

Evidence: the forward-backward asymmetry in $e^+e^-\to\mu^+\mu^-$ near the $Z$ resonance (measured precisely at LEP) directly probes $C_V,C_A$ and hence pins down $\sin^2\theta_W$ — a clean confirmation that the neutral current's parity violation is real but partial, in contrast to the charged current's all-or-nothing left-handed coupling.

## Parity

**Parity** $\hat P$ reflects position through the origin, $\vec r\to-\vec r$. Ordinary (polar) vectors flip sign under $\hat P$, but **axial vectors** built from a cross product (e.g. angular momentum $\vec L=\vec r\times\vec p$) don't, since both factors flip and the signs cancel; scalars are invariant, while **pseudoscalars** ($\vec r\cdot(\vec r\times\vec p)$-type) flip sign. Since applying $\hat P$ twice returns the original state, $\hat P^2\psi=P^2\psi$, its eigenvalues must be $P=\pm1$ (same argument applies to $\hat C$ below). For a composite state built from orbital motion with angular momentum $l$, the parity picks up an extra factor $(-1)^l$ from the spatial wavefunction on top of the intrinsic parities of the constituents. Strong and EM interactions conserve parity exactly; the **weak interaction violates it maximally** — only left-handed fermions (and right-handed antifermions) couple to the charged current mediated by $W^\pm$, a direct consequence of the helicity structure of the weak vertex.

## Charge Conjugation and the Deeper Symmetries

**Charge conjugation** $\hat C$ swaps particles for antiparticles. Only a particle that is its own antiparticle (like the photon) can be a genuine $\hat C$ eigenstate; e.g. $\hat C|\gamma\rangle=-|\gamma\rangle$, and for a fermion-antifermion pair $\hat C|f\bar f\rangle=(-1)^{L+S}|\bar f f\rangle$. This lets $\hat C$ conservation fix decay selection rules: since an $n$-photon state has $C=(-1)^n$, a spin-singlet ($S=0$) fermion-antifermion ground state (C=+1) must decay to an even number of photons (2), while the spin-triplet ($S=1$, $C=-1$) state must decay to an odd number (3) — exactly what's observed for positronium decay. Like parity, $\hat C$ is conserved by the strong and EM interactions but violated by the weak force. The combined operation $CP$ fares better but is still violated more subtly — most famously in neutral kaon mixing, where the flavour eigenstates $K^0,\bar K^0$ are not mass eigenstates (they mix via the off-diagonal Cabibbo-suppressed weak amplitude), and the resulting mass eigenstates $K^0_S,K^0_L$ show tiny CP-violating decay asymmetries. No violation of the full combination $CPT$ has ever been observed, and the $CPT$ theorem — that any local, Lorentz-invariant quantum field theory must conserve $CPT$ — is believed to be exact.

# Related
- [[Electroweak Unification and the Standard Model]]
- [[Feynman Diagrams: QED and QCD]]
- [[Nuclear Shell Model and Angular Momentum Addition]]
- [[Groups, Symmetry Transformations and Representations]]
