package james1freedictionary.github.io;

public class Main{
  public static void main(String[] s){
    Linklist a =new Linklist();
    a.addnode(1);
    a.addnode(1);
    a.addnode(2);
    a.addnode(4);
    a.print();
    a.printnumberofelement();
    a.pop();
    a.print();
    a.printnumberofelement();
    a.delete(1);
    a.print();
    a.printnumberofelement();
  }
}
