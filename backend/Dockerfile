FROM node:lts

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Ensure documents directory exists and has proper permissions
RUN mkdir -p /app/documents && chmod 755 /app/documents

# Expose port (internal to container network)
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

