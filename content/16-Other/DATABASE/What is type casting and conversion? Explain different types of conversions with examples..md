# **Type Conversion / Type Casting**

## **Definition**

Converting one datatype value into another datatype value is called **type conversion or type casting**.

---

## **Types of Type Conversion**

There are **two categories**:

1. Implicit Type Conversion
    
2. Explicit Type Conversion
    

---

# **1. Implicit Type Conversion**

Implicit type conversion is also called **Automatic Type Conversion** or **Type Promotion**.

- It is performed by the **compiler**
    
- Programmer intervention is **not required**
    
- Compiler converts **lower datatype to higher datatype**
    

---

### **Example Program (Implicit Conversion)**

#include <stdio.h>  
  
int main()  
{  
    int n = 100;  
    char c = 'a';  
    float sum;  
  
    sum = n + c;  
  
    printf("The sum = %f", sum);  
  
    return 0;  
}

---

### **Explanation**

- `n` is integer (100)
    
- `c` is character ('a')
    
- ASCII value of `'a'` = **97**
    
- So internally:
    

sum = 100 + 97 = 197

- Result is stored in `float`
    

### Output:

197.000000

---

### **Conclusion**

Compiler automatically converts:

char → int → float

This is **implicit conversion**.

---

# **2. Explicit Type Conversion (Type Casting)**

Explicit conversion is performed by the **programmer**.

---

### **Syntax**

(datatype) expression;

---

### Example:

int x;  
x = (int)3.142;

---

### Explanation:

- `3.142` is float
    
- `(int)` converts float → int
    
- So result becomes:
    

x = 3

Decimal part is removed.

---

# **Without Type Casting**

int a;  
a = 20/6;

Result:

3

(Because both operandsளம் are integers)

---

# **With Explicit Type Casting**

float a;  
a = (float)20/6;

Result:

3.333333

---

# **Example Program (Explicit Conversion)**

#include <stdio.h>  
  
int main()  
{  
    float a;  
  
    a = (float)20/6;  
  
    printf("%f", a);  
  
    return 0;  
}

---

### Output:

3.333333

---

# **Difference**

|Implicit Conversion|Explicit Conversion|
|---|---|
|Done by compiler|Done by programmer|
|Automatic|Manual|
|Lower → Higher|Any type|
|No cast operator|Uses `(datatype)`|

---

# **Conclusion**

Type conversion changes datatype automatically by compiler.  
Type casting changes datatype manually by programmer.  
Both are used to maintain compatibility between different data types.