FROM node:14

RUN mkdir -p /var/www/api

WORKDIR /var/www/api

COPY . /var/www/api/

### Start
RUN npm install

### End
CMD ["npm", "install"]