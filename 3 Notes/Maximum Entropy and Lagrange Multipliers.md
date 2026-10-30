---
old: true
Tags:
  - year-2
Index:
Class:
  - Foundations of Statistical Mechanics
Topics:
  - lagrange multipliers
  - constrained maximisation
  - gibbs-shannon entropy
  - maximum entropy
  - microstates
---
up: [[Foundations of Statistical Mechanics.base]]

# Maximum Entropy and Lagrange Multipliers

## Deriving the multiplier method
To maximise $S(p_1,...,p_\Omega)$ subject to a single constraint $F(p_1,...,p_\Omega)=0$, both differentials must vanish at the extremum: $dS=\sum_\alpha (\partial S/\partial p_\alpha)dp_\alpha=0$ and $dF=\sum_\alpha(\partial F/\partial p_\alpha)dp_\alpha=0$. The constraint lets you eliminate one $dp_\alpha$ in terms of the rest; substituting into $dS=0$ and defining $\lambda \equiv (\partial S/\partial p_1)/(\partial F/\partial p_1)$ shows every remaining coefficient must vanish independently:
$$\frac{\partial S}{\partial p_\alpha} - \lambda\frac{\partial F}{\partial p_\alpha} = 0 \quad \text{for all } \alpha, \qquad F(p_1,...,p_\Omega)=0$$
This is exactly the stationarity condition for the unconstrained function $S-\lambda F$ — so constrained maximisation of $S$ subject to $F=0$ is equivalent to freely maximising $S-\lambda F$, with $\lambda$ fixed afterwards by imposing the constraint. With multiple constraints $F_i=0$, each gets its own multiplier: maximise $S-\sum_i\lambda_iF_i$.

## Application: deriving the canonical distribution
Applied to the Gibbs-Shannon entropy $S_G=-\sum_\alpha p_\alpha\ln p_\alpha$ with two constraints — normalisation $\sum_\alpha p_\alpha=1$ (multiplier $\lambda$) and fixed mean energy $\sum_\alpha p_\alpha E_\alpha=U$ (multiplier $\beta$) — maximising $S_G-\lambda(\sum p_\alpha-1)-\beta(\sum p_\alpha E_\alpha-U)$ and setting each $\partial/\partial p_\alpha=0$ gives directly $p_\alpha\propto e^{-\beta E_\alpha}$: the Boltzmann distribution falls straight out of the maximum entropy principle plus these two constraints, with $\beta$ later identified as $1/k_BT$.

## Counting microstate arrangements
Treat the probabilities $p_\alpha$ of the $\Omega$ microstates as quantifying ignorance about the system's true state. With no information at all, symmetry demands $p_\alpha=1/\Omega$ (complete ignorance); with partial information (e.g. a known mean energy $U=\sum_\alpha p_\alpha E_\alpha$), infer the least-biased distribution by imagining $\mathcal N\gg\Omega$ indivisible "quanta" of probability distributed among the boxes, with $\mathcal N_\alpha=p_\alpha\mathcal N$ quanta in box $\alpha$. Since every arrangement of quanta is equally likely, the most probable assignment is the one maximising the multiplicity
$$W = \frac{\mathcal N!}{\mathcal N_1!\cdots\mathcal N_\Omega!}$$

## From $\ln W$ to Gibbs-Shannon entropy
Using Stirling's formula $\ln x!\approx x\ln x - x$ on every factorial in $\ln W$ collapses it to
$$\ln W = -\mathcal N\sum_\alpha p_\alpha\ln p_\alpha$$
so maximising $W$ is equivalent to maximising the **Gibbs-Shannon entropy** $S_G\equiv-\sum_\alpha p_\alpha\ln p_\alpha$. This functional has exactly the properties wanted of an "ignorance measure": it depends only on the $p_\alpha$ (not on how states are labelled), satisfies $S_G\ge0$ with equality only for a certain outcome, is additive over independent systems, and is maximised at $S_G=\ln\Omega$ precisely when all states are equally likely — recovering the complete-ignorance case. The same "maximise entropy subject to known constraints" recipe is the general least-biased way to infer a probability distribution from partial information, and reappears directly in machine learning (maximum entropy models; logistic regression is a MaxEnt classifier).

# Related
- [[Canonical Ensemble and Thermal Equilibrium]]
