const express = require('express')
const app = express()
app.use(express.json())
const Models = require('./app/models')
const sequelize = require('sequelize')
const PORT = process.env.PORT || 5000
const router = require('./app/config/route') 

Models.sequelize.sync({
    force: false,
    logging:console.log
})
.then(() => {
    console.log("DB is working fine")
})
.catch((err) => {
    console.log(err)
}) 

app.get('/', (req, res) => {
    res.send(" welcome to userauth.com-jwt")
})

app.use('/',router)

app.listen(PORT,() => {
    console.log('connected to port', PORT)
})