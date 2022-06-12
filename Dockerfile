FROM node:17
WORKDIR /app
COPY . /app
RUN npm install 
RUN npm run build
CMD npm run serve
EXPOSE 3000