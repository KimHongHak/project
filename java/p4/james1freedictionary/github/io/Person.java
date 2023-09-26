package james1freedictionary.github.io;
public class Person{
  private int id;
  private String name;
  private int age;
  Person(int id,String name,int age){
    System.out.println(this.id+this.name+this.age);
  }
  public void Do(){
    System.out.println("I am "+this.name);
  }
}
