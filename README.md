
# Data Warehouse Management Application

The Data Warehouse Management Application is a comprehensive system designed to handle the storage, retrieval, and management of data in a structured and efficient manner. The application uses a microservices architecture, with a Spring Boot backend and a Angular frontend.


## Features

- User Authentication and Authorization: Secure login and role-based access to the application.
- Data Management: Add, update, delete, and query data records.
- Real-time Data Analytics: View and analyze data in real-time.
- Scalable Architecture: Microservices-based backend for easy scalability and maintainability.
- Responsive Design: User-friendly interface that works seamlessly across different devices.


## Technology Used

## Frontend:
- Angular: A TypeScript-based open-source web application framework used for building dynamic single-page applications. It provides a robust set of tools for creating and managing components, services, and routing.
- Angular Router: For managing navigation within the application, allowing users to move between different views seamlessly.
- HttpClient: Angular's built-in service for making HTTP requests to the backend services.
- Bootstrap: For responsive and sleek UI design, integrated into Angular components to ensure a consistent and user-friendly interface.

## Backend
- Spring Boot: A Java-based framework used to create stand-alone, production-grade Spring-based applications.
- Microservices Architecture: The backend is split into several microservices, each responsible for a specific part of the application:
- User Service: Manages user data and authentication.
- Admin Service: Handles CRUD operations for the data warehouse.
- Analytics Service: Provides real-time data analytics.
- API Gateway: Centralized entry point for managing API requests and routing to the appropriate microservice.
- Spring Data JPA: For database interaction and ORM.
- Eureka Server: For service discovery in the microservices architecture.
- Feign Client: For simplified service-to-service communication.
- PostGres: For storing the data in database.
- Postman: For API testing.
## info

This project is a comprehensive solution for managing data warehouse operations using Spring Boot microservices architecture. It includes:

- API Gateway: Manages routing and communication between microservices. 
- Eureka Server: Provides service discovery for dynamic scaling. 
- Booking Service: Handles booking-related data and operations. 
- Category Service: Manages data categorization.
- Inventory Management: Controls inventory data and processes. 
- Product Service: Manages product-related data and operations. 
- Spring Cloud: Tools for building cloud-native applications. 
- Eureka Server: Service registry for microservices. 
- JPA/Hibernate: ORM for database interactions. PostgreSQL: Relational database management system. 
- Maven: Build automation tool. Swagger: API documentation.

Services: Admin booking service category service customer service product service
## Installation

Install my-project 

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/saipratheekvemulapalli/Datawarehousemanagement-microservices
```

Go to the project directory

```bash
  cd my-project
```

Start the server

```bash
  ng serve
```

Navigate to each microservice directory and build the project using Maven

```bash
  cd backend/[service-name]
  mvn clean install
```

Configure the PostgreSQL database connection in the application.properties or application.yml file for each microservice. Example configuration

```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/yourdatabase
spring.datasource.username=yourusername
spring.datasource.password=yourpassword

```

Start each microservice

```bash
 java -jar target/[service-name].jar
```


