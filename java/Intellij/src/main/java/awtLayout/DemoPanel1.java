package awtLayout;
import java.awt.*;
import java.awt.event.*;
public class DemoPanel1 extends Frame implements ActionListener {
    double total = 0;
    private Label lblTitle = new Label("Book store");
    private Label lblB_ID = new Label("Book ID: ");
    private Label lblB_Qty = new Label("Book Qty");
    private Label lblB_Price = new Label("Book Priice");
    private Choice choB_Id = new Choice();
    private TextField txtB_Qty = new TextField();
    private TextField txtB_price = new TextField();
    private TextArea txtDisplay = new TextArea();
    private Button btninsert = new Button("insert");
    private Button btntotal = new Button("total");
    private Button btnexit = new Button("Exit");
    private Panel pnlContent = new Panel(new GridLayout(3,2));
    private Panel pnltext = new Panel(new GridLayout());
    private Panel pnlbutton = new Panel(new FlowLayout());
    private Panel pnldisplay = new Panel(new BorderLayout());
    public DemoPanel1(){
        setSize(400,920);
        setLayout(new BorderLayout());
        choB_Id.add("book1");
        choB_Id.add("book2");
        choB_Id.add("book3");
        choB_Id.add("book4");
        choB_Id.add("book5");
        add(lblTitle, BorderLayout.NORTH);
        add(pnlContent, BorderLayout.CENTER);
        pnlContent.add(pnltext, BorderLayout.NORTH);
        pnlContent.add(pnldisplay, BorderLayout.CENTER);
        pnltext.add(lblB_ID);
        pnltext.add(choB_Id);
        pnltext.add(lblB_Qty);
        pnltext.add(txtB_Qty);
        pnltext.add(lblB_Price);
        pnltext.add(txtB_price);
        btnexit.addActionListener(this);
        btninsert.addActionListener(this);
        btntotal.addActionListener((ActionListener) this);
        pnlbutton.add(btninsert);
        pnlbutton.add(btntotal);
        pnlbutton.add(btnexit);
        pnldisplay.add(pnlbutton, BorderLayout.NORTH);
        pnldisplay.add(txtDisplay, BorderLayout.CENTER);
        setBackground(Color.cyan);
        setLocationRelativeTo(null);
        setVisible(true);
    }
    public void actionPerformed(ActionEvent ae){
        double q,p,t;
        if(ae.getSource() == btninsert){
            q = Double.parseDouble(txtB_Qty.getText());
            p = Double.parseDouble(txtB_price.getText());
            t = q * p;
            total += t;
            txtDisplay.append(choB_Id.getSelectedItem()+ "\t" + txtB_Qty.getText()+"\t"+ txtB_price.getText()+ "\t"+"\n");
    if(ae.getActionCommand() == "Total") txtDisplay.append("\t\ttotal : \t"+ total + "\n") ;
    if (ae.getSource()==btnexit) System.exit(0);
        }

    }
public static void main(String[] args){
        new DemoPanel1();
}
}
