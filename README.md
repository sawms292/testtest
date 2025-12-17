## Requirements for Assignment-3
[Read the instruction](https://github.com/STIWK2124-A251/class-activity-stiwk2124/blob/main/Assignment-3.md)

## Group Info:
1. Matric Number & Name & Photo & Phone Number
1. Mention who the leader is.
1. Mention your group name for Assignment-1 and Assignment-2
1. Other related info (if any)

## Title of your application (a unique title)
## Abstract (in 300 words)
   1. Background
   2. Problem Statement (from article)
   3. Main objective
   4. Methodology
   5. Result
   6. Conclusion

## Link for Docker Image

### Frontend
https://hub.docker.com/r/sawms/angular-test/tags ->
```bash
docker pull sawms/angular:latest
```

### Backend
https://hub.docker.com/r/sawms/springboot-test/tags ->
```bash
docker pull sawms/springboot:latest
```

## Instructions on how to run Docker.
### Create a folder
```bash
mkdir conf
cd conf
```

### Create the .env file
1. For Windows
```bash
notepad .env
```

2. For linux and mac
```bash
touch .env
```

3. Copy .env file
```bash
# --- .env ---
# Database configuration
MYSQL_ROOT_PASSWORD=root12345
DB_USER=group500
DB_PASSWORD=500group

#Smtp configuration
SMTP_USERNAME=
SMTP_PASSWORD=
```

### Create the yml file
1. For Windows
```bash
notepad docker-compose.yml
```

2. For linux and mac
```bash
touch docker-compose.yml
```

3. Copy yml source code
```bash
services:
  db:
    image: mysql:8.1
    container_name: db-500
    env_file:
      - .env
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: cmsdb
      MYSQL_USER: ${DB_USER}
      MYSQL_PASSWORD: ${DB_PASSWORD}
    ports:
      - "3307:3306"
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-uroot", "-p${MYSQL_ROOT_PASSWORD}"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 20s
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - cms-network

  backend:
    image: sawms/springboot:latest
    container_name: backend-500
    env_file:
      - .env
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/cmsdb?allowPublicKeyRetrieval=true&useSSL=false
      SPRING_DATASOURCE_USERNAME: ${DB_USER}
      SPRING_DATASOURCE_PASSWORD: ${DB_PASSWORD}
    depends_on:
      db:
        condition: service_healthy
    networks:
      - cms-network

  frontend:
    image: sawms/angular:latest
    container_name: frontend-500
    ports:
      - "80:80"
      - "8081:80"
      - "443:443"
    depends_on:
      - backend
    networks:
      - cms-network

volumes:
  mysql_data:

networks:
  cms-network:
    driver: bridge
```

### start,stop the docker container
1. To start the images
```bash
docker-compose up -d
```

2. To stop and remove the container volumes
```bash
docker-compose down -v
```

## List of all the endpoints
**1. AUTHORS**
| HTTP Method | Endpoint             | Description                   | Request Body | 
|-------------|--------------------|-------------------------------|---------------|
| GET         | `/api/authors`      | Get all authors               | None         | 
| GET         | `/api/authors/{id}` | Get author by ID              | None         | 
| POST        | `/api/authors`      | Create a new author           | Author JSON  | 
| PUT         | `/api/authors/{id}` | Update an existing author     | Author JSON  | 
| DELETE      | `/api/authors/{id}` | Delete an author by ID        | None         | 

**2. CONFERENCES**
| HTTP Method | Endpoint             | Description                   | Request Body | 
|-------------|--------------------|-------------------------------|---------------|
| GET         | `/api/conferences`      | Get all conference               | None         | 
| GET         | `/api/conferences/{id}` | Get conference by ID              | None         | 
| POST        | `/api/conferences`      | Create a new conference           | Author JSON  | 
| PUT         | `/api/conferences/{id}` | Update an existing conference     | Author JSON  | 
| DELETE      | `/api/conferences/{id}` | Delete an conference by ID        | None         | 

**3. EMAIL LOGS**
| HTTP Method | Endpoint             | Description                   | Request Body | 
|-------------|--------------------|-------------------------------|---------------|
| GET         | `/api/email-logs`      | Get all email-log               | None         | 
| GET         | `/api/email-logs/{id}` | Get email-log by ID              | None         | 
| POST        | `/api/email-logs`      | Create a new email-log           | Author JSON  | 
| PUT         | `/api/email-logs/{id}` | Update an existing email-log     | Author JSON  | 
| DELETE      | `/api/email-logs/{id}` | Delete an email-log by ID        | None         |

**4. EVENTS**
| HTTP Method | Endpoint             | Description                   | Request Body | 
|-------------|--------------------|-------------------------------|---------------|
| GET         | `/api/events`      | Get all event               | None         | 
| GET         | `/api/events/{id}` | Get event by ID              | None         | 
| POST        | `/api/events`      | Create a new event           | Author JSON  | 
| PUT         | `/api/events/{id}` | Update an existing event     | Author JSON  | 
| DELETE      | `/api/events/{id}` | Delete an event by ID        | None         |

**5. KEYWORDS**
| HTTP Method | Endpoint             | Description                   | Request Body | 
|-------------|--------------------|-------------------------------|---------------|
| GET         | `/api/keywords`      | Get all keyword               | None         | 
| GET         | `/api/keywords/{id}` | Get keyword by ID              | None         | 
| POST        | `/api/keywords`      | Create a new keyword           | Author JSON  | 
| PUT         | `/api/keywords/{id}` | Update an existing keyword     | Author JSON  | 
| DELETE      | `/api/keywords/{id}` | Delete an keyword by ID        | None         |

**6. LOG ACTIVITIES**
| HTTP Method | Endpoint             | Description                   | Request Body | 
|-------------|--------------------|-------------------------------|---------------|
| GET         | `/api/log-activities`      | Get all log activity               | None         | 
| GET         | `/api/log-activities/{id}` | Get log activity by ID              | None         | 
| POST        | `/api/log-activities`      | Create a new log activity           | Author JSON  | 
| PUT         | `/api/log-activities/{id}` | Update an existing log activity     | Author JSON  | 
| DELETE      | `/api/log-activities/{id}` | Delete an log activity by ID        | None         |


## Result/Output (Screenshot of the output)

## References (Not less than 20)
1. Antoine, J. (2024, November 5). Hosting an Angular application inside a Docker container with nginx. Medium. https://jonathanantoine.medium.com/hosting-an-angular-application-inside-a-docker-container-with-nginx-b10f3f0a4c26
2. Cybrad. (2025). #23 - How to Use WIN-ACME with Cloudflare DNS for SSL Certificate Automation. Youtu.be. https://youtu.be/rJ6dVavJsTc?si=I0GvdovFnEeQqJ7u
3. Nell, A. M. (2025, July 16). Spring Boot Security, Step By Step — Part 1: Authentication. Medium. https://medium.com/@ansgar.nell/spring-boot-security-step-by-step-21ea836499f8
4. Nginx. (n.d.). Configuring HTTPS servers. Nginx.org. Retrieved December 12, 2025, from https://nginx.org/en/docs/http/configuring_https_servers.html
5. Oumuamua. (2025, March 29). How to Use Docker’s Multi-Stage Builds to Separate Development and Production Environments. Medium. https://medium.com/@oumuamuaa/how-to-use-dockers-multi-stage-builds-to-separate-development-and-production-environments-ddcfc8846b33
6. Singh Walia, A. (2024, April 16). Top 50+ Linux Commands You MUST Know | DigitalOcean. Www.digitalocean.com. https://www.digitalocean.com/community/tutorials/linux-commands
6. Stackoverflow. (2013, September 15). How to run Nginx within a Docker container without halting? Stack Overflow. https://stackoverflow.com/questions/18861300/how-to-run-nginx-within-a-docker-container-without-halting
7. Stackoverflow. (2021, August 15). How to write Dockerfile to serve Angular app and Node server. Stack Overflow. https://stackoverflow.com/questions/68548071/how-to-write-dockerfile-to-serve-angular-app-and-node-server
8. Stackoverflow. (2022, March 12). How do I add environment variables in IntelliJ Spring Boot project. Stack Overflow. https://stackoverflow.com/questions/71450194/how-do-i-add-environment-variables-in-intellij-spring-boot-project

## Link for the YouTube Presentation

