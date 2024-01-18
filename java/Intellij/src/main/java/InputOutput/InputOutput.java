
package InputOutput;

import java.util.Scanner;

public class InputOutput {
    public InputOutput() {
    }

    public static void main(String[] var0) {
        Scanner var3 = new Scanner(System.in);
        System.out.print("math: ");
        float var1 = var3.nextFloat();
        System.out.println("eng: ");
        float var2 = var3.nextFloat();
        System.out.println("math: " + var1 + "\neng: " + var2);
        System.out.println("hu");
    }
}
