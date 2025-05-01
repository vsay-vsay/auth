# Use official Node.js Alpine image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source files
COPY . .

# Expose port
EXPOSE 3001

# Start the application
CMD ["node", "app.js"]