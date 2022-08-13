Para correr la aplicación se necesitan seguir estos pasos:
Levantar el backend y la base de datos:
1.	USER_NAME=juan
2.	cd database_postgres
3.	docker build -t ${USER_NAME}/mande_db .
4.	docker run --name mande_db -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d ${USER_NAME}/mande_db
5.	cd ..
6.	cd backend_express
7.	docker build -t ${USER_NAME}/mande_backend .
8.	npm install
9.	docker run -it --rm -p 3000:3000 -v $(pwd):/usr/src/app --link mande_db:postgres --name mande_app ${USER_NAME}/mande_backend
En otra terminal, en la carpeta raíz del proyecto se levanta el frontend:
cd frontend_react && npm start
Para realizar consultas de la base de datos:
Debes tener en cuenta que las consultas de usuario y trabajador se hacen con el número de cedula. Tienes las siguientes consultas disponibles: 
•	Para ver todas las personas de la base de datos:
http://localhost:3000/persona/
•	Para ver todas las direcciones de la base de datos:
http://localhost:3000/persona/direccion  
•	Para ver todos los trabajadores:
http://localhost:3000/trabajador/ 
•	Para ver todos los usuarios:
http://localhost:3000/usuario/ 
A cualquiera de esas direcciones se le pone el número de cédula como parámetro en la dirección y devuelve la información de esa persona. Ejemplo: 
http://localhost:3000/persona/11111 devuelve la información de la persona con numero de cedula 11111.

*  Para ver todos los trabajos:
http://localhost:3000/trabajo/
*  Para ver todos las labores:
http://localhost:3000/trabajo/labor
*  Para ver la informacion de todos los trabajadores que realizan cierta labor 
http://localhost:3000/trabajo/:id_labor