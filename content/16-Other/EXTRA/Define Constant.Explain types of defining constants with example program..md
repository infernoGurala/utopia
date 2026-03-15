# **Constants**

### Definition

A constant is a **fixed value** that **cannot be changed** during program execution.

---

## Types of Constants

### 1. Numeric Constants

#### (a) Integer Constants

- Decimal (Base 10): `123`, `-56`
    
- Octal (Base 8): starts with `0` → `0123`
    
- Hexadecimal (Base 16): starts with `0x` → `0xA5`
    
- Binary (Base 2): starts with `0b` → `0b1011`
    

---

#### (b) Floating Constants

Examples:

3.14  
12.5  
1.2e3

---

### 2. Character Constants

#### i) Single character

'A'   '7'   '$'

#### ii) String constants

"Hello"  
"5+10"

#### iii) Backslash constants

\n  → New line    
\t  → Tab    
\r  → Carriage return    
\a  → Alert  

---

## Declaring Constants in C

### 1️⃣ Using `const`

const int a = 100;

---

### 2️⃣ Using `#define`

#define PI 3.14