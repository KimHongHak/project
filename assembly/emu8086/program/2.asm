; ! Program to find the absolute value
; ! number = 123 => number = 123
; ! number = -123 => number = 123
; ! Copyright (C) 2024, Brorojame2030@gmail.com      

include 'emu8086.inc'
org 100h ; start the program at address 100h
.data
    buffer db 100, ?, 100 dup(0)
    integer dw ?
.code  
; start input
input:      
    PRINT 'number = ' ; scan string  
    mov ah, 0Ah
    mov dx, offset buffer ; mov the address of buffer to dx
    int 21h    
                  
    mov bl , buffer[1] ; length of string      
    mov di , 0         ; sum counter 
       
    xor ax,ax ; clear ax 
    cmp bl, 1
    je last_char
    cmp buffer[2], '-'  ; if the number is negative (the char -)
    je next    
;start loop1    
loop1:         
    mov si, 1      ; i= 1
    mov ax, 1      ; p = 1     
; start loop_in_loop1
loop_in_loop1:     ; 10 * 10 * ....
    mov cx, 10    
    mul cx ; (dx ax) = ax * cx         
    inc si
    cmp si, bx
    jl loop_in_loop1
; end loop_in_loop1    

    xor cx,cx
    mov cl, buffer[di+2] ; move the char in buffer
    sub cx, '0' ; convert to number
    mul cx ; multiply ax by cx   
next:   ; for next char in buffer
    dec bx     
    inc di     
    push ax   ; push to the stack
    cmp bx, 1      
    jg loop1
; end loop1 
;start last_char
last_char:   
    xor ax,ax
    mov al, buffer[di+2] ; move the last char    
    sub ax, '0' 
    push ax   ; push to the stack
;end last_char 
    xor ax,ax  ;clear ax    
    xor cx, cx ; clear cx
    mov cl, buffer[1]  ; length of string   
sum:
    pop bx    ; pop the top of the stack to bx    
    add ax, bx   ; ax = ax + bx
    dec cx
    cmp cx, 0
    jg sum
; end input  
  
    cmp buffer[2], '-'   ; if negative?
    jne abs
    neg ax        ; negate the number
  
abs:    
    PRINTN  
    PRINT 'number = '
    test ax, ax   ; like and (LOGICAl AND) but for flag only, SF = most significant bit
    jns print_result ; jump if SF = 0  (if the result is POSITIVE/0 , >= 0)
    neg ax       ; else make it positive
; start print_result
print_result:              
    mov bx, 10 ; the number 10
    mov cx, 0 ; counter in stack
loop2:
    mov dx, 0; remainder
    div bx ; ax = ax / 10 , dx = a % 10   
    
    add dx, '0' ; convert to ascii
    push dx ; push dx to stack
    inc cx ; increase the counter
    cmp ax, 0  ; ax - 0
    jnz loop2 ; jump to loop2 if result is not = 0, or if ZF = 0 

print:       
    pop dx ; restore last number in stack
    mov ah, 2 ; output char = dx in DOS    
    int 21h ; interrupt the program and execute interrupt handler = 21h in DOS          
    dec cx ; cx = cx - 1
    cmp cx, 0 ; cx - 0
    jnz print ; jump to print if result is not = 0, or if ZF = 0      
;end print_result
wait:
    mov ah, 0
    int 16h
    ret


