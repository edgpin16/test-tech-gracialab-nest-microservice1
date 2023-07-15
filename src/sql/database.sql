CREATE DATABASE IF NOT EXISTS nest_db;

USE nest_db;

CREATE TABLE IF NOT EXISTS roles(
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users(
    identificacion_document VARCHAR(255) NOT NULL,
    type_rol INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    type_document VARCHAR(1) NOT NULL, /* V - E - J */
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS reservations(
    id INT NOT NULL,
    ID_users VARCHAR(255) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_type ENUM('cena','almuerzo','onces','cumplea#os','ocasion especial') NOT NULL,
    people_quantity INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    observation VARCHAR(255) NOT NULL,
    is_confirm TINYINT(1) NOT NULL /* 0 - FALSO, 1 - VERDADERO*/
);

ALTER TABLE roles 
    ADD CONSTRAINT pk_roles PRIMARY KEY(id);

ALTER TABLE `roles` 
    CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE users
    ADD CONSTRAINT pk_users PRIMARY KEY(identificacion_document);

ALTER TABLE users
    ADD CONSTRAINT fk_users_roles FOREIGN KEY(type_rol) 
    REFERENCES roles(id) 
    ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE reservations
    ADD CONSTRAINT pk_reservations PRIMARY KEY(id);

ALTER TABLE `reservations` 
    CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE reservations
    ADD CONSTRAINT pk_reservations_users FOREIGN KEY(ID_users) 
    REFERENCES users(identificacion_document)
    ON UPDATE CASCADE ON DELETE RESTRICT;

/*CREANDO LOS ROLES :)*/

INSERT INTO `roles` (`id`, `name`, `description`) 
    VALUES 
    ('1', 'ADMIN', 'Un administrador'), 
    ('2', 'CLIENTE', 'Un cliente comun y corriente ');

/*CREANDO EL USUARIO ADMINISTRADOR :)*/

INSERT INTO `users` (`identificacion_document`, `type_rol`, `name`, `last_name`, `type_document`, `email`, `password`) 
    VALUES ('27296482', '1', 'Edgardo', 'Pinto', 'V', 'edgardo.pinto16@gmail.com', 'Password');