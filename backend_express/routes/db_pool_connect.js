const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'mysecretpassword',
    database: 'mande_db',
    port: '5432',
    max: 10, 
    idleTimeoutMillis: 30000, 
});

const getPersona = async (req, res) => {
    const response = await pool.query('SELECT * FROM Persona');
    res.status(200).json(response.rows);
};

const getPersonaById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM Persona WHERE id = $1', [id]);
    res.json(response.rows);
};

const createPersona = async (req, res) => {
    const { persona_identificacion, persona_edad, persona_nombre } = req.body;
    const response = await pool.query('INSERT INTO Persona (persona_identificacion, persona_edad, persona_nombre) VALUES ($1, $2, $3)', [persona_identificacion, persona_edad, persona_nombre]);
    res.json({
        message: 'Persona Added successfully',
        body: {
            Persona: {persona_identificacion, persona_edad, persona_nombre}
        }
    })
};



module.exports = {
    getPersona,
    getPersonaById,
    createPersona
};
