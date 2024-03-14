// ! program to find absolute value
void setup()
{
    int n;
    Serial.begin(9600);
    Serial.print("number = ");
    while (!Serial.available())
    {
    }
    delay(100);
    n = Serial.parseInt();
    Serial.println(n);
    Serial.print("number = ");
    Serial.println(abs(n));
}
void loop()
{
}