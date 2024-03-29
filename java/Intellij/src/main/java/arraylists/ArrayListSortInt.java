package arraylists;
import java.util.ArrayList;
import java.util.Collections;
public class ArrayListSortInt {
    public static void main(String[] args){

        ArrayList<Integer> mynumbers = new ArrayList<>();
        mynumbers.add(33);
        mynumbers.add(15);
        mynumbers.add(20);
        mynumbers.add(34);
        mynumbers.add(8);
        mynumbers.add(12);
        Collections.sort(mynumbers);
        for(int i: mynumbers){
            System.out.println(i);
        }
    }}

