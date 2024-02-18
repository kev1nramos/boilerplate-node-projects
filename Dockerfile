# Step 1: Use an official Node.js base image
FROM node:20.11.1-alpine as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN npm install || yarn install

# Copy the rest of your app's source code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build || yarn build

# Step 2: Use a smaller base image for the production environment
FROM node:20.11.1-slim

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) for production dependencies installation
COPY package*.json ./
COPY yarn.lock ./

# Install only production dependencies
RUN npm install --only=production || yarn install --production

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Your app binds to port 3000 - make sure the port is exposed
EXPOSE 3000

# Define the command to run your app (adjust the start command accordingly)
CMD ["node", "dist/index.js"]
