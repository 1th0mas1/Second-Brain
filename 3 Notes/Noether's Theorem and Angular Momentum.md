---
old: true
Tags:
  - year-1
Index:
Class:
  - Mechanics
Topics:
  - noether's theorem
  - continuous symmetry
  - conservation law
  - angular momentum
  - torque
---
up: [[Mechanics.base]]

# Noether's Theorem and Angular Momentum

## Statement and Derivation

**"Every continuous symmetry of the Lagrangian implies a conservation law."** A continuous symmetry is a one-parameter family of transformations $q_k(t)\to Q_k(s,t)=q_k+\frac{dQ_k}{ds}s$ under which $L$ is literally unchanged: $L(Q,\dot Q,t)=L(q,\dot q,t)$ for every $s$, not just to leading order. Since $L$ doesn't depend on $s$ at all, $\frac{d}{ds}L(Q(s,t),\dot Q(s,t),t)=0$. Expanding via the chain rule and using the Euler-Lagrange equation to rewrite $\partial L/\partial Q_k$ as $\dot p_k$, this total derivative collapses to a perfect time-derivative:
$$\frac{dL}{ds} = \frac{d}{dt}\left[\sum_k p_k\frac{dQ_k}{ds}\right] = 0$$
so the bracketed quantity, evaluated at $s=0$ (where $Q_k=q_k$), is conserved:
$$I = \sum_k p_k \left.\frac{dQ_k}{ds}\right|_{s=0}$$
If the symmetry has $M$ independent parameters $s_1,\dots,s_M$, the same argument gives one conserved quantity $I_j$ per parameter — Noether's theorem hands you exactly as many conservation laws as there are independent continuous symmetries.

## Standard Examples

Three symmetries recover the classic conservation laws: invariance under **spatial translation** $\vec r\to\vec r+\delta\vec r$ gives conserved linear momentum; invariance under **rotation** $\vec r\to\vec r+\delta\theta\,\hat n\times\vec r$ gives conserved angular momentum along $\hat n$; invariance under **time translation** gives conserved energy (this last case needs a slightly different argument since $t$ itself is transformed, not just the $q_k$, but the conclusion — $H=$ const — is the same one reached via the Hamiltonian). This is the deepest organising principle connecting symmetry to conservation laws in physics, and it recurs, in more abstract form, for internal and gauge symmetries in quantum field theory (e.g. $U(1)$ phase symmetry ↔ conserved electric charge).

## Definition and the Torque Relation

Angular momentum of a point particle about an origin is $\vec J=\vec r\times\vec p$. Differentiating using the product rule for cross products, $\dot{\vec J}=\vec r\times\dot{\vec p}+\dot{\vec r}\times\vec p$ — the second term vanishes since $\vec v\parallel\vec p$, leaving
$$\vec\tau \equiv \vec r\times\vec F = \frac{d\vec J}{dt}$$
so torque is to angular momentum what force is to linear momentum. For several forces, torques add: $\vec\tau=\sum_i\vec r_i\times\vec F_i$. For a point mass in circular motion, expanding $\vec J=\vec r\times(m\vec\omega\times\vec r)$ with the BAC-CAB identity and using $\vec r\perp\vec\omega$ gives $\vec J=mr^2\vec\omega\equiv I\vec\omega$ with $I=mr^2$ the (scalar, for planar motion) moment of inertia.

## Linear-Angular Correspondence and Power

The three laws of rotational motion mirror Newton's directly: **no torque → constant $\vec\omega$** (Newton I); **$\vec\tau=I\vec\alpha$**, torque equals moment of inertia times angular acceleration (Newton II); and **action–reaction torques are equal and opposite** (Newton III). Work done by a torque follows from $dW=\vec F\cdot d\vec s$ with $d\vec s=d(\vec\theta\times\vec r)$, which reduces (for fixed radius) to $dW=\vec\tau\cdot d\vec\theta$; dividing by $dt$ gives the power delivered by a torque:
$$P=\vec\tau\cdot\vec\omega$$
the rotational analogue of $P=\vec F\cdot\vec v$.

# Related
- [[Lagrangian Mechanics and Hamilton's Principle]]
- [[Hamiltonian Mechanics and Conjugate Momenta]]
- [[Non-Inertial Frames, Charged Particle Motion and Vector Differentiation]]
- [[Central Forces and Kepler's Laws]]
- [[Moment of Inertia and Axis Theorems]]
