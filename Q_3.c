#include <stdio.h>

int main() {
    int subject1, subject2, subject3, subject4, subject5;
    int aggregate_marks;
    float percentage;

    // Prompt user for marks
    printf("Enter marks for five subjects (out of 100 each):\n");
    printf("Subject 1: ");
    scanf("%d", &subject1);
    printf("Subject 2: ");
    scanf("%d", &subject2);
    printf("Subject 3: ");
    scanf("%d", &subject3);
    printf("Subject 4: ");
    scanf("%d", &subject4);
    printf("Subject 5: ");
    scanf("%d", &subject5);

    // Calculate aggregate marks
    aggregate_marks = subject1 + subject2 + subject3 + subject4 + subject5;

    // Calculate percentage (total possible marks is 500)
    percentage = (float)aggregate_marks / 500 * 100;

    // Print the results
    printf("Aggregate Marks: %d\n", aggregate_marks);
    printf("Percentage: %.2f%%\n", percentage);

    return 0;
}