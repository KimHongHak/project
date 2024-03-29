package abstractclass;
import java.util.ArrayList;
abstract class Animal{
    abstract void sound();
}
class Dog extends Animal{
    public void sound(){
        System.out.println("wolf");
    }
}
class Pig extends Animal{
    public void sound(){
        System.out.println("Ouk");
    }
}
class Cat extends Animal{
    public void sound(){
        System.out.println("Meow");
    }
}
class Mouse extends Animal{
    public void sound(){
        System.out.println("Wimieu");
    }
}
public class Animaltest {
    public static void main(String[] args){
        ArrayList<Animal> list = new ArrayList<>();
        Dog d = new Dog();
        list.add(d);
        Cat c = new Cat();
        list.add(c);
        Pig p = new Pig();
        list.add(p);
        Mouse m = new Mouse();
        list.add(m);
        System.out.println("=================");
        for(int i=0;i<list.size(); i++){
            list.get(i).sound();
        }
    }
}
