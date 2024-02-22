// Copyright (c) 2024, brorojame2030@gmail.com
#include <stdio.h>
typedef struct Homework Homework;
struct Homework{
int (*sumofnfactorial)(int);
int (*PGCD)(int,int);
int (*sumofnelementinarray)(int[], int);
};
int factorial(int a){
    int p = 1;
    for(int i=1;i<=a;i++){
        p *= i;
    }
    return p;
}
int sumofnfactorial(int n){
    int sum=0;
    for(int i=1;i<=n;i++){
        sum +=factorial(i);
    }
    return sum;
}
int PGCD(int a, int b){
int tmp;
while(b !=0){
    tmp = b;
    b = a % b;
    a = tmp;
}
return a;
}
int sumofnelementinarray(int a[], int n){
    int sum = 0;
    for(int i=0;i<n;i++){
        sum += a[i];
    }
    return sum;
}
int main(){
    Homework h = {sumofnfactorial,PGCD,sumofnelementinarray};
    printf("%d\n",h.sumofnfactorial(3));
    printf("%d\n", h.PGCD(2,4));
    int a[] = {1,2,3};
    printf("%d\n", h.sumofnelementinarray(a, sizeof(a)/sizeof(a[0])));
    return 0;
}