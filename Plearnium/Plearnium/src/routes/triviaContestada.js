const express = require('express')
const triviaContestadaRouter = express.Router()
const axios = require('axios')

triviaContestadaRouter.get('/getTriviaContestada',async(req,res)=>{
    try{
        const webAPI = await
        axios.get(`http://localhost:3001/api/getTriviaContestada/`) 
        res.render('Trivia',{trivia: webAPI.data})
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

triviaContestadaRouter.post('/addTriviaContestada', (req, res) => {
    const {idJugador, idTrivia} = req.body
    axios.post('http://localhost:3001/api/addTriviaContestada', {
        idJugador: idJugador,
        idTrivia: idTrivia
    })
    .then(function (response){
        console.log(response)
        res.send(response)
    })
    .catch((error) => {
        res.status = 500
        res.send({error})
    })
})

module.exports = triviaContestadaRouter