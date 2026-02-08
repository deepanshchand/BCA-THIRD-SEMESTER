#include <stdio.h>

int main()
{
    // Define data type
    int n, r;
    // Prompt user for input
    printf("Enter a five-digit number: ");
    scanf("%d", &n);

    // Get last Digit
    r = n % 10;
    n /= 10;
    printf("%d", r);

    // Get second last digit
    r = n % 10;
    n /= 10;
    printf("%d", r);

    // Get third last digit
    r = n % 10;
    n /= 10;
    printf("%d", r);

    // Get fourth last digit
    r = n % 10;
    n /= 10;
    printf("%d", r);

    // Get first digit in last
    r = n % 10;

    // Final Result
    printf("%d", r);

    return 0;
}
