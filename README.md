# High Performance Boards Frontend

This project provides a Docker-based development environment for the High Performance Boards Frontend application. It includes the necessary instructions to build and run the frontend application within a Docker container.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed on your system:

- [Docker](https://www.docker.com/) - A containerization platform that allows you to package applications and their dependencies into containers.

## Getting Started

To use this Docker-based development environment, follow the steps below:

### Step 1: Build the Docker Image

Run the following command to build a Docker image for the High Performance Boards Frontend application:

```bash
docker build -t high-performance-boards-frontend .
```

This command will create a Docker image tagged as `high-performance-boards-frontend` based on the provided Dockerfile.

### Step 2: Run the Docker Container

Once the Docker image is built successfully, you can run a Docker container for the High Performance Boards Frontend application using the following command:

```bash
docker run -p 3000:3000 -d high-performance-boards-frontend
```

This command will start a Docker container in detached mode (`-d`) and map port 3000 on your host machine to port 3000 inside the container. As a result, you can access the application by navigating to `http://localhost:3000` in your web browser.

## Additional Information

- The frontend application is configured to run on port 3000 inside the Docker container. You can customize the port mapping in the `docker run` command if needed.
- Remember to stop the Docker container when you are done using the application. You can use the `docker stop` command with the container ID or name to stop it.

Feel free to explore the source code and make any necessary changes to suit your requirements. For more detailed information about the application, refer to the project's documentation or source code repository.

High Performance Board

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Run the production server:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
