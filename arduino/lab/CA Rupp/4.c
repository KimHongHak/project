int ledpin1 = 1;
int ledpin2 = 2;
int ledpin3 = 3;

void setup(){
pinMode(ledpin1,OUTPUT);
pinMode(ledpin2,OUTPUT);
pinMode(ledpin3,OUTPUT);
}

void loop(){

digitalWrite(ledpin1,1);
delay(5000);
digitalWrite(ledpin1,0);

digitalWrite(ledpin2,1);
delay(800);
digitalWrite(ledpin2,0);

digitalWrite(ledpin3,1);
delay(5000);
digitalWrite(ledpin3,0);


}