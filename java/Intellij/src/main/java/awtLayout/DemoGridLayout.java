package awtLayout;

import java.awt.Button;
import java.awt.Frame;
import java.awt.GridLayout;
import java.awt.Panel;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class DemoGridLayout extends Frame {
Button bt1,bt2,bt3,bt4,bt5,bt6;
public DemoGridLayout(){
    Panel p = new Panel();
    p.setLayout(new GridLayout(3,2));
    bt1 = new Button("one");
    p.add(bt1);
    bt2 = new Button("Two");
    p.add(bt2);
    bt3 = new Button("Three");
    p.add(bt3);
    bt4 = new Button("Four");
    p.add(bt4);
    bt5 =  new Button("five");
    p.add(bt5);
    bt6 = new Button("size");
    p.add(bt6);
    add(p);
    setSize(1100,300);
    setLocationRelativeTo(null);
    setVisible(true);
    addWindowListener(new WindowAdapter() {
        public void windowClosing(WindowEvent e) {
            System.exit(0);
        }
    });}
    public static void main(String[] args){
        new DemoGridLayout();
    }
}
