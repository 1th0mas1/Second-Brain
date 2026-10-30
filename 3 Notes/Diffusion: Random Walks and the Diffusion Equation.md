---
old: true
Tags:
  - year-2
Index:
Class:
  - Kinetic Theory
Topics:
  - diffusion equation
  - random walk
  - brownian motion
  - diffusive spreading
  - green's function
  - fourier decomposition
---
up: [[Kinetic Theory.base]]

# Diffusion: Random Walks and the Diffusion Equation

## Deriving the Diffusion Equation

Let $n^*(t,z)$ be the number density of labelled (tracer) particles. Particles arriving at $z$ at time $t+\Delta t$ came, on average, from $z-\Delta z$ a moment earlier: $n^*(t+\Delta t,z)=\langle n^*(t,z-\Delta z)\rangle$. Taylor-expanding in $\Delta z$ and using $\langle\Delta z\rangle=0$ (no mean drift):
$$n^*(t+\Delta t,z) \approx n^*(t,z) + \frac{\langle(\Delta z)^2\rangle}{2}\frac{\partial^2n^*}{\partial z^2}$$
Rearranging gives the **diffusion equation**:
$$\frac{\partial n^*}{\partial t} = D\frac{\partial^2 n^*}{\partial z^2}, \qquad D=\lim_{\Delta t\to0}\frac{\langle(\Delta z)^2\rangle}{2\Delta t}$$
provided this limit is finite.

## Random-Walk Model and the Diffusion Coefficient

To check $D$ is finite, model the motion as a sequence of free flights of duration $\tau_c$ (the collision time), each followed by a random kick with zero mean displacement and variance $\langle\delta z_i^2\rangle=\lambda_\text{mfp}^2$. Over $N=\Delta t/\tau_c$ steps the total displacement is $\Delta z=\sum_i\delta z_i$; for $N\gg1$ the **central limit theorem** guarantees $\Delta z$ is Gaussian-distributed with variance $N\lambda_\text{mfp}^2$, giving
$$D = \frac{\langle(\Delta z)^2\rangle}{2\Delta t} = \frac{\lambda_\text{mfp}^2}{2\tau_c}$$
This microscopic random walk is *literally* Brownian motion, and is the same mechanism underlying the Langevin equation treatment of stochastic processes: many uncorrelated microscopic kicks sum to a macroscopically smooth diffusive spreading, as seen explicitly in Diffusion: Random Walks and the Diffusion Equation.

## Fourier Decomposition

Write the initial perturbation as a sum of Fourier modes, $T(0,z)=\sum_k \hat T_0(k)e^{ikz}$. Each mode solves the diffusion equation independently: substituting into $\partial_t T = D\partial_z^2 T$ gives $\partial_t\hat T = -Dk^2\hat T$, so
$$\hat T(t,k) = \hat T_0(k)\,e^{-Dk^2t}.$$
Every spatial Fourier mode decays exponentially with rate $Dk^2$ — short-wavelength (large $k$) structure is smoothed out fastest, long-wavelength structure survives longest.

## Green's Function and Spreading

Converting the sum over $k$ to an integral and using $\hat T_0(k)=\frac1L\int dz'\,T(0,z')e^{-ikz'}$, resumming the decaying modes gives the **Gaussian Green's function** solution:
$$T(t,z) = \int dz'\, T(0,z')\, \frac{1}{\sqrt{4\pi Dt}}\exp\left[-\frac{(z-z')^2}{4Dt}\right]$$
This is a convolution of the initial profile with a Gaussian that is itself the response to a delta-function ("hot spike") initial condition. Its width grows as $\sqrt{Dt}$ — the characteristic $\sqrt t$ scaling of every diffusive process. Equivalently, this is the continuum limit of the random walk of Diffusion: Random Walks and the Diffusion Equation: many independent random steps sum, by the central limit theorem, to a Gaussian displacement whose variance grows linearly in time.

# Related
- [[Collision Cross-Section, Mean Free Path and Effusion]]
- [[Probability: Distributions, Random Variables and Joint Distributions]]
- [[Integration Techniques and Series Expansions]]