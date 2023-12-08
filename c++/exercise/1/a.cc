#include <bits/stdc++.h>
using namespace std;
void write(){
  ofstream file1;
  file1.open("a.txt");
  file1 << 123 << "\n" << 324<<"\n";
  file1.close();
}
void read(){
  ifstream file2;
  file2.open("a.txt");
  string line;
  while(getline(file2,line)){
    cout << line<<endl;
  }
  file2.close();
}
int main(){
write();
read();
  return 0;
}
