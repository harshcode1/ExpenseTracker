const express = require('express')
const connectToMongo = require('./db')
var cors = require('cors')
connectToMongo()

const app = express()

//=> Now we will change the port bcz we are running react on 3000 port and it's the default port....
const port = 6000;
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the Expense Tracker')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})