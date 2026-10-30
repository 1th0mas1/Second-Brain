---
old: true
Tags:
  - year-2
Index:
Class:
  - Quantum Mechanics
Topics:
  - schrodinger equation
  - ehrenfest's theorem
  - entanglement
  - product states
  - clebsch-gordan coefficients
  - bell inequality
  - local hidden variables
---
up: [[Quantum Mechanics.base]]

# Time Evolution, Entanglement and Bell Inequalities

## Time Evolution

$$i\hbar \frac{\partial}{\partial t}|\psi\rangle = \hat H|\psi\rangle$$
For time-independent $\hat H$, expanding in the energy eigenbasis $|\psi(t)\rangle = \sum_n\alpha_n e^{-iE_n(t-t_0)/\hbar}|E_n\rangle$ solves the equation exactly: each energy eigencomponent just accumulates a phase at rate $E_n/\hbar$. This evolution is completely deterministic — the apparent randomness of quantum mechanics comes entirely from the measurement postulate (see [[Dirac Notation and Operators and Observables]]), not from the dynamics. Note that the *relative* phase between components with different $E_n$ evolves in time even though the state's normalisation and each $|\alpha_n|^2$ don't — this time-dependent relative phase is what drives interference effects and expectation-value dynamics.

## Ehrenfest's Theorem

Differentiating $\langle\hat A\rangle=\langle\psi(t)|\hat A|\psi(t)\rangle$ and using the TDSE for both $|\psi(t)\rangle$ and $\langle\psi(t)|$ gives the general result
$$\frac{d}{dt}\langle \hat A\rangle = \frac{i}{\hbar}\langle[\hat H,\hat A]\rangle + \left\langle\frac{\partial \hat A}{\partial t}\right\rangle$$
For $\hat H=\hat p^2/2m+V(\hat x)$, evaluating the commutators explicitly gives $\frac{d}{dt}\langle\hat x\rangle = \langle\hat p\rangle/m$ and $\frac{d}{dt}\langle\hat p\rangle = -\langle\nabla V\rangle$ — Newton's second law, but for *expectation values* rather than definite trajectories. This is the precise sense in which classical mechanics emerges as a limit of quantum mechanics: for a sufficiently localised wavepacket (so $\langle\nabla V(\hat x)\rangle\approx\nabla V(\langle\hat x\rangle)$), the expectation values trace out the classical trajectory almost exactly.

## Product States and Entanglement

For two systems $A,B$ with individual state spaces, the composite basis is $|\psi_A\rangle\otimes|\psi_B\rangle\equiv|\psi_A,\psi_B\rangle$. A composite state that factorises this way is a **product state**: measuring $A$ tells you nothing new about $B$. If it can't be written this way, it's **entangled** — e.g. for two spin-1/2 particles, $|\uparrow\uparrow\rangle$ is a product state, but $\tfrac1{\sqrt2}(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)$ is not: measuring particle $A$ instantly fixes the outcome for $B$, even at spacelike separation (the EPR "paradox" — no faster-than-light *signalling* occurs, but the correlation itself has no local classical explanation, see Time Evolution, Entanglement and Bell Inequalities). The four two-spin combinations decompose into a spin-1 **triplet** ($|\uparrow\uparrow\rangle$, $\tfrac1{\sqrt2}(|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle)$, $|\downarrow\downarrow\rangle$) and a spin-0 **singlet** ($\tfrac1{\sqrt2}(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)$).

## Combining Angular Momenta

For two independent sources of angular momentum $\hat J_1,\hat J_2$ (e.g. orbital $\hat L$ and spin $\hat S$) with $[\hat J_1,\hat J_2]=0$, the product basis $|j_1,m_1\rangle\otimes|j_2,m_2\rangle$ has $(2j_1+1)(2j_2+1)$ states. Since $[\hat J^2,\hat J_z]=0$ for $\hat J=\hat J_1+\hat J_2$, these can be reorganised into total-angular-momentum eigenstates $|j,m\rangle$. The maximal $j=j_1+j_2$ (both aligned) gives $2(j_1+j_2)+1$ states; the next value down is $j=j_1+j_2-1$ with $2(j_1+j_2-1)+1$ states, and so on down to $j=|j_1-j_2|$ — schematically $j_1\otimes j_2 = |j_1-j_2|\oplus\cdots\oplus(j_1+j_2)$, with equal total state count on both sides (e.g. $1\otimes\tfrac12=\tfrac32\oplus\tfrac12$: $3\times2=4+2=6$ states). The intermediate $m$ values are generically superpositions of several product states, i.e. entangled. The **Clebsch-Gordan coefficients** $C(j,m,j_1,m_1,j_2,m_2)$ give this change of basis explicitly:
$$|j,m\rangle=\sum_{m_1,m_2} C(j,m,j_1,m_1,j_2,m_2)\,|j_1,m_1\rangle|j_2,m_2\rangle$$
This is the QM bookkeeping for combining $SU(2)$ representations — the same structure needed for combining internal symmetry multiplets (isospin, colour) in particle physics.

## The Quantum Prediction

Take two spin-1/2 particles in the entangled singlet state $|\psi\rangle=\frac{1}{\sqrt2}(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)$ (e.g. from a spin-0 particle decaying into two spin-1/2 daughters). Alice measures spin along axis $\alpha$, Bob along axis $\beta$; rewriting $|\psi\rangle$ in the rotated bases gives the correlation coefficient
$$C(\alpha,\beta)=P(+,+)+P(-,-)-P(+,-)-P(-,+)=-\cos(\alpha-\beta)$$
Measuring at the same angle ($\alpha=\beta$) gives perfect anti-correlation; the outcomes are correlated for *any* relative angle, well beyond what independent randomness on each side would produce.

## Local Hidden Variables and the Inequality

**Local hidden variable** theories assume each particle carries a predetermined outcome $\sigma_A(\alpha,\lambda)=\pm\tfrac12$, $\sigma_B(\beta,\lambda)=\pm\tfrac12$ fixed by some unmeasured variable $\lambda$ with distribution $\rho(\lambda)$, with no faster-than-light influence between the measurement choices. This gives $C(\alpha,\beta)=4\int d\lambda\,\rho(\lambda)\sigma_A(\alpha,\lambda)\sigma_B(\beta,\lambda)$. Bell showed that because each $\sigma$ can only take two discrete values, any such local model must satisfy the inequality
$$-2\le C(\alpha,\beta)-C(\alpha,\beta')+C(\alpha',\beta)+C(\alpha',\beta')\le2$$
Plugging in the quantum result for a suitable choice of angles (e.g. $\alpha=0,\alpha'=\pi/2,\beta=\pi/4,\beta'=3\pi/4$) gives $2\sqrt2\approx2.83$, clearly violating the bound. Experiments confirm the quantum prediction, not the classical bound — ruling out local hidden variable explanations and confirming that entanglement correlations are genuinely non-classical (though still not usable for faster-than-light signalling, since neither Alice nor Bob's individual marginal statistics depend on the other's setting).

# Related
- [[Commutators, Uncertainty and Symmetry]]
- [[Angular Momentum Operators and Spin]]
