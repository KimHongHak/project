package := james1freedictionary/github/io
run:	compile
	java -cp out ${package}/Main
compile:	out clean
	javac -d out ${package}/Main.java \
	${package}/Linklist.java ${package}/Node.java

clean:
	rm -rf out/*
