
//const port = 3005
require('dotenv').config()
const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



            //app.get('/broken',(req,res) => {
            //   throw new Error('BROKEN')
//})

//app.get('/forbidden',(req,res) => {
 //   res.sendStatus(418)
//})

//app.get('/teapot', (req,res) => {
//    res.status(418).send()
//})

