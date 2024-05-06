package arraylistedit;
import java.util.ArrayList;
import java.util.Scanner;
import java.lang.String;
public class ArrayListEditData {
    public static void edit(ArrayList<Student> stu){
        System.out.print("Enter Studdent name to edits");
        String sname = sc.next();
        for(int i=0;i<stu.size();i++){
            if(stu.get(i).name.equalsIgnoreCase(sname)){
                stu.get(i).inputData();
            }
        }


    }
    public static Scanner sc = new Scanner(System.in);//
    public static void main(String[] args){
        int n;
        System.out.println("Enter n= ");
        n=sc.nextInt();
    ArrayList<Student> stu = new ArrayList<>();
    for(int i=0;i<n;i++){
        Student st = new Student();
        st.inputData();
        stu.add(st);
    }
    System.out.println("\n Data Before Edut");
    for(Student s: stu)
        s.outputData();
    edit(stu);
    System.out.println("\n Data After Edited");
    for(Student s: stu){
        s.outputData();
    }
    }
}
