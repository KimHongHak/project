package awtLayout;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class Card extends JPanel implements ActionListener{
    JPanel fruits, animals;
    JPanel cardholder = new JPanel();
    CardLayout cl;
    public Card() {
        setLayout(new FlowLayout());
        cl = new CardLayout();
        cardholder.setLayout(cl);
        fruits = new JPanel();
        fruits.setLayout(new GridLayout(2, 4));
        JButton app = new JButton("Apple");
        JButton ban = new JButton("banana");
        JButton grp = new JButton("Grape");
        JButton jac = new JButton("Jackfruit");
        JButton man = new JButton("Mango");
        JButton lem = new JButton("Lemon");
        JButton ora = new JButton("orange");
        JButton coc = new JButton("coconut");
        fruits.add(app);
        fruits.add(ban);
        fruits.add(grp);
        fruits.add(jac);
        fruits.add(man);
        fruits.add(lem);
        fruits.add(ora);
        fruits.add(coc);
        animals = new JPanel();
        animals.setLayout(new GridLayout(2, 4));
        JButton ele = new JButton("Elephant");
        JButton cow = new JButton("Cow");
        JButton lio = new JButton("Lion");
        JButton tig = new JButton("Tiger");
        JButton cam = new JButton("Camel");
        JButton dog = new JButton("dog");
        JButton zeb = new JButton("zebra");
        JButton rab = new JButton("rabbit");
        animals.add(ele);
        animals.add(cow);
        animals.add(lio);
        animals.add(tig);
        animals.add(cam);
        animals.add(dog);
        animals.add(zeb);
        animals.add(rab);
        cardholder.add(fruits, "card1");
        cardholder.add(animals, "card2");
        add(cardholder);
        cl.show(cardholder, "catrd1");
        JButton nxt = new JButton("next card");
        add(nxt);
        nxt.addActionListener((ActionListener) this);
    }

    public void actionPerformed(ActionEvent ae){
cl.next(cardholder);


    }
    public static class DemoCardLayout extends JFrame{
        DemoCardLayout(String str){
            super(str);
            add(new Card());
            setSize(370,150);
            addWindowListener(new WindowAdapter() {
                @Override
                public void windowClosing(WindowEvent e) {
                    System.exit(0);
                }
            });
        }
    }
    public static void main(String[] args) throws  Exception{
        UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());
        JFrame clfrm = new  DemoCardLayout("cardlayout jframe");
        clfrm.setLocationRelativeTo(null);
        clfrm.setResizable(false);
        clfrm.setVisible(true);

    }
}
