// author: borojame2023@gmail.com
// compile: gcc -Wall arr.c -lm
// C17
#include <stdio.h>
#include <stdlib.h>
#if defined(_WIN32) || defined(_WIN64)
#define WINGETCHAR getchar()
#if defined(__BORLANDC__)
#include <conio.h>
#endif
#else
#define WINGETCHAR
#endif
struct array{
int arr[20];
void (*input)(int[restrict],int *);
void (*output)(int[restrict],int *);
void (*delete)(int[restrict],int *,int*);
void (*sort)(int[restrict],int*);
void (*insert)(int[const restrict],int*,int,int);
};
typedef struct array array;
static void input(int arr[restrict], int* n){
do{
printf("input num%d: ", *n+1);
fflush(stdout);
scanf("%d",&arr[*n]);
*n = *n+1;
} while (getchar()=='\n');
}
static void output(int arr[restrict],int* n){
for (int i=0;i<*n;i++){
printf("%d ",arr[i]);
}
puts("");
}
static void delete(int arr[restrict],int* n,int* d_integer){
for (int i=0;i<*n;i+=1){
if (arr[i] == *d_integer){
*n = *n-1;
for (int j=i;j<*n;j+=1){
arr[j] = arr[j+1];
} 
i-=1;
}
}
}
static void sort(int arr[restrict],int* n){
int max;
int sort=0;
int sort_2_elements=0;
while(!sort){
for (int i=0;i<*n-1;i++){
if (arr[i] > arr[i+1]) {
max = arr[i];
arr[i] = arr[i+1];
arr[i+1] = max;
} else {
max = arr[i+1];
arr[i+1] = max;}}
for (int i=0;i<*n-1;i++){
if (arr[i] > arr[i+1]){
max = arr[0];
sort_2_elements=0;
break;} else sort_2_elements = 1;}
sort = sort_2_elements;
}}
static void insert(int arr[restrict], int* n , int insert_integer,int position){
*n = *n + 1; // (*n)++;
if (position <= 0){
fprintf(stderr,"position cannot be <= 0\n");exit(1);}
for (int i=*n ;i > position-1;i--){
arr[i] = arr[i-1];
} 
arr[position-1] = insert_integer;
}
void main(){
auto int c;
auto int n=0,d_integer,insert_integer,position;
array* array1 = malloc(sizeof(array));
array1->input = input;
array1->output = output;
array1->delete = delete;
array1->sort = sort;
array1->insert = insert;
puts("1. array");
printf("Please, choose one of them: ");
fflush(stdout);
scanf("%d",&c);
switch (c){
case 1:
array1->input(array1->arr,&n);
printf("what integer do you delete?: ");
fflush(stdout);
scanf("%d",&d_integer);
array1->delete(array1->arr,&n,&d_integer);
array1->sort(array1->arr,&n);
array1->output(array1->arr,&n);
printf("what integer do you insert?: ");
fflush(stdout);
scanf("%d",&insert_integer);
printf("what position?: ");
fflush(stdout);
scanf("%d",&position);
array1->insert(array1->arr,&n,insert_integer,position);
array1->output(array1->arr,&n);
break;
default: fprintf(stderr, "error");
}
free(array1);
WINGETCHAR;
exit(0);
}
