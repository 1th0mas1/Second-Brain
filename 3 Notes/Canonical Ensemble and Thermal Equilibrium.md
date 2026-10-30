---
old: true
Tags:
  - year-2
Index:
Class:
  - Foundations of Statistical Mechanics
Topics:
  - canonical ensemble
  - partition function
  - boltzmann distribution
  - thermal equilibrium
  - thermodynamic stability
---
up: [[Foundations of Statistical Mechanics.base]]

# Canonical Ensemble and Thermal Equilibrium

## From maximum entropy to the Boltzmann distribution
Maximising Gibbs entropy $S_G=-\sum_\alpha p_\alpha\ln p_\alpha$ subject to normalisation ($\sum p_\alpha=1$) and fixed mean energy ($\sum p_\alpha E_\alpha=U$), via Lagrange multipliers $\lambda,\beta$, gives $p_\alpha=e^{-(1+\lambda+\beta E_\alpha)}$. Enforcing normalisation fixes $\lambda$ and yields the **Gibbs/Boltzmann distribution**:
$$p_\alpha = \frac{e^{-\beta E_\alpha}}{Z(\beta)}, \qquad Z(\beta)=\sum_\alpha e^{-\beta E_\alpha}$$
with the constraint equation becoming $U=-\partial\ln Z/\partial\beta$.

## Identifying $\beta$ and building thermodynamics
Substituting the distribution back into $S_G$ gives $S_G=\beta U+\ln Z$; taking its differential and using $dE_\alpha=(\partial E_\alpha/\partial V)dV$ together with $P=-\sum_\alpha p_\alpha(\partial E_\alpha/\partial V)$ shows
$$dS_G = \beta(dU+P\,dV) = \beta\,dQ_\text{rev}$$
The left side is a full differential (a genuine state function), so $\beta$ must be an integrating factor for $dQ_\text{rev}$ — matching units to the classical result fixes $\beta=1/k_BT$ and $S=k_BS_G$, recovering the familiar $TdS=dU+PdV$. Combining gives $F=-k_BT\ln Z$ directly from the partition function, with $Z=e^{-\beta F}$ and $p_\alpha=e^{\beta(F-E_\alpha)}$. This exact structure — $Z=\sum e^{-\beta E}$ — reappears unchanged as the generating functional of quantum field theory path integrals (with $\beta$ playing the role of imaginary time), making the canonical partition function one of the deepest bridges between statistical mechanics and QFT.

## Additivity and thermal equilibrium
For two systems in loose contact, the joint probability factorises $p_{\alpha\alpha'}=p_\alpha p_{\alpha'}$, which makes Gibbs entropy additive: $S_G = S_{G,1}+S_{G,2}$ (and likewise $U=U_1+U_2$). Maximising total entropy at fixed total energy, $dS = (\partial S_1/\partial U_1 - \partial S_2/\partial U_2)\,dU_1=0$, together with $\partial S_i/\partial U_i = 1/T_i$, forces $T_1=T_2$ — equal temperatures define thermal equilibrium. If $T_1\ne T_2$ initially, the requirement $dS>0$ fixes the direction: energy flows from the hotter to the colder system.

Generalising the same maximisation to also allow exchange of momentum, angular momentum, and volume between subsystems (introducing a Lagrange multiplier for each conserved quantity) recovers three equilibrium conditions simultaneously: equal temperature (thermal), equal pressure (mechanical), and equal bulk velocity/rotation with no internal velocity gradients (dynamical) — the only allowed macroscopic motion in equilibrium is a rigid translation plus rotation of the system as a whole.

## Stability from second-order conditions
Equilibrium is only physical if entropy is a maximum, not merely a stationary point. Checking the second derivative in energy, $\partial^2 S_i/\partial\epsilon_i^2 = -1/(T^2 C_{V_i})$, a maximum requires this to be negative, i.e.
$$C_V>0 \quad \text{(thermal stability)}$$
Checking the second derivative with respect to velocity similarly gives
$$T>0 \quad \text{(dynamical stability)}$$
These are exactly the stability conditions familiar from classical thermodynamics, but now derived directly from the statistical definition of entropy rather than assumed — a system with $C_V<0$ or $T<0$ would have concave, unstable equilibria and spontaneously fluctuate away from them.

# Related
- [[Maximum Entropy and Lagrange Multipliers]]
- [[Classical Ideal Gas: Gibbs Paradox and the Sackur-Tetrode Equation]]
- [[Entropy, Stability and Free Energy]]
