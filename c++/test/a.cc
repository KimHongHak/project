#include <iostream>
#include <typeinfo>
using namespace std;
enum Day {
Mon = 4,
Tue = 2,
Wed,
Thu
};
template <typename T> string type_name();
int main(){
    // cout << sizeof(short)<<endl;
    // cout << sizeof(int)<<endl;
    // cout<< sizeof(long)<<endl;
    // cout<<sizeof(long long)<<endl;
    Day t = Thu;
    // cout << t;
    long double x = 1.2;
    cout <<  typeid(x).name();
    return 0;
}