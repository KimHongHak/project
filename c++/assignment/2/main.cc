#include <bits/stdc++.h>
#include "sale.h"
void output(Sale[],int);
void search(Sale[],int);
void Delete(Sale[],int);
void sort(Sale[],int);
void update(Sale[],int);
void input(Sale[],int);
int main(){
Sale p[28];
int i,n;
std::cout <<"input n: ";std::cin>>n;
input(p,n);
output(p,n);
sort(p,n);
return 0;
}
void input(Sale p[],int n){
  for(int i=0;i<n;i++){
    p[i].input();
  }
}
void output(Sale p[], int n){
  std::cout << "\nId\tName\tQty\tPrice\tAmount\n";
  for(int i=0;i<n;i++){
    p[i].print();
  }
}
void search(Sale p[],int n){
  std::string st;
  std::cout << "search product name: ";
  std::cin >> st;
  for(int i=0;i<n;i++){
    if(p[i].getName()==st){
      p[i].print();
    }
  }
}
void Delte(Sale p[],int * n){
  int id;
  for(int i=0;i<*n;i++){
    if(p[i].getId()==id){
      *n=*n-1;
      for(int j=i;j<*n;j++){
        p[j]=p[j+1];
      }
      i--;
    }
  }
  output(p,*n);
}
void sort(Sale *p, int n){
  Sale tmp;
  for(int i=0;i<n-1;i++){
    for(int j=i+1;j<n;j++){
      if(p[i].getQty()>p[j].getQty()){
        tmp=p[i];
        p[i]=p[j];
        p[j]=tmp;
      }
    }
  }
  output(p,n);
}
void update(){

}
