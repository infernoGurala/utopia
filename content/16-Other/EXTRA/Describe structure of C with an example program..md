# **Basic Structure of a C Program**

In C language, every program follows a specific structure.  
This structure helps the compiler understand and execute the program properly.

---

# **Structure of a C Program**

## 1️⃣ Documentation Section (Optional)

- Contains comments
    
- Includes program name, author, date, description
    
- Not executed by compiler
    

### Example:

```c
// Program to print Hello  
/* Author: Inferno  
   Date: 17-09-2025 */
```

---

## 2️⃣ Link Section / Preprocessor Section (Mandatory)

- Used to include header files
    
- Written using `#include`
    
- Gives access to library functions
    

### Example:

```c
#include <stdio.h>
```

---

## 3️⃣ Definition Section (Optional)

- Used to define macros
    
- Written using `#define`
    
- Defines symbolic constants
    

### Example:

```c
#define PI 3.14
```

---

## 4️⃣ Global Declaration Section (Optional)

- Variables declared outside `main()`
    
- Can be used throughout the program
    

### Example:

int x = 50;   // Global variable

---

## 5️⃣ Main Function Section (Mandatory)

- Execution starts from `main()`
    
- Contains:
    
    - Declaration part
        
    - Executable part
        

### Example:

```c
int main()  
{  
    int a, b, c;   // Declaration  
    a = 10;  
    b = 20;  
    c = a + b;     // Executable part  
    return 0;  
}
```

---

## 6️⃣ Sub Program / User Defined Function Section (Optional)

- Functions defined by the user
    
- Written outside `main()`
    

### Example:

void display()  
{  
    printf("Hello");  
}

---

# ✅ Order of Sections

1. Documentation → Optional
    
2. Link Section → Mandatory
    
3. Definition Section → Optional
    
4. Global Declaration → Optional
    
5. Main Function → Mandatory
    
6. Sub Program → Optional
    

---

# ✅ Example Program Showing Full Structure

```c
/* Program to add two numbers */  
  
#include <stdio.h>  
  
#define PI 3.14  
  
int x = 50;   // Global variable  
  
void display()  
{  
    printf("Addition Program\n");  
}  
  
int main()  
{  
    int a = 10, b = 20, sum;  
  
    display();  
  
    sum = a + b;  
  
    printf("Sum = %d", sum);  
  
    return 0;  
}
```
---

# **Conclusion**

A C program follows a structured format consisting of documentation, link, definition, global declaration, main function, and subprogram sections.  
Among these, **Link section and main function are mandatory**, while others are optional.

---