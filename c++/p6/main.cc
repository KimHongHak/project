#include <bits/stdc++.h>
class Set_theory {
protected:
  std::string definition = "Set theory is the branch of mathematical logic that studies sets, which can be informally described as collections of objects";
  std::string * books;
  int number_of_books;
  bool for_computer_science = true;
  bool have_class_course = true;
  bool have_book = true;
  std::string * students;
  int number_of_student;
  std::string teacher;
public:
Set_theory():number_of_books(3),number_of_student(3){
  this->books = new std::string [20];
  this->books[0] = "SETS FOR MATHEMATICS";
  this->books[1] = "NAIVE SET THEORY";
  this->books[2] = "Set Theory and Metric Spaces - Irving Kaplansky";
  this->students = new std::string[20];
  this->students[0] = "Chanun";
  this->students[1] = "Samnang";
  this->students[2] = "Ratana";
  this->teacher = "yamada suzuki";
}
void addbook(){
  std::cout<<"Book: ";
  std::getline(std::cin,this->books[this->number_of_books]);
  this->number_of_books=this->number_of_books+1;
}
void info(){
  std::cout<<"definition: "<<this->definition<<std::endl;
  std::cout<<"number of book: "<<this->number_of_books<<std::endl;
  std::cout<<"books: "<<std::endl;
  for(int i=0;i<this->number_of_books;i++){
    std::cout<<this->books[i]<<std::endl;
  }
  std::cout<<"for_computer_science: "<<this->for_computer_science<<std::endl;
  std::cout<<"have_class_course: "<<this->have_class_course<<std::endl;
  std::cout<<"number_of_student: ";std::cout<<number_of_student<<std::endl;
  std::cout<<"student: "<<std::endl;
  for(int i=0;i<this->number_of_student;i++){
    std::cout<<this->students[i]<<std::endl;
  }
  std::cout<<this->teacher<<std::endl;
}};;


class Mathematical_logic: virtual public Set_theory{
protected:
  std::string definition = "Mathematical logic is the study of formal logic within mathematics";
  bool for_computer_science = true;
  bool have_class_course = false;
  bool have_book = true;
  std::string* books;
  int number_of_books;

public:
  Mathematical_logic():number_of_books(2){
    std::cout << "logic";
    this->books = new std::string[20];
    this->books[0]="HANDBOOK OF MATHEMATICAL LOGIC";
    this->books[1]="Elements of Mathematical Logic";
  }
  void addbook(){
    std::cout<<"Book: ";
    std::getline(std::cin,this->books[this->number_of_books]);
    this->number_of_books=this->number_of_books+1;
  }
  void info(){
    std::cout<<"definition: "<<this->definition<<std::endl;
    std::cout<<"number of book: "<<this->number_of_books<<std::endl;
    std::cout<<"for_computer_science: "<<this->for_computer_science<<std::endl;
    std::cout<<"have_class_course: "<<this->have_class_course<<std::endl;
    std::cout<<"bokks: "<<std::endl;
    for(int i=0;i<this->number_of_books;i++){
      std::cout<<this->books[i]<<std::endl;
    }
    this->info_set_theory();
  }
  void add_set_theory_books(){
    Set_theory::addbook();
  }
  void info_set_theory(){
    Set_theory::info();
  }
};

class Number_theory{
protected:
  std::string definiton = "Number theory (or arithmetic or higher arithmetic in older usage) is a branch of pure mathematics devoted primarily to the study of the integers and arithmetic functions";
  bool for_computer_science = true;
  bool have_class_course = false;
  bool have_book = false;
public:
  Number_theory(){
    std::cout << "number";}

  void info(){

    std::cout << "definiton: "<<this->definiton<<std::endl;
    std::cout << "for for_computer_science: "<<this->for_computer_science<<std::endl;
    std::cout << "have_class_course"<<this->have_class_course<<std::endl;
    std::cout << "have_book"<<this->have_book<<std::endl;
  }
};

class Mathematic: public Mathematical_logic,public Number_theory{
public:
  Mathematic(int i){

  }
  void info(){
    Mathematical_logic::info();
    Number_theory::info();
  }
  void info_Mathematical_logic(){
    Mathematical_logic::info();
  }
  void info_Number_theory(){
    Number_theory::info();
  }

};
int main(){
Mathematic a(1);
}
