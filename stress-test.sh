#!/bin/bash
count=0
while [ $count -lt 3000 ]; do
  echo “\n Chamada N. $count
  curl http://localhost:3000
  let count=count+1
done
