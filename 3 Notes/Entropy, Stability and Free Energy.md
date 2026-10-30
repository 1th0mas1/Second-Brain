---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - gibbs paradox
  - entropy of mixing
  - irreversibility
  - maximum entropy principle
  - minimum free energy
  - stability
---
up: [[Thermodynamics.base]]

# Entropy, Stability and Free Energy

## Entropy Flow and Production

For any process $dS\ge \bar dQ/T$, with equality only if reversible: entropy entering a system splits into flow (from heat exchange with surroundings) and internal **production**, which is never negative and vanishes only for reversible processes. Because production can't reverse sign, the total entropy of an isolated system can only increase — this one-directionality is the thermodynamic arrow of time. "Entropy = disorder" is a misleading shorthand; dispersal of energy or freedom to explore microstates is closer to the truth — a gas settling from turbulent sloshing (highly structured collective motion) to quiescent random molecular motion is actually an entropy *increase*, despite looking more "orderly" macroscopically.

## Gibbs' Paradox and Indistinguishability

Naively computing the entropy change on mixing two gas samples as two free expansions gives $\Delta S = Nk_B\ln2$ regardless of whether the gases are different species or the *same* gas — but mixing a gas with itself is physically indistinguishable from doing nothing, so it must give $\Delta S=0$. This is Gibbs' paradox, resolved by particle indistinguishability: identical particles with swapped positions aren't distinct microstates, so the phase-space count must be divided by $N!$. Generalising to $xN$ particles of one species and $(1-x)N$ of another, the entropy of mixing is $\Delta S = -Nk_B\sum_i P_i\ln P_i$ — it depends only on the species being distinguishable, not on any volume change.

## Maxwell's Daemon

A hypothetical daemon sorting fast/slow molecules through a trapdoor without doing work would violate the Clausius statement. The resolution, seen most cleanly in the minimal one-particle **Szilard engine**, is that the daemon must record the outcome of each measurement in its own physical memory; converting that information into work ($k_BT\ln2$ per bit) is possible, but resetting the memory for the next cycle unavoidably exports at least $k_BT\ln2$ of entropy to the surroundings — exactly cancelling the apparent decrease. The **Feynman-Smoluchowski ratchet** makes the same point mechanically: a one-way ratchet-and-pawl can't extract net work from a single-temperature reservoir once the pawl's own thermal fluctuations (which occasionally lift it and let the wheel slip backward) are accounted for.

## Maximum Entropy and Minimum Free Energy

The **maximum entropy principle**: an isolated system at equilibrium sits at the state that maximises $S$ subject to whatever constraints (fixed $U,V,N$) apply — any spontaneous process in an isolated system increases $S$ until it can increase no further. When the system is instead held at fixed temperature $T$ by contact with a large reservoir, the combined entropy-maximisation of system-plus-reservoir translates into a statement purely about the system: equilibrium **minimises the free energy** $F=U-TS$ (at fixed $T,V$) or the Gibbs free energy $G=U-TS+pV$ (at fixed $T,p$). $F$ is often read as the "useful" or "available" energy — the maximum work extractable from the system at fixed $T$, since some of $U$ is inevitably tied up maintaining the entropy $S$ at temperature $T$ (the $TS$ term).

## Stability Criteria

For these extremum principles to describe genuine, stable equilibria (not just stationary points), the entropy surface $S(U,V,N)$ must be **concave** — equivalently, the free energy surface must be convex. This translates into concrete inequalities on response functions: $C_V>0$ (adding heat must raise temperature, not lower it) and isothermal compressibility $>0$ (squeezing a system must raise its pressure, not lower it). If either condition is violated, an infinitesimal fluctuation would be self-reinforcing rather than self-correcting, and the system is unstable. This is exactly what happens inside the unphysical (non-monotonic) region of an equation of state like van der Waals — the true equilibrium instead **phase-separates**, replacing the unstable single-phase state with a stable mixture of two coexisting phases that individually satisfy the stability conditions.

# Related
- [[The Laws of Thermodynamics and the Clausius Theorem]]
- [[Thermodynamic Potentials and Phase Transitions]]
