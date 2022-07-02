const express = require('express')
const app = express()
const router = require('./routes')
const handlebarsHelper = require('./helpers/handlebars-helper')
const PORT = process.env.PORT || 3000

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ extname: '.hbs', helpers: handlebarsHelper }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(router)

app.listen(PORT, () => {
  console.log(`Express App is running on ${PORT}`)
})