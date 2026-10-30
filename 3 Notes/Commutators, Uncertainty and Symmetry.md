---
old: true
Tags:
  - year-2
Index:
Class:
  - Quantum Mechanics
Topics:
  - commutators
  - uncertainty principle
  - compatible observables
  - translational invariance
  - symmetry operators
  - good quantum numbers
---
up: [[Quantum Mechanics.base]]

# Commutators, Uncertainty and Symmetry

## Compatibility

Two observables are **compatible** (simultaneously measurable with certainty, in the sense that the order of measurement doesn't affect outcome probabilities) iff their operators commute, $[\hat A,\hat B]=0$. If a common eigenbasis $|a_i,b_j\rangle$ exists, then $[\hat A,\hat B]|a_i,b_j\rangle=(a_ib_j-b_ja_i)|a_i,b_j\rangle=0$ trivially. Conversely, starting from $[\hat A,\hat B]=0$ and an eigenstate $|a_i\rangle$ of $\hat A$, $\hat A(\hat B|a_i\rangle)=\hat B\hat A|a_i\rangle = a_i(\hat B|a_i\rangle)$, so $\hat B|a_i\rangle$ is also an $\hat A$-eigenstate with the same eigenvalue — meaning $\hat B$ can be diagonalised within each $\hat A$-eigenspace, giving the shared eigenbasis. If $[\hat A,\hat B]\ne0$, no such basis exists in general: measuring $\hat A$ collapses the state and generically disturbs the distribution of $\hat B$.

## Uncertainty Principle

For Hermitian $\hat A,\hat B$ and any state $|\psi\rangle$, positivity of the norm $\big\|(\hat A+i\lambda\hat B)|\psi\rangle\big\|^2\ge0$ for real $\lambda$ gives $\langle\hat A^2\rangle+i\lambda\langle[\hat A,\hat B]\rangle+\lambda^2\langle\hat B^2\rangle\ge0$. Minimising over $\lambda$ and substituting back yields $\langle\hat A^2\rangle\langle\hat B^2\rangle\ge\tfrac14\langle i[\hat A,\hat B]\rangle^2$. Shifting $\hat A\to\hat A-\langle\hat A\rangle$, $\hat B\to\hat B-\langle\hat B\rangle$ (which doesn't change the commutator) gives the **generalised uncertainty principle**:
$$\Delta A\,\Delta B \ge \tfrac12\big|\langle[\hat A,\hat B]\rangle\big|$$
Canonical example: $[\hat x,\hat p]=i\hbar \Rightarrow \Delta x\Delta p\ge\hbar/2$. This is not a statement about measurement disturbance but an intrinsic property of the state — no state can simultaneously have sharply-defined values of two non-commuting observables.

## Translation Operator

Moving a state by $\vec a$ is implemented by a unitary operator $\hat U(\vec a)$ acting on position eigenstates as $|\vec x\rangle\to|\vec x+\vec a\rangle$. Working in the momentum basis, $|\vec x+\vec a\rangle=e^{-i\vec a\cdot\hat p/\hbar}|\vec x\rangle$, so $\hat U(\vec a)=e^{-i\vec a\cdot\hat p/\hbar}$ — momentum is the *generator* of translations, exactly parallel to $\hat L_z$ generating rotations about $z$ (see [[Angular Momentum Operators and Spin]]). Since the three momentum components commute, $\hat U(\vec a)\hat U(\vec b)=\hat U(\vec a+\vec b)$ and $\hat U^\dagger(\vec a)=\hat U(-\vec a)$, consistent with unitarity. Acting on wavefunctions, $\psi'(\vec x)=\langle\vec x|\hat U(\vec a)|\psi\rangle=\psi(\vec x-\vec a)$, so $|\psi'(\vec x)|^2=|\psi(\vec x-\vec a)|^2$: the probability density simply shifts, as expected.

## Symmetry and Conservation

A symmetry operation (translation, rotation, reflection) is represented generally by a unitary operator $\hat U$. A system is symmetric under it if energy measurements are unaffected: $|\langle E_n|\psi\rangle|^2 = |\langle E_n|\hat U|\psi\rangle|^2$ for all $\psi$, which forces $\hat U$ and $\hat H$ to commute, $[\hat H,\hat U]=0$ — the symmetry is then *exact*. Taking $\hat U$ infinitesimally close to the identity, $\hat U(d\vec x)\approx\hat 1-\frac{i}{\hbar}d\vec x\cdot\hat p$, this condition becomes $[\hat H,\hat p]=0$ for translations. A free particle, $\hat H=\hat p^2/2m$, trivially satisfies this, so **momentum is a good quantum number** — its eigenvalue is conserved and can be used to label energy eigenstates simultaneously with energy. The same logic with rotations gives $[\hat H,\hat L_i]=0$ for a rotationally-symmetric $\hat H$, making **angular momentum a good quantum number** (used directly in solving the [[Quantum Harmonic Oscillator and the Hydrogen Atom|hydrogen atom]]). This is the quantum-mechanical incarnation of Noether's theorem: a continuous symmetry of $\hat H$ $\Leftrightarrow$ a conserved, simultaneously-measurable observable.

# Related
- [[Dirac Notation and Operators and Observables]]
- [[Quantum Harmonic Oscillator and the Hydrogen Atom]]
- [[Noether's Theorem and Angular Momentum]]
- [[Angular Momentum Operators and Spin]]
