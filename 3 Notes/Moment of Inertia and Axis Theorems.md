---
old: true
Tags:
  - year-1
Index:
Class:
  - Mechanics
Topics:
  - moment of inertia
  - inertia tensor
  - principal axes
  - parallel axis theorem
  - perpendicular axis theorem
---
up: [[Mechanics.base]]

# Moment of Inertia and Axis Theorems

## From Planar to Three Dimensions

For rotation confined to a plane, $\vec J=\sum_i m_i\vec r_i\times(\vec\omega\times\vec r_i)$ simplifies (via the BAC-CAB identity, using $\vec r_i\perp\vec\omega$) to $\vec J=I\vec\omega$ with the scalar $I=\sum_i m_ir_i^2$. In three dimensions this shortcut fails whenever mass isn't distributed symmetrically about the rotation axis: $\vec J$ can point in a different direction from $\vec\omega$ entirely. Expanding the full BAC-CAB result component-by-component (e.g. $J_x=\omega_x\sum_im_i(y_i^2+z_i^2)-\omega_y\sum_im_ix_iy_i-\omega_z\sum_im_ix_iz_i$, and similarly for $J_y,J_z$) shows $\vec J$ is related to $\vec\omega$ by a matrix, not a scalar — the rank-2 **inertia tensor**:
$$\tilde I = \sum_i m_i\begin{pmatrix} y_i^2+z_i^2 & -x_iy_i & -x_iz_i\\ -x_iy_i & x_i^2+z_i^2 & -y_iz_i\\ -x_iz_i & -y_iz_i & x_i^2+y_i^2\end{pmatrix}$$
Diagonal elements $I_{xx},I_{yy},I_{zz}$ are the moments of inertia about each axis; off-diagonal elements are **products of inertia**, quantifying how mass distribution couples rotation about one axis to angular momentum along another.

## The Inertia Tensor and Principal Axes

Since $\tilde I$ is real and symmetric, it's always diagonalisable by an orthogonal change of axes — there exists a choice of axes (the **principal axes**) for which all off-diagonal products of inertia vanish. Rotating about one of these principal axes (say $z$) then recovers the simple scalar relation $J_z=I_{zz}\omega$, with $\vec J\parallel\vec\omega$ again — the diagonal entries there are the **principal moments of inertia**. Finding the principal axes of a rigid body is exactly an eigenvalue problem for $\tilde I$.

## Parallel Axis Theorem

For rotation about an axis a perpendicular distance $d$ from a parallel axis through the centre of mass,
$$I = I_\text{CM} + Md^2$$
Follows from writing each particle's position relative to the new axis as $\vec r=\vec r_\text{CM}+\vec s$ and expanding $I=\sum m_i r_i^2$: the cross term $2\vec r_\text{CM}\cdot\sum m_i\vec s_i$ vanishes identically because $\sum m_i\vec s_i=0$ by definition of the centre of mass, leaving only the $I_\text{CM}$ and $Md^2$ pieces. Consequence: for a fixed total mass and shape, the moment of inertia is always smallest about an axis through the COM — any parallel offset can only increase it.

## Perpendicular Axis Theorem

For a **thin planar lamina** lying in the $xy$-plane, the moment of inertia about the axis perpendicular to the plane equals the sum of the in-plane moments:
$$I_z = I_x + I_y$$
Immediate from the definitions $I_x=\sum m_iy_i^2$, $I_y=\sum m_ix_i^2$, $I_z=\sum m_i(x_i^2+y_i^2)$ for particles confined to $z=0$ — it's purely a statement about how $r^2=x^2+y^2+z^2$ splits when one coordinate is absent, so it only holds for genuinely 2D (planar) bodies, not general 3D ones. Useful for quickly getting a third moment of inertia for free once two are known by symmetry (e.g. a uniform disc: $I_x=I_y$ by symmetry, and $I_z$ from direct integration, gives $I_x=I_y=I_z/2$).

# Related
- [[Noether's Theorem and Angular Momentum]]
- [[Determinants, Eigenvalues and Diagonalisation]]
