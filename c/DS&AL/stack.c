/* stack data structure*/
#include "stack.h"
#include <stdlib.h>
#include <stdio.h>
void initialize(stack *s, int size)
{
    s->top = 0;
    s->maxsize = size;
    s->items = malloc(size * sizeof(int));
}
void push(stack *s, int num)
{
    if (s->top == s->maxsize)
    {
        puts("overflow error");
        exit(1);
    }
    else
    {
        s->items[s->top] = num;
        s->top = s->top + 1;
    }
}
int pop(stack *s)
{
    if (s->top == 0)
    {
        puts("underflow error");
        exit(1);
    }
    else
    {
        s->top = s->top - 1;
        int r = s->items[s->top];
        return r;
    }
}