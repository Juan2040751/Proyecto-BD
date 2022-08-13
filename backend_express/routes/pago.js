const express = require('express');
var router = express.Router();
const connect = require('./db_pool_connect');

//retorna todos los pagos de la BD
router.get('/', function (req, res, next) {
    connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }
  
      //use the client for executing the query
      client.query('SELECT * FROM Pago;', function (err, result) {
        //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
        done(err);
  
        if (err) {
          return console.error('error running query', err);
        }
        res.send(JSON.stringify(result.rows));
      });
    });
  
  })


  //ingresa un nuevo pago
router.post('/' ,(req, res, next) => {
    console.log(req.body)
    const insertarPago= async (err, client, done) => {
        if (err) {
          return console.error('error fetching client from pool', err);
        }
        //use the client for executing the query
        await client.query(`INSERT INTO  Pago(pago_montoPago,calificacion_servicio,id_trabajo,id_usuario) VALUES ('${req.body.pago_montoPago}', '${req.body.calificacion_servicio}', '${req.body.id_trabajo}', '${req.body.id_usuario}');`, function (err, result) {
          //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
          done(err);
          if (err) {
            return console.error('error running query', err);
          }
        });
    
      }
      connect(insertarPago);
  })
  

  module.exports = router;