---
old: true
Tags:
  - year-3
Index:
Class:
  - Fluids
Topics:
  - reynolds number
  - stokes drag
  - dynamic similarity
  - reynolds stress
  - kolmogorov scaling
  - energy cascade
---
up: [[Fluids.base]]

# Reynolds Number and Turbulence

## Definition
Non-dimensionalise the Navier-Stokes equation using characteristic velocity $U$ and length $L$ (so $\vec v\to U\vec v^*$, $\vec r\to L\vec r^*$, $t\to (L/U)t^*$): the advective term scales as $U^2/L$ and the viscous term as $\nu U/L^2$, so their ratio is a single dimensionless group, the **Reynolds number**:
$$Re = \frac{UL}{\nu}$$
the ratio of inertial to viscous forces in the flow. Two flows with the same geometry and the same $Re$ obey identical non-dimensionalised equations, so they are **dynamically similar** — physically equivalent regardless of the absolute scale (size, speed, or fluid used). This is the basis of scale-model testing (e.g. wind tunnels): a small model reproduces full-scale behaviour provided $Re$ (and any other relevant dimensionless groups, like Froude or Mach number) is matched.

## Low and High Re Regimes
**Low Re** ($Re\ll1$, "Stokes flow"): viscosity dominates, the nonlinear advective term is negligible, and the equation becomes linear and time-reversible (run the flow backward and it retraces itself — the regime of microorganism swimming and slow, sticky flows). The classic result here is **Stokes' drag** on a sphere of radius $a$ moving at speed $U$: $F=6\pi\mu U a$, linear in velocity (unlike the quadratic drag familiar from high-speed aerodynamics). **High Re** ($Re\gg1$): inertia dominates almost everywhere, and the flow approaches inviscid Euler behaviour — except within thin boundary layers near rigid surfaces, where the velocity gradients are large enough that the viscous term remains comparable to inertia no matter how small $\nu$ is.

## Reynolds Stress
Decompose velocity into mean + fluctuation, $\vec v=\vec V+\vec v'$ with $\langle\vec v'\rangle=0$. Substituting into Navier-Stokes and averaging, the nonlinear advection term generates an extra contribution beyond viscous stress: the **Reynolds stress** $\tau_{ij}=-\rho\langle v_i'v_j'\rangle$, representing momentum transport by correlated turbulent fluctuations — it enters the mean-flow equation exactly like an additional stress, and is typically orders of magnitude larger than the molecular viscous stress, acting as a much larger effective "eddy viscosity."

## Kolmogorov's Energy Cascade
Model turbulence as a superposition of eddies of different sizes. Energy is fed in at the largest scale $l$ (with velocity $v_l$) at a rate per unit mass $\epsilon\sim v_l^3/l$ (dimensional analysis: $\epsilon$ has units $\text{m}^2\text{s}^{-3}$). In the **inertial range** ($l_0\ll\lambda\ll l$), this same $\epsilon$ is passed down unchanged from eddies of size $l$ to progressively smaller eddies of size $\lambda$, so $\epsilon\sim v_\lambda^3/\lambda$ at every scale — energy cascades without loss. It is finally dissipated by viscosity once eddies shrink to the **Kolmogorov scale** $l_0$, where $\epsilon\sim v_0^2/l_0^2$ (viscous dissipation rate); combining these relations (setting $\lambda=l_0$, $v_\lambda=v_0$) gives the Kolmogorov length and velocity
$$l_0\sim\nu^{3/4}\epsilon^{-1/4},\qquad v_0\sim(\nu\epsilon)^{1/4}$$
Since $\epsilon$ is the only relevant parameter in the inertial range (viscosity hasn't entered yet), dimensional analysis on the kinetic energy per unit mass of an eddy, $v_\lambda^2/2\sim(\epsilon\lambda)^{2/3}$, converts to a spectral energy density via $E(k)\,dk\sim v_\lambda^2$, $k\sim1/\lambda$, giving the **Kolmogorov spectrum**:
$$E(k) \sim \epsilon^{2/3}k^{-5/3}$$
one of the most famous results in classical physics — a universal power law, independent of how the large-scale forcing is generated, that has been verified across an enormous range of turbulent flows.

# Related
- [[Cauchy Momentum Equation and Navier-Stokes]]
- [[Boundary Conditions, Boundary Layers and Separation]]
- [[Kelvin-Helmholtz Instability and Rayleigh-Benard Convection]]
- [[Diffusion: Random Walks and the Diffusion Equation]]
