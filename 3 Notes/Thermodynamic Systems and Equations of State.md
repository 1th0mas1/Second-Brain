---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - state variables
  - equilibrium
  - reversibility
  - quasistatic process
  - ideal gas law
  - equation of state
---
up: [[Thermodynamics.base]]

# Thermodynamic Systems and Equations of State

## Extensive vs Intensive, Equilibrium

**Extensive** properties scale with system size — double the system, double the value (volume $V$, internal energy $U$, entropy $S$, particle number $N$). **Intensive** properties don't (temperature $T$, pressure $p$, density) — the ratio of two extensive quantities is always intensive (e.g. $U/N$). **Thermodynamic equilibrium**: no net macroscopic flows of matter or energy, so the handful of state variables ($p,V,T,N,\dots$) are well-defined and time-independent — a huge reduction from tracking $\sim10^{23}$ microscopic degrees of freedom.

## Quasistatic and Reversible Processes

A **quasistatic** process proceeds slowly enough (compared to the system's internal relaxation time) that it passes through a continuous sequence of equilibrium states — at every instant the system is arbitrarily close to equilibrium, so intermediate state variables are meaningful. A **reversible** process is quasistatic *and* free of dissipation (friction, unrestrained expansion, finite-difference heat flow) — it can be exactly undone, restoring both system and surroundings to their initial states with zero net entropy production. Every reversible process is quasistatic, but not every quasistatic process is reversible (e.g. quasistatic expansion against friction).

Standard vocabulary for restricted processes: **adiathermal** = no heat flow across the boundary; **isentropic** = constant entropy; **adiabatic** strictly means no heat exchange, though it's often used loosely to mean isentropic (true only if the adiabatic process is also reversible); **isothermal** = constant temperature (requires thermal contact with a reservoir, so is *not* generally adiabatic).

## Definition and the Ideal Gas

An **equation of state** is a functional relation $f(p,V,T,N)=0$ obeyed by a system in equilibrium — it doesn't come from the laws of thermodynamics themselves (which only constrain relationships *between* state functions) but is extra empirical or microscopic input specific to the material. Geometrically it defines a 2D surface of allowed equilibrium states sitting inside $(p,V,T)$ space; any reversible process is a path confined to this surface.

The **ideal gas** equation of state, $pV=Nk_BT$, follows from kinetic theory in the limit of point-like, non-interacting molecules, and is the reference case against which all corrections (finite molecular size, intermolecular attraction — see the van der Waals equation) are measured.

## Other Systems

Every thermodynamic system has its own equation of state playing the same structural role: thermal radiation has $p=\tfrac13aT^4$ (independent of $V$ — a qualitatively different equation of state from a gas, since photon number isn't fixed); a stretched wire or solid under stress has tension as a function of length and $T$; a paramagnet has magnetisation $M(H,T)$ in place of $V(p,T)$. Despite looking different, all of these plug into the *same* general thermodynamic machinery — partial derivatives of the equation of state generate response functions (compressibility, expansivity, susceptibility), and consistency between different response functions is enforced by the Maxwell relations, regardless of which physical system is being described.

# Related
- [[The Laws of Thermodynamics and the Clausius Theorem]]
- [[Internal Energy, the First Law and Heat Capacities]]
- [[Heat Engines and Real Gases]]
