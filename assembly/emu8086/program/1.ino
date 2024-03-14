// ! Program to calculate 1 + 3 + 5 + ... + 2n-1
void setup()
{
    int n;
    Serial.begin(9600);
    while (!Serial.available())
    {
    }
    delay(100);
    n = Serial.parseInt();
    int sum = 0;
    for (int i = 1; i <= n; i++)
    {
        sum += 2 * i - 1;
    }
    Serial.print("THis sum is ");
    Serial.println(sum);
}
void loop()
{
}