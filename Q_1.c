//Calculate Gross Salary
#include <stdio.h>

int main()
{
    float basic_salary, dearness_allowance, house_rent_allowance,
        gross_salary;

    // Prompt user for input;
    printf("Enter Ramesh's basic salary: ");
    scanf("%f", &basic_salary);

    // Calculate allowance 40% + 20% respectively;
    dearness_allowance = 0.40 * basic_salary;
    house_rent_allowance = 0.20 * basic_salary;

    // Calculate gross salary;
    gross_salary = basic_salary + dearness_allowance + house_rent_allowance;

    // Print the result
    printf("Gross salary is: %.2f\n", gross_salary);

    return 0;
}