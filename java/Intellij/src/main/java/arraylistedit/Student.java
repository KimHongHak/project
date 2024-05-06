package arraylistedit;
import java.util.Scanner;
public class Student {
    private String id;
    public String name; //
    private char sex;
    private int age;
public void setName(String sn){
    name = sn;
}
 static Scanner sc = new Scanner(System.in);
public void inputData(){
    System.out.println("Enter id= ");
    id = sc.next();
    System.out.println("Enter name= ");
    name = sc.next();
    System.out.println("Enter Sex= ");
    sex = sc.next().charAt(0);
    System.out.println("Enter age= ");
    age = sc.nextInt();
}
public void outputData(){
    System.out.println(id+" "+name+" "+sex+" "+age );
}
}

