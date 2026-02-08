        #include <stdio.h>
int main()
{
    int n;
    printf("Enter a five-digit number: ");
    scanf("%d", &n);

    printf("%d", (n / 10000 + 1));
    n = n % 10000;
    printf("%d", (n / 1000 + 1));
    n = n % 1000;
    printf("%d", (n / 100 + 1));
    n %= 100;
    printf("%d", (n / 10 + 1));
    n %= 10;
    printf("%d", n + 1);
    return 0;
}