const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const fileType = require('file-type')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 4000


app.use(bodyParser.json())

const UserController = require('./controllers/user')
const RentController = require('./controllers/rent')
const BookingController = require('./controllers/booking')
const AuthController = require('./controllers/auth')

//middlewares
const { authenticated } = require('./middleware/middleware')

//Upload Foto
const path = require('path')
var multer  = require('multer');
var storage = multer.diskStorage({
  destination : 'images/',
    filename: function (req, file, cb){
      cb(null, file.fieldname + '-' + Date.now() +  path.extname(file.originalname));
    }
});
var upload = multer({storage: storage});

app.post('/',(req,res)=>{
    res.send({
      a : req.body.a
    })
})
app.group('/api/v1', (router)=>{
router.post('/login', AuthController.login)
router.get('/users',  UserController.index) 
router.get('/user/:id',  UserController.show) 
router.post('/register', UserController.store)
router.patch('/user/:id',  authenticated,UserController.patch) //auth
router.delete('/user/:id',  authenticated,UserController.delete) //auth
router.get('/images/:imagename', (req, res) => {

  let imagename = req.params.imagename
  let imagepath = __dirname + "/images/" + imagename
  let image = fs.readFileSync(imagepath)
  let mime = fileType(image).mime

res.writeHead(200, {'Content-Type': mime })
res.end(image, 'binary')
})


router.get('/rents',  RentController.index) 
router.get('/rent/:id',  RentController.show) 
router.post('/addrent', authenticated, upload.single('Image1') ,RentController.store)//auth
router.patch('/rent/:id',  authenticated,RentController.patch) //auth
router.delete('/rent/:id',  authenticated,RentController.delete) //auth

router.get('/booking',  BookingController.index) 
router.get('/booking/:id',  BookingController.show) 
router.post('/addbooking', authenticated,BookingController.store) //auth
router.patch('/booking/:id',  authenticated,BookingController.patch) //auth
router.delete('/booking/:id',  authenticated,BookingController.delete) //auth
})


app.listen(port, () => console.log(`Listening on port ${port}!`))