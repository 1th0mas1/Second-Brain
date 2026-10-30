---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - cauchy momentum equation
  - stress tensor
  - newtonian fluid
  - navier-stokes equation
  - euler equation
---
up: [[Fluids.base]]

# Cauchy Momentum Equation and Navier-Stokes

## The Stress Tensor
Newton's second law applied to a fluid element, in terms of surface forces per unit volume, gives the **Cauchy momentum equation**:
$$\rho \frac{D\vec v}{Dt} = \nabla\cdot\boldsymbol\sigma + \rho\vec g$$
where $\sigma_{ij}$ is the **stress tensor**: $\sigma_{ij}n_j$ is the force per unit area exerted across a surface element with normal $\hat n$. It decomposes into an isotropic part, $-p\delta_{ij}$ (pressure — acts equally in all directions, present even in a fluid at rest), plus a **viscous** part that only appears when the fluid is deforming.

## Newtonian Constitutive Relation
The viscous stress must depend on how the fluid is being deformed, i.e. on the rate-of-strain tensor $e_{ij}=\tfrac12(\partial_iv_j+\partial_jv_i)$ (the symmetric part of the velocity gradient), not on the antisymmetric rotation part — rigid rotation alone shouldn't generate internal friction. Assuming the simplest possible (linear, isotropic) dependence defines a **Newtonian fluid**:
$$\sigma_{ij}^\text{visc} = 2\mu e_{ij} + \lambda\delta_{ij}(\nabla\cdot\vec v)$$
with dynamic viscosity $\mu$ and a second coefficient $\lambda$ multiplying the isotropic dilation $\nabla\cdot\vec v$ (which vanishes for incompressible flow, leaving just $2\mu e_{ij}$). As a check on the relation: pure solid-body rotation has $e_{ij}=0$ (elements spin rigidly but don't deform), so it produces zero viscous stress, as it must — spinning a rigid body doesn't dissipate energy through internal friction. Substituting this constitutive relation into the Cauchy equation, for constant $\mu$, is exactly what produces the viscous term $\mu\nabla^2\vec v$ in the Navier-Stokes equation.

## The Equation
Substituting the Newtonian constitutive relation for the stress tensor into the Cauchy momentum equation, and specialising to constant density and viscosity, gives the Navier-Stokes equation for a Newtonian, incompressible fluid:
$$\rho\left(\frac{\partial\vec v}{\partial t} + (\vec v\cdot\nabla)\vec v\right) = -\nabla p + \rho\vec g + \mu\nabla^2\vec v$$
Left side is mass times acceleration (via the material derivative); right side is the sum of forces per unit volume — pressure gradient, gravity, and viscous diffusion of momentum ($\mu\nabla^2\vec v$, the same operator as in the heat/diffusion equation, transporting momentum from fast-moving to slow-moving fluid). Together with $\nabla\cdot\vec v=0$ (incompressibility) and boundary conditions, this closes the system for $\vec v$ and $p$. The **nonlinear advection term** $(\vec v\cdot\nabla)\vec v$ is the single source of essentially all fluid complexity — instabilities, turbulence, chaos — since it couples different length and time scales together in a way the linear terms cannot.

## The Euler Limit and Reynolds Number
The relative size of the advective and viscous terms is measured by the Reynolds number $\text{Re}=UL/\nu$ (from non-dimensionalising the equation with characteristic velocity/length scales $U,L$). At high $\text{Re}$, the viscous term is negligible almost everywhere and the equation reduces to the **Euler equation**:
$$\rho\left(\frac{\partial\vec v}{\partial t}+(\vec v\cdot\nabla)\vec v\right) = -\nabla p+\rho\vec g$$
valid away from boundaries — but no matter how large $\text{Re}$ is, viscosity can never be fully dropped near a rigid wall, since the Euler equation (being lower-order) cannot enforce the no-slip condition; this mismatch is exactly what forces the appearance of a thin viscous boundary layer.

# Related
- [[Vorticity: Rate of Strain and the Vorticity Equation]]
- [[Reynolds Number and Turbulence]]
- [[Bernoulli's Theorem and the Kutta-Joukowski Theorem]]
