# Dockerized Node.js App with MySQL

This project demonstrates a simple Node.js application using Express, Sequelize, and MySQL, all managed within a Docker environment. The app provides basic user data management and is containerized for easy setup and deployment.

## Features

- Node.js with Express.js for the backend
- Sequelize as ORM for MySQL database interaction
- Docker and Docker Compose for environment management
- Basic API for fetching user data

## Getting Started

### Prerequisites

To run this project, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. Clone the repository, build and run the Docker containers:
    ```bash
    git clone https://github.com/ALMA3uk/Docker.git && cd Docker && docker-compose up --build
    ```

2. Access the app at `http://localhost:3000`.

### Running the Project

After running `docker-compose up --build`, the Node.js app will start on port 3000, and the MySQL database will be set up automatically. The app interacts with the database to create and retrieve user data.

### Dependencies

- **Node.js**: v20 (Alpine)
- **Express**: v5.0.0
- **Sequelize**: v6.37.3
- **MySQL**: v8
- **Dotenv**: v16.4.5

### Docker Services

- **app**: The main Node.js application
- **db**: MySQL 8 database

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE)