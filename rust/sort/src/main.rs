/*
Copyright (C) 2024, brorojame2030@gmail.com
こんにちは、これはSorting AlgorithmのRustです。今、私はC/C++とRustのパログラムを書きます。パログラムは易しくないですが 私はパログラムを愛している。
*/
use std::cmp::PartialOrd;
#[derive(Debug, Clone)]
struct Sort;
impl Sort {
//selection sort
#[allow(dead_code)]
fn selection_sort<T: PartialOrd>(&self, a: &mut [T]) -> () where T: Copy {
    let mut min;
    for i in 0..a.len()-1{
        min = i;
        for j in i+1..a.len(){
            if a[min] > a[j]{
                min = j;
            }
        }
        if min != i{
           a.swap(min,i);
        }  }
}
//exchange sort
#[allow(dead_code)]
fn exchange_sort<T: PartialOrd>(&self, a: &mut [T]) where T: Copy{
    for i in 0..a.len()-1 {
        for j in i+1..a.len(){
            if a[i] > a[j]{
                a.swap(i,j);
            }
        }}
}
//quick_sort
#[allow(dead_code)]
fn quick_sort<T: PartialOrd>(&self, a: &mut [T], low: isize, high: isize) where T: Copy{
    if low < high{
        let p = self.partition(a, low, high);
        self.quick_sort(a, low, p-1);
        self.quick_sort(a, p+1, high);
    }
}
#[allow(dead_code)]
fn partition<T: PartialOrd>(&self, a: &mut [T],low: isize, high: isize) -> isize where T: Copy{
    let pivot = a[high as usize];
    let mut i: isize = low - 1;
    for j  in low..=high{
        if a[j as usize] < pivot{
            i += 1;
            a.swap(i as usize,j as usize);
        }
    }
    a.swap((i+1) as usize, high as usize);
    i+1
    }
}
#[allow(unreachable_patterns)]
fn main() {
    let s = Sort;
    let mut a = [5,6,2,66,33,23,9];
    for i in &a{
        print!("{} ", i);
    }
    println!();
//no matching with data type in pattern matching
    match a {
        [..] => {
            let high =  a.len() -1 ;
            s.quick_sort(&mut a,0, high as isize);
        }
        _ => {
            println!("not support!");
        }
    }
    for i in &a{
        print!("{} ", i);
    }
    println!();
}