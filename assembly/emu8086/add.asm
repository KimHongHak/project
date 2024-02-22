name "add-sub"

org 100h
.data
    buffer db 10 dup ('$')         
.code
mov al, 1       ; bin=00000101b
mov bl, 2      ; hex=0ah or bin=00001010b

; 5 + 10 = 15 (decimal) or hex=0fh or bin=00001111b
add bl, al

; 15 - 1 = 14 (decimal) or hex=0eh or bin=00001110b
sub bl, 1

; print result in binary:
;mov cx, 8
;print: mov ah, 2   ; print function.
;       mov dl, '0'
 ;      test bl, 10000000b  ; test first bit.
 ;      jz zero
  ;     mov dl, '1'
;zero:  int 21h
 ;      shl bl, 1
;loop print

; print binary suffix:    
add bl, '0'
mov [buffer], bl

mov dx, offset buffer
mov ah, 09h
int 21h

;mov dl, 'x'
;int 21h

; wait for any key press:
mov ah, 0
int 16h

ret


