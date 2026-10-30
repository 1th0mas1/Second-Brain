---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - vector space
  - subspace
  - field
  - closure
  - basis
  - dimension
---
up: [[Vectors & Matrices.base]]

# Vector Spaces, Basis and Dimension

## Definition

A **field** $\mathcal F$ (e.g. $\mathbb Q, \mathbb R, \mathbb C$) is the arena within which calculations are carried out — scalars come from here.

A **vector space** $\mathcal V$ over $\mathcal F$ is a set equipped with two operations: vector addition $(\vec v,\vec w)\to\vec v+\vec w$ and scalar multiplication $(\alpha,\vec v)\to\alpha\vec v$. These must satisfy: associativity $(\vec u+\vec v)+\vec w=\vec u+(\vec v+\vec w)$; existence of a zero vector $\vec 0$ with $\vec 0+\vec v=\vec v$; additive inverses $-\vec v$ with $\vec v+(-\vec v)=\vec 0$; commutativity $\vec v+\vec w=\vec w+\vec v$; and distributivity in both directions, $\alpha(\vec v+\vec w)=\alpha\vec v+\alpha\vec w$ and $(\alpha+\beta)\vec v=\alpha\vec v+\beta\vec v$, plus $(\alpha\beta)\vec v=\alpha(\beta\vec v)$ and $1\vec v=\vec v$. Elements of $\mathcal V$ are called vectors, elements of $\mathcal F$ scalars — note the definition is entirely algebraic, so "vector" here can mean things far more abstract than an arrow (matrices, polynomials, functions all form vector spaces).

## Subspaces and Closure

**Subspace**: $\mathcal W\subset\mathcal V$ is a subspace (a vector space in its own right, sitting inside $\mathcal V$) iff it is non-empty and closed under both operations:
$$\vec w_1+\vec w_2\in\mathcal W \text{ for } \vec w_1,\vec w_2\in\mathcal W, \qquad \alpha\vec w\in\mathcal W \text{ for } \alpha\in\mathcal F,\ \vec w\in\mathcal W$$
Because these two closure conditions together guarantee every linear combination of vectors in $\mathcal W$ stays in $\mathcal W$, checking closure is the standard proof technique for showing a given subset is a (sub)space — you don't need to re-verify all eight axioms above, since they're inherited automatically from $\mathcal V$.

## Basis and Uniqueness

$\vec v_1,...,\vec v_k$ form a **basis** of $\mathcal V$ (a minimal spanning set) iff both:
1. they're linearly independent, and
2. $\mathcal V = \text{Span}(\vec v_1,...,\vec v_k)$.

The reason a basis is so useful is that every vector then has a *unique* representation as a combination of basis vectors. This follows directly from independence: if $\vec v = \alpha_i\vec v_i = \beta_i\vec v_i$ for two different coefficient sets, then $(\alpha_i-\beta_i)\vec v_i=0$, and independence forces $\alpha_i=\beta_i$ for every $i$. So coordinates relative to a basis are well-defined.

## Dimension

**Dimension** $\dim_{\mathcal F}\mathcal V = k$ is the size of a basis (all bases of a given space have the same size). For example $\dim_\R(\R^n)=\dim_\Complex(\Complex^n)=n$, but $\dim_\R(\Complex^n)=2n$ — the dimension depends on which field you count over, since each complex coordinate needs two independent real numbers.

For two subspaces of the same space:
$$\dim(\mathcal V+\mathcal W)=\dim\mathcal V+\dim\mathcal W-\dim(\mathcal V\cap\mathcal W)$$
(directly analogous to inclusion-exclusion for set sizes — the overlap $\mathcal V\cap\mathcal W$ is otherwise double-counted).

Two structural results worth knowing: any linearly independent set can be extended ("completed") to a full basis by adding more vectors; and if $\mathcal V\subset\mathcal W$ with $\dim\mathcal V=\dim\mathcal W$, then necessarily $\mathcal V=\mathcal W$ — a subspace can't have "room to spare" once dimensions match.

# Related
- [[Span, Linear Independence and Linear Maps]]
