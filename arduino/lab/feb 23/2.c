
// int pin = 13;
// // the setup function runs once when you press reset or power the board
// void setup() {
//   // initialize digital pin LED_BUILTIN as an output.
//   pinMode(pin, OUTPUT);
// 	Serial.begin(9600);

	
// }

// // the loop function runs over and over again forever
// void loop() {
// 	while(Serial.available() == 0){}
// 	int p = Serial.parseInt();
//   if (p == 0) {
// 	digitalWrite(pin, 0);   // turn the LED on (HIGH is the voltage level)
//   	delay(50);}                       // wait for a second
//   else if (p == 1) {
// 	digitalWrite(pin, 1);   // turn the LED on (HIGH is the voltage level)
//   	delay(50);     }  
// }

char incomingByte = 0; // for incoming serial data
int led = 5;
void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
    pinMode(led, OUTPUT);
}
void loop() {
  // send data only when you receive data:

  if (   Serial.available() > 0) {
    // read the incoming byte:                  
    incomingByte = Serial.read();

    // say what you got:
    Serial.print("I received: ");
    Serial.println(incomingByte);

  }
if(incomingByte == '1'){
 digitalWrite(led, 1);
delay(100);
} else if(incomingByte == '0'){
digitalWrite(led, 0);
delay(100);
}
}

