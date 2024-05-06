package awt.exercise;
import java.awt.*;
import java.awt.event.*;
public class sum extends Frame{
private Label l1 = new Label("Input A");
private Label l2 = new Label("Input B");
private Button s = new Button("Sum");
private TextField t1 = new TextField();
private TextField t2 = new TextField();
private TextField t3 = new TextField();
public sum(){
    setTitle("Sum program");
    setSize(800,500);
    setLocationRelativeTo(null);
    setVisible(true);
    setResizable(true);
    setLayout(null);

    l1.setBounds(50, 50, 50,50);
    l2.setBounds(50, 100, 50,50);
    s.setBounds(50, 150, 50,50);
    t1.setBounds(100, 50, 200,50);
    t2.setBounds(100, 100, 200,50);
    t3.setBounds(100, 150, 200,50);
    t3.setEditable(false);
    add(l1);
    add(l2);
    add(s);
    add(t1);
    add(t2);
    add(t3);
    s.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent actionEvent) {
            String s1 = t1.getText();
            String s2 = t2.getText();
            int a = Integer.parseInt(s1);
            int b = Integer.parseInt(s2);
            int c = a + b;
            String r = String.valueOf(c);
            t3.setText(r);
        }
    });
addWindowListener(new WindowAdapter() {
    @Override
    public void windowClosing(WindowEvent e) {
        System.exit(0);
    }
});
}
public static void main(String[ ] args){
    new sum();
}
}
