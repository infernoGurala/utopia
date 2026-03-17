# Syntax of `switch` and Calculator Program

The `switch` statement is a multi-way decision control structure. It checks the value of an expression and executes the matching case.

## Syntax

```c
switch (expression) {
    case value1:
        statements;
        break;
    case value2:
        statements;
        break;
    default:
        statements;
}
```

## Mermaid Flowchart

```mermaid
flowchart TD
    A([Start]) --> B[/Read operator and numbers/]
    B --> C{Operator}
    C -- + --> D[Add]
    C -- - --> E[Subtract]
    C -- * --> F[Multiply]
    C -- / --> G[Divide]
    C -- Other --> H[Invalid operator]
    D --> I([End])
    E --> I
    F --> I
    G --> I
    H --> I
```

## Calculator Program

```c
#include <stdio.h>

int main() {
    char op;
    float a, b;

    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &op);
    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);

    switch (op) {
        case '+':
            printf("Result = %.2f\n", a + b);
            break;
        case '-':
            printf("Result = %.2f\n", a - b);
            break;
        case '*':
            printf("Result = %.2f\n", a * b);
            break;
        case '/':
            printf("Result = %.2f\n", a / b);
            break;
        default:
            printf("Invalid operator\n");
    }
    return 0;
}
```
