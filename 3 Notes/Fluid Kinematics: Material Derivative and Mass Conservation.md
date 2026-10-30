---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - continuity equation
  - incompressibility
  - material derivative
  - eulerian lagrangian
  - streamlines
---
up: [[Fluids.base]]

# Fluid Kinematics: Material Derivative and Mass Conservation

## The Continuity Equation
Consider a fixed control volume $V$ with boundary $\partial V$: the rate of change of mass inside must equal minus the net mass flux leaving through the surface, $\frac{d}{dt}\int_V\rho\,dV = -\oint_{\partial V}\rho\vec v\cdot\hat n\,dS$. Applying the divergence theorem to the surface integral and shrinking $V$ to a point gives the local (Eulerian) statement, the **continuity equation**:
$$\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\vec v) = 0$$
Expanding $\nabla\cdot(\rho\vec v)=\rho\nabla\cdot\vec v+\vec v\cdot\nabla\rho$ and rearranging gives the equivalent Lagrangian (material-derivative) form:
$$\frac{D\rho}{Dt} = -\rho\,\nabla\cdot\vec v$$
— the density of a fluid element changes at a rate set by the local divergence of the velocity field: $\nabla\cdot\vec v>0$ (flow spreading out) dilutes the element, $\nabla\cdot\vec v<0$ (converging flow) compresses it.

## Incompressibility
**Incompressible** flow is defined by $D\rho/Dt=0$ — each fluid element keeps constant density as it moves (density can still vary in space, e.g. stratified fluids, just not for any individual parcel). Substituting into the continuity equation immediately gives
$$\nabla\cdot\vec v=0$$
a purely kinematic constraint on the velocity field, independent of the dynamics (forces) — it must hold at every instant regardless of pressure or viscosity. This is what allows the pressure in incompressible Navier-Stokes to act as a Lagrange multiplier enforcing the constraint, and it is what makes stream functions/velocity potentials well-defined (divergence-free fields can be written as a curl or admit a harmonic potential).

## Eulerian vs Lagrangian Descriptions
**Eulerian**: describe a field quantity $Q(\vec r,t)$ at fixed points in space, watching fluid flow past — the natural language for continuum field equations. **Lagrangian**: follow individual fluid elements (parcels), tracking a quantity as a function of a label (e.g. initial position $\vec r_0$) and time, $\vec V(\vec r_0,t)$. The two descriptions agree at a parcel's instantaneous location — $\vec V(\vec r_0,t)=\vec v(\vec r(t),t)$ — but parametrise the same physics differently (like clocking a duck's own speed vs reading a speedometer fixed on the riverbank).

## The Material Derivative
For a fluid element carried by the flow, a small time step $\delta t$ moves it from $\vec r$ to $\vec r+\vec v\delta t$, so an Eulerian field changes as
$$Q(\vec r+\vec v\delta t,\,t+\delta t)\approx Q(\vec r,t)+\delta t\left(\frac{\partial Q}{\partial t}+\vec v\cdot\nabla Q\right)$$
Dividing by $\delta t$ gives the **material (substantial) derivative** — the Lagrangian rate of change written purely in terms of Eulerian fields:
$$\frac{D}{Dt} = \frac{\partial}{\partial t} + \vec v\cdot\nabla$$
splitting into a local rate at fixed position and a convective rate from being transported along a gradient. Applied to velocity itself, fluid **acceleration** is $\frac{D\vec v}{Dt} = \frac{\partial\vec v}{\partial t}+(\vec v\cdot\nabla)\vec v$ — even in **steady flow** ($\partial\vec v/\partial t=0$ everywhere), fluid elements still accelerate by convecting into regions of different velocity (e.g. centripetal acceleration in solid-body rotation, or acceleration through a nozzle of fixed shape). Along a streamline this convective term reduces to $\vec v\cdot\nabla Q = |v|\,\partial Q/\partial s$: speed times the rate of change of $Q$ with arc length along the streamline.

# Related
- [[Potential Flow: Stream Function and Flow Past a Cylinder]]
- [[Vorticity: Rate of Strain and the Vorticity Equation]]
