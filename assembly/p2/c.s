section .text
global _start
_start:
mov rax, 0 ; sys_read
mov rdi, 0; stdin
mov rsi, buffer; str
mov rdx, 10; length
int 0x80           ; );
mov rax, 1; sys_write
mov rdi, 1 ; stdout
mov rsi, buffer ; str
mov rdx, 10 ; length
int 0x80
section .bss
buffer resb 10
