#include <stdio.h>

int main() {
    float centigrade, fahrenheit, kelvin;

    printf("Enter the temperature in Centigrade: ");
    scanf("%f", &centigrade);

    // Convert Centigrade to Fahrenheit
    fahrenheit = (centigrade * 9 / 5) + 32;

    // Convert Centigrade to Kelvin
    kelvin = centigrade + 273.15;

    //Print result
    printf("Temperature in Fahrenheit: %.2f\n", fahrenheit);
    printf("Temperature in Kelvin: %.2f\n", kelvin);

    return 0;
}