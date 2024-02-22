// Copyright 2024, brorojame2030@gmail.com
package james1freedictionary.github.io;
import javax.swing.JOptionPane;
import javax.swing.JTextArea;
public class employee {
        String id;
        String name;
        char sex;
        int age;
        float salary;
        String  inputString(String str){
            return JOptionPane.showInputDialog(null,str);
        }
        void inputData(){
            id=inputString("Enter id=");
            name=inputString("Enter name=");
            sex=inputString("Enter sex=").charAt(0);
            age=Integer.parseInt((inputString("Enter age=")));
            salary=Float.parseFloat(inputString(("Enter salary=")));
        }
        float taxsalary(float salary){
        if(  salary>12500000){
       return salary*20/100;
        } else {
            if(salary>=8500001){
                return salary*15/100;}
                else {
                        if(salary>=2000001){
                            return salary*10/100;}
                            else{if(salary>=1500001){
                                return salary*5/200;}
                            else {
                                if(salary>=0){
                            return 0;}}}
        }} return  0;
        }
    public static void main(String[] args){
            int n=Integer.parseInt(JOptionPane.showInputDialog(null,"Enter n="));
            employee[] e = new employee[n];
            for(int i=0;i<n;i++){
                e[i] = new employee();
                e[i].inputData();
            }
            String s ="id\tname\tsex\tage\tsalary\ttaxsalary\n";
            for(int i=0;i<n;i++){
            s = s + e[i].id+"\t"+e[i].name+"\t"+e[i].sex+"\t"+e[i].age+"\t"+e[i].salary+"\t"+e[i].taxsalary(e[i].salary)+"\n";
            }
            System.out.println(s);
            JOptionPane.showMessageDialog(null,new JTextArea(s));
        }
}
