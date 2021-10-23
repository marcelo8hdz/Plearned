const { sql,poolPromise } = require('../database/db')

class MainController {
    async getEncuesta(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .query("exec SPGetEncuesta")
            res.json(result.recordset)
            
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async addEncuesta(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('PreguntaEncuesta',sql.VarChar, req.body.pregunta)
            .query("exec SPAddEncuesta @PreguntaEncuesta = @PreguntaEncuesta")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
}

const encuestaController = new MainController()
module.exports = encuestaController;