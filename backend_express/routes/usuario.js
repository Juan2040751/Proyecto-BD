const express = require('express');
var router = express.Router();
const connect = require('./db_pool_connect');

//retorna todos los usuarios de la BD
router.get('/', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }

    //use the client for executing the query
    client.query('SELECT * FROM Usuario;', function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows));
    });
  });

})


//retorna la informacion de un usuario al pasarle su numero de cedula
router.get('/:id', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    //use the client for executing the query
    client.query(`SELECT * FROM Usuario as u NATURAL JOIN Persona as p WHERE persona_identificacion=${req.params.id};`, function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows[0]));
    });
  });

})

//ingresa un nuevo usuario
router.post('/' ,(req, res, next) => {
    const insertarUsuario= async (err, client, done) => {
        if (err) {
          return console.error('error fetching client from pool', err);
        }
        //use the client for executing the query
        await client.query(`INSERT INTO  Usuario(telefono_usuario,correo_usuario,usuario_medioPago,usuario_direcFotoSerPub,id_persona) VALUES ('${req.body.telefono_usuario}', '${req.body.correo_usuario}', '${req.body.usuario_medioPago}', '${req.body.usuario_direcFotoSerPub}', '${req.body.id_persona}');`, function (err, result) {
          //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
          done(err);
          if (err) {
            return console.error('error running query', err);
          }
        });
    
      }
      connect(insertarUsuario);
  })
  

  module.exports = router;