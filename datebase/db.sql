-- Creando base de datos --
CREATE DATABASE crud_js;

use crud_js;

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(59) NOT NUll;
    link VARCHAR(100) NOT NULL,
    votos VARCHAR(15)

);

