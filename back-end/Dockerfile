FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN DATABASE_URL_UNPOOLED="postgresql://user:password@localhost:5432/database" npx prisma generate

EXPOSE 3000

#Para desenvolvimento

#CMD ["npm", "run", "start:dev"]

#para produçao 

CMD ["/bin/sh", "-c", "npx prisma migrate deploy && npm run start:prod"]
