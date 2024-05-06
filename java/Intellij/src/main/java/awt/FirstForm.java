package awt;
import java.awt.Frame;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
public class FirstForm extends Frame{
    public FirstForm(){
        setTitle("First Form");
        setSize(500,500);
        setLocationRelativeTo(null);
        setResizable(false);
        addWindowListener((WindowListener) new clo());
        setVisible(true);
    }
}
class clo extends WindowAdapter{
    public void windowClosing(WindowEvent ar){
        System.exit(0);
    }
    public static void main(String[] args){
        new FirstForm();
    }
}

