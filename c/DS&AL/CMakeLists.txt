cmake_minimum_required(VERSION 3.5.0)
set(CMAKE_C_COMPILER clang)
set(CMAKE_CXX_COMPILER clang++)
project(ds&al)
add_executable(palindrome palindrome.c stack.c)
add_executable(bit_arraytest bit_arraytest.c bit_array.c)