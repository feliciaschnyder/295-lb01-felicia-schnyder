# DB Protection

## Description

To secure the database you need to create a new user who only has access to a certain database.
This helps as a security bridge to all the other databases. 

## Preparation 

First thing first start the mongo terminal (via cmd or directly).
After that you can go to your database with the command ```use <yourDB>```.
To execute the other commands you need to be logged in with an admin user.

## Create User

Username:   repairUser  
Password:   insecureTest$55  
Access:     read & write access on repair DB

```shell
db.createUser({user: "repairUser", pwd: "insecureTest$55", roles: ["readWrite"], db:"repair"})
```

## URL

**Description:** To be able to access the database you need to change the database URL in your server configuration in the following pattern:
```mongodb://user:password@domain:port/yourDB```

## Enable Authorization

**Description:** When you don't authorize your database all roles don't matter they will just be ignored. 
If your don't know if you already authorized your database you can start up the terminal and will see the following message:
*Access control is not enabled for the database. Read and write access to data and configuration is unrestricted.*

1. Open {installationpath}/bin/mongod.cfg

2. Add:
```shell
security:
    authorization: "enabled"
```
3. Restart server

## Log In

**Description:** To check if the authorization worked you can either use something like Studio 3T or try changing the database in the terminal. 

Log in with user Data
```shell
mongo --port <YOUR_MONGO_PORT>
use admin
db.auth("username","password")
```
