//import model
const models = require('../models')
const User = models.user
const jwt = require('jsonwebtoken')


//CRUD func
exports.index = (req, res) => {
    User.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    User.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}

exports.store = (req, res) => {
    const {email, password, name, gender, phoneNumber, job} =req.body
    User.create({
        email: email,
        password: password,
        name: name,
        gender: gender,
        phoneNumber: phoneNumber,
        job: job
    }).then(data => {
        res.send(data)
    })
}

exports.patch = (req, res) => {
    jwt.verify(token, 'my-secret-key', (err, authdata)=>{
        if(err){
            res.status(403).send('Token invalid')
        }else{
            User.update(
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
            User.destroy({ where: {id: req.params.id}}).then(data => {
                res.send({
                    message: "Success"
                })
            })
        }
    })
}