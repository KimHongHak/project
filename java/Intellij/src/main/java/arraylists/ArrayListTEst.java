package arraylists;
import java.util.ArrayList;
public class ArrayListTEst {
    public static void main(String[] args){
        ArrayList<String> name = new ArrayList<>();
        name.add("Ronaldo");
        display(name);
        name.add("Vattanaka");
        display(name);
        name.add("mmappl");
        display(name);
        name.add(2, "neymar");
        display(name);
        System.out.println("size of all element "+name.size());
        name.remove(1);
        display(name);
        System.out.println("size of all element "+name.size());
        name.set(0, "masel");
        display(name);


    }
    public static void display(ArrayList name){
        System.out.println("\n The sixze of the list is"+ name.size());
        for(int i=0;i<name.size();++i){
            System.out.println("Postion "+ i + "Name: "+name.get(i));
        }
    }
}
