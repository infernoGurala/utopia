# **Identifiers**

### Definition

Identifiers are **names given to program elements** such as variables, constants, functions, or structures.

**Example**

int a;

Here `a` is an identifier.

---

### Rules for Identifiers

1. Can contain letters (A–Z, a–z), digits (0–9), and underscore `_`
    
2. Must start with a letter or `_`
    
3. Cannot start with a digit
    
4. No white spaces allowed
    
5. Keywords cannot be used
    
6. Case sensitive (`age` ≠ `Age`)
    Gdjdjd
7. No special symbols except `_`
    
8. Length is unlimited (some compilers consider only first 31 characters)
    

---

### Examples

✅ Valid:

age, student_name, _count, marks1

❌ Invalid:

1value, stu@name, int

---

# **Keywords**

### Definition

Keywords are **reserved words** in C having predefined meaning.  
They **cannot be used as identifiers**.

---

### Examples

int, float, char, if, else, while, return, void

---

# **Variables**

### Definition

A variable is a **named memory location** whose value **can change during program execution**.

---

### Example

int x = 10;

Here:

- `int` → data type
    
- `x` → variable
    
- `10` → value
    

---

### Types of Variables

1. **Local Variable** – declared inside function
    
2. **Global Variable** – declared outside function
    

---

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

---

# **Conclusion**

Identifiers name program elements.  
Keywords are reserved words.  
Variables store changeable values.  
Constants store fixed values.

All are fundamental building blocks of C programming.