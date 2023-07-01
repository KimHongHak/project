c_file := main.c product.c problem.c
h_file := product.h problem.h
file := ${c_file} ${h_file}
name := $(output)
defualt: build
build: build-static
build-static: ${file}
	gcc -o ${name} -static ${c_file} -lm
build-dynamic: ${file}
	gcc -o ${name} ${c_file} -lm
build-nolink: ${file}
	gcc -o ${name} -c -fPIC ${c_file} 
run: build
	./${name}
clean: 
	rm -rf *.o *.out *.exe
