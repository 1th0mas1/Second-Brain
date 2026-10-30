---
old: true
Tags:
  - year-1
Index:
Class:
  - Electromagnetism
Topics:
  - coulomb's law
  - electric field
  - electrostatic potential
  - gauss's law
  - flux
  - boundary conditions
---
up: [[Electromagnetism.base]]

# Coulomb's Law and Gauss's Law

## Coulomb's Law and the Field
$$\vec F = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}\hat r, \qquad \vec E = \frac{Q}{4\pi\varepsilon_0 r^2}\hat r$$
The electric field at a point is defined as force per unit test charge, $\vec F=q\vec E$; since force is linear in each charge, both the force and the field obey the **principle of superposition** — the field from several source charges is the vector sum of each one's individual field, $\vec E_j = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{q_i}{r_{ji}^2}\hat r_{ji}$. Charge is quantised in units of $e=1.6\times10^{-19}\text{ C}$, established experimentally by Millikan's oil-drop experiment (balancing gravity against an applied electric field on charged oil droplets).

## Potential and Field Energy
The work done moving a test charge from $A$ to $B$ against the field is $W_{AB}=-q\int_A^B\vec E\cdot d\vec l$, defining the **potential** $V=W_{AB}/q=-\int\vec E\cdot d\vec l$. Because this line integral depends only on endpoints (the field falls as $1/r^2$, so the integral around a closed loop vanishes), $\oint\vec E\cdot d\vec l=0$ — the electrostatic field is **conservative** — and equivalently $\vec E=-\nabla V$. Taking the reference point at infinity gives the familiar $V=Q/4\pi\varepsilon_0 r$ for a point charge.

The energy to assemble a collection of charges (bringing each in from infinity) is found by summing each charge's potential energy in the field of the others, but this double-counts every pair, so $U=\tfrac12\sum_i q_iV_i$, where $V_i$ is the potential at charge $i$ due to all the *other* charges. This factor of $\tfrac12$ recurs throughout electrostatics (e.g. capacitor energy) for exactly this double-counting reason.

## Deriving Gauss's Law
$$\oint \vec E\cdot d\vec a = \frac{q_\text{enc}}{\varepsilon_0}$$
For a point charge $q$, the flux through a small patch of any enclosing surface is $d\Phi_E=\vec E\cdot d\vec a=\frac{q}{4\pi\varepsilon_0}d\Omega$, where $d\Omega=(d\vec a\cdot\hat r)/r^2$ is the solid angle subtended — crucially, the $1/r^2$ in $\vec E$ exactly cancels the $r^2$ growth of the surface element, so the flux through any patch depends only on the solid angle it subtends, not on distance. Integrating over the full closed surface, $\oint d\Omega=4\pi$ regardless of the surface's shape or the charge's position inside it, giving $\Phi_E=q/\varepsilon_0$. A charge outside the surface contributes zero net flux (its field lines enter and leave equally). Superposition extends this to any enclosed charge distribution: total flux depends only on total enclosed charge $q_\text{enc}$, with contributions from charge outside the surface cancelling exactly.

## Boundary Conditions Across a Charged Surface
Applying Gauss's law to a thin pillbox straddling a surface charge density $\sigma$, with faces on either side: the flux through the two faces gives $E_{1\perp}\,da - E_{2\perp}\,da = \sigma\,da/\varepsilon_0$, so the perpendicular (normal) component of $\vec E$ jumps discontinuously across the surface:
$$E_{1\perp}-E_{2\perp}=\frac{\sigma}{\varepsilon_0}$$
Applying $\oint\vec E\cdot d\vec l=0$ (conservativeness) to a thin rectangular loop straddling the surface instead shows the parallel (tangential) component must be continuous, $E_{1\parallel}=E_{2\parallel}$ — otherwise the loop integral wouldn't vanish as the loop height shrinks to zero. Together these pin down how the field behaves at any charged interface, and the potential $V$ itself must remain continuous (a jump in $V$ would imply an infinite field).

# Related
- [[Poisson and Laplace Equations and Electric Multipoles]]
- [[Poisson and Laplace Equations and Electric Multipoles]]
