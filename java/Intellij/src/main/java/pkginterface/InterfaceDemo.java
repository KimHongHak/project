package pkginterface;
interface Newyear{
    void welcome();
}
class Khmer implements Newyear{
    public void welcome(){
        System.out.println("Soursdey chhnam They");
    }
    public void hello(){
        System.out.println("hello");
    }
}
class International implements Newyear{
    public void welcome(){
        System.out.println("Happy New Year");
    }
}
public class InterfaceDemo {
    public static void main(String args[]){
        Khmer k = new Khmer();
        k.welcome();
        International i = new International();
        i.welcome();
        Newyear n;
        n = new Khmer(); n.welcome();
        n = new International(); n.welcome();
    }
}
