---
old: true
Tags:
  - year-2
Index:
Class:
  - Further Quantum Mechanics
Topics:
  - minimal coupling
  - gauge invariance
  - vector potential
  - aharonov-bohm effect
---
up: [[Further Quantum Mechanics.base]]

# Minimal Coupling, Gauge Invariance and the Aharonov-Bohm Effect

## Minimal Coupling

Coupling a charged particle to an EM field: replace $\hat p \to \hat p - q\vec A$ in the Hamiltonian ("**minimal coupling**"):
$$\hat H = \frac{1}{2m}(\hat p - q\vec A)^2 + q\phi$$
with $\vec B=\nabla\times\vec A$ and $\vec{\mathcal E}=-\nabla\phi-\partial_t\vec A$. This isn't just an ansatz — applying Ehrenfest's theorem, $\frac{d}{dt}\langle Q\rangle = \frac{i}{\hbar}\langle[\hat H,Q]\rangle+\langle\partial_t Q\rangle$, to this Hamiltonian gives
$$m\frac{d^2}{dt^2}\langle\vec x\rangle = q\left\langle\frac{\vec v\times\vec B-\vec B\times\vec v}{2}+\vec{\mathcal E}\right\rangle$$
i.e. the expectation values obey the classical Lorentz force law. (The symmetrised cross-product is needed because $\vec v$ and $\vec B$ are built from $\hat p,\hat x$ and don't necessarily commute.)

## Gauge Invariance

The potentials aren't unique: a **gauge transformation** $\vec A\to\vec A+\nabla\chi$, $\phi\to\phi-\partial_t\chi$ leaves $\vec B,\vec{\mathcal E}$ (and hence all classical physics) unchanged. Under this transformation $\hat H$ itself changes, so the Schrödinger equation $i\hbar\partial_t\psi=\hat H\psi$ appears gauge-dependent — but the solution simply picks up a compensating local phase, $\psi\to\psi'=e^{iq\chi/\hbar}\psi$, so $|\psi|^2$ (the physical probability density) is unchanged: $|\psi|^2=|\psi'|^2$. The probability *current*, however, is gauge-dependent in a way that exactly compensates:
$$\vec J = \frac{\hbar}{2im}(\psi^*\nabla\psi-\psi\nabla\psi^*)-\frac{q}{m}|\psi|^2\vec A$$
so that $\vec J$ (which enters the continuity equation $\partial_t\rho+\nabla\cdot\vec J=0$) is also gauge-invariant once expressed this way. This is the non-relativistic QM precursor to $U(1)$ gauge symmetry in field theory — the same $\vec p\to\vec p-q\vec A$ substitution reappears as the covariant derivative $\partial_\mu\to\partial_\mu-iqA_\mu$ in scalar QED, and the compensating phase $e^{iq\chi/\hbar}$ is the non-relativistic shadow of a local $U(1)$ gauge transformation.

## Setup

Classically, a charged particle only responds to the fields $\vec B=\nabla\times\vec A$ and $\vec{\mathcal E}=-\nabla\phi-\partial_t\vec A$; the potentials $\vec A,\phi$ themselves look like pure bookkeeping. Aharonov and Bohm asked what happens if an electron beam is split into two paths that pass on either side of a long solenoid (never entering it) and then recombine. Outside an infinite solenoid $\vec B=0$ along both paths, but $\vec A\ne0$, since
$$\oint \vec A\cdot d\vec l=\int_S \vec B\cdot d\vec S=\Phi$$
is the enclosed flux — nonzero even though the contour never crosses into the field region.

## Effect and Significance

Solving the Schrödinger equation along each arm, the vector potential contributes a path-dependent phase to the wavefunction. On recombination the two paths differ by phase $\Delta\theta = q\Phi/\hbar$, shifting the interference fringes measurably — purely as a function of the enclosed flux, despite the particle never experiencing a nonzero $\vec B$. Since only *relative* phase is physical (see [[Dirac Notation and Operators and Observables]]), this shift is a genuine, observed effect. It forces the conclusion that $\vec A$ (or rather the gauge-invariant loop integral $\oint\vec A\cdot d\vec l$) carries physical content in quantum mechanics that has no classical field-strength analogue — the vector potential is more fundamental than $\vec B$, not just a convenient device for computing it. This is the non-relativistic precursor to the central role gauge potentials (not field strengths) play in gauge field theories.

# Related
- [[Maxwell's Equations: Capacitance, Displacement Current and EM Waves]]
