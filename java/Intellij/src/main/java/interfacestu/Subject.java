package interfacestu;

public class Subject {
private double java;
private double vb;
private double network;
public Subject(double java, double vb, double network){
    this.setJava(java);
    this.setVb(vb);
    this.setNetwork(network);

}
public double getJava(  ){
    return java;

}
public void setJava(double java){
    this.java = java;
}
public double getVb(){
    return vb;
    }
public void setVb(double vb){
    this.vb = vb;
}
public double getNetwork(){
    return network;
}
public void setNetwork(double network){
    this.network = network;
}
public String toString(){
    return java + "\t"+vb+"\t"+ network + "\t";
}
}
