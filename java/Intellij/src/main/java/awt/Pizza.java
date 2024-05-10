package awt;
import java.awt.*;
import java.awt.event.*;

public class Pizza extends Frame{
    private Label lblTitle = new Label("Pizza v1.0");
    private Label lblkind = new Label("kind");
    private Choice chkind = new Choice();
    private CheckboxGroup cg = new CheckboxGroup();
    private Checkbox cbo1 = new Checkbox("small", cg, false);
    private Checkbox cbo2 = new Checkbox("Large ", cg, false);
    private Checkbox cbo3 = new Checkbox("Large ", cg, false);

    private Label lblPrice = new Label("Qty: ");
    private TextField txtPrice = new TextField();
    private Label lblqty = new Label("qty: ");
    private TextField txtqty = new TextField();
    private TextArea txtDisplay = new TextArea();
    private Button btnadd = new Button("add");
    private Label lbltotal = new Label("Total");
    private TextField txttotal = new TextField("0");
    int total = 0;
    public Pizza(){
        lblTitle.setBounds(150,20,100,50);
        add(lblTitle);
        lblkind.setBounds(100,100,100,30);
        chkind.add("A");
        chkind.add("B");
        chkind.add("C");
        chkind.add("D");
        chkind.setBounds(200,70,150,30);
        add(chkind);

        cbo1.setBounds(100,100,70,30);
        add(cbo1);
        cbo2.setBounds(200, 100,70,30);
        add(cbo2);
        cbo3.setBounds(300,100,70,90);
        add(cbo3);
        lblPrice.setBounds(100,150,100,50);
        add(lblPrice);
        txtPrice.setBounds(200,150,150,30);
        add(txtPrice);
        lblqty.setBounds(100,200,100,30);
        add(lblqty);
        txtqty.setBounds(200,200,150,30);
        add(btnadd);
        txtDisplay.setBounds(50,240,400,150);
        add(txtDisplay);
        lbltotal.setBounds(100,450,100,38);
        add(lbltotal);
        txttotal.setBounds(200,450,150,70);
        add(txttotal);
        setSize(550,500);
        setLocationRelativeTo(null);
        setLayout(null);
        setVisible(true);
        setResizable(false);
        txtDisplay.setEditable(false);
        txttotal.setEditable(false);
        btnadd.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent actionEvent) {
                String txtservice = "";
                txtDisplay.append(txtPrice.getText()+"\t" + txtqty.getText()+"\t"+chkind.getSelectedItem()+"\t");
            if(cbo1.getState()==true)txtservice = "cSmall";
            if(cbo2.getState()==true ) txtservice = "Meium";
            if(cbo3.getState()==true) txtservice = "Long";
            txtDisplay.append(txtservice+"\n");
            total= Integer.parseInt(txttotal.getText());
            total += Integer.parseInt(txtPrice.getText());
            txttotal.setText(String.valueOf(total));
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
        new Pizza();
    }
}
