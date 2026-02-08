#include <stdio.h>

int main() {
    float length, breadth; // For rectangle
    float radius; // For circle
    float rect_area, rect_perimeter, circle_area, circle_circumference;
    const float PI = 3.14159; // Define PI as a constant

    // --- Rectangle calculations ---
    printf("Enter the length of the rectangle: ");
    scanf("%f", &length);
    printf("Enter the breadth of the rectangle: ");
    scanf("%f", &breadth);

    rect_area = length * breadth;
    rect_perimeter = 2 * (length + breadth);

    printf("Rectangle Area: %.2f\n", rect_area);
    printf("Rectangle Perimeter: %.2f\n", rect_perimeter);

    // --- Circle calculations ---
    printf("\nEnter the radius of the circle: ");
    scanf("%f", &radius);

    circle_area = PI * radius * radius;
    circle_circumference = 2 * PI * radius;

    printf("Circle Area: %.2f\n", circle_area);
    printf("Circle Circumference: %.2f\n", circle_circumference);

    return 0;
}