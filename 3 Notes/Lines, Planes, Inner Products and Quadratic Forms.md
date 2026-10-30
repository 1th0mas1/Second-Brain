---
old: true
Tags:
  - year-1
Index:
Class:
  - Vectors & Matrices
Topics:
  - affine geometry
  - lines
  - planes
  - distance formulas
  - inner product
  - gram-schmidt
  - orthonormal basis
  - quadratic forms
  - conic sections
  - eigenvalue signature
---
up: [[Vectors & Matrices.base]]

# Lines, Planes, Inner Products and Quadratic Forms

## Defining Lines and Planes

Points live in **affine space** $A_n=\R^n$ — unlike $\R^n$ as a vector space, points don't have a distinguished origin, but vectors can still act on them (translate them).

A **line** through point $\vec p$ with direction $\vec q$ can be written vectorially, parametrically, or in symmetric form:
$$\vec r(t) = \vec p + t\vec q \qquad x=p_x+tq_x,\ y=p_y+tq_y,\ z=p_z+tq_z \qquad \frac{x-p_x}{q_x}=\frac{y-p_y}{q_y}=\frac{z-p_z}{q_z}(=t)$$
$\vec q$ is found by subtracting two known points on the line.

A **plane** needs a point $\vec a$ and a normal vector $\vec n$. If $\vec v,\vec w$ are two independent vectors lying in the plane, $\vec n=\vec v\times\vec w$. Then either
$$\vec r = \vec a+\mu\vec v+\lambda\vec w \qquad\text{or}\qquad (\vec r-\vec a)\cdot\vec n=0 \ \Rightarrow\ \vec r\cdot\vec n=\vec a\cdot\vec n$$
which in Cartesian form ($\vec r=(x,y,z)^T$, $\vec n=(a,b,c)^T$) is $ax+by+cz=d$.

## Geometric Techniques

These follow from projecting displacement vectors perpendicular to a line/plane using the cross or dot product:
- point to line: $d_{min}=\dfrac{|(\vec p-\vec p_0)\times\vec q|}{|\vec q|}$ — the cross product isolates the component of $(\vec p-\vec p_0)$ perpendicular to $\vec q$.
- line to line: $d_{min}=\dfrac{|(\vec p_1-\vec p_2)\cdot(\vec q_1\times\vec q_2)|}{|\vec q_1\times\vec q_2|}$ — projects the separation onto the direction mutually perpendicular to both lines.
- point to plane: $d_{min}=(\vec a-\vec p_0)\cdot\hat n$
- line of intersection of two planes: direction $\vec q=\vec n_1\times\vec n_2$ (perpendicular to both normals); find a specific point by intersecting this line with either plane's equation.
- point of intersection of a line and plane (with $\vec q\cdot\vec n\ne0$, i.e. not parallel): $t = \dfrac{\vec n\cdot(\vec a-\vec p)}{\vec q\cdot\vec n}$, substituted back into $\vec r(t)$.

A related result: for a triangle with side vectors $\vec a,\vec b,\vec c$ satisfying $\vec a+\vec b+\vec c=0$, taking $\vec a\times$ both sides shows $|\vec a\times\vec b|=|\vec b\times\vec c|=|\vec a\times\vec c|$, and the triangle's area is $\tfrac12|\vec a\times\vec b|$ (half the parallelogram area from [[Scalar, Vector and Triple Products]]).

## Definition

An inner product $\langle\vec v,\vec w\rangle$ is a generalisation of the dot product and must satisfy: conjugate symmetry $\langle\vec v,\vec w\rangle=\langle\vec w,\vec v\rangle^*$ (reducing to plain symmetry $\langle\vec v,\vec w\rangle=\langle\vec w,\vec v\rangle$ if $\mathcal F=\R$); linearity in one argument, e.g. $\langle\vec v,\alpha\vec u+\beta\vec w\rangle=\alpha\langle\vec v,\vec u\rangle+\beta\langle\vec v,\vec w\rangle$ (note: conjugate-symmetry then forces *conjugate*-linearity $\langle\alpha\vec v+\beta\vec u,\vec w\rangle=\alpha^*\langle\vec v,\vec w\rangle+\beta^*\langle\vec u,\vec w\rangle$ in the complex case, but full bilinearity when real); and positivity $\langle\vec v,\vec v\rangle>0$ for $\vec v\ne\vec 0$, which is what lets $\sqrt{\langle\vec v,\vec v\rangle}$ define a sensible length.

Examples beyond the ordinary dot product: standard inner product in $\Complex^n$, $\langle\vec v,\vec w\rangle=\vec v^\dagger\vec w=v_i^*w_i$ (conjugation needed so $\langle\vec v,\vec v\rangle$ stays real and positive); and the matrix inner product $\langle\mathbf A,\mathbf B\rangle=\text{tr}(\mathbf A^T\mathbf B)=\sum_{i,j}A_{ij}B_{ij}$, treating matrices as vectors of their entries.

## Orthonormal Bases and Gram-Schmidt

An **orthonormal basis** $\vec\epsilon_1,...,\vec\epsilon_n$ satisfies $\langle\vec\epsilon_i,\vec\epsilon_j\rangle=\delta_{ij}$ (e.g. the standard basis $\vec e_i$ in $\R^n$). Its main payoff is computational: instead of solving a linear system to find the coordinates of $\vec v$ in a general basis, they're read off directly as $\alpha_j=\langle\vec\epsilon_j,\vec v\rangle$ — exactly the projection trick from [[Scalar, Vector and Triple Products]] generalised to any inner product.

**Gram-Schmidt** builds such a basis from any linearly independent set $\vec v_1,...,\vec v_n$: take $\vec u_1=\vec v_1$, then successively subtract off the projection onto all previously-built orthogonal vectors,
$$\vec u_k = \vec v_k - \sum_{j<k}\frac{\langle\vec u_j,\vec v_k\rangle}{\langle\vec u_j,\vec u_j\rangle}\vec u_j$$
and normalise each $\vec u_k$ at the end. Because it only ever removes components already spanned by earlier vectors, the resulting set spans the same space as the original while being mutually orthogonal by construction.

## Definition

A **quadratic form** is a polynomial expression built from a symmetric matrix $\mathbf A$:
$$Q(\vec x) = \vec x^T\mathbf A\vec x = c, \quad \mathbf A \text{ symmetric}$$
Symmetry of $\mathbf A$ guarantees (via [[Special Matrix Types and Index Notation]]) real eigenvalues and an orthogonal set of eigenvectors — this is what makes the equation solvable by rotating to a natural coordinate system. Diagonalising $\mathbf A=\mathbf P\,\text{diag}(\lambda_1,...,\lambda_n)\mathbf P^{-1}$ and substituting $\vec y=\mathbf P^{-1}\vec x$ (a rotation, since $\mathbf P$ is orthogonal for symmetric $\mathbf A$) removes all cross-terms, leaving $Q=\sum_i\lambda_i y_i^2=c$ — a sum of squares along the eigenvector directions, the **principal axes** of the surface.

## Classifying the Surface

| Condition on $\lambda_i$ | 2D | 3D |
| --- | --- | --- |
| all equal, same sign as $c$ | circle | sphere |
| all same sign as $c$, unequal | ellipse | ellipsoid |
| mixed signs | hyperbola | hyperboloid |

Each eigenvalue sets the scale along its own principal axis: writing $\lambda_i y_i^2 = c$ term-by-term gives the **semi-axis lengths**
$$l_i=\sqrt{\frac{c}{\lambda_i}}$$
A negative $\lambda_i$ (mixed-sign case) makes this undefined along that axis — geometrically, the surface opens out to infinity in that direction instead of closing, which is exactly the hyperbola/hyperboloid case.

# Related
- [[Scalar, Vector and Triple Products]]
- [[Scalar, Vector and Triple Products]]
- [[Special Matrix Types and Index Notation]]
- [[Determinants, Eigenvalues and Diagonalisation]]
