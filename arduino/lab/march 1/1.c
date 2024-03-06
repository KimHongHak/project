#include <LiquidCrystal.h>
const short rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup()
{
    lcd.begin(16, 2);
    lcd.print("welcome To Lab:102");
    delay(100);
}

void loop()
{
    delay(1000);
    for (int pcounter = 0; pcounter < 10; pcounter++)
    {
        lcd.scrollDisplayRight();
        delay(1000);
    }
    for (int pcounter = 0; pcounter < 10; pcounter++)
    {
        lcd.scrollDisplayLeft();
        delay(1000);
    }
}