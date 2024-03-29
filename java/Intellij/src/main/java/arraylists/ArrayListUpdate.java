package arraylists;
import java.util.ArrayList;
public class ArrayListUpdate {
    public static void maiN(String[] args){
        try {
            ArrayList<Integer> arrlist = new ArrayList<>();
            arrlist.add(1);
            arrlist.add(2);
            arrlist.add(3);
            arrlist.add(4);
            arrlist.add(5);
            System.out.println("Before Operation: " + arrlist);
            int i = arrlist.set(3,30);
            System.out.println("After operation: "+arrlist);
            System.out.println("Replaced element: " + i);

        }
        catch (IndexOutOfBoundsException e){
            System.out.println("Exception thrown: " + e);
        }
    }
}
