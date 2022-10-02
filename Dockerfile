# Using latest node.js library
FROM node:latest

# Setup working direcoty
WORKDIR /app

# Copy required files into working direcoty
COPY src/*.*  /app/src/
COPY lib/*.*  /app/lib/
COPY *.json   /app/

# Expose the required port
EXPOSE 8080

# Define any environment variable [if needed]

# Use package.json and install all dependencies
RUN npm install

# Run the app
CMD ["node", "src/Index.js"]
