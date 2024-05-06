/* a program to find palindrome of string
  dog -> the string is not palindrome
  madam -> the string is palindrome
  ABA -> the string is palindrome
*/
#include "stack.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
bool palindrome(char *string)
{
    stack *s = malloc(sizeof(stack));
    initialize(s, 10);
    /* push string to the stack */
    for (int i = 0; string[i] != '\0'; i++)
    {
        push(s, string[i]);
    }
    /* compare char in string with stack*/
    for (int i = 0; string[i] != '\0'; i++)
    {
        if (string[i] != pop(s))
        {
            return false;
        }
    }
    return true;
}
int main()
{
    char string[10];
    scanf("%s", string);
    if (palindrome(string) == true)
    {
        puts("The string is palindrome");
    }
    else
    {
        puts("The string is not palindrome");
    }

    return EXIT_SUCCESS;
}