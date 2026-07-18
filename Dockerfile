# Use the official Node.js 22.17.1 image on Alpine Linux for a lightweight build
FROM node:22.17.1-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Command to start the application
CMD [ "npm", "start" ]
