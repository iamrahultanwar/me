FROM node:14
WORKDIR /app
COPY . /app
RUN npm install 
RUN npm run build
CMD node index.js
EXPOSE 80