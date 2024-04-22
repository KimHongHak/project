use rand::Rng;
use std::io;
use std::io::Write;
fn random() {
    let s = ['一', '右', '雨', '円', '王', '音', '下', '火', '花', '貝'];
    let num = rand::thread_rng().gen_range(0..s.len());

    print!("{}", s[num]);
    io::stdout().flush().unwrap();
   
}
fn main() -> io::Result<()> {
    random();
    loop {
        let mut input = String::new();
        io::stdin().read_line(&mut input)?;
        random();
    }
}
