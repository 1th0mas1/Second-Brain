---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - dot product
  - scalar product
  - orthogonality
  - projection
  - cross product
  - vector product
  - triple scalar product
  - volume
  - determinant
---
up: [[Vectors & Matrices.base]]

# Scalar, Vector and Triple Products

## Definition and Properties

$$\vec a\cdot\vec b = a_ib_i = |\vec a||\vec b|\cos\theta = \langle \vec a,\vec b\rangle,\qquad \theta = \text{acute angle between } \vec a,\vec b$$

Geometrically, the dot product projects the length of one vector onto the other, then multiplies the lengths together. It's bilinear and symmetric:
$$\vec a\cdot\vec b=\vec b\cdot\vec a,\qquad \vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c,\qquad \vec a\cdot(\beta\vec b)=\beta(\vec a\cdot\vec b),\qquad \vec a\cdot\vec a>0 \text{ for } \vec a\ne 0$$

Two vectors are **orthogonal** if $\vec a\cdot\vec b=0$. This matters for bases: a set of mutually orthogonal vectors is automatically linearly independent (none can lie in the span of the others without picking up a non-zero projection onto them), which is why orthogonal/orthonormal bases are so convenient to work with.

## Projection, Length, and Inequalities

The **component of $\vec a$ along $\vec b$** is the scalar $\vec a\cdot\hat b$ (using the unit vector $\hat b = \vec b/|\vec b|$); the full **vector projection** is $(\vec a\cdot\hat b)\hat b$. This is exactly how coordinates are extracted in an orthonormal basis $\vec e_i$: writing $\vec v=\alpha_1\vec e_1+\alpha_2\vec e_2+\alpha_3\vec e_3$ and dotting both sides with $\vec e_i$ gives $\alpha_i = \vec v\cdot\vec e_i$ directly, since $\vec e_i\cdot\vec e_j=\delta_{ij}$.

**Length** follows from the product with itself: $|\vec a| = \sqrt{\vec a\cdot\vec a}$, giving the unit vector $\hat a = \vec a/|\vec a|$. Two standard inequalities bound the product and sum of vectors:
- Cauchy-Schwarz: $|\vec a\cdot\vec b|\le|\vec a||\vec b|$ (follows since $|\cos\theta|\le1$)
- Triangle inequality: $|\vec a+\vec b|\le|\vec a|+|\vec b|$ (the direct route between two points is never longer than a detour)

## Definition

$$\vec a\times\vec b = \vec e_i\epsilon_{ijk}a_jb_k = |\vec a||\vec b|\sin\theta\,\hat n = \begin{vmatrix}\vec e_1&\vec e_2&\vec e_3\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}$$

where $\theta$ is the acute angle between $\vec a$ and $\vec b$, and $\hat n$ is the unit vector normal to both, oriented by the right-hand rule. Because $\epsilon_{ijk}$ flips sign under any index swap, the product **anticommutes**: $\vec a\times\vec b=-\vec b\times\vec a$. It's bilinear like the scalar product, and the standard basis satisfies the cyclic relations $\vec e_1\times\vec e_2=\vec e_3$, $\vec e_2\times\vec e_3=\vec e_1$, $\vec e_3\times\vec e_1=\vec e_2$, with $\vec a\times\vec a=\vec 0$ always.

## Geometric Meaning and Identities

The magnitude $|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$ equals the **area of the parallelogram** spanned by $\vec a$ and $\vec b$ — this is the main reason it shows up throughout [[Lines, Planes, Inner Products and Quadratic Forms]] and surface-area calculations, since a normal vector *and* an area come out of one computation.

Two identities that repeatedly simplify vector algebra (both provable quickly using the $\epsilon\epsilon\to\delta\delta$ identity from [[Special Matrix Types and Index Notation]]):
$$\vec a\times(\vec b\times\vec c)=(\vec a\cdot\vec c)\vec b-(\vec a\cdot\vec b)\vec c \quad\text{(“BAC minus CAB” rule)}$$
$$(\vec a\times\vec b)\cdot(\vec c\times\vec d)=(\vec a\cdot\vec c)(\vec b\cdot\vec d)-(\vec a\cdot\vec d)(\vec b\cdot\vec c)$$
A useful special case of the second identity, setting $\vec c=\vec a,\vec d=\vec b$: $|\vec a\times\vec b|^2=|\vec a|^2|\vec b|^2-(\vec a\cdot\vec b)^2$, which is just $\sin^2\theta = 1-\cos^2\theta$ written in vector form.

## Definition and Properties

$$\langle\vec a,\vec b,\vec c\rangle = \vec a\cdot(\vec b\times\vec c) = \epsilon_{ijk}a_ib_jc_k = \det(\vec a,\vec b,\vec c)$$

Writing it in index notation makes its symmetry properties transparent: since $\epsilon_{ijk}$ is totally antisymmetric, so is the triple product — swapping any two of $\vec a,\vec b,\vec c$ flips its sign, and it's linear in each argument separately. It follows immediately that the product **vanishes whenever any two arguments coincide** (or are parallel), since swapping identical arguments must both flip the sign and leave the value unchanged, forcing it to zero.

This gives a clean test for [[Span, Linear Independence and Linear Maps|linear independence]]: $\langle\vec a,\vec b,\vec c\rangle\ne0$ if and only if $\vec a,\vec b,\vec c$ are linearly independent (equivalently, span $\R^3$) — geometrically, the three vectors only fail to enclose any volume when they're coplanar, i.e. dependent.

## Geometric Meaning

Because $\vec b\times\vec c$ gives a vector normal to the $\vec b,\vec c$ plane with magnitude equal to their parallelogram area, dotting it with $\vec a$ multiplies that base area by the height of $\vec a$ *perpendicular* to the plane. This is exactly the volume of the parallelepiped they span:
$$V_{\text{parallelepiped}} = |\langle\vec u,\vec v,\vec w\rangle|$$
A tetrahedron with the same three edge vectors takes up $\tfrac{1}{3!}=\tfrac16$ of that volume (one of $3!$ congruent pieces you get by systematically splitting the parallelepiped), so $V_{\text{tetrahedron}} = \tfrac16|\langle\vec u,\vec v,\vec w\rangle|$.

# Related
- [[Special Matrix Types and Index Notation]]
- [[Lines, Planes, Inner Products and Quadratic Forms]]
- [[Determinants, Eigenvalues and Diagonalisation]]
