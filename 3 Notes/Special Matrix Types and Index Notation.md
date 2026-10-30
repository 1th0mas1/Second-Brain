---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - hermitian matrix
  - unitary matrix
  - orthogonal matrix
  - projection matrix
  - rotation matrix
  - index notation
  - einstein summation
  - kronecker delta
  - levi-civita
---
up: [[Vectors & Matrices.base]]

# Special Matrix Types and Index Notation

## Hermitian, Orthogonal, and Unitary Matrices

**Hermitian** matrices satisfy $\mathbf H=\mathbf H^\dagger$; their real-field analogue is **symmetric**, $\mathbf S=\mathbf S^T$. Both have guaranteed real eigenvalues and mutually orthogonal eigenvectors, which is why they're central to quantum mechanics — observables must have real (measurable) eigenvalues, and Hermitian operators guarantee this.

**Orthogonal** matrices satisfy $\mathbf{OO}^T=\mathbf I$, i.e. $\mathbf O^T=\mathbf O^{-1}$. Writing $\mathbf O=(\vec c_1,...,\vec c_n)$ in terms of its columns, $(\mathbf{OO}^T)_{ij}=\vec c_i\cdot\vec c_j=\delta_{ij}$ — the columns are mutually orthonormal, so an orthogonal matrix is exactly the transformation between two orthonormal bases. **Unitary** matrices are the complex analogue, $\mathbf{UU}^\dagger=\mathbf I \Rightarrow \mathbf U^\dagger=\mathbf U^{-1}$; their eigenvalues are complex phases of unit magnitude ($|\lambda|=1$), so unitary transformations preserve lengths without any real stretching or shrinking.

## Projection and Rotation Matrices

**Projection** matrices satisfy $\mathbf P^2=\mathbf P$ — applying the projection twice does nothing more than applying it once, since the vector is already in the target subspace after the first application. This idempotency pins down the eigenvalues: if $\mathbf P\vec v=\lambda\vec v$ then $\mathbf P^2\vec v=\lambda^2\vec v=\mathbf P\vec v=\lambda\vec v$, so $\lambda^2=\lambda \Rightarrow \lambda(\lambda-1)=0$, giving only $\lambda=0$ or $1$. Since trace equals the sum of eigenvalues, $\text{tr}(\mathbf P)$ directly counts the eigenvalue-1 subspace's dimension — the dimension of the subspace being projected onto.

**Rotation** matrices preserve all inner products (lengths and angles unchanged), which forces $\mathbf R^T\mathbf R=\mathbf I$ (a special case of orthogonal, with the extra constraint $\det\mathbf R=+1$ rather than $\pm1$, ruling out reflections). In 2D they form a one-parameter group: $\mathbf R(\theta_1)\mathbf R(\theta_2)=\mathbf R(\theta_1+\theta_2)$, so composing two rotations just adds their angles.

## Summation Convention and Symbols

Einstein summation convention: whenever an index is repeated in a term, summation over that index (1 to 3, in $\R^3$) is implied — writing $\sum$ explicitly becomes unnecessary.

**Kronecker delta** $\delta_{ij}=1$ if $i=j$, else $0$. It acts as an *index replacer*: contracting it with another tensor just relabels an index, e.g. $\delta_{ij}v_j = v_i$.

**Levi-Civita tensor** $\epsilon_{ijk}$ (more generally $\epsilon_{i_1...i_n}$) is $+1$ for an even permutation of $(1,2,3)$, $-1$ for an odd permutation, and $0$ if any index repeats. It's totally antisymmetric: swapping any two indices flips its sign, so a single repeated index automatically kills the term.

## Key Identity and Applications

The most useful contraction identity — worth memorising — is:
$$\epsilon_{ijk}\epsilon_{kmn} = \delta_{im}\delta_{jn}-\delta_{jm}\delta_{in}$$
It converts a product of two $\epsilon$'s (summed over the shared index $k$) into products of $\delta$'s, which is how vector identities like the BAC-CAB rule for $\vec a\times(\vec b\times\vec c)$ get proved algebraically rather than by brute-force expansion.

Both fundamental vector products fall out of index notation directly:
- Scalar product: $\vec v \cdot \vec u = \delta_{ij}v_iu_j = v_iu_i$ — the delta forces $i=j$, collapsing the double sum to a single one.
- Vector product: $\vec v \times \vec u = \vec e_i\epsilon_{ijk}v_ju_k$ — each component $i$ of the result sums over the remaining two indices $j,k$.

This machinery is what makes proving identities in [[Scalar, Vector and Triple Products]] and [[Scalar, Vector and Triple Products]] tractable without geometric hand-waving.

# Related
- [[Determinants, Eigenvalues and Diagonalisation]]
- [[Lines, Planes, Inner Products and Quadratic Forms]]
- [[Scalar, Vector and Triple Products]]
- [[Scalar, Vector and Triple Products]]
