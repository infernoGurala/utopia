# **Operators in C**

## **Definition**

An **operator** is a special symbol used to perform operations on variables or values.

Example:

c = a + b;

`+` is an operator.

---

## Types of Operators 

#### 1. Arithmetic Operators

Used for mathematical calculations.

|Operator|Meaning|
|---|---|
|`+`|Addition|
|`-`|Subtraction|
|`*`|Multiplication|
|`/`|Division|
|`%`|Modulus|

### Example:

`#include <stdio.h>  `
`int main() {  `
`    int a=10, b=3;  `
`    printf("%d\n", a+b);  `
`    printf("%d\n", a%b);  `
`}`

---

### 2. Relational Operators

Used to compare values.

`> < >= <= == !=`

### Example:

`#include <stdio.h>  `
`int main() {  `
`    int a=5, b=10;  `
`    printf("%d", a<b);  `
`}`

`(returns 1 if true, 0 if false)`

---

### 3. Logical Operators

Used to combine conditions.

|Operator|Meaning|
|---|---|
|`&&`|AND|
|`||
|`!`|NOT|

### Example:

`#include <stdio.h>  `
`int main() {  `
`    int x=5;  `
`    if(x>0 && x<10)  `
`        printf("True");  `
`}`

---

## **4. Assignment Operators**

Assign values.

`= += -= *= /= %=`

### Example:

`#include <stdio.h>  `
`int main() {  `
`    int a=5;  `
`    a+=3;  `
`    printf("%d", a);  `
`}`

---

## **5. Increment / Decrement**

`++` increases by 1  
`--` decreases by 1

### Example:

`#include <stdio.h>  `
`int main() {  `
`    int a=5;  `
`    a++;  `
`    printf("%d", a);  `
`}`

---

## **6. Bitwise Operators**

Operate on bits.

`& | ^ ~ << >>`

### Example:

`#include <stdio.h>  `
`int main() {  `
`    int a=5, b=3;  `
`    printf("%d", a&b);  `
`}`

---

## **7. Conditional Operator (`?:`)**

Shortcut for if–else.

### Example:

`#include <stdio.h> 
`int main() {  `
`int a=10,b=20;  `
`int max = (a>b)?a:b;  `
`printf("%d", max);  `
`}`

---

## **8. Special Operators**

- `sizeof`
    
- comma `,`
    
- pointer `*`
    
- address `&`
    

### Example:

`#include <stdio.h>  
`int main() {  `
`int a;  `
`printf("%lu", sizeof(a));  `
}`

---

Operators are symbols that perform operations on data.  
C provides arithmetic, relational, logical, assignment, bitwise, conditional, and special operators.  
They are essential for computation and decision making in programs.