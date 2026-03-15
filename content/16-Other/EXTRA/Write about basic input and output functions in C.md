# **Basic Input and Output Functions in C**

Input and output functions are used to **read data from the user** and **display results on the screen**.  
These functions are provided by the standard library header file:

#include <stdio.h>

---

## **Basic Input Functions**

### 1. `scanf()`

Used to take formatted input from the keyboard.

### Syntax:

scanf("format_specifier", &variable);

### Example:

#include <stdio.h>  
  
int main()  
{  
    int a;  
    scanf("%d", &a);  
    return 0;  
}

Reads an integer value from the user.

---

### 2. `getchar()`

Used to read a **single character**.

### Example:

#include <stdio.h>  
  
int main()  
{  
    char ch;  
    ch = getchar();  
    return 0;  
}

---

### 3. `gets()` _(not recommended – unsafe)_

Used to read a string.

gets(name);

_(Modern C prefers `fgets()`)_

---

## **Basic Output Functions**

---

### 1. `printf()`

Used to display formatted output.

### Syntax:

printf("format_string", variables);

### Example:

#include <stdio.h>  
  
int main()  
{  
    int a = 10;  
    printf("Value = %d", a);  
    return 0;  
}

---

### 2. `putchar()`

Used to print a **single character**.

### Example:

#include <stdio.h>  
  
int main()  
{  
    putchar('A');  
    return 0;  
}

---

### 3. `puts()`

Used to print a string.

puts("Hello");

Automatically moves to next line.

---

## **Common Format Specifiers**

|Specifier|Meaning|
|---|---|
|`%d`|Integer|
|`%f`|Float|
|`%c`|Character|
|`%s`|String|
|`%lf`|Double|

---

## **Sample Program**

#include <stdio.h>  
  
int main()  
{  
    int a,b,sum;  
  
    printf("Enter two numbers:");  
    scanf("%d %d",&a,&b);  
  
    sum = a + b;  
  
    printf("Sum = %d", sum);  
  
    return 0;  
}

---

# **Conclusion**

C provides basic input functions like `scanf()` and `getchar()` to read data, and output functions like `printf()`, `putchar()`, and `puts()` to display results.  
These functions are essential for interaction between the user and program.