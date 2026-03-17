An operator is a symbol that performs an operation on one or more operands.

## Types of Operators in C

| Type                | Operators               | Example                |     |                  |
| ------------------- | ----------------------- | ---------------------- | --- | ---------------- |
| Arithmetic          | `+ - * / %`             | `c = a + b;`           |     |                  |
| Relational          | `> < >= <= == !=`       | `a > b`                |     |                  |
| Logical             | `&&                     |                        | !`  | `a > 0 && b > 0` |
| Assignment          | `= += -= *= /=`         | `x += 5;`              |     |                  |
| Increment/Decrement | `++ --`                 | `i++;`                 |     |                  |
| Bitwise             | `& \| ^ ~ << >>`        | `a & b`                |     |                  |
| Conditional         | `?:`                    | `max = a > b ? a : b;` |     |                  |
| Special             | `sizeof`, `,`, `&`, `*` | `sizeof(int)`          |     |                  |

## Example Program

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("Addition = %d\n", a + b);
    printf("Greater = %d\n", a > b);
    printf("Logical AND = %d\n", (a > 0 && b > 0));
    printf("Remainder = %d\n", a % b);
    return 0;
}
```

## Summary

Operators are essential in C for calculations, comparisons, decision making, and memory-related tasks.
