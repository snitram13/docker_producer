# Step by Step Install and Run my API

### Install Docker and Docker compose
  Linux: https://docs.docker.com/engine/install/ubuntu/  </br>
  Windows: https://docs.docker.com/desktop/install/windows-install/

### Clone the project
  ```git clone https://github.com/snitram13/docker_producer.git```
 
### Start the project with Docker compose
 ```docker-compose up```
 
# Step by step how to test my API

> :warning: To test the producer API, the consumer API need to be running!! </br>
> here's a link to clone the consumer project ```[url](https://github.com/snitram13/docker_consumer.git)```

### Make a POST request to http://localhost:8900 with the body below
``` 
{
  "name": "test name",
  "age": 20,
  "sex": "M",
  "address": "Rua tal, 20"
}
```

#### The Person in body will be save in a MONGO Dabatase

