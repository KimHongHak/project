#if ! defined(Sale_h)
#define Sale_h
#include "product.h"
class Sale: public Product{
protected:
  float price;
public:
  Sale():Product(){}
  Sale(int i,std::string n, int q, float c,float p):Product(i,n,q,c){
    this->price = p;
  }
  void setData(int i,std::string n,int q, float c, float p){
    this->id =i;
    this->name =n;
    this->qty=q;
    this->cost=c;
    this->price=p;
  }
  void input(){
    using std::cout;
    using std::cin;
    cout << "id: ";cin>>this->id;
    cout << "name: ";cin>>this->name;
    cout<<"qty: ";cin>>this->qty;
    cout <<"cost: ";cin>>this->cost;
    cout<<"price: ";cin>>this->price;
  }
  float amount(){
    return this->qty*this->price;
  }
  void print(){
    std::cout << id<<"\t"<<name<<"\t"<<qty<<"\t"
    <<price<<"\t"<<amount()<<std::endl;
  }
};
#endif
