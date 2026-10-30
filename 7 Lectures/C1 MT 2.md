---
tags:
  - w-ing
Class:
  - Astrophysics
Date: 2026-10-14
Topics:
Index: 2
---




# Overview



# Notes

## Newtonian evolution of cosmological pert

- treat matter as ideal, non relativistic, self-gravity, fluid

### Dynamic equations

- must have mass conservation
$$
\frac{dM}{dt} = \int \frac{ \partial \rho{} }{ \partial t } dV = -\oint \rho{} \underline{u}\cdot{}d\underline{s}
$$
- use divergence theorem to see
$$
\frac{ \partial \rho{} }{ \partial t } [\underline{r},t]+\frac{\partial{}}{\partial{}\underline{r}}(\rho{}\underline{u})[\underline{r},t]=0{}
$$
- $\underline{r}{}$ is position of fluid in proper coordinate, $\underline{v}{}$ is its corresponding velocity

### Conservation of momentum

$$
\frac{ \partial \underline{u} }{ \partial t } [\underline{r},t] + \left(  \underline{u}\cdot{}\frac{ \partial  }{ \partial \underline{r} }  \right) \underline{u}[\underline{r},t] = -\frac{ \partial  }{ \partial \underline{r} } \Psi{}[\underline{r},t]- \frac{1}{\rho{}}\frac{ \partial  }{ \partial \underline{r} } P[\underline{r},t]
$$
- here $\Psi{}{}$ is the gravitational potential which obeys Poisson equation
$$
\left( \frac{ \partial  }{ \partial \underline{r} }  \right) ^{2}\Psi{} [\underline{r},t] =4\pi{} G \rho{} [\underline{r},t]
$$
---

- make the change to comoving coordinates using $\underline{x}= \underline{r}/a(t){}$
$$
\underline{u} = \underbrace{\dot{a}\underline{x}}_{\text{Hubble flow}} +\underbrace{\underline{v}[\underline{x},t]}_{\text{peculiar velocity}}
$$
- with comoving coordinates we now need to do coordinate transformation
$$
\begin{align}
\left( \frac{ \partial  }{ \partial r }  \right)_{t}  & = \frac{1}{a} \left( \frac{\partial{}}{\partial{}\underline{x}} \right)_{t} \\
\left( \frac{ \partial  }{ \partial t }  \right) _{r}  &  = \left( \frac{ \partial  }{ \partial t }  \right) _{x} - \frac{\dot{a}}{a} \underline{x}\left( \frac{ \partial  }{ \partial \underline{x} }  \right)_{t}
\end{align}
$$
- we can now rewrite our equations
$$
\begin{align}
\frac{ \partial \rho{} }{ \partial t } [\underline{x},t]+3\frac{\dot{a}}{a}\rho{}[\underline{x},t]+\frac{1}{a}\frac{ \partial  }{ \partial \underline{x} } (\rho{}\underline{v})[\underline{x}t] & =0 \\
\frac{ \partial \underline{v} }{ \partial t } [\underline{x},t]+\frac{1}{a}\left( \underline{v}\cdot{}\frac{ \partial  }{ \partial \underline{x} }  \right) \underline{v}[\underline{x},t]+\frac{\dot{a}}{a}\underline{v}[\underline{x},t] & =-\frac{1}{a}\frac{ \partial  }{ \partial \underline{x} } \psi{}[\underline{x},t] - \frac{1}{a\rho{}}\frac{ \partial  }{ \partial \underline{x} } P[\underline{x},t] \\
\left( \frac{1}{a}\frac{ \partial  }{ \partial \underline{x} }  \right) ^{2}\phi{}[\underline{x},t] & = 4\pi{} G \rho{} [\underline{x},t] + 3 \frac{ \ddot{a}}{a}
\end{align}
$$
- here $\phi{}{}$ is a modified potential such that
$$
\phi{} = \psi{}+\frac{1}{2}a \ddot{a}\underline{x}^{2}
$$
---
- now we make a slight perturbation
$$
\begin{align}
\rho{}[\underline{x},t]  & = \bar{\rho{}}(t)(1+\delta{}[\underline{x},t]) \\
\underline{v}[\underline{x},t] & \ll \dot{a}\underline{x} \\
P[\underline{x},t] & = \bar{P}[t]+\delta{}P[\underline{x},t] = \bar{P}[t]+\left( \frac{ \partial P }{ \partial \rho{} }  \right)_{S}\delta{}\rho{} [\underline{x},t] \\
 & =\bar{P}[t]+c_{s}^{2}\bar{\rho{}}\delta{}[\underline{x},t]
\end{align}
$$
- where we're considering adiabatic hence holding constant entropy $S{}$
- for adiabatic perturbations with associated speed of sound $c_{s}{}$
$$
\phi{}[\underline{x},t]\ll \frac{1}{2}a \ddot{a}\underline{x}^{2}
$$
-  subbing this back in we find
$$
\begin{align}
\frac{ \partial \delta{} }{ \partial t } [\underline{x},t]+\frac{1}{a}\frac{ \partial \underline{v} }{ \partial \underline{x} } [\underline{x},t] & = 0 \\
\frac{ \partial \underline{v} }{ \partial t } [\underline{x},t]+\frac{\dot{a}}{a}\underline{v}[\underline{x},t] & = - \frac{1}{a}\frac{ \partial  }{ \partial \underline{x} } \phi{}[\underline{x},t]- \frac{c_{s}^{2}}{a}\frac{ \partial  }{ \partial \underline{x} } \delta{}[\underline{x},t] \\
\nabla_{\underline{x}}^{2}\phi{}[\underline{x},t] & = 4\pi{} G \bar{ \rho{}}a^{2}\delta{}[\underline{ x},t]
\end{align}
$$
- we can rewrite the final equation as
$$
\left( \frac{ \partial  }{ \partial \underline{x} }  \right) ^{2}\phi{} = \frac{3}{2}\Omega{}_{m}(t)H(t)a^{2}\delta{}
$$
- where $\Omega{}_{m}(t)= \bar{\rho{}}_{m}(t)/\rho{}_{c}(t){}$
- we combine to get equation
$$
\ddot{\delta{}}[\underline{x},t] + 2H \dot{\delta{}}[\underline{x},t]-\frac{c_{s}^{2}}{a^{2}}\nabla_{\underline{x}}^{2}\delta{}[\underline{x},t]= 4\pi{}G \bar{ \rho{}}\delta{}[\underline{ x},t]
$$
---
- we take fourier transform (we should have a twiddle but by it being a function of $k{}$ the fourier transform is implied)
$$
\delta{}[\underline{x},t] \equiv \frac{1}{(2\pi{})^{3}}\int d^{3}k \delta{}_{\underline{k}}\exp(-i\underline{k}\cdot{}\underline{x})
$$
- thus we find
$$
\ddot{\delta{}}_{\underline{k}}+2H \dot{\delta{}}_{\underline{k}}+\left( \frac{c_{s}^{2}}{a^{2}}k^{2}-4\pi{} G \bar{ \rho{}} \right) \delta{}_{\underline{k}}=0
$$
- now introduce **conformal time** $d \eta \equiv dt/a{}$
	- we go from $\dot{~}{}$ meaning $\partial{}/\partial{}t{}$ to $'{}$ meaning $\partial{}/\partial{} \eta{}$

$$
\boxed{\delta{}_{\underline{k}}''+\mathcal{H}\delta{}_{\underline{k}}'+(c_{s}^{2}k^{2}-4\pi{} G a^{2} \bar{\rho{}})\delta{}_{\underline{k}}=0}
$$
- here $\mathcal{H}\equiv a'/a{}=aH$

---
- we smooth our function with $\delta{}(\underline{x},t)\to{} \delta{}_{\Lambda{}}(\underline{x}){}$
$$
\begin{align}
\delta{}'_{\Lambda{}} + \frac{\partial{}}{\partial{}x_{i}}[(1+\delta{}_{\Lambda{}})u_{i}^{\Lambda{}}] & =0 \\
\left( \frac{ \partial  }{ \partial x }  \right)^{2}\phi{}_{\Lambda{}} & = \frac{3}{2} \mathcal{H}\Omega{}_{m}\delta{}_{\Lambda{}} \\
{u_{i}^{\Lambda{}}}' + u_{j}^{\Lambda{}}\frac{ \partial  }{ \partial x_{j} } u_{i}^{\Lambda{}} & = -\mathcal{H}u_{i}^{\Lambda{}} -\frac{ \partial \phi{}_{\Lambda{}} }{ \partial x_{I} } 
\end{align}
$$


# Related

