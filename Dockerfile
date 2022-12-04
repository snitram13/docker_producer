FROM node 

WORKDIR /src/app

COPY package*.json ./

COPY . . 

RUN yarn

EXPOSE 8900

CMD ["yarn", "start"]

