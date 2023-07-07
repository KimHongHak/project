package main
import (
	"fmt"
	"math"
)
func _3_1(base float64, exponent float64) float64{
	 return math.Pow(base, exponent)
}
func main(){
	var c string
	var t string
	fmt.Println("3.1 calculate")
	fmt.Println("a. 10^3")
	fmt.Println("b. 10-2")
	fmt.Println("c. 10^0")
	fmt.Println("d. 2^4")
	fmt.Println("e. 2^-1")
	fmt.Println("f. 2^0")
	fmt.Println("3.2 determine the place of 4  ")
	fmt.Println("a. (7425)10")
	fmt.Println("b. (146 723)10")
	fmt.Println("c. (305.54)10")
	fmt.Println("d. (0.012 345)10")
	
	fmt.Println("Please, choose one of them: ")
	fmt.Scanf("%s", &c)
	switch c {
	case "3.1":
		fmt.Println("Please, choose one more: ")
		fmt.Scanf("%s", &t)
		switch t{
		case "a": fmt.Printf("a. 10^3 = %g\n", _3_1(10,3))
		case "b": fmt.Printf("b. 10-2 = %g\n", _3_1(10,2))
		case "c": fmt.Printf("c. 10^0 = %g\n", _3_1(10,0))
		case "d": fmt.Printf("d. 2^4 = %g\n", _3_1(2,4))
		case "e": fmt.Printf("e. 2^-1 = %g\n", _3_1(2,-1))
		case "f": fmt.Printf("f. 2^0 = %g\n", _3_1(2,0))
		default: fmt.Println("error")
		}
	case "3.2":
		fmt.Println("Please, choose one more: ")
		fmt.Scanf("%s", &t)
		switch t{
		case "a": fmt.Println("4 is in hundreds place")
		case "b": fmt.Println("4 is in ten-thousands place")
		case "c": fmt.Println("4 is in ones/units place")
		case "d": fmt.Println("4 is in hundred-thousandths place")
		default: fmt.Println("error")
	}
	default: fmt.Println("error")
	} 
}