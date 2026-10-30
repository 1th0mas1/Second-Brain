---
old: true
Tags:
  - year-3
Index:
Class:
  - Subatomic Physics
Topics:
  - alpha decay
  - gamow factor
  - quantum tunnelling
  - nuclear fission
  - fission energetics
---
up: [[Subatomic Physics.base]]

# Alpha Decay and Nuclear Fission

## Setup

$^A_ZX\to{}^{A-4}_{Z-2}Y+{}^4_2\text{He}$. Alpha emission is the dominant heavy-nucleus decay mode because the alpha particle is doubly magic (2 protons, 2 neutrons, both filled shells) and hence very tightly bound — the binding-energy-per-nucleon gain along most of the chain is only $\sim0.1$ MeV/nucleon, too small to drive fast decay unless the ejected fragment is itself unusually stable. Treating the alpha as a pre-formed particle inside the nucleus, it sits in a potential that is an attractive nuclear (Woods-Saxon-like) well at short range plus a repulsive Coulomb tail outside the nuclear surface, with a peak roughly
$$V_\text{max}\sim\frac{2(Z-2)e^2}{4\pi\epsilon_0 r_0A^{1/3}}\approx2.4\frac{(Z-2)}{A^{1/3}}\text{ MeV},$$
typically tens of MeV — far above the observed decay energy $Q$, so classically the alpha could never escape. It must **quantum tunnel** through this Coulomb barrier.

## Derivation and the Gamow Factor

For a rectangular barrier of height $V_0$ and width $d$, the transmitted amplitude falls as $e^{-\kappa d}$ with $\kappa=\sqrt{2m(V_0-E)}/\hbar$, so the transmission probability $\propto e^{-2\kappa d}$. For the smoothly varying Coulomb barrier, $\kappa d\to\int\kappa(r)\,dr$ over the classically forbidden region, giving transmission probability $e^{-2G}$ with the **Gamow factor**
$$G = \frac{\sqrt{2m}}{\hbar}\int\sqrt{V(r)-Q}\,dr = \frac{\sqrt{2mQ}}{\hbar}\int\sqrt{\frac{2(Z-2)e^2}{4\pi\epsilon_0Qr}-1}\,dr.$$
For small $Q$ the outer turning point is much larger than the nuclear radius, and the integral approximates to $(Z-2)e^2/4\epsilon_0Q$, giving
$$G\approx2.0\frac{(Z-2)}{\sqrt Q}\text{ MeV}^{-1/2}.$$
Writing the decay rate as $R=1/\tau=ae^{-2G}$ gives
$$\log_{10}R = \log_{10}a - 1.7\frac{(Z-2)}{\sqrt Q}$$
— an exponential sensitivity to $Q$ (and hence to how far above the barrier peak the decay energy sits) that explains why alpha-decay half-lives span from microseconds to billions of years for only modest changes in $Q$: a factor of a few in $Q$ shifts $\tau$ by many orders of magnitude. This is the same tunnelling logic as barrier penetration in ordinary QM, and the identical exponential suppression reappears (with $Q\to E$) in fusion tunnelling through the Gamow peak.

## Energy Release

Since binding energy per nucleon peaks around $^{56}_{26}$Fe, splitting a nucleus much heavier than this into lighter fragments releases energy — **fission**. Splitting into two *equal* fragments typically maximises the energy release,
$$Q = 2\,BE(Z/2,N/2) - BE(Z,N),$$
which can be estimated directly from the SEMF. The volume terms cancel exactly (mass is conserved), the asymmetry term cancels too, leaving
$$Q = a_sA^{2/3}(1-2^{1/3}) + a_c\frac{Z^2}{A^{1/3}}(1-2^{-2/3}),$$
i.e. fission is driven by the *reduction* in Coulomb repulsion energy on splitting into two smaller, less-charged drops, partially offset by the *increase* in surface energy from creating two new surfaces. Requiring $Q>0$ gives the condition $Z^2/A\gtrsim17$, satisfied on the beta-stability curve only for $A\gtrsim100$ — though in practice spontaneous fission isn't actually observed until $A\gtrsim230$, since energetic favourability alone doesn't guarantee a fast rate.

## Barrier and Tunnelling

Whether fission proceeds quickly depends on whether *deforming* the nucleus (the first step toward splitting) costs energy — a competition between the surface term (which always opposes deformation away from a sphere, the shape of minimum surface area) and the Coulomb term (which favours deformation, since it separates protons). For small ellipsoidal deformation $\delta$, the surface energy cost goes as $a_sA^{2/3}(2\delta^2/5)$ while the Coulomb energy gain goes as $a_cZ^2\delta^2/5A^{1/3}$; Coulomb wins once $Z^2/A\gtrsim50$, i.e. no barrier at all — such nuclei ($A\gtrsim407$) don't exist, setting an absolute upper limit on the periodic table. For the intermediate range $18\lesssim Z^2/A\lesssim50$ (essentially all known heavy nuclei), fission is energetically allowed but there is a genuine barrier to deform through, so the nucleus must **quantum tunnel** — the same Gamow-type exponential suppression as Alpha Decay and Nuclear Fission, which is why spontaneous fission half-lives span some 30 orders of magnitude and, even for very heavy nuclei like $^{238}$U, remain far slower than competing alpha decay ($10^{16}$ vs $10^9$ years). **Induced fission** (e.g. neutron capture, which adds excitation energy without a Coulomb penalty since the neutron is uncharged) can push a nucleus over the barrier directly, decaying within $\sim10^{-20}$s — the basis of reactor and weapon chain reactions.

# Related
- [[Liquid Drop Model and the Semi-Empirical Mass Formula]]
- [[Time-Independent Perturbation Theory and the Variational Method]]
