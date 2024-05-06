package awt;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.awt.print.Book;

public class BookStore extends Frame{
    private Label lblTitle = new Label("Book Store: ");
    private Label lblB_ID = new Label("Book ID: " );
    private Label lblB_Qty = new Label("Book Qty: ");
    private Label lblB_Price = new Label("Book Price: ");
    private Choice chcB_ID = new Choice();
    private TextField txtB_Qty = new TextField();
    private TextField txtB_Price = new TextField();
    private TextArea txtDisplay = new TextArea();
    private Button btnAdd = new Button("add");
    private Button btnTotal = new Button("Total");
    private Button btnExit = new Button("Exit");
    public BookStore(){
        add(lblTitle);
        add(lblB_ID);
        add(lblB_Price);
        add(chcB_ID);
        add(txtB_Qty);
        add(txtB_Price);
        add(btnAdd);
        add(btnTotal);
        add(btnExit);
        add(txtDisplay);
        lblTitle.setAlignment(Label.CENTER);
        lblTitle.setBounds(5, 30,500,20);
        lblB_ID.setBounds(130,60,70,20);
        lblB_Qty.setBounds(130,85,70,20);
        lblB_Price.setBounds(130,110,70,20);
        chcB_ID.setBounds(210,60,150,20);
        txtB_Qty.setBounds(210,60,150,20);
        txtB_Price.setBounds(210,110,150,20);
        btnAdd.setBounds(135,135,70,30);
        btnTotal.setBounds(210,135,70,70);
        btnExit.setBounds(288,135,70,30);
        txtDisplay.setBounds(50,170,390,160);
        setTitle("Book Store");
        chcB_ID.add("Book1");
        chcB_ID.add("Book2");
        chcB_ID.add("Book3");
        chcB_ID.add("Book4");
        chcB_ID.add("Book5");
        txtDisplay.append("B_ID\tB_Qty\tB_Price\tB_total\n");
        setSize(500,300);
        setLayout(null);
        setLocationRelativeTo(null);
        setResizable((false));
        setVisible(true);
        addWindowListener((WindowListener) new Clo());

    }
     class Clo extends WindowAdapter{
         @Override
         public void windowClosing(WindowEvent e) {
            System.out.println("hee");
            System.exit(0);
         }
     }
    public static void main(String[] args){
    new BookStore();
}}

