# C Program to Check Whether a Number Is Prime

A prime number has exactly two factors: `1` and itself.

## Program

```c
#include <stdio.h>

int main() {
    int n, i, flag = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n <= 1) {
        flag = 0;
    } else {
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = 0;
                break;
            }
        }
    }

    if (flag == 1)
        printf("Prime number\n");
    else
        printf("Not a prime number\n");

    return 0;
}
```
