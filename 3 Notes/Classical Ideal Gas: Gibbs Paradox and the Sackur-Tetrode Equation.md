---
old: true
Tags:
  - year-2
Index:
Class:
  - Foundations of Statistical Mechanics
Topics:
  - gibbs paradox
  - indistinguishability
  - thermal de broglie wavelength
  - sackur-tetrode equation
  - ideal gas entropy
---
up: [[Foundations of Statistical Mechanics.base]]

# Classical Ideal Gas: Gibbs Paradox and the Sackur-Tetrode Equation

## Single-particle partition function
Each single-particle state in a box of volume $V$ is a quantised plane wave with wavevector $\vec k$ and energy $\epsilon_{\vec k}=\hbar^2k^2/2m$. Converting the sum over discrete $\vec k$ to an integral (valid since level spacing $\ll k_BT$ for macroscopic $V$) gives
$$Z_1=\sum_{\vec k}e^{-\beta\epsilon_{\vec k}} \approx \frac{V}{(2\pi)^3}\int d^3\vec k\, e^{-\beta\hbar^2k^2/2m} = \frac{V}{\lambda_\text{th}^3}$$
with **thermal de Broglie wavelength** $\lambda_\text{th}=\hbar\sqrt{2\pi/mk_BT}$ — physically, the quantum "size" of a particle at temperature $T$.

## The Gibbs paradox and its fix
Naively treating the $N$ particles as distinguishable labels gives $Z=Z_1^N$ and entropy $S=k_BN[\ln N + \tfrac32 - \ln(n\lambda_\text{th}^3)]$. Doubling both $N$ and $V$ (which should just double $S$ for an extensive quantity) instead gives $S_\text{new}-2S_\text{old}=2k_BN\ln2\ne0$ — the **Gibbs paradox**: entropy isn't additive. The error is overcounting: states that are just permutations of which particle has which $\vec k$ were counted as distinct microstates, but identical particles swapped are the *same* physical state. Dividing by $N!$ corrects this:
$$Z = \frac{Z_1^N}{N!}$$
This is exact only if no single-particle state ever holds more than one particle; it becomes a good approximation (available states $\gg N$) when $n\lambda_\text{th}^3\ll1$, i.e. density much less than the quantum concentration $n_Q=1/\lambda_\text{th}^3$ — the classical limit. With this correction the entropy becomes properly additive and reduces to the Sackur-Tetrode result.

## From partition function to free energy
Starting from the corrected (indistinguishable-particle) partition function $Z=Z_1^N/N!=(V/\lambda_\text{th}^3)^N/N!$, the free energy is
$$F=-k_BT\ln Z = -k_BT\left[N\ln\frac{V}{\lambda_\text{th}^3}-\ln N!\right]$$
Applying Stirling's approximation $\ln N!\approx N\ln N - N$ and using $n=N/V$ simplifies this to
$$F = -k_BTN\left[1-\ln(n\lambda_\text{th}^3)\right]$$
which is now genuinely extensive/additive (unlike the uncorrected $Z_1^N$ result), resolving the Gibbs paradox.

## Entropy and thermodynamic consistency
Differentiating $F$ with respect to $T$ at fixed $V$ (using $\lambda_\text{th}\propto T^{-1/2}$) gives the entropy
$$S = k_BN\left[\frac52 - \ln(n\lambda_\text{th}^3)\right] \quad \text{(Sackur-Tetrode equation)}$$
From $U=F+TS$ this reproduces the equipartition result $U=\tfrac32k_BTN$ and $C_V=\tfrac32k_BN$, and from $P=-\partial F/\partial V|_T$ it reproduces the ideal gas law $P=nk_BT$ — the full classical thermodynamics of an ideal gas rebuilt from a purely quantum-statistical starting point (quantised momentum states plus particle indistinguishability), with no classical assumptions put in by hand.

# Related
- [[Canonical Ensemble and Thermal Equilibrium]]
- [[Entropy, Stability and Free Energy]]
