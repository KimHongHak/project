/* stack header*/
#ifndef STACK_H
#define STACK_H
typedef struct stack stack;
struct stack
{
    int top;
    int maxsize;
    int *items;
};
void initialize(stack *s, int size);
void push(stack *s, int num);
int pop(stack *s);

#endif