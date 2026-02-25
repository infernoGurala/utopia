# **Data Type in C**

## **Definition**

A **data type** specifies **what kind of value a variable can store**, how much **memory** it occupies, and what **operations** can be performed on it.

**Example:**

`int a`

Here `int` is the data type and `a` is the variable.

```mermaid
flowchart TD
A[Data Types in C]

A --> B[Built-in Data Types]
A --> C[Derived Data Types]
A --> D[User Defined Data Types]

B --> B1[int
char
float
void]

C --> C1[Arrays
Pointers
Functions]

D --> D1[Structures
Unions
Enumerations
typedef]
```




---

## **Primitive (Built-in) Data Types in C**

Primitive data types are the **basic data types provided by C**.

They are:

1. `int`
    
2. `char`
    
3. `float`
    
4. `double`
    
5. `void`
    

```mermaid
flowchart LR

A["Built-in Data Types in C"]

A --> B["Integer (int)"]
A --> C["Character (char)"]
A --> D["Floating Point (float)"]
A --> E["Void (it is nothing)"]

B --> B1["short int"]
B --> B2["int"]
B --> B3["long int"]
B --> B4["long long int"]

B1 --> B1a["signed (+/-)"]
B1 --> B1b["unsigned (+)"]
B1a --> B1m["2 bytes"]
B1b --> B1m

B2 --> B2a["signed (+/-)"]
B2 --> B2b["unsigned (+)"]
B2a --> B2m["2 or 4 bytes"]
B2b --> B2m

B3 --> B3a["signed (+/-)"]
B3 --> B3b["unsigned (+)"]
B3a --> B3m["4 bytes"]
B3b --> B3m

B4 --> B4a["signed (+/-)"]
B4 --> B4b["unsigned (+)"]
B4a --> B4m["8 bytes"]
B4b --> B4m

C --> C1["signed character (+/-)"]
C --> C2["unsigned character (+)"]
C1 --> Cm["1 byte"]
C2 --> Cm

D --> D1["float (6 decimals)"]
D --> D2["double (15 decimals)"]
D --> D3["long double (18 decimals)"]

D1 --> D1m["4 bytes"]
D2 --> D2m["8 bytes"]
D3 --> D3m["16 bytes"]
```


---

## **1. Integer (`int`)**

Used to store **whole numbers**.

### Types:

- short int
    
- int
    
- long int
    
- long long int
    

Each can be **signed** (+/–) or **unsigned** (+ only).

|Type|Memory|Example|
|---|---|---|
|short int|2 bytes|`short a;`|
|int|2 or 4 bytes|`int b;`|
|long int|4 bytes|`long c;`|
|long long int|8 bytes|`long long d;`|

_(Memory depends on compiler)_

**Example:**

int age = 20;

---

## **2. Character (`char`)**

Stores **single character**.

- Requires **1 byte**
    
- Can be signed or unsigned
    

**Example:**

char grade = 'A';

---

## **3. Floating Point (`float`)**

Stores **decimal values**.

|Type|Memory|Precision|
|---|---|---|
|float|4 bytes|~6 digits|
|double|8 bytes|~15 digits|
|long double|16 bytes|~18 digits|

**Examples:**

float pi = 3.14;  
double value = 23.456789;

Used when fractions are needed.

---

## **4. Void (`void`)**

Means **nothing**.

Used when:

- A function returns nothing
    
- No parameters
    

**Example:**

void display()  
{  
}

---

## **Conclusion**

Primitive data types form the **foundation of C programming**.  
They control **memory usage**, **precision**, and **data behavior**, making programs efficient and structured.