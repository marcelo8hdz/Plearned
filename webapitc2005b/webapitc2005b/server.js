const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
// const morgan = require('morgan')
const router = require('./routes/route')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

app.use(cors())

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(morgan('dev'))

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })
 
// setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//const port = 3001

// app.listen(process.env.PORT || port , (err) => {
app.listen(port, () => {
  console.log('Server started running on : ' + port)
})