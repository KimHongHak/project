package arraylists;
import java.util.ArrayList;
import java.util.Collections;
public class ArrayListSort {
    public static void main(String[] args){
        ArrayList<String> cars = new ArrayList<>();
        cars.add("volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        Collections.sort(cars);
        for(String i: cars){
            System.out.println(i);
        }
    }
}
