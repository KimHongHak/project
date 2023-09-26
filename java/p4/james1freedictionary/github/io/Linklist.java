package james1freedictionary.github.io;
public class Linklist{
  private Node head;
  private int n;
  Linklist(){
    this.head = null;
    this.n = 0;
  }
  public void delete(int data){
    while (this.head.data == data){
      this.head = this.head.next;
    }
    Node tmp = this.head;
    while(tmp.next != null){
      while(tmp.next.data == data){
        tmp.next = tmp.next.next;
        continue;
      }
      tmp = tmp.next;
    }
  }
  private int getnumberofelement(){
    Node tmp = this.head;
    int i = 0;
    while(tmp != null){
      i++;
      tmp = tmp.next;
    }
    this.n = i;
    return this.n;
  }
  public void printnumberofelement(){
    System.out.println("numberofelement: "+this.getnumberofelement());
  }
  public void pop(){
    if (this.head.next == null){
      this.head = null;
      return;
    }
    Node tmp = this.head;
    while(tmp.next != null && tmp.next.next != null){
      tmp = tmp.next;
    }
    tmp.next = null;
  }
  public void addnode(int data){
    Node newnode = new Node(data);
    if(this.head == null){
      this.head = newnode;
      return;
    }
    Node tmp = this.head;
    while(tmp.next != null){
      tmp = tmp.next;
    }
    tmp.next = newnode;
  }
  public void print(){
    if (this.head == null){
      System.out.println("Empty Arraylist");
      return;
    }
    Node tmp = this.head;
    while(tmp != null){
      System.out.println(tmp.data);
      tmp = tmp.next;
    }

  }
}
