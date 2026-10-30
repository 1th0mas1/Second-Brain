---
old: true
Tags:
  - year-2
Index:
Class:
  - Further Quantum Mechanics
Topics:
  - perturbation theory
  - degenerate perturbation theory
  - variational method
  - trial wavefunction
---
up: [[Further Quantum Mechanics.base]]

# Time-Independent Perturbation Theory and the Variational Method

## Non-Degenerate Perturbation Theory

For $\hat H=\hat H_0+\lambda V$ with known eigenstates $\hat H_0|n\rangle=E_n|n\rangle$, expand both the state and energy as power series in $\lambda$: $|\psi\rangle=|n\rangle+\lambda|\delta\psi_n^{(1)}\rangle+\cdots$, $E=E_n+\lambda\delta E_n^{(1)}+\cdots$. Substituting into $\hat H|\psi\rangle=E|\psi\rangle$ and matching order-by-order in $\lambda$: at $O(\lambda^1)$, projecting with $\langle n|$ gives the **first-order energy shift**
$$E_n^{(1)}=\delta E_n^{(1)}=\langle n|V|n\rangle$$
while projecting with $\langle m|$ ($m\ne n$) gives the first-order state correction $|\delta\psi_n^{(1)}\rangle=\sum_{m\ne n}\frac{\langle m|V|n\rangle}{E_n-E_m}|m\rangle$. Pushing to $O(\lambda^2)$ gives the **second-order energy shift**
$$E_n^{(2)}=\sum_{m\ne n}\frac{|\langle n|V|m\rangle|^2}{E_n-E_m}$$
which is always negative for the ground state (since $E_n-E_m<0$ for all $m$) — consistent with the variational bound that perturbations can only push the ground energy down or leave it fixed relative to a trial state (see Time-Independent Perturbation Theory and the Variational Method). Both expressions require $n$ to be non-degenerate, since $E_n-E_m=0$ otherwise makes the denominators blow up.

## Degenerate Perturbation Theory

When $\hat H_0$ has $g$ degenerate eigenstates $|1\rangle,...,|g\rangle$ spanning a subspace, any orthonormal linear combination $|l'\rangle=\sum_m U_{l'm}|m\rangle$ (unitary $U$) is an equally valid $\hat H_0$-eigenbasis — the perturbation series above breaks down because the "natural" basis is ambiguous. The fix: first choose $U$ so that $\langle l'|V|m'\rangle$ is diagonal *within* the degenerate subspace; ordinary non-degenerate perturbation theory then applies to each resulting state. Physically, the perturbation generically breaks the degeneracy, splitting the levels according to the eigenvalues of $V$ restricted to that subspace — often the point of the calculation, since the pattern of splitting reveals the symmetry that protected the degeneracy in the first place (e.g. the [[Time-Dependent Perturbation Theory and the Zeeman and Stark Effects]]).

## Method

When $\hat H$ isn't exactly solvable, guess a **trial wavefunction** (variational ansatz) $|\psi\rangle$ containing one or more adjustable parameters, normalised $\langle\psi|\psi\rangle=1$. Compute $\langle\psi|\hat H|\psi\rangle$ as a function of the parameters and minimise over them — the minimum is an upper-bound estimate of the true ground-state energy $E_0$, and the minimising parameters give an approximate ground-state wavefunction. The better the functional form of the ansatz captures the true physics (symmetry, boundary conditions, expected decay), the tighter the bound.

## Proof of the Bound

For any normalised trial state $|\psi_\text{trial}\rangle$, $\langle\psi_\text{trial}|\hat H|\psi_\text{trial}\rangle \ge E_0$. To see this, expand the trial state in the (unknown but existent) true eigenbasis, $|\psi\rangle=\sum_n c_n|n\rangle$ with $\hat H|n\rangle=E_n|n\rangle$, $E_0\le E_1\le E_2\le\cdots$, and $\sum_n|c_n|^2=1$. Then
$$\langle\psi|\hat H|\psi\rangle=\sum_n|c_n|^2E_n = E_0+\sum_n|c_n|^2(E_n-E_0)$$
Every term in the sum is non-negative (since $E_n\ge E_0$ and $|c_n|^2\ge0$), so $\langle\psi|\hat H|\psi\rangle\ge E_0$ always, with equality only if the trial state happens to be exactly the true ground state. This one-sided bound is what makes the method useful even without knowing the true wavefunction: any trial energy you compute is guaranteed to overestimate (or exactly match) $E_0$, so minimising over trial parameters can only improve the estimate. The same logic underlies the treatment of degenerate perturbation levels — compare Time-Independent Perturbation Theory and the Variational Method, where perturbative corrections to the ground state are also always negative for the same reason.

# Related
- [[Time-Dependent Perturbation Theory and the Zeeman and Stark Effects]]
- [[Minimal Coupling, Gauge Invariance and the Aharonov-Bohm Effect]]

