
const express = require('express');
const userController = require('../controllers/userController')
const playerController = require('../controllers/playerController')
const acomodaController = require('../controllers/acomodaController')
const conceptoController = require('../controllers/conceptoController');
const feedbackController = require('../controllers/feedbackController');
const triviaController = require('../controllers/triviaController');
const {sql, poolPromise } = require('../database/db');
const encuestaController = require('../controllers/encuestaController');
const respuestaController = require('../controllers/respuestaController');
const router = express.Router();
router.get('/api/getUsuarios', userController.getUsuarios);
router.get('/api/getUsuario/:id', userController.getUsuario);
router.get('/api/getUserbyEmail/:email', userController.getUserbyEmail);
router.post('/api/addUsuario', userController.addUsuario);
router.post('/api/createUser', userController.createUser);
router.put('/api/updateUsuario/:id', userController.updateUsuario);
router.put('/api/updateAdmin/:nombre', userController.updateAdmin);
router.get('/api/getRanking', playerController.getRanking);
router.get('/api/getJugador/:id', playerController.getJugador);
router.put('/api/updatePlayer/:id', playerController.updatePlayer);
router.get('/api/cargaAcomoda/:id_proceso', acomodaController.cargaAcomoda);
router.get('/api/getConceptos', conceptoController.getConceptos);
router.post('/api/addConcepto', conceptoController.addConcepto);
router.get('/api/getFeedbacks', feedbackController.getFeedbacks);
router.get('/api/getTrivias', triviaController.getTrivias);
router.post('/api/addFeedback', feedbackController.addFeedback);
router.post('/api/addTrivia', triviaController.addTrivia);
router.get('/api/addFeedbackVisto', feedbackController.addFeedbackVisto);
router.get('/api/getAllFeedbacks', feedbackController.getAllFeedbacks);
router.get('/api/getTriviaContestada', triviaController.getTriviaContestada);
router.post('/api/addTriviaContestada', triviaController.addTriviaContestada);
router.get('/api/getJugadores', playerController.getJugadores);
router.post('/api/addEncuesta', encuestaController.addEncuesta);
router.get('/api/getEncuesta', encuestaController.getEncuesta);
router.get('/api/getRespuestaByID', respuestaController.getRespuestaByID);
router.post('/api/addRespuesta', respuestaController.addRespuesta)



router.get("/test", async (request, res) => { 
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`
            SELECT * FROM ConceptosCasaCampo;
            `)
        res.send(result.recordset)
    } catch (error)
     {
        console.log(error)
        res.status(500)
        res.send(error.message)
        
    }
})
router.get("/test1", async (request, res) => { 
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query(`
            SELECT * FROM Feedback;
            `)
        res.send(result.recordset)
    } catch (error)
     {
        console.log(error)
        res.status(500)
        res.send(error.message)
        
    }
})


module.exports = router;