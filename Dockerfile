# Use the official Node.js 16 image as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN npm run build

# Expose the port that the application will listen on
EXPOSE 3000

# Start the application when the container starts
CMD ["npm", "start"]
