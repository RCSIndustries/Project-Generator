FROM node:20.13.0-alpine3.18

WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY package-lock.json ./
COPY . ./client


RUN npm ci
# If you are building your code for production
# RUN npm ci --omit=dev
COPY . .
EXPOSE 8080
EXPOSE 3000
CMD ["npm","start"]