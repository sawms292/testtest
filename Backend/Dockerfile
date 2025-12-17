FROM maven:3.9.6-eclipse-temurin-21 AS build
COPY pom.xml .
RUN mvn -B dependency:go-offline
COPY . .
RUN mvn -B clean package -Dmaven.test.skip

FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY sql /docker-entrypoint-initdb.d
COPY sql /init-sql
VOLUME /init-sql

COPY --from=build /target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]

