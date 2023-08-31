// author: brorojame2030@gmail.com
// clang++ a.cc
#include <iostream>
#include <iomanip>
using namespace std;
int main(){
    int id,age;
    char name[50];
    float height;
    cout << "Input id: ";cin >> id;
    cout << "input name: "; 
    cin.clear(ios_base::goodbit);
    cin.getline(name,50);
    cin.getline(name,50);
    cout << "Input age: "; cin >> age;
    cout << "Input height: "; cin >> height;
    cout << "id\tname\t\tage\theight" << endl;
    cout <<setw(3)<<setfill('0')<<id 
         <<'\t'<<name<<"\t"<<age<<"\t"<<height<<endl;
    return 0;
}
