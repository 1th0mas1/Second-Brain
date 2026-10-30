---
old: true
Tags:
  - year-1
Index:
Class:
  - Normal Modes and Waves
Topics:
  - dispersion
  - phase velocity
  - group velocity
  - wave packets
  - reflection coefficient
  - transmission coefficient
  - impedance
---
up: [[Normal Modes and Waves.base]]

# Dispersion, Phase and Group Velocity and Impedance

**Dispersion**: wave speed depends on $\omega$ or $k$ (e.g. the lumpy-string relation $\omega=2\omega_0\sin(kl/2)$ deviates from linear at large $k$). A dispersionless medium has $\omega\propto k$ exactly.

## Where Dispersion Comes From
For the discrete chain of $N$ masses (see [[Coupled Oscillators: Normal Modes and the Continuum Limit]]), the exact dispersion relation is $\omega_n^2=2\omega_0^2\sin^2(n\pi/2(N+1))$; writing this in terms of the wavenumber $k_n=n\pi/L$ and the lattice spacing $l$ gives $\omega=2\omega_0\sin(kl/2)$, so the wave speed $c(k)=\omega/k=2\omega_0\sin(kl/2)/k$ depends explicitly on $k$. When $l$ is small compared to the wavelength (long-wavelength limit), $\sin(kl/2)\approx kl/2$ and $c\to\omega_0 l=\sqrt{T/\rho}$ — the continuous, dispersionless string result. Dispersion is therefore a signature of the underlying discreteness (or more generally, of any restoring mechanism with an intrinsic length or time scale) showing up once the wavelength becomes comparable to that scale.

## Phase vs Group Velocity
**Phase velocity** $v_p=\omega/k$ is the speed of a single sinusoid's crests — well-defined even though a pure sinusoid, being infinite in extent, carries no information. To send information you need to modulate the wave, e.g. superpose two nearby frequencies $y_{1,2}=A\sin[(k\pm\delta k)x-(\omega\pm\delta\omega)t]$, giving $y=y_1+y_2=2A\cos(\delta k\,x-\delta\omega\,t)\sin(kx-\omega t)$: a fast carrier wave (phase velocity $\omega/k$) modulated by a slowly-varying envelope that moves at $\delta\omega/\delta k\to d\omega/dk$ as $\delta k\to0$. This envelope speed is the **group velocity** $v_g=d\omega/dk$, and it's the speed at which energy and information actually propagate — equivalently, it's the speed at which a point of constant phase in the envelope moves, found by demanding $d(\omega t-kx)/dk=0$ at fixed envelope phase. Under dispersion $v_p\ne v_g$, and a wave packet spreads out as it travels since its component frequencies separate. Because $v_p$ isn't tied to information transfer, it can exceed $c$ without violating causality — only $v_g$ is constrained.

This distinction is central to geophysical wave theory — Rossby waves, Kelvin waves, and inertia-gravity waves are all analysed via their dispersion relations $\omega(k)$, with group velocity governing energy propagation.

## Reflection and Transmission at a Boundary
At a step change in string density at $x=0$ (wavenumbers $k_1$ for $x<0$, $k_2$ for $x>0$), the string on the left carries an incident plus reflected wave, $y_1=A\sin(\omega t-k_1x)+A'\sin(\omega t+k_1x)$, and the right carries only a transmitted wave, $y_2=A''\sin(\omega t-k_2x)$. Two physical conditions fix $A',A''$ in terms of $A$: continuity of displacement at the join, $y_1(0,t)=y_2(0,t)\Rightarrow A+A'=A''$, and continuity of the transverse force (equal slope times tension, so equal slope since $T$ is the same string), $\partial y_1/\partial x|_0=\partial y_2/\partial x|_0\Rightarrow k_1(A-A')=k_2A''$. Solving these simultaneously gives the reflection and transmission coefficients:
$$r \equiv \frac{A'}{A}=\frac{k_1-k_2}{k_1+k_2}, \quad t\equiv\frac{A''}{A}=\frac{2k_1}{k_1+k_2}$$
Since power $P=\tfrac12T\omega kA^2$, the power reflection and transmission ratios are $R_r=r^2=\left(\frac{k_1-k_2}{k_1+k_2}\right)^2$ and $R_t=\frac{k_2}{k_1}t^2=\frac{4k_1k_2}{(k_1+k_2)^2}$, and $R_r+R_t=1$ as energy conservation requires. If $k_1<k_2$ (into denser medium), $A'<0$: the reflected wave is phase-flipped; if $k_1>k_2$, no flip.

## Impedance
**Impedance** generalises this to any wave-carrying system: it's the ratio of the "push" variable (force, voltage, pressure) to the "flow" variable (transverse velocity, current, particle velocity) at a point. For a string, $Z=kT=T/v=\sqrt{T\rho}$ (using $\omega=vk$), and the force exerted on a boundary is $F_y=-Zv_y$ — impedance plays the role of a damping coefficient relating force to velocity. Redoing the boundary-matching with possibly different tensions $T_1,T_2$ either side (needed for a physically consistent junction) gives the same reflection/transmission structure but in terms of impedance:
$$r=\frac{Z_1-Z_2}{Z_1+Z_2}, \quad t = \frac{2Z_1}{Z_1+Z_2}$$
$Z_1=Z_2$ (impedance matching) gives zero reflection regardless of how different $k_1,k_2$ individually are; $Z_T\to0$ gives $r\to-1$ (full reflection, phase flip — like a free/open end); $Z_T\to\infty$ gives $r\to+1$ (full reflection, no flip — like a fixed end). The same telegraph-equation structure describes $LC$ transmission lines: writing $\partial V/\partial x=-L'\partial I/\partial t$ and $\partial I/\partial x=-C'\partial V/\partial t$ (self-inductance and capacitance per unit length) gives the identical wave equation for $V$ and $I$, with speed $c=1/\sqrt{L'C'}$ and characteristic impedance $Z=\sqrt{L'/C'}$ — so a mismatched terminating impedance $Z_T$ reflects signal exactly as a mismatched string junction does.

# Related
- [[Coupled Oscillators: Normal Modes and the Continuum Limit]]
- [[Wave Equation: d'Alembert's Solution and Separation of Variables]]
- [[Energy in Mechanical and Standing Waves]]
- [[Wave Equation: d'Alembert's Solution and Separation of Variables]]
