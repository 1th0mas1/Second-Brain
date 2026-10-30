---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - gaussian elimination
  - rank
  - row echelon form
  - linear systems
  - cramer's rule
---
up: [[Vectors & Matrices.base]]

# Gaussian Elimination, Rank and Linear Systems

## Row Reduction

The three elementary row operations — swapping two rows, adding a multiple of one row to another, and scaling a row — each leave the matrix's image (and hence its rank) unchanged, so they can be freely used to simplify a matrix without losing information. Applied systematically, they reduce any matrix to **upper echelon form**, where only entries on or above the diagonal can be non-zero:
$$\mathbf A = \begin{pmatrix}a_{11}&\cdots&\cdots&a_{1m}\\0&a_{22}&\cdots&\vdots\\\vdots&\ddots&\ddots&\vdots\\0&\cdots&0&a_{(n-1)m}\\0&\cdots&\cdots&0\end{pmatrix}$$
The algorithm: starting at the top-left entry (swapping rows first if it's zero), use row operations to zero out every entry below it in that column, then move one column right and one row down and repeat.

## Rank

**Rank** is the dimension of the matrix's image, which after row-reduction is simply the number of non-zero rows in echelon form:
$$\text{rk}(\mathbf M)=\dim(\text{Im}(\mathbf M))$$
Since a square $n\times n$ matrix represents a linear map $\mathcal F^n\to\mathcal F^n$, the [[Span, Linear Independence and Linear Maps|rank-nullity theorem]] means full rank ($\text{rk}=n$) is equivalent to bijectivity. If rank is less than the matrix's dimension, the image doesn't fill the codomain, the map isn't bijective, and the matrix has **no inverse** — this is the practical link between [[Matrix Operations and the Matrix Inverse]] and Gaussian Elimination, Rank and Linear Systems: row-reducing the matrix tells you immediately whether a unique solution exists.

## Matrix Form and Solvability

A system like $a_1x+a_2y+a_3z=b_1$, etc., packages into $\mathbf A\vec x=\vec b$ with $\mathbf A$ the coefficient matrix. For the **homogeneous** case ($\vec b=\vec 0$), non-trivial solutions exist iff $\det\mathbf A=0$ (equivalently, $\mathbf A$ is singular and its [[Matrix Operations and the Matrix Inverse|inverse]] doesn't exist, so $\vec x=\vec 0$ isn't the only option). For the **inhomogeneous** case, a unique solution exists iff $\det\mathbf A\ne0$, in which case $\vec x=\mathbf A^{-1}\vec b$.

When $\det\mathbf A=0$, the number of solutions depends on rank rather than determinant alone. For 3 unknowns: $\text{rk}(\mathbf A)=3$ gives a unique point; $\text{rk}(\mathbf A)=2$ gives a line of solutions (1 free parameter); $\text{rk}(\mathbf A)=1$ gives a plane of solutions (2 free parameters). Geometrically this matches [[Lines, Planes, Inner Products and Quadratic Forms]]: each row of $\mathbf A\vec x=\vec b$ is a plane, and their mutual intersection shrinks by one dimension per independent constraint.

## Solution Methods

Three standard approaches: **row reduction** on the augmented matrix $[\mathbf A\,|\,\vec b]$ via Gaussian elimination; **matrix inverse**, $\vec x=\mathbf A^{-1}\vec b$, valid only when $\text{rk}(\mathbf A)=3$; and **Cramer's rule**, which replaces column $i$ of $\mathbf A$ with $\vec b$ to form $\mathbf B_i$, then reads off each unknown as a ratio of determinants:
$$x_i = \frac{\det\mathbf B_i}{\det\mathbf A}$$
Cramer's rule is elegant for small systems (and for seeing solutions depend continuously on the entries of $\mathbf A,\vec b$) but is computationally worse than row reduction for anything beyond $3\times3$.

# Related
- [[Span, Linear Independence and Linear Maps]]
- [[Matrix Operations and the Matrix Inverse]]
