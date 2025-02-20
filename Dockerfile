# Build stage
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm install

# Copy all project files
COPY . .

# Set production environment variables
ENV VITE_APP_API_URL=https://academy1.tafra-tech.com/v1/academy
ENV VITE_APP_API_ADMIN_URL=https://academy1.tafra-tech.com/v1/admin

# Build the project
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy built assets to Nginx HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Add Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
