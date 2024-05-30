  .text
  .globl main
main:
  #input
  movl $0x03, %eax
  movl  $0, %ebx
  movl  $buffer, %ecx
  movl $buflen, %edx
  #output
  int $0x80
  movl    $4,%eax            
  movl    $1,%ebx                                 
  movl    $buffer,%ecx                              
  movl    $buflen,%edx                             
  int    $0x80          
  #exit      
  movb    $1,%al              
  movl    $100,%ebx           
  int    $0x80                
  .data
name:
  .string "helslo\n"
  nlen = . - name
buffer:
  .zero 10
  buflen = . - buffer
	