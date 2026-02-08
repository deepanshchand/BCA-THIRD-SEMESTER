#include <stdio.h>

int main()
{
    int n, r;

    printf("Enter a five-digit number: ");
    scanf("%d", &n);

    // Loop to extract and add each digit
    r = n % 10;
    n = n / 10;
    r = r + (n % 10);

    n = n / 10;
    r = r + (n % 10);

    n = n / 10;
    r = r + (n % 10);

    n = n / 10;
    r = r + (n % 10);
    
    n = n / 10;
    r = r + (n % 10);

    printf("The sum of the digits is: %d\n", r);

    return 0;
}