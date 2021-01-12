const express = require('express')
const mongoose = require('mongoose')
const submissions = require('./router/submissions.js')
// const comments = require('./router/comments')
const app = express()
const cors = require('cors')
const port = 5000
require('dotenv').config()

// sort deprecation warnings
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Connect DB
const db = require(process.env.MONGO_URI)
console.log(db);

// Avoid CORS error
app.use(
  cors({
    origin: url,
    credentials: true
    // exposedHeaders: ['set-cookie']
  })
)

// BodyParser
app.use(express.json())

mongoose
  .connect(db)
  .then(() => console.log('Mongo db connected...'))
  .catch(err => console.log(err))

// API routes
app.use('/api/comments', comments)
app.use('/api/submissions', submissions)

app.listen(port, () => console.log(`Server started on port: ${port}`))