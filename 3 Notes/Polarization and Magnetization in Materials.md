---
old: true
Tags:
  - year-2
Index:
Class:
  - Electromagnetism
Topics:
  - magnetization
  - ferromagnetism
  - hysteresis
  - polarization
  - bound charge
  - dielectrics
---
up: [[Electromagnetism.base]]

# Polarization and Magnetization in Materials

## Magnetisation and the H-Field

**Magnetisation** $\vec M$ is the magnetic dipole moment per unit volume of a material — the magnetic analogue of polarisation $\vec P$. A non-uniform (or surface-terminated) $\vec M$ produces effective **bound currents** ($\vec J_b=\nabla\times\vec M$ in the bulk, plus a surface current at any boundary) that source magnetic field exactly like any other current. To separate the response of the material from free currents imposed externally, define the auxiliary field
$$\vec H = \frac{\vec B}{\mu_0} - \vec M$$
so that $\nabla\times\vec H=\vec J_\text{free}$ — $\vec H$ responds only to free currents, with the material's own contribution folded into $\vec M$, exactly parallel to how $\vec D$ isolates free charge from bound charge in a dielectric.

## Linear and Nonlinear Materials

For a **linear** magnetic material, $\vec M=\chi_m\vec H$ with magnetic susceptibility $\chi_m$ (small positive for paramagnets, small negative for diamagnets), giving $\vec B=\mu_0(1+\chi_m)\vec H=\mu_0\mu_r\vec H$. **Ferromagnets** break this linearity completely: $\vec M$ depends not just on the instantaneous $\vec H$ but on the entire history of applied field, traced out by a **hysteresis loop** — increasing then decreasing $H$ doesn't retrace the same $M(H)$ curve, leaving a **remanent magnetisation** at $H=0$ and requiring a reverse **coercive field** to demagnetise. This history-dependence (memory) is what makes ferromagnets useful for permanent magnets and magnetic data storage, and is why analysing them needs mean-field/Ising-type models rather than a simple linear susceptibility.

## Polarisation and Bound Charge

An applied electric field distorts the charge distribution within a dielectric's atoms/molecules (or aligns existing molecular dipoles), producing a net dipole moment per unit volume, the **polarisation** $\vec P$. Where $\vec P$ varies in space, positive and negative bound charge fail to fully cancel locally, producing an effective **bound charge density** $\rho_b=-\nabla\cdot\vec P$ in the bulk, plus a bound surface charge $\sigma_b=\vec P\cdot\hat n$ wherever the polarisation terminates at a boundary. These bound charges are real sources of $\vec E$ just like free charge — they're just not free to move around the material.

## The D-Field and Linear Dielectrics

To avoid tracking bound charge explicitly, define the auxiliary **displacement field** $\vec D=\varepsilon_0\vec E+\vec P$, chosen so that $\nabla\cdot\vec D=\rho_\text{free}$ — Gauss's law for $\vec D$ involves only free charge, with the material's response absorbed into $\vec P$. For a **linear dielectric**, $\vec P=\varepsilon_0\chi_e\vec E$ (electric susceptibility $\chi_e$), giving $\vec D=\varepsilon_0(1+\chi_e)\vec E\equiv\varepsilon_0\varepsilon_r\vec E$ with relative permittivity $\varepsilon_r=1+\chi_e$. This is the constant that reduces the field inside a dielectric-filled capacitor, slows EM waves to $c/n$ with $n\approx\sqrt{\varepsilon_r}$, and sets the boundary-condition jump for $E^\perp$ at a dielectric interface.

# Related
- [[Magnetostatics and Electromagnetic Induction]]
- [[Boundary Conditions and Multipole Expansion]]
- [[EM Waves in Media: Dielectrics, Plasmas and Fresnel Equations]]
