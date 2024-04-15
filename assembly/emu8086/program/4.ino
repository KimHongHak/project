// ! Program to find the even or odd number
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
    if (n % 2 == 0)
    {
        Serial.println("The number is even");
    }
    else
    {
        Serial.println("The number is odd");
    }
}
void loop()
{
}