package awt;
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
public class Product extends Frame{
private Label lblTitle = new Label("Discount Product");
private Label lblcode= new Label("Code: ");
private Label lblProduct = new Label("Product");
private Label lblUnit = new Label("Unit: ");
private Label lblPrice = new Label("Price: ");
private Label lblDiscount  = new Label("Discount: ");
private TextField txtCode = new TextField();
private TextField txtproduct = new TextField();
private TextField txtUnit = new TextField();
private TextField txtPrice = new TextField();
private CheckboxGroup chog = new CheckboxGroup();
private Checkbox cbo5 = new Checkbox("5%", true);
private Checkbox cbo10 = new Checkbox("10%", false);
private Checkbox cbo15 = new Checkbox("15%", false);
private TextArea txtDisplay = new TextArea();
private Button btnAdd =new Button("add");
private Button btnClear =new Button("clear");
private Button btnExit = new Button("Exit");
public Product(){
    setTitle("Product demo");
    setSize(400,425);
    setLocationRelativeTo(null);
    setLayout(null);
    lblTitle.setBounds(100,40,300,20);
    lblTitle.setFont(new Font("Consolar", Font.PLAIN,20));
    add(lblTitle);
    lblcode.setBounds(100,70,160,20);
    add(lblcode);
    lblProduct.setBounds(100,100,160,20);
    add(lblProduct);
    lblUnit.setBounds(100,130,160,20);
    add(txtUnit);
    lblPrice.setBounds(100,160,160,20);
    add(txtPrice);
    lblDiscount.setBounds(20,90,70,20);
    add(lblDiscount);
    cbo5.setBounds(100,190,50,20);
    add(cbo5);
    cbo10.setBounds(150,190,50,20);
    add(cbo10);
    cbo15.setBounds(200, 190,50, 20);
    add(cbo15);
    btnAdd.setBounds(280,70,80,20);
    add(btnAdd);
    btnClear.setBounds(289,100,80,20);
    add(btnClear);
    btnExit.setBounds(200,130,80,20);
    add(btnExit);
    txtDisplay.setBounds(10,240,380,110);
    add(txtDisplay);
    txtDisplay.append("Code\tname\tUnit\tprice\tpay\tdis\n");
    setVisible(true);
    addWindowListener((WindowListener) new Product.Clo());

}
class Clo extends WindowAdapter{
@Override
    public void windowClosing(WindowEvent ae){
        System.exit(0);
        }
    }
    public static void main(String[] args){
    new Product();
    }
}
