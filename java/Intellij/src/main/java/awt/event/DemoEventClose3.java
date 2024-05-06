package awt.event;

import java.awt.*;
import java.awt.event.*;


public class DemoEventClose3 extends Frame {
    private Button btnclose = new Button("close");
    public DemoEventClose3(){
      btnclose.setBounds(150,220,50,20);
      add(btnclose);
        setTitle("First Form");
        setSize(800,500);
        setLocationRelativeTo(null);
        setResizable(false);
     btnclose.addActionListener(new ActionListener() {
         @Override
         public void actionPerformed(ActionEvent actionEvent) {
             System.exit(0);
         }
     });
        setVisible(true);}
    public static void main(String[] args){
        new DemoEventClose3();
    }
}
