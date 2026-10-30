---
old: true
Tags:
  - year-3
Index:
Class:
  - Mechanics
Topics:
  - euler angles
  - symmetric top
  - euler's equations
  - tennis racket theorem
  - rotational stability
  - rigid body dynamics
  - inertia tensor
  - principal axes
---
up: [[Mechanics.base]]

# Rigid Body Dynamics: Euler Angles, Euler's Equations and Principal Axes

## Euler Angles: Parametrising Orientation

Describing a rigid body's orientation needs 3 more coordinates beyond the 3 for the CoM. **Euler angles** $(\phi,\theta,\psi)$ supply these via three successive rotations of the body frame: first by $\phi$ about the fixed $\hat z$, then by $\theta$ about the intermediate **line of nodes** $\hat n$, then by $\psi$ about the new $\hat x_3$. The angular velocity is the vector sum of the three rotation rates, $\vec\Omega=\dot\phi\hat z+\dot\theta\hat n+\dot\psi\hat x_3$; resolving $\hat z$ and $\hat n$ onto the principal axes gives the body-frame components:
$$\Omega_1=\dot\phi\sin\theta\sin\psi+\dot\theta\cos\psi,\quad \Omega_2=\dot\phi\sin\theta\cos\psi-\dot\theta\sin\psi,\quad \Omega_3=\dot\phi\cos\theta+\dot\psi$$
Unlike the principal-axis frame itself, the Euler angles describe *how that frame is oriented relative to a fixed external frame* — the natural coordinates for problems, like a top or gyroscope, where gravity or an external torque picks out a fixed direction in space.

## The Free Symmetric Top: Steady Precession

For a **symmetric top** ($I_1=I_2\ne I_3$) free of torque, the Lagrangian is pure rotational kinetic energy,
$$L=\frac{I_1}{2}(\Omega_1^2+\Omega_2^2)+\frac{I_3}{2}\Omega_3^2 = \frac{I_1}{2}(\dot\phi^2\sin^2\theta+\dot\theta^2)+\frac{I_3}{2}(\dot\phi\cos\theta+\dot\psi)^2$$
This depends on $\Omega_1^2+\Omega_2^2$, which is invariant under rotation about $\hat x_3$, rather than on $\psi$ itself — so both $\phi$ and $\psi$ are cyclic coordinates with conserved conjugate momenta. Angular momentum $\vec M$ is also conserved (rotational symmetry), so align $\vec M=M\hat z$ without loss of generality; then $\partial L/\partial\dot\psi=I_3\Omega_3=M_3=M\cos\theta$ is constant. Substituting this into the Euler-Lagrange equation for $\theta$ shows $\ddot\theta=0$ is a consistent solution, i.e. $\theta$ stays fixed — the top **precesses steadily** with no nutation, at rate
$$\dot\phi = \frac{M}{I_1}$$
This is the simplest case of the general motion (precession + nutation + spin): uniform precession of the symmetry axis about the fixed $\vec M$ at constant tilt angle $\theta$, combined with spin $\dot\psi$ about the body's own axis — the classic gyroscope behaviour.

## Derivation from Angular Momentum Conservation

For a rigid body free of external torque, $\vec M$ is conserved in the inertial frame while the body-frame basis vectors $\hat x_i$ (aligned with the principal axes) rotate along with the body. Writing $\vec M=\sum_i I_i\Omega_i\hat x_i$ and using $\dot{\hat x}_i=\vec\Omega\times\hat x_i$ (the principal axes are carried along by the rotation), differentiating $\vec M$ and setting $\dot{\vec M}=0$ gives, component by component, **Euler's equations**:
$$\dot\Omega_1 = \frac{I_2-I_3}{I_1}\Omega_2\Omega_3,\quad \dot\Omega_2=\frac{I_3-I_1}{I_2}\Omega_3\Omega_1,\quad \dot\Omega_3=\frac{I_1-I_2}{I_3}\Omega_1\Omega_2$$
These are equations of motion for $\vec\Omega$ *as seen in the rotating body frame* — nonlinear, because the coordinate frame itself accelerates along with the body.

## Tennis Racket Theorem: Stability Analysis

Take $I_1>I_2>I_3$ and let the body spin purely about one principal axis, $\Omega_\alpha=\Omega_0$, $\Omega_\beta=\Omega_\gamma=0$, then perturb: $\Omega_\beta=\delta\Omega_\beta(t)$, $\Omega_\gamma=\delta\Omega_\gamma(t)$ to first order. Substituting into Euler's equations and keeping only linear terms gives two coupled first-order equations that decouple into
$$\ddot{\delta\Omega}_\beta=\left[\frac{(I_\gamma-I_\alpha)(I_\alpha-I_\beta)}{I_\beta I_\gamma}\right]\Omega_0^2\,\delta\Omega_\beta$$
(and identically for $\delta\Omega_\gamma$). The sign of the bracket decides everything: for rotation about the **largest** ($\alpha=1$) or **smallest** ($\alpha=3$) axis the bracket is negative, giving oscillatory, bounded (stable) perturbations; for the **intermediate** axis ($\alpha=2$) it's positive, giving exponentially growing perturbations — instability. This is the **tennis racket theorem**: spin a book or racket about its middle axis and any tiny initial wobble grows, flipping the object end-over-end mid-throw, while spins about the long or short axis stay clean. Since the result depends only on the ordering of the three principal moments, it holds for *any* rigid body.

## Kinetic Energy and the Inertia Tensor

Splitting a rigid body's position vectors into CM position plus body-frame offset $\vec r_i=\vec r_\text{CM}+\vec s_i$ (with $\dot{\vec s}_i=\vec\Omega\times\vec s_i$) and expanding the total kinetic energy, the cross term vanishes since $\sum_i m_i\vec s_i=0$ by definition of the CM, leaving
$$T=\frac m2\dot{\vec r}_\text{CM}\cdot\dot{\vec r}_\text{CM}+\frac12 I_{\alpha\beta}\Omega_\alpha\Omega_\beta,\qquad I_{\alpha\beta}=\sum_i m_i\left(\delta_{\alpha\beta}\vec s_i\cdot\vec s_i-(s_i)_\alpha(s_i)_\beta\right)$$
— translation plus rotation, with the rotational part governed entirely by the **inertia tensor** $I_{\alpha\beta}$ (continuous limit: $I_{\alpha\beta}=\iiint\rho(\vec r)(\delta_{\alpha\beta}r^2-r_\alpha r_\beta)\,dV$). This gives the general rigid-body Lagrangian $L=\frac m2\dot{\vec r}_\text{CM}^2+\frac12I_{\alpha\beta}\Omega_\alpha\Omega_\beta-V$.

## Principal Axes and the Yo-Yo Example

For a rigid body, angular momentum about the COM is $M_\alpha=\partial L/\partial\Omega_\alpha=I_{\alpha\beta}\Omega_\beta$ — in general **not parallel** to the angular velocity $\vec\Omega$, since the inertia tensor mixes components together. $\vec M\parallel\vec\Omega$ only when $\vec\Omega$ aligns with an eigenvector of $I$ — a **principal axis**, with eigenvalue the **principal moment of inertia**. Since $I$ is real symmetric, its three eigenvectors are automatically orthogonal; aligning body-frame axes with them makes $I$ diagonal and simplifies the Lagrangian to
$$L = \frac m2\dot{\vec r}_\text{CM}^2 + \frac12(I_1\Omega_1^2+I_2\Omega_2^2+I_3\Omega_3^2) - V$$
Choosing principal-axis coordinates is always the natural simplification: for a yo-yo (spool of mass $M$, radius $R$, on an axle of radius $a$) the only moment of inertia needed is about the spool's symmetry axis, $I_1=\frac12MR^2$, giving $L=\frac M2(1+R^2/2a^2)\dot z^2-Mgz$ and descent acceleration $\ddot z=-g/(1+R^2/2a^2)$ — slower than free fall since some of the released potential energy goes into spin.

# Related
- [[Hamiltonian Mechanics and Conjugate Momenta]]
- [[Moment of Inertia and Axis Theorems]]
- [[Special Matrix Types and Index Notation]]
