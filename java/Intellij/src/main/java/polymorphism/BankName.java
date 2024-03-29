package polymorphism;
abstract class Deposit{
    double principal;
    int year;
    abstract double Interest(int p, double rate, int year);

}
 class Simple extends Deposit{
     double Interest(int p, double rate, int year){
        principal = p;
        this.year = year;
        double total = p * (1+year*rate/100);
        return total;
    }
}
 class compound extends Deposit{
    double Interest(int p, double rate, int year){
        principal = p;
        this.year = year;
        double total = p*Math.pow((1+rate/100), year);
        return total;
    }
}
public class BankName {
    public static void main(String[] args){
        Deposit d1 = new Simple();
        Deposit d2 = new compound();
        double s1 = d1.Interest(1, 1.2, 2020);
        double s2 = d2.Interest(1, 1.2, 2020);
        System.out.println(s1);
        System.out.println(s2);

    }
}
