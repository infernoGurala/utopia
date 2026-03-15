## Classification of Measuring Instruments

Measuring instruments are classified based on their working principle and the type of quantity they measure (AC, DC, or both).

---

### Classification Chart

| Type | Works on | Measures | Examples |
|------|----------|----------|---------|
| **Permanent Magnet Moving Coil (PMMC)** | DC only | Current, Voltage | Galvanometer, DC Ammeter |
| **Moving Iron (MI)** | AC & DC | Current, Voltage | AC Ammeter, AC Voltmeter |
| **Electrodynamometer** | AC & DC | Power, Current | Wattmeter |
| **Rectifier Type** | AC (converted to DC) | AC Voltage, Current | AC Voltmeter with rectifier |
| **Thermocouple** | AC & DC | High frequency current | RF Ammeters |
| **Induction Type** | AC only | Power, Energy | Energy meter (kWh meter) |

---

### 1. Permanent Magnet Moving Coil (PMMC)

**Principle:** When a current-carrying coil is placed in the field of a permanent magnet, it experiences a deflecting torque.

$$\tau = BANI$$

Where:
- B = Flux density
- A = Area of coil
- N = Number of turns
- I = Current

**Works on:** DC only  
**Cannot measure AC** — the pointer oscillates and reads zero on AC due to reversal of torque.

**Examples:** Galvanometer, DC Ammeter, DC Voltmeter

---

### 2. Moving Iron (MI) Instrument

**Principle:** A piece of soft iron is attracted or repelled by a magnetic field produced by current flowing through a coil.

Two types:
- **Attraction type** — iron piece is attracted into the coil
- **Repulsion type** — two iron pieces (one fixed, one moving) repel each other

$$\tau \propto I^2$$

**Works on:** AC & DC both  
**Reads RMS value** of AC quantities.

**Examples:** AC Ammeter, AC Voltmeter

---

### 3. Electrodynamometer (Dynamometer Type)

**Principle:** The interaction between the magnetic fields of a fixed coil and a moving coil produces a deflecting torque.

$$\tau \propto I_1 \times I_2 \times \cos\phi$$

**Works on:** AC & DC both  
**Used for:** Measuring power (Wattmeter), power factor

**Examples:** Wattmeter, Power Factor meter

---

### 4. Rectifier Type Instrument

**Principle:** AC is first converted to DC using a rectifier (diode), then measured by a PMMC instrument.

$$V_{DC} = 0.637 \times V_m \quad \text{(half wave)}$$
$$V_{DC} = 0.637 \times V_m \quad \text{(full wave)}$$

**Works on:** AC only (after rectification)  
**Reads:** Average value but scale calibrated in RMS

**Examples:** AC Voltmeter, AC Ammeter with rectifier

---

### 5. Thermocouple Instrument

**Principle:** Current heats a wire, and the heat produces an EMF via thermocouple effect (Seebeck effect). This EMF deflects a PMMC meter.

**Works on:** AC & DC both  
**Best for:** High frequency (RF) measurements

**Examples:** RF Ammeter, high frequency measuring instruments

---

### 6. Induction Type Instrument

**Principle:** Interaction between alternating magnetic flux and eddy currents induced in a aluminium disc produces a torque that rotates the disc.

**Works on:** AC only  
**Cannot measure DC** — no eddy currents with steady DC

**Examples:** Energy meter (kWh meter), induction type wattmeter

---

### Summary Table

| Instrument | AC | DC | Measures | Reads |
|------------|----|----|----------|-------|
| PMMC | ❌ | ✅ | I, V | Mean |
| Moving Iron | ✅ | ✅ | I, V | RMS |
| Electrodynamometer | ✅ | ✅ | P, I, V | RMS |
| Rectifier | ✅ | ❌ | I, V | Avg (RMS scale) |
| Thermocouple | ✅ | ✅ | I | RMS |
| Induction | ✅ | ❌ | Energy | — |

---

> 💡 **Key Point:** Moving Iron and Electrodynamometer instruments work on both AC and DC, making them the most versatile for general measurements.