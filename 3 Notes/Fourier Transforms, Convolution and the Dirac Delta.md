---
old: true
Tags:
  - year-2
Index:
Class:
  - Math Methods
Topics:
  - fourier transform
  - convolution theorem
  - dirac delta
  - completeness relation
---
up: [[Math Methods.base]]

# Fourier Transforms, Convolution and the Dirac Delta

## From Fourier series to the Fourier transform

Starting from the complex Fourier series on $[-L/2,L/2]$ and relabelling the discrete index by wavenumber $k=2\pi n/L$, sending $L\to\infty$ turns the sum into an integral:
$$F(k)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)e^{-ikx}dx, \qquad f(x)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}F(k)e^{ikx}dk$$
— a continuous, non-periodic generalisation of the discrete Fourier coefficients. Differentiation becomes multiplication by $ik$ ($df/dx\to ikF(k)$), which is why Fourier transforms turn differential equations into algebraic ones. Extends to $n$ dimensions by transforming each coordinate independently (order doesn't matter): $F(\underline k)=(2\pi)^{-n/2}\int d^n\underline r\,e^{-i\underline k\cdot\underline r}f(\underline r)$.

## Convolution theorem

The **convolution** of $g$ and $h$ is $f(x)=(g*h)(x)=\int h(x-x')g(x')\,dx'$. The convolution theorem states $\widetilde{f*g}=\tilde f\,\tilde g$: convolution in real space becomes ordinary multiplication in Fourier space, and vice versa. Practically, this is why diffusion and wave problems are solved by Fourier-decomposing the source/initial condition, evolving (multiplying) each mode trivially in $k$-space, then transforming back — the Green's function for such problems is built exactly this way (e.g. the diffusive-spreading kernel).

## Delta function as a limit, and its Fourier form

The Dirac delta is not a function but the limit of a sequence of sharply-peaked "kernel" functions $\delta_\epsilon(x)$ (Gaussian $\frac{1}{\sqrt{2\pi}\epsilon}e^{-x^2/2\epsilon^2}$, or Cauchy-Lorentz $\frac1\pi\frac{\epsilon}{x^2+\epsilon^2}$) that stay normalised to 1 and become infinitely concentrated at $x=0$ as $\epsilon\to0$. Fourier transforming the Gaussian kernel and taking $\epsilon\to0$ gives the standard representation
$$\delta(x) = \frac{1}{2\pi}\int_{-\infty}^{\infty} e^{ikx}dk$$
Useful properties follow from its defining action $\int f(x)\delta(x-a)dx=f(a)$: $\delta(ax)=\delta(x)/|a|$, and for a function with simple zeros $\delta(f(x))=\sum_i\delta(x-x_i)/|f'(x_i)|$. Multidimensional deltas simply factorise: $\delta^3(\vec r)=\delta(x)\delta(y)\delta(z)$.

## Completeness relation

The Fourier-space form expresses completeness of the continuous plane-wave basis $|k\rangle$: $\int |k\rangle\langle k|\,dk = \hat 1$, the continuous analogue of $\sum_i|e_i\rangle\langle e_i|=\hat1$ for a discrete orthonormal basis. Equivalently $\langle x|x'\rangle=\delta(x-x')$ makes position eigenstates themselves a (continuously-normalised) basis, so any function resolves as $f(x_0)=\langle x_0|f\rangle=\int\delta(x-x_0)f(x)\,dx$. This is the same resolving-the-identity structure used everywhere in projecting onto a basis — whether the sum is discrete (ordinary Fourier series, eigenfunction expansions) or continuous (Fourier transform, position/momentum bases in QM).

# Related
- [[Sturm-Liouville Theory and Generalised Fourier Series]]
- [[Diffusion: Random Walks and the Diffusion Equation]]
- [[Conservative Fields and the Dirac Delta Function]]
