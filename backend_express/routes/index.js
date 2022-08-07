const { Router } = require('express');
const router = Router();

const { getPersona, getPersonaById, createPersona } = require('./db_pool_connect');

router.get('/persona', getPersona);
router.get('/persona/:id', getPersonaById);
router.post('/users', createPersona);


module.exports = router;