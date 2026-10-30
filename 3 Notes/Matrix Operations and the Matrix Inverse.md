---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - matrices
  - transpose
  - hermitian conjugate
  - matrix multiplication
  - trace
  - matrix inverse
  - cofactor method
---
up: [[Vectors & Matrices.base]]

# Matrix Operations and the Matrix Inverse

## Basic Operations

A matrix $\mathbf A$ is an $n\times m$ array (n rows, m columns), written in index notation as $A_{ij}$. The identity matrix $\mathbf I$ has $I_{ij}=\delta_{ij}$ (ones on the diagonal, zero elsewhere) and acts as the multiplicative identity.

Three unary operations combine to give a fourth: **transpose** flips rows and columns, $(A_{ij})^T=A_{ji}$; **complex conjugate** conjugates each entry, $(B_{ij})^*=B_{ij}^*$; and **Hermitian conjugate** ("dagger") does both, $\mathbf C^\dagger=(\mathbf C^*)^T=(\mathbf C^T)^*$ — the order doesn't matter since the two operations act independently on each entry's real/imaginary parts vs. its row/column position.

## Multiplication and Trace

**Matrix multiplication**: $C_{ik}=A_{ij}B_{jk}$ (sum over the shared index $j$), equivalently $C_{ik}=\vec A_i^T\cdot\vec B^k$ — row $i$ of $\mathbf A$ dotted with column $k$ of $\mathbf B$. This immediately shows why the number of columns of $\mathbf A$ must equal the number of rows of $\mathbf B$, and why multiplication is generally **not commutative**: $\mathbf{AB}\ne\mathbf{BA}$ (the dimensions may not even both make sense).

**Trace** is the sum of diagonal elements, $\text{tr}(\mathbf A)=A_{ii}$, and is linear: $\text{tr}(\mathbf A+\mathbf B)=\text{tr}\mathbf A+\text{tr}\mathbf B$, $\text{tr}(k\mathbf A)=k\,\text{tr}\mathbf A$, and unaffected by transpose or conjugation, $\text{tr}(\mathbf A^T)=\text{tr}\mathbf A$. Its most important property is cyclicity, $\text{tr}(\mathbf{AB})=\text{tr}(\mathbf{BA})$, which extends to any cyclic permutation of a product. Applying this to $\mathbf{PAP}^{-1}$ gives $\text{tr}(\mathbf{PAP}^{-1})=\text{tr}(\mathbf P^{-1}\mathbf{PA})=\text{tr}(\mathbf A)$ — trace is **basis independent**, i.e. invariant under the similarity transformations used in [[Determinants, Eigenvalues and Diagonalisation]].

## Existence

The inverse $\mathbf A^{-1}$ satisfies $\mathbf A^{-1}\mathbf A = \mathbf{AA}^{-1}=\mathbf I$. Only square matrices can have one (domain and codomain must match dimension), and among those, only ones of **maximal rank** — all rows (equivalently columns) linearly independent — are invertible, since [[Gaussian Elimination, Rank and Linear Systems|rank]] less than full means the associated map isn't bijective.

## Computing the Inverse

**Cofactor method**: build the cofactor matrix $C_{ij}=(-1)^{i+j}\det\mathbf A_{(i,j)}$ (the same minors used in [[Determinants, Eigenvalues and Diagonalisation|cofactor expansion]]), then
$$\mathbf A^{-1}=\frac{1}{\det\mathbf A}\mathbf C^T$$
This immediately shows *why* full rank is required: $\det\mathbf A=0$ (rank-deficient) makes this expression blow up.

**Row-operation method**: each elementary row operation can itself be represented as a matrix $\mathbf P_k$; chaining enough of them to reduce $\mathbf A$ to $\mathbf I$ gives $\mathbf P_n\cdots\mathbf P_1\mathbf A=\mathbf I$, so $\mathbf A^{-1}=\mathbf P_n\cdots\mathbf P_1$. In practice this is done by augmenting $\mathbf A$ with the identity, $[\mathbf A\,|\,\mathbf I]$, and applying row operations until the left block becomes $\mathbf I$ — the right block is then $\mathbf A^{-1}$: $[\mathbf A\,|\,\mathbf I]\to[\mathbf I\,|\,\mathbf A^{-1}]$. This is usually faster than cofactors for matrices larger than $3\times3$.

# Related
- [[Determinants, Eigenvalues and Diagonalisation]]
- [[Determinants, Eigenvalues and Diagonalisation]]
- [[Gaussian Elimination, Rank and Linear Systems]]
- [[Gaussian Elimination, Rank and Linear Systems]]
