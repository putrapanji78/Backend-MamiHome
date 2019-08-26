const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 4000


app.use(bodyParser.json())

const UserController = require('./controllers/user')
const RentController = require('./controllers/rent')
const BookingController = require('./controllers/booking')
const AuthController = require('./controllers/auth')

//middlewares
const { authenticated } = require('./middleware/middleware')

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/login', AuthController.login)
app.get('/users',  UserController.index) //auth
app.get('/user/:id',  UserController.show) //auth
app.post('/register', UserController.store)
app.patch('/user/:id',  authenticated,UserController.patch) //auth
app.delete('/user/:id',  authenticated,UserController.delete) //auth

app.get('/rents',  RentController.index) //auth
app.get('/rent/:id',  RentController.show) //auth
app.post('/addrent', authenticated, RentController.store)
app.patch('/rent/:id',  authenticated,RentController.patch) //auth
app.delete('/rent/:id',  authenticated,RentController.delete) //auth

app.get('/booking',  BookingController.index) //auth
app.get('/booking/:id',  BookingController.show) //auth
app.post('/addbooking', authenticated,BookingController.store)
app.patch('/booking/:id',  authenticated,BookingController.patch) //auth
app.delete('/booking/:id',  authenticated,BookingController.delete) //auth

app.listen(port, () => console.log(`Listening on port ${port}!`))