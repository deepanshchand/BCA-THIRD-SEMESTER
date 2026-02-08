#include <stdio.h>
int main()
{
    float side1, side2, side3, area;

    // Prompt user for input
    printf("Enter Side1 : ");
    scanf("%f", &side1);

    printf("Enter Side2 : ");
    scanf("%f", &side2);

    printf("Enter Side3 : ");
    scanf("%f", &side3);

    // calculate the area
    area = 0.5 * side1 * side2;

    // Print the result
    printf("The area of triangle is : %.2f", area);
    return 0;
}