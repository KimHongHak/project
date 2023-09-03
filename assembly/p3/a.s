; find area of rectangle (bugs)
section .bss
a resq 10
b resq 10
s resq 10
section .data
print1 dq "input a:"
print1_len equ $-print1
print2 dq  "input b: "
print2_len equ $-print2
section .text
global _start
_start:
p1: 
mov rax, 1; sys_write
mov rdi, 1 ; stdout
mov rsi, print1 ; str
mov rdx, print1_len ; length
syscall

input1:
mov rax, 0 ; sys_read
mov rdi, 0; stdin
mov rsi, a; str
mov rdx, 10; length
syscall

p2:
mov rax, 1; sys_write
mov rdi, 1 ; stdout
mov rsi, print2 ; str
mov rdx, print2_len ; length
syscall
input2:
mov rax, 0 ; sys_read
mov rdi, 0; stdin
mov rsi, b; str
mov rdx, 10; length
syscall

area:
mov rax, [a]
mov rbx, [b]
sub rax, '0'
sub rbx, '0'
mul rbx
add rax, '0'
mov [s], rax
output:      ; );
mov rax, 1; sys_write
mov rdi, 1 ; stdout
mov rsi, s ; str
mov rdx, 10 ; length
syscall
jmp _start
exit:
mov rax, 60
syscall
