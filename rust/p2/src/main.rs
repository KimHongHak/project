// @author: brorojame2030@gmail.com
// implement the exercise in the book!
use std::io::stdout;
use std::io::stdin;
use std::io::Write;
use std::str;
fn to_num<T: str::FromStr>(arg: String) -> T where <T as str::FromStr>::Err:std::fmt::Debug
{
    arg.trim().parse::<T>().unwrap()
}
fn p1(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n {
        if i == 2{
            s = s - ((2 + 3*(i-1)) as f32)/((9+4*(i-1)) as f32);
        } else {
            s = s + ((2 + 3*(i-1)) as f32)/((9+4*(i-1)) as f32);
        }   
    }
    println!("The sum is {}", s);                                              
}
fn p2(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
        if i % 2 == 0{
            s = s - ((1 + 5 * (i-1)) as f32)
        } else {
            s = s + ((1 + 5 * (i-1)) as f32)
        }
    } 
    println!("The sum is {}", s);
}
fn p3(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
        s = s + (((-1_i32).pow((i+1) as u32))*(5_i32.pow(i as u32))) as f32;
    } 
    println!("The sum is {}", s);
}
fn p4(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
        let mut product: f32;
        let mut i_factorial: f32 = 1.0;
        // i!
        for j in 1..=i{
            i_factorial = i_factorial * (j as f32);
        }
        product = i_factorial * ((2 * i)as f32).sqrt();
        s = s + product;
    } 
    println!("The sum is {}", s);
}
fn p5(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
    s = s + (i * (i+1) * (i+2)) as f32;
    } 
    println!("The sum is {}", s);
}
fn p6(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
    s = s + (3 + 5*(i-1)) as f32;
    } 
    println!("The sum is {}", s);
}
fn p7(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
    s = s + (2*(3_i32.pow((i-1) as u32))) as f32;
    } 
    println!("The sum is {}", s);
}
fn p8(n: i32){
    let mut s: f32 = 0.0;     
    for i in 1..=n{
    let mut s1: f32 = 0.0;
    for j in 1..=i{
        s1 = s1 + (9 * 10_i32.pow((j-1) as u32)) as f32;
      }
    s = s + s1; 
    } 
    println!("The sum is {}", s);
}
fn p9(n: i32){
    let mut p: f32 = 1.0;
    for i in 1..=n{
        p = p * (i as f32);
    } 
    println!("The product is {}", p);
}
fn p10(n: i32){
    let mut p: f32 = 1.0;
    for i in 1..=n{
        p = p * ((2*i) as f32);
    } 
    println!("The product is {}", p);
}
fn p11(n: i32){
    let mut p: f32 = 1.0;
    for i in 1..=n{
        p = p * ((2*i-1) as f32);
    } 
    println!("The product is {}", p);
}
fn p12(n: i32){
    let mut p: f32 = 1.0;
    for i in 1..=n{
        p = p * ((3 + 5*(i-1)) as f32);
    } 
    println!("The product is {}", p);
}
fn p13(n: i32){
    let mut p: f32 = 1.0;
    for i in 1..=n{
        p = p * ((2*3_i32.pow((i-1) as u32)) as f32);
    } 
    println!("The product is {}", p);
}
fn p14(n: i32){
    let mut p: f32 = 1.0;
    for i in 1..=n{
        p = p * ((1 + 4 * (i-1))as f32);
    } 
    println!("The product is {}", p);
}
fn p15(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
    let mut p: f32 = 1.0  ; 
        for j in 1..=i{
            p = p * (j as f32)
        }
        s = s + p;
    } 
    println!("The sum is {}", s);
}
fn p16(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
    let mut p: f32 = 1.0  ; 
        for j in 1..=(2*i-1){
            p = p * (j as f32)
        }
        s = s + p;
    } 
    println!("The sum is {}", s);
}
fn p17(n: i32){
    let mut s: f32 = 0.0;
    for i in 1..=n{
    let mut p: f32 = 1.0  ; 
        for j in 1..=(2*i){
            p = p * (j as f32)
        }
        s = s + p;
    } 
    println!("The sum is {}", s);
}

fn p18(p: &i32, n: &i32){
/* 
C(n,r) = n!/(r!*(n-r)!)
*/
    let mut s: f32 = 0.0;
    for i in 1..=*p{
    let mut product: f32 = 0.0; 
    let mut p_factorial: f32 = 1.0;
    let mut n_factorial: f32 = 1.0;
    let mut n_minus_p_factorial: f32 = 1.0;
    // p!
    for j in 1..=i{
     p_factorial = p_factorial * (j as f32)
     }
    // n!
    for j in 1..=*n {
    n_factorial  =  n_factorial * (j as f32)
     }
    // (n-p)! 
    for j in 1..=(*n-i) {
        n_minus_p_factorial  =  n_minus_p_factorial * (j as f32)
    }
    product = p_factorial * (n_factorial/(p_factorial*(n_minus_p_factorial)));
    s = s + product;
    } 
    println!("The sum is {}", s);
}
fn p20(){
    for i in 1..=3{
        for j in 1..=6{
            if j <= i{
                print!("{} ", j); stdout().flush();
            } else {
                print!("* ");stdout().flush();
            }
        }
    println!("");
    }
}
fn p21(){
    for i in 1..=4{
        for j in i+1..=2+3*(i-1){
            print!("{} ", j);stdout().flush();
        }
        println!("");
    }
}
fn p22(){
    for i in 1..=4{
        for j in i-1..=3{
            print!("{} ", j);
        }
    println!("");
    }
}
fn p23(){
    for i in 1..=4{
        if 4-i > 0 {
            for j in 1..=4-i{
                print!("  ");stdout().flush();
            }
            for j in 1..=i{
                print!("{} ", j);stdout().flush();
            }
        } else {
            for j in 1..=i{
                print!("{} ", j);stdout().flush();  
            }
        }
        println!("");
    } 
}
fn main() {
  let mut case = String::new();
  println!("calculate:");
  println!("1. s = 2/9 - 5/13 + 8/17 + ...");
  println!("2. S = 1- 6 + 11 - ...");
  println!("3. S = 5 - 5^2  + 5^3 - ... + [(-1)^(n+1)]*5^n");
  println!("4. s = 1!sqrt(2) + 2!sqrt(4) + ...");
  println!("5. s = 1 * 2 * 3 + 2*3*4 + ...");
  println!("6. s = 3 + 8 + 13 + ...");
  println!("7. s = 2 + 6 + 18 + ... + (2*3^(n-1))");
  println!("8. s = 9 + 99 + 999 + ...");
  println!("9. p = n!");
  println!("10. p = 2*4*...*2n");
  println!("11. p = 1*3*5*...*(2n-1)");
  println!("12. p = 3*8*13*...");
  println!("13. p = 2*6*18*...*(2*3^(n-1))");
  println!("14. p = 1*5*9*...");
  println!("15. s = 1! + 2! + 3! + ... + n!");
  println!("16. s = 1! + 3! + 5! + ... + (2n-1)!");
  println!("17. s = 2! + 4! + 6! + ... + 2n!");
  println!("18. s = 1!C(n,1)+2!C(n,2)+3!C(n,3)+...+p!C(n,p)");
  println!("19. find the sum of positive number");
  println!("display:");
  println!("20.       
            1 * * * * *
            1 2 * * * *
            1 2 3 * * *");
  println!("21.
            2 
            3 4 5
            4 5 6 7 8 
            5 6 7 8 9 10 11");
  println!("22.       
            0 1 2 3
            1 2 3
            2 3 
            3");
  println!("23.   
                  1
                1 2
              1 2 3
            1 2 3 4");
  print!("Please, choose one of them: ");stdout().flush();
  stdin().read_line(&mut case);
  match case {
      case if case.trim() == "1" => {
          let mut n = String::new();
          print!("Input n: "); stdout().flush();
          stdin().read_line(&mut n);
          let n = to_num::<i32>(n);
          p1(n);
      }
      case if case.trim() == "2" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p2(n);
    }
    case if case.trim() == "3" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p3(n);}
    case if case.trim() == "4" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p4(n);}
    case if case.trim() == "5" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p5(n);}
    case if case.trim() == "6" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p6(n);}
     case if case.trim() == "7" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p7(n);}
    case if case.trim() == "8" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p8(n);}
    case if case.trim() == "9" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p9(n);}    
    case if case.trim() == "10" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p10(n);}    
    case if case.trim() == "11" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p11(n);}  
    case if case.trim() == "12" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p12(n);}  
    case if case.trim() == "13" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p13(n);}  
    case if case.trim() == "14" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p14(n);}  
            
    case if case.trim() == "15" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p15(n);}  
    case if case.trim() == "16" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p16(n);}  
    case if case.trim() == "17" => {
        let mut n = String::new();
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        p17(n);}  
    case if case.trim() == "18" => {
        let mut p = String::new();
        let mut n = String::new();
        print!("Input p: "); stdout().flush();
        stdin().read_line(&mut p);
        print!("Input n: "); stdout().flush();
        stdin().read_line(&mut n);
        let n = to_num::<i32>(n);
        let p = to_num::<i32>(p);
        p18(&p,&n);}  
    case if case.trim() == "19" =>{
        let mut s: f32 = 0.0;    
        while true {
            let mut n_str = String::new();
            let mut ans = String::new();
            print!("Enter number: ");stdout().flush();
            stdin().read_line(&mut n_str);
            s = s + to_num::<f32>(n_str.clone());
            print!("do you insert more number? (yes/no): ");
            stdout().flush();
            stdin().read_line(&mut ans);
            if ans.trim() == "no"{
                break
            }
        }
        println!("The sum is {}", s);
    }
    case if case.trim() == "20" => {
        p20();}          
    case if case.trim() == "21" => {
        p21();}          
    case if case.trim() == "22" => {
        p22();}          
    case if case.trim() == "23" => {
        p23();}       
    _ => println!("error")
  }
}
