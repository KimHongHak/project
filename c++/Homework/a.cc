// Copyright (c) 2024, brorojame2030@gmail.com
#include <iostream>
using std::cout;
using std::endl;
class Homework {
public:
auto factorial(int a){
    int p = 1;
    for(int i=1;i<=a;i++){
        p *= i;
    }
    return p;
}
auto sumofnfactorial(int n,int& x){
    int sum=0;
    for(int i=1;i<=n;i++){
        sum +=factorial(i);
    }
    x=sum;
}
auto PGCD(int a, int b, int& x){
int tmp;
while(b !=0){
    tmp = b;
    b = a % b;
    a = tmp;
}
 x=a;
}
auto sumofnelementinarray(int a[], int n, int& x){
    int sum = 0;
    for(int i=0;i<n;i++){
        sum += a[i];
    }
    x = sum;
}
};
int main(){
    int x1,x2,x3;
    Homework* h = new Homework;
    h->sumofnfactorial(3,x1);
    cout << x1 << endl; 
    h->PGCD(2,4, x2);
    cout << x2 <<endl;
    int a[] = {1,2,3};
    h->sumofnelementinarray(a, sizeof(a)/sizeof(a[0]), x3); 
    cout << x3 << endl;
    return 0;
}