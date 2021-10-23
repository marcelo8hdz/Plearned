const express = require('express')
const jugadorRouter = express.Router()
const axios = require('axios')

jugadorRouter.get('',async(req,res)=>{
    try{
        const webAPI = await
        axios.get(`http://localhost:3001/api/getJugadores/`) 
        res.render('ranking',{players: webAPI.data})
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

module.exports = jugadorRouter