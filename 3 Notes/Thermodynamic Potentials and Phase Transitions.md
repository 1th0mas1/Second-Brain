---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - chemical potential
  - gibbs free energy
  - maxwell relations
  - saha equation
  - clausius-clapeyron equation
  - latent heat
  - coexistence curve
  - phase diagram
---
up: [[Thermodynamics.base]]

# Thermodynamic Potentials and Phase Transitions

## Chemical Potential

The **chemical potential** $\mu\equiv(\partial U/\partial N)_{S,V}$ is the energy cost of adding one particle to a system at fixed entropy and volume — the particle-number analogue of temperature and pressure. Just as heat flows from high $T$ to low $T$ and volume expands from high $p$ to low $p$ at equilibrium, particles flow from high $\mu$ to low $\mu$; two systems (or two phases of the same substance) in diffusive equilibrium must share a common $\mu$. This is what governs phase coexistence (liquid-vapour, solid-liquid) and chemical/nuclear reaction equilibrium — the condition for balance is always equality, or a weighted balance, of chemical potentials on each side.

## Thermodynamic Potentials and Maxwell Relations

The **thermodynamic potentials** are Legendre transforms of $U$, each natural for a different choice of controlled variables: enthalpy $H=U+pV$ (natural variables $S,p$ — useful at constant pressure), Helmholtz free energy $F=U-TS$ (natural variables $T,V$ — useful in contact with a heat bath), Gibbs free energy $G=U-TS+pV=\mu N$ (natural variables $T,p$ — useful for phase transitions and chemical reactions, since $T,p$ are usually the externally controlled quantities). Because each potential's total differential (e.g. $dG=-SdT+Vdp+\mu\,dN$) has exact-differential structure, equality of mixed second partial derivatives generates a **Maxwell relation** for each potential — e.g. from $dF=-SdT-pdV$, $(\partial p/\partial T)_V=(\partial S/\partial V)_T$. These let you trade an experimentally awkward derivative for a more measurable one.

The **Saha equation** applies this machinery to ionisation equilibrium: balancing the chemical potentials of neutral atoms, ions, and free electrons (each treated via its own free energy/partition function) gives the ionisation fraction of a gas as a function of $T$ and density — the standard tool for modelling stellar atmospheres and other ionised layers.

## First-Order Transitions and Latent Heat

A first-order phase transition involves a step change in volume and entropy at fixed $T,p$ (both first derivatives of the Gibbs function), hence a **latent heat** $L=T\Delta S$. Since $G=\mu N$, coexistence of two phases requires equal chemical potential, $\mu_1=\mu_2$, tracing out a **coexistence curve** in the $p$-$T$ plane. Neglecting molecular interactions and treating a liquid as a dense gas gives $\Delta S\sim Nk_B\ln(V_\text{gas}/V_\text{liquid})$; since this volume ratio is typically $\sim1000$, $L\sim7RT_b$ per mole — **Trouton's rule** (empirically closer to $9RT$ once intermolecular forces are included).

## Deriving Clausius-Clapeyron

Run a reversible (Carnot) engine between two adjacent isotherms straddling the transition. The heat exchanged and work done per cycle give $dp\,\Delta V/Q_2 = dT/T$, and since $Q_2$ is by definition the latent heat:
$$\frac{dp}{dT} = \frac{L}{T\Delta V}$$
Equivalently, differentiating $\mu_1(p,T)=\mu_2(p,T)$ along the coexistence curve and using the Gibbs-Duhem relation $0=SdT-Vdp+Nd\mu$ gives $dp/dT=(s_1-s_2)/(v_1-v_2)=L/(T\Delta V)$ directly — the same result from a purely thermodynamic-potential route.

## Behaviour of the Coexistence Curve

The slope is positive whenever volume increases on heating (true for almost all liquid-vapour and solid-liquid transitions; water's solid-liquid line is the famous exception, since ice is less dense than water). Liquid-solid coexistence lines are steep because $\Delta V$ is small. Near the liquid-vapour critical point, approximating the vapour as ideal with $\Delta V\approx V_\text{vapour}$ gives $p=p_0\exp(-L/RT)$ — an exponential coexistence curve, refined by allowing $L=L_0+(C_p^v-C_p^l)T$ to vary with temperature.

# Related
- [[Internal Energy, the First Law and Heat Capacities]]
- [[Heat Engines and Real Gases]]
- [[Entropy, Stability and Free Energy]]
