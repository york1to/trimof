cmake_minimum_required(VERSION 3.10)

project(my_project)

aux_source_directory(./src DIR_SRCS)

add_executable(E1 ${DIR_SRCS})

include_directories(include)

