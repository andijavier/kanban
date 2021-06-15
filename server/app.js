if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/index')
const errHandler = require('./middlewares/errHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)
app.use(errHandler)

app.listen(PORT, () => {
    console.log('listening on port:', PORT);
})