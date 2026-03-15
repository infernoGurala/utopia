

---
# BITWISE OPERATOR
Bitwise operators work directly on the **binary (bits)** of a number.
*computers store everything as 0s and 1s. and theses operators manupulate them.*

- there are 6 **bitwise operators**

| Operator  | Meaning                    |
| --------- | -------------------------- |
| ~ (tilde) | Bitwise Complement         |
| &         | Bitwise AND                |
| \|        | Bitwise OR                 |
| ^         | Bitwise XOR (Exclusive OR) |
| <<        | Bitwise Left shift         |
| >>        | Bitwise Right shift        |

---
### 1. Bitwise complement (~)
Inverts all bits of an integer, changing **0s** to **1s** and **1s** to **0s**
- `01000001`becomes `10111110`

```c
// EXAMPLE:
int a = 35; // Binary: 00100011
int b = ~a; // Binary: 11011100 (which is -36 in signed)
```

### 3. Bitwise AND (&)
When all the component conditions becomes TRUE then only
it returns TRUE otherwise it returns FALSE
- simply, if both bits are true only then it retuns true

1 & 0 = 0
1 & 1 = 1
0 & 0 = 0
0 & 1 = 0

