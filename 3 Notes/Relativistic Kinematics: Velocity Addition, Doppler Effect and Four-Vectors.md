---
old: true
Tags:
  - year-1
Index:
Class:
  - Symmetry and Relativity
Topics:
  - velocity addition
  - spacetime diagram
  - light cone
  - doppler shift
  - redshift
  - superluminal motion
  - four-momentum
  - mass-energy equivalence
  - invariant mass
---
up: [[Symmetry and Relativity.base]]

# Relativistic Kinematics: Velocity Addition, Doppler Effect and Four-Vectors

## Velocity Addition
Classically, two spaceships approaching each other each at $0.6c$ (in some observer's frame) would have relative velocity $1.2c$ — impossible. Relativity fixes this by transforming the *rate of change of position*, not just adding velocities directly. For an object with velocity $u=dx/dt$ in frame $S$, its velocity $u'=dx'/dt'$ in $S'$ (moving at $v$ relative to $S$) follows by substituting the differential Lorentz transformations $dx'=\gamma(dx-v\,dt)$, $dt'=\gamma(dt-v\,dx/c^2)$ and dividing:
$$u' = \frac{dx'}{dt'}=\frac{dx-v\,dt}{dt-\frac{v}{c^2}dx}=\frac{\frac{dx}{dt}-v}{1-\frac{v}{c^2}\frac{dx}{dt}}=\frac{u-v}{1-uv/c^2}$$
The denominator is what keeps $|u'|<c$ whenever $|u|,|v|<c$ — plugging in $u=v=c$ gives $u'=c$ exactly, consistent with the second postulate, and for $u,v\ll c$ the denominator $\to1$, recovering ordinary Galilean addition.

## Spacetime Diagrams
A **spacetime diagram** plots position against time (often $ct$ vertically, $x$ horizontally, so light travels at $45°$). An object's trajectory is its **worldline**: vertical for an object at rest, tilted for a moving one, with steeper lines corresponding to slower speeds (a worldline can never tilt past $45°$, since nothing exceeds $c$). The invariant interval $(\Delta s)^2=c^2\Delta t^2-\Delta x^2$ between two events classifies their causal relationship regardless of frame:
- $(\Delta s)^2>0$: **time-like** separated (inside the light cone) — a causal signal can connect them, and observers may disagree on the time order of unrelated events but never on the order of causally-connected ones.
- $(\Delta s)^2=0$: **light-like** (on the light cone) — only a light signal connects them exactly.
- $(\Delta s)^2<0$: **space-like** (outside the light cone) — no causal influence is possible between them, and different observers can even disagree on which event happened first.

This causal structure is what the Lorentz transformation is built to protect: since $s^2$ is invariant (see [[Lorentz Transformations, Time Dilation and Length Contraction]]), whether two events can influence each other is a frame-independent fact even though their individual time and space coordinates are not.

## Derivation
Consider a source emitting successive signals with proper period $\tau'$ (its own rest-frame period, subject to time dilation itself), moving directly away from an observer at speed $v$. In the observer's frame, using the Lorentz transformation, the first signal is emitted at $t=0,x=0$ and the second at $t=\gamma\tau'$, $x=v\gamma\tau'$ (time-dilated emission time, and the source has moved on by then). The observer doesn't receive the second signal until light from that later position also arrives, adding a light travel-time delay $x/c$:
$$\tau = \gamma\tau' + \frac{x}{c} = \gamma\tau'\left(1+\frac{v}{c}\right) = \tau'\sqrt{\frac{1+\beta}{1-\beta}}, \qquad \beta = v/c$$
(using $\gamma(1+\beta)=\sqrt{(1+\beta)/(1-\beta)}$). Unlike the classical Doppler effect, this combines the ordinary "light travel time" shift with genuine relativistic time dilation, and depends only on the relative recession speed — there's no separate "source moving" vs "observer moving" case, consistent with there being no preferred frame.

## Redshift, Blueshift and Superluminal Motion
For a receding source ($v>0$), $\tau>\tau'$: the observed period is stretched, so wavelengths measured are longer — **redshift**. For an approaching source, the same formula with $v\to-v$ gives $\tau<\tau'$ — **blueshift**. This is the standard tool for measuring radial velocities of astronomical objects (planets, binary stars, receding galaxies) purely from their spectral line shifts.

**Superluminal motion**: an object moving obliquely to the line of sight (e.g. a jet from a quasar) can have its *projected* position on the sky appear to move faster than $c$, because the object is partially closing the light-travel-time gap as it moves across the field of view, compressing the apparent time between observed positions. No actual information travels faster than $c$ — it's a geometric projection effect, not a violation of relativity.

## Energy, Momentum and the Invariant Mass
Einstein's mass-energy equivalence generalises to moving particles by including the rest mass $m_0$ and Lorentz factor:
$$E=\gamma m_0c^2, \quad \vec p=\gamma m_0\vec v, \quad \text{KE}=E-m_0c^2=(\gamma-1)m_0c^2, \quad m=\gamma m_0$$
Combining $E$ and $p$ to eliminate $\gamma$: $E^2-p^2c^2=\gamma^2m_0^2(c^4-v^2c^2)=\gamma^2m_0^2c^4(1-v^2/c^2)=m_0^2c^4$ (using $\gamma^2(1-v^2/c^2)=1$ by definition of $\gamma$). So
$$E^2-p^2c^2 = m_0^2c^4$$
is a Lorentz-invariant combination — it comes out the same in every frame, since $m_0$ and $c$ are universal constants. This is exactly analogous to the invariant spacetime interval $s^2=c^2t^2-x^2$ (see [[Lorentz Transformations, Time Dilation and Length Contraction]]): energy and momentum form a **four-vector** $p^\mu=(E/c,\vec p)$ that transforms under Lorentz transformations exactly like $(ct,\vec x)$, and $E^2-p^2c^2$ is its invariant "length" under the same mixed-signature dot product, $p^\mu\cdot p^\mu=E^2/c^2-p^2=m_0^2c^2$. Four-momentum is conserved in any interaction (it stores all the dynamical information at once), which makes it the natural conserved quantity for relativistic collision problems.

## Limiting Cases
For **photons**, $m_0=0$, so $E^2-p^2c^2=0$ exactly, giving $p=E/c=h\nu/c=h/\lambda$ — a particle with momentum but no rest mass, only possible because $p=\gamma m_0v$ is a genuine $0\times\infty$ limit as $v\to c$. In the **non-relativistic limit** ($v\ll c$), expanding $\gamma\approx1+\tfrac12v^2/c^2$ gives $\text{KE}=(\gamma-1)m_0c^2\approx\tfrac12m_0v^2$, recovering the familiar classical formula as required. In the **ultra-relativistic limit** ($E\gg m_0c^2$, e.g. particle accelerators), the rest-mass term becomes negligible in $E^2=p^2c^2+m_0^2c^4$, so $E\approx pc$ — the particle behaves almost like a photon.

# Related
- [[Lorentz Transformations, Time Dilation and Length Contraction]]
- [[Lorentz Transformations, Time Dilation and Length Contraction]]
