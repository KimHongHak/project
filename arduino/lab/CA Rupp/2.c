int ledpin = 5;
int already_turn = 0;
void setup(){
pinMode(ledpin,OUTPUT);
}

void loop(){
if(already_turn == 0){
digitalWrite(ledpin,1);
delay(5000);
already_turn = 1;
}
digitalWrite(ledpin,0);
}