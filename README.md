# Boilerplate Node.js Project

This project serves as a boilerplate to kickstart Node.js applications. It is configured with TypeScript for type-safe code development and includes essential tools and configurations for linting, formatting, and testing.

## Features

- **TypeScript**: Provides type safety on top of modern JavaScript features.
- **ESLint**: Ensures code quality and consistency.
- **Prettier**: Automated code formatting.
- **Husky**: Manages Git hooks to enforce code standards.
- **Jest**: Framework for writing unit tests (optional if you decide to include testing framework).
- **Docker**: Containerization and easy deployment.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20.11.1)
- Yarn
- Docker (optional for containerization)

### Installation

1. Clone the repository:

```bash
git clone https://yourrepositoryurl.git
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

### Building for Production

To compile TypeScript to JavaScript and prepare your application for production, run:

```bash
yarn build
```

### Running Tests

To run tests, execute the following command:

```bash
yarn test
```

### Dockerization

To build a Docker image and run it as a container, execute:

```bash
docker build -t your-app-name .
docker run -p 3000:3000 your-app-name
```

