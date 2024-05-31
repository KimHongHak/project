package io.github.james1freedictionary.project.java.CarRepairShop;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class RecieptForm extends JFrame{
    private JLabel Rec = new JLabel("Payment Receipt");
    private JLabel Date = new JLabel("Date: ");
    private JLabel RecieptNumber = new JLabel("Receipt Number: ");
    private JLabel Qty = new JLabel("QTY");
    private JLabel Description = new JLabel("Description");
    private JLabel UNIT_PRICE = new JLabel("Unit Price");
    private JLabel Amount = new JLabel("Amount");
    private JLabel Total = new JLabel("Total");

    void dosetBoundsandadd(){
        Rec.setBounds(150,10, 200,20);
        add(Rec);
        Date.setBounds(10,30, 100,20);
        add(Date);
        RecieptNumber.setBounds(10,50, 200,20);
        add(RecieptNumber);
        Total.setBounds(10,70,100,20);
        add(Total);
        printjtable();


    }
    void printjtable(){
        String data[][]={ {"10","repair brake","$600","$12000"},
        };
        String column[]={"QTY","Description","Unit Price","Amount"};
        JTable jt=new JTable(data,column);
//        jt.setBounds(10, 90,100,200);
        JScrollPane sp=new JScrollPane(jt);
        sp.setBounds(40, 100,400,500);
        add(sp);
    }
    RecieptForm(){

        setLocationRelativeTo(null);
        setTitle("Receiption Form");
        setSize(500,800);
        setLayout(null);
        setResizable(false);
        setVisible(true);
        dosetBoundsandadd();
    }
}
