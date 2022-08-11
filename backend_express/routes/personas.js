var express = require('express');
var bodyParser = require('body-parser')
var url = '';
var router = express.Router();

const connect = require('./db_pool_connect');

//retorna todas las personas de la BD
router.get('/', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }

    //use the client for executing the query
    client.query('SELECT * FROM Persona;', function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows));
    });
  });

})

//retorna todas las direcciones de la base ee datos 
router.get('/direccion', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }

    //use the client for executing the query
    client.query('SELECT * FROM Direccion;', function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows));
    });


  });

})

//retorna una persona al pasarle su cedula
router.get('/:id', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    //use the client for executing the query
    client.query(`SELECT * FROM persona WHERE persona_identificacion=${req.params.id};`, function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows[0]));
    });
  });

})

//crea una nueva persona junto con su direccion
router.post('/', (req, res, next) => {
  
  const insertarPersona = async (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err);
    }

    //use the client for executing the query
    await client.query(`INSERT INTO  Persona(persona_identificacion,persona_edad,persona_nombre) VALUES ('${req.body.persona_identificacion}', '${req.body.persona_edad}', '${req.body.persona_nombre}');`, function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);
      if (err) {
        return console.error('error running query', err);
      }
      const insertarDireccion = async (err, client, done) => {
        if (err) {
          return console.error('error fetching client from pool', err);
        }
    
        //use the client for executing the query
        await client.query(`INSERT INTO  Direccion(direccion_barrio,direccion_calle,direccion_carrera,direccion_ciudad) VALUES ('${req.body.direccion_barrio}', '${req.body.direccion_calle}', '${req.body.direccion_carrera}', '${req.body.direccion_ciudad}');`, function (err, result) {
          //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
          done(err);
          if (err) {
            return console.error('error running query', err);
          }
        });
    
      }
      connect(insertarDireccion);
    });

  }
  connect(insertarPersona);
})

module.exports = router;