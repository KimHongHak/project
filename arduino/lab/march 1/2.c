#include  <Wire.h>
#include <LiquidCrystal.h>
#include <LiquidCrystal_I2C.h>

int ledpin = 13;
int btnpin = 5;
int btnstate = 0;
int already_turn = 0;

LiquidCrystal_I2C lcd(0x27,  16, 2);

void setup(){
Serial.begin(9600);
pinMode(ledpin, OUTPUT);
pinMode(btnpin , INPUT);

  //initialize lcd screen
 lcd.init();
 // turn on the backlight



}
void loop()
{
  
  
// digitalWrite(ledpin, 1);
// delay(1000);
// digitalWrite(ledpin, 0);
// delay(1000);
btnstate = digitalRead(btnpin);


  if (btnstate == HIGH) {
   if (already_turn == 0){
    digitalWrite(ledpin, HIGH);
  lcd.display();
    already_turn = 1;
   
  } else {
    digitalWrite(ledpin, LOW);
  lcd.noDisplay();
          already_turn = 0;
         
  }

  }
}

