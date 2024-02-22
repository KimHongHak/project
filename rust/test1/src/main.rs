// /*  Box, &, *, ref */

// enum A<T,E>{
//     a(T),
//     b(E),
// }
// fn main() {
   
// //    let mut  x: i32 = 5;
// //    let  y:  &mut i32 = &mut x;
// //    *y = 10;
// //    println!("{}", y);
//     // let  mut x: i32 = 1;
//     // let  mut y: &mut i32 = &mut x;
//     // let mut z: i32 =7;
//     // y = &mut z;
//     // let  mut x: i32 = 2;
//     // let  ref mut y: i32 =  x;
//     //  let z: &mut i32 = &mut 4;
//     // let x: &i32 = z
//     // *z = 7;
//     // println!("{} ", *z);
//     let x: i32 = Result::Ok(1);
//     // let y: i32 = A::a(12);
// }
// fn main(){
//     println!(r"Hello and
//     welcome to...                      
//               _   _ _                  
// _ __ _   _ ___| |_| (_)_ __   __ _ ___  
// | '__| | | / __| __| | | '_ \ / _` / __| 
// | |  | |_| \__ \ |_| | | | | | (_| \__ \ 
// |_|   \__,_|___/\__|_|_|_| |_|\__, |___/ 
//                             |___/      

// This exercise compiles successfully. The remaining exercises contain a compiler
// or logic error. The central concept behind Rustlings is to fix these errors and
// solve the exercises. Good luck!

// The source for this exercise is in `exercises/intro/intro1.rs`. Have a look!
// Going forward, the source of the exercises will always be in the success/failure output.

// If you want to use rust-analyzer, Rust's LSP implementation, make sure your editor is set
// up, and then run `rustlings lsp` before continuing.
// ");
// }
// use std::io::stdout;
// use std::io::stdin;
// use std::io::Write;
// use std::str;
// use std::fmt::Debug;
// trait Cat{
//     fn a(){}
// }
// fn to_num<T: str::FromStr>(arg: String) -> T where <T as str::FromStr>::Err: Cat + Debug
// {
//     arg.trim().parse::<T>().unwrap()

// }
// fn main(){
//     let x: i32 = to_num(String::from("1"));

// }

// enum Person{
//     name(& i32)
// }

fn main(){
    // let x: String = String::from("hi");
    // let y: &'static str = "hi";
    // let x: Person = Person::name(&2);
    let x: &'static str = "hello world";
    // let k: &str = x ;
    let y: &'static i32 = &x[2..4];
    println!("{}", y);
    }