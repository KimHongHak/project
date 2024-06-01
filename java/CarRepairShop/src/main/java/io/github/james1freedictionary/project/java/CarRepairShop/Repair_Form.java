package io.github.james1freedictionary.project.java.CarRepairShop;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

/**
 *
 * @author HK Hong
 */
import javax.swing.*;
import javax.swing.border.*;
import java.awt.event.*;
import java.awt.*;

public class Repair_Form extends JFrame implements ActionListener , KeyListener , ItemListener {
    Border customer_info_Border,Vechile_info_border;
    JPanel title = new JPanel();
    JPanel panel_A = new JPanel();

    JLabel l_customer = new JLabel("Customer's Name:");JTextField customer_name = new JTextField();
    JLabel l_gender = new JLabel("Gender:");JCheckBox[] cus_gender = new JCheckBox[2];
    JLabel l_cus_ID = new JLabel("ID:"); JTextField customer_ID = new JTextField();
    JLabel l_driver_license_ID = new JLabel("License ID:"); JTextField license_ID = new JTextField();
    JLabel l_contract = new JLabel("Contract Number:"); JTextField contract_number = new JTextField(); 
    JLabel l_email = new JLabel("Email:"); JTextField email = new JTextField();
    JLabel l_customer_complaints = new JLabel("Complaint:"); JTextField customer_comp = new JTextField();
    
    JPanel panel_B = new JPanel();  
    Repair_Form(){//--------------------------------------------------------------------------
     
  // Frame and panels configurations 
  //  panel_A.setBackground(Color.blue);
    //panel_B.setBackground(Color.lightGray);
   
    Font set = new Font(Font.DIALOG,Font.PLAIN,14);
    
    GridLayout frame_grid = new GridLayout();
    frame_grid.setColumns(1);
    frame_grid.setRows(2);
    frame_grid.setVgap(20);
         Vechile_info_border = BorderFactory.createTitledBorder("Vechile's Information");
         customer_info_Border = BorderFactory.createTitledBorder("Customer's information");
          panel_A.setBorder(customer_info_Border);
          panel_B.setBorder(Vechile_info_border);
        //  panel_A.setBounds(0,0,1200,500);
         panel_A.setLayout(null);
         panel_B.setLayout(null);
      
     int width=20;
     int y=20;
    //------------------------panel A components and settings------------------------------  
                                               //20 
    l_customer.setBounds         (20,30,120+width,20);l_customer.setFont(set);
   l_cus_ID.setBounds            (110,60+10,50+width,20);l_cus_ID.setFont(set);
    l_gender.setBounds           (82,90+20,50+width,20);l_gender.setFont(set);
    l_driver_license_ID.setBounds(65,120+30,120+width,20);l_driver_license_ID.setFont(set);
    l_contract.setBounds         (28,150+40,150+width,20);l_contract.setFont(set);
    l_email.setBounds            (92,180+50,80+width,20);l_email.setFont(set);
     
     cus_gender[0] = new JCheckBox("Male");
     cus_gender[1] = new JCheckBox("Female");
     cus_gender[0].setFont(set);
     cus_gender[1].setFont(set);

     customer_name.setBounds(150,30,250,25);
     customer_ID.setBounds(150,60+10,250,25);
     cus_gender[0].setBounds(147,90+20,70,20);
     cus_gender[1].setBounds(217,90+20,80,20);
     license_ID.setBounds(150,120+30,250,25);
     contract_number.setBounds(150,150+40,250,25);
     email.setBounds(150,180+50,250,25);
     ButtonGroup checkboxs = new ButtonGroup();
     checkboxs.add(cus_gender[0]);
     checkboxs.add(cus_gender[1]);
    
    
    panel_A.add(l_customer);panel_A.add(customer_name);  
    panel_A.add(l_gender);panel_A.add(cus_gender[0]);panel_A.add(cus_gender[1]);
    panel_A.add(l_cus_ID);panel_A.add(customer_ID);
    panel_A.add(l_driver_license_ID);panel_A.add(license_ID);
    panel_A.add(l_contract);panel_A.add(contract_number);
    panel_A.add(l_email);panel_A.add(email);
        
    
     add(panel_A);
     add(panel_B);
     setTitle("Customer & Vechicle information");
     setDefaultCloseOperation(EXIT_ON_CLOSE); 
     setLayout(frame_grid);
     setResizable(false);
     setSize(1920,1080);
     setLocationRelativeTo(null);
     setVisible(true);    
    }
      public static void main (String[] args){
         Repair_Form st = new Repair_Form();

      }
   

    @Override
    public void actionPerformed(ActionEvent e) {
    }

    @Override
    public void keyTyped(KeyEvent e) {
    }

    @Override
    public void keyPressed(KeyEvent e) {
    }

    @Override
    public void keyReleased(KeyEvent e) {
    }

    @Override
    public void itemStateChanged(ItemEvent e) {
    }
    
}

