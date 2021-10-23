const express = require('express')
const feedbackVistoRouter = express.Router()
const axios = require('axios')

feedbackVistoRouter.get('',async(req,res)=>{
    try{
        const webAPI = await
        axios.get(`http://localhost:3001/api/getFeedbacks/`) 
        res.render('VerFeedback', {feedbacks: webAPI.data})
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

feedbackVistoRouter.post('', (req, res) => {
    const {idJugador, idFeedback} = req.body
    axios.post('http://localhost:3001/api/addFeedbackVisto', {
        idJugador: idJugador,
        idFeedback: idFeedback
    })
    .then(function (response){
        console.log(response)
    })
})

module.exports = feedbackVistoRouter