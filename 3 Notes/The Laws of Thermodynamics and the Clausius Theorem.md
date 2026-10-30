---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - laws of thermodynamics
  - zeroth law
  - clausius statement
  - kelvin statement
  - clausius theorem
  - entropy definition
  - clausius inequality
---
up: [[Thermodynamics.base]]

# The Laws of Thermodynamics and the Clausius Theorem

## Zeroth and First Laws

**Zeroth law**: if system A is in equilibrium with system C, and B is also in equilibrium with C, then A and B are in equilibrium with each other. This transitivity is what allows a single scalar quantity — **temperature** — to be defined at all: it's the thing that's equal for any two systems in mutual equilibrium, measurable via any convenient thermometer (system C).

**First law**: energy is conserved, $dU=\bar dQ+\bar dW$ ($\bar d$ denotes an inexact differential — $Q$ and $W$ depend on the path taken, unlike the state function $U$). For a reversible process, $\bar dW=-p\,dV$, so $dU=TdS-pdV$. The first law rules out perpetual motion machines of the first kind (energy created from nothing) but says nothing about which energy-conserving processes actually occur — that's the second law's job.

## Second and Third Laws

**Second law** has two classic equivalent statements: **Clausius** — no process can have as its sole effect the transfer of heat from a colder body to a hotter one; **Kelvin** — no process can have as its sole effect the complete conversion of heat extracted from a single reservoir into work. Both statements forbid a "perfect" heat engine or refrigerator, and can be shown to be logically equivalent (violating one lets you construct a violation of the other). Together they imply the existence of a state function, **entropy** $S$, which never decreases for an isolated system — the rigorous, quantitative version of "heat doesn't spontaneously flow uphill."

**Third law**: the entropy of a system tends to a constant (conventionally zero) as $T\to0$ — equivalently, absolute zero cannot be reached in a finite number of steps, since each step that lowers $T$ also has vanishing entropy change to work with as $T\to0$.

## Deriving the Clausius Inequality

Consider a system $A$ passing through an arbitrary (not necessarily reversible) cyclic sequence of states, exchanging heat only via a small reversible auxiliary engine $C$, which itself operates between $A$ (at its local, possibly varying temperature $T$) and a single reservoir at fixed $T_0$. For each infinitesimal exchange, $C$ draws $dQ_0=dQ\,T_0/T$ from the reservoir. Over a full cycle the net heat taken from the reservoir is $Q_0=T_0\oint\frac1T\bar dQ$. If $Q_0$ were positive, the combined system $A+C$ would have converted heat from a single reservoir entirely into work over a full cycle — violating the Kelvin statement. Hence
$$\oint \frac1T\bar dQ \le 0 \quad\text{(any cycle)}$$
If the cycle is reversible, running it backwards flips the inequality too, forcing equality:
$$\oint \frac1T\bar dQ = 0 \quad\text{(reversible cycle)}$$
so $\bar dQ_\text{rev}/T$ is a function of state — this defines **entropy**, $dS=\bar dQ_\text{rev}/T$.

## The Clausius Inequality and the Fundamental Relation

For an irreversible process, the same argument (applied to an open path rather than a closed cycle) gives $dS\ge\bar dQ/T$: entropy increases by at least the heat brought in divided by temperature, with any excess generated internally (see [[Entropy, Stability and Free Energy]]). Since $\bar dW=-pdV+|d\epsilon|$ for compression with friction $\epsilon$, the first law $dU=\bar dQ+\bar dW$ combined with $\bar dQ=TdS-|d\epsilon|$ gives the fundamental relation
$$dU = TdS - pdV$$
which — unlike the first law's $dU=\bar dQ+\bar dW$ — holds for *any* process, reversible or not, because it's written entirely in terms of state functions.

# Related
- [[Thermodynamic Systems and Equations of State]]
- [[Internal Energy, the First Law and Heat Capacities]]
- [[Entropy, Stability and Free Energy]]
- [[Heat Engines and Real Gases]]
