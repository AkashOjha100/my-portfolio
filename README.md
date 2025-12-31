# Portfolio Fullstack Application

A fullstack portfolio application built with Spring Boot (backend) and React (frontend), containerized with Docker.

## Features

- **Backend**: Spring Boot with Spring Security, JWT authentication, MySQL database
- **Frontend**: React with Vite, responsive design
- **Admin Panel**: Manage projects and view contact messages
- **Contact Form**: Visitors can send messages
- **Project Showcase**: Display portfolio projects
- **Docker**: Containerized for easy deployment

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- Java 17 (for local development)

## Quick Start with Docker

1. Clone the repository
2. Copy `.env` file and update the values
3. Run `docker-compose up --build`
4. Access the application at `http://localhost`

## Local Development

### Backend

1. Navigate to `backend/` directory
2. Run `mvn spring-boot:run`

### Frontend

1. Navigate to `frontend/` directory
2. Run `npm install`
3. Run `npm run dev`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `POST /api/projects` - Create project (Admin only)
- `PUT /api/projects/{id}` - Update project (Admin only)
- `DELETE /api/projects/{id}` - Delete project (Admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (Admin only)

## Database

The application uses MySQL. The database schema is automatically created using JPA.

## Environment Variables

See `.env` file for required environment variables.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request