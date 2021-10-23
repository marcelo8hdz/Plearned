const { sql,poolPromise } = require('../database/db')

class MainController {
    async getTriviaContestada(req, res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .input('idJugador',sql.VarChar, req.body.idJugador)
          .query("exec SPGetTriviaContestada @idJugador = @idJugador")
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async addTrivia(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('inputPregunta',sql.VarChar, req.body.inputPregunta)
            .input('inputRespuestaIncorrecta',sql.VarChar, req.body.inputRespuestaIncorrecta)
            .input('inputRespuestaCorrecta',sql.VarChar, req.body.inputRespuestaCorrecta)
            .query("exec SPAddTrivia @Pregunta = @inputPregunta, @RespuestaIncorrecta = @inputRespuestaIncorrecta, @RespuestaCorrecta = @inputRespuestaCorrecta")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async addTriviaContestada(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('idJugador',sql.VarChar, req.body.idJugador)
            .input('idTrivia',sql.VarChar, req.body.idTrivia)
            .query("exec SPAddTriviaContestada @idTrivia = @idTrivia @idJugador = @idJugador")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async getTrivias(req, res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .query("exec SPGetTrivias")
            res.json(result.recordset)
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }
}

const triviaController = new MainController()
module.exports = triviaController;