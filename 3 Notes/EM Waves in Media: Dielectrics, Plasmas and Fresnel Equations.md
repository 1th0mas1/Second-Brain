---
old: true
Tags:
  - year-2
Index:
Class:
  - Electromagnetism
Topics:
  - refractive index
  - skin depth
  - radiation pressure
  - plasma frequency
  - plasma dispersion relation
  - ionosphere
  - fresnel equations
  - total internal reflection
  - evanescent wave
---
up: [[Electromagnetism.base]]

# EM Waves in Media: Dielectrics, Plasmas and Fresnel Equations

## Dielectrics: Reduced Speed

In a linear dielectric, Maxwell's equations give the same wave equation as in vacuum but with $\varepsilon_0\to\varepsilon_0\varepsilon_r$, $\mu_0\to\mu_0\mu_r$, so the wave speed drops to $c/n$ with **refractive index** $n=\sqrt{\varepsilon_r\mu_r}$ (usually $\mu_r\approx1$ for non-magnetic dielectrics, so $n\approx\sqrt{\varepsilon_r}$). The wave itself is undamped — energy just propagates more slowly, since the oscillating polarisation of the medium re-radiates and interferes with the original wave.

## Conductors: Damping and Skin Depth

In a **conductor**, Ohm's law $\vec J=\sigma\vec E$ supplies a free current that couples back into Ampère's law, adding a first-order damping term to the wave equation (structurally like a driven, damped oscillator equation). Seeking plane-wave solutions $e^{i(kz-\omega t)}$ then forces $k$ itself to be **complex**: the real part sets the oscillation wavelength as usual, but the imaginary part produces exponential decay into the conductor, with **skin depth**
$$\delta\sim\sqrt{\frac{2}{\mu_0\sigma\omega}}$$
the distance over which the field amplitude falls by $1/e$. A **good conductor** (large $\sigma$) has a tiny skin depth — fields barely penetrate at all, currents flow only in a thin surface layer, and the interior is effectively field-free — the basis of electromagnetic shielding and why waveguide/cavity walls can be treated as ideal reflectors. A **poor conductor** (small $\sigma$) has $\delta$ large compared to the wavelength and behaves more like a lossy dielectric, with weak, gradual attenuation.

## Radiation Pressure

Since the EM field carries momentum as well as energy (Poynting flux $\vec N$), light exerts **radiation pressure** on whatever it strikes: $P_\text{rad}=\langle N\rangle/c$ for a fully absorbing surface (all momentum delivered), or $2\langle N\rangle/c$ for a fully reflecting surface (momentum reversed, so twice the momentum transfer) — small in everyday terms but the dominant force in stellar radiation pressure and the basis of solar sails.

## Effective Permittivity of a Cold Plasma

Treating the free electrons in a cold, collisionless plasma as driven harmonically (no restoring force, just inertia) by an oscillating field $\vec E\propto e^{-i\omega t}$, Newton's second law gives an oscillating electron velocity and hence a free current that feeds back into Maxwell's equations exactly like a polarisation response. Working through this gives an effective relative permittivity
$$\varepsilon_r = 1-\frac{\omega_p^2}{\omega^2}, \qquad \omega_p=\sqrt{\frac{ne^2}{m\varepsilon_0}}$$
the **plasma frequency**, set purely by the electron number density $n$ (heavier, more sluggish ions barely respond on these timescales and are usually neglected).

## Propagation Threshold and Dispersion

The refractive index is $\tilde n=\sqrt{\varepsilon_r}=\sqrt{1-\omega_p^2/\omega^2}$. For $\omega>\omega_p$, $\tilde n$ is real and the wave propagates with reduced phase velocity; for $\omega<\omega_p$, $\tilde n$ is purely imaginary, so the wave decays evanescently and is reflected rather than transmitted. This threshold behaviour explains two everyday phenomena: metals are shiny (reflective) at optical frequencies because $\omega_p$ for their free-electron density lies in the ultraviolet, above visible light, but become transparent to X-rays (well above $\omega_p$); and the ionosphere reflects radio waves below its (much lower) plasma frequency, letting AM radio bounce around the globe, while being transparent to higher-frequency signals used for satellite communication.

The dispersion relation is $\omega^2=\omega_p^2+c^2k^2$, giving group velocity $v_g=d\omega/dk=c\sqrt{1-\omega_p^2/\omega^2}$ — it vanishes as $\omega\to\omega_p^+$ (wave barely propagates right at threshold) and approaches $c$ as $\omega\to\infty$ (far above threshold, the plasma barely perturbs the wave). The plasma supports two independent normal modes: ordinary transverse EM waves (propagating for $\omega>\omega_p$, as above), and a purely **longitudinal** mode existing only exactly at $\omega=\omega_p$ — collective density oscillations of the electron gas (plasma oscillations) with no accompanying magnetic field.

## Snell's Law and the Fresnel Coefficients

Matching the tangential $\vec E$ and $\vec H$ boundary conditions across a plane interface between two media, for an incident plane wave, forces the reflected and transmitted waves to share the same frequency and the same component of wavevector parallel to the interface — this shared-$k_\parallel$ condition *is* **Snell's law**, $n_1\sin\theta_i=n_2\sin\theta_t$. Applying the full boundary conditions (not just phase-matching) then fixes the amplitudes of the reflected and transmitted waves: the **Fresnel equations**. These depend on polarisation relative to the plane of incidence — **s-polarised** ($\vec E$ perpendicular to the plane of incidence) and **p-polarised** ($\vec E$ within the plane) light have different reflection/transmission coefficients, which is why reflected light off a non-normal surface is partially polarised (Brewster's angle is the special case where the p-polarised reflection coefficient vanishes entirely).

## Total Internal Reflection and Evanescent Waves

Going from higher to lower refractive index ($n_1>n_2$), Snell's law demands $\sin\theta_t=(n_1/n_2)\sin\theta_i$, which exceeds 1 — has no real solution — beyond a **critical angle** $\theta_c=\arcsin(n_2/n_1)$. Past this angle, **total internal reflection** occurs: all incident power is reflected, and formally continuing the transmitted wave's wavevector into complex values gives an **evanescent wave** on the far side — an exponentially decaying field confined to within roughly a wavelength of the interface, oscillating in time but not propagating, and carrying zero net time-averaged energy flux away from the boundary (the Poynting vector's normal component averages to zero even though the near-field amplitude is non-zero). This evanescent field is what's exploited in frustrated total internal reflection and near-field/evanescent-wave microscopy.

# Related
- [[Maxwell's Equations: Capacitance, Displacement Current and EM Waves]]
- [[Dispersion, Phase and Group Velocity and Impedance]]
