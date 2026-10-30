---
old: true
Tags:
  - year-3
Index:
Class:
  - Condensed Matter Physics
Topics:
  - tight binding model
  - energy bands
  - effective mass
  - bandwidth
  - band filling
  - fermi surface
  - metal vs insulator
---
up: [[Condensed Matter Physics.base]]

# Tight Binding Model and Band Filling

## Setting Up the Model

Model electrons as localised atomic orbitals $|n\rangle$ on a periodic chain, one per site, with full Hamiltonian $H=K+\sum_jV_j$ ($V_j$ the Coulomb potential of the nucleus at site $j$). Since $K+V_m$ alone is just the single-atom Hamiltonian with eigenvalue $\epsilon_\text{atomic}$, the matrix elements split as $H_{nm}=\epsilon_\text{atomic}\delta_{nm}+\sum_{j\neq m}\langle n|V_j|m\rangle$, where the second term lets an electron transfer between nearby sites via the potential of some other nucleus. Truncating to nearest neighbours only defines the **hopping** matrix element $t$ (and an on-site shift $V_0$, absorbed into $\epsilon_0=\epsilon_\text{atomic}+V_0$):
$$H_{nm}=\epsilon_0\delta_{nm}-t(\delta_{n+1,m}+\delta_{n-1,m})$$
with $t$'s magnitude set by how close together (how overlapping) the orbitals are.

## Dispersion, Bandwidth and Effective Mass

A plane-wave ansatz $\phi_m=e^{-ikma}/\sqrt N$ (for $N$ sites, periodic boundary conditions quantising $k$ in units of $2\pi/L$, $L=Na$) solves the effective Schrödinger equation and gives the dispersion
$$E(k) = \epsilon_0 - 2t\cos(ka)$$
Unlike free electrons, this is bounded: a finite **band** of allowed energies running from $\epsilon_0-2t$ (at $k=0$, the bonding state) to $\epsilon_0+2t$ (at $k=\pi/a$, the antibonding state), so the **bandwidth** is $4t$ — set entirely by the hopping strength, i.e. how much orbitals overlap between neighbouring atoms. In the limit of well-separated atoms ($t\to0$) the band collapses back to $N$-fold degenerate atomic levels at $\epsilon_0$.

Expanding near the band bottom, $\cos(ka)\approx1-(ka)^2/2$ gives $E(k)\approx(\epsilon_0-2t)+ta^2k^2$ — parabolic like a free particle, matching $\hbar^2k^2/2m^*$ with **effective mass** $m^*=\hbar^2/2ta^2$, which encodes lattice effects (hopping, lattice spacing) but has nothing to do with the true electron mass (and if $t<0$, the band minimum sits at the zone boundary instead of $k=0$). Multiple orbitals per unit cell give multiple bands, with a **band gap** separating them when atoms are well-separated; as atomic separation shrinks, hopping increases, bands broaden, and the gap can close. Filling $N$ such $k$-states with electrons (two per state by spin) connects directly to whether the resulting solid is a metal or insulator.

## Counting States and the Fermi Surface

With $N$ atoms in a chain of length $L=Na$ and periodic boundary conditions, the allowed $k$-states are quantised in units of $2\pi/L$, giving exactly $N$ distinct $k$-states in a band. Spin doubles the capacity, so a band holds $2N$ electrons when completely full. A **mono-valent** solid (one electron donated per atom into the band) therefore only half-fills it: $N$ electrons occupy the lowest $N$ of $2N$ available states, leaving a sharp boundary between filled and empty $k$-states — the **Fermi surface** — sitting inside the band.

Because states are available immediately above the Fermi surface, an applied electric field can shift the whole distribution of occupied $k$-states slightly (some states moving one way depopulate, others populate) at negligible energy cost. This asymmetric occupation means $dE/dk$ no longer averages to zero across the filled states, so a net current flows — this is precisely what makes a mono-valent solid a **metal**.

## Multiple Bands and the Insulator Condition

A **di-valent** solid (one orbital per atom, two electrons per atom) supplies exactly $2N$ electrons, which completely fill the band. With every state occupied there are no nearby empty states for an applied field to shift electrons into, so a filled band **carries no current** — a **band insulator** — provided there is a finite gap to the next band above. Equivalently, for chemists: a band insulator is simply a material where every electron is tied up in a (bonding) orbital.

The same logic applies with multiple orbitals per unit cell, which produce multiple bands. A mono-valent solid with two atoms (two orbitals) per unit cell can still be an insulator if its lower band is completely filled by the available electrons and the upper band stays empty, since promoting an electron across the gap costs a finite energy that a small field cannot supply. As atoms are pushed closer together, orbital overlap and hence the hopping/tunnelling amplitude increase, broadening the bands; if the gap closes as a result, the material crosses over from insulator to metal.

# Related
- [[Debye Model and Chemical Bonding]]
- [[Drude Theory and the Nearly Free Electron Model]]
- [[Degenerate Fermi Gas, Heat Capacity and Bose-Einstein Condensation]]
