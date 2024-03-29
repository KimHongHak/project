package arraylists;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.ListIterator;

public class ArrayListIterator {
    public static void main(String atrgs[]){
        try{
            ArrayList<String> arrlist = new ArrayList<>();
            arrlist.add("A");
            arrlist.add("B");
            arrlist.add("C");
            arrlist.add("D");
            System.out.println("Arraylist; "+arrlist);
            ListIterator<String> Iterator = arrlist.listIterator();
            System.out.println("\n using listiterator\n");
            while(Iterator.hasNext()){
                System.out.println("Value is :" + Iterator.next());
            }

        }
        catch (NullPointerException e){
            System.out.println(("Exception throuwn: " + e));
        }

    }
}
