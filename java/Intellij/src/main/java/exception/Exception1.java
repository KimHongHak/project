package exception;

public class Exception1 {
    public static void main(String args[]){
        int name[] = new int[4];
        try{
            System.out.println("Before exception is generated");
            name[7] = 10;
            System.out.println("This wont be displayed");
        }
        catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Index outofbound");
        }
        System.out.println("After catch statement");
    }
}
