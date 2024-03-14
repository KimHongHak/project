#include <LiquidCrystal.h>
const short rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup()
{
	Serial.begin(9600);
    lcd.begin(16, 2);
    delay(100);
	pinMode(8, INPUT);
	pinMode(13, OUTPUT);
}

void loop(){
	if(digitalRead(8)==HIGH){
	digitalWrite(13, 0);
	} else{
	digitalWrite(13,1);
	}

}