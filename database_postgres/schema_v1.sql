-- Database: mande_db

--DROP DATABASE mande_db;

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

CREATE TYPE cobro AS ENUM('Por labor', 'Por hora');

CREATE TABLE IF NOT EXISTS Persona(
    id_persona SERIAL NOT NULL,
    persona_identificacion INTEGER UNIQUE NOT NULL,
    persona_edad VARCHAR(2) CHECK (persona_edad >= '18') NOT NULL,
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
    telefono_usuario VARCHAR(16) UNIQUE NOT NULL,
    correo_usuario VARCHAR(64) UNIQUE NOT NULL,
    usuario_medioPago medioDePago NOT NULL,
    usuario_direcFotoSerPub VARCHAR(128) NOT NULL,
    id_persona  INTEGER,
    PRIMARY KEY(id_usuario),
    CONSTRAINT FK_constraint_usuario_persona FOREIGN KEY(id_persona) REFERENCES Persona(id_persona)
);

CREATE TABLE IF NOT EXISTS Trabajador(
    id_trabajador SERIAL NOT NULL,
    trabajador_direcFotoPer VARCHAR(128) NOT NULL,
    trabajador_direcFotoCed VARCHAR(128) NOT NULL,
    id_persona INTEGER,
    PRIMARY KEY(id_trabajador),
    CONSTRAINT FK_constraint_trabajador_persona FOREIGN KEY(id_persona) REFERENCES Persona(id_persona)
);
CREATE TABLE IF NOT EXISTS Labor(
    id_labor SERIAL NOT NULL,
    labor_nombre VARCHAR(64) NOT NULL,
    labor_descripcion VARCHAR(256) not null default 'Sin descripcion',
    PRIMARY KEY(id_labor)
);
CREATE TABLE IF NOT EXISTS Trabajo(
    id_trabajo SERIAL NOT NULL,
    id_labor INTEGER,
    id_trabajador INTEGER,
    labor_tipoUnidad cobro NOT NULL,
    labor_precio INTEGER NOT NULL,
    UNIQUE(id_labor,id_trabajador),
    PRIMARY KEY(id_trabajo),
    CONSTRAINT FK_constraint_trabajo_trabajador FOREIGN KEY(id_trabajador) REFERENCES Trabajador(id_trabajador),
    CONSTRAINT FK_constraint_trabajo_labor FOREIGN KEY(id_labor) REFERENCES Labor(id_labor) 
);

CREATE TABLE IF NOT EXISTS Pago(
    id_pago SERIAL NOT NULL,
    pago_montoPago INTEGER CHECK (pago_montoPago > 0) NOT NULL,
    pago_descPago VARCHAR(128) NOT NULL default 'Sin descripcion',
    calificacion_servicio calificacion NOT NULL,
    id_trabajo INTEGER,
    id_usuario INTEGER,
    PRIMARY KEY(id_pago),
    CONSTRAINT FK_constraint_pago_trabajo FOREIGN KEY(id_trabajo) REFERENCES Trabajo(id_trabajo),
    CONSTRAINT FK_constraint_pago_usuario FOREIGN KEY(id_usuario) REFERENCES Usuario(id_usuario)
);

