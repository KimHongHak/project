#include <iostream>
class animal{
public:
virtual void speak(){
    std::cout << "I am animal" << std::endl;
}
};
class cat: public animal{
public:
void speak(){
std::cout << "I am cat" << std::endl;
}
};
int main(){
    animal x;
    cat c;
    animal& a = c;
    animal& ar = x;
    a.speak(); 
    ar.speak();
    return 0;
  
}