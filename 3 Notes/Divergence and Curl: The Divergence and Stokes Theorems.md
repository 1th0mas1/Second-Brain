---
old: true
Tags:
  - year-1
Index:
Class:
  - Vector Calculus
Topics:
  - divergence
  - gauss's theorem
  - solenoidal field
  - curl
  - stokes theorem
  - irrotational field
---
up: [[Vector Calculus.base]]

# Divergence and Curl: The Divergence and Stokes Theorems

## Definition

$$\text{div}\vec F = \nabla\cdot\vec F = \frac{\partial F_x}{\partial x}+\frac{\partial F_y}{\partial y}+\frac{\partial F_z}{\partial z}$$

Divergence is a scalar measure of how much a vector field is spreading out from (positive) or converging into (negative) a given point. A field is **solenoidal** if $\nabla\cdot\vec F=0$ everywhere — field lines neither begin nor end, they only pass through.

## Divergence Theorem

**Divergence theorem (Gauss's theorem)**:
$$\iiint_V \nabla\cdot\vec F\,dV = \oiint_S \vec F\cdot d\vec S$$
The flux of $\vec F$ leaving a closed surface $S$ equals the divergence integrated over the volume $V$ it encloses. The proof splits the volume into $x$-simple and $y$-simple slabs; for a $z$-simple slab bounded by $z=\phi_1(x,y)$ below and $z=\phi_2(x,y)$ above,
$$\iiint\frac{\partial F_z}{\partial z}\,dxdydz=\iint\big[F_z(x,y,\phi_2)-F_z(x,y,\phi_1)\big]dxdy = \oiint F_z\hat k\cdot\hat n\,dS$$
i.e. the volume integral of one component's derivative collapses to the flux of that component through the top and bottom boundary — summing the analogous results for all three components (and any bounded volume can be decomposed into such simple pieces) gives the full theorem.

Rearranging as a limit gives the **point definition** of divergence, showing it really is a local "outflow per unit volume":
$$\nabla\cdot\vec F(\vec r_0) = \lim_{r\to0}\frac{1}{|V(r)|}\oiint \vec F\cdot\hat n\,dS$$
Setting $d\vec r=(dx,dy)$ and $\hat n=\tfrac1{ds}(dy,-dx)$ (outward normal in the plane) reduces the divergence theorem to two dimensions and, via $P=-F_y,\ Q=F_x$, reproduces exactly [[Line Integrals, Work and Green's Theorem|Green's theorem]] — confirming Green's theorem is the 2D special case of this result.

## Definition

**Circulation** of a field around a closed loop is the closed line integral $\oint\vec F\cdot d\vec r$. Curl measures the *microscopic* version of this — circulation per unit area as the loop shrinks to a point, projected onto a chosen normal $\hat n$:
$$(\text{curl}\,\vec F)\cdot\hat n = \lim_{A\to0}\frac1A\oint\vec F\cdot d\vec r$$
This limit can be shown to equal $(\nabla\times\vec F)\cdot\hat n$, giving the familiar operator form $\text{curl}\,\vec F=\nabla\times\vec F$. If $\nabla\times\vec F=0$ everywhere, the field is **irrotational**: picture a tiny paddle wheel dropped into the flow — it wouldn't spin about its own axis, even if the field's streamlines look like they curve or circulate on a large scale. Macroscopic circulation and microscopic rotation are genuinely different things; curl only captures the latter.

## Stokes' Theorem

$$\iint_S(\nabla\times\vec F)\cdot\hat n\,dS = \oint_\gamma \vec F\cdot d\vec r$$
The flux of curl through an open surface $S$ equals the circulation of $\vec F$ around its boundary curve $\gamma$ — if $S$ is closed (no boundary), both sides vanish. The proof idea: subdivide $S$ into many small patches; the sum of each patch's tiny circulation loop is $\oint_\gamma \vec F\cdot d\vec r=\sum_i\oint_{\gamma_i}\vec F\cdot d\vec r$, since shared internal edges between adjacent patches are traversed in opposite directions and cancel, leaving only the outer boundary. Each small loop is approximately $(\nabla\times\vec F)\cdot\vec S_i$ by the curl's definition above, and the approximation becomes exact as the patches shrink to zero.

Stokes' theorem is the direct 3D generalisation of [[Line Integrals, Work and Green's Theorem|Green's theorem]] (which is its restriction to a flat surface in the $xy$-plane with $\hat n=\hat k$), and it's what makes the curl-based test for a potential in [[Conservative Fields and the Dirac Delta Function]] work: $\nabla\times\vec F=0$ forces every closed-loop circulation to vanish.

# Related
- [[Surface and Multiple Integrals]]
- [[Line Integrals, Work and Green's Theorem]]
- [[Conservative Fields and the Dirac Delta Function]]
