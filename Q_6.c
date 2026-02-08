
#include <stdio.h>

int main()
{
    float length = 1189; // A0 length
    float breadth = 841; // A0 breadth
    float temp;

    // A0 Dimension;
    printf("A0 = %.2f mm x %.2f mm\n", length, breadth);

    // A1 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;
    printf("A1 = %.2f mm x %.2f mm\n", length, breadth);

    // A2 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;
    printf("A2 = %.2f mm x %.2f mm\n", length, breadth);

    // A3 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;
    printf("A3 = %.2f mm x %.2f mm\n", length, breadth);

    // A4 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;
    printf("A4 = %.2f mm x %.2f mm\n", length, breadth);

    // A5 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;
    printf("A5 = %.2f mm x %.2f mm\n", length, breadth);

    // A6 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;
    printf("A6 = %.2f mm x %.2f mm\n", length, breadth);

    // A7 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;
    printf("A7 = %.2f mm x %.2f mm\n", length, breadth);

    // A8 Dimension;
    temp = length;
    length = breadth;
    breadth = temp / 2;

    printf("A8 = %.2f mm x %.2f mm\n", length, breadth);

    return 0;
}