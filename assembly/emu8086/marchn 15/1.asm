; find max of x and y
org 100h
.data
    x dw ?
    y dw ?  
    max dw ?
.code
    mov [x], 1
    mov [y], 2   
    mov ax, [x]
    mov bx, [y]    
    cmp ax, bx
    jg xismax
    jmp yismax
xismax:      
    mov [max], ax                
    jmp print
yismax:            
    mov [max], bx
    jmp print                
print:
    mov dx,  [max]   
    add dx, '0'
    mov ah, 2
    int 21h     
    
wait:
    mov ah, 0 ; read char from buffer
    int 16h ; interrupt the program and execute interrupt handler = 16h in DOS      
    ret ; exit the program          
    




