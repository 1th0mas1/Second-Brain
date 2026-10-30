---
old: true
Tags:
  - year-1
Index:
Class:
  - Mechanics
Topics:
  - non-inertial frames
  - fictitious force
  - rotating frames
  - larmor radius
  - cyclotron motion
  - lorentz force
  - polar coordinates kinematics
  - angular velocity
  - angular acceleration
---
up: [[Mechanics.base]]

# Non-Inertial Frames, Charged Particle Motion and Vector Differentiation

## The Fictitious Force

Newton's laws only hold directly in inertial (non-accelerating) frames. If a frame moves with velocity $\vec w$ relative to an inertial one, a particle's true acceleration and its acceleration as measured in the moving frame differ by $\dot{\vec w}$, the frame's own acceleration. Rearranging Newton's second law so it still reads $m\vec a_\text{rel}=\vec F+\vec F_\text{fict}$ in the moving frame requires the extra term
$$\vec F_\text{fict} = -m\frac{d\vec w}{dt}$$
This **fictitious force** isn't a real interaction — it has no physical source and can't be transformed away by choice of coordinates, only by returning to an inertial frame — but it must be included for $F=ma$ to hold as measured within the accelerating frame.

## Rotating Frames

For a frame rotating with angular velocity $\vec\Omega$, the general fictitious force splits into recognisable pieces: the **centrifugal force** $-m\vec\Omega\times(\vec\Omega\times\vec r)$, directed outward and responsible for the effective reduction in weight at the equator, and the **Coriolis force** $-2m\vec\Omega\times\vec v_\text{rel}$, which acts on anything moving *within* the rotating frame and vanishes for objects at rest in it. This is the starting point for motion in a frame rotating with the Earth — the foundation of the Coriolis force that deflects winds and ocean currents, used throughout geophysical fluid dynamics.

## Larmor Motion in a Pure Magnetic Field

For $\vec B=B_z\hat z$ and velocity confined to the $xy$-plane, $\vec F=q\vec v\times\vec B$ is always perpendicular to $\vec v$, with magnitude $qvB$. Treating it as a centripetal force, $mv^2/R=qvB$, gives
$$\text{Larmor radius } R=\frac{mv}{qB},\quad \text{Larmor frequency } \omega=\frac{qB}{m}$$
Solving Newton's second law directly ($m\ddot x=qB_z\dot y$, $m\ddot y=-qB_z\dot x$, a coupled pair solved by integrating once and substituting back) gives $x=R\sin\omega t$, $y=R\cos\omega t - R$ — a circle $x^2+(y+R)^2=R^2$. Since $\vec F\perp\vec v$ always, the magnetic force does no work, so kinetic energy $T=\tfrac12 mv_0^2$ stays constant: only the direction of motion changes, never the speed.

## Combined E and B Fields; the Cyclotron

Adding a perpendicular $\vec E=E_x\hat x$ field changes the equations to $m\ddot x=qB_z\dot y+qE_x$, $m\ddot y=-qB_z\dot x$, whose solution (with $x_2\equiv qE_x/m\omega^2$) is a **cycloid**:
$$x=x_2(1-\cos\omega t),\qquad y=x_2(\sin\omega t-\omega t)$$
i.e. circular Larmor motion superposed on a steady drift — the $\vec E\times\vec B$ drift. Since the particle now moves partly along $\vec E$, the electric field does work and kinetic energy oscillates, $T=2m(E_x/B_z)^2\sin^2(\tfrac{qB_z}{2m}t)$, rather than staying constant.

The **cyclotron** exploits the field-independence of the Larmor frequency to accelerate particles: two D-shaped electrodes sit in a uniform $\vec B$, with an AC voltage flipping polarity every half-period $\pi/\omega$ so the particle is kicked by the gap field on every pass. Since $\omega=qB/m$ doesn't depend on speed, the particle stays in resonance with the AC field as its orbit radius grows, reaching maximum (non-relativistic) energy $E_\text{max}=\dfrac{q^2B^2R^2}{2m}$ set by the machine's maximum radius $R$.

## Polar Unit Vectors and Kinematics

Unlike Cartesian $\hat i,\hat j$, the polar unit vectors $\hat r,\hat\theta$ change direction as the particle moves. Since $\hat r\cdot\hat r=1$ always, differentiating gives $\hat r\cdot\dot{\hat r}=0$: a fixed-length vector's derivative is always perpendicular to itself. Writing $\hat r=\hat i\cos\theta+\hat j\sin\theta$ and differentiating via the chain rule gives $\dot{\hat r}=\dot\theta\hat\theta\equiv\omega\hat\theta$; the same method gives $\dot{\hat\theta}=-\dot\theta\hat r$.

Differentiating $\vec r=r\hat r$ using the product rule and these relations gives velocity $\vec v=\dot r\hat r+r\dot\theta\hat\theta$; differentiating again gives acceleration
$$\vec a = (\ddot r - r\dot\theta^2)\hat r + (2\dot r\dot\theta+r\ddot\theta)\hat\theta$$
The $\hat r$ term splits into a real radial acceleration $\ddot r$ and a centripetal piece $-r\dot\theta^2$; the $\hat\theta$ term is the tangential (Euler) acceleration plus the Coriolis-like $2\dot r\dot\theta$ term from a changing radius. For constant circular motion ($\dot r=\ddot\theta=0$) this collapses to the familiar $\vec a=-r\omega^2\hat r=-v^2/r\,\hat r$.

## Angular Velocity Vector

Defining $\vec\omega=\omega\hat n$ along the rotation axis (out of the plane) lets velocity be written compactly as $\vec v=\vec\omega\times\vec r$, which reproduces $\vec v=r\omega\hat\theta$ using $\hat\theta=\hat n\times\hat r$. **Angular acceleration** $\vec\alpha=\dot{\vec\omega}$ points along the fixed rotation axis (unlike linear acceleration, whose direction can vary); in constant circular motion $\vec\alpha=0$, and for constant $\alpha$ the angular kinematics mirror the linear "suvat" equations: $\omega=\omega_0+\alpha t$, $\theta=\theta_0+\omega_0t+\tfrac12\alpha t^2$. The torque relation $\vec\tau=I\vec\alpha$ is the direct rotational analogue of $\vec F=m\vec a$.

# Related
- [[Noether's Theorem and Angular Momentum]]
