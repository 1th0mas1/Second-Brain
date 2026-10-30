---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - internal energy
  - first law
  - work
  - heat capacity
  - adiabatic index
---
up: [[Thermodynamics.base]]

# Internal Energy, the First Law and Heat Capacities

## Defining Internal Energy

The **principle of adiathermal work**: the work required to change the state of a thermally isolated system depends only on the initial and final states, not on the path taken. This makes $U$ a function of state: $U_B-U_A$ is *defined* as the adiathermal work needed to go from $A$ to $B$. Once heat is allowed to flow, a quantity of **heat** is defined as $Q\equiv\Delta U-W$ — the part of the energy change not accounted for by orderly (mechanical) work. Neither heat nor work is a property "contained" in a system; both describe energy *in transit*, giving the **first law** for a closed system of fixed $N$:
$$dU=\bar dQ+\bar dW$$
(for an open system a chemical energy term $\bar dC$ is added).

## Work by Compression

For a piston, the applied force is $f=pA+\epsilon$, where $\epsilon$ represents friction (always opposing motion), so
$$\bar dW = f\,dx = -p\,dV + |\epsilon\,dx|$$
In the reversible (frictionless) limit, $\bar dW_\text{rev}=-p\,dV$. This gives a hierarchy of forms of the first law: $dU=\bar dQ+\bar dW$ always holds; for a quasistatic process $dU=\bar dQ-pdV+|\epsilon\,dx|$; for a reversible process $dU=\bar dQ_\text{rev}-pdV$; and combining with the entropy definition $dS=\bar dQ_\text{rev}/T$ gives the fundamental relation that holds unconditionally:
$$dU = TdS - pdV$$
This last form is powerful precisely because it's written purely in terms of state functions ($T,S,p,V$), so it applies even to irreversible processes where $\bar dQ\ne TdS$ individually.

## Definitions and Adiabatic Index

Heat capacities follow from the first law ($dU=\bar dQ-pdV$, so $\bar dQ_V=dU$ at fixed volume):
$$C_V \equiv \left.\frac{\partial U}{\partial T}\right|_V, \qquad C_p \equiv \left.\frac{\partial U}{\partial T}\right|_p + p\left.\frac{\partial V}{\partial T}\right|_p$$
The **adiabatic index** $\gamma\equiv C_p/C_V \ge 1$: heating at constant pressure also does expansion work, so more heat is needed for the same temperature rise than at constant volume. Equivalently $\gamma=\kappa_T/\kappa_S$, the ratio of isothermal to adiabatic compressibility — an adiabatically-compressed system heats up and stiffens, so $\kappa_S<\kappa_T$.

## The Energy Equation

A simple ($p,V$) system has two independent degrees of freedom, so $U$ can be written as a function of any two of $T,p,V$. Taking $U=U(T,V)$:
$$dU = C_V\,dT + \left.\frac{\partial U}{\partial V}\right|_T dV$$
is the **energy equation of state**, valid for any pV system. Comparing coefficients with the definition of $C_p$ and using a Maxwell relation gives the general result
$$C_p - C_V = \frac{TV\alpha^2}{\kappa_T} \ge 0$$
($\alpha$ = cubic expansivity), so $C_p\ge C_V$ always, with equality only at $T=0$ or where $V(T)_p$ has a stationary point.

For an ideal gas specifically, Joule's free-expansion experiment shows $(\partial U/\partial V)_T=0$, i.e. $U=U(T)$ alone (**Joule's law**), which collapses the energy equation and gives the familiar $C_p-C_V = Nk_B$.

# Related
- [[The Laws of Thermodynamics and the Clausius Theorem]]
- [[Adiabatic Processes and Black Body Radiation]]
