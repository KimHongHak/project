#include <iostream>
class Human {
    public:
    Human(){
        std::cout << "こにちわ、世界😇" << std::endl;
    }
    template <typename T> void girlfriend(){
        std::cout << "I don't have girlfriend" << std::endl;
    }
    template <typename T> void speak(T language){
        std::cout << "I can speak" << language << std::endl;
    }
    template <typename T> void run(T place){
        std::cout << "I run to" << place << std::endl;
    }
    private:
    template <typename T> void say(){
        std::cout << "愛してます💜" << std::endl;
    }
};
int main(){
    Human jame {};
    jame.speak<std::string>("English");
}