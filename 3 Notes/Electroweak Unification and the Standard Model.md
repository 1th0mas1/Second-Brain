---
old: true
Tags:
  - year-3
Index:
Class:
  - Subatomic Physics
Topics:
  - electroweak unification
  - higgs mechanism
  - spontaneous symmetry breaking
  - standard model
  - fermions and bosons
  - quantum field theory
---
up: [[Subatomic Physics.base]]

# Electroweak Unification and the Standard Model

## Unification and the Neutral Current

Naively the $Z^0$ appears to couple differently to fermions than the $W^\pm$ do, which looks like it breaks the local gauge invariance underlying the weak force. The resolution is that the weak $SU(2)$ triplet $(W^+,W_3,W^-)$ mixes with a separate $U(1)$ boson $B$: the four massless gauge bosons combine via the **weak mixing angle** $\theta_W$ into the physical states
$$Z^0=W_3\cos\theta_W-B\sin\theta_W,\qquad A=W_3\sin\theta_W+B\cos\theta_W,$$
plus the physical $W^\pm$ — unifying electromagnetism and the weak force into a single electroweak theory with only 3 free parameters ($\alpha_\text{EM},G_F,\sin^2\theta_W$) that predict everything else, e.g. $M_Z=M_W/\cos\theta_W$ and $e=g\sin\theta_W$. The $Z^0$-mediated neutral current is flavour-conserving and couples to a mixture of a parity-conserving vector term and parity-violating axial-vector term, with strengths $C_V=I_3^W-2\sin^2\theta_WQ$ and $C_A=I_3^W$ depending on weak isospin $I_3^W$, charge $Q$, and $\theta_W$ — so, unlike the maximally parity-violating charged current, the neutral current violates parity only partially. This was tested precisely at the LEP collider via $e^+e^-\to Z\to f\bar f$ resonance scans and the forward-backward asymmetry of $e^+e^-\to\mu^+\mu^-$, both of which pin down $\sin^2\theta_W$ and confirmed exactly 3 light neutrino generations.

## The Higgs Mechanism

Gauge symmetry forbids writing explicit mass terms for $W,Z$ or the fermions directly into the Lagrangian — doing so breaks the local gauge invariance the whole theory is built on. The **Higgs mechanism** resolves this via **spontaneous symmetry breaking**: introduce a scalar field $\phi$ with potential
$$V(\phi)=\mu^2\phi^\dagger\phi+\lambda(\phi^\dagger\phi)^2,\qquad\mu^2<0,$$
whose "Mexican hat" shape is itself symmetric, but whose ground state is not — the minimum sits away from $\phi=0$, giving the field a non-zero **vacuum expectation value** $v\approx246$ GeV that permeates all of space at all times. Particles acquire mass by coupling to this non-zero background field: the effective mass is proportional to the coupling strength ("Higgs charge" $\propto$ mass), so the more strongly a particle couples to the Higgs field, the more it is "dragged" and the heavier it is. $W^\pm$ and $Z^0$ pick up mass this way while the photon, which doesn't couple to the surviving unbroken $U(1)_\text{EM}$ symmetry, stays massless. The Higgs boson itself — the quantum excitation of $\phi$ around its minimum — was discovered at the LHC via $H\to ZZ\to4l$ and $H\to\gamma\gamma$, confirming the last missing piece of the Standard Model.

## Fermions, Bosons, and Fields

The **Standard Model** describes matter via spin-1/2 **fermions** (quarks and leptons, each in 3 generations of increasing mass — the muon and tau are essentially heavy, unstable copies of the electron) and the three non-gravitational forces via spin-1 **bosons**: the photon (EM, massless, neutral), $W^\pm/Z^0$ (weak, very massive — hence the weak force's short range despite being fundamentally as strong as EM at high energy — and self-coupling since they themselves carry weak isospin), and 8 gluons (strong, massless but permanently confined). The spin-0 **Higgs** is the only other particle, giving mass to $W,Z$ and the fermions via its non-zero vacuum value. Gravity is not included — justified purely practically, since it's negligible at particle-physics energy scales.

As a **quantum field theory**, this reframes matter and forces on the same footing: particles are excitations of quantised fields, with the frequency of a given field's excitation characterising the particle type and the amplitude (number of quanta excited) giving the particle number. This is a genuine extension beyond single-particle QM, since it allows the number of particles to change — necessary to describe creation and annihilation (e.g. pair production, decay) that ordinary wavefunction QM cannot.

## Quantum Numbers and Confinement

Quarks and leptons are naturally grouped into **weak-isospin doublets** based on how they interact via $W^\pm$, e.g. $(u,d)$, $(c,s)$, $(t,b)$ for quarks and $(\nu_e,e^-)$, $(\nu_\mu,\mu^-)$, $(\nu_\tau,\tau^-)$ for leptons. Within a doublet the upper member has $I_3^W=+\tfrac12$ and the lower $I_3^W=-\tfrac12$, and since the $W^\pm$ that connects them carries one unit of charge and weak isospin, $\Delta Q=\Delta I_3^W=1$ across a doublet (e.g. $d\to u$ via $W^-$ emission raises charge by $2/3-(-1/3)=1$). Quarks carry colour as well as electric and weak charge, so feel all three forces, but only **colour-neutral** combinations are ever observed in isolation (**confinement**): baryons ($qqq$, half-integer spin, e.g. the proton — the only stable free hadron) and mesons ($q\bar q$, integer spin). Every particle has a corresponding antiparticle with identical mass but every other quantum number reversed, a direct consequence of the relativistic wave equation fermions obey (the **Dirac equation**), which admits negative-energy solutions naturally reinterpreted as antiparticles.

# Related
- [[Weak Interaction: Parity and Charge Conjugation]]
- [[Groups, Symmetry Transformations and Representations]]
- [[Covariant Electromagnetism: Field Tensor and Lorentz Force]]
- [[Feynman Diagrams: QED and QCD]]
- [[Feynman Diagrams: QED and QCD]]
