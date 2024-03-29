package javadate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class FormatDateTime1 {
    public static void main(String atrgs[]){
        LocalDateTime mydateobj = LocalDateTime.now();
        System.out.println("Before formatting: "+ mydateobj);
        DateTimeFormatter myformatobj = DateTimeFormatter.ofPattern("dd.mm yyyy HH:mm:ss");
        String formatdate = mydateobj.format(myformatobj);
        System.out.println("after formatting: "+ formatdate);
    }
}
