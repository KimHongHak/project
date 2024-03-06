// ! calculator program

void setup()
{
    int x, y;
    char sign;
    Serial.begin(9600);
    Serial.print("Enter x: ");
    while (!Serial.available())
    {
    }
    x = Serial.parseInt();
    delay(100);
    Serial.println(x);
    Serial.print("Select(+,-,*,/): ");
    while (!Serial.available())
    {
    }
    sign = Serial.read();
    Serial.println(sign);
    Serial.print("Enter y: ");
    while (!Serial.available())
    {
    }
    y = Serial.parseInt();
    delay(100);
    Serial.println(y);
    switch (sign)
    {
    case '+':
        Serial.print("The result of adds two number is ");
        Serial.println(x + y);
        break;
    case '-':
        Serial.print("The result of subtract two number is ");
        Serial.println(x - y);
        break;
    case '*':
        Serial.print("The result of multiply two number is ");
        Serial.println(x * y);
        break;
    case '/':
        Serial.print("The result of divide two number is ");
        Serial.println(x / y);
        break;
    }
}
void loop()
{
}