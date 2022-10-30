# Docker Commands

## Docker Build

docker build tag <image_name> <docker_file_path>

```sh
docker build -t node-api:v1.0.0 .
```

## Docker Run

docker run daemon mode(Run container in background and print container ID) --name (container name) image_name

```sh
docker run -d --name nodeapi -p 8000:8080 node-api:v1.0.0
```

## Execute commands in Docker Container

In order to execute commands on running containers, you have to execute “docker exec” and specify the container name (or ID) as well as the command to be executed on this container. [Read more](https://devconnected.com/docker-exec-command-with-examples/)

```sh
docker exec -it nodeapi sh
```

## Docker Remove

Command to stop & remove running container

```sh
docker rm -f nodeapi
```