// @author: brorojame2030@gmail.com
// compile: go build main.go
package main
import (
	"fmt"
	"math"
)
func _3_1(base float64, exponent float64) float64{
	 return math.Pow(base, exponent)
}
func _3_3(num float64, radix int){
	integer_part,fractional_part := math.Modf(num)
	if fractional_part == 0 {
	temp := int(integer_part)
	for i:=0;temp > 0;i++{
		if temp < 10 {
		fmt.Printf("%d * %d ^%d \n",  temp%10,radix, i)
		} else {
		fmt.Printf("%d * %d ^%d + ",  temp%10,radix, i)
		}
		temp =  temp / 10
	}} else {
		var temp = num
		for i := 1; temp - math.Floor(temp) != 0;i++{
			temp = temp * 10
			fmt.Printf("%d * %d ^%d + ", int(math.Floor(temp))%10, radix,-i)
		
		}
		temp1 := int(integer_part)

		for i:=0;temp1 > 0;i++{
			if temp1 < 10 {
			fmt.Printf("%d * %d ^%d \n",  temp1%10,radix, i)
			} else {
			fmt.Printf("%d * %d ^%d + ",  temp1%10,radix, i)
			}
			temp1 =  temp1 / 10
		}
	}
	}
func _3_5(num float64, radix float64){
		integer_part,fractional_part := math.Modf(num)
		var result float64 = 0.0
		if fractional_part == 0 {
		temp := int(integer_part)
		for i:=0;temp > 0;i++{
		result = result + float64(temp%10) * math.Pow(radix,float64(i))
		temp =  temp / 10
		}} else {
			var temp = num
			for i := 1; temp - math.Floor(temp) != 0;i++{
				temp = temp * 10
				result = result + float64(int(math.Floor(temp))%10) * math.Pow(radix,float64(-i))
					}
			temp1 := int(integer_part)
			for i:=0;temp1 > 0;i++{
				result = result + float64(temp1%10) * math.Pow(radix,float64(i))
				temp1 =  temp1 / 10
			}
		}
		fmt.Println(result)
		}
func _3_6(num float64, to_base float64){
	integer_part,fractional_part := math.Modf(num)
	var arr [1000] float64
	var i int
	var quotient float64
	var remainder float64
	if fractional_part == 0 {
	temp := num
	for i = 0 ;temp > 0 ; i++ {
		quotient = math.Floor(temp/to_base)
		remainder = float64(int(temp)%int(to_base))
		temp = quotient
		arr[i] = remainder
	}
	for i :=i-1; i >= 0;i-- {
	fmt.Printf("%g", arr[i]) } 
	fmt.Println("")} else {
		temp := integer_part
		for i = 0 ;temp > 0 ; i++ {
			quotient = math.Floor(temp/to_base)
			remainder = float64(int(temp)%int(to_base))
			temp = quotient
			arr[i] = remainder
		}
		for i :=i-1; i >= 0;i-- {
		fmt.Printf("%g", arr[i]) } 
		fmt.Printf(".")
		temp0 := fractional_part
		for i:= 0; temp0 != 0; i++{
			if i == 20 {
				fmt.Printf("...")
				break
			}
			temp0 = temp0 * to_base
			fmt.Printf("%g", math.Floor(temp0))
			temp0 = temp0 - math.Floor(temp0)
		}
		fmt.Println("")
}
}
func _3_8_2(num1 float64, num2 float64){
	var arr[10000] float64
	var temp float64 = 0
	var result float64
	var i int
	for i = 0;;i++{
		result = temp + float64(int(num1) % 10) + float64(int(num2) % 10)
		if result  == 2{
			arr[i] = 0
			temp = 1
		} else if result == 3 {
			arr[i] = 1
			temp = 1
		} else if result == 4 {
			arr[i] = 0
			temp = 2
		}else if result == 5{
			arr[i] = 1
			temp =2
		}else if result == 6 {
			arr[i] = 0
			temp = 3
		}else if result == 7 {
			arr[i] = 1
			temp = 3
		}else {
		arr[i] = result}
		if num1 == 0 && num2 == 0{
			break
		}
		num1 = math.Floor(num1/10)
		num2 = math.Floor(num2/10)
}
	for i:=i; i>=0;i--{
		fmt.Printf("%g", arr[i])
	}
	fmt.Println("")
}
/*
func _3_8_2_decimal_point(num1 float64, num2 float64){
	integer_part_num1, fractional_part_num1 := math.Modf(num1)
	integer_part_num2,fractional_part_num2 := math.Modf(num2)
	var a int = 0
	for fractional_part_num1 - math.Floor(fractional_part_num1) != 0 || fractional_part_num2 - math.Floor(fractional_part_num2) != 0 {
		fractional_part_num1 = fractional_part_num1 * 10
		fractional_part_num2 = fractional_part_num2 * 10
		a++

	} 
	var arr[10000] float64
	var arr1[1000] float64
	var i int
	var k int
	var result1 float64
	var temp float64 = 0
	for k = 0;;k++{
		result1 = temp + float64(int(fractional_part_num1) % 10) + float64(int(fractional_part_num2) % 10)
		if result1  == 2{
			arr1[k] = 0
			temp = 1
		} else if result1  == 3 {
			arr1[k] = 1
			temp = 1
		} else if result1 == 4 {
			arr1[k] = 0
			temp = 2
		}else if result1 == 5{
			arr1[k] = 1
			temp =2
		}else if result1 == 6 {
			arr1[k] = 0
			temp = 3
		}else if result1 == 7 {
			arr1[k] = 1
			temp = 3
		}else {
		arr1[k] = result1}
		if fractional_part_num1 == 0 && fractional_part_num2 == 0{
			break
		}
		fractional_part_num1 = math.Floor(fractional_part_num1/10)
		fractional_part_num2 = math.Floor(fractional_part_num2/10)
}	
	result1 = 0
	for l := k; l>=0;l--{
		result1 = result1 + arr[k] * math.Pow(10,float64(l))	}
	result1 = result1 * math.Pow(10, -float64(a))
	temp  = math.Floor(result1)
	var result float64
	for i = 0;;i++{
		result = temp + float64(int(integer_part_num1) % 10) + float64(int(integer_part_num2) % 10)
		if result  == 2{
			arr[i] = 0
			temp = 1
		} else if result == 3 {
			arr[i] = 1
			temp = 1
		} else if result == 4 {
			arr[i] = 0
			temp = 2
		}else if result == 5{
			arr[i] = 1
			temp =2
		}else if result == 6 {
			arr[i] = 0
			temp = 3
		}else if result == 7 {
			arr[i] = 1
			temp = 3
		}else {
		arr[i] = result}
		if integer_part_num1 == 0 && integer_part_num2 == 0{
			break
		}
		integer_part_num1 = math.Floor(integer_part_num1/10)
		integer_part_num2 = math.Floor(integer_part_num2/10)
}
	for j:=i; j>=0;j--{
		fmt.Printf("%g", arr[j])
	}
	fmt.Printf(".")
	for j:=a-1;j>=0;j--{
		fmt.Printf("%g", arr1[j])
	}
	fmt.Println("")
} */
func _3_8_3(num1 float64, num2 float64, num3 float64){
	var arr[10000] float64
	var temp float64 = 0
	var result float64
	var i int
	for i = 0;;i++{
		result = temp + float64(int(num1) % 10) + float64(int(num2) % 10)+ float64(int(num3) % 10)
		if result  == 2{
			arr[i] = 0
			temp = 1
		} else if result == 3 {
			arr[i] = 1
			temp = 1
		} else if result == 4 {
			arr[i] = 0
			temp = 2
		}else if result == 5{
			arr[i] = 1
			temp =2
		}else if result == 6 {
			arr[i] = 0
			temp = 3
		}else if result == 7 {
			arr[i] = 1
			temp = 3
		}else {
		arr[i] = result}
		if num1 == 0 && num2 == 0 && num3 == 0{
			break
		}
		num1 = math.Floor(num1/10)
		num2 = math.Floor(num2/10)
		num3 = math.Floor(num3/10)
}
	for i:=i; i>=0;i--{
		fmt.Printf("%g", arr[i])
	}
	fmt.Println("")
}
func _3_8_4(num1 float64, num2 float64, num3 float64, num4 float64){
	var arr[10000] float64
	var temp float64 = 0
	var result float64
	var i int
	for i = 0;;i++{
		result = temp + float64(int(num1) % 10) + float64(int(num2) % 10)+ float64(int(num3) % 10) + float64(int(num4) % 10)
		if result  == 2{
			arr[i] = 0
			temp = 1
		} else if result == 3 {
			arr[i] = 1
			temp = 1
		} else if result == 4 {
			arr[i] = 0
			temp = 2
		}else if result == 5{
			arr[i] = 1
			temp =2
		}else if result == 6 {
			arr[i] = 0
			temp = 3
		}else if result == 7 {
			arr[i] = 1
			temp = 3
		}else {
		arr[i] = result}
		if num1 == 0 && num2 == 0 && num3 == 0 && num4 == 0{
			break
		}
		num1 = math.Floor(num1/10)
		num2 = math.Floor(num2/10)
		num3 = math.Floor(num3/10)
		num4 = math.Floor(num4/10)
}
	for i:=i; i>=0;i--{
		fmt.Printf("%g", arr[i])
	}
	fmt.Println("")
}
func _3_9(num1 float64, num2 float64){
	_,f1 := math.Modf(num1)
	_,f2 := math.Modf(num2)
	if f1 == 0 && f2 == 0 {
	var d_num1 float64 = 0
	var d_num2 float64 = 0
	for i:= 0;num1 > 0;i++{
		d_num1 = d_num1 + float64(int(num1)%10) * math.Pow(2,float64(i)) 
		num1 = num1/10
	}
	for i:= 0;num2 > 0;i++{
		d_num2 = d_num2 + float64(int(num2)%10) * math.Pow(2,float64(i)) 
		num2 = num2/10
	}
	d_result := d_num1 * d_num2
	temp := d_result
	var i int
	var quotient float64
	var remainder float64
	var arr[10000] float64
	for i = 0 ;temp > 0 ; i++ {
		quotient = math.Floor(temp/2)
		remainder = float64(int(temp)%int(2))
		temp = quotient
		arr[i] = remainder
	}
	for i :=i-1; i >= 0;i-- {
	fmt.Printf("%g", arr[i]) } 
	fmt.Println("")
} else {
	var d_num1 float64
	var d_num2 float64
	if f1 != 0{
		for true {
			if d_num1 - math.Floor(d_num1) == 0{
			break}
			d_num1 *=  10
		}
	}
	if f2 != 0{
		for true {
			if d_num1 - math.Floor(d_num2) == 0{
			break}
			d_num2 *=  10
		}
	}
	for i:= 0;num1 > 0;i++{
		d_num1 = d_num1 + float64(int(num1)%10) * math.Pow(2,float64(i)) 
		num1 = num1/10
	}
	for i:= 0;num2 > 0;i++{
		d_num2 = d_num2 + float64(int(num2)%10) * math.Pow(2,float64(i)) 
		num2 = num2/10
	}
	d_result := d_num1 * d_num2
	temp := d_result
	var i int
	var quotient float64
	var remainder float64
	var arr[10000] float64
	for i = 0 ;temp > 0 ; i++ {
		quotient = math.Floor(temp/2)
		remainder = float64(int(temp)%int(2))
		temp = quotient
		arr[i] = remainder
	}
	for i :=i-1; i >= 0;i-- {
	fmt.Printf("%g", arr[i]) } 
	fmt.Println("")
}
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
	fmt.Println("3.3 convert below number to power form")
	fmt.Println("a. (2468)10")	
	fmt.Println("b. (54.321)10")
	fmt.Println("Please, choose one of them (number only): ")
	fmt.Println("3.4 convert below number to power form")
	fmt.Println("a. (110110)2")
	fmt.Println("b. (11100110)2")
	fmt.Println("c. (11.01101)2")
	fmt.Println("d. (100.11011)2")
	fmt.Println("3.5 binary to decimal")
	fmt.Println("a. (1110011)2")
	fmt.Println("b. (10101101)2")
	fmt.Println("c. (110.1011)2")
	fmt.Println("d. (1110.0101)2")
	fmt.Println("3.6 binary to decimal")
	fmt.Println("a. (254)10")
	fmt.Println("b. (1263)10")
	fmt.Println("c. (437.40625)10")
	fmt.Println("d. (0.256)10")
	fmt.Println("e. (91)10")
	fmt.Println("f. (89.125)10")
	fmt.Println("3.8 calculate")
	fmt.Println("a. (11011)2 + (1010)2")
	fmt.Println("b. (11100)2 + (111)2 + (11)2")
	fmt.Println("c. (110.1101)2 + (1011.011)2")
	fmt.Println("d. (11.11011)2 + (10.11)2")
	fmt.Println("e. (11011)2 + (111001)2 + (1001)2 + (11001)2")
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
	case "3.3":
		fmt.Println("Please, choose one more:")
		fmt.Scanf("%s", &t)
		switch t {
		case "a": _3_3(2468, 10)
		case "b": _3_3(54.321, 10)
		}
	case "3.4":
		fmt.Println("Please, choose one more:")
		fmt.Scanf("%s", &t)
		switch t {
		case "a": _3_3(110110, 2)
		case "b": _3_3(11100110,2)
		case "c": _3_3(11.01101,2)
		case "d": _3_3(100.11011,2)
		}
	case "3.5":
		fmt.Println("Please, choose one more:")
		fmt.Scanf("%s", &t)
		switch t {
		case "a": _3_5(1110011, 2)
		case "b": _3_5(10101101,2)
		case "c": _3_5(110.1011,2)
		case "d": _3_5(1110.0101,2)
		}
	case "3.6":
		fmt.Println("Please, choose one more:")
		fmt.Scanf("%s", &t)
		switch t{
		case "a": _3_6(254,2)
		case "b": _3_6(1263,2)
		case "c": _3_6(437.40625,2)
		case "d": _3_6(0.256,2)
		case "e": _3_6(91,2)
		case "f": _3_6(89.125,2)
		}
	case "3.7":
		fmt.Println("we have (0.1001 1001 1001...)2 =\n0*2^0 + 1*2^-1+0*2^-2+0*2^-3+1*2^-4\n+ 1*2^-5+0*2^-6+0*2^-7+1*2^-8\n+ 1*2^-9+0*2^-10+0*2^-11+1*2^-12 + ...\n= 2^-1 + 2^-4 + 2^-5+2^-8\n+ 2^-9+2^-12 + ...\n= (2^-1+2^-4)(1+2^-4+2^-8+...) \n= (2^-1+2^-4)(1/(1-2^-4))\n= (0.6)10")
	case "3.8":
		fmt.Println("Please, choose one more:")
		fmt.Scanf("%s", &t)
		switch t{
		case "a": _3_8_2(11011,1010)
		case "b": _3_8_3(11100,111,11)
		case "c": fmt.Println("not solve yet")
		case "d":  fmt.Println("not solve yet")
		case "e": _3_8_4(11011,111001,1001,11001)
		}
	case "3.9":
		fmt.Println("Please, choose one more:")
		fmt.Scanf("%s", &t)
		switch t{
		case "a": _3_9(110110,101)
		case "b": _3_9(110011,111)
		case "c": fmt.Println("no anser yet")
		case "d": fmt.Println("no anser yet")
		}
	case "3.10":
		fmt.Println("Please, choose one more:")
		fmt.Scanf("%s", &t)
		switch t{
		case "a": 
		n_com :=9999-3268
		t_com := n_com + 1
		fmt.Printf("nine complement: %d\n ten complement: %d \n",n_com,t_com )
		case "b": 
		n_com :=  999999-479200
		t_com := n_com + 1
		fmt.Printf("nine complement: %d\n ten complement: %d\n",n_com,t_com)
		case "c": 
		n_com  := 99999999-99132756
		t_com := n_com + 1
		fmt.Printf("nine complemnt: %d\n ten complement: %d\n", n_com,t_com)
		case "d": 
		n_com := 9999999999-2233778899
		t_com := n_com + 1
		fmt.Printf("nine complement: %d\n  ten complement: %d",n_com,t_com)		
	}	
	default: fmt.Println("error")
	} 
}