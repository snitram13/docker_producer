# Step by Step Install and Run my API

### Install Docker and Docker compose
  Linux: https://docs.docker.com/engine/install/ubuntu/  </br>
  Windows: https://docs.docker.com/desktop/install/windows-install/

### Clone the project
  ```git clone url```
 
### Start the project with Docker compose
 ```docker-compose up```
 
# Step by step how to test my API

### Make a POST request to http://locahost:8900 with the body below
``` 
{
  "name": "test name",
  "age": 20,
  "sex": "M",
  "address": "Rua tal, 20"
}
```

#### The Person in body will be save in a MONGO Dabatase

