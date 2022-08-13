const express = require('express');
var router = express.Router();
const connect = require('./db_pool_connect');

//retorna todos los trabajadores de la BD
router.get('/', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }

    //use the client for executing the query
    client.query('SELECT * FROM Trabajador;', function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows));
    });
  });

})


//retorna la informacion de un trabajador al pasarle su numero de cedula
router.get('/:id', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    //use the client for executing the query
    client.query(`SELECT * FROM trabajador as t NATURAL JOIN Persona as p WHERE persona_identificacion=${req.params.id};`, function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows[0]));
    });
  });

})

//ingresa un nuevo trabajador
router.post('/' ,(req, res, next) => {
  const insertarTrabajador= async (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    //use the client for executing the query
    await client.query(`INSERT INTO  Trabajador(trabajador_direcFotoPer,trabajador_direcFotoCed,id_persona) VALUES ('${req.body.trabajador_direcFotoPer}', '${req.body.trabajador_direcFotoCed}', '${req.body.id_persona}');`, function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);
      if (err) {
        return console.error('error running query', err);
      }
    });

  }
  connect(insertarTrabajador);
  })
  

  module.exports = router;