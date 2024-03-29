package interfacestu;

  class Result implements Exam{
      Student student;
      Subject subject;
   public Result(Student student, Subject subject){
       this.student = student;
       this.subject = subject;
   }
   public void display(){
       System.out.println("Student: "+student.toString());

   }
   public double average(){
       double avg = (subject.getJava()+subject.getVb()+subject.getNetwork())/3;
       return avg;
   }

}
