int led = 13;
void setup() {

Serial.begin(9600);
// pinMode(led,OUTPUT);
delay(1000);
Serial.print("Enter xxx: ");
while(Serial.available() == 0){
}
  int p = Serial.parseInt();
Serial.println(p);
}

void loop() {

}
