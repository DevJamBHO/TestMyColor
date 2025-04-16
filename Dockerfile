FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --include=dev

# Copy all source files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
