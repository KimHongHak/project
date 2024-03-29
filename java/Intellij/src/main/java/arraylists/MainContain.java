package arraylists;
import java.util.ArrayList;
public class MainContain {
    public static void maiN(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        if (list.contains(5))
            System.out.println("5 exist in arraylist");

         else
             System.out.println("5 does not exit in arraylist");
        if(list.contains(2))
        System.out.println("2 exist in the arraylist");
         else System.out.println("2 does not exist in arraylist");

        }
}