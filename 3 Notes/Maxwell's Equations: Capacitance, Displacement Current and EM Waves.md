---
old: true
Tags:
  - year-1
Index:
Class:
  - Electromagnetism
Topics:
  - capacitance
  - energy stored
  - displacement current
  - maxwell's equations
  - electromagnetic waves
  - poynting vector
  - radiation
---
up: [[Electromagnetism.base]]

# Maxwell's Equations: Capacitance, Displacement Current and EM Waves

## Standard Geometries
Capacitance is defined as charge stored per unit voltage applied, $C=Q/V$, for equal and opposite charges on two conductors. All standard cases follow the same recipe: use Gauss's law to find $\vec E$ from the enclosed charge, then integrate $V=-\int\vec E\cdot d\vec l$ between the conductors, then read off $C=Q/V$.
- **Parallel plate**: Gauss's law on a pillbox gives $E=Q/\varepsilon_0A$, so $V=Qd/\varepsilon_0A$, giving $C=\varepsilon_0A/d$.
- **Cylindrical** (radii $a<b$, length $l$): a cylindrical Gaussian surface gives $E=\frac{Q/l}{2\pi\varepsilon_0r}$, so $V=\frac{Q/l}{2\pi\varepsilon_0}\ln(b/a)$, giving $C=2\pi\varepsilon_0l/\ln(b/a)$.
- **Spherical** (radii $a<b$): a spherical Gaussian surface gives the usual point-charge field between the shells, so $V=\frac{Q}{4\pi\varepsilon_0}\left(\frac1a-\frac1b\right)$, giving $C=4\pi\varepsilon_0\dfrac{ab}{b-a}$.

## Energy Stored
Charging a capacitor from $0$ to $Q_0$ means moving successive increments $dq$ against the potential $V(q)=q/C$ already built up, doing work $dW=V(q)\,dq$. Integrating,
$$U_C=\int_0^{Q_0}\frac{q}{C}dq = \tfrac12\frac{Q_0^2}{C} = \tfrac12 CV_0^2 = \tfrac12 Q_0V_0$$
This is the electrostatic energy stored in the field between the plates. If a battery holds $V$ fixed while the geometry (and hence $C$) changes, energy conservation splits as $dU_C=dU_B+dU_M$ (capacitor, battery, mechanical work) — with the battery supplying $dU_B=V^2dC$ while only half of that, $dU_C=\tfrac12V^2dC$, ends up stored in the field, the rest going into mechanical work $dU_M=-\tfrac12V^2dC$ done on whatever is moving the plates. This subtlety (energy stored $\ne$ energy supplied by the battery) is a common source of sign errors when computing forces between capacitor plates via $F=-(\partial U_C/\partial x)_Q$ at fixed charge.

## The Inconsistency in Static Ampère's Law
Taking the divergence of the static Ampère's law $\nabla\times\vec B=\mu_0\vec J$ gives $\nabla\cdot(\nabla\times\vec B)=\mu_0\nabla\cdot\vec J$. The left side is identically zero for any vector field (divergence of a curl vanishes), but the right side need not be: the continuity equation (charge conservation) requires $\nabla\cdot\vec J=-\partial\rho/\partial t$, which is non-zero wherever charge is accumulating — for instance at a capacitor plate being charged, where current flows up to the plate but no current crosses the gap between the plates. Static Ampère's law is therefore only self-consistent when $\partial\rho/\partial t=0$, i.e. in truly steady-state situations.

## The Fix: Displacement Current
Using $\nabla\cdot\vec E=\rho/\varepsilon_0$, the continuity equation can be rewritten as $\nabla\cdot\vec J=-\nabla\cdot(\varepsilon_0\partial\vec E/\partial t)$, i.e. $\nabla\cdot\left(\vec J+\varepsilon_0\dfrac{\partial\vec E}{\partial t}\right)=0$. This suggests the combination $\vec J+\varepsilon_0\partial\vec E/\partial t$ is what should appear as the source in Ampère's law, since *it* is always divergence-free:
$$\nabla\times\vec B = \mu_0\vec J + \mu_0\varepsilon_0\frac{\partial\vec E}{\partial t}$$
The added term $\mu_0\varepsilon_0\partial\vec E/\partial t$ is the **displacement current** — not an actual flow of charge, but a changing electric field that acts as a source of $\vec B$ just as real current does. This resolves the capacitor-circuit paradox: choosing a surface that passes between the plates (crossing no real current) still gives the correct enclosed $\oint\vec B\cdot d\vec l$, because the changing $\vec E$ between the plates supplies the missing displacement current exactly matching the charging current $I$. It's also needed even for a short straight wire, where charge briefly builds up at the ends.

This completes the full, self-consistent set of **Maxwell's equations** for all time-varying fields: $\nabla\cdot\vec E=\rho/\varepsilon_0$, $\nabla\cdot\vec B=0$, Faraday's law $\nabla\times\vec E=-\partial\vec B/\partial t$, and this corrected Ampère's law. The symmetry between the last two — a changing $\vec B$ sources $\vec E$, and a changing $\vec E$ sources $\vec B$ — is precisely what allows electromagnetic waves to self-propagate through vacuum with no charges or currents at all (see Maxwell's Equations: Capacitance, Displacement Current and EM Waves).

## From Maxwell's Equations to the Wave Equation
In vacuum ($\rho=0,\vec J=0$), Maxwell's four equations become fully symmetric between $\vec E$ and $\vec B$. Taking the curl of Faraday's law and substituting the (vacuum) Ampère-Maxwell law: $\nabla\times(\nabla\times\vec E)=-\frac{\partial}{\partial t}(\nabla\times\vec B)=-\mu_0\varepsilon_0\ddot{\vec E}$. Using the vector identity $\nabla\times(\nabla\times\vec E)=\nabla(\nabla\cdot\vec E)-\nabla^2\vec E=-\nabla^2\vec E$ (since $\nabla\cdot\vec E=0$ in vacuum) gives a wave equation for $\vec E$ alone, and the identical procedure starting from Ampère's law gives one for $\vec B$:
$$\nabla^2\vec E - \varepsilon_0\mu_0\ddot{\vec E}=0, \qquad c=\frac{1}{\sqrt{\varepsilon_0\mu_0}}$$
So electromagnetic waves are a direct, inevitable consequence of Maxwell's equations — the displacement current term is what makes this self-sustaining loop (changing $E$ sources $B$, changing $B$ sources $E$) possible at all.

## Plane Waves and the Poynting Vector
Trying plane-wave solutions $\vec E,\vec B\propto e^{i(\omega t-\vec k\cdot\vec r)}$ and substituting back (using $\nabla\to-i\vec k$, $\partial/\partial t\to i\omega$) gives $c=\omega/k=1/\sqrt{\varepsilon_0\mu_0}$, and relates the fields directly: $\vec B=\frac1\omega\vec k\times\vec E$, so $\vec E,\vec B,\vec k$ are mutually orthogonal with $|\vec E|/|\vec B|=c$.

The energy density of the fields is $u=\tfrac12(\varepsilon_0E^2+B^2/\mu_0)$; differentiating with respect to time and substituting Maxwell's equations (via the identity $\nabla\cdot(\vec E\times\vec B)=\vec B\cdot(\nabla\times\vec E)-\vec E\cdot(\nabla\times\vec B)$) yields an energy-conservation law, $\frac{d}{dt}(U+W)=-\frac1{\mu_0}\oint(\vec E\times\vec B)\cdot d\vec a$, where $U$ is field energy and $W$ is the energy delivered to any charges present. This identifies the **Poynting vector**
$$\vec N = \frac{1}{\mu_0}\vec E\times\vec B$$
as the power flowing per unit area through the field, with $-\frac{d}{dt}(U+W)=\oint\vec N\cdot d\vec a$ expressing that energy loss from a volume equals the outward flux of $\vec N$. For a plane wave, the time-averaged intensity is $I=\dfrac{1}{2\mu_0c}E_0^2$ — the starting point for treating radiative energy transport generally (black body radiation, radiative transfer in atmospheres, solar radiation pressure).

# Related
- [[Poisson and Laplace Equations and Electric Multipoles]]
- [[Coulomb's Law and Gauss's Law]]
- [[Magnetostatics and Electromagnetic Induction]]
