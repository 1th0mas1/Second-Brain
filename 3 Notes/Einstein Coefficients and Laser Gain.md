---
old: true
Tags:
  - year-2
Index:
Class:
  - Optics
Topics:
  - einstein a and b coefficients
  - spontaneous emission
  - stimulated emission
  - population inversion
  - laser gain
  - negative temperature
---
up: [[Optics.base]]

# Einstein Coefficients and Laser Gain

## Three Radiative Processes

Einstein identified three ways a two-level atomic system can exchange energy with a radiation field of spectral energy density $u(\omega)$: **absorption**, promoting an atom from level 1 to level 2 at rate $r_{12}=B_{12}u(\omega)n_1$; **stimulated emission**, the field triggering an atom in level 2 to drop to level 1 *in phase* with the incident wave (coherent amplification), rate $B_{21}u(\omega)n_2$; and **spontaneous emission**, an atom in level 2 decaying on its own with no external trigger, rate $A_{21}n_2$, emitting incoherently in a random direction and phase. $B_{12},B_{21},A_{21}$ are the Einstein coefficients — fixed properties of the atomic transition, independent of the field.

## Fixing the Coefficient Ratios via Detailed Balance

Without ever solving the Schrödinger equation, Einstein fixed the relationships between $A$ and $B$ purely by demanding **detailed balance**: place the atoms in thermal equilibrium at temperature $T$ inside a black-body cavity, so populations follow the Boltzmann distribution ($n_2/n_1=(g_2/g_1)e^{-\hbar\omega/k_BT}$) and the radiation field is exactly the Planck spectrum $u(\omega)$. Equilibrium requires upward and downward transition rates to balance exactly; substituting both distributions in and matching terms forces
$$g_1B_{12}=g_2B_{21}, \qquad \frac{A_{21}}{B_{21}} = \frac{\hbar\omega^3}{\pi^2c^3}$$
So all three coefficients for a given transition are related — measuring any one experimentally (e.g. an absorption cross-section) fixes the other two. This A/B framework is the microscopic engine behind every spectral absorption/emission line, and is exactly the physics used to model line formation in stellar and planetary atmospheres via radiative transfer.

## Why a Population Inversion Is Needed

A beam passing through a two-level medium is amplified only if stimulated emission events outnumber absorption events along its path. Since both rates share the same Einstein $B$ coefficient and radiation density $u(\omega)$ (by $g_1B_{12}=g_2B_{21}$, up to statistical weight factors), the *net* rate is proportional to $n_2-n_1$ — so gain requires $n_2>n_1$, a **population inversion** of the excited state relative to the ground state. In thermal equilibrium the Boltzmann distribution always gives $n_1>n_2$ (lower levels more populated) — the ratio $n_2/n_1=e^{-\hbar\omega/k_BT}$ would need to exceed 1 for an inversion, which formally requires a *negative* absolute temperature; genuine thermal equilibrium can never produce gain. A population inversion is instead created artificially by external **pumping** (optical, electrical, or chemical) that continuously drives population from level 1 into level 2 (often via a third level, in practical laser schemes), holding the system in a non-equilibrium steady state.

## Beating Spontaneous Emission

Even with an inversion, the desired *stimulated* emission must also dominate over unwanted *spontaneous* emission (which is incoherent and doesn't amplify the beam coherently): $Bu(\omega)>A$. Since $A/B\propto\omega^3$ (from the Einstein coefficient relation), this condition is much easier to satisfy at **low frequency**, where $A$ is intrinsically small relative to $B$ — which is exactly why masers (microwave amplification) were achieved before lasers (optical amplification): the $\omega^3$ scaling makes spontaneous emission a much bigger hurdle to overcome at optical frequencies.

# Related
- [[Adiabatic Processes and Black Body Radiation]]
- [[Thermal Conduction and Radiative Heat Transfer]]
