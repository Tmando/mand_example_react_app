FROM node:latest AS builder

WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build-storybook

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/storybook-static .
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"] 
