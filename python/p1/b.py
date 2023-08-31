class matrix:
	def __init__(self,m,n,data):
		self.m = m
		self.n = n
		self.data = data
	def output(self):
		print(self.m)
		print(self.n)
		for i in range(self.m):
			for j in range(self.n):
				print(self.data[i][j], end=" ")
			print()
m1 = matrix(2,2,[[1,2],[2,3]])
m1.output()