---
old: true
Tags:
  - year-2
Index:
Class:
  - Open Systems Stat Mech
Topics:
  - law of mass action
  - chemical equilibrium
  - gibbs phase rule
  - multi-species chemical potential
---
up: [[Open Systems Stat Mech.base]]

# Chemical Equilibrium and the Gibbs Phase Rule

## Minimising Gibbs free energy at fixed stoichiometry
A reaction is written $\sum_s\nu_sA_s=0$ (e.g. $2\text H_2+\text O_2-2\text H_2\text O=0$ has $\nu=(2,1,-2)$). At fixed $T,P$, equilibrium minimises Gibbs free energy, $dG=\sum_s\mu_s\,d\bar N_s=0$. Because the reaction forces the changes in particle number to occur in fixed ratios, $d\bar N_1:\dots:d\bar N_m=\nu_1:\dots:\nu_m$, this reduces to a single equation, the **condition for chemical equilibrium**:
$$\sum_s \nu_s\mu_s = 0$$

## From chemical potentials to the law of mass action
Substituting the explicit ideal-gas chemical potential for each species (built from its internal partition function $Z_1^{(s)}$ and thermal wavelength) into $\sum_s\nu_s\mu_s=0$ and rearranging gives the **law of mass action**:
$$\prod_s c_s^{\nu_s} = K(P,T)$$
where $c_s$ are concentrations and $K$ is a temperature/pressure-dependent equilibrium constant fixed entirely by each species' internal structure. If the actual product of concentrations exceeds $K$, the reaction runs in reverse (consuming products) until equilibrium is restored, and vice versa — exactly the chemistry-textbook law of mass action, but derived here from statistical mechanics rather than posited empirically. The same chemical-potential machinery underlies ionisation equilibria such as the Saha equation, where "reactants" and "products" are ions, electrons, and neutral atoms instead of molecules.

## Chemical potential per species and Euler's theorem
With $m$ species present, each gets its own chemical potential $\mu_s$, conjugate to its mean particle number $\bar N_s$: $dG=-S\,dT+V\,dP+\sum_s\mu_s\,d\bar N_s$. Since $G$ is extensive in the particle numbers but $P,T$ are intensive, $G(P,T,\lambda\bar N_1,\dots,\lambda\bar N_m)=\lambda G(P,T,\bar N_1,\dots,\bar N_m)$. Differentiating both sides with respect to $\lambda$ and setting $\lambda=1$ (Euler's theorem for homogeneous functions) gives
$$G = \sum_s \mu_s\bar N_s$$
— Gibbs free energy is just the sum of each species' chemical potential weighted by its amount, generalising the single-species result $G=\mu N$.

## Counting phases: the Gibbs phase rule
Since each $\mu_s$ is intensive, it can only depend on other intensive quantities: pressure, temperature, and the fractional concentrations of the other species, $\mu_s=\mu_s(P,T,c_1,\dots,c_{m-1})$. Equilibrium across $r$ coexisting phases requires every species' chemical potential to match across all phases: $\mu_s^{(1)}=\mu_s^{(2)}=\dots=\mu_s^{(r)}$ for each of the $m$ species — that's $m(r-1)$ equations. The unknowns are $P$, $T$, and the concentrations in each phase, $2+r(m-1)$ in total. Requiring the number of equations not to exceed the number of unknowns gives the **Gibbs phase rule**:
$$r \le m+2$$
For a single substance ($m=1$), this means at most 3 phases (e.g. solid, liquid, gas) can coexist simultaneously — the triple point — with no freedom left to vary $P$ or $T$ independently while all three persist.

# Related
- [[Thermodynamic Potentials and Phase Transitions]]
- [[Grand Canonical Ensemble and Barometric Equilibrium]]
- [[Thermodynamic Potentials and Phase Transitions]]
