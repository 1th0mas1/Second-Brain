---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - determinants
  - cofactor expansion
  - eigenvalues
  - eigenvectors
  - diagonalisation
  - characteristic polynomial
---
up: [[Vectors & Matrices.base]]

# Determinants, Eigenvalues and Diagonalisation

## Definition

The determinant maps the column (or row) vectors $\vec a_1,...,\vec a_n$ of a square matrix to a single number $\det(\vec a_1,...,\vec a_n)$, defined by the properties: multilinearity, $\det(...,\alpha\vec a+\beta\vec b,...)=\alpha\det(...,\vec a,...)+\beta\det(...,\vec b,...)$; antisymmetry (alternating), $\det(...,\vec a,...,\vec b,...)=-\det(...,\vec b,...,\vec a,...)$; normalisation, $\det(\vec e_1,...,\vec e_n)=1$; and consequently it vanishes whenever two arguments repeat (or are linearly dependent) — the same structure as the [[Scalar, Vector and Triple Products]], of which the 3D determinant is a special case.

**Cofactor expansion** computes it recursively: letting $\mathbf A_{(i,j)}$ denote $\mathbf A$ with row $i$ and column $j$ deleted,
$$\det\mathbf A = \sum_i (-1)^{i+j}A_{ij}\det(\mathbf A_{(i,j)})$$
expanding along any fixed column $j$ (or equivalently any row) — the choice doesn't affect the result, which is itself a non-trivial consequence of the defining properties above.

## Properties

$$\det(\mathbf A^T)=\det\mathbf A,\qquad \det(\mathbf{AB})=\det\mathbf A\det\mathbf B,\qquad \det(\mathbf A^{-1})=\frac{1}{\det\mathbf A},\qquad \det(\lambda\mathbf A)=\lambda^n\det\mathbf A$$
The multiplicativity property $\det(\mathbf{AB})=\det\mathbf A\det\mathbf B$ combined with $\det(\mathbf P^{-1})=1/\det\mathbf P$ gives $\det(\mathbf{PAP}^{-1})=\det\mathbf A$ — like the trace, the determinant is **basis independent**, so it's a genuine property of the underlying linear map, not an artefact of the coordinates used to represent it. This is what makes $\det(\mathbf A-\lambda\mathbf I)=0$ (the characteristic equation in Determinants, Eigenvalues and Diagonalisation) give eigenvalues that don't depend on choice of basis.

## Finding Eigenvalues

A square matrix $\mathbf A$ has eigenvalue $\lambda$ with eigenvector $\vec v\ne\vec 0$ if $\mathbf A\vec v = \lambda\vec v$ — applying $\mathbf A$ to $\vec v$ just rescales it, without changing its direction. Rearranging, $(\mathbf A-\lambda\mathbf I)\vec v=\vec 0$ has a non-trivial solution only when $\mathbf A-\lambda\mathbf I$ is singular, giving the **characteristic polynomial**:
$$\mathcal X(\lambda)=\det(\mathbf A-\lambda\mathbf I)=0$$
Both $\mathcal X$ and its coefficients are basis independent (since $\det(\mathbf{PAP}^{-1}-\lambda\mathbf I)=\det(\mathbf A-\lambda\mathbf I)$), so the eigenvalues themselves are intrinsic properties of the underlying linear map, not of whatever coordinates happen to represent it.

## Diagonalisation

If the eigenvectors $\vec v_1,...,\vec v_n$ happen to form a basis of the space, $\mathbf A$ is **diagonalisable**. Collecting them as columns of $\mathbf P=(\vec v_1,...,\vec v_n)$ — invertible since the $\vec v_i$ are linearly independent — gives
$$\mathbf P^{-1}\mathbf{AP}=\text{diag}(\lambda_1,...,\lambda_n) \quad\Longleftrightarrow\quad \mathbf A = \mathbf P\,\text{diag}(\lambda_1,...,\lambda_n)\,\mathbf P^{-1}$$
i.e. $\mathbf A$ acts as simple scaling once you view it in the eigenvector basis — this is what makes diagonalisation so useful for computing $\mathbf A^n$ or $e^{\mathbf A}$ cheaply, since only the diagonal entries need to be raised to a power.

Two diagonalisable matrices are **simultaneously diagonalisable** (share the same eigenvector basis $\mathbf P$) if and only if they commute: $[\mathbf A,\mathbf B]=\mathbf{AB}-\mathbf{BA}=0$. This condition shows up throughout quantum mechanics as the criterion for two observables having a common set of eigenstates.

# Related
- [[Scalar, Vector and Triple Products]]
- [[Matrix Operations and the Matrix Inverse]]
- [[Lines, Planes, Inner Products and Quadratic Forms]]
- [[Special Matrix Types and Index Notation]]
