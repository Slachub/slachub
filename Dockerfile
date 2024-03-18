# Use a base image with the latest Node.js LTS installed
FROM node:18.18.2

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Start the app
CMD ["npm", "start"]


FROM node:18.18.2
USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --from=0 --chown=node:node /app .
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
