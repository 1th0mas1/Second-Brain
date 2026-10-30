---
old: true
Tags:
  - year-2
Index:
Class:
  - Thermodynamics
Topics:
  - carnot cycle
  - heat engine efficiency
  - van der waals gas
  - critical point
---
up: [[Thermodynamics.base]]

# Heat Engines and Real Gases

## The Carnot Cycle and Efficiency

The **Carnot cycle** is a reversible cycle of two isothermal and two adiabatic stages. Heat $Q_1$ enters at the higher temperature $T_1$ (isothermal expansion), heat $Q_2$ leaves at the lower temperature $T_2$ (isothermal compression), and the two adiabatic legs connect them with no heat exchange. Since $U$ returns to its initial value each cycle, $W=Q_1-Q_2$, so the engine's **efficiency** is
$$\eta = \frac{W}{Q_1} = 1-\frac{Q_2}{Q_1}$$
For an ideal-gas working substance, $Q_1=Nk_B\theta_1\ln(V_B/V_A)$ and $Q_2=Nk_B\theta_2\ln(V_C/V_D)$; the adiabatic relation forces $V_B/V_A=V_C/V_D$, giving simply $Q_1/Q_2=\theta_1/\theta_2$. Running the cycle backwards turns it into a **heat pump/refrigerator**, using work $W$ to move heat from cold to hot; its coefficient of performance $Q_1/W=Q_1/(Q_1-Q_2)>1$ shows why pumping heat is more efficient than direct resistive heating.

## Carnot's Theorem and Absolute Temperature

Suppose an engine $I$ were more efficient than a reversible engine $R$ operating between the same two reservoirs. Running $R$ backwards (as a heat pump), driven by $I$'s output, would produce a net transfer of heat from cold to hot with no net work input — violating the Clausius statement. So no engine can beat a reversible one, and since the argument works both ways, **all reversible engines between two given temperatures are equally efficient**, independent of their material or mechanism (Carnot's theorem). Because $Q_1/Q_2$ is therefore a universal function of the two reservoirs, it can be used to *define* the **absolute (thermodynamic) temperature scale**: $Q_1/Q_2\equiv T_1/T_2$, giving $\eta=1-T_2/T_1$ — a temperature scale independent of any particular thermometric substance.

## The van der Waals Correction

The ideal gas law assumes point particles with no interactions — the **van der Waals equation** corrects both assumptions with two empirical parameters:
$$\left(p+\frac{a}{V^2}\right)(V-b) = Nk_BT$$
$b$ accounts for the finite volume excluded by each molecule (replacing $V\to V-b$, the actual free volume available); $a$ accounts for weak long-range attraction between molecules, which pulls inward on molecules near the boundary and effectively reduces the pressure they exert on the walls, added back as $p\to p+a/V^2$ (since the attractive correction scales with density squared — pairwise interactions).

## Critical Point and Phase Coexistence

Below a **critical temperature** $T_c$, the van der Waals isotherm in the $p$-$V$ plane is non-monotonic — it predicts $\partial p/\partial V>0$ over some range, meaning increasing volume would *increase* pressure, which is mechanically unstable and unphysical. The resolution is a **Maxwell construction**: replace the unstable loop with a flat horizontal segment (constant $p$) positioned so the two enclosed areas above and below it are equal — this flat segment is the **liquid-vapour coexistence** region, where the system phase-separates into a mix of liquid and gas at the same pressure and temperature rather than following the unstable curve. Above the **critical point** $(p_c,V_c,T_c)$ (found by setting both $\partial p/\partial V=0$ and $\partial^2p/\partial V^2=0$) the coexistence region vanishes entirely and liquid and gas become indistinguishable — you can pass continuously between them without crossing a phase transition. More refined equations of state (Redlich-Kwong, Dieterici, Peng-Robinson) improve quantitative accuracy near coexistence but share this same qualitative structure.

# Related
- [[The Laws of Thermodynamics and the Clausius Theorem]]
- [[The Laws of Thermodynamics and the Clausius Theorem]]
- [[Thermodynamic Systems and Equations of State]]
- [[Thermodynamic Potentials and Phase Transitions]]
