// @author: brorojame2030@gmail.com
#pragma once
#include <cstdio>
void input(float[],int);
void output(float[],int);
void sort(float[],int);
void update(float[], int);
void adding(float[], int&);
void Delete(float[], int&);
void insert(float[],int&);
inline void input(float arr[], int n){
    for(int i=0;i<n;i++){
        printf("input number%d: ", i+1);
        scanf("%f", &arr[i]);
    }
}
inline void output(float arr[], int n){
    for(int i=0;i<n;i++){
        printf("%g ", arr[i]);
    }
    puts("");
}
// sort from big to small
inline void sort(float arr[], int n){
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            if (arr[i] < arr[j]){
                int tmp;
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}
inline void update(float arr[], int n){
    float num,replace;
    printf("input num: ");scanf("%f",&num);
    printf("input replace: ");scanf("%f",&replace);
    for (int i=0;i<n;i++){
        if (arr[i]==num){
            arr[i]=replace;
        }
    }
}
inline void adding(float arr[], int& n){
    do{
        printf("input num%d: ", n+1);
        scanf("%f", &arr[n]);
        n++;
    } while (getchar() == '\n');
}
// delete number that is greater than 50
inline void Delete(float arr[], int& n){
    for(int i=0;i<n;i++){
        if (arr[i]>50){
            n--;
            for (int j=i;i<n;j++){
                arr[j] = arr[j+1];
            }
            i--;
        }
    }
}
inline void insert(float arr[], int& n){
float num;
int position;
printf("input num: "); scanf("%f", &num);
printf("input position: "); scanf("%d", &position);
for (int i = n;i> position-1;i--){
arr[i] = arr[i-1];
}
arr[position-1] = num;
n++;
}