; ! Program to calculate 1 + 3 + 5 + ... + 2n-1
; ! Copyright (C) 2024, Brorojame2030@gmail.com            
include 'emu8086.inc'
org 100h ; the program start at address 100h
.data     
    buffer dw 10 dup ('$') ; buffer dw '$', '$', '$', '$', '$', '$', '$', '$', '$', '$'
.code
    mov ax, 0 ; sum = 0
    mov bx, 5 ; n = 5
    mov si, 1 ; i = 1
compare:
    cmp si, bx ; si - bx
    jg print_result ; jump to print_result if si > bx
addition:
    push ax ; save ax in stack
    mov al, 2 ; ah = 2
    mul si ; (dx ax) = ax * si
    sub ax, 1 ; ax = ax -1
    mov cx, ax ; cx = ax
    pop ax ; restore ax
    add ax, cx ; ax = ax + cx

increment:
    inc si ; si = si + 1 
    jmp compare ; jump to compare
    
print_result:              
    mov bx, 10 ; the number 10
    mov cx, 0 ; counter in stack
loop1:
    mov dx, 0; remainder
    div bx ; ax = ax / 10 , dx = a % 10   
    
    add dx, '0' ; convert to ascii
    push dx ; push dx to stack
    inc cx ; increase the counter
    cmp ax, 0  ; ax - 0
    jnz loop1 ; jump to loop1 if result is not = 0, or if ZF = 0 

print:       
    pop dx ; restore last number in stack
    mov ah, 2 ; output char = dx in DOS    
    int 21h ; interrupt the program and execute interrupt handler = 21h in DOS          
    dec cx ; cx = cx - 1
    cmp cx, 0 ; cx - 0
    jnz print ; jump to print if result is not = 0, or if ZF = 0 
    
wait:
    mov ah, 0 ; read char from buffer
    int 16h ; interrupt the program and execute interrupt handler = 16h in DOS      
    ret ; exit the program          
    