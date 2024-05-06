package awt.event;
import awtLayout.DemoPanel1;

import java.awt.*;
import java.awt.event.*;
public class DemoEventClose1 extends Frame {
    public DemoEventClose1(){
        setTitle("First Form");
        setSize(800,500);
        setLocationRelativeTo(null);
        setResizable(false);
        addWindowListener((WindowListener) new Clo());
        setVisible(true);}
        class Clo extends WindowAdapter{
            @Override
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        }
    public static void main(String[] args){
        new DemoEventClose1();
    }
}
