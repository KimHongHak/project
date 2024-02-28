int x;
void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
  Serial.print("Enter x: ");
  while(!Serial.available()){}
  x = Serial.parseInt();
  Serial.print(x);

}
void loop() {
  // send data only when you receive data:

}

