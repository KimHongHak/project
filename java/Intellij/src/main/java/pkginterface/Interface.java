package pkginterface;
interface Deposit{
    void interest(double principal, int year, double rate);
}
class Simple implements Deposit{
    public void interest(double p, int n, double r){
        double intr, total;
        intr = p*n*r/100.0;
        total = p+intr;
        System.out.println("\nPincipal amount=  USD" + p);
        System.out.println("No of years = " + n);
        System.out.println("Interest rate r= "+r);
        System.out.print("Interest amount = USD " + intr);
        System.out.println("Total amount after "+ n+ "year in simple Interst = USD " + total);

    }
}
class compound implements Deposit{
    public void interest(double p, int n, double r){
        double intr, total;
        total = p*Math.pow(1+r/100,n);
        intr = total - p;
        System.out.println("\nPrincipal amount = USD" + p);
        System.out.println("No of years= " + n);
        System.out.println("Interest rate r= "+r);
        System.out.println("Interest amount = USD "+intr);
        System.out.println("Total amount after "+n+"year in compound interst = USD " + total);
    }
}
public class Interface {
    public static void main(String[] args){
        Simple sim = new Simple();
        compound com = new compound();
        sim.interest(212600,4,12.5);
        com.interest(12500,4,12.5);
    }
}
