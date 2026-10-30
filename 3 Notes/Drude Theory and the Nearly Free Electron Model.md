---
old: true
Tags:
  - year-3
Index:
Class:
  - Condensed Matter Physics
Topics:
  - drude theory
  - conductivity
  - hall effect
  - nearly free electron model
  - band gap
  - degenerate perturbation theory
---
up: [[Condensed Matter Physics.base]]

# Drude Theory and the Nearly Free Electron Model

## Scattering and Ohm's Law

Drude applies Boltzmann kinetic theory of gases to electrons in a metal, via three assumptions: electrons scatter with characteristic time $\tau$ (probability $dt/\tau$ of scattering in interval $dt$); a scattering event resets momentum to zero on average (no preferred direction survives); between scattering events electrons of charge $-e$ respond freely to the Lorentz force. Averaging over the two outcomes of an interval $dt$ and dropping second-order terms gives the equation of motion
$$\frac{d\vec p}{dt} = \vec F - \frac{\vec p}{\tau}$$
with $\vec F=-e(\vec E+\vec v\times\vec B)$; the $-\vec p/\tau$ term acts as a drag, and with no applied field momentum simply decays as $\vec p(t)=\vec p_0e^{-t/\tau}$. In steady state ($d\vec p/dt=0$) under $\vec E$ alone, $m\vec v=\vec p=-e\tau\vec E$, giving current density $\vec j=-en\vec v=(ne^2\tau/m)\vec E$ — Ohm's law with conductivity $\sigma=ne^2\tau/m$ and mobility $\mu=e\tau/m$ (so $\sigma=ne\mu$). Measuring $\sigma$ alone only gives the combination $n\tau$.

## Hall Effect and Carrier Density

With crossed $\vec E$ and $\vec B$ (taking $\vec B=B\hat z$), steady state gives a $3\times3$ resistivity tensor with diagonal $\rho_{xx}=\rho_{yy}=\rho_{zz}=m/(ne^2\tau)$ but also an off-diagonal **Hall resistivity** $\rho_{xy}=-\rho_{yx}=B/ne$, since current and field are no longer parallel once the field bends electron trajectories. Defining the **Hall coefficient** $R_H=\rho_{yx}/|B|$, Drude theory predicts $R_H=-1/ne$, so measuring $R_H$ gives a direct, independent measurement of the carrier density $n=-1/(eR_H)$ (via the Hall voltage $V_H=R_HI|B|/t$ across a sample of thickness $t$). Historically this confirmed that carrier density tracks atomic valence — but it also threw up a puzzle: some metals give a *positive* $R_H$, implying positive charge carriers, which Drude theory alone cannot explain (the resolution requires band structure and holes).

## Perturbation Theory Away From Zone Boundaries

Opposite limit to tight-binding: start from free electrons $H_0=\vec p^2/2m$ with eigenstates $|\vec k\rangle$ and energies $\epsilon_0(\vec k)=\hbar^2k^2/2m$, and treat a weak periodic lattice potential $V(\vec r)=\sum_{\vec G}V_{\vec G}e^{i\vec G\cdot\vec r}$ (built only from reciprocal lattice vectors $\vec G$, since $V$ must share the lattice's periodicity) as a perturbation. First order just gives an uninteresting constant shift $\epsilon(\vec k)=\epsilon_0(\vec k)+V_0$. Second order gives
$$\epsilon(\vec k)=\epsilon_0(\vec k)+V_0+\sum_{\vec G\neq0}\frac{|V_{\vec G}|^2}{\epsilon_0(\vec k)-\epsilon_0(\vec k+\vec G)}$$
a small, generically smooth correction — ordinary non-degenerate perturbation theory, valid as long as no denominator vanishes.

## Degeneracy at Zone Boundaries and the Band Gap

That denominator vanishes when $\epsilon_0(\vec k)=\epsilon_0(\vec k+\vec G)$ for some $\vec G$. In 1D, since $\epsilon_0\sim k^2$, this forces $k'=-k=\pi n/a$ — exactly the **Brillouin zone boundaries**; the same geometric statement (a boundary point always has a degenerate partner reached by some $\vec G$) holds in any dimension. Here non-degenerate perturbation theory breaks down and **degenerate perturbation theory** is required: restricting to the two nearly-degenerate plane waves $|\vec k\rangle,|\vec k'\rangle=|\vec k+\vec G\rangle$, the relevant matrix elements are $\langle\vec k|V|\vec k\rangle=\epsilon_0(\vec k)$, $\langle\vec k'|V|\vec k'\rangle=\epsilon_0(\vec k')$, and $\langle\vec k|V|\vec k'\rangle=V_{\vec G}$, giving the $2\times2$ eigenvalue problem
$$\begin{pmatrix}\epsilon_0(k) & V_G \\ V_G^* & \epsilon_0(k+G)\end{pmatrix}$$
whose eigenvalues are $E_\pm=\tfrac12[\epsilon_0(k)+\epsilon_0(k')]\pm\sqrt{\tfrac14[\epsilon_0(k)-\epsilon_0(k')]^2+|V_G|^2}$. Exactly at the zone boundary $\epsilon_0(k)=\epsilon_0(k')$, so this collapses to $E_\pm=\epsilon_0\pm|V_G|$ — the degeneracy splits into two eigenvalues separated by $2|V_G|$, and this splitting *is* the **band gap**. Physically, gaps open exactly at zone boundaries because that is precisely where Bragg reflection off the periodic lattice strongly mixes forward- and backward-travelling plane waves, turning them into standing waves of different energy (one piled up on the ion cores, one between them).

# Related
- [[Statistical Description of a Gas and the Maxwell Distribution]]
- [[Tight Binding Model and Band Filling]]
- [[Reciprocal Lattice and Semiconductor Physics]]
- [[Time-Independent Perturbation Theory and the Variational Method]]
