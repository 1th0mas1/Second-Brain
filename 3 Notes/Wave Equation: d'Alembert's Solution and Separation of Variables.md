---
old: true
Tags:
  - year-1
Index:
Class:
  - Normal Modes and Waves
Topics:
  - wave equation
  - d'alembert's solution
  - separation of variables
  - sinusoidal waves
  - phase difference
---
up: [[Normal Modes and Waves.base]]

# Wave Equation: d'Alembert's Solution and Separation of Variables

## Deriving the Wave Equation
For a small element of stretched string, the net transverse force from tension $T$ acting at slightly different angles $\theta,\theta+\delta\theta$ at either end is $F_y\approx T\delta\theta$. Newton's second law for the element of mass $\rho\,\delta x$ gives $(\rho\,\delta x)\partial^2y/\partial t^2=T\delta\theta$, i.e. $\delta\theta/\delta x=(\rho/T)\partial^2y/\partial t^2$. Since $\tan\theta=\partial y/\partial x$ and, for small angles, $\partial\theta/\partial x\approx\partial^2y/\partial x^2$, this becomes the wave equation:
$$\frac{\partial^2 y}{\partial x^2} = \frac{1}{c^2}\frac{\partial^2 y}{\partial t^2}, \quad c^2 = T/\rho$$
(dimensional analysis confirms $T/\rho$ has units of speed²). The same equation governs waves on stretched strings, sound waves, EM waves, and any system where a restoring force is proportional to curvature.

## d'Alembert's Solution
Changing variables to $u=x-ct$, $v=x+ct$ and applying the chain rule turns the wave equation into $\partial^2y/\partial u\partial v=0$, whose general solution is simply $y(u,v)=f(u)+g(v)$, i.e. $y(x,t)=f(x-ct)+g(x+ct)$: an arbitrary right-moving profile $f$ plus an arbitrary left-moving profile $g$, both travelling at speed $c$ without changing shape. Given initial displacement $U(x)$ and velocity $V(x)$ at $t=0$, matching $y(x,0)=f(x)+g(x)=U(x)$ and $\partial y/\partial t|_{t=0}=-c[f'(x)-g'(x)]=V(x)$ (then integrating the second condition) and solving simultaneously for $f,g$ gives:
$$y(x,t) = \tfrac12[U(x-ct)+U(x+ct)] + \tfrac{1}{2c}\int_{x-ct}^{x+ct}V(x')dx'$$
This is a complete, general solution for an infinite string — the initial displacement splits into two equal half-amplitude copies travelling in opposite directions, plus a term spreading out any initial velocity. It's the natural counterpart to the separation-of-variables approach (see Wave Equation: d'Alembert's Solution and Separation of Variables), better suited to initial-value problems on an infinite domain rather than boundary-value problems on a finite one.

## Separating the Wave Equation
Trying $y(x,t)=X(x)T(t)$ in the wave equation $\partial^2y/\partial x^2=c^{-2}\partial^2y/\partial t^2$ and dividing through by $XT$ gives $\ddot X/X=\ddot T/(c^2T)$. Since the left side depends only on $x$ and the right only on $t$, both must equal the same constant $C$ for the equality to hold for all $x,t$. Three cases arise depending on the sign of $C$:
- **$C=-k^2$ (negative)**: both $X$ and $T$ obey SHM equations, $X(x)=A\cos kx+B\sin kx$ and $T(t)=D\cos ckt+E\sin ckt$. Recombining and using trig identities gives the physical, propagating solution $y(x,t)=F\sin(kx+\omega t)+G\cos(kx-\omega t)$ with $\omega=ck$ — this is the case relevant to actual waves.
- **$C=+k^2$ (positive)**: real exponential solutions, $y(x,t)=(Ae^{kx}+Be^{-kx})(De^{\omega t}+Ee^{-\omega t})$ — growing/decaying, non-oscillatory (relevant to evanescent or unstable systems, not travelling waves).
- **$C=0$**: linear in both variables, $y(x,t)=(A+Bx)(D+Et)$ — no oscillation at all.

## Sinusoidal Waves and Phase
The oscillatory case is the natural wave solution, usually written $y(x,t)=A\cos(kx-\omega t)+B\cos(kx+\omega t)$, describing waves travelling in the $\mp x$ direction respectively. The wave speed is fixed by requiring consistency with the original wave equation: $\omega/k$ must equal $c$ (e.g. $\sqrt{T/\rho}$ for a string), otherwise the trial solution wouldn't solve the PDE. From $k$ and $\omega$ follow frequency $f=\omega/2\pi$, period $\mathcal T=2\pi/\omega$, and wavelength $\lambda=2\pi/k$.

**Phase difference** $\phi$ between two waves of the same $k,\omega$ — $y_1=A\cos(kx-\omega t)$, $y_2=A\cos(kx-\omega t+\phi)$ — measures their offset. Given this sign convention (minus sign on $\omega t$), $\phi<0$ means $y_2$ leads $y_1$ (reaches a given phase earlier), and $\phi>0$ means $y_2$ lags.

# Related
- [[Coupled Oscillators: Normal Modes and the Continuum Limit]]
- [[Dispersion, Phase and Group Velocity and Impedance]]
