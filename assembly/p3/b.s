.bss
i1:
.zero 20
i2:
.zero 20
s:
.zero 20
.data
str1:
.string "inpurt a: "
len1 =.-str1
str2:
.string "input b: "
len2 =.-str2
.text
.global _start
_start:
movq $1, %rax
movq $1, %rdi
movq $str1 , %rsi
movq $len1, %rdx
syscall
movq $0, %rax
movq $0, %rdi
movq $i1, %rsi
movq $10, %rdx
syscall
movq $1, %rax
movq $1, %rdi
movq $str2 , %rsi
movq $len2, %rdx
syscall
movq $0, %rax
movq $0, %rdi
movq $i2, %rsi
movq $10, %rdx
syscall
area:
movq (i1), %rax
movq (i2), %rbx
subq $'0', %rax
subq $'0', %rbx
add %rbx, %rax
addq $'0', %rax
movq %rax, (s)

movq $1, %rax
movq $1, %rdi
movq $s , %rsi
movq $5, %rdx
syscall
jmp _start
movq $60, %rax
syscall
