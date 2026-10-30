---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - span
  - linear independence
  - linear combination
  - linear maps
  - injective
  - surjective
  - bijective
  - kernel
  - rank-nullity
---
up: [[Vectors & Matrices.base]]

# Span, Linear Independence and Linear Maps

## Linear Combinations and Span

A **linear combination** of vectors $\vec v_1,...,\vec v_k$ is the result of scalar multiplication and addition applied to them: $\sum_{i=1}^k\alpha_i\vec v_i$, with $\alpha_i\in\mathcal F$.

The **span** of a set of vectors is the set of *all* their linear combinations:
$$\text{Span}(\vec v_1,...,\vec v_k)=\Big\{\sum_{i=1}^k\alpha_i\vec v_i\ \Big|\ \alpha_i\in\mathcal F\Big\}$$
This is automatically a subspace of whatever vector space the $\vec v_i$ live in, since it's closed under addition and scalar multiplication by construction.

## Linear Independence

The set $\vec v_1,...,\vec v_k$ is **linearly independent** iff the only solution to
$$\sum_{i=1}^k\alpha_i\vec v_i = 0$$
is the trivial one, every $\alpha_i=0$. If a non-trivial solution exists, the vectors are linearly *dependent* — some $\vec v_j$ can then be rearranged as a linear combination of the others, meaning it carries no new "direction" the rest don't already cover.

The practical consequence is that **adding a linearly dependent vector to a set never changes its span** — it's redundant information. This is exactly why independence matters for [[Vector Spaces, Basis and Dimension]]: a basis is the smallest possible spanning set, i.e. one with no redundant (dependent) vectors.

## Maps and Linearity

For a general map $f:X\to Y$, $X$ is the domain and $Y$ the codomain; $\text{Im}(f)=\{f(x)\,|\,x\in X\}\subseteq Y$ is what's actually reachable. A map is **injective** (one-to-one) if $f(x)=f(x')\Rightarrow x=x'$, **surjective** (onto) if $\text{Im}(f)=Y$, and **bijective** if both — bijective maps are exactly the invertible ones, since every element of $Y$ then has a unique preimage.

$f:\mathcal V\to\mathcal W$ is **linear** if it respects both vector-space operations:
$$f(\vec v_1+\vec v_2)=f(\vec v_1)+f(\vec v_2), \qquad f(\alpha\vec v)=\alpha f(\vec v)$$
A linear map automatically sends $\vec 0\mapsto\vec 0$. Any linear map between finite-dimensional spaces $\mathcal F^n\to\mathcal F^m$ can be represented as an $m\times n$ matrix — this is *why* matrices are worth studying: they're just the coordinate representation of linear maps. The set of all linear maps $\mathcal V\to\mathcal W$ itself forms a vector space under $(f+g)(\vec v)=f(\vec v)+g(\vec v)$ and $(\alpha f)(\vec v)=\alpha f(\vec v)$.

## Kernel, Rank, and Rank-Nullity

**Kernel**: $\ker(f)=\{\vec v\,|\,f(\vec v)=\vec 0\}$ — a subspace of $\mathcal V$ (closed under the operations since $f$ is linear). **Rank**: $\text{rk}(f)=\dim\text{Im}(f)$, since $\text{Im}(f)$ is also a subspace, this time of $\mathcal W$. Injectivity and surjectivity translate into these terms as $f$ injective $\iff \ker(f)=\{\vec 0\}$ and $f$ surjective $\iff \text{Im}(f)=\mathcal W \iff \dim\text{Im}(f)=\dim\mathcal W$.

**Rank-nullity theorem**: $\dim\ker(f)+\text{rk}(f)=\dim\mathcal V$ — every dimension of the domain either gets "absorbed" into the kernel (mapped to zero) or survives into the image, with nothing left over. This single theorem immediately gives the bijectivity chain:
$$f \text{ bijective} \iff \dim\mathcal V=\dim\mathcal W \iff \ker(f)=\{\vec 0\}\iff \text{rk}(f)=\dim\mathcal V$$
which is the abstract version of "a square matrix is invertible iff it has full rank" used throughout [[Gaussian Elimination, Rank and Linear Systems]] and [[Matrix Operations and the Matrix Inverse]].

# Related
- [[Vector Spaces, Basis and Dimension]]
- [[Vector Spaces, Basis and Dimension]]
- [[Gaussian Elimination, Rank and Linear Systems]]
