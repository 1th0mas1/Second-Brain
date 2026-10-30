---
old: true
Tags:
  - year-3
Index:
Class:
  - Symmetry and Relativity
Topics:
  - lie algebra
  - generators
  - infinitesimal rotations
  - commutators
  - larmor formula
  - radiation
---
up: [[Symmetry and Relativity.base]]

# Lie Algebra of SO(3) and the Larmor Formula

## Generators and Exponentiation
A **Lie group** (continuous group) can be built entirely from its behaviour near the identity: infinitesimal transformations. For $SO(2)$, write a rotation close to the identity as $R=I+\delta\theta J$; imposing the defining condition $R^TR=I$ to first order in $\delta\theta$ forces $J^T=-J$, i.e. $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ is antisymmetric. A finite rotation is built by composing $N\to\infty$ infinitesimal steps of angle $\theta/N$: $R(\theta)=\lim_{N\to\infty}(I+\tfrac{\theta}{N}J)^N=e^{\theta J}$, which (expanding the exponential and using $J^2=-I$) evaluates to $e^{\theta J}=\cos\theta\,I+\sin\theta\,J$ — reproducing the familiar rotation matrix. $J$ is called the **generator** of the group; for larger groups the full set of generators spans the **Lie algebra**, a vector space that captures the group's local structure near the identity.

## SO(3): Non-Commuting Generators
$SO(3)$ has three generators $J_x,J_y,J_z$ (antisymmetric basis matrices, one per rotation axis), with an infinitesimal rotation acting as $R\vec r=\vec r+\delta\vec\theta\times\vec r$ and a finite rotation about axis $\hat n$ by angle $\theta$ given by exponentiating the corresponding generator combination, $R(\theta,\hat n)=e^{\theta(\hat n\cdot\vec J)}$. Unlike $SO(2)$, $SO(3)$ is **non-abelian**: its generators satisfy the commutation relations
$$[J_i,J_j]=\epsilon_{ijk}J_k$$
so rotations about different axes don't commute ($R_xR_y\ne R_yR_x$ — verifiable directly by rotating a book about two different axes in different orders), and consequently $e^Ae^B\ne e^{A+B}$ in general; the correct composition is given by the Baker-Campbell-Hausdorff formula, $e^Ae^B=e^{A+B+\frac12[A,B]+\dots}$, with the commutator supplying the leading correction.

This commutation relation $[J_i,J_j]=\epsilon_{ijk}J_k$ is *identical in structure* to the quantum angular momentum commutators $[L_i,L_j]=i\hbar\epsilon_{ijk}L_k$ (up to the factor of $i\hbar$ from the Hermitian-operator convention) — angular momentum operators are literally the generators of rotations acting on quantum states, the deepest and most direct link between classical continuous symmetry and quantum mechanics, and the reason angular momentum is conserved whenever a Hamiltonian is rotationally invariant.

## Why Only Acceleration Radiates
A charge moving at constant velocity produces fields that fall off as $1/R^2$ (the ordinary near-field/Coulomb-like scaling), so the Poynting flux through a sphere of radius $R$ scales as $E\times B\times R^2\sim1/R^4\times R^2\to0$ as $R\to\infty$ — no net energy escapes to infinity, i.e. no radiation, consistent with a charge in an inertial frame having no radiation in its own rest frame. An **accelerated** charge produces an extra piece of the field, the radiation field, which falls off only as $1/R$; its Poynting flux then scales as $1/R^2\times R^2=$ const, so a finite power genuinely escapes to $R\to\infty$ regardless of how far away you measure it.

## Larmor's Formula
For non-relativistic motion ($\beta\ll1$), the radiation field from an accelerating charge is
$$E_\text{rad} = \frac{qa\sin\theta}{4\pi\epsilon_0c^2R}\hat\theta$$
with $\theta$ the angle between the observation direction and the acceleration $\vec a$ — zero radiation directly along the acceleration axis, maximum broadside ($\theta=\pi/2$), giving the characteristic doughnut-shaped radiation pattern. Computing the Poynting flux $S=E_\text{rad}^2/(\mu_0c)$ and integrating over a sphere of area element $d\Sigma=R^2\sin\theta\,d\theta\,d\phi$,
$$P_\text{rad}=\frac{q^2a^2}{8\pi\epsilon_0c^3}\int_0^\pi\sin^3\theta\,d\theta$$
gives the **Larmor formula**:
$$P_\text{rad} = \frac{q^2a^2}{6\pi\epsilon_0c^3}$$
Notably $P_\text{rad}$ is independent of $R$ and $t$ — exactly what energy conservation demands, since the same total power must cross every sphere however far from the source. The $P\propto a^2$ scaling (not velocity) is the fundamental reason accelerating — not merely moving — charges radiate, underlying synchrotron radiation, bremsstrahlung, and antenna theory; the fully relativistic generalisation is the **Liénard formula**, $P_\text{rad}=\frac{q^2}{6\pi\epsilon_0c^3}\gamma^6\left[a^2-(\vec v\times\vec a/c)^2\right]$, which reduces to Larmor's formula as $\gamma\to1$.

# Related
- [[Groups, Symmetry Transformations and Representations]]
- [[Angular Momentum Operators and Spin]]
- [[Commutators, Uncertainty and Symmetry]]
- [[Covariant Electromagnetism: Field Tensor and Lorentz Force]]
- [[EM Waves in Media: Dielectrics, Plasmas and Fresnel Equations]]
- [[Einstein Coefficients and Laser Gain]]
