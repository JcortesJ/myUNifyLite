-- -----------------------------------------------------
-- Schema MyUnify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MyUnify
-- -----------------------------------------------------
DROP SCHEMA myunify;
CREATE SCHEMA IF NOT EXISTS MyUnify;
USE MyUnify ;
-- DROP SCHEMA MyUnify;
-- -----------------------------------------------------
-- Tabla Creador
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Creador(
  id_creador INT NOT NULL,
  nombre_creador CHAR(60) NOT NULL,
  PRIMARY KEY (id_creador));

-- -----------------------------------------------------
-- Tabla Usuario
-- -----------------------------------------------------
-- EJECUTAR PRIMERO 
CREATE TABLE IF NOT EXISTS Usuario (
  id_usuario INT NOT NULL,
  id_fraternidad INT NULL,
  apodos CHAR(45) NOT NULL,
  clave CHAR(25) NOT NULL,
  correo CHAR(60) NOT NULL,
  instagram CHAR(30) NOT NULL,
  importancia INT NOT NULL,
  PRIMARY KEY (id_usuario)
 );




-- -----------------------------------------------------
-- Tabla Fraternidad
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Fraternidad (

  id_creador_fraternidad INT NOT NULL,
  id_usuarioJefe INT,
  descripcion TEXT(120) NOT NULL,
  nombre CHAR(45) NOT NULL,
  PRIMARY KEY (id_creador_fraternidad))
;
-- LUEGO EJECUTAR ALTER
ALTER TABLE USUARIO 
    ADD FOREIGN KEY (id_usuario)
    REFERENCES MyUnify.Creador(id_creador)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    ADD FOREIGN KEY (id_fraternidad)
    REFERENCES MyUnify.Fraternidad (id_creador_fraternidad)
    ON DELETE CASCADE  ON UPDATE CASCADE
;

ALTER TABLE Fraternidad 
    ADD FOREIGN KEY (id_creador_fraternidad)
    REFERENCES MyUnify.Creador(id_creador)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    ADD FOREIGN KEY (id_usuarioJefe)
    REFERENCES MyUnify.Usuario(id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE;


-- -----------------------------------------------------
-- Table LUGAR
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Lugar (
  id_lugar INT NOT NULL,
  aforo INT NOT NULL,
  direccion CHAR(80) NOT NULL,
  nombre CHAR(80) NOT NULL,
  PRIMARY KEY (id_lugar));


-- -----------------------------------------------------
-- Table MyUnify.Notificacion
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Notificacion (
  id_notificacion INT NOT NULL auto_increment,
  id_remitente INT NOT NULL,
  estado TINYINT NULL,
  tipo ENUM('amistad','evento'),
  PRIMARY KEY (id_notificacion),
  FOREIGN KEY(id_remitente) REFERENCES MyUnify.Creador(id_creador));


-- -----------------------------------------------------
-- Table MyUnify.Evento
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Evento (
  id_evento INT NOT NULL,
  Notificacion_id_notificacion INT NOT NULL,
  Creador_id_creador INT NOT NULL,
  Lugar_id_lugar INT NOT NULL,
  nombre CHAR(80) NOT NULL,
  descripcion CHAR(150)  DEFAULT 'Severo evento, caiga',
  hora INT NOT NULL,
  fecha DATE NOT NULL,
  facultad CHAR(80) NULL,
  PRIMARY KEY (id_evento),
    FOREIGN KEY (Creador_id_creador)
    REFERENCES MyUnify.Creador (id_creador)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (Lugar_id_lugar)
    REFERENCES MyUnify.Lugar (id_lugar)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (Notificacion_id_notificacion)
    REFERENCES MyUnify.Notificacion (id_notificacion)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
;


-- -----------------------------------------------------
-- Table MyUnify.Pregunta
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Pregunta (
  id_pregunta INT NOT NULL,
  Evento_id_evento INT NOT NULL,
  id_remitente INT NOT NULL,
  contenido CHAR(120) NOT NULL,
  PRIMARY KEY (id_pregunta),
    FOREIGN KEY (id_remitente)
    REFERENCES MyUnify.Usuario(id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (Evento_id_evento)
    REFERENCES MyUnify.Evento (id_evento)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
;


-- -----------------------------------------------------
-- Table MyUnify.Respuesta
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Respuesta (
  id_respuesta INT NOT NULL,
  Pregunta_id_pregunta INT NOT NULL,
  id_remitente  INT NOT NULL,
  contenido CHAR(120) NOT NULL,
  PRIMARY KEY (id_respuesta, Pregunta_id_pregunta),
    FOREIGN KEY (Pregunta_id_pregunta)
    REFERENCES MyUnify.Pregunta (id_pregunta)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (id_remitente)
    REFERENCES MyUnify.Usuario (id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
;


-- -----------------------------------------------------
-- Table MyUnify.Etiqueta
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Etiqueta (
  id_etiqueta INT NOT NULL,
  descripcion  CHAR(120) NOT NULL,
  PRIMARY KEY (id_etiqueta))
;


-- -----------------------------------------------------
-- Table MyUnify.EventoEtiqueta
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS EventoEtiqueta (
  Evento_id_evento INT NOT NULL,
  Etiqueta_id_etiqueta INT NOT NULL,
  PRIMARY KEY (Evento_id_evento, Etiqueta_id_etiqueta),
    FOREIGN KEY (Evento_id_evento)
    REFERENCES MyUnify.Evento (id_evento)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (Etiqueta_id_etiqueta)
    REFERENCES MyUnify.Etiqueta (id_etiqueta)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
;


-- -----------------------------------------------------
-- Table MyUnify.EtiquetaUsuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS EtiquetaUsuario (
  Etiqueta_id_etiqueta INT NOT NULL,
  Etiqueta_id_usuario INT NOT NULL,
  PRIMARY KEY (Etiqueta_id_etiqueta, Etiqueta_id_usuario),
    FOREIGN KEY (Etiqueta_id_etiqueta)
    REFERENCES MyUnify.Etiqueta(id_etiqueta)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
 -- CONSTRAINT fk_Etiqueta_has_Usuario_Usuario1
    FOREIGN KEY (Etiqueta_id_usuario)
    REFERENCES MyUnify.Usuario (id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
;


-- -----------------------------------------------------
-- Table MyUnify.UsuarioNotificacion
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS UsuarioNotificacion (
  Notificacion_id_usuario INT NOT NULL,
  Notificacion_id_notificacion INT NOT NULL,
  PRIMARY KEY ( Notificacion_id_usuario, Notificacion_id_notificacion),
    FOREIGN KEY ( Notificacion_id_usuario)
    REFERENCES MyUnify.Usuario (id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (Notificacion_id_notificacion)
    REFERENCES MyUnify.Notificacion (id_notificacion)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
;


-- -----------------------------------------------------
-- Table MyUnify.EventoGuardado
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS EventoGuardado (
  id_creador INT NOT NULL,
  id_evento INT NOT NULL,
  PRIMARY KEY ( id_creador,id_evento),
    FOREIGN KEY (id_creador)
    REFERENCES MyUnify.Creador ( id_creador),
    FOREIGN KEY (id_evento)
    REFERENCES MyUnify.Evento (id_evento))
;


-- -----------------------------------------------------
-- Table MyUnify.Amigos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Amigos (
  id_amigo1 INT NOT NULL,
  id_amigo2 INT NOT NULL,
  PRIMARY KEY (id_amigo1 ,id_amigo2),
    FOREIGN KEY (id_amigo1 )
    REFERENCES MyUnify.Usuario (id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (id_amigo2)
    REFERENCES MyUnify.Usuario (id_usuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
;

/* SCRIPT CON DATOS */
INSERT INTO Creador (id_creador, nombre_creador) 
VALUES
-- FRATERNIDADES
	(1, 'TapitasClub'),
    (2, 'GameOfUnal'),
    (3,'YogaUnal'),
    (4,'SalsaUnal'),
    (5,'FutbolUnal'),
    (6,'Unal4All'),
    (7,'FictionBooks'),
    (8,'Sentipensando'),
    (9,'Ingeniando'),
    (10,'BudaUnal'),
    -- JEFES DE FRATERNIDAD (QUE SON USUARIOS)
    (11, 'Miguel Angel Parra Moreno'),
    (21, 'David Trinidad'),
    (31, 'Simon Blanco Gonzales'),
    (41, 'Juan Manuel Torres Lopez'),
    (51, "Jefferson Stiven Garcia"),
    (61, 'Davo Garnacho'),
    (71, 'Juan Camilo Lizandro Perdomo'),
    (81, 'Fernando Soto Parrado'),
    (91, 'Victor Jara Lara'),
    (101, 'Alvaro Uribe'),
    
    -- USUARIOS QUE NO SON JEFES
    (12, 'Saul Sandoval Hernan'),
    (13, "Luk Sanderman"),
    (14, 'Laura Figueroa Caicedo'),
    (15, 'Samuel kairus'),
    (16, 'Samanta Ramos Jimenez'),
    (17, 'Cesar Lopez Zamora'),
    (18, 'Wilson Mechado Marchan'),
    (19, 'Luna Jaimes Salsedo')
;

-- no le meti el id fraternidad para que no hayan conflictos. Una consulta de actualizacion sería meter los usuarios a fraternidades
INSERT INTO Usuario (id_usuario, apodos, clave, correo, instagram, importancia) 
VALUES
	-- Jefes Fraternidades
	(11, 'Angelo', 'MA124', 'mango@unal.edu.co', 'magoLolo', 90),
    (21, 'Diva', 'DT654', 'dtrini@unal.edu.co', 'divatrini14', 90),
    (31, 'Simoncho', 'SB188', 'simba@unal.edu.co', 'simba88', 90),
    (41, 'JuanMan', 'JT909', 'jmanto@unal.edu.co', 'juanman', 90),
    (51, 'Jeff', 'JG356', 'jstgar@unal.edu.co', 'jeff', 90),
    (61, 'Davismo', 'DG112', 'dgarna@unal.edu.co', 'davismoOficial', 90),
    (71, 'Juanca', 'JL124', 'jucaliz@unal.edu.co', 'juanca77', 90),
    (81, 'Fer', 'FS344', 'fsoto@unal.edu.co', 'xxferxx', 90),
    (91, 'Victicor', 'VJ124', 'vjara@unal.edu.co', 'jara33', 90),
    (101, 'Alvarito', 'MA124', 'AlUrCa@unal.edu.co', 'paraAlvaro', 90),
    -- USUARIOS NORMALES
    (12, 'Saul', 'SS224', 'ssando@unal.edu.co', 'bettercallsaul123', 76),
    (13, 'Sandy', 'LS234', 'sanderman@unal.edu.co', 'sanderman98', 88),
    (14, 'Lala', 'LF354', 'lafigo@unal.edu.co', 'lalafigueroa', 45),
    (15, 'Samu', 'SK344', 'skairus@unal.edu.co', 'samukkk', 85),
    (16, 'Sam', 'SR474', 'samramos@unal.edu.co', 'samy99', 95),
    (17, 'El Gordo', 'CL990', 'ceslop@unal.edu.co', 'gordocesar', 88),
    (18, 'Willy', 'WM998', 'willmercha@unal.edu.co', 'willymer', 45),
    (19, 'LuJaimes', 'LJ335', 'lujimenCa@unal.edu.co', 'lu', 65)
;


INSERT INTO fraternidad (id_usuarioJefe,id_creador_fraternidad,descripcion,nombre)
VALUES 
   (11,1,'Club de reciclaje para cuidar el planeta','TapitasClub'),
   (21,2,'Fans de Juego de tronos reunidos para hablar de teorías','GameOfUnal'),
   (31,4,'Clases de yoga abiertas para todo público','YogaUnal'),
   (41,6,'Clases de salsa abiertas para toda la comunidad universitaria','SalsaUnal'),
   (51,9,'Club para cuadrar partidos de microfutbol','FutbolUnal'),
   (61,7,'Club de reflexión sobre problematicas universitarias','Unal4All'),
   (71,8,'Club de lectura para todos los amantes de la ciencia ficción','FictionBooks'),
   (81,3,'Clases de herramientas emocionales para cualquiera','Sentipensando'),
   (91,5,'Conferencias de ingeniería para aprender e innovación','Ingeniando'),
   (101,10,'Grupo religioso centrado en la alabanza de Buda','BudaUnal')
;
   

INSERT INTO notificacion (id_remitente,estado,tipo)
VALUES 
   (15,TRUE,'amistad'),
   (16,TRUE,'evento'),
   (17,NULL,'amistad'),
   (11,TRUE,'evento'),
   (13,NULL,'amistad'),
   (12,TRUE,'evento'),
   (14,TRUE,'amistad'),
   (17,NULL,'evento'),
   (11,TRUE,'evento'),
   (12,TRUE,'evento')
;

INSERT INTO Lugar (id_lugar,nombre,direccion,aforo)
VALUES 
	(17,'CYT','Salón 304, edificio 454', 20),
	(18,'Laboratorio de microprocesadores','Salon edificio', 25),
	(19,'Parque de los maestros abstractos','Parque al frente del edificio de cine y televisión', 300),
    (20, 'Museo Leopoldo Rother', 'Carrera 45 No 26-85, Facultad de arquitectura',60),
    (21,'Plaza che','Plaza central de la Nacional frente a la bibilioteca central',200),
    (22,'Auditorio León de Greiff','Auditoria frente a la plaza che', 300),
    (23,'Agora de cultura','Al lado de ',50),
    (25,'Sala de estudio B', 'Tercer piso edificio 404',60),
    (28,'Facultad de ciencias','Salon 201, edificio 476', 30),
    (29,'Terraza CYT', 'Terraza(piso 5) del edificio 454 (ciencia y tecnología)',30),
    (26,'Estadio Alfonso Lopez', 'Estadio ubicado al lado del edificio 702 (cine y televisión)', 400 )
;
-- los eventos usan notificaciones pares xd
INSERT INTO EVENTO(id_evento,Notificacion_id_notificacion,Creador_id_creador,Lugar_id_lugar,nombre,descripcion,hora,fecha,facultad) VALUES
(1,2,1,17,'Aprende a quererte y quererme','Evento diseñado por la red de apoyo ATUN para fomentar el amor propio y hacia el projimo',12,STR_TO_DATE("28/10/2022", "%d/%m/%Y"),'Bienestar'),
(2,4,2,26,'Episfulvo','Evento del grupo de ingenieria de sistemas EPISUNAL para jugar futbol',13,STR_TO_DATE("02/11/2022", "%d/%m/%Y"),'Ingenieria'),
(3,4,4,28,'Jueves de astronomia','Jueves de divulgación de astronomia bajo las estrellas',18,STR_TO_DATE("08/08/2022", "%d/%m/%Y"),'Ciencias'),
(4,6,6,18,'Taller de diseño y uso de MDF','Encontremonos y aprende a usar las maquinas que la universidad ha dispuesto para ti',9,STR_TO_DATE("28/09/2021", "%d/%m/%Y"),'Ingenieria'),
(5,8,7,19,'Telas UN','Demostracion artistica del grupo de telas de la universidad nacional',11,STR_TO_DATE("15/10/2021", "%d/%m/%Y"),'Artes'),
(6,2,8,20,'La arquitectura hoy y ayer, reflexiones de la nueva era','Evento de divulgacion sobre la historia de la arquitectura colombiana',14,STR_TO_DATE("22/05/2021", "%d/%m/%Y"),'Artes'),
(7,4,9,22,'Despidiendo al leon','Ultimo concierto de la banda de egresados de la unal',10,STR_TO_DATE("13/03/2021", "%d/%m/%Y"),'Artes'),
(8,6,10,23,'MilongaUNAL','Clase abierta de Milonga, bajo la antigua torre de enfermeria ',18,STR_TO_DATE("05/06/2022", "%d/%m/%Y"),'Bienestar'),
(9,8,3,25,'Lo perderas todo pero no este parcial','Evento para estudiar para calculo diferencial',8,STR_TO_DATE("07/07/2021", "%d/%m/%Y"),'Sin facultad'),
(10,4,2,29,'Almuerzo 50 años facultad de economia','Evento de integracion dirigido por la direccion de bienestar FCE',12,STR_TO_DATE("09/11/2022", "%d/%m/%Y"),'FCE');



  
INSERT INTO UsuarioNotificacion(Notificacion_id_usuario, Notificacion_id_notificacion)
VALUES 
	(13, 1),
    (14,2),
    (13,2),
    (15,5),
    (12, 2),
    (13,8),
    (15,8),
    (16,6),
    (12,6),
    (11,7),
    (12,3),
    (21,9),
    (21,10),
    (31,4)
;


SELECT * FROM usuario;
 INSERT INTO pregunta (id_pregunta,Evento_id_evento,id_remitente,contenido)
VALUES 
	(1,1,12,'¿Qué tipo de ropa debo llevar?'),
	(2,4,12,'¿Cómo llego al estadio?'),
	(3,6,14,'¿Debo llenar algún formulario?'),
	(4,8,15,'¿Cómo puedo entrar a la universidad si no soy estudiante?'),
	(5,9,16,'¿A qué facultad va dirigida el evento?'),
	(6,3,17,'¿Dónde puedo encontrar más información?'),
	(7,4,18,'¿Quienes van a dirigir el evento?'),
	(8,5,19,'¿Tiene algún costo adicional?'),
    (9,6,31,'¿Se volverá a repetir el evento en un futuro?'),
	(10,7,101,'¿Qué prerequisitos debo cumplir para ir al evento?')
;
  

INSERT INTO respuesta(id_respuesta,Pregunta_id_pregunta,id_remitente,contenido) VALUES 
(1,1,13,'debes tener mas de 18 años'),
(2,8,12,'Si, las bebidas cuestan 3500 y los sandwiches 10000'),
(3,9,15,'no, no se volvera a repetir'),
(4,7,12,'La direccion nacional de bienestar'),
(5,6,11,'escribiendo al correo aj@unal.edu.co'),
(6,5,14,'A la facultad de artes'),
(7,4,19,'Puedes saltar la reja de la calle 26'),
(8,3,17,'no, no debes'),
(9,2,16,'dios mio siempre preguntan lo mismo. Por el cyt'),
(10,1,18,'debes tener el carnet de vacunacion al dia');

 INSERT INTO etiqueta(id_etiqueta,descripcion) VALUES
 (1,'Chistoso, gracioso, entretenido'),
 (2,'Extraño, insolito, exótico'),
 (3,'Miedo, terror, suspenso'),
 (4,'Romantico, Amor, Para parejas'),
 (5,'Familiar, agradable, para divertirse'),
 (6,'Musical, instrumental, auditivo'),
 (7,'Artistico, Aesthetic, interesante'),
 (8,'Cultural, reflexivo, enseñanza'),
 (9,'Deportivo, saludable, recreativo'),
 (10,'Academico, Estudio, Rutinas');
 

INSERT INTO eventoetiqueta(Evento_id_evento,Etiqueta_id_etiqueta) VALUES 
(1,8),
(2,9),
(3,10),
(4,10),
(5,7),
(6,7),
(7,6),
(8,8),
(9,1),
(10,5);

INSERT INTO EtiquetaUsuario (Etiqueta_id_usuario,Etiqueta_id_etiqueta) 
VALUES 
-- Jefes Fraternidades
	(11, 1),
    (21, 3),
    (31, 5),
    (41, 7),
    (51, 9),
    (61, 2),
    (71, 4),
    (81, 4),
    (91, 5),
    (101, 5),
    -- USUARIOS NORMALES
    (12, 10),
    (13, 1),
    (14, 9),
    (15, 2),
    (16, 8),
    (17, 3),
    (18, 7),
    (19, 4)
;

INSERT INTO amigos ( id_amigo1, id_amigo2)
VALUES 
	(11, 21),
    (31, 11),
   (31, 18),
    (31, 12),
    (21, 19),
    (61, 12),
    (71, 14),
    (81, 14),
    (91, 15),
    (101, 15),
    (81, 13),
    (91, 16),
    (81, 17),
    (18, 17),
    (11, 19),
    (13, 19),
    (15, 14),
    (16, 14),
    (15,18),
    (12,15),
    (13,31),
    (31,16),
    (16,15)
;

INSERT INTO eventoGuardado(id_creador,id_evento) VALUES
	(1,1),
    (1,2),
    (2,1),
    (21,3),
    (11,4),
    (15,1),
    (16,5),
    (2,7),
    (16,1),
    (101,9),
    (15,9),
    (15,2),
    (15,4),
    (15,5),
    (21,1),
    (21,2),
    (71,2),
    (71,5),
    (71,7),
    (71,1)
;

/*usuarios */
-- Creación rol Usuario
CREATE ROLE 'usuario'@'localhost' ;
-- CREATE USER 'usuario'@'localhost' ;

-- Asignación permisos a rol usuario
GRANT SELECT, DELETE ON creador TO 'usuario'@'localhost' ;
GRANT SELECT, INSERT, UPDATE, DELETE ON fraternidad TO 'usuario'@'localhost' ;
CREATE VIEW vw_users AS SELECT id_usuario,id_fraternidad,apodos,correo,instagram,importancia
	FROM usuario;
GRANT SELECT, UPDATE, DELETE ON vw_users TO 'usuario'@'localhost' ;
GRANT SELECT, INSERT, DELETE ON respuesta TO 'usuario'@'localhost' ;
GRANT SELECT, INSERT, DELETE ON pregunta TO 'usuario'@'localhost' ;
GRANT SELECT ON etiqueta TO 'usuario'@'localhost' ;
CREATE VIEW vw_notificacion AS SELECT id_notificacion, estado,tipo
	FROM notificacion ;
GRANT SELECT, DELETE ON vw_notificacion TO 'usuario'@'localhost' ;
GRANT SELECT, INSERT, UPDATE, DELETE ON evento TO 'usuario'@'localhost' ;
GRANT SELECT, INSERT ON lugar TO 'usuario'@'localhost' ;
GRANT SELECT, DELETE ON usuarionotificacion TO 'usuario'@'localhost' ;
GRANT SELECT, INSERT, DELETE ON eventoetiqueta TO 'usuario'@'localhost' ;
GRANT SELECT, INSERT, DELETE ON amigos TO 'usuario'@'localhost' ;
flush privileges;
-- Creación de usuario de ejemplo a partir de rol
-- DROP USER 'usuarioX'@'localhost' ;
 CREATE USER 'usuarioX'@'localhost' IDENTIFIED BY 'user123';
 GRANT 'usuario'@'localhost' TO 'usuarioX'@'localhost' ;
 SET DEFAULT ROLE 'usuario'@'localhost' TO 'usuarioX'@'localhost' ;
 flush privileges;
 SHOW GRANTS FOR 'usuarioX'@'localhost';
SELECT * FROM mysql.user;
-- DROP USER "modX"@'localhost';
-- DROP USER "fraternidadX"@'localhost';
-- DROP USER "unregisteredUser"@'localhost';
-- DROP USER "unregisteredX"@'localhost';
-- DROP USER "fraternidad_rol"@'localhost';
-- DROP USER "usuarioX"@'localhost';
-- DROP USER "usuario"@'localhost';
-- DROP USER "moderador";
-- DROP USER "fraternidadX";
-- DROP USER "fraternidad_rol";
-- DROP USER "usuarioX";
-- DROP USER "usuario";

-- ROL USUARIO SIN REGISTRAR

 CREATE ROLE 'unregisteredUser'@'localhost';
-- CREATE USER 'unregisteredUser'@'localhost';

GRANT INSERT ON creador TO 'unregisteredUser'@'localhost';
GRANT INSERT ON usuario TO 'unregisteredUser'@'localhost';

-- CREATE USER "unregisteredX"@'localhost' IDENTIFIED BY "unre123"; 
-- GRANT 'unregisteredUser'@'localhost' TO "unregisteredX"@'localhost';

-- GRANT INSERT ON creador TO 'unregisteredX'@'localhost';
-- GRANT INSERT ON usuario TO 'unregisteredX'@'localhost';
-- GRANT ALL PRIVILEGES ON myunify TO 'unregisteredX'@"localhost" ;

-- Rol de fraternidad 

 CREATE ROLE 'fraternidad_rol'@'localhost';
-- CREATE USER 'fraternidad_rol'@'localhost';
-- Sobre creador solo lectura
GRANT SELECT ON creador to 'fraternidad_rol'@'localhost';
-- sobre fraternidad leer, actualizar y borrar
GRANT SELECT,UPDATE,DELETE on fraternidad to 'fraternidad_rol'@'localhost';
-- Sobre usuario solo leer
GRANT SELECT on usuario to 'fraternidad_rol'@'localhost';
-- sobre respuesta crear, LEER y borrar
GRANT SELECT,UPDATE,INSERT on respuesta to 'fraternidad_rol'@'localhost';
-- sobre pregunta lo mismo
GRANT SELECT,UPDATE,INSERT on pregunta to 'fraternidad_rol'@'localhost';
-- sobre etiqueta solo leer
GRANT SELECT on etiqueta to 'fraternidad_rol'@'localhost';
-- sobre notificacion borrar y leer
GRANT SELECT,DELETE on notificacion to 'fraternidad_rol'@'localhost';
-- sobre evento es todo el crud
GRANT SELECT,INSERT,UPDATE,DELETE on evento to 'fraternidad_rol'@'localhost';
-- sobre lugar solo es leer y crear
GRANT SELECT,INSERT on etiqueta to 'fraternidad_rol'@'localhost';

-- Creación de usuario de ejemplo a partir de rol
 CREATE USER 'fraternidadX'@'localhost' IDENTIFIED BY 'toor';
 GRANT 'fraternidad_rol'@'localhost' TO 'fraternidadX'@'localhost';
 SET DEFAULT ROLE 'fraternidad_rol'@'localhost' TO 'fraternidadX'@'localhost';
 flush privileges;

-- sobre fraternidad leer, actualizar y borrar
-- GRANT SELECT,UPDATE,DELETE on fraternidad to 'fraternidadX'@'localhost'; -- BORRAR ESTE
-- GRANT SELECT ON creador to 'fraternidadX'@'localhost'; -- BORRA ESTE TAMBIEN
-- GRANT ALL PRIVILEGES ON myunify TO 'fraternidadX'@"localhost" ;

-- las vistas que le podrian interesar a la fraternidad son:
-- numero de usuarios que están suscritos a ellas
CREATE VIEW vw_usuariosFraternidad AS SELECT fraternidad.nombre,count(id_usuario) AS numero FROM usuario 
JOIN fraternidad ON  fraternidad.id_creador_fraternidad = usuario.id_fraternidad  GROUP BY fraternidad.nombre;
-- las 5 etiquetas más utilizadas en los eventos
CREATE VIEW vw_etiquetasComunes AS SELECT etiqueta.descripcion,COUNT(id_etiqueta) FROM eventoetiqueta JOIN etiqueta 
ON eventoetiqueta.Etiqueta_id_etiqueta=etiqueta.id_etiqueta 
JOIN evento ON Evento_id_evento=evento.id_evento -- AND evento.Creador_id_creador=fraternidad.id_creador_fraternidad
GROUP BY etiqueta.descripcion ORDER BY COUNT(id_etiqueta) DESC LIMIT 5;
-- numero de eventos creados por mes
-- probar si esta consulta sirve
CREATE VIEW vw_eventosMes AS SELECT MONTH(evento.fecha) AS MES , COUNT(id_evento) AS NUMERO FROM evento
GROUP BY MONTHNAME(evento.fecha);
flush privileges;

-- asignar permisos de lectura al rol sobre las vistas
GRANT SELECT  ON myunify.vw_eventosMes TO 'fraternidad_rol'@'localhost';
GRANT SELECT  ON myunify.vw_etiquetasComunes TO 'fraternidad_rol'@'localhost';
GRANT SELECT  ON myunify.vw_usuariosFraternidad TO 'fraternidad_rol'@'localhost';
flush privileges;
 SHOW GRANTS FOR 'fraternidadX'@'localhost';

-- Asigfnacion perfiles MODERADOR

-- crracion rol moderador

 CREATE ROLE "moderador"@'localhost';
-- CREATE USER "moderador"@'localhost';

-- permisos a moderador
GRANT SELECT, DELETE ON MyUnify.creador TO "moderador"@'localhost';
GRANT SELECT, DELETE ON MyUnify.fraternidad TO "moderador"@'localhost';
flush privileges;

DROP VIEW IF EXISTS vw_user_mod;
CREATE VIEW vw_user_mod AS SELECT id_usuario, id_fraternidad, apodos, instagram FROM usuario;

GRANT SELECT, DELETE ON MyUnify.vw_user_mod TO "moderador"@'localhost';
GRANT SELECT, DELETE ON Respuesta TO "moderador"@'localhost'; 
GRANT SELECT, DELETE ON Pregunta TO "moderador"@'localhost'; 
GRANT SELECT, DELETE ON MyUnify.Evento TO "moderador"@'localhost'; 
flush privileges;
-- creacion de un moderador

 CREATE USER 'modX'@"localhost"  IDENTIFIED BY 'mod123';
 GRANT 'moderador'@'localhost' TO 'modX'@"localhost" ;
 SET DEFAULT ROLE 'moderador'@'localhost' TO 'modX'@"localhost" ;
 flush privileges;

-- flush privileges;
 SHOW GRANTS FOR 'modX'@'localhost';
 
 -- ACTUALIZANDO VALORES DE FRATERNIDAD-USUARIO
UPDATE usuario
SET id_fraternidad=1
WHERE id_usuario=11;

UPDATE usuario
SET id_fraternidad=1
WHERE id_usuario=13;

UPDATE usuario
SET id_fraternidad=1
WHERE id_usuario=15;

UPDATE usuario
SET id_fraternidad=2
WHERE id_usuario=21;

UPDATE usuario
SET id_fraternidad=3
WHERE id_usuario=81;

UPDATE usuario
SET id_fraternidad=3
WHERE id_usuario=17;

UPDATE usuario
SET id_fraternidad=3
WHERE id_usuario=12;

UPDATE usuario
SET id_fraternidad=4
WHERE id_usuario=31 ;

UPDATE usuario
SET id_fraternidad=4
WHERE id_usuario=19;

UPDATE usuario
SET id_fraternidad=4
WHERE id_usuario=16;

UPDATE usuario
SET id_fraternidad=4
WHERE id_usuario=14;

UPDATE usuario
SET id_fraternidad=5
WHERE id_usuario=91 ;

UPDATE usuario
SET id_fraternidad=6
WHERE id_usuario=41;

UPDATE usuario
SET id_fraternidad=7
WHERE id_usuario=61;

UPDATE usuario
SET id_fraternidad=8
WHERE id_usuario=71;

UPDATE usuario
SET id_fraternidad=8
WHERE id_usuario=18;


UPDATE usuario
SET id_fraternidad=9
WHERE id_usuario=51;

UPDATE usuario
SET id_fraternidad=10
WHERE id_usuario=101;

SELECT * FROM usuario;

UPDATE evento
SET descripcion='evento cancelado por mal clima'
WHERE nombre='Telas UN';

UPDATE etiqueta
SET descripcion='marcha'
WHERE id_etiqueta=1;

-- creacion pas/funciones


-- 1. cuando se borre un evento, borrarlo de la tabla eventos guardados

SELECT * FROM evento;

DELIMITER $$
	CREATE PROCEDURE borrar_evento(id int)
    BEGIN
    -- Eliminamos la notificación 
    DECLARE id_noti INT DEFAULT 0;
    SELECT Notificacion_id_notificacion INTO id_noti FROM evento WHERE id_evento=id;
    DELETE FROM usuarionotificacion WHERE Notificacion_id_notificacion = id_noti;
    DELETE FROM notificacion WHERE id_notificacion=id_noti;
    -- Eliminamos guardados
    DELETE FROM eventoguardado WHERE id_evento = id;
    -- Eliminamos el evento
    DELETE FROM evento WHERE id_evento = id;
    END $$
DELIMITER ;

-- 2. (funcion) modificar usuario al momento de editar datos

DROP PROCEDURE IF EXISTS editar_usuario;

DELIMITER $$
	CREATE PROCEDURE editar_usuario(id int,apodo2 char(45),correo2 char(60),instagram2 char(60))
    BEGIN
    IF apodo2 is not null THEN
		UPDATE usuario
		SET apodos = apodo2
		WHERE id_usuario=id;
	END IF;
    IF correo2 is not null THEN
		UPDATE usuario
		SET correo = correo2
		WHERE id_usuario=id;
	END IF;
    IF instagram2 is not null THEN
		UPDATE usuario
		SET instagram = instagram2
		WHERE id_usuario=id;
	END IF;
    END; $$
DELIMITER ;

-- 3. (función) recibir por parametro id de usuario y regresar el numero de eventos guardados

DROP FUNCTION IF EXISTS eventosguardados_usuario;
DELIMITER $$
	CREATE FUNCTION eventosguardados_usuario(id int) 
    RETURNS INT DETERMINISTIC
    BEGIN
		DECLARE num_eventos INT DEFAULT 0;
		-- hacemos la consulta que nos trae el maximoINTO max_cost
        SELECT COUNT(id_evento) INTO num_eventos FROM eventoGuardado WHERE id_creador=id;
		return num_eventos;
    END $$
DELIMITER ;

-- 4. contar por id el numero de eventos creados

DROP FUNCTION contar_eventosCreados;

SET GLOBAL log_bin_trust_function_creators = 1
DELIMITER $$
CREATE FUNCTION contar_eventosCreados(id_creador INT)
RETURNS INT
BEGIN
	DECLARE numero INT DEFAULT 0;
	SET numero = (SELECT COUNT(*) FROM evento WHERE Creador_id_creador = id_creador);
    RETURN numero;
END $$
DELIMITER ;

-- 5. (Funcion) dada una notificacion de solicitud de amistad aceptada, crear el registro de amigos

DROP FUNCTION IF EXISTS agregarAmigos;
DROP FUNCTION IF EXISTS validarNot;

DELIMITER $$
CREATE FUNCTION agregarAmigos(id_not INT)
RETURNS boolean DETERMINISTIC
BEGIN
    DECLARE done boolean DEFAULT true;
	DECLARE receptor INT DEFAULT 0;
    DECLARE remitente INT DEFAULT 0;
	SET remitente = ( SELECT id_remitente from notificacion WHERE id_notificacion = id_not); -- el remitente es un atributo de la tabla notificacion
    -- El receptor es una tributo de la tabla usuarioNotificacion
    SET receptor = ( SELECT Notificacion_id_usuario FROM notificacion JOIN usuarioNotificacion ON (notificacion.id_notificacion = usuarioNotificacion.Notificacion_id_notificacion) WHERE notificacion.id_notificacion = id_not );
    
    INSERT INTO amigos(id_amigo1, id_amigo2) VALUES (remitente, receptor); -- creamos el registro de los nuevos amigos
    
    RETURN done;
END $$
DELIMITER ;


DELIMITER $$
CREATE FUNCTION validarNot(id_not INT)
RETURNS boolean DETERMINISTIC
BEGIN
    DECLARE tipoNot VARCHAR(20) DEFAULT "";
    DECLARE done boolean DEFAULT false; -- para controlar si la funcion se ejecuto con exito
	SELECT tipo INTO tipoNot FROM notificacion WHERE notificacion.id_notificacion = id_not; -- para saber el tipo de la notificacion
    IF tipoNot LIKE 'amistad' THEN -- Si la notificacion es de amistad
		set done =  agregarAmigos(id_not); -- llamamos la funcion que los vuelve amigos en la base de datos
    END IF;
    
    RETURN done;
END $$
DELIMITER ;



-- 6. (para PAS) cuando un usuario se de de baja borrar en cascada todas las tablas relacionadas con el

DROP PROCEDURE baja_usuario;
DELIMITER $$

CREATE PROCEDURE baja_usuario (id_user INT )
BEGIN
	-- primero debemos borrar de las tablas asociadas
    -- amigos
    DELETE FROM amigos WHERE id_amigo1 = id_user OR id_amigo2 = id_user;
    -- etiqueta usuario
    DELETE FROM etiquetausuario WHERE Etiqueta_id_usuario= id_user;
    -- usuario notificacion
    DELETE FROM usuarionotificacion WHERE Notificacion_id_usuario = id_user;
    
    -- luego podemos borrar en usuario
    DELETE FROM usuario WHERE id_usuario = id_user;
    -- finalmente en creador
    DELETE FROM creador WHERE id_creador = id_user;
END $$
DELIMITER ;

-- 7. Al crear un usuario, insertarlo en ambas tablas creador y usuario

DROP PROCEDURE IF EXISTS createUser;

DELIMITER $$
CREATE PROCEDURE createUser(id_usuario INT,nombre char(60), apodos char(45), clave char(25), correo char(60), instagram char(30))
BEGIN
    
	INSERT INTO creador(id_creador, nombre_creador) -- PRIMERO HAY QUE AÑADIRLO A CREADOR
	VALUES(id_usuario,nombre);

	INSERT INTO usuario(id_usuario, apodos, clave, correo, instagram, importancia)  -- luego lo metemos a usuario
	VALUES (id_usuario, apodos, clave, correo, instagram, 99);
    
END; $$
DELIMITER ;

-- 8.  pas que cambia una notificacion de 0 a 1 y la borra de la tabla notificaciones, para evento
DROP PROCEDURE borrarNOTIFICACIONESE;
DELIMITER $$
	CREATE PROCEDURE borrarNOTIFICACIONESE(nombreE varchar(50))
    BEGIN
		-- primero hayamos la id de la notificacion
        DECLARE id_notV INT;
        SELECT Notificacion_id_notificacion INTO id_notV FROM evento WHERE nombre LIKE nombreE;
        -- luego borramos
        DELETE FROM notificacion WHERE id_notificacion=id_notV;
    END $$
DELIMITER ;

-- 9. pas que cambia una notificacion de 0 a 1 y la borra de la tabla notificaciones, para usuario
DROP PROCEDURE borrarNOTIFICACIONESU:
DELIMITER $$
	CREATE PROCEDURE borrarNOTIFICACIONESU(nombreU varchar(50))
    BEGIN
		 DECLARE id_uV INT;
        SELECT id_usuario INTO id_uV FROM usuario WHERE nombre LIKE nombreU;
       DELETE FROM notificacion WHERE id_remitente=id_uV;
    END $$
DELIMITER ;

-- 11. ENVIAR NOTIFICACION DE AMISTAD
DROP PROCEDURE IF EXISTS sendFriendRequest;

DELIMITER $$
CREATE PROCEDURE sendFriendRequest(id_remitente INT, id_receptor INT)
BEGIN
	INSERT INTO notificacion(id_remitente,estado,tipo) VALUES(id_remitente, null, 'amistad');
    INSERT INTO usuarioNotificacion VALUES(id_receptor, last_insert_id());
END; $$
DELIMITER ;

-- 12. ENVIAR NOTIFICACION DE EVENTO
DROP PROCEDURE IF EXISTS sendEventRequest;

DELIMITER $$
CREATE PROCEDURE sendEventRequest(id_remitente INT, id_receptor INT)
BEGIN
	INSERT INTO notificacion(id_remitente,estado,tipo) VALUES(id_remitente, null, 'evento');
    INSERT INTO usuarioNotificacion VALUES(id_receptor, last_insert_id());
END; $$
DELIMITER ;

-- 13. PAS que te trae la información de un usuario para mostrarlo en pantalla (instagram, apodo, total de eventos creados y total de amigos) 
DROP PROCEDURE IF EXISTS infoUser;
DELIMITER $$
	CREATE PROCEDURE infoUser(id int)
    BEGIN
    DECLARE amixCount INT DEFAULT 0;
    DECLARE eventCount INT DEFAULT 0;
    DECLARE ownEvent INT DEFAULT 0;
    DECLARE apodo CHAR(45);
    DECLARE ig CHAR(30);
    
    SELECT count(*) INTO amixCount FROM amigos WHERE id_amigo1 = id OR id_amigo2 = id;
    SELECT count(*) INTO eventCount FROM eventoGuardado WHERE id_creador = id;
    SELECT count(*) INTO ownEvent FROM evento WHERE Creador_id_creador = id;
    SELECT instagram INTO ig FROM usuario WHERE id_usuario = id;
    SELECT apodos INTO apodo FROM usuario WHERE id_usuario = id;
    
    SELECT amixCount, eventCount, apodo, ig, ownEvent;
    
    END $$
DELIMITER ;

CALL infoUser(31);

-- 14. PAS que te trae la información de un parche (número de eventos activos, amigos del usuario en la fraternidad, usuarios en la fratenridad, nombre y jefe)

DROP PROCEDURE IF EXISTS infoParche;
DELIMITER $$
	CREATE PROCEDURE infoParche(id int, id_frat int)
    BEGIN
    
    DECLARE usersFrat INT DEFAULT 0;
    DECLARE amixCount INT DEFAULT 0;
    DECLARE eventCount INT DEFAULT 0;
    DECLARE jefe char(45);
    DECLARE namePar char(45);
    
  
    
    SELECT count(id_usuario) INTO usersFrat FROM usuario WHERE id_fraternidad = id_frat	 group by(id_fraternidad);
    SELECT count(id_evento) INTO eventCount FROM evento WHERE Creador_id_creador = id && fecha > curdate() group by(Creador_id_creador);
    SELECT count(id_usuario) INTO amixCount FROM ( SELECT * FROM usuario WHERE id_usuario IN(SELECT id_amigo2 FROM amigos WHERE id_amigo1 = id) UNION SELECT * FROM usuario WHERE id_usuario IN(SELECT id_amigo1 FROM amigos WHERE id_amigo2 = id) )AS amix WHERE id_fraternidad = id_frat;
    SELECT nombre INTO namePar FROM fraternidad WHERE id_creador_fraternidad = id_frat;
    SELECT apodos INTO jefe FROM ( SELECT id_usuarioJefe FROM fraternidad WHERE id_creador_fraternidad = id_frat )AS jefe JOIN usuario ON(id_usuarioJefe = id_usuario); 
    
    SELECT amixCount, eventCount, usersFrat, namePar, jefe;
    
    END $$
DELIMITER ;

CALL infoParche(31,3);

SELECT * FROM fraternidad;

DELIMITER $$
	CREATE TRIGGER TR_Creador BEFORE INSERT ON usuario
    FOR EACH ROW BEGIN
    SET @nv_id = NEW.id_usuario;
    SET @nv_nombre = NEW.apodos;
    INSERT INTO creador VALUES (@nv_id,@nv_nombre);
    END $$
DELIMITER ;

DELIMITER $$
	CREATE TRIGGER BR_creador BEFORE DELETE ON usuario
    FOR EACH ROW BEGIN
    SET @ol_id = OLD.id_usuario;
    DELETE FROM creador WHERE id_creador = @ol_id;
    END $$
DELIMITER ;

-- CREAR NOTIFICACION

DROP TRIGGER crear_notificacion;
-- TRIGGERS
-- al momento de crear un evento, se inserta en la tabla notificación su notificación correspondiente
SET @ID_cur = 15;
DELIMITER $$
CREATE TRIGGER crear_notificacion    
    BEFORE INSERT
         ON evento FOR EACH ROW    
         BEGIN    
		-- para acceder a la última columna insertada utilizamos la palabra NEW
        -- para acceder a la última borrada usamos OLD
        -- obtenemos el id_notificacion de la tabla a guardar
        SET @id_not = NEW.Notificacion_id_notificacion;
        INSERT INTO notificacion(id_notificacion,id_remitente,estado,tipo) VALUES (@id_not, @ID_cur,null,'evento');
        -- este trigger permite que no haya errores de que primero se deba insertar en notificacion para insertar en evento
        -- adicionamente insertamos en la tabla notificacionusuario
        SET @id_user = NEW.Creador_id_creador;
        INSERT INTO usuarionotificacion VALUES (@id_user,@id_not);
        END;     
        $$
	DELIMITER ;
    
-- al momento de un cambio en la tabla notificación, crear un nuevo registro en la tabla de amigos

DROP TRIGGER IF EXISTS crearAmigos;

DELIMITER $$
CREATE TRIGGER crearamigos    
    BEFORE UPDATE ON notificacion FOR EACH ROW 
        BEGIN    
         
		-- obtenemos el nuevo valor del estado de la notificacion
        SET @not_respond = new.estado;
        
        -- obtebemos el id de la notificacion que sufrio el cambio
        SET @id_not = new.id_notificacion;
        IF(@not_respond = 1) THEN -- si el cambio es que la acepto agregamos los amigos
			SET @DONE = validarNot(@id_not);
		ELSEIF(@not_respond = 0) THEN
			DELETE FROM notificacion WHERE id_notificacion = @id_not;
            SET @DONE = TRUE;
		END IF;

        END$$
DELIMITER ;

/*triggers faltantes*/
DELIMITER $$
	CREATE TRIGGER TR_Creador BEFORE INSERT ON usuario
    FOR EACH ROW BEGIN
    SET @nv_id = NEW.id_usuario;
    SET @nv_nombre = NEW.apodos;
    INSERT INTO creador VALUES (@nv_id,@nv_nombre);
    END $$
DELIMITER ;

DELIMITER $$
	CREATE TRIGGER BR_creador BEFORE DELETE ON usuario
    FOR EACH ROW BEGIN
    SET @ol_id = OLD.id_usuario;
    DELETE FROM creador WHERE id_creador = @ol_id;
    END $$
DELIMITER ;

DROP PROCEDURE buscarNot_Ev_id;

DELIMITER $$
	CREATE PROCEDURE buscarNot_Ev_id(id_us INT)
    BEGIN 
    SELECT DISTINCT nombre FROM evento  JOIN notificacion WHERE Notificacion_id_notificacion=id_notificacion and id_remitente = id_us ;
    END $$
DELIMITER ;


