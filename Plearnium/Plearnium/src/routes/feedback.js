const express = require('express')
const feedbackRouter = express.Router()
const axios = require('axios')

feedbackRouter.get('',async(req,res)=>{
    try{
        const webAPI = await
        axios.get(`http://localhost:3001/api/getAllFeedbacks/`) 
        res.render('verFeedback',{feedbacks: webAPI.data})
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

feedbackRouter.post('', (req, res) => {
    const {inputnombre, inputContenido} = req.body
    
    axios.post('http://localhost:3001/api/addFeedback', {
        inputnombre: inputnombre,
        inputContenido: inputContenido
        
    })
    
    res.redirect('addConcepto')
})

module.exports = feedbackRouter