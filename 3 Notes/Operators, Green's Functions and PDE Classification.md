---
old: true
Tags:
  - year-2
Index:
Class:
  - Math Methods
Topics:
  - adjoint operator
  - hermitian operator
  - diagonalisation
  - green's function
  - inhomogeneous odes
  - propagator
  - pde classification
  - method of characteristics
  - separation of variables
---
up: [[Math Methods.base]]

# Operators, Green's Functions and PDE Classification

## Adjoint, Hermitian, unitary and normal operators

For any linear operator $\hat A:\mathcal V\to\mathcal V$, the **adjoint** $\hat A^\dagger$ is defined by $\langle\underline a,\hat A\underline b\rangle=\langle\hat A^\dagger\underline a,\underline b\rangle$ (in bra-ket, $\langle a|\hat A|b\rangle=\langle b|\hat A^\dagger|a\rangle^*$); it always exists and is unique and linear. Three special classes:
- **Hermitian** ($\hat A^\dagger=\hat A$): guarantees real eigenvalues and orthogonal eigenvectors — the operator generalisation of a real symmetric matrix.
- **Unitary** ($\hat A^\dagger=\hat A^{-1}$): preserves inner products, $\langle U\underline a,U\underline b\rangle=\langle\underline a,\underline b\rangle$, so acts as a "rotation" of the vector space (basis changes between orthonormal bases are always unitary).
- **Normal** ($[\hat A,\hat A^\dagger]=0$): the general condition — both Hermitian and unitary operators are normal — guaranteeing diagonalisability by a unitary change of basis.

## Diagonalisation and basis change

To diagonalise a Hermitian operator, find its orthonormal eigenbasis $\{|e_i\rangle\}$; in that basis the operator is represented by a diagonal matrix of real eigenvalues. Changing between orthonormal bases via $|e_i'\rangle=U|e_i\rangle$ transforms components as $\underline a'=U^\dagger\underline a$ and matrix elements as $A'=U^\dagger AU$ — a similarity transformation that leaves trace, determinant and eigenvalues invariant ($\det A=\prod_i\lambda_i$ for the diagonalised form). This is the same diagonalisation procedure used for finite matrices, but applies equally to differential and integral operators once "eigenvector" is replaced by "eigenfunction" — precisely the content of Sturm-Liouville theory.

## Definition and construction

For a linear operator $\hat L$, the **Green's function** $G(x,x')$ is defined by $\hat LG(x,x')=\delta(x-x')$: the response of the system to a unit point source ("impulse") at $x'$. Because $\hat L$ is linear, an arbitrary source $g(x)$ can be built up as a continuous superposition of delta functions, $g(x)=\int g(x')\delta(x-x')\,dx'$, so the solution to the general inhomogeneous problem $\hat Lf=g$ is
$$f(x)=\int G(x,x')\,g(x')\,dx'$$
— exactly analogous to inverting a matrix equation $A\underline f=\underline g$ via $\underline f=A^{-1}\underline g$, with $G$ playing the role of $A^{-1}$ and the integral replacing the matrix sum. For a Sturm-Liouville operator, $G$ can be built from the eigenfunction expansion $G(x,x')=\sum_n\frac{e_n(x)e_n^*(x')}{\lambda_n}$, or piecewise from homogeneous solutions matched with a jump in derivative at $x=x'$ fixed by integrating $\hat LG=\delta$ across the singularity.

## Applications and the propagator

This machinery solves inhomogeneous ODEs directly (e.g. driven oscillators) and the classic inhomogeneous PDEs: Poisson's equation ($G\sim1/r$ in 3D — the origin of the Coulomb potential as the Green's function of $-\nabla^2$), the heat/diffusion equation (Gaussian-spreading kernel), and the wave equation (retarded Green's function, causal). In quantum field theory the same object — the Green's function of the free-field wave operator — becomes the **propagator**: it encodes how a disturbance created at one spacetime point propagates to influence another, and Feynman diagrams are literally built from propagators connecting interaction vertices.

## Classifying second-order PDEs

For a general 2nd-order linear PDE $A\Phi_{xx}+2B\Phi_{xy}+C\Phi_{yy}=D$, requiring characteristic curves $dy/dx=(B\pm\sqrt{B^2-AC})/A$ to exist splits the equation into three types by the sign of $B^2-AC$ (directly analogous to classifying conics):
- **Hyperbolic** ($B^2-AC>0$): two real characteristics — the wave equation. Solved as an initial-value problem; information propagates at finite speed along the characteristics.
- **Parabolic** ($B^2-AC=0$): one real characteristic — the heat/diffusion equation. Also an initial-value problem, but with no finite propagation speed.
- **Elliptic** ($B^2-AC<0$): no real characteristics — Laplace's/Poisson's equation. A boundary-value problem instead, requiring Dirichlet (value), Neumann (normal derivative), or Cauchy (both) conditions on a bounding curve, with the solution unique once fixed.

For first-order quasilinear PDEs $a\,\partial_t u+b\,\partial_x u=g$, the **method of characteristics** reduces the PDE directly to the ODE system $dt/a=dx/b=du/g$ along characteristic curves; integrating these gives the full solution.

## Separation of variables

Assuming a product solution — e.g. $V(r,\theta,\phi)=R(r)\Theta(\theta)\Phi(\phi)$ for Laplace's equation in spherical polars, or $X(x)Y(y)Z(z)$ in Cartesians — substituting and dividing through turns the PDE into a sum of terms each depending on only one variable; since they must sum to a constant, each term individually equals a separation constant. This splits the PDE into a set of coupled ODEs, one eigenvalue problem per variable, with boundary conditions quantising the separation constants — precisely the Sturm-Liouville structure that generates Legendre polynomials (spherical), Bessel functions (cylindrical), or sinusoids (Cartesian). Standard route for Laplace's/Poisson's equation, the wave/Helmholtz equation, and the heat equation across all three common geometries.

# Related
- [[Determinants, Eigenvalues and Diagonalisation]]
- [[Sturm-Liouville Theory and Generalised Fourier Series]]
- [[Poisson and Laplace Equations and Electric Multipoles]]
- [[Curves, Arc Length and Curvilinear Coordinates]]
