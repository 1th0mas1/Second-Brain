---
old: true
Tags:
  - year-1
Index:
Class:
  - Symmetry and Relativity
Topics:
  - lorentz transformation
  - einstein's postulates
  - spacetime interval
  - time dilation
  - length contraction
  - proper time
---
up: [[Symmetry and Relativity.base]]

# Lorentz Transformations, Time Dilation and Length Contraction

**Einstein's postulates**: physics is the same in all inertial frames; light travels at $c$ in every frame (killed the aether model — no fringe shift seen in Michelson-Morley). Michelson-Morley compared light travel times along perpendicular paths of length $l$ through a hypothesised aether wind of speed $v$: the along-wind round trip $t_1=\frac{l}{c+v}+\frac{l}{c-v}\approx\frac{2l}{c}\left(1+\frac{v^2}{c^2}\right)$ and the cross-wind trip $t_2\approx\frac{2l}{c}\left(1+\frac12\frac{v^2}{c^2}\right)$ should have differed by $\Delta t=lv^2/c^3\ne0$, producing a fringe shift as the apparatus rotated. None was seen — the null result Einstein's postulates were built to explain, without invoking any aether at all.

## The Lorentz Transformation
Define the **Lorentz factor** $\gamma=1/\sqrt{1-(v/c)^2}$, which is always $\ge1$ and diverges as $v\to c$. The transformation between frame $S$ and a frame $S'$ moving at velocity $v$ along $x$ is
$$x'=\gamma(x-vt), \qquad t'=\gamma\left(t-\frac{vx}{c^2}\right)$$
Energy and momentum transform the same way: $E'=\gamma(E-vp)$, $p'=\gamma(p-vE/c^2)$ — the pairs $(ct,x)$ and $(E/c,p)$ transform identically, which is why both are treated as four-vectors. In matrix form, $(ct',x')^T=\Lambda(ct,x)^T$ with
$$\Lambda=\begin{pmatrix}\gamma&-\beta\gamma\\-\beta\gamma&\gamma\end{pmatrix}, \quad \beta=v/c$$
a symmetric matrix, suggestive of (but not identical to) a rotation mixing space and time. As $v\ll c$, $\gamma\to1$ and the transformation reduces to the familiar Galilean $t'\to t$, $x'\to x-vt$.

## The Invariant Interval
Ordinary rotations leave the Euclidean length $x^2+y^2+z^2$ unchanged; Lorentz transformations instead leave the **spacetime interval** unchanged:
$$s^2=c^2t^2-x^2-y^2-z^2$$
This is the "dot product" of the four-vector $(ct,x,y,z)$ with itself under a non-standard (mixed-signature) metric — substituting the Lorentz transformation into $s'^2$ and expanding confirms $s'^2=s^2$ for any $v$. Because the interval, not ordinary distance, is preserved, this is a "rotation" only in a generalised sense; it's the invariance of $s^2$ that underlies time dilation, length contraction, and the classification of events as time-like, light-like, or space-like separated (see [[Relativistic Kinematics: Velocity Addition, Doppler Effect and Four-Vectors]]).

## Time Dilation
**Proper time** is the interval between two events measured by a clock at rest relative to them — the shortest possible measurement of that interval. Consider a clock at rest in frame $S'$ (moving at $v$ relative to $S$), ticking at two events with proper-time separation $\Delta t'=t_2'-t_1'$, both occurring at the same location $x_1'=x_2'$ in $S'$ (since the clock doesn't move in its own frame). Applying the inverse Lorentz transformation, $\Delta t = \gamma\left(\Delta t' - \frac{v\Delta x'}{c^2}\right)$, and setting $\Delta x'=0$ collapses this to
$$\Delta t = \gamma \Delta t'$$
Since $\gamma\ge1$, the time interval measured in $S$ (where the clock is moving) is always longer than the proper time $\Delta t'$ — a moving clock runs slow as seen by a stationary observer. This is symmetric: each observer sees the *other's* clock run slow, since "moving" is frame-dependent.

## Length Contraction
**Proper length** is the length of an object measured in its own rest frame. Now consider a rod at rest in $S'$ with proper length $\Delta x'=x_2'-x_1'$, and an observer in $S$ who must measure both ends *simultaneously* ($t_1=t_2$) to get a sensible length. Applying the transformation $x'=\gamma(x+vt)$ to each end and subtracting, $\Delta x' = \gamma(\Delta x + v\Delta t)$; setting $\Delta t=0$ (simultaneity in $S$) gives
$$\Delta x = \frac{\Delta x'}{\gamma}$$
So the length measured in $S$ is shorter than the proper length — a moving object appears contracted along its direction of motion only (transverse dimensions are unaffected, since $y'=y$, $z'=z$ in the transformation). Both effects stem from the same source: what counts as "at the same place" or "at the same time" is frame-dependent once simultaneity is relative, and the Lorentz transformation is precisely the bookkeeping that keeps this consistent between observers.

# Related
- [[Relativistic Kinematics: Velocity Addition, Doppler Effect and Four-Vectors]]
- [[Relativistic Kinematics: Velocity Addition, Doppler Effect and Four-Vectors]]
