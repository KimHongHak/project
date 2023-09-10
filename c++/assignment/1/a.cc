#include <bits/stdc++.h>
class Product{
protected:
  int id,qty;
  float cost;
  std::string name;
public:
  Product(int id,int qty,float cost,std::string name){
    this->id=id;
    this->qty=qty;
    this->cost=cost;
    this->name = name;
  }
  void input(){
  std::cout << "id: ";std::cin>>this->id;
  std::cout<<"cost: ";std::cin>>this->cost;
  std::cin.ignore();
  std::cout<<"name: ";std:getline(std::cin,this->name);
  }
  void print(){
    std::cout << "id\tqty\tcoast\tname\tamount\n";
    std::cout<<this->id<<'\t'<<this->qty<<'\t'<<this->cost
    <<'\t'<<this->name<<'\t'<<this->amount()<<std::endl;
  }
  void set(){
    int id;
    std::cout << "id: ";std::cin >> id;
    if (id == this->id){
      std::cout << "qty: ";std::cin>>this->qty;
      std::cout<<"cost: ";std::cin>>this->cost;
      std::cin.ignore();
      std::cout<<"name: ";std::getline(std::cin,this->name);
    }
  }
  void get(){
    int id;
    std::cout << "id: ";std::cin >> id;
    if (id == this->id){
      std::cout << "id\tqty\tcost\tname\tamount\n";
      std::cout<<this->id<<'\t'<<this->qty<<'\t'<<this->cost
      <<'\t'<<this->name<<'\t'<<this->amount()<<std::endl;
    }
  }
  float amount(){
    return this->qty*this->cost;
  }
};
int main(){
  Product p = {1,2,20,"dog"};
  p.print();
  p.input();
  p.print();
  p.set();
  p.print();
  p.get();
  p.print();
}
