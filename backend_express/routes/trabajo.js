const express = require('express');
var router = express.Router();
const connect = require('./db_pool_connect');

//retorna todos los trabajos de la bd 
router.get('/', function (req, res, next) {
    connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }
  
      //use the client for executing the query
      client.query('SELECT * FROM Trabajo;', function (err, result) {
        //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
        done(err);
  
        if (err) {
          return console.error('error running query', err);
        }
        res.send(JSON.stringify(result.rows));
      });
    });
  
  })
  
//retorna todos las labores de la bd 
router.get('/labor', function (req, res, next) {
    connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }
  
      //use the client for executing the query
      client.query('SELECT * FROM Labor;', function (err, result) {
        //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
        done(err);
  
        if (err) {
          return console.error('error running query', err);
        }
        res.send(JSON.stringify(result.rows));
      });
    });
  
  })

//retorna la informacion de todos los trabajadores que realizan cierta labor 
router.get('/:id_labor', function (req, res, next) {
    connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }
      //use the client for executing the query
      client.query(`SELECT * FROM Trabajo as w NATURAL JOIN Trabajador as t WHERE id_labor=${req.params.id_labor};`, function (err, result) {
        //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
        done(err);
  
        if (err) {
          return console.error('error running query', err);
        }
        res.send(JSON.stringify(result.rows));
      });
    });
  
  })

//ingresa un nuevo trabajo
router.post('/' ,(req, res, next) => {
    const insertarTrabajo= async (err, client, done) => {
        if (err) {
          return console.error('error fetching client from pool', err);
        }
        //use the client for executing the query
        await client.query(`INSERT INTO  Trabajo(id_labor,id_trabajador,labor_tipoUnidad,labor_precio) VALUES ('${req.body.id_labor}', '${req.body.id_trabajador}', '${req.body.labor_tipoUnidad}', '${req.body.labor_precio}');`, function (err, result) {
          //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
          done(err);
          if (err) {
            return console.error('error running query', err);
          }
        });
    
      }
      connect(insertarTrabajo);
  })
  

  module.exports = router;