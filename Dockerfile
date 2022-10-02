# Using latest node.js library
FROM node:latest

RUN npm install --global yarn pm2

RUN adduser node root

# Setup working direcoty
WORKDIR /home/node/app

# Copy required files into working direcoty
COPY src/*.*  /home/node/app/src/
COPY lib/*.*  /home/node/app/lib/
COPY *.json   /home/node/app/

RUN yarn install --production

RUN chmod -R 775 /home/node/app
RUN chown -R node:root /home/node/app

# Expose the required port
EXPOSE 8080

# Define any environment variable [if needed]

# Use package.json and install all dependencies
RUN npm install

# Run the app
CMD ["node", "src/Index.js"]
