const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const connectDB = require('./config/db')

// load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

// logging http verbs
if (process.env.NODE_ENV==='development'){
    app.use((morgan('dev')))
}


// handlebars
app.engine('hbs', engine({extname: '.hbs'
}));

app.set('view engine', '.hbs')
// app.set('views', './views')


// Routes 
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000




app.listen(PORT, console.log(`Server runnning in ${process.env.NODE_ENV} MODE ON PORT ${PORT}`))