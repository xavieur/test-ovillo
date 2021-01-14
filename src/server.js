const express = require('express')

require('../db/connection')
const userRouter = require('../routers/user')
const threadRouter = require('../routers/thread')
const replyRouter = require('../routers/reply')

const port = process.env.PORT

// express app
const app = express()

// listen for requests
app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
})

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// web server
app.get('/', (req, res) => {
  res.render('index', { title: 'Login' })
});

app.get('/forum', (req, res) => {
  res.render('forum', { title: 'Forum' })
});

// api's
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', threadRouter)
app.use('/api', replyRouter)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})