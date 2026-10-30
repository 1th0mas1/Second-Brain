---
old: true
Tags:
  - year-2
Index:
Class:
  - Kinetic Theory
Topics:
  - cross section
  - mean free path
  - collision time
  - effusion
---
up: [[Kinetic Theory.base]]

# Collision Cross-Section, Mean Free Path and Effusion

## Cross-Section and Collision Time

Model particles as hard spheres of diameter $d$: two particles collide when their centres approach within $d$, so a moving particle sweeps out an effective target area, the **cross-section** $\sigma=\pi d^2$. In time $t$ it sweeps a cylinder of volume $\sigma vt$, containing on average $n\sigma vt$ other particles ($n$ = number density). Requiring exactly one such encounter defines the **collision time**:
$$\sigma v\tau_c n = 1 \implies \tau_c = \frac1{n\sigma v}, \qquad \nu_c\equiv\frac1{\tau_c}=n\sigma v$$
using a typical speed $v\sim v_\text{th}$.

## Mean Free Path and Relative Speed

The **mean free path** is the distance travelled between collisions, $\lambda_\text{mfp}=v_\text{th}\tau_c=1/(n\sigma)$ — notably independent of temperature. This first estimate implicitly treats target particles as stationary; properly accounting for their motion, the collision rate depends on the mean *relative* speed $\langle v_r\rangle=\sqrt2\langle v\rangle$, giving $\nu_c=\sqrt2\,\sigma n\langle v\rangle$ and $\lambda_\text{mfp}=\langle v\rangle/(\sqrt2\,\sigma n)$ (the mean free path itself uses $\langle v\rangle$, not $\langle v_r\rangle$, since it tracks a single particle's own displacement between hits).

$\tau_c$ and $\lambda_\text{mfp}$ set the scale separation between microscopic (collisional) and macroscopic (fluid) descriptions: local thermodynamic equilibrium and the fluid equations of [[Kinetic Derivation of Fluid Equations and Transport Coefficients]] are only valid once the times and lengths of interest satisfy $t\gg\tau_c$ and $l\gg\lambda_\text{mfp}$.

## Setup and Flux

Consider a container with a hole whose diameter is much smaller than the mean free path, $d\ll\lambda_\text{mfp}$: the gas doesn't "know" about the hole, so molecules escape without disturbing the bulk Maxwellian distribution. The differential particle flux through the hole, for velocities in a given speed range and solid angle, is
$$d\Phi(\vec v) = nv_zf(\vec v)\,d^3v = nv^3f(v)\,dv\,\cos\theta\sin\theta\,d\theta\,d\phi$$
This effusing distribution is neither isotropic nor Maxwellian: the extra $\cos\theta$ favours particles travelling near-perpendicular to the hole, and the extra factor of $v$ (beyond the bulk speed distribution) favours faster particles, since they reach the hole more often per unit time.

## Escape Rate and Selectivity

Integrating over outward angles ($0\le\theta\le\pi/2$) and over speed gives the total effusive flux
$$\Phi = \int_0^\infty \frac14 nv\,\tilde f(v)\,dv = \frac14 n\langle v\rangle = \frac{P}{\sqrt{2\pi mk_BT}}, \qquad \frac{dN}{dt}=-A\Phi$$
Since $\langle v\rangle\propto1/\sqrt m$, lighter (or hotter) species effuse faster — the basis for isotope separation (e.g. enriching $^{235}$UF$_6$ from $^{238}$UF$_6$) and for the preferential atmospheric escape of light gases like hydrogen and helium.

# Related
- [[The Kinetic Equation and Local Equilibrium]]
- [[Diffusion: Random Walks and the Diffusion Equation]]
- [[Statistical Description of a Gas and the Maxwell Distribution]]
