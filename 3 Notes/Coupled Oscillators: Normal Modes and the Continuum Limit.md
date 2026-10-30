---
old: true
Tags:
  - year-1
Index:
Class:
  - Normal Modes and Waves
Topics:
  - normal modes
  - coupled oscillators
  - eigenvalue method
  - continuum limit
  - dispersion relation
---
up: [[Normal Modes and Waves.base]]

# Coupled Oscillators: Normal Modes and the Continuum Limit

A **normal mode** is motion where every part of a system oscillates sinusoidally at the same frequency with a fixed phase relation.

## Decoupling into Normal Coordinates
For two pendula of length $l$ coupled by a spring of constant $k$, Newton's second law gives $m\ddot x=-\frac{mg}{l}x+k(y-x)$ and $m\ddot y=-\frac{mg}{l}y-k(y-x)$. Adding the two equations removes the coupling term: $m(\ddot x+\ddot y)=-\frac{mg}{l}(x+y)$, so the symmetric combination $q_1\equiv x+y$ obeys plain SHM, $\ddot q_1=-\omega_1^2q_1$ with $\omega_1^2=g/l$ — both pendula swing in phase and the spring is never stretched, so its frequency is just that of an uncoupled pendulum. Subtracting instead gives $m(\ddot x-\ddot y)=-m\left(\frac gl+\frac{2k}{m}\right)(x-y)$, so the antisymmetric combination $q_2\equiv x-y$ obeys $\ddot q_2=-\omega_2^2q_2$ with $\omega_2^2=\frac gl+\frac{2k}{m}$ — swinging out of phase now stretches and compresses the spring on every half-cycle, adding extra restoring force so $\omega_2>\omega_1$. Each $q_i$ evolves independently as $q_i=A_i\cos(\omega_it+\phi_i)$, and inverting gives $x,y$ as superpositions of both modes, with the four constants fixed by the initial positions and velocities. Substituting $q_1,q_2$ into the total energy $U=\frac12m(\dot x^2+\dot y^2)+V(x,y)$ removes all cross terms, leaving $U=\left[\frac12m\dot q_1^2+\frac12m\omega_1^2q_1^2\right]+\left[\frac12m\dot q_2^2+\frac12m\omega_2^2q_2^2\right]$ — the energy splits cleanly into two independent SHM energies, one per mode.

## Matrix (Eigenvalue) Method
For more complicated or asymmetric systems, guessing normal coordinates by hand isn't practical, so instead write the coupled equations as a matrix equation, $\mathbf M\ddot{\vec u}=-\mathbf K\vec u$ (for the pendula, $\vec u=(x,y)$). Substituting the trial oscillatory solution $\vec u=\vec Xe^{i\omega t}$ turns the differential equation into an algebraic eigenvalue problem $(\mathbf K-\omega^2\mathbf M)\vec X=0$, which only has a non-trivial solution when $\det(\mathbf K-\omega^2\mathbf M)=0$. This determinant condition is a polynomial in $\omega^2$ whose roots are the normal mode frequencies (the eigenvalues), and for each root the corresponding eigenvector $\vec X$ gives the mode shape — the fixed ratio of amplitudes with which each coordinate participates in that mode. For the pendula example this reproduces $\omega_1^2=g/l$ with eigenvector $(1,1)$ (in-phase) and $\omega_2^2=g/l+2k/m$ with eigenvector $(1,-1)$ (out-of-phase), matching the decoupling method exactly. The matrix method generalises immediately to $N$ coupled oscillators, where it becomes the only practical approach.

## Setting Up the Chain
A chain of $N$ equal masses $m$, spacing $l$, on a stretched string of tension $T$, with small transverse displacements $y_p$, has negligible horizontal force (to leading order) but a vertical force on mass $p$ from the two neighbouring segments: $F_{p,v}=T\sin\alpha_p-T\sin\alpha_{p-1}\approx T\frac{y_{p+1}-y_p}{l}-T\frac{y_p-y_{p-1}}{l}$. Newton's second law then gives $\ddot y_p=-\omega_0^2(2y_p-y_{p-1}-y_{p+1})$, $\omega_0^2\equiv T/ml$ — each mass coupled only to its immediate neighbours.

## Normal Modes and the Dispersion Relation
Trying $y_p=A_p\cos\omega t$ turns this into an algebraic recursion, $(A_{p-1}+A_{p+1})/A_p=(2\omega_0^2-\omega^2)/\omega_0^2$, which must be independent of $p$. The ansatz $A_p=C\sin(p\theta)$ satisfies this automatically (via the trig identity $\sin(p-1)\theta+\sin(p+1)\theta=2\sin p\theta\cos\theta$), leaving $2\cos\theta=(2\omega_0^2-\omega^2)/\omega_0^2$. Imposing fixed ends ($y_0=y_{N+1}=0$) forces $\theta=n\pi/(N+1)$ for integer $n$, so the mode shapes are $A_p=C\sin(pn\pi/(N+1))$ and the discrete **dispersion relation** follows:
$$\omega_n^2 = 2\omega_0^2\sin^2\left(\frac{n\pi}{2(N+1)}\right)$$
There are exactly $N$ independent normal modes ($n=1,\dots,N$), with frequencies bounded between $\omega_0$ (as $n\to0$) and $2\omega_0$ (as $n\to N$, the highest possible frequency the discrete chain can support — a direct consequence of there being a shortest wavelength, $\lambda=2l$).

As $N\to\infty$ with $L=(N+1)l$, $\rho=m/l$ fixed (the **continuum limit**), low-$n$ modes have small argument so $\sin(n\pi/2(N+1))\approx n\pi/2(N+1)$, giving $\omega_n\simeq n\frac{\pi}{L}\sqrt{T/\rho}$ — linear in $n$ (hence in $k$), recovering the ordinary, dispersionless wave equation. This discrete-chain-to-continuum route is the standard way dispersion relations for waves are derived from microscopic models: the linear low-$k$ behaviour is universal, while deviations at large $k$ (comparable to $1/l$) reveal the underlying discreteness.

# Related
- [[Determinants, Eigenvalues and Diagonalisation]]
- [[Wave Equation: d'Alembert's Solution and Separation of Variables]]
- [[Dispersion, Phase and Group Velocity and Impedance]]
