-- Database: mande_db

-- DROP DATABASE mande_db;

CREATE DATABASE mande_db
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    TEMPLATE template0;

\c mande_db

CREATE TYPE calificacion AS ENUM('Muy malo', 'Malo', 'Regular', 'Bueno', 'Muy bueno'); 

        CREATE TYPE medioDePago AS ENUM('Débito', 'Crédito');

        CREATE TABLE IF NOT EXISTS Persona(
            id_persona SERIAL NOT NULL,
            persona_identificacion VARCHAR(16) NOT NULL,
            persona_edad VARCHAR(2) NOT NULL,
            persona_nombre VARCHAR(64) NOT NULL,
            PRIMARY KEY(id_persona),
            CONSTRAINT FK_constraint_direccion_persona FOREIGN KEY(id_persona) REFERENCES Persona(id_persona)
        );

        CREATE TABLE IF NOT EXISTS Direccion(
            id_direccion SERIAL NOT NULL,
            direccion_carrera VARCHAR(4) DEFAULT 'No aplica',
            direccion_calle VARCHAR(8) DEFAULT 'No aplica',
            direccion_barrio VARCHAR(16) DEFAULT 'No aplica',
            direccion_ciudad VARCHAR(32) DEFAULT 'No aplica',
            id_persona SERIAL,
            PRIMARY KEY(id_direccion),
            CONSTRAINT FK_constraint_direccion_persona FOREIGN KEY(id_persona) REFERENCES Persona(id_persona)
        );

        CREATE TABLE IF NOT EXISTS Usuario(
            id_usuario SERIAL NOT NULL,
            telefono_usuario VARCHAR(16) NOT NULL,
            correo_usuario VARCHAR(32) NOT NULL,
            usuario_medioPago VARCHAR(8) NOT NULL,
            usuario_direcFotoSerPub VARCHAR(32) NOT NULL,
            id_persona SERIAL,
            PRIMARY KEY(id_usuario),
            CONSTRAINT FK_constraint_usuario_persona FOREIGN KEY(id_persona) REFERENCES Persona(id_persona)
        );

        CREATE TABLE IF NOT EXISTS Trabajador(
            id_trabajador SERIAL NOT NULL,
            telefono_trabajador VARCHAR(16) NOT NULL,
            correo_trabajador VARCHAR(32) NOT NULL,
            trabajador_direcFotoPer VARCHAR(32) NOT NULL,
            trabajador_direcFotoCed VARCHAR(32) NOT NULL,
            id_persona SERIAL,
            id_labor SERIAL,
            PRIMARY KEY(id_trabajador),
            CONSTRAINT FK_constraint_trabajador_persona FOREIGN KEY(id_persona) REFERENCES Persona(id_persona)
        );

        CREATE TABLE IF NOT EXISTS Labor(
            id_labor SERIAL NOT NULL,
            labor_tipoUnidad VARCHAR(16) NOT NULL,
            labor_precio INTEGER NOT NULL,
            labor_nombre VARCHAR(64) NOT NULL,
            id_trabajador SERIAL,
            PRIMARY KEY(id_labor),
            CONSTRAINT FK_constraint_labor_trabajador FOREIGN KEY(id_trabajador) REFERENCES Trabajador(id_trabajador)
        );

        CREATE TABLE IF NOT EXISTS Pago(
            id_pago SERIAL NOT NULL,
            pago_medioPago medioDePago NOT NULL,
            pago_montoPago INTEGER CONSTRAINT (pago_montoPago > 0) NOT NULL,
            pago_descPago VARCHAR(16) NOT NULL,
            id_labor SERIAL,
            id_usuario SERIAL,
            PRIMARY KEY(id_pago),
            CONSTRAINT FK_constraint_pago_labor FOREIGN KEY(id_labor) REFERENCES Labor(id_labor)
            CONSTRAINT FK_constraint_pago_usuario FOREIGN KEY(id_usuario) REFERENCES Usuario(id_usuario)
        );

        CREATE TABLE IF NOT EXISTS Servicio(
                id_servicio SERIAL NOT NULL,
            calificacion_servicio calificacion NOT NULL,
                id_usuario SERIAL,
                id_trabajador SERIAL,
            id_pago SERIAL,
                PRIMARY KEY(id_servicio),
                CONSTRAINT FK_constraint_servicio_usuario FOREIGN KEY(id_usuario) REFERENCES Usuario(id_usuario),
                CONSTRAINT FK_constraint_servicio_trabajador FOREIGN KEY(id_trabajador) REFERENCES Trabajador(id_trabajador)
        );