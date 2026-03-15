## RMS Value & Average Value of AC

---

### RMS Value (Root Mean Square)

**Definition:**
The RMS value of an AC signal is the equivalent DC value that produces
the same heating effect in a resistor.

> Also called **Effective Value**.

#### Derivation

Start with a sinusoidal voltage:

$$v(t) = V_m \sin(\omega t)$$

Square it:

$$v^2(t) = V_m^2 \sin^2(\omega t)$$

Take the Mean (average over one full cycle):

$$\text{Mean} = \frac{1}{T} \int_0^T V_m^2 \sin^2(\omega t) \, dt$$

Using identity: $\sin^2(\omega t) = \dfrac{1 - \cos(2\omega t)}{2}$

$$= \frac{V_m^2}{T} \int_0^T \frac{1 - \cos(2\omega t)}{2} \, dt$$

The cosine term integrates to zero over a full cycle:

$$= \frac{V_m^2}{T} \cdot \frac{T}{2} = \frac{V_m^2}{2}$$

Take the Square Root:

$$\boxed{V_{rms} = \frac{V_m}{\sqrt{2}} = 0.707 \, V_m}$$

---

### Average Value

**Definition:**
The average value of an AC signal is the average of all instantaneous
values over one **half cycle** (full cycle average = 0 for pure sine wave).

#### Derivation

$$V_{avg} = \frac{1}{\pi} \int_0^{\pi} V_m \sin(\omega t) \, d(\omega t)$$

$$= \frac{V_m}{\pi} \left[ -\cos(\omega t) \right]_0^{\pi}$$

$$= \frac{V_m}{\pi} \left[ -\cos(\pi) + \cos(0) \right]$$

$$= \frac{V_m}{\pi} \left[ 1 + 1 \right] = \frac{2V_m}{\pi}$$

$$\boxed{V_{avg} = \frac{2}{\pi} V_m = 0.6366 \, V_m}$$

---

### Summary

| Quantity | Formula | Multiplier |
|---|---|---|
| RMS Value | Vm / √2 | 0.707 × Vm |
| Average Value | 2Vm / π | 0.6366 × Vm |
| Form Factor | Vrms / Vavg | 1.11 |

> **Form Factor** = Vrms / Vavg = 0.707 / 0.6366 = **1.11**

---

### Key Points

- RMS is used for **power calculations**
- Average is used for **rectifier and diode circuit calculations**
- For a pure DC signal, RMS = Average = the DC value itself
- Full cycle average of a sine wave = **0** (that's why we use half cycle)

---