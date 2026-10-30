---
old: true
Tags:
  - year-3
Index:
Class:
  - Symmetry and Relativity
Topics:
  - lorentz force
  - lagrangian electromagnetism
  - minimal coupling
  - electromagnetic tensor
  - four-potential
  - covariant maxwell's equations
  - lorentz gauge
---
up: [[Symmetry and Relativity.base]]

# Covariant Electromagnetism: Field Tensor and Lorentz Force

## Covariant Lorentz Force
The familiar 3-vector Lorentz force $\vec f=q(\vec E+\vec u\times\vec B)$ generalises to a single covariant **4-force** equation using the field tensor $F^{\mu\nu}$ and 4-velocity $U_\nu$:
$$\frac{dP^\mu}{d\tau} = qF^{\mu\nu}U_\nu$$
The spatial components ($\mu=1,2,3$) reproduce the ordinary Lorentz force (boosted by $\gamma$ via $d\tau$ vs $dt$); the time component ($\mu=0$) gives $dE/d\tau=q\vec E\cdot\vec u\,\gamma$ — the rate of work done by the electric field on the charge (magnetic forces do no work, consistent with $\vec u\times\vec B$ being perpendicular to $\vec u$). Packaging force and power into one tensor equation is only possible because $F^{\mu\nu}$ already unifies $\vec E$ and $\vec B$ into a single object.

## Lagrangian Formulation
The **relativistic particle Lagrangian** with electromagnetic coupling is
$$L=-mc\sqrt{-g^{\mu\nu}\dot X_\mu\dot X_\nu}+qA^\gamma \dot X_\gamma$$
the free-particle term (giving ordinary relativistic dynamics) plus a coupling to the 4-potential — the same **minimal coupling** structure as the non-relativistic interaction Lagrangian $\mathcal V=q(\phi-\dot{\vec r}\cdot\vec A)$, just made manifestly covariant by combining $\phi,\vec A$ into $A^\mu$. Applying the Euler-Lagrange equations to this $L$ reproduces exactly $m\,d^2x^\alpha/d\tau^2=qF^{\alpha\mu}U_\mu$, confirming consistency with the covariant Lorentz force above.

At the field level, the **Lagrangian density for the free EM field** is
$$\mathcal L=-\tfrac{1}{4\mu_0}F^{\mu\nu}F_{\mu\nu}$$
which evaluates in any given frame to $\tfrac{\epsilon_0}{2}E^2-\tfrac{1}{2\mu_0}B^2$ (the familiar field-energy-density combination, but here manifestly Lorentz-invariant as a scalar built from full tensor contraction). Its Euler-Lagrange equations regenerate Maxwell's equations directly. Applying **Noether's theorem** to this Lagrangian's symmetry under time translation yields the covariant energy-conservation law for the field — the stress-energy tensor, whose components include the field energy density and the Poynting flux, tying this construction directly back to conserved-quantity results from Noether's theorem in mechanics.

## 4-Potential and Gauge Freedom
The **4-potential** $A^\mu=(\phi/c,\vec A)$ packages the scalar and vector potentials into a single 4-vector. As in the 3D formulation, **gauge transformations** $\tilde{\vec A}=\vec A+\nabla\Gamma$, $\tilde\phi=\phi-\partial\Gamma/\partial t$ (equivalently $\tilde A^\mu=A^\mu+\partial^\mu\Gamma$) leave the physical fields $\vec E,\vec B$ unchanged, since they only shift $A^\mu$ by the gradient of a scalar. This freedom can be used to impose the **Lorenz gauge** condition $\partial_\mu A^\mu=0$, which decouples Maxwell's equations (normally coupled first-order equations for $\vec E,\vec B$) into four independent wave equations, one per component:
$$\Box A^\mu=-\mu_0J^\mu$$
with $\Box=\partial^\mu\partial_\mu$ the d'Alembertian — manifestly showing that electromagnetic disturbances propagate at speed $c$, sourced by the 4-current.

## The Field Tensor and Covariant Maxwell's Equations
Defining the **electromagnetic field tensor** as the antisymmetrised derivative of the 4-potential, $F^{\mu\nu}=\partial^\mu A^\nu-\partial^\nu A^\mu$, automatically makes it gauge-invariant (the gradient term $\partial^\mu\partial^\nu\Gamma-\partial^\nu\partial^\mu\Gamma$ cancels), consistent with it representing physical fields directly:
$$F^{\mu\nu} = \begin{pmatrix}0&E_x/c&E_y/c&E_z/c\\-E_x/c&0&B_z&-B_y\\-E_y/c&-B_z&0&B_x\\-E_z/c&B_y&-B_x&0\end{pmatrix}$$
Being antisymmetric, it has only 6 independent components — exactly the 3 components of $\vec E$ plus 3 of $\vec B$, packaged as one geometric object. All four of Maxwell's equations condense into two covariant statements: the inhomogeneous pair (Gauss's law + Ampère-Maxwell) become $\partial_\nu F^{\mu\nu}=\mu_0J^\mu$, while the homogeneous pair (no monopoles + Faraday's law) become the **Bianchi identity** $\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0$, which holds automatically as an identity (not an extra physical constraint) precisely because $F$ is built from $A$ as $F=dA$. Under a Lorentz boost, $F^{\mu\nu}$ transforms as a rank-2 tensor and mixes its electric and magnetic components — the origin of $\vec E$ and $\vec B$ being frame-dependent aspects of one underlying object rather than two separate fields (e.g. a purely electric field in one frame acquires a magnetic component in a boosted frame).

# Related
- [[Noether's Theorem and Angular Momentum]]
- [[Lagrangian Mechanics and Hamilton's Principle]]
- [[Minimal Coupling, Gauge Invariance and the Aharonov-Bohm Effect]]
- [[Four-Vectors, Tensors and the Four-Current]]
- [[Boundary Conditions and Multipole Expansion]]
