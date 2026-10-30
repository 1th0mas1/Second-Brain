---
old: true
Tags:
  - year-3
Index:
Class:
  - Symmetry and Relativity
Topics:
  - tensors
  - lorentz transformation
  - covariant formulation
  - four-current
  - charge invariance
  - continuity equation
---
up: [[Symmetry and Relativity.base]]

# Four-Vectors, Tensors and the Four-Current

## Tensors as Generalised 4-Vectors
A 4-vector transforms under a Lorentz transformation via a single factor of $\Lambda$: $A'^\mu=\Lambda^\mu{}_\nu A^\nu$. A **tensor** of type $(m,n)$ generalises this to an object with $m$ upper and $n$ lower indices, each transforming with its own factor of $\Lambda$ (or its inverse, for lower indices):
$$T'^{\mu_1\dots\mu_m}_{\nu_1\dots\nu_n}=\Lambda^{\mu_1}{}_{\kappa_1}\cdots\Lambda_{\nu_n}{}^{\lambda_n}T^{\kappa_1\dots\kappa_m}_{\lambda_1\dots\lambda_n}$$
The **rank** is $m+n$: a scalar is rank 0 (transforms trivially, i.e. is invariant), a 4-vector is rank 1, and objects like the field tensor $F^{\mu\nu}$ are rank 2. Indices are raised and lowered with the metric $g_{\mu\nu}$ exactly as for 4-vectors ($T_\mu=g_{\mu\nu}T^\nu$), since the metric is itself a rank-2 tensor.

## Building and Classifying Tensors
New tensors are constructed from old ones in a few standard ways: the **outer product** of two 4-vectors, $A^\mu B^\nu$, gives a rank-2 tensor with no indices summed (unlike the scalar/dot product $A^\mu B_\mu$, which *is* a contraction); **addition** requires two tensors of matching type; **contraction** — summing one upper index against one lower index, $T^{\mu\nu}{}_\nu$ — lowers the rank by 2, and contracting *every* index down to none leaves a Lorentz-**invariant scalar** (e.g. $F^{\mu\nu}F_{\mu\nu}$, used in the EM field Lagrangian). Tensors are further classified by their index symmetry: **symmetric** if $T^{\mu\nu}=T^{\nu\mu}$, **antisymmetric** if $A^{\mu\nu}=-A^{\nu\mu}$ (which forces zero diagonal entries, $A^{\mu\mu}=0$, as for the field tensor).

The payoff of this formalism: writing a physical law as a tensor equation, e.g. $F^\mu=mA^\mu$ (both sides rank 1), automatically guarantees that if it holds in one inertial frame it holds in *every* inertial frame — since both sides transform identically under a boost. This is the essence of **covariant formulation**, and is exactly why Maxwell's equations, the Lorentz force law, and charge conservation are all rewritten in tensor form in relativistic electromagnetism.

## Charge Invariance Motivates the 4-Current
Electric charge $Q$ is a Lorentz **invariant**: counting the (integer) number of elementary charges in a region can't depend on the observer's frame. Charge *density* $\rho$, however, is *not* invariant — a volume containing a fixed charge $Q$ shrinks by length contraction along the boost direction in a frame where it moves, so the same $Q$ is packed into a smaller volume: $\rho=\gamma_u\rho_0$, where $\rho_0$ is the density measured in the frame where the charge distribution is at rest. This is directly analogous to how proper time and rest mass are invariant while their frame-dependent counterparts (time, momentum) are not.

Since $\rho_0$ is a genuine (frame-independent) scalar, multiplying it by the 4-velocity $U^\mu=\gamma_u(c,\vec u)$ produces a proper 4-vector — the **four-current**:
$$J^\mu = \rho_0 U^\mu = (\gamma_u\rho_0 c,\,\gamma_u\rho_0\vec u) = (\rho c,\,\vec j)$$
transforming under a Lorentz boost exactly like any other 4-vector, $J'^\mu=\Lambda^\mu{}_\nu J^\nu$ — this is precisely how the frame-dependent charge density $\rho=\gamma_u\rho_0$ and current density $\vec j=\gamma_u\rho_0\vec u$ mix into each other under a boost, just as $\vec E,\vec B$ mix via $F^{\mu\nu}$.

## Covariant Charge Conservation
The ordinary (frame-dependent) statement of charge conservation is the continuity equation $\partial\rho/\partial t+\nabla\cdot\vec j=0$. Written in terms of $J^\mu$, this becomes the single, manifestly frame-independent statement
$$\partial_\mu J^\mu = 0$$
— since this is a scalar equation (a full contraction, zero free indices), if it holds in one inertial frame it automatically holds in every frame, guaranteeing charge conservation is respected consistently by all observers. This is the same "write it as a tensor equation" trick that makes physical laws manifestly covariant throughout relativistic electromagnetism.

# Related
- [[Lorentz Transformations, Time Dilation and Length Contraction]]
- [[Relativistic Kinematics: Velocity Addition, Doppler Effect and Four-Vectors]]
- [[Covariant Electromagnetism: Field Tensor and Lorentz Force]]
- [[Maxwell's Equations: Capacitance, Displacement Current and EM Waves]]
