package exception;

import javax.naming.directory.AttributeInUseException;

public class ExceptionDemo1 {
    public static void main(String args[]){
        int namer[] = {4,8,16,32,64,128,256,512};
        int denom[] = {2,0,4,4,0,8};
        for(int i=0; i <namer.length;i++){
            try{
                System.out.println(namer[i] + "/"+denom[i]+"is"+namer[i]/denom[i]);
            }
            catch (ArithmeticException exc){
                System.out.println("Cant divide by zero");
            }
            catch (ArrayIndexOutOfBoundsException exc){
                System.out.println("No matching elemnet found");
            }
        }
    }
}
