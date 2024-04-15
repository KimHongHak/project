use rand::Rng;
use std::iter;

fn generate(len: usize) -> String {
    const CHARSET: &[u8] = &['一' as u8, '右' as u8, '雨' as u8]; 
    let mut rng = rand::thread_rng();
    let one_char = || CHARSET[rng.gen_range(0..CHARSET.len())] as char;
    iter::repeat_with(one_char).take(len).collect()
}
fn main(){
    let x = generate(2);
    println!("{}", x);
}