// brorojame2030@gmail.com
#include <bits/stdc++.h>
class People{
public:
  char* name,*job,*birth,*nationality,
    ** language,*live_in,**Friend;
  char sex;
  int age;
  float height;
public:
  People(char* name,char* job,
  char* birth, char sex, int age,
  float height,char* Friend[20],
  char* language[20],char* live_in,char* nationality){
    this->name = name;
    this->job = job;
    this->birth = birth;
    this->sex = sex;
    this->age = age ;
    this->height = height;
    this->Friend = Friend;
    this->language = language;
    this->live_in = live_in;
  }
  void info(){
    std::cout <<"name: "<<this ->name<<'\n'
    << "job: "<<this->job<<'\n'
    << "birth: "<<this->birth<<'\n'
    << "sex: "<<this->sex<<'\n'
    << "age: "<<this->age<<'\n'
    << "height: "<<this->height<<'\n'
    << "friend: ";
    for (int i=0;i<3;i++){
      std::cout << this->Friend[i] << " ";
    }
    std::cout<<"\n"<< "language: ";
    for (int i=0;i<3;i++){
      std::cout << this->language[i]<<" ";
    }
    std::cout << '\n'<< "live_in: "
    << this->live_in<<std::endl;}
};
int main(){
  char** Friend;
  Friend = new char*[10];
  Friend[0] = new char[20];
  Friend[1] = new char[20];
  Friend[2] = new char[20];
  strcpy(Friend[0], "Chanun");
  strcpy(Friend[1], "Somnang");
  strcpy(Friend[2], "Rathana");
  char** language = new char* [10];
  language[0] = new char[20];
  language[1] = new char[20];
  language[2] = new char[20];
  strcpy(language[0], "Khmer");
  strcpy(language[1], "English");
  strcpy(language[2], "Japanese");
  char *name = "jame",*job="stduent",*birth="20 september 2003"
  ,*nationality="khmer",*live_in="Phnom Penh";
  People p1 = People(name, job,birth,'M',19,165,Friend,
  language,live_in,nationality);
  p1.info();
}
