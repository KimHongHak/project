package javadate;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class FormatDateTime {
    public static void main(String[] args){
        LocalDateTime mydateobj = LocalDateTime.now();
        System.out.println("BEfore formattinf: "+mydateobj);
        DateTimeFormatter myformatobj = DateTimeFormatter.ofPattern("dd-mm-yyyy HH:MM:SS ");
        String formatdate = mydateobj.format(myformatobj);
        System.out.println("after formatting: "+formatdate);
    }
}
