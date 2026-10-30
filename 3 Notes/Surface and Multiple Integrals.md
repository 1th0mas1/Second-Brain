---
old: true
Tags:
  - year-1
Index:
Class:
  - Vector Calculus
Topics:
  - surface integral
  - vector area
  - flux
  - double integrals
  - triple integrals
  - x-simple y-simple domains
---
up: [[Vector Calculus.base]]

# Surface and Multiple Integrals

## Vector Area

For a flat surface of scalar area $S$ and unit normal $\hat n$, the **vector area** is $\vec S=S\hat n$. A curved surface is built up from infinitesimal flat patches, giving $\vec S \equiv \int_S d\vec S = \iint_S\hat n\,dS$. Projecting onto a coordinate plane (e.g. dotting with $\hat k$ for the $xy$-plane) gives $dA=\hat e\cdot d\vec S$, which is how a tilted patch's "shadow" area relates to its true area. A useful consequence: the vector area of any **closed** surface is exactly zero — normals on opposite sides cancel out when integrated over the whole enclosure.

## Finding the Normal and dS

For a surface given explicitly as $z=f(x,y)$, define $g(x,y,z)=f(x,y)-z$ (a level set, $g=0$, containing the surface). Then
$$\hat n = \frac{\nabla g}{|\nabla g|}, \qquad \nabla g = \left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y},-1\right), \qquad dS = |\nabla g|\,dA$$
with $dA=dxdy$ the flat-plane element from Surface and Multiple Integrals — the $|\nabla g|$ factor stretches the flat projected area up to the true (tilted) surface area.

For a **parametric surface** $\vec r(u,v)=(x(u,v),y(u,v),z(u,v))$, the tangent vectors $\partial\vec r/\partial u,\ \partial\vec r/\partial v$ span the local tangent plane, so their cross product gives both the normal direction and the area-scaling factor at once:
$$d\vec S = \left(\frac{\partial\vec r}{\partial u}\times\frac{\partial\vec r}{\partial v}\right)dudv, \qquad dS = \left|\frac{\partial\vec r}{\partial u}\times\frac{\partial\vec r}{\partial v}\right|dudv$$
(directly analogous to how $\vec a\times\vec b$ gave the parallelogram area in [[Scalar, Vector and Triple Products]]).

A vector field surface integral $\iint_S\vec F\cdot d\vec S$ measures total **flux** through the surface — the net "flow" of the field across it, central to [[Divergence and Curl: The Divergence and Stokes Theorems]].

## Double Integrals

Over a rectangle $D=[a,b]\times[c,d]$, a double integral is built up as an integral of integrals: first take a 1D slice at fixed $y$, $A(y)=\int_a^b f(x,y)dx$, then integrate this over $y$:
$$V=\int_c^d A(y)dy = \int_c^d dy\int_a^b dx\,f(x,y) = \iint f\,dxdy$$
If $f(x,y)=h(x)g(y)$ separates on a rectangular domain, the double integral **factorises** into a product of two 1D integrals, $V=\left(\int_a^b h\,dx\right)\left(\int_c^d g\,dy\right)$ — a useful shortcut whenever the integrand splits this way.

For non-rectangular regions, a domain is **x-simple** if every vertical line crosses it in a single segment, and **y-simple** if every horizontal line does. If both hold, the region is simple and either integration order is valid (equal by Fubini); if only one holds, that fixes which variable must have $x/y$-dependent limits.

## Triple Integrals

The same layering idea extends to volumes, with two natural strategies. **By layers**: slice at fixed $z$ into a 2D region $\Omega(z)$, then stack the slices,
$$\iiint f\,dV = \int_{h_1}^{h_2} dz \iint_{\Omega(z)} f\,dx\,dy$$
**By lines**: for each $(x,y)$ in a 2D base domain $D$, integrate along a vertical line from $z=g_1(x,y)$ to $z=g_2(x,y)$, then integrate over the base:
$$\iiint f\,dV=\iint_D\left(\int_{g_1(x,y)}^{g_2(x,y)}f\,dz\right)dxdy$$
Which strategy is easier depends on the shape of the solid — layers suit volumes with simple cross-sections at each height, lines suit volumes bounded above/below by two surfaces over a simple 2D base. Both generalise directly when switching to curvilinear coordinates via the [[Curves, Arc Length and Curvilinear Coordinates|Jacobian]].

# Related
- [[Divergence and Curl: The Divergence and Stokes Theorems]]
- [[Curves, Arc Length and Curvilinear Coordinates]]
