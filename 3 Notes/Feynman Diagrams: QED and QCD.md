---
old: true
Tags:
  - year-3
Index:
Class:
  - Subatomic Physics
Topics:
  - feynman diagrams
  - qed
  - fine structure constant
  - qcd
  - colour confinement
  - asymptotic freedom
---
up: [[Subatomic Physics.base]]

# Feynman Diagrams: QED and QCD

## Diagrams as a Perturbative Expansion

Computing a scattering amplitude exactly is generally intractable, so it's calculated as a **perturbative series** in powers of the coupling, and each term in that series can be drawn as a **Feynman diagram**: straight lines represent matter particles (fermions), wavy lines represent exchanged force carriers, and vertices mark where an interaction occurs. In QED the only allowed vertex joins two charged-fermion lines and one photon line (photons have no distinct antiparticle, so no arrow); the amplitude for a diagram is proportional to charge $e$ per vertex, so a diagram with $n$ vertices contributes $e^n$ to the amplitude and hence $\propto\alpha^n$ to the probability, where the dimensionless coupling strength is the **fine structure constant**
$$\alpha = \frac{e^2}{4\pi\epsilon_0\hbar c} \approx \frac{1}{137}.$$
Because $\alpha\ll1$, each successive order (more vertices) contributes far less than the last, so the perturbation series converges rapidly — the leading (lowest-vertex) diagram usually dominates, with loop corrections as small refinements.

## Reading the Diagrams

Antiparticles are drawn as particles moving backward in time, which encodes **crossing symmetry**: a diagram for $A+B\to C+D$ can be reinterpreted by moving legs across the vertex, e.g. $A\to\bar B+C+D$ or $A+\bar C\to\bar B+D$, provided the result is kinematically allowed — the same underlying diagram/matrix element describes several physically distinct processes. Only the external legs — the particles actually incoming/outgoing — are observed and must be "on-shell," conserving energy and momentum with $E^2=p^2c^2+m^2c^4$. Internal (virtual) lines, such as the exchanged photon in $e^-\mu^-$ scattering, are never observed directly and don't need to satisfy this relation; a single-vertex diagram alone could never conserve energy and momentum, which is exactly why forces must be mediated by the exchange of virtual (off-shell) particles rather than a single vertex.

## Colour Charge

**QCD** is the strong-force analogue of QED: instead of one type of electric charge, each quark carries one unit of one of 3 **colour charges** (red, green, blue) — separately conserved quantum numbers with no classical meaning, just a label. Each of the 6 quark flavours therefore comes in 3 colour copies (e.g. $u_r,u_g,u_b$, all with identical mass), and antiquarks carry the corresponding anticolours. The force carriers, **gluons**, each carry one unit of colour and one unit of anticolour (e.g. $g_{r\bar b}$) — 8 independent combinations survive (the naive $3\times3=9$ minus the one colourless singlet combination, from $SU(3)$ gauge structure), compared to QED's single, chargeless photon. The strong coupling constant $\alpha_S=g_S^2/2\pi\hbar c\sim0.1$ is much larger than $\alpha_\text{EM}\sim1/137$, hence "strong."

## Self-Interaction: Confinement and Asymptotic Freedom

Because gluons themselves carry colour charge — unlike the electrically neutral photon — they can radiate other gluons, giving QCD extra 3- and 4-gluon vertices with no QED analogue. This self-interaction is responsible for two behaviours with no counterpart in electromagnetism. **Confinement**: only colour-neutral combinations are ever observed as free particles — the colour "singlet" combinations $\frac{1}{\sqrt3}(r\bar r+b\bar b+g\bar g)$ for mesons or the equivalent antisymmetric combination of $r,g,b$ for baryons — because the potential energy between separating colour charges grows with distance (unlike the $1/r$ Coulomb potential), so pulling quarks apart costs more and more energy until it's cheaper to pop new $q\bar q$ pairs out of the vacuum than to isolate a bare colour charge; free quarks and gluons are never seen, which is also why $\alpha_S$ has no single well-defined value the way $\alpha_\text{EM}$ does. **Asymptotic freedom**: at short distances/high momentum transfer the effective coupling weakens rather than strengthens, so a quark probed by a photon over a very short timescale behaves as if nearly free even though it's permanently bound inside a hadron — the opposite short-distance behaviour to QED.

# Related
- [[Electroweak Unification and the Standard Model]]
- [[Covariant Electromagnetism: Field Tensor and Lorentz Force]]
- [[Weak Interaction: Parity and Charge Conjugation]]
