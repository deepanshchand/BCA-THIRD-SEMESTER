#include <stdio.h>

int main() {
    float fahrenheit, centigrade;

    // Prompt user for temperature in Fahrenheit
    printf("Enter the temperature in Fahrenheit: ");
    scanf("%f", &fahrenheit);

    // Convert Fahrenheit to Celsius
    centigrade = (fahrenheit - 32) * 5 / 9;

    // Print the result
    printf("Temperature in Centigrade: %.2f\n", centigrade);

    return 0;
}