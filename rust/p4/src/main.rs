
trait paternal_grandfather{

}
trait paternal_grandmother{

}
trait maternal_grandfather{

}
trait maternal_grandmother{

}

trait father{
    fn run(){}
    fn read(){
        println!("I can read English");
    }
}
trait mother {
    fn speak(&self){
        println!("i can speak Japanese");
    }
    fn learn(){}
}
#[derive(Debug)]
struct son{
    name: &'static str,
    old: i32,
    height: f32,
}
impl mother for son{
    fn learn(){
        println!("I learn Rust");
    }
}
impl father for son{
    fn run(){
        println!("I run to Tokyo");
    }
}
fn main() {
    let s = son{name: "jame", old:20,height:165.0};
    s.speak();
}
