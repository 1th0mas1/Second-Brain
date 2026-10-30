---
old: true
Tags:
  - year-2
Index:
Class:
  - Quantum Mechanics
Topics:
  - dirac notation
  - bra-ket
  - hermitian operators
  - measurement
  - eigenvalues
---
up: [[Quantum Mechanics.base]]

# Dirac Notation and Operators and Observables

## States, Operators and Hermiticity

A quantum state is a ket $|\psi\rangle$ in a complex vector space $\mathcal V$ (Hilbert space), containing complete information about the system. Given a basis $\{|\psi_i\rangle\}$, any state expands as $|\phi\rangle=\sum_i\lambda_i|\psi_i\rangle$. The dual space $\mathcal V^*$ contains bra states $\langle\psi_n|$; the inner product $\langle\phi|\psi\rangle$ gives a probability amplitude, with $\text{Prob}=|\langle a_j|\psi\rangle|^2$ the probability of finding the system in basis state $|a_j\rangle$ upon measurement. An operator $\hat A$ maps kets to kets; the identity is $\hat 1=\sum_i|i\rangle\langle i|$, and any operator can be written $\hat A=\sum_{j,k}\langle j|\hat A|k\rangle\,|j\rangle\langle k|$. Observables are represented by **Hermitian operators**, defined by $\hat A^\dagger=\hat A$ where $\langle\phi|\hat A^\dagger|\psi\rangle=\langle\psi|\hat A|\phi\rangle^*$. Hermiticity guarantees (i) real eigenvalues — necessary since eigenvalues are the possible measurement outcomes — and (ii) an orthonormal eigenbasis of eigenstates, so any state can be expanded in eigenstates of any given observable (see Dirac Notation and Operators and Observables).

## Overall vs Relative Phase

Rephasing an entire basis $\{|i\rangle\}\to e^{i\alpha}\{|i\rangle\}$ multiplies every amplitude $\langle\psi|i\rangle$ by the same factor $e^{i\alpha}$, which cancels in any probability $|\langle\psi|i\rangle|^2$ — an overall phase $e^{i\theta}|\psi\rangle$ is therefore unobservable and physically identical to $|\psi\rangle$. But shifting the phase of only *one* term in a superposition, $|1\rangle+|2\rangle \to |1\rangle+e^{i\alpha}|2\rangle$, genuinely changes the physics: $|\mathcal A_1+\mathcal A_2|^2\ne|\mathcal A_1+e^{i\alpha}\mathcal A_2|^2$ in general. *Relative* phase between components of a superposition is physical — it's what produces interference, and is the key structural difference between quantum superposition and classical probabilistic mixture.

## Measurement Postulate

In the Copenhagen interpretation, a measurement of observable $\hat A$ can only yield one of its eigenvalues $a_i$, collapsing the state onto the corresponding eigenstate: if $|\psi\rangle=\sum_i\alpha_i|a_i\rangle$ before measurement (with $\alpha_i=\langle a_i|\psi\rangle$), a measurement returning $a_i$ leaves the system in state $|a_i\rangle$, with probability $P(a_i)=|\alpha_i|^2=|\langle a_i|\psi\rangle|^2$. Hermiticity ($\hat A=\hat A^\dagger$, i.e. $\langle\phi|\hat A|\psi\rangle=\langle\psi|\hat A|\phi\rangle^*$) is what makes this consistent: it guarantees real eigenvalues (so outcomes are actual numbers you could read off a dial) and an orthonormal eigenbasis (so the $a_i$ form a complete, non-overlapping set of possible outcomes). The Hamiltonian $\hat H$ is the observable present in every system, measuring energy — for $|\psi\rangle=\sum_n\alpha_n|\psi_n\rangle$ in the energy eigenbasis, the probability of measuring energy $E_m$ is $|\alpha_m|^2$. (The alternative many-worlds interpretation instead treats the measuring apparatus as part of the quantum system, entangled with it, with no genuine collapse — but the Born-rule probabilities are the same either way.)

## Expectation Values

The **expectation value** of $\hat A$ in state $|\psi\rangle$ is $\langle\hat A\rangle = \langle\psi|\hat A|\psi\rangle$. Expanding in the eigenbasis, $\langle\hat A\rangle=\sum_j a_j|\langle a_j|\psi\rangle|^2$ — the sum of each eigenvalue weighted by its measurement probability, i.e. the mean outcome over many repeated measurements on identically-prepared systems (not the result of any single measurement, which always gives a definite eigenvalue). Any operator can be resolved as $\hat A=\sum_{j,k}\langle j|\hat A|k\rangle\,|j\rangle\langle k|$ using the identity $\hat 1=\sum_j|j\rangle\langle j|$, which is the general route to writing an operator's matrix elements.

# Related
- [[Vector Spaces, Basis and Dimension]]
- [[Commutators, Uncertainty and Symmetry]]
