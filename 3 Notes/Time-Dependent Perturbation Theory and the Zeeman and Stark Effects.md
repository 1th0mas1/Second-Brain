---
old: true
Tags:
  - year-2
Index:
Class:
  - Further Quantum Mechanics
Topics:
  - time-dependent perturbation theory
  - fermi's golden rule
  - transition rate
  - zeeman effect
  - stark effect
---
up: [[Further Quantum Mechanics.base]]

# Time-Dependent Perturbation Theory and the Zeeman and Stark Effects

## Perturbative Expansion

For $\hat H(t)=\hat H_0+\hat H'(t)$, expand $|\psi(t)\rangle=\sum_n c_n(t)e^{-iE_nt/\hbar}|n\rangle$ in the unperturbed eigenbasis. Substituting into the TDSE gives the exact equation $\partial_t c_m(t)=-\frac{i}{\hbar}\sum_n e^{i(E_m-E_n)t/\hbar}\langle m|\hat H'(t)|n\rangle c_n(t)$. Starting purely in state $i$ ($c_n(0)=\delta_{ni}$) and treating $\hat H'$ perturbatively, to first order the transition amplitude into a different state $f$ is
$$c_f(t)=-\frac{i}{\hbar}\int_0^t \langle f|\hat H'(t')|i\rangle\, e^{i\omega_{fi}t'}\,dt', \qquad \omega_{fi}=(E_f-E_i)/\hbar$$
For a periodic perturbation $\hat H'(t)=\hat H'_0 e^{-i\omega t}$, integrating gives $|c_f(t)|^2\propto\sin^2([\omega_{fi}-\omega]t/2)/[(\omega_{fi}-\omega)/2]^2$, which at large $t$ sharply peaks at resonance $\omega=\omega_{fi}$ — transitions overwhelmingly conserve energy (up to the time-energy spread $\Delta E\sim\hbar/t$).

## Fermi's Golden Rule

If the final states form a continuum (or the perturbation contains a continuous range of frequencies), replacing the sharply-peaked resonance function by its $t\to\infty$ limit $2\pi t\,\delta(\omega_{fi}-\omega)$ turns the growing $|c_f(t)|^2$ into a genuine constant transition *rate*:
$$\Gamma_{i\to f} = \frac{2\pi}{\hbar}|\langle f|\hat H'|i\rangle|^2 \rho(E_f)$$
where $\rho(E_f)$ is the density of final states at the resonant energy. This is the standard tool for computing decay rates and cross-sections — directly generalised to relativistic scattering/decay calculations in QFT.

## Sudden and Adiabatic Limits

Two exactly-solvable extremes bookend the perturbative regime. **Sudden approximation**: $\hat H(t)$ jumps from $\hat H_i$ to $\hat H_f$ effectively instantaneously (a "quantum quench") — the state has no time to evolve, so it's simply re-expanded (projected) onto the new eigenbasis of $\hat H_f$ unchanged. **Adiabatic limit**: $\hat H(t)$ changes infinitely slowly; the **adiabatic theorem** says a system starting in instantaneous eigenstate $|n(t_i)\rangle$ remains in the instantaneous eigenstate $|n(t)\rangle$ throughout, with $|\langle n(t)|\psi(t)\rangle|^2=1$ — no transitions occur, except at near-degeneracies (avoided crossings), which is where transitions can leak through even in the slow limit (**Landau-Zener** problem, with 2×2 Hamiltonian $H(t)=\begin{pmatrix}\alpha t & v\\ v & -\alpha t\end{pmatrix}$ as the simplest worked example).

## Zeeman Effect

Expanding the minimal-coupling Hamiltonian $\hat H=\frac{1}{2m_e}(\hat p-q\vec A)^2+q\phi$ for a uniform field $\vec B=B\hat z$ (using $\vec A=\tfrac12\vec B\times\vec r$) gives a perturbation
$$V=-\frac{q}{2m_e}\vec B\cdot\hat L+\frac{q^2B^2}{8m_e}(x^2+y^2)$$
The first (**paramagnetic**) term has the expected form $-\vec\mu\cdot\vec B$ with orbital moment $\vec\mu=\frac{q}{2m_e}\hat L$; the second (**diamagnetic**) term is smaller by a factor $\sim(a_B/l_B)^2\sim10^{-2}$ for atomic fields, so is usually negligible except when $\langle\hat L\rangle=0$ (e.g. $l=0$ states). Since the unperturbed hydrogen states $|n,l,m\rangle$ already diagonalise $\hat L_z$, ordinary (non-degenerate-basis-mixing) perturbation theory applies directly: $E_n^{(1)}=\langle n,l,m|V|n,l,m\rangle=-\frac{q B\hbar}{2m_e}m$. The magnetic field lifts the $m$-degeneracy, splitting each $l$-level into $2l+1$ evenly-spaced sublevels — the **Zeeman effect**. An analogous **spin Zeeman effect** arises from the electron's intrinsic magnetic moment $\vec\mu=-g\frac{qB}{2m_e}\hat S$ (with $g\approx2$).

## Stark Effect

An external electric field adds $V=e\mathcal E z$ to the Hamiltonian. For the **ground state** ($n=1$, non-degenerate), $\langle1,0,0|V|1,0,0\rangle=0$ by parity (the integrand is odd), so there's no first-order shift; the leading effect is second order,
$$E_1^{(2)}=-\sum_{n\ge2}\frac{|\langle1,0,0|V|n,1,0\rangle|^2}{E_1-E_n}\propto -\mathcal E^2$$
— a **quadratic Stark effect**, since the field must first induce a dipole moment (mixing in $l=1$ character) before it can couple to it. For **excited states** with degeneracy (e.g. $n=2$, with four degenerate states $|2,0,0\rangle,|2,1,-1\rangle,|2,1,0\rangle,|2,1,1\rangle$), $V$ is *not* diagonal in the natural basis — unlike Zeeman, where $\hat L_z$ and $V$ shared eigenstates — so degenerate perturbation theory is required. Diagonalising $\langle2,l,m|V|2,l',m'\rangle$ (non-zero only between $|2,0,0\rangle$ and $|2,1,0\rangle$, both $m=0$) gives eigenstates $\tfrac1{\sqrt2}(|2,0,0\rangle\pm|2,1,0\rangle)$ with energies shifted by $\pm v=\mp3e\mathcal Ea_0$ — a **linear Stark effect**, because these degenerate combinations already carry a permanent dipole moment before the field is applied (see [[Time-Independent Perturbation Theory and the Variational Method]] for the general degenerate-subspace machinery used here).

# Related
- [[Time-Independent Perturbation Theory and the Variational Method]]
