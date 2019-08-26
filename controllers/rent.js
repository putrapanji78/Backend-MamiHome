const models = require('../models')
const Rent = models.rent
const User = models.user


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
    Rent.create(req.body).then(data => {
        res.send(data)
    })
}

exports.patch = (req, res) => {
    Rent.update(
        req.body, {
            where: {id: req.params.id}
        }
    ).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}

exports.delete = (req, res) => {
    Rent.destroy({ where: {id: req.params.id}}).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}