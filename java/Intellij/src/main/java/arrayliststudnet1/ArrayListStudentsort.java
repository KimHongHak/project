package arrayliststudnet1;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
class Student{
    private String id;
    String name;
    private char sex;
    private int age;
    static Scanner sc = new Scanner(System.in);
    void inputData(){
        System.out.println("Enter id= ");
        id = sc.next();
        System.out.println("Enter name= ");
        name = sc.next();
        System.out.println("Enter sex =");
        sex = sc.next().charAt(0);
        System.out.println("Enter age=");
        age = sc.nextInt();
    }
    public void outputData(){
        System.out.println(id + " " + name + " " + sex + " " + age);
    }
}
public class ArrayListStudentsort {
    static Scanner sc = new Scanner (System.in);
    public static void main(String[] args){
        int n;
        System.out.println("Enter n=");
        n = sc.nextInt();
        ArrayList<Student> stu = new ArrayList<>();
        for(int i=0; i<=n;i++){
            Student st = new Student();
            st.inputData();
            stu.add(st);
        }
        System.out.println("\n Data Before sort");
        for(Student s: stu) s.outputData();

            sort(stu);
            System.out.println("\nData After sorted");
            for(Student s:stu) s.outputData();}
public static void sort(ArrayList<Student> st){
        Collections.sort(st,(s1,s2)->s1.name.compareToIgnoreCase(s2.name));
}

}

