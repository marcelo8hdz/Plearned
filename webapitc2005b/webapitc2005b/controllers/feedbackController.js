const { sql,poolPromise } = require('../database/db')

class MainController {
    async getFeedbacks(req, res){
      try {
          //te da todos los feedbacks menos los vistos por ID
          const pool = await poolPromise
          const result = await pool.request()
          .input('idJugador', sql.VarChar, req.body.idJugador)
          .query("exec SPGetFeedbackVisto @idJugador = @idJugador")
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async addFeedback(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('inputnombre',sql.VarChar, req.body.inputnombre)
            .input('inputContenido',sql.VarChar, req.body.inputContenido)
            .query("exec SPAddFeedback @nombre = @inputnombre, @Contenido = @inputContenido")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }


  
      async addFeedbackVisto(req, res) {
          try {
              const pool = await poolPromise
              const result = await pool.request()
              .input('idFeedback',sql.VarChar, req.body.idFeedback)
              .input('idJugador',sql.VarChar, req.body.idJugador)
              .query("exec SPAddFeedbackVisto @idFeedback = @idFeedback, @idJugador = @idJugador")
              res.json(result.recordset)
          } catch (error) {
              res.status(500)
              res.send(error.message)
          }
      }
      async getAllFeedbacks(req, res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .query("exec SPGetFeedbacks")
            res.json(result.recordset)
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }
}

const feedbackController = new MainController()
module.exports = feedbackController;