#include <iostream>
#include <cmath>
void _4_1(int num, int base){
// work for both positive num and negative num
    int i = 0;
    while (num != 0){
        std::cout << num % 10 << "*" << base << "^"<< i;
        if (num >= 10){
        std::cout << "+";}
        num = num / 10;
        i++; 
    }
    std::cout << std::endl;
}
void _4_2(float num, int radix){
    float tmp = num;
    int i = 0;
    while (tmp - (int)floor(tmp) != 0){
        tmp *= 10;
        i--;
        std::cout << (int) floor(tmp) % 10 << "*" << radix << "^"<<i;
        std::cout << "+";
    }
    tmp = num;
    i = 0;
        while (tmp >=1){
        std::cout << (int) floor(tmp) % 10 << "*"<<radix<<"^"<<i;
        if (tmp >= 10){
            std::cout << "+";
        }
        tmp /= 10;
        i++;
    }
    std::cout << std::endl;
}
void _4_3(float num, int radix){
    float result = -0;
    float tmp = num;
    int i = 0;
    while (tmp - (int)floor(tmp) != 0){
        tmp *= 10;
        i--;
        result = result + ((int) floor(tmp) % 10)*pow(radix,i);
// (int) floor(tmp) % 10 << "*" << radix << "^"<<i;
    }
    tmp = num;
    i = 0;
        while (tmp >=1){
        result += (int) floor(tmp) % 10 * pow(radix,i);
        // std::cout << (int) floor(tmp) % 10 << "*"<<radix<<"^"<<i;
        tmp /= 10;
        i++;
    }
    std::cout << result << std::endl;
}
int main(){
    float a;
    char b;
    std::cout << "4.1 conert to power form" << std::endl;
    std::cout << "a. (3101)4"<< std::endl;
    std::cout << "b. (4321)5"<< std::endl;
    std::cout << "c. (5432)6"<< std::endl;
    std::cout << "d. (56731)8"<< std::endl;
    std::cout << "e. (416)9"<< std::endl;
    std::cout << "4.2 convert to power form" << std::endl;
    std::cout << "a. (735.426)9" << std::endl;
    std::cout << "b. (23.012)6" << std::endl;
    std::cout << "c. (AD.7B)16" << std::endl;
    std::cout << "d. (564.3240)8" << std::endl;
    std::cout << "4.3  convert to decimal number" << std::endl;
    std::cout << "a. (2153)6" << std::endl;
    std::cout << "b. (4321)5" << std::endl;
    std::cout << "c. (21.650)7" << std::endl;
    std::cout << "d. (754.823)9" << std::endl;
    std::cout << "Please, choose one of them: ";
    std::cin >> a;
    if (a == (float)4.1){
        std::cout << "Please, choose one more: ";
        std::cin >> b;
        switch(b){
            case 'a':
            _4_1(3101,4);break;
            case 'b':
            _4_1(4321,5); break;
            case 'c':
            _4_1(5432,6); break;
            case 'd':
            _4_1(56731,8);break;
            case 'e':
            _4_1(416,9);break;
            default: std::cout<< "nope" << std::endl;
        }
    } else if (a == (float)4.2){
        std::cout << "Please, choose one more: ";
        std::cin >> b; 
        switch (b){
            case 'a':
            _4_2(735.426,9); break;
            case 'b':
            _4_2(23.012,6);break;
            case 'c':
            std::cout << "10*16^1+13*16^0+7*16^-1+11*16^-2"<< std::endl;break;
            case 'd':
            _4_2(564.3240,8);break;
            default: std::cout<< "nope" << std::endl; }
    }else if (a == (float)4.3){
        std::cout << "Please, choose one more: ";
        std::cin >> b; 
        switch(b){
            case 'a':
            _4_3(2153,6);break;
            case 'b':
            case 'c':
            case 'd':
            default: std::cout<< "nope" << std::endl; }
        }
    else {
    std::cout << "nope" <<  std::endl;
    } 
  
    return 0;
}