class Person{
	int age;
	String name;
	Person(int a,String n){
		this.age = a;
		this.name = n;
	}

}

class Main{

public static void main(String[] a){


	Person p = new Person(10,"jame");
	System.out.println(p.name);
	System.out.println(p.age);


}
}