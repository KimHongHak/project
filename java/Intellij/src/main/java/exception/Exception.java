package exception;

public class Exception {
    public static void main(String[] args){
        int mat[] = new int[10];
        try{
            mat[1] = 25;
        }
        catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Array index out of bounds in mat array");

        }
        mat[9] = 15;
        {
            System.out.println("The exception point");
            System.out.println("Last element of mat =" + mat[9]);
        }
    }
}
