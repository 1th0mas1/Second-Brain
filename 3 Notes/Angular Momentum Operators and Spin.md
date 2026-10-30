---
old: true
Tags:
  - year-2
Index:
Class:
  - Quantum Mechanics
Topics:
  - angular momentum operators
  - su(2)
  - ladder operators
  - spin
  - pauli matrices
  - stern-gerlach
---
up: [[Quantum Mechanics.base]]

# Angular Momentum Operators and Spin

## Commutation Structure

Orbital angular momentum is defined $\hat L_i=\epsilon_{ijk}\hat x_j\hat p_k$; using $[\hat x_j,\hat p_k]=i\hbar\delta_{jk}$ gives the algebra $[\hat L_j,\hat L_k]=i\hbar\epsilon_{jkl}\hat L_l$. The individual components don't commute with each other (so $L_x,L_y,L_z$ can't be measured simultaneously), but $\hat L^2=\hat L_x^2+\hat L_y^2+\hat L_z^2$ commutes with every component: $[\hat L^2,\hat L_j]=0$. So $\hat L^2$ and (conventionally) $\hat L_z$ share a simultaneous eigenbasis $|l,m\rangle$ (labelling eigenvalues $\beta$ as $l(l+1)$ is a choice justified below):
$$\hat L^2|l,m\rangle=\hbar^2l(l+1)|l,m\rangle,\qquad \hat L_z|l,m\rangle=\hbar m|l,m\rangle$$
Requiring rotation by $2\pi$ about $z$ to act as the identity, $e^{-2\pi i \hat L_z/\hbar}=\hat 1$, forces $e^{2\pi i m}=1$, i.e. $m$ integer (for orbital angular momentum specifically — spin relaxes this, see Angular Momentum Operators and Spin).

## Ladder Operators and Quantisation

Ladder operators $\hat L_\pm=\hat L_x\pm i\hat L_y$ satisfy $[\hat L_\pm,\hat L^2]=0$ and $[\hat L_z,\hat L_\pm]=\pm\hbar\hat L_\pm$, so $\hat L_\pm|l,m\rangle$ is again an $\hat L^2$-eigenstate with the same $l$ but $\hat L_z$-eigenvalue shifted by $\pm\hbar$:
$$\hat L_\pm|l,m\rangle = \hbar\sqrt{l(l+1)-m(m\pm1)}\,|l,m\pm1\rangle$$
The coefficient comes from evaluating $\langle l,m|\hat L_\mp\hat L_\pm|l,m\rangle = \hbar^2[l(l+1)-m(m\pm1)]$, which must be $\ge0$ since it's a norm. Since $\langle \hat L_x^2+\hat L_y^2\rangle=\langle\hat L^2-\hat L_z^2\rangle\ge0$, $m$ is bounded, $|m|\le l$: the ladder must terminate at both ends, which only happens consistently when $l$ is a non-negative integer or half-integer. This purely algebraic derivation — using nothing but the commutation relations $[\hat L_i,\hat L_j]=i\hbar\epsilon_{ijk}\hat L_k$ — is exactly the construction of **SU(2) irreducible representations**, reused wherever an $SU(2)$ (or isospin-like) symmetry appears.

## Spin Algebra and Pauli Matrices

Spin $\hat S$ is intrinsic angular momentum with no classical/orbital analogue, contributing to total angular momentum $\hat J=\hat L+\hat S$. It obeys exactly the same $SU(2)$ commutation algebra as orbital $\hat L$ (see Angular Momentum Operators and Spin), including ladder operators $\hat S_\pm=\hat S_x\pm i\hat S_y$ with $\hat S_\pm|s,s_z\rangle=\hbar\sqrt{s(s+1)-s_z(s_z\pm1)}|s,s_z\pm1\rangle$ — but unlike $\hat L$, half-integer values are allowed (there's no $2\pi$-periodicity constraint from position-space wavefunctions). For spin-1/2 ($s=\tfrac12$), there are just two states, $|{\uparrow}\rangle=\binom10$, $|{\downarrow}\rangle=\binom01$, with $\hat S^2|{\tfrac12},\pm\tfrac12\rangle=\tfrac34\hbar^2|\cdot\rangle$, $\hat S_z|\cdot\rangle=\pm\tfrac\hbar2|\cdot\rangle$. The operators reduce to $2\times2$ matrices $\hat S_i=\tfrac\hbar2\sigma_i$ acting on a two-component spinor, where $\sigma_i$ are the **Pauli matrices**. A curious consequence: rotating a spinor by $\phi=2\pi$ about any axis via $e^{i\phi\hat S_z/\hbar}$ multiplies it by $-1$, not $+1$ — spinors need a $4\pi$ rotation to return to themselves, though this sign is unobservable in $|\psi|^2$.

## Stern-Gerlach Experiment

A magnetic moment $\vec\mu\propto\vec L$ (or $\vec S$) in an inhomogeneous field experiences a force $F=-\partial V/\partial z=\mu_z\,\partial B/\partial z$, deflecting particles by an amount depending on their angular momentum component along the field. A beam of particles with angular momentum $L$ would classically split continuously, but quantum mechanically it splits into exactly $2L+1$ discrete spots (integer $L$: 1, 3, 5, ...) — direct evidence that angular momentum is quantised, confirming the matrix/ladder-operator structure. Passing a beam of electrons through such a field gives exactly **two** spots, not an odd number — impossible for integer orbital $L$, and historically the key evidence that electrons carry an intrinsic spin-1/2 degree of freedom.

# Related
- [[Commutators, Uncertainty and Symmetry]]
- [[Time Evolution, Entanglement and Bell Inequalities]]
