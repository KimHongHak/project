package arraylists;
import java.util.ArrayList;
public class Maintest3 {
    public static void main(String[] args){
        ArrayList<Integer> mynumbers = new ArrayList<>();
        mynumbers.add(10);
        mynumbers.add(15);
        mynumbers.add(20);
        mynumbers.add(25);
        for(int i: mynumbers){
        System.out.println(i);
    }
}}