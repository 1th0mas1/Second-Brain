---
old: true
Tags:
  - year-2
Index:
Class:
  - Optics
Topics:
  - diffraction grating
  - resolving power
  - fabry-perot
  - polarization
  - scattering
  - birefringence
---
up: [[Optics.base]]

# Diffraction Gratings and Polarisation Phenomena

## Diffraction Gratings

A **diffraction grating** consists of many regularly-spaced slits; multi-slit interference produces sharp principal maxima wherever the path difference between adjacent slits is an integer number of wavelengths, $d\sin\theta=m\lambda$ (order $m$). Because different wavelengths satisfy this condition at different angles, the grating spatially disperses light by colour — the basic dispersing element of a spectrometer. The **resolving power** — the smallest wavelength difference $\Delta\lambda$ distinguishable at wavelength $\lambda$ — scales as
$$\frac{\lambda}{\Delta\lambda} \propto m N$$
(order $m$ times the number of illuminated grating lines $N$): narrower individual peaks (more interfering slits) and larger angular separation between orders (higher $m$) both sharpen spectral discrimination.

## Fabry-Pérot Etalon

A **Fabry-Pérot etalon** achieves much sharper spectral selectivity using just two closely-spaced, highly-reflective parallel surfaces: light bounces back and forth many times between them, and the transmitted beam is the sum of infinitely many multiply-reflected contributions, interfering constructively only at very narrow, sharply-peaked transmission wavelengths (an infinite-beam interference sum, unlike a grating's finite-$N$ sum). The peak sharpness is set by the **finesse** — higher mirror reflectivity means more round trips contribute meaningfully, giving narrower peaks — and the overall resolving power is finesse × order. Both gratings and etalons are standard components of real spectrometers, and this instrumentation — resolving individual spectral lines — is exactly what underlies remote sensing of atmospheric composition and temperature via measured absorption/emission line shapes.

## Polarisation from Scattering

An incident unpolarised EM wave drives the electrons in a scattering molecule into oscillation along the field direction, and this oscillating dipole re-radiates — but any dipole antenna is well known to radiate zero power exactly along its own oscillation axis (the dipole radiation pattern $\propto\sin^2\theta$ vanishes on-axis). For scattering observed at 90° to the incident beam, only the component of the induced dipole *perpendicular* to the line of sight can contribute, so the scattered light at that angle comes out (partially or fully) **linearly polarised**, transverse to the scattering plane. This is precisely the mechanism behind the well-known polarisation of clear blue skylight when viewed 90° from the sun (Rayleigh scattering off air molecules).

## Birefringence and Waveplates

**Birefringent** materials have a refractive index that depends on the polarisation direction and propagation direction relative to the material's internal crystal axis — light polarised along the "ordinary" axis and light polarised along the "extraordinary" axis travel at different phase velocities through the same physical thickness. Sending linearly polarised light in at 45° to the crystal axis splits it into equal ordinary and extraordinary components that accumulate a relative phase lag proportional to thickness and $\Delta n$. A **quarter-wave plate** (thickness giving a $\pi/2$ phase lag) converts linear polarisation to circular and vice versa; a **half-wave plate** ($\pi$ lag) rotates the linear polarisation direction by twice the angle between the input polarisation and the crystal axis — the standard toolkit for manipulating polarisation state in an optical setup.

# Related
- [[Einstein Coefficients and Laser Gain]]
- [[EM Waves in Media: Dielectrics, Plasmas and Fresnel Equations]]
