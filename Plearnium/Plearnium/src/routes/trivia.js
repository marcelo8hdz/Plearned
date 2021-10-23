const express = require('express')
const triviaRouter = express.Router()
const axios = require('axios')

triviaRouter.get('',async(req,res)=>{
    try{
        const webAPI = await
        axios.get(`http://localhost:3001/api/getTrivias/`) 
        res.render('trivia',{trivias: webAPI.data})
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

triviaRouter.post('', (req, res) => {
    const {inputPregunta, inputRespuestaIncorrecta, inputRespuestaCorrecta} = req.body
    axios.post('http://localhost:3001/api/addTrivia', {
        inputPregunta: inputPregunta,
        inputRespuestaIncorrecta: inputRespuestaIncorrecta,
        inputRespuestaCorrecta: inputRespuestaCorrecta
    })
    
    
    res.redirect('addConcepto')
})

module.exports = triviaRouter