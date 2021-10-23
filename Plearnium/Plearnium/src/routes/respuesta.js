const express = require('express')
const respuestaRouter = express.Router()
const axios = require('axios')


respuestaRouter.get('',async(req,res)=>{
    try{
        const webAPI = await
        axios.get(`http://localhost:3001/api/getEncuesta/`) 
        webAPI.data.forEach(encuesta => {
            console.log(encuesta)
            
        });
        res.render('agregarRespuesta', {encuestas: webAPI.data})
    }catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            console.log(err.request)
        }else{
            console.error('Error',err.message)
        }
    }
})

respuestaRouter.post('', (req, res) => {
    const {RespuestaEncuesta, idEncuesta} = req.body
    
    axios.post('http://localhost:3001/api/addRespuesta', {
        respuesta: RespuestaEncuesta,
        idEncuesta: idEncuesta
        
    })
    console.log(req.body, "ESTE ES")
    
    res.redirect('addConcepto')
})

module.exports = respuestaRouter