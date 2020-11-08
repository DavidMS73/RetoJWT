# RetoJWT
Reto de JWT del curso ISIS3710.

# Instalación
Desde el directorio del proyecto:

1.  Ejecutar npm install
    
2.  Ejecutar npm start
    
3.  Descargar y abrir las colecciones que se encuentran en la carpeta /collections/ en Postman.
    
4.  Ejecutar en conjunto la colección (**Run**) o cada uno de sus request (**Send**) sin modificar nada. Esto se logra debido a que se usan variables en Postman que guardan el *token* y el *id* de cada usuario y producto creado.

# Reto 📝

 1. Modificar el servidor / backend para conectarse con una base de datos (tipo SQL o MongoDB) la cual contiene los usuarios y contraseñas de la aplicación. Implemente un mecanismo adicional para no tener que almacenar las contraseñas como texto plano ya que es considerada una mala práctica en el diseño de sistemas de autenticación.
 2. Cree un total de 3 roles en la aplicación dentro de un esquema de autorización adecuado para el acceso de diferentes niveles de información. Al menos 1 de los roles debe estar en la capacidad de modificar información y persistirla para el consumo por parte de los demás roles.

## Punto 1

Inicialmente debe crearse un archivo *.env* con las variables:
 - DB_HOST: <inserte acá el host de la base de datos>
 - DB_NAME: <inserte acá el nombre de la base de datos>
 - JWT_SECRET_KEY: secret

Las contraseñas son encriptadas haciendo uso de la librería *dcrypt*, por lo que las contraseñas de los usuarios no son guardadas en formato plano.

## Punto 2
Se definieron 3 roles: *none*, *cliente* y *admin*. A continuación se enuncian los permisos:

 - *None*: leer productos
 - *Cliente*: leer y crear productos
 - *Admin*: leer, crear y actualizar productos, leer todos los usuarios de la base de datos.

Para definir los anteriores roles se hizo uso de la librería *accesscontrol*. Estos roles se encuentran definidos en el archivo *roles.js*.

Se crearon colecciones para cada rol y se definieron los test correspondientes según los códigos de respuesta esperados.
 
> Recuerda: se puede ejecutar la colección completa sin necesidad de darle *send* a cada request ya que se usan variables de entorno de Postman que se actualizan en cada ejecución.
