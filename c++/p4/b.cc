#私はOOPを書きます
#include <iostream>
using namespace std;
class Mail{
private:
	char fn[20],ln[20],mail[50];
public:
	void input(){
		cout << "fn "; cin >> fn;
		cout << "ln "; cin >> ln;
		cout << "email "; cin >> mail;
	}
	void output(){
		cout << "full name: " << fn << ' '<<ln<<endl;
		cout << "email: " << mail << endl;
	}

};
int main(){
	Mail mail1;
	mail1.input();
	mail1.output();
	return 0;
}
