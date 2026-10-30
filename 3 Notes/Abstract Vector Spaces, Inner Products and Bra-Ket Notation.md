---
old: true
Tags:
  - year-2
Index:
Class:
  - Math Methods
Topics:
  - abstract vector space
  - linear operators
  - matrix representation
  - dual space
  - bra-ket notation
  - orthonormal basis
---
up: [[Math Methods.base]]

# Abstract Vector Spaces, Inner Products and Bra-Ket Notation

## Abstract vector spaces and linear operators

A **linear vector space** requires only that addition and scalar multiplication be defined satisfying the usual axioms — nothing forces "vectors" to be arrows in $\mathbb R^3$. Functions, quantum states, and polynomials all qualify once these operations are specified. Any $n$-dimensional vector space $\mathcal V$ over a field $\mathcal F$ is isomorphic to $\mathcal F^n$ (column vectors), so once a basis $\{\underline e_i\}$ is chosen, a **linear operator** $A:\mathcal V\to\mathcal V$ is completely determined by where it sends each basis vector, $A\underline e_j=A_{ij}\underline e_i$, and is represented concretely by an $n\times n$ matrix $A_{ij}$ — the same object whether $\mathcal V=\mathbb R^3$ or an abstract Hilbert space of wavefunctions.

## Basis independence

Basis choice is bookkeeping convenience, not physics. Changing basis (via a unitary $U$ between orthonormal bases) transforms components as $\underline a'=U^\dagger\underline a$ and matrix elements as $A'=U^\dagger AU$ — a similarity transformation. Quantities built from the whole operator rather than individual components are invariant under this: the trace $\text{tr}\,A=A_{ii}$ (using $\text{tr}(AB)=\text{tr}(BA)$, invariant under cyclic permutation), the determinant, and the eigenvalues (with $\det A=\prod_i\lambda_i$ once diagonalised) are all basis-independent — properties of the operator itself, not of how it happens to be written down.

## Dual space

Every vector space $\mathcal V$ has a **dual space** $\mathcal V^*$: the set of linear maps (functionals) $L:\mathcal V\to\mathcal F$ sending vectors to scalars. Given a basis $\{\underline e_i\}$, any $L\in\mathcal V^*$ is completely fixed by the $n$ numbers $L(\underline e_1),\dots,L(\underline e_n)$, and $\mathcal V^*$ itself becomes a vector space under the obvious addition/scaling of maps, with **dual basis** $L_{\underline e_i}$ defined by $L_{\underline e_i}(\underline e_j)=\delta_{ij}$. Once $\mathcal V$ has an inner product, every $\underline a\in\mathcal V$ generates a specific dual vector $L_{\underline a}(\underline b)\equiv\langle\underline a,\underline b\rangle$ — the natural (but basis-dependent for non-orthonormal bases) identification between $\mathcal V$ and $\mathcal V^*$.

## Bra-ket notation

**Bra-ket notation** makes this identification explicit: kets $|v\rangle\in\mathcal V$, bras $\langle v|\in\mathcal V^*$ (the dual of $|v\rangle$), with $\langle u|v\rangle\equiv\langle\underline u,\underline v\rangle$ the inner product. In an orthonormal basis, kets/bras become column/row vectors, $|v\rangle=(\alpha_1,\dots,\alpha_n)^T$ and $\langle v|=(\alpha_1^*,\dots,\alpha_n^*)$, and components are read off directly by projection $v_i=\langle e_i|v\rangle$ — no linear system to solve, unlike a general (non-orthonormal) basis. The identity operator resolves as $\hat 1=\sum_i|e_i\rangle\langle e_i|$ (or $\int|k\rangle\langle k|\,dk$ for a continuous basis), the algebraic statement that projecting onto a complete basis and summing recovers the original vector.

# Related
- [[Vector Spaces, Basis and Dimension]]
- [[Dirac Notation and Operators and Observables]]
