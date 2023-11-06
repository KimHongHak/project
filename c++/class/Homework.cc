// brorojame2030@gmail.com
// clang++ --std=c++20 Homework.cc
#include <bits/stdc++.h>
class Homework {
public:
  template<typename T> auto swap(T &a,T &b){
    T tmp = a;
    a = b;
    b = tmp;
  }
  template<typename T> auto ascending(T a[], int n){
    bool condition;
      for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
          if constexpr(std::is_same_v<T,int>||std::is_same_v<T,float>
          || std::is_same_v<T,char>){
            condition = a[i] > a[j]?true:false;
          } else if constexpr(std::is_same_v<T,std::string>){
          condition = a[i].compare(a[j]) > 0 ?true:false;
          }
          if(condition){
            T tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
          }    }  }  }
  template<typename T> auto descending(T a[], int n){
    bool condition;
      for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
          if constexpr(std::is_same_v<T,int>||std::is_same_v<T,float>
          || std::is_same_v<T,char>){
            condition = a[i] < a[j]?true:false;
          } else if constexpr(std::is_same_v<T,std::string>){
          condition = a[i].compare(a[j]) < 0 ?true:false;
          }
          if(condition){
            T tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
          }      }  }  }};
int main(){
  int n = 6;
  // char x[6] = {'a', 'b', 'k', 'j', 'y', 'a'};
  std::string x[6];
    x[0] = "cc";
  x[1] = "bc";
  x[2] = "uv";
  x[3] = "kl";
  x[4] = "mm";
  x[5] = "aa";
Homework h{};
h.ascending<std::string>(x,n);
for(int i =0; i <n ;i++){
  std::cout << x[i]<<std::endl;
}

}
