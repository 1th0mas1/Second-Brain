---
old: true
Tags:
  - year-1
Index:
Class:
  - Normal Modes and Waves
Topics:
  - standing waves
  - nodes and antinodes
  - normal mode energy
  - wave energy
  - kinetic energy density
  - potential energy density
---
up: [[Normal Modes and Waves.base]]

# Energy in Mechanical and Standing Waves

## Forming a Standing Wave
A wave reflecting off a fixed end has reflection coefficient $r=-1$ (infinite impedance, see [[Dispersion, Phase and Group Velocity and Impedance]]), so the reflected wave is $y_r=-A\cos(kx+\omega t+\phi)$ against an incident $y_i=A\cos(kx-\omega t+\phi)$. Superposing by the principle of superposition, $y=y_i+y_r$, and using the sum-to-product identity collapses the two travelling waves into $y(x,t)=-2A\sin(kx)\sin(\omega t+\phi)$: a **standing wave**, separable into a spatial envelope and a time-dependent oscillation, so every point on the string oscillates with the same phase but an amplitude that varies with position. The envelope $\sin(kx)$ vanishes at fixed points called **nodes** ($x=n\lambda/2$), with maximum-amplitude **antinodes** halfway between; all points reach their peak displacement simultaneously and pass through zero simultaneously — unlike a travelling wave, nothing propagates. A free end instead has $r=+1$ (zero impedance), giving $y=2A\cos(kx)\cos(\omega t+\phi)$ — the spatial envelope is $\cos(kx)$, so a node/antinode structure that's swapped relative to the fixed-end case.

## Finite String: Quantisation and Mode Energies
On a finite string of length $L$ with both ends fixed, requiring $y=0$ at $x=0$ and $x=L$ forces the standing-wave condition $\sin(k_nL)=0$, i.e. $k_n=n\pi/L$ — only discrete wavelengths $\lambda_n=2L/n$ fit the boundary conditions, each with frequency $\omega_n=vk_n$. (One free end instead gives half-integer quantisation $k_n=(n+\tfrac12)\pi/L$; two free ends restore $k_n=n\pi/L$ but with $\cos(k_nx)$ spatial dependence.) Since the wave equation is linear, the general solution is any superposition of these modes, $y(x,t)=\sum_n F_n\sin(\omega_nt+\phi_n)\sin(k_nx)$. Integrating the kinetic and potential energy densities (see Energy in Mechanical and Standing Waves) over the string for a single mode $n$ gives, after using $v=\sqrt{T/\rho}$, a mode energy independent of time: $E_n=\tfrac14\rho LF_n^2\omega_n^2$. Because different modes are orthogonal (no cross terms survive the spatial integral), the total energy of an arbitrary superposition is simply the sum of the individual mode energies, $E_\text{tot}=\sum_n E_n$ — each normal mode is an independent energy reservoir, exactly as for the coupled-oscillator case.

## Kinetic and Potential Energy Density
For a segment of string of linear density $\rho$ and length $dx$, moving transversely with velocity $\partial y/\partial t$, the kinetic energy is $dK=\frac12\rho\,dx\left(\frac{\partial y}{\partial t}\right)^2$, giving KE density $\frac{dK}{dx}=\frac12\rho\left(\frac{\partial y}{\partial t}\right)^2$. The potential energy is the work done stretching the segment: if the arc length is $ds=dx\sqrt{1+(\partial y/\partial x)^2}\approx dx\left(1+\frac12(\partial y/\partial x)^2\right)$ for small slopes, the extension $ds-dx$ against tension $T$ stores energy $dU=T(ds-dx)=\frac12T\left(\frac{\partial y}{\partial x}\right)^2dx$, giving PE density $\frac{dU}{dx}=\frac12T\left(\frac{\partial y}{\partial x}\right)^2$.

## Equipartition and Total Energy
For a travelling wave $y=f(x\pm ct)$, $\partial y/\partial x=f'$ and $\partial y/\partial t=\pm cf'$, so $\frac{dK}{dx}=\frac12\rho c^2[f']^2$ and $\frac{dU}{dx}=\frac12T[f']^2$. Using $c^2=T/\rho$ these are identical — KE density equals PE density exactly at every point, a manifestation of the virial theorem for a harmonic-type restoring force. Integrating over a full wavelength for $y=A\sin(kx-\omega t)$ gives total energy per unit length $\tfrac12\rho A^2\omega^2$ (using $\rho\omega^2=Tk^2$ to combine the two equal halves). Multiplying by the distance travelled per unit time (the wave speed) gives the power transmitted, $P=\tfrac12T\omega k A^2$ — this is the rate energy must be supplied at the driving end to sustain the wave, and it scales as amplitude squared, as for any oscillator.

# Related
- [[Dispersion, Phase and Group Velocity and Impedance]]
- [[Wave Equation: d'Alembert's Solution and Separation of Variables]]
