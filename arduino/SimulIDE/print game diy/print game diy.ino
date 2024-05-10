/* Arduino print game
written by brorojame2030@gmail.com */
#include <LiquidCrystal_I2C.h>
#include <StandardCplusplus.h>
#include <vector>
#include <ctime>
#include <cstdlib>
#include "img.h"
LiquidCrystal_I2C lcd(80, 16, 2);
std::vector<byte *> img;
const short btn1 = 6;
const short btn2 = 7;
const short btn3 = 8;
const short btn4 = 9;
void push()
{
    img.push_back(plus);
    img.push_back(minus);
    img.push_back(Heart);
    img.push_back(Bell);
    img.push_back(human);
    img.push_back(smileyFace);
    img.push_back(omega);
    img.push_back(arrow);
}
void setup()
{
    Serial.begin(9600);
    lcd.init();
    lcd.backlight();
    /*     byte* img[] = {plus,minus};
          lcd.createChar(0, img[0]);
             lcd.createChar(1, img[1]);
          lcd.setCursor(0,0);
          lcd.write(byte(0));
                 lcd.setCursor(1,0);
               lcd.write(byte(1)); */
    welcome();
}
void welcome()
{
    push();
    for (int i = 0; i < img.size(); i++)
        lcd.createChar(i, img.at(i));

    for (int i = 0; i < img.size(); i++)
    {
        lcd.setCursor(i, 0);
        lcd.write(i);
    }
    lcd.setCursor(0, 1);
    lcd.print("start");
}
// int random_num()
// {

//     const int range_from = 0;
//     const int range_to = 7;
// /*     std::random_device rand_dev;
//     std::mt19937 generator(rand_dev());
//     std::uniform_int_distribution<int> distr(range_from, range_to);
//     return distr(generator);  */
//     srand(time(NULL));   // Initialization, should only be called once.
//     // int r = rand();      // Returns a pseudo-random integer between 0 and RAND_MAX.
//     int r = range_from + ( std::rand() % ( range_to - range_from + 1 ) );
//     return r;
// }

void start()
{
    std::vector<int> answered;
    bool lost = false;
    for (; !lost;)
    {
        std::vector<int> img_printed;
        lcd.clear();
        for (int i : {0, 2, 4, 6})
        {

            lcd.setCursor(i, 0);
            int r = random(0, 7);

            for (int e : img_printed)
            {

                if (e == r)
                {
                    // r = random(0, 7);
                    r = (r + random(0, 7)) / 2;
                }
            }
            delay(1000);
            img_printed.push_back(r);
            lcd.write(r);
        }

        int tmp;
        while (1)
        {
            delay(100);
            int btnstate1 = digitalRead(6);
            int btnstate2 = digitalRead(7);
            int btnstate3 = digitalRead(8);
            int btnstate4 = digitalRead(9);
            if (btnstate1 == HIGH)
            {

                tmp = img_printed.at(0);

                break;
            }
            else if (btnstate2 == HIGH)
            {
                tmp = img_printed.at(1);

                break;
            }
            else if (btnstate3 == HIGH)
            {
                tmp = img_printed.at(2);

                break;
            }
            else if (btnstate4 == HIGH)
            {
                tmp = img_printed.at(3);

                break;
            }
        }
        for (int a : answered)
        {
            if (tmp == a)
            {
                lcd.clear();

                lcd.print("you lost");
                lost = true;
            }
        }
        answered.push_back(tmp);
        if (answered.size() == 7)
        {
            lcd.clear();
            lcd.print("you win");
            break;
        }
    }
}
void loop()
{
    // blink lcd
    {
        lcd.noDisplay();
        delay(500);
        // Turn on the display:
        lcd.display();
        delay(500);
    }
    int btnstate1 = digitalRead(6);
    int btnstate2 = digitalRead(7);
    int btnstate3 = digitalRead(8);
    int btnstate4 = digitalRead(9);
    if (btnstate1 == HIGH || btnstate2 == HIGH || btnstate3 == HIGH || btnstate4 == HIGH)
    {
        lcd.clear();
        start();
    }
}
