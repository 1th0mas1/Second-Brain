---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - vorticity
  - rate of strain tensor
  - irrotational flow
  - vorticity equation
  - kelvin's circulation theorem
  - vortex stretching
  - baroclinic torque
---
up: [[Fluids.base]]

# Vorticity: Rate of Strain and the Vorticity Equation

## Decomposing the Velocity Gradient
The velocity gradient tensor $D_{ij}=\partial v_i/\partial x_j$ fully describes how a small fluid element's shape changes to first order, and it splits uniquely into three physically distinct pieces: an isotropic part $\tfrac13\delta_{ij}(\nabla\cdot\vec v)$ (uniform expansion/contraction — zero for incompressible flow), a symmetric traceless part (pure shear/straining, deforming the element into an ellipsoid without changing its volume or orientation on average), and an antisymmetric part $\omega_{ij}=\tfrac12(\partial_jv_i-\partial_iv_j)$ (pure rotation, no deformation at all). The symmetric pieces together form the rate-of-strain tensor $e_{ij}$ that feeds into the Newtonian viscous stress; the antisymmetric piece is directly related to vorticity.

## Vorticity
**Vorticity** $\vec\omega=\nabla\times\vec v$ is the (doubled) local angular velocity of a fluid element: the antisymmetric tensor $\omega_{ij}$ is equivalent to $\vec\omega$ via $\omega_{ij}=-\tfrac12\epsilon_{ijk}\omega_k$, and a fluid element instantaneously rotates rigidly at angular velocity $\vec\omega/2$ (in addition to translating and straining). **Irrotational** flow has $\vec\omega=0$ everywhere: elements translate and deform but never spin — this is the condition that permits a velocity potential $\phi$ (since $\nabla\times\nabla\phi\equiv0$). Otherwise the flow is **rotational**; vorticity is generated at rigid boundaries (via the no-slip condition and viscous shear) and is the key diagnostic tracked in the vorticity equation and Kelvin's circulation theorem.

## The Vorticity Equation
Taking the curl of the incompressible Navier-Stokes equation (with a conservative body force, so $\nabla\times\vec g=0$) eliminates the pressure gradient entirely (since $\nabla\times\nabla p=0$), leaving an equation purely for vorticity:
$$\frac{D\vec\omega}{Dt} = (\vec\omega\cdot\nabla)\vec v + \nu\nabla^2\vec\omega$$
The term $(\vec\omega\cdot\nabla)\vec v$, absent in 2D flow, produces **vortex stretching/tilting**: if the velocity field stretches a fluid element along the direction it's already spinning about, angular momentum conservation (like a figure skater pulling in their arms) spins it up further, amplifying vorticity — the key mechanism that makes 3D turbulence fundamentally different from (and richer than) 2D turbulence. The remaining term $\nu\nabla^2\vec\omega$ is ordinary viscous diffusion of vorticity, identical in form to heat or momentum diffusion.

For general compressible flow, an extra **baroclinic torque** term $\nabla\rho\times\nabla p/\rho^2$ appears: whenever density and pressure gradients aren't parallel (baroclinic, as opposed to barotropic where $p=p(\rho)$), this term generates vorticity from an initially irrotational flow — the mechanism behind sea-breeze circulations and vorticity generation at weather fronts. Non-conservative forces such as the Coriolis force in a rotating frame are likewise vorticity sources, underlying the large-scale rotation seen in hurricanes and other geophysical vortices.

## Kelvin's Circulation Theorem
Specialise to inviscid ($\nu=0$), incompressible flow with conservative body forces: the vorticity equation reduces to just $D\vec\omega/Dt=(\vec\omega\cdot\nabla)\vec v$, with no source term. If $\vec\omega=0$ initially everywhere, it stays exactly zero for all time — vortex stretching can *amplify* existing vorticity, but nothing in this equation can *create* vorticity from nothing. More generally, integrating over a surface bounded by a material loop (one that moves with the fluid) shows that the circulation $\Gamma=\oint\vec v\cdot d\vec l$ around that loop is exactly conserved as the loop is advected and deformed by the flow. This is the fluid-dynamics ancestor of potential vorticity conservation in geophysical flows, and is exactly the theorem invoked to explain why a starting vortex shed from an aerofoil must be balanced by an equal and opposite bound circulation around the aerofoil itself.

# Related
- [[Fluid Kinematics: Material Derivative and Mass Conservation]]
- [[Potential Flow: Stream Function and Flow Past a Cylinder]]
- [[Cauchy Momentum Equation and Navier-Stokes]]
