#ifndef Product_H
#define Product_H
class Product{
protected:
  int id,qty;
  std::string name;
  float cost;
public:
  Product(){}
  Product(int id, std::string name,int qty,float cost){
    this->id=id;
    this->name=name;
    this->qty=qty;
    this->cost=cost;
  }
  void stock(){
    std::cout << id<<"\t"<<name<<"\t"<<qty<<"\t"<<cost<<std::endl;
  }
  void setId(int i){
    this->id = i;
  }
  void setName(std::string n){
    this->name=n;
  }
  void setQty(int i){
    this->qty=i;
  }
  void setCost(flaot i){
    this->cost=i;
  }
  void getId(){
    return this->id;
  }
  void getQty(){
    return this->qty;
  }
  std::string getName(){
    return this->name;
  }
  float getCost(){
    return this->cost;
  }
};
#endif
