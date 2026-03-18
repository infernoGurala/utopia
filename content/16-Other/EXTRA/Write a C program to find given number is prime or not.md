A prime number has exactly two factors: `1` and itself.
- 
## Program

```c
#include <stdio.h>
int main() {
    int n, i, isPrime;

    printf("Enter a number: ");
    scanf("%d", &n);

    isPrime = 1;  // Assume it's prime to start

    if (n < 2) {
        isPrime = 0;  // 0 and 1 are not prime
    }

    for (i = 2; i < n; i++) {
        if (n % i == 0) {       // If remainder is 0, it divides evenly
            isPrime = 0;        // Not prime
            break;              // No need to check further
        }
    }

    if (isPrime == 1) {
        printf("%d is Prime\n", n);
    } else {
        printf("%d is Not Prime\n", n);
    }

    return 0;
}
```

---

## Example Run
```
Enter a number: 7
7 is Prime

Enter a number: 9
9 is Not Prime       ← because 9 % 3 == 0
```
