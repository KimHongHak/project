package awt.event;

import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

public class DemoEventClose2 extends Frame {
    public DemoEventClose2(){
        setTitle("First Form");
        setSize(800,500);
        setLocationRelativeTo(null);
        setResizable(false);
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
        setVisible(true);}
    public static void main(String[] args){
        new DemoEventClose2();
    }
}
