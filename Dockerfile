# Base image
FROM node:16-alpine3.11 as build-step

# Create app directory
WORKDIR /app

# Copy package files into the WORKDIR
COPY package*.json ./

# Install dependencies except for devDependencies
RUN npm ci --only=production --silent

# Copy source files into WORKDIR
COPY . ./

# Build the app for production
RUN npm run build

# Production environment
FROM nginx:stable-alpine

# Copy build folder generated from the previous steps into nginx's server html folder
COPY --from=build-step /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Nginx will stay in the foreground preventing the container from stopping
CMD ["nginx", "-g", "daemon off;"]