// ownership/move, borrow/reference/aliasing
// copy/clone
// associated function [method/(not method)]
use std::io;
#[derive(Debug)]
struct Matrix {
	m : usize,
	n : usize,
	content: Vec<Vec<i32>>
}
impl Matrix{
	fn input(&mut self){
		for i in 0..self.m{
			for j in 0..self.n{
				let mut int = String::new();
				io::stdin().read_line(&mut int);
				let int = int.trim().parse::<i32>().unwrap();
				self.content[i][j] = int;
			}
		}
	}
	fn output(&self){
		for i in 0..self.m{
		for j in 0..self.n{
		print!("{} ", self.content[i][j]);
			}
		println!("");
		}
	}
	}

#[derive(Debug)]
struct Matrix_operation{
	m : Option<usize>,
	n : Option<usize>,
	content: Option<Vec<Vec<i32>>>
}
impl Matrix_operation{
	fn add_matrix(&mut self,A:&Matrix,B:&Matrix){
		if A.n == B.n && A.m == B.m{
			self.m = Some(A.m);
			self.n = Some(A.n);
			self.content = Some(vec![vec![0;self.n.unwrap()];self.m.unwrap()]);
			for i in 0..self.m.expect("error"){
				for j in 0..self.n.expect("error"){
					self.content.as_mut().expect("error")[i][j]=A.content[i][j]+B.content[i][j];
				}
			}
		} else {
			println!("cannot add matrix ");
		}
	}
	fn transpose(&mut self, A: &Matrix){
		self.m = Some(A.n);
		self.n = Some(A.m);
		self.content = Some(vec![vec![0;self.n.unwrap()];self.m.unwrap()]);
		for i in 0..self.m.unwrap(){
			for j in 0..self.n.unwrap(){
				self.content.as_mut().unwrap()[i][j] = A.content[j][i];
			} 
		}
	}
	fn multiply_matrix(&mut self, A:&Matrix, B:&Matrix){
		if A.n == B.m {
			self.m = Some(A.m);
			self.n = Some(B.n);
			self.content = Some(vec![vec![0;self.n.unwrap()];self.m.unwrap()]);
			for i in 0..self.m.unwrap(){
				for j in 0..self.n.unwrap(){
					for k in 0..A.n {
						self.content.as_mut().unwrap()[i][j] += A.content[i][k] * B.content[k][j];
					}
				}
			}
		} else {
			println!("cannot multipy matrix");
		}
	}
	fn scalar_multiplication(&mut self, A: &Matrix, k: i32){
		self.m = Some(A.m);
		self.n = Some(A.n);
		self.content = Some(vec![vec![0;self.n.unwrap()];self.m.unwrap()]);
		for i in 0..self.m.unwrap(){
			for j in 0..self.n.unwrap(){
				self.content.as_mut().unwrap()[i][j] = k * A.content[i][j];
			}
		}
	}
	fn inverse(&mut self){
/*
R1 <-> R2
k * R1 -> R1
R2 + k*R1 -> R2
Gaussian elimination [->((row echelon form)/(reduced row echelon form))]
Algorithm:		
h := 1 /* Initialization of the pivot row */
k := 1 /* Initialization of the pivot column */

while h ≤ m and k ≤ n
    /* Find the k-th pivot: */
    i_max := argmax (i = h ... m, abs(A[i, k]))
    if A[i_max, k] = 0
        /* No pivot in this column, pass to next column */
        k := k + 1
    else
        swap rows(h, i_max)
        /* Do for all rows below pivot: */
        for i = h + 1 ... m:
            f := A[i, k] / A[h, k]
            /* Fill with zeros the lower part of pivot column: */
            A[i, k] := 0
            /* Do for all remaining elements in current row: */
            for j = k + 1 ... n:
                A[i, j] := A[i, j] - A[h, j] * f
        /* Increase pivot row and column */
        h := h + 1
        k := k + 1
*/
	}

	fn output(&self){
		for i in 0..self.m.expect("error"){
		for j in 0..self.n.expect("error"){
		print!("{} ", self.content.as_ref().expect("error")[i][j]);
			}
		println!("");
		}
	}}

fn create_matrix(){
	let mut m = String::new();
	let mut n = String::new();
	io::stdin().read_line(&mut m);
	io::stdin().read_line(&mut n);
	let m = m.trim().parse::<usize>().unwrap();
	let n = n.trim().parse::<usize>().unwrap();
	let mut A = Matrix{m:m,n:n,content:vec![vec![0;n];m]};
	A.input();
	A.output();

	let mut m = String::new();
	let mut n = String::new();
	io::stdin().read_line(&mut m);
	io::stdin().read_line(&mut n);
	let m = m.trim().parse::<usize>().unwrap();
	let n = n.trim().parse::<usize>().unwrap();
	let mut B = Matrix{m:m,n:n,content:vec![vec![0;n];m]};
	B.input();
	B.output();

	let mut C = Matrix_operation{n:None,m:None,content:None};
	C.add_matrix(&A,&B);
	C.output();
	let mut D = Matrix_operation{n:None,m:None,content:None};
	D.transpose(&A);
	D.output();
	let mut E = Matrix_operation{m:None,n:None,content:None};
	E.multiply_matrix(&A,&B);
	E.output();

	let mut k = String::new();
	io::stdin().read_line(&mut k);
	let k = k.trim().parse::<i32>().unwrap();
	let mut F: Matrix_operation = Matrix_operation{m:None,n:None,content:None};
	F.scalar_multiplication(&A, k);
	F.output();
}
fn main(){
	create_matrix();

}