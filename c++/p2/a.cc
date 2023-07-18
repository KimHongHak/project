#include "a.h"
int main(){
    int n;
    float arr[100];    
    printf("input n: ");
    scanf("%d", &n);
    input(arr,n);
    output(arr,n);
    insert(arr,n);
    output(arr,n);
    return 0;
}