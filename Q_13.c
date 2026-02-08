#include <stdio.h>
int main()
{
    // Prompt user for input
    int a, b;
    printf("Enter number a : ");
    scanf("%d", &a);
    printf("Enter number b : ");
    scanf("%d", &b);

    // Logic;
    a = a + b;
    b = a - b;
    a = a - b;

    // Pirnt Output;
    printf("a : %d\n", a);
    printf("b : %d", b);
    return 0;
}
