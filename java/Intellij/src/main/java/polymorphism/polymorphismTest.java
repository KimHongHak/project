package polymorphism;
class sup{
    void who(){
        System.out.println("who() is sup ");
    }
}
class sub1 extends sup{
    void who(){
        System.out.println("who is sub1");
    }
}
class sub2 extends sup{
    void who(){
        System.out.println("who() is sub2");
    }
}
public class polymorphismTest {
public static void main(String[]  args){
    sup superob = new sup();
    sub1 subob1 = new sub1();
    sub2 subob2 = new sub2();
    sup supRef;
    supRef = superob; supRef.who();
    supRef = subob1; supRef.who();
    supRef = subob2; supRef.who();
}
}
