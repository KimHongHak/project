package main
import (
	"fmt"
	"math"
)
func main(){
	var a float64 = 54.321
	// fmt.Printf("%f\n%f\n%f", a, math.Floor(a), a-math.Floor(a))
	x,y := math.Modf(a)
	fmt.Println(x,y*10*10*10*10*10)
	fmt.Printf("%f %f", x,y*10*10*10*10*10)
}