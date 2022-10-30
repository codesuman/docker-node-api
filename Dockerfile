FROM node:alpine
WORKDIR /use/src/app
COPY package*.json .
RUN npm i
COPY . .
ENV PORT=8080
CMD ["node","app.js"]