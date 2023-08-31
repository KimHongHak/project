// brorojame2030@gmail.com
#include <bits/stdc++.h>
using namespace std;
class Student {
private:
	int id;
	char name[30];
	char sex;
	int math;
	int engl;
	int cplu;
public:
	int total(){
		return this->math+this->engl+this->cplu;}
	float average(){
		return this->total()/3.0;}
	char* result(){
		if (this->average() < 50){
			return "fail";
		} else {
		return "pass";}}
	char grade(){
		if (this->average() < 50){
			return 'F';	}
			else {
				if(this->average() < 60){
					return 'E';
				} else {
					if (this->average() < 70){
						return 'D';
					} else { 
						if (this->average() < 80){
							return 'C';
						} else {
							if (this->average() < 90){
								return 'B';
							
						} else {
							return 'A';}
						}}
						}}}
	void input(){
		cout << "Enter id"; cin >>  this->id;
		cout << "Enter name";
		cin.getline(this->name, 30);
		cin.getline(this->name, 30);
		cout << "Enter sex"; cin >> this->sex;
		cout << "Enter math";cin >> this->math; 
		cout << "Enter engl";cin >> this->engl;
		cout << "Enter cplu";cin >> this->cplu;
		}
	void print(){
		cout << "id: " << endl;
		cout << "Name: " << this->name << endl;
		cout << "sex: " << this->sex << endl;
		cout << "math: " << this->math << endl;
		cout << "engl: " << this->engl << endl;
		cout << "cplu: " << this->cplu << endl;
		cout << "total: " << this->total() << endl;
		cout << "average: " << this->average() << endl;
		cout << "grade: " << this->grade() << endl;
	}
	void println(){
		for (int i=0; i < strlen(this->name);i++){
			if (this->name[i] == ' '){
				for (int j = i + 1 ; j < strlen(this->name);j++){
					cout << this->name[j];
				}
				cout << endl;
				break;
			}}}
	void setid(int id){
		cout << "Enter id: ";
		cin >> this->id;
	}
	int getid(){
		return this->id;
	}
	void setname(char name[30]){
		cout << "Enter name: ";
		cin.getline(this->name, 30);
	}
	char* getname(){
		return this->name;
	}
};	
int main(){
	Student s1 {};
	s1.input();
	s1.print();
	s1.println();
	return 0;
}