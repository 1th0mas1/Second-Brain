---
old: true
Tags:
  - year-3
Index:
Class:
  - Mechanics
Topics:
  - hamiltonian mechanics
  - canonical coordinates
  - legendre transform
  - poisson brackets
  - jacobi identity
  - conserved quantities
---
up: [[Mechanics.base]]

# Canonical Coordinates and Poisson Brackets

## Legendre Transform to Phase Space

A Lagrangian system's state is fixed by $N$ generalised coordinates $\vec q$ and $N$ velocities $\dot{\vec q}$ — trajectories through configuration space are determined by these $2N$ initial conditions. Hamiltonian mechanics instead works with the **canonical coordinates** $(\vec q,\vec p)$, trading the $N$ generalised velocities $\dot{\vec q}$ for the $N$ **conjugate momenta** $\vec p\equiv\partial L/\partial\dot{\vec q}$ — a **Legendre transform**, directly analogous to swapping $V\to P$ in thermodynamics via $P=\partial U/\partial V|_S$. The Euler-Lagrange equations then read simply $\dot{\vec p}=\partial L/\partial\vec q$. Defining the **Hamiltonian**
$$H(\vec q,\vec p,t) \equiv \vec p\cdot\dot{\vec q} - L$$
and differentiating it two ways — once through $L(\vec q,\dot{\vec q},t)$ using the Euler-Lagrange equations, once directly through $H(\vec q,\vec p,t)$ — then matching coefficients of $d\vec q$, $d\vec p$, $dt$ gives **Hamilton's equations**:
$$\dot{\vec q} = \frac{\partial H}{\partial \vec p}, \qquad \dot{\vec p} = -\frac{\partial H}{\partial \vec q}$$
$2N$ coupled *first-order* ODEs replacing the $N$ second-order Euler-Lagrange equations — the same trade Newton's law $m\ddot x=F$ makes when split into $\dot x=v$, $m\dot v=F$.

## Conservation and Worked Examples

Comparing the two expressions for $dH$ term by term also shows $\partial H/\partial t=-\partial L/\partial t$: if $L$ (hence $H$) has no explicit time dependence, $H$ is conserved. For a particle in a potential, $\vec p=m\dot{\vec q}$ is just the physical momentum and $H=p^2/2m+V(\vec q)$ is the total mechanical energy. This identification isn't automatic, though: in a rotating frame the conjugate momentum turns out to be the *inertial-frame* momentum, $\vec p=m(\dot{\vec r}+\vec\omega\times\vec r)$, and $H=p^2/2m+V-\vec\omega\cdot\vec r\times\vec p$ only reduces to the energy once the $-\frac m2|\vec\omega\times\vec r|^2$ centrifugal potential is folded in. Like the Lagrangian, Hamilton's equations also follow from their own variational principle — the **Hamiltonian action** $S=\int(\vec p\cdot\dot{\vec q}-H)\,dt$, with $\vec q$ and $\vec p$ varied independently and $\delta S=0$.

## Definition and Fundamental Properties

For any phase-space function $A(\vec q,\vec p,t)$ evolving along a trajectory, the chain rule combined with Hamilton's equations gives
$$\frac{dA}{dt} = \frac{\partial A}{\partial t} + \frac{\partial A}{\partial\vec q}\cdot\dot{\vec q} + \frac{\partial A}{\partial \vec p}\cdot\dot{\vec p} = \frac{\partial A}{\partial t} + [A,H]$$
which defines the **Poisson bracket** $[A,B]\equiv\sum_i\left(\frac{\partial A}{\partial q_i}\frac{\partial B}{\partial p_i}-\frac{\partial A}{\partial p_i}\frac{\partial B}{\partial q_i}\right)$. So a time-independent $A$ is conserved exactly when $[A,H]=0$, and Hamilton's equations themselves become the special cases $\dot q_i=[q_i,H]$, $\dot p_i=[p_i,H]$. The bracket is **antisymmetric** ($[A,B]=-[B,A]$), satisfies the **fundamental brackets** $[q_i,q_j]=[p_i,p_j]=0$, $[q_i,p_j]=\delta_{ij}$, obeys a Leibniz-like product rule $[AB,C]=A[B,C]+[A,C]B$, and satisfies the **Jacobi identity** $[[A,B],C]+[[B,C],A]+[[C,A],B]=0$.

## Poisson's Theorem and Angular Momentum

**Poisson's theorem**: if $A$ and $B$ are both conserved, so is $[A,B]$. Proof: expanding $\partial_t[A,B]$ with the product rule and using the Jacobi identity to rewrite $[[A,B],H]$ gives $\frac{d}{dt}[A,B]=\frac{\partial}{\partial t}[A,B]+[[A,B],H]=[\dot A,B]+[A,\dot B]$, which vanishes if $\dot A=\dot B=0$ — a genuine way of *generating* new conserved quantities. Applying it to angular momentum $\vec M=\vec r\times\vec p$: direct computation of the fundamental brackets gives $[M_x,M_y]=M_z$ (and cyclic permutations), so if two components of $\vec M$ are conserved, Poisson's theorem guarantees the third is too.

This entire algebraic structure is the **exact classical shadow of quantum commutators**: $[A,B]_\text{classical}\leftrightarrow\frac{1}{i\hbar}[\hat A,\hat B]_\text{quantum}$ (Dirac's canonical quantisation prescription) — $[q_i,p_j]=\delta_{ij}$ maps directly onto $[\hat x,\hat p]=i\hbar$.

# Related
- [[Hamiltonian Mechanics and Conjugate Momenta]]
- [[Liouville's Theorem and Noether's Theorem in Hamiltonian Mechanics]]
- [[Commutators, Uncertainty and Symmetry]]
- [[Lie Algebra of SO(3) and the Larmor Formula]]
- [[Liouville's Theorem and Noether's Theorem in Hamiltonian Mechanics]]
