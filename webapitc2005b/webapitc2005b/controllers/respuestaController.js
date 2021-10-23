const { sql,poolPromise } = require('../database/db')

class MainController {
    async getRespuestaByID(req, res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .query("exec SPGetRespuestaEncuesta")
            res.json(result.recordset)
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }
   
    async addRespuesta(req, res) {
        try {
            console.log(req.body)
            const pool = await poolPromise
            const result = await pool.request()
            .input('RespuestaEncuesta',sql.VarChar, req.body.respuesta)
            .input('ID_encuesta',sql.VarChar, req.body.idEncuesta)
            .query("exec SPAddRespuestaEncuesta @RespuestaEncuesta = @RespuestaEncuesta, @ID_encuesta = @ID_encuesta")
            
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
}

const respuestaController = new MainController()
module.exports = respuestaController;