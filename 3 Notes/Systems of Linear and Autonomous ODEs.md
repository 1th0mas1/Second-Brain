---
old: true
Tags:
  - year-1
Index:
Class:
  - Ordinary Differential Equations
Topics:
  - matrix ode
  - fundamental system
  - eigenvalue method
  - autonomous system
  - conservative system
  - phase space
  - potential
---
up: [[Ordinary Differential Equations.base]]

# Systems of Linear and Autonomous ODEs

## Reduction to First-Order Form

Any system of coupled linear ODEs can be written $\vec y' = \mathbf A(x)\vec y + \vec f(x)$. This is more general than it looks: a single $n$th-order scalar ODE $y^{(n)}+a_{n-1}y^{(n-1)}+\dots+a_0y=f(x)$ reduces to it by introducing new variables $z_i=y^{(i)}$ for $i=0,\dots,n-1$ — each $z_i' =z_{i+1}$ trivially, and the last row $z_{n-1}'=y^{(n)}$ is just the original equation rearranged. So an $n$th-order scalar problem and an $n$-dimensional first-order system are the same object.

## Solving via Diagonalisation

For constant $\mathbf A$, the homogeneous case $\vec y_H'=\mathbf A\vec y_H$ decouples by diagonalising: with eigenpairs $\mathbf A\vec v_i=\lambda_i\vec v_i$ and $\mathbf R=(\vec v_1,\dots,\vec v_n)$, substitute $\vec y_H=\mathbf R\vec c(x)$. Since $\mathbf{AR}=\mathbf{RD}$ (columns of $R$ are eigenvectors), this reduces to $\vec c\,'(x)=\mathbf D\vec c(x)$ — $n$ *independent* scalar equations $c_i'=\lambda_ic_i$, each solved as before: $c_i(x)=C_ie^{\lambda_ix}$. Recombining,
$$\vec y_H = \mathbf R\,\text{diag}(e^{\lambda_1x},\dots,e^{\lambda_nx})\vec C$$
The matrix of independent solution vectors $\mathbf Y(x)$ is the **fundamental system**, with $\det\mathbf Y\ne0$ confirming linear independence (the vector analogue of the Wronskian). Repeated or defective eigenvalues (where $\mathbf A$ isn't diagonalisable) need generalised Jordan-chain eigenvectors to still produce $n$ independent solutions.

## Inhomogeneous Systems

For $\vec y'=\mathbf A(x)\vec y+\vec f(x)$, seek $\vec y_P=\mathbf Y(x)\vec\psi(x)$. Using $\mathbf Y'=\mathbf A\mathbf Y$ (since $\mathbf Y$'s columns solve the homogeneous equation), substitution collapses to $\vec\psi\,'(x)=\mathbf Y(x)^{-1}\vec f(x)$, giving the vector variation-of-constants formula
$$\vec y_P=\mathbf Y(x)\int \mathbf Y(x)^{-1}\vec f(x)\,dx$$
— the direct generalisation of the scalar case, with $\mathbf Y^{-1}$ playing the role of dividing by $y_H$.

## Autonomous Systems and Phase Space

A second-order ODE $\ddot r=f(r,\dot r)$ is **autonomous** if $f$ has no explicit dependence on the independent variable $t$ — physically, a force law like Newton's second law that doesn't change with time. The trick is to trade $t$ for $r$ as the independent variable: with $v=\dot r$,
$$\ddot r = \frac{dv}{dt}=\frac{dv}{dr}\frac{dr}{dt}=v\frac{dv}{dr}=f(r,v)$$
This is a first-order equation for $v(r)$ living in **phase space** $(r,v)$, one order lower than the original problem.

## Conservative Systems and the Energy Integral

If $f$ depends on $r$ alone (not $v$), the phase-space equation $v\,dv/dr=f(r)$ is separable and integrates immediately:
$$\tfrac12 v^2 + V(r) = E, \qquad V(r)=-\int f(r)\,dr$$
$E$ is an integration constant identified as the total energy, and $V$ as the potential — this is exactly the statement of energy conservation, derived here as a first integral of the equation of motion rather than assumed. To get $r(t)$ itself, solve for $v=dr/dt=\pm\sqrt{2E-2V(r)}$ and separate again: $\int \frac{dr}{\sqrt{2E-2V(r)}}=\pm t+C$, giving $r(t)$ implicitly with two constants $E,C$ fixed by initial conditions. The harmonic oscillator and pendulum are the standard worked examples — this is the same energy-integral trick used throughout classical mechanics to reduce order before solving.

# Related
- [[Linear ODEs with Constant Coefficients]]
- [[Determinants, Eigenvalues and Diagonalisation]]
- [[ODE Classification and Separable and Homogeneous ODEs]]
