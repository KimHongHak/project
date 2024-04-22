use rand::Rng; // 0.8.5

fn do(){
    let x = 5;
}

fn main() {
    let s = ['一','右','雨','円','王','音','下','火','花','貝'];
    let num = rand::thread_rng().gen_range(0..s.len());
    println!("{}", s[num]);
}

