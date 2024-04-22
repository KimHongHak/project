
struct Recursive;
impl Recursive {
    fn sum(&self, n: i32) -> i32 {
        if n == 1 { 1 } else { self.sum(n - 1) + n }
    }
    fn fibo(&self, n: i32) -> i32 {
        if n == 1 || n == 2 { 1 } else { self.fibo(n - 1) + self.fibo(n - 2) }
    }
    fn sum2(&self, n: i32) -> i32 {
        if n == 1 { 2 } else { self.sum2(n - 1) + n * (n + 1) }
    }
    fn sum3(&self, n: i32) -> i32 {
        if n == 1 { 2 } else { self.sum3(n - 1) + (n + 1).pow(n as u32) }
    }
    fn sum1(&self, a: i32, n: i32) -> i32 {
        if n == 1 { a } else { self.sum1(a, n - 1) + a.pow(n as u32) }
    }
    fn pgcd(&self, a: u32, b: u32) -> u32 {
        if a == b {
            a
        } else {
            if a > b { self.pgcd(a - b, b) } else { self.pgcd(a, b - a) }
        }
    }
    fn pgcd1(&self, a: i32, b: i32) -> i32 {
        if a > b {
            if a % b == 0 { b } else { self.pgcd1(a % b, b) }
        } else {
            if b % a == 0 { a } else { self.pgcd1(a, b % a) }
        }
    }
    fn multi(&self, a: i32, b: i32) -> i32 {
        if b == 1 { a } else { self.multi(a, b - 1) + a }
    }
    fn sum4(&self, a: &[i32], n: i32) -> i32 {
        if n == 0 { 0 } else { self.sum4(a, n - 1) + a[(n as usize) - 1] }
    }
    /* sum is initially equal to 0 */
    fn reverse(&self, n: i32, mut sum: i32) -> i32 {
        if n == 0 {
            sum
        } else {
            let rem = n % 10;
            sum = sum * 10 + rem;
            self.reverse(n / 10, sum)
        }
    }
}
fn main()  {
    let t = Recursive {};
    let x  =  vec![1,2];
    let r = t.reverse(123, 0);
    println!("{}", r);
    assert_eq!(1,2)
}
