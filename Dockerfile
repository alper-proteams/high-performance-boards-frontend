FROM node:18-alpine
WORKDIR /high-performance-boards-frontend

COPY package*.json ./
RUN npm install
RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
