#!/bin/sh
Folder_A="/Users/gavin/Documents/GitHub/util/packages/util/src"
for file_a in ${Folder_A}/*
do
  temp_file=`$file_a`
  echo temp_file
done
