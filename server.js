const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { readdirSync } = require('fs')

//middelwere 
app.use(cors())
app.use(morgan('dev'))


//Router
readdirSync('./routes')
.map((c)=> app.use('/api', require('./routes/' +c)))



PORT = 5000
app.listen(PORT,()=> console.log(`Server is Running on port ${PORT}`))