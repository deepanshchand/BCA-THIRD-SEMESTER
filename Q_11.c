#include <stdio.h>

int main()
{
    int n;

    printf("Enter a four-digit number: ");
    scanf("%d", &n);

    printf("The sum of the first and last digit is: %d\n", (n % 10) + n / 1000);

    return 0;
}