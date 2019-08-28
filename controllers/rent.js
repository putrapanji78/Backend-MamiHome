const models = require('../models')
const Rent = models.rent
const User = models.user
const multer = require('multer');
const upload = multer({dest: 'photo/'})
const jwt = require('jsonwebtoken')

//CRUD func
exports.index = (req, res) => {
    Rent.findAll({
        // attributes: ['rent.RentName', 'rent.RentAddress','rent.price','rent.Image1', 'rent.Area', 'rent.roomLeft'],
        include:[{
            model: User,
            as: 'user'
        }]
    }).then(data => {
        res.send(data)
    })
}

exports.show = (req, res) => {
    Rent.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}

exports.store = (req, res) => {
    jwt.verify(token, 'my-secret-key', (err, authdata)=>{
        if(err){
            res.status(403).send('Token invalid')
        }else{
            const {User_ID, RentName, RentAddress, Area, 
                latitude, longtitude, RentOwner, 
                OwnerPhoneNumber, roomLeft, price, Image2, Image3}= req.body
                
                
            Rent.create({
                User_ID: User_ID,
                RentName: RentName,
                RentAddress: RentAddress,
                Area: Area,
                latitude: latitude,
                longtitude: longtitude,
                RentOwner: RentOwner,
                OwnerPhoneNumber: OwnerPhoneNumber,
                roomLeft, roomLeft,
                price: price,
                Image1: req.file.path,
                Image2: Image2,
                Image3: Image3
            }).then(data => {
                res.send(data)
            })
        }
    })
    
    console.log(req.file)
    
}

exports.patch = (req, res) => {
    jwt.verify(token, 'my-secret-key', (err, authdata)=>{
        if(err){
            res.status(403).send('Token invalid')
        }else{
            Rent.update(
                req.body, {
                    where: {id: req.params.id}
                }
            ).then(data => {
                res.send({
                    message: "Success"
                })
            })
        }
    })
    
}

exports.delete = (req, res) => {
    jwt.verify(token, 'my-secret-key', (err, authdata)=>{
        if(err){
            res.status(403).send('Token invalid')
        }else{
            Rent.destroy({ where: {id: req.params.id}}).then(data => {
                res.send({
                    message: "Success"
                })
            })
        }
    })
    
}
exports.upload = (req, res) => {
    Rent.create(req.body).then(data => {
        res.send(data)
    })
}