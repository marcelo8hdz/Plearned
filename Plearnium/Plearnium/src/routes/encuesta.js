const express = require('express')
const encuestaRouter = express.Router()
const axios = require('axios')

encuestaRouter.get('',async(req,res)=>{
    try{
        const { idEncuesta } = req.body
        const webAPI = await
        
        axios.get(`http://localhost:3001/api/getRespuestaByID`, {
        })

        const encuestas =  await axios.get(`http://localhost:3001/api/getEncuesta/`) 
        console.log(encuestas)
        res.render('encuestas', {respuestas: webAPI.data, encuestas: encuestas.data})
        
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

encuestaRouter.post('', (req, res) => {
    const {pregunta} = req.body
    
    axios.post('http://localhost:3001/api/addEncuesta', {
        pregunta: pregunta
        
    })
    
    res.redirect('addConcepto')
})

module.exports = encuestaRouter