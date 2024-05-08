package awt;
import java.awt.*;
import java.awt.event.*;
public class Student_form extends Frame {
    private Label stu_form = new Label("Student Form");
    private Label id = new Label("id");
    private Label name = new Label("name");
    private Label sex = new Label("Sex");
    private Button add = new Button("add");
    private Button clear = new Button("clear");
    private  Button exit = new Button("exit");
    private TextField txtid = new TextField();
    private TextField txtname = new TextField();
    private  TextField txtsex = new TextField();
//    private  TextField txt = new TextField();
    private TextArea txt = new TextArea();
    public Student_form(){
        setSize(300,500);
        setLocationRelativeTo(null);
        setLayout(null);
        setTitle("Student Form");
        setResizable(true);
        setVisible(true);
        stu_form.setBounds(80,60,150,20);
        id.setBounds(50,100,40,20);
        name.setBounds(50,150,40,20);
        sex.setBounds(50,200,40,20);
        txtid.setBounds(100,100,80,20);
        txtname.setBounds(100,150,80,20);
        txtsex.setBounds(100,200,80,20);
        add.setBounds(50,250,50,20);
        clear.setBounds(100,250,50,20);
        exit.setBounds(150,250,50,20);
        txt.setBounds(50,300,230,100);
        txt.setEditable(false);
        add(stu_form);
        add(id);
        add(name);
        add(sex);
        add(txtid);
        add(txtname);
        add(txtsex);
        add(add);
        add(clear);
        add(exit);
        add(txt);
        add.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent actionEvent) {
                String s = txt.getText();
                String s1 = txtid.getText();
                String s2 = txtname.getText();
                String s3 = txtsex.getText();
                String ss = s1+'\t'+s2+"\t"+s3+"\n";
                 s = s + ss;
                txt.setText(s);
            }
        });
        clear.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent actionEvent) {
                txt.setText("");
            }
        });
        exit.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent actionEvent) {
                System.exit(0);
            }
        });
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
    }
    public static void main(String[] args){
        new Student_form();
    }
}
