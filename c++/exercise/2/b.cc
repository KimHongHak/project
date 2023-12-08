#include <bits/stdc++.h>
using namespace std;
class Product {
private:
  int id;
  string name;
  float price;
public:
  Product(){

  }
  void input(){
    cout << "id: ";cin >> id;
    cout << "name: ";cin>>name;
    cout << "price: ";cin>>price;
  }
  void print(){
    cout << "id\tname\tprice"<<endl;
    cout << id<<'\t'<<name<<'\t'<<price<<endl;
  }
};
int main(){
  Product p;
  p.input();
  p.print();
  return 0;
}
