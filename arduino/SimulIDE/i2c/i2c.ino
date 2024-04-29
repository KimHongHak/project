#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(80, 16, 2);

void setup()
{
	lcd.init();
    lcd.print("hello world");
}
void loop()
{
}