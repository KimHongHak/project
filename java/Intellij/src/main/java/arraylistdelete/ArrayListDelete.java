package arraylistdelete;
import  arraylistedit.Student;
import static arraylistedit.ArrayListEditData.sc ;

import java.lang.reflect.Array;
import java.util.ArrayList;
public class ArrayListDelete {
    public static void delete(ArrayList<Student> stu){
        System.out.print("Enter Student name to delete: ");
        String sname = sc.next();
        for(int i=0;i< stu.size();i++){
            if(stu.get(i).name.equalsIgnoreCase((sname))){
                stu.remove((i));
            }
        }}
        public static void main(String[] args){
            int n;
            System.out.println("Enter n= ");
            n=sc.nextInt();
            ArrayList<Student> stu = new ArrayList<>();
            for(int i=0;i<n;i++){
                Student st= new Student();
                st.inputData();
                stu.add(st);

        }
            System.out.println("\n Data Before Delete");
            for(Student s: stu)
                s.outputData();
            delete(stu);
            System.out.println("\n Data After Deleted ");
            for(Student s: stu)
                s.outputData();
    }

}
