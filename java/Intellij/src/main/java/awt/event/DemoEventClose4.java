package awt.event;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


public class DemoEventClose4 extends Frame implements ActionListener{
    private Button btnclose = new Button("close");
    public DemoEventClose4(){
      btnclose.setBounds(150,220,50,20);
      add(btnclose);
        setTitle("First Form");
        setSize(800,500);
        setLocationRelativeTo(null);
        setResizable(false);
     btnclose.addActionListener(this);
        setVisible(true);}
    public void actionPerformed(ActionEvent e){
        System.exit(0);
    }
    public static void main(String[] args){
        new DemoEventClose4();
    }
}
