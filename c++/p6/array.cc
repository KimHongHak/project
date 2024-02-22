// copyrihght 2023, brorojame2030@gmail.com
#include <bits/stdc++.h>
#define  MAX 10000000
template<typename T> class Array {
private:
    T * ptr;
    int n;
public:
    Array(int n ): n(n){
      if (n ==  MAX){
        std::cout << "out of range";
        asm("movq $60, %rax\n"
            "movq $1, %rdi\n"
            "syscall"
          );
      }
      ptr = new T[n];
    }
    ~Array(){
      delete[] ptr;
    }
    void increase(int m){
      T* tmp = new T[n+m];
      for(int i=0;i<n+m;++i){
        tmp[i] = ptr[i];
      }
      delete[] ptr;
      ptr = tmp;
      n += m;
    }
    void clean(int n){
      T* tmp = new T[n];
      for(int i=0;i<n;i++){
        tmp[i] = ptr[i];
      }
      delete[] ptr;
      ptr = tmp;
    }
    //  Exchange Sort
    void ascending(){
      for (int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
          if(ptr[i]>ptr[j]){
            T* tmp = ptr[i];
            ptr[i] = ptr[j];
            ptr[j] = tmp;
          }
        }
      }
    }
    void descending(){
      for (int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
          if(ptr[i]<ptr[j]){
            T* tmp = ptr[i];
            ptr[i] = ptr[j];
            ptr[j] = tmp;
          }
        }
      }
    }
    void input(){
      for(int i=0;i<this->n;i++){
        std::cout<<"Input number: ";
        std::cin>>ptr[i];
      }
    }
    void Delete(){
      int tmp;
      std::cout<<"Input position: ";std::cin>>tmp;
      for(int i=0;i<this->n;i++){
        if(i+1 == tmp){
          for(int j=i;j<n-1;j++){
            this->ptr[j] = this->ptr[j+1];
          }
        }
      }
      this->n--;
      //modify to clear waste allocated memory address
      clean(n);
    }
    void update(){
      int on;
      int nn;
      std::cout<<"Input new number:  ";std::cin>>nn;
      std::cout<<"Input old number:  ";std::cin>>on;
      for(int i=0;i<n;i++){
        if (ptr[i] == on){
          ptr[i] = nn;
          i--;
        }
      }
    }
    void add(){
      int m;
      std::cout<<"Enter number of elements you wanna add: ";
      std::cin>>m;
      increase(m);
      for(int i = m; i<n;i++){
      std::cout << "Enter number: ";
      std::cin >> ptr[i];
      }
    }
    void print(){
      for(int i=0;i<this->n;i++){
        std::cout<<this->ptr[i]<<" ";
      }
    }
    void push(){
      T * tmp;
      this->increase(1);
      std::cout << "input num: ";std::cin>>tmp;
    }
    void pop(){
      this->increase(-1);
    }
};
int main(){
  Array<int> a(5);
}
