package arraylists;
import java.util.ArrayList;
import java.util.Collections;
public class ReverseOrder {
    public static void main(String args[]){
        ArrayList<String> list = new ArrayList<>();
        list.add("Toyota");
        list.add("Ford");
        list.add("mitsubishi");
        list.add("Lexus");
        list.add("Roll Royce");
        list.add("Tesla");
        System.out.println("Unsorted Array:ist: "+ list);
        Collections.sort(list, Collections.reverseOrder());
        System.out.println("Sorted ArrayList" + "In descemnding order" + list);
    }
}
