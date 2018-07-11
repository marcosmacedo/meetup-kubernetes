#Crea la imagen desde una imagen ya existente
FROM node:8
#Dentro de el contenedor crea el directorio y lo pone como current working directory
WORKDIR /usr/src/app
#Copia la información de npm en el cwd
COPY package*.json ./
#Instala las dependencias de la app
RUN npm install
#Copia la app desde el directorio corriente de este Dockerfile a el cwd de el contenedor
COPY . .
#Abre el puerto 8000 para la app
EXPOSE 8000
#Ejecuta la app
CMD [ "npm", "start" ]