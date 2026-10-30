---
old: true
Tags:
  - year-3
Index:
Class:
  - Mechanics
Topics:
  - lorentz force lagrangian
  - minimal coupling
  - gauge invariance
  - lagrange multipliers
  - holonomic constraints
  - constrained variational calculus
---
up: [[Mechanics.base]]

# Charged Particle and Constrained Lagrangian Mechanics

## Lagrangian and the Lorentz Force

Writing the fields in terms of potentials, $\vec E=-\nabla\phi-\partial\vec A/\partial t$ and $\vec B=\nabla\times\vec A$, makes the Lorentz force $\vec F=q(\vec E+\dot{\vec r}\times\vec B)$ manifestly velocity-dependent — which rules out any ordinary scalar potential, since $-\nabla V$ can never depend on $\dot{\vec r}$. The trial Lagrangian $L=\frac m2\dot{\vec r}^2+q(\dot{\vec r}\cdot\vec A-\phi)$ fixes this with a velocity-dependent term $q\dot{\vec r}\cdot\vec A$. Its Euler-Lagrange equation is
$$\frac{d}{dt}(m\dot{\vec r}+q\vec A) = -q\nabla(\phi-\dot{\vec r}\cdot\vec A)$$
Using $d\vec A/dt=\partial\vec A/\partial t+(\dot{\vec r}\cdot\nabla)\vec A$ (the total rate of change of $\vec A$ following the moving particle) and the vector identity $\nabla(\dot{\vec r}\cdot\vec A)-(\dot{\vec r}\cdot\nabla)\vec A=\dot{\vec r}\times(\nabla\times\vec A)$, this collapses exactly to $m\ddot{\vec r}=q(\vec E+\dot{\vec r}\times\vec B)$ — the Lorentz force, confirming the trial $L$ is correct.

## Gauge Invariance, Momentum, and Minimal Coupling

Under a **gauge transformation** ($\phi\to\phi-\partial f/\partial t$, $\vec A\to\vec A+\nabla f$), $\vec E$ and $\vec B$ are unchanged, but $L\to L+q(\partial f/\partial t+\dot{\vec r}\cdot\nabla f)=L+\frac{d}{dt}(qf)$ — a total time derivative, so the equations of motion are gauge-invariant even though $L$ itself isn't (adding a total derivative to $L$ never changes the dynamics). Note this gauge symmetry doesn't produce a Noether-conserved quantity here, since it's a symmetry of the background field rather than of the particle's own dynamics.

**Conjugate momentum**: $\vec p=\partial L/\partial\dot{\vec r}=m\dot{\vec r}+q\vec A$ — importantly *not* equal to the kinetic momentum $m\dot{\vec r}$, a distinction that becomes essential in quantum mechanics. **Hamiltonian**: substituting $\dot{\vec r}=(\vec p-q\vec A)/m$ into $H=\vec p\cdot\dot{\vec r}-L$ gives
$$H=\frac{|\vec p-q\vec A|^2}{2m}+q\phi$$
the origin of **minimal coupling** $\vec p\to\vec p-q\vec A$ used to introduce EM interactions into the Schrödinger equation.

## Constraints and the Modified Functional

Some problems are easier posed with more coordinates than degrees of freedom, related by constraints. Constraints eliminable from the Lagrangian (reducing to fewer independent coordinates) are **holonomic**; those that can't be are **non-holonomic**. Both classes yield to **Lagrange multipliers**: to minimise a functional $F[\vec r]=\int f\,dt$ subject to $n$ constraints $\int c_i(\vec r,\dot{\vec r})\,dt=0$, the $\delta\vec r$ can no longer be varied independently, since they're tied together by the constraints. Introducing one unknown multiplier per constraint restores independence — instead minimise
$$F^* = \int\left(f + \sum_i\lambda_ic_i\right)dt$$
The resulting Euler-Lagrange equations, solved together with the constraint equations, fix both the trajectory and the $\lambda_i$ — which physically represent the **constraint forces** (tension, normal force, friction), invisible in the unconstrained Lagrangian since they do no work along allowed motions and so drop out once a constraint is used to eliminate a coordinate outright. For an *instantaneous* constraint $C(\vec r,t)=0$ rather than one written as a time integral, the same trick works with a time-dependent multiplier: $L^*=L+\lambda(t)C$.

## Worked Examples

The **hanging rope** (catenary) minimises potential energy $\int z\sqrt{1+z'^2}\,dx$ subject to fixed length $l$; a multiplier plus a Noether-type first integral gives the shape $z=\lambda+a\cosh[(x-b)/a]$, with $a,b$ fixed by the endpoints and $\lambda$ by the length constraint.

For a **cylinder rolling without slipping** down an incline, $L=\frac m2\dot x^2+\frac{mR^2}{4}\dot\theta^2+mgx\sin\alpha$ with rolling constraint $C=x-R\theta=0$. Using $L^*=L+\lambda(t)C$, the Euler-Lagrange equations $m\ddot x-mg\sin\alpha-\lambda=0$ and $\frac{mR^2}{2}\ddot\theta+\lambda R=0$ combine with $\ddot x=R\ddot\theta$ to eliminate $\lambda=-m\ddot x/2$ (the friction force enforcing rolling) and give $\ddot x=\frac23g\sin\alpha$ — slower than frictionless sliding ($g\sin\alpha$) since some energy goes into rotation.

# Related
- [[Minimal Coupling, Gauge Invariance and the Aharonov-Bohm Effect]]
- [[Covariant Electromagnetism: Field Tensor and Lorentz Force]]
- [[Canonical Coordinates and Poisson Brackets]]
- [[Lagrangian Mechanics and Hamilton's Principle]]
- [[Lagrangian Mechanics and Hamilton's Principle]]
