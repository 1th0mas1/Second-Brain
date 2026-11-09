---
tags:
  - w-ing
Class:
  - Atmospheres and Oceans
Date: 2026-11-09
Topics:
Index: 8
---




# Overview

- consider purely absorbing $B_{\nu{}}= 0{}$
$$
\frac{dI_{\nu{}}}{d\tilde{\tau{}}_{\nu{}}} = -I_{\nu{}}
$$
- thus we say
$$
I_{\nu{}} = I_{\nu{}}(0)e^{-\tilde{\tau{}}}
$$
- we thus get again $\tilde{\tau{}}{}\gg 1$ gives $I_{\nu{}} \to{} 0{}$ and $\tilde{ \tau{}}\ll 1{}$ gives $I_{\nu{}} \to{} I_{\nu{}}(0){}$

## Isothermal

- $B_{\nu{}} =\text{const.}{}$ 
- define variable only relating to $I_{\nu{}}{}$ $x = I_{\nu{}}-B_{\nu{}}{}$ and $dx=dI_{\nu{}}{}$ so $dx/d\tilde\tau{} = -x{}$ and ${}$$x = x_{0}e^{-\tilde{\tau{}}}{}$
$$
\boxed{I_{\nu{}}= B_{\nu{}} + (I_{\nu{}}(0)-B_{\nu{}})e^{-\tilde{\tau{}}}}
$$
- again if $\tilde{\tau{}}=0{}$ then $I_{\nu{}}= I_{\nu{}}(0){}$
- if $\tilde{\tau{}}\to{} \infty{}$ then $I_{\nu{}}= B_{\nu{}}{}$
	- infinite isothermal medium acts as a blackbody
- consider interesting case of $I_{\nu{}}(0){}=0$ so $I_{\nu{}} = B_{\nu{}}(1-e^{-\tilde{\tau{}}}){}$
	- radiance e-folds toward a blackbody with increasing optical thickness
- as its isothermal we still have Planck radiance everywhere so still conserving energy

## General solution

- multiply through by integrating factor $e^{\tilde{\tau{}}}{}$
$$
\frac{d}{d\tau{}}(e^{\tilde{\tau{}}}I_{\nu{}}) = e^{\tilde{\tau{}}}B_{\nu{}}
$$
- this implies
$$
\boxed{I_{\nu{}}(\tilde{\tau{}}) = I_{\nu{}}(0)e^{-\tilde{\tau{}}}+\int_{0}^{\tilde{\tau{}}} e^{\tilde{\tau{}}'-\tilde{\tau{}}} B_{\nu{}}d\tilde{\tau{}}'}
$$
- note first half of first hand side is Beer’s law
	- second half is additional contribution from thermal emission





# Notes



# Related

