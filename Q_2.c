#include <stdio.h>

int main()
{
    float km, meters, feet, inches, centimeters;

    // Prompt user for input
    printf("Enter the distance between two cities in kilometers: ");
    scanf("%f", &km);

    // Perform conversions
    meters = km * 1000;
    centimeters = meters * 100;
    feet = km * 3280.84; // 1 km is approximately 3280.84 feet
    inches = feet * 12;  // 1 foot = 12 inches

    // Print the results
    printf("Distance in meters: %.2f\n", meters);
    printf("Distance in feet: %.2f\n", feet);
    printf("Distance in inches: %.2f\n", inches);
    printf("Distance in centimeters: %.2f\n", centimeters);

    return 0;
}