# Use Node.js version 16 as the base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install --force

# Copy the rest of the Next.js project into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on (default is 3000, change if needed)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
