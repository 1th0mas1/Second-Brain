---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - no-slip condition
  - free surface
  - boundary layer
  - flow separation
  - transition to turbulence
---
up: [[Fluids.base]]

# Boundary Conditions, Boundary Layers and Separation

## Rigid Boundaries
**Rigid boundary**: fluid cannot cross it, so the normal component of velocity relative to the (possibly moving) wall vanishes, $v_n=0$ — the only condition needed for inviscid flow, and consistent with only imposing one boundary condition since the Euler equation is first-order in space. Viscous fluids satisfy an additional, stronger condition: **no-slip**, $v_\text{tangential}=0$ at the wall too (fluid sticks to the surface) — this is what forces the velocity to rise from zero at the wall up to the outer-flow value, and is the physical origin of boundary layers.

## Interfaces and Free Surfaces
**Interface between two fluids**: two conditions — kinematic continuity of the normal velocity (both fluids move with the interface, so it doesn't tear or overlap), and dynamic pressure balance across it, modified by surface tension via the Young-Laplace relation $\Delta p = \gamma\,(\text{curvature})$ (pressure jump proportional to interface curvature, scaled by surface tension $\gamma$). **Free surface** (fluid–vacuum/atmosphere boundary, e.g. water surface): the same two-part structure — a *kinematic* condition that the surface, once displaced to $z=\eta(x,t)$, moves with the fluid ($D(z-\eta)/Dt=0$, giving $\partial\eta/\partial t = v_z$ at the surface for small displacements), and a *dynamic* condition matching pressure to the atmosphere (plus surface tension curvature term if included). These are exactly the boundary conditions that generate the dispersion relations for surface gravity waves.

## Boundary Layer Thickness
At high Reynolds number, viscous effects are confined to a thin **boundary layer** near a rigid surface where no-slip forces velocity to zero, while the outer flow is well-described by inviscid potential flow with velocity $U(x)$. The rigid boundary is a source of vorticity (via viscous shear); this vorticity spreads vertically by viscous diffusion while being advected downstream at speed $\sim U(x)$. Vorticity generated between the leading edge and station $x$ takes a time $t\sim x/U$ to be carried past $x$, and in that time it diffuses a vertical distance $\delta\sim\sqrt{\nu t}$, giving the boundary-layer thickness
$$\delta(x)\sim\sqrt{\frac{\nu x}{U}}$$
Writing this relative to the plate length $L$ using the global Reynolds number $\text{Re}=UL/\nu$: $\delta/x\sim\sqrt{L/x}/\sqrt{\text{Re}}\ll1$ — confirming the layer really is thin at high $\text{Re}$, which is what justifies treating the outer flow as inviscid and confining viscosity's effects to this sliver.

## Separation
Within the boundary layer, a fluid element is decelerated by wall friction, accelerated by viscous stress transmitted down from faster layers above, and accelerated or decelerated by the pressure gradient imposed by the outer flow. When $dp/dx<0$ (accelerating outer flow), all effects reinforce and the layer stays thin and attached. When $dp/dx>0$ (**adverse pressure gradient**, decelerating outer flow — as on the rear of a curved body), momentum transfer from above weakens with $x$ while the pressure gradient directly decelerates the near-wall fluid; eventually the near-wall velocity is driven to zero at a point $x_s$, and downstream of it the flow reverses direction — the boundary layer **separates** from the surface. Separation dramatically increases drag (by creating a low-pressure wake) and is the mechanism behind stall on aerofoils at high angle of attack. Independently, boundary layers also **transition to turbulence** once the local Reynolds number exceeds a critical value, thickening the layer and changing its separation behaviour.

# Related
- [[Cauchy Momentum Equation and Navier-Stokes]]
- [[Reynolds Number and Turbulence]]
- [[Reynolds Number and Turbulence]]
