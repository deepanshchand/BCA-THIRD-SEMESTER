#include <stdio.h>
int main()
{
    int amount, total, note_100, note_50, note_10, note_5, note_2, note_1;
    // Prompt user for input
    printf("Enter Amount : ");
    scanf("%d", &amount);

    // Condition apply
    note_100 = amount / 100;
    amount %= 100;
    //printf("\n\n%d",amount);

    note_50 = amount / 50;
    amount %= 50;
    printf("\n\n%d",amount);

    note_10 = amount / 10;
    amount %= 10;

    note_5 = amount / 5;
    amount %= 5;

    note_2 = amount / 2;
    amount %= 2;

    note_1 = amount / 1;
    amount %= 1;

    total = note_100 + note_50 + note_10 + note_5 + note_2 + note_1;

    // Print result
    printf("\n\ntotal number of minimum note = %d\n", total);
    printf("100 = %d\n", note_100);
    printf("50 = %d\n", note_50);
    printf("10 = %d\n", note_10);
    printf("5 = %d\n", note_5);
    printf("2 = %d\n", note_2);
    printf("1 = %d\n", note_1);
    return 0;
}