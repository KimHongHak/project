int led = 13;
void setup() {

Serial.begin(9600);
// pinMode(led,OUTPUT);
delay(1000);

}

void loop() {
while(Serial.available() == 0){

}
char c = Serial.read();
int p = atoi(c);

Serial.println(p);
}
