# crazy overwrite module-info.class
c1:
	javac -d out com.employee/employee/Greeting.java com.employee/module-info.java
	javac -d out -p out com.employer/employer/Say.java com.employer/module-info.java
compile:
	#automatically compile required module in the same source path
	#javac -d out --module-source-path . -m com.employer,com.employee
	javac -d out --module-source-path . -m com.employer
run: compile
	java -p out -m com.employer/employer.Say
clean:
	rm -r out/*
