; find 1 + 2 + 3 + 4
org 100h
.data
    num db 1,2,3,4 
    sum dw ?
.code     
    xor ax, ax
    mov al, 0   
    mov dl, num[0]
    add al, dl
    mov dl, num[1] 
    add al, dl      
    mov dl, num[2]
    add al, dl
    mov dl, num[3]
    add al, dl
    mov [sum], ax 
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
    




