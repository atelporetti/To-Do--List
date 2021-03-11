#!/bin/bash

# CREATE DATABASE AND SET PRIVILEGES ROOT USER
sudo mysql -uroot <<MYSQL_SCRIPT
DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;

GRANT ALL PRIVILEGES ON to_do_db.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT

# RUN BACKEND AND FRONT

# KILL PROCESS PROCESS IF EXIST IN PORTS
sudo kill -9 $(sudo lsof -t -i:8080)
sudo kill -9 $(sudo lsof -t -i:4200)
cd todo-back
mvn clean install -Dmaven.test.skip=true
cd ..
java -jar ./todo-back/target/todo-0.0.1.jar &
cd todo-front && npm i && npm run start