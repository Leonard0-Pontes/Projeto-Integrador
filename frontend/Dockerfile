#FROM node:24-alpine

#WORKDIR /app

#COPY package*.json ./

#RUN npm install

#COPY . .

#EXPOSE 5173

#CMD ["npm", "run", "dev"]

FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
