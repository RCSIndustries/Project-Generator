FROM node:16-alpine

WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+) .
COPY /package*.json ./
COPY /package-lock.json ./
COPY . ./server


RUN npm install
RUN npm install nodemon --save-dev

# If you are building your code for production
# RUN npm ci --omit=dev
COPY . .
EXPOSE 8080
EXPOSE 4000
CMD ["npx","nodemon","server.ts"]
