#include <iostream>
#include <cstdio>
int main(){
std::cout << "hello world";
#if defined(_WIN64)
std::getchar();
#endif
  return 0;
}
