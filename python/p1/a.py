def sum_matrix():
	A = []
	B = []
	C = []
	m = int(input())
	n = int(input())
	#input matrix A
	for i in range(m):
		a = []
		for j in range(n):
			a.append(int(input()))
		A.append(a)
	#input matrix B
	for i in range(m):
		a = []
		for j in range(n):
			a.append(int(input()))
		B.append(a)
	#add matrix B to matrix A (C = A + B)
	for i in range(m):
		a = []
		for j in range(n):
			a.append(A[i][j] + B[i][j])
		C.append(a)
	#output matrix C
	for i in range(m):
		for j in range(n):
			print(C[i][j], end=" ")
		print("")
def matrix():
	A = []
	m = int(input())
	n = int(input())
	for i in range(m):
		a = []
		for j in range(n):
			a.append(int(input()))
		A.append(a)
	for i in range(m):
		for j in range(n):
			print(A[i][j], end=" ")
		print()
if __name__ == "__main__":
	sum_matrix()