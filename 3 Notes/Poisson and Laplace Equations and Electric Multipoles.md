---
old: true
Tags:
  - year-1
Index:
Class:
  - Electromagnetism
Topics:
  - poisson equation
  - laplace equation
  - method of images
  - dipole
  - quadrupole
  - multipole expansion
---
up: [[Electromagnetism.base]]

# Poisson and Laplace Equations and Electric Multipoles

## From Gauss's Law to Poisson's Equation
Applying the divergence theorem to Gauss's law, $\oint\vec E\cdot d\vec a=\frac1{\varepsilon_0}\int\rho\,dV=\int(\nabla\cdot\vec E)\,dV$, gives the differential form $\nabla\cdot\vec E=\rho/\varepsilon_0$. Substituting $\vec E=-\nabla V$ turns this into a single second-order PDE for the potential:
$$\nabla^2 V = -\rho/\varepsilon_0 \quad \text{(Poisson)}, \qquad \nabla^2V=0 \text{ when }\rho=0 \quad \text{(Laplace)}$$
This reduces electrostatics to a boundary-value problem for a scalar field, often easier than working with the vector field $\vec E$ directly. The **uniqueness theorem** guarantees this is well-posed: the solution for $V$ inside a volume is completely fixed once $V$ is specified everywhere on the bounding surface — there's only one function satisfying both the PDE and the given boundary values.

## Method of Images
Uniqueness has a powerful practical consequence: if you can find *any* configuration of charges that reproduces the correct boundary condition (e.g. $V=0$ on a grounded conducting plane or sphere), that configuration must give the true potential everywhere in the region of interest, however it was constructed. The **method of images** exploits this by replacing a conductor with a fictitious "image charge" placed so as to mimic the conductor's boundary condition. For a point charge $q$ at distance $d$ from a grounded infinite plane, an image charge $-q$ at the mirror position reproduces $V=0$ on the plane, so the real field on the charge's side is identical to that of the charge-plus-image pair — giving an attractive force $\vec F=-\frac{1}{4\pi\varepsilon_0}\frac{q^2}{(2d)^2}\hat z$ and stored energy $W=-\frac{1}{16\pi\varepsilon_0}\frac{q^2}{d}$ (half the energy of two real point charges at separation $2d$, since only one side of the system is real). The same trick works for a grounded conducting sphere of radius $a$: matching $V=0$ at the surface requires an image charge $q'=-qa/d$ placed at distance $\Delta x=a^2/d$ from the centre, found by solving the boundary condition explicitly at a couple of points on the sphere.

## The Dipole Potential
For two charges $\pm q$ separated by $\vec d$, the distances to a far field point are $r_\pm\approx r(1\mp\frac{d}{2r}\cos\theta)^{-1}$ (binomial-expanded, $\theta$ measured from $\vec d$). Superposing their potentials and expanding to first order in $d/r$:
$$V=\frac{q}{4\pi\varepsilon_0}\left[\left(1+\frac{d}{2r}\cos\theta\right)-\left(1-\frac{d}{2r}\cos\theta\right)\right]=\frac{qd\cos\theta}{4\pi\varepsilon_0r^2}=\frac{\vec p\cdot\hat r}{4\pi\varepsilon_0 r^2}, \quad \vec p\equiv q\vec d$$
(with $\vec d$ pointing from $-q$ to $+q$). This falls as $1/r^2$ — faster than the $1/r$ monopole potential — because the monopole terms from $\pm q$ exactly cancel, leaving only the next order in the expansion. The field follows from $\vec E=-\nabla V$. In an external field $\vec E_\text{ext}$, a dipole feels no net force (equal and opposite forces on each charge) but a torque $\vec T=\vec p\times\vec E_\text{ext}$ that tries to align it; integrating $U=-\int\vec T\cdot d\vec\theta'$ gives potential energy $U=-\vec p\cdot\vec E_\text{ext}$, minimised (most stable) when $\vec p\parallel\vec E_\text{ext}$.

## Quadrupole and the General Pattern
For a charge arrangement with zero net dipole moment (e.g. two $+q$ at the ends and $-2q$ at the centre), the monopole and dipole terms in the expansion both vanish by symmetry, and the potential is dominated by the next term — the **quadrupole**, falling as $1/r^3$: $V=\frac{qa^2}{4\pi\varepsilon_0 r^3}(1-3\cos^2\theta)$ for a linear quadrupole of charge separation $a$. This illustrates the general structure of a **multipole expansion**: successive terms (monopole $\propto1/r$, dipole $\propto1/r^2$, quadrupole $\propto1/r^3$, ...) fall off increasingly fast with distance, and the potential at large $r$ is dominated by whichever is the lowest non-vanishing term for that charge distribution.

# Related
- [[Coulomb's Law and Gauss's Law]]
- [[Maxwell's Equations: Capacitance, Displacement Current and EM Waves]]
- [[Coulomb's Law and Gauss's Law]]
