; ! Program to find the even or odd number
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
 
  
check:    
    PRINTN
    test ax, 1   ; like and (LOGICAl AND) but for flag only, SF = most significant bit
    jnz odd ; jump if SF = 0  (if the result is POSITIVE/0 , >= 0)
          ; else make it positive
even:
    PRINT 'The number is even'
    jmp wait
odd:
    PRINT 'The number is odd'
    jmp wait
wait:
    mov ah, 0
    int 16h
    ret