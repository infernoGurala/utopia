![[Pasted image 20260315135751.png]]

---
## Given Data

| Parameter         | Value  |
| ----------------- | ------ |
| Source Voltage    | 100 V  |
| Source Power      | 1.5 kW |
| R₁                | 10 Ω   |
| R₂                | 25 Ω   |
| R₃                | 100 Ω  |

---

## Concept

> [!info] Kirchhoff's Current Law (KCL)
> The algebraic sum of all currents at a node is zero.
> $$\sum I_{in} = \sum I_{out}$$

In a **parallel circuit**, the voltage across each branch is equal to the source voltage.

$$V_{R1} = V_{R2} = V_{R3} = V_s = 100\ \text{V}$$

---

## Step 1 — Branch Currents

Using Ohm's Law: $I = \dfrac{V}{R}$

$$I_{R1} = \frac{V_s}{R_1} = \frac{100}{10} = 10\ \text{A}$$

$$I_{R2} = \frac{V_s}{R_2} = \frac{100}{25} = 4\ \text{A}$$

$$I_{R3} = \frac{V_s}{R_3} = \frac{100}{100} = 1\ \text{A}$$

---

## Step 2 — Total Source Current

$$I_T = \frac{P}{V_s} = \frac{1500}{100} = 15\ \text{A}$$

---

## Step 3 — KCL at Top Node

$$I_T = I_{R1} + I_{R2} + I_{R3}$$

$$15 = 10 + 4 + 1$$

$$\boxed{15\ \text{A} = 15\ \text{A}}$$

---

## Result

> [!success] KCL Verified
> The total current from the source equals the sum of all branch currents.
> $$I_T = I_{R1} + I_{R2} + I_{R3} = 10 + 4 + 1 = 15\ \text{A} \checkmark$$