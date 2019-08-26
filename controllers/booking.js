const models = require('../models')
const Booking = models.booking


//CRUD func
exports.index = (req, res) => {
    Booking.findAll().then(data => {
        res.send(data)
    })
}

exports.show = (req, res) => {
    Booking.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}

exports.store = (req, res) => {
    Booking.create(req.body).then(data => {
        res.send(data)
    })
}

exports.patch = (req, res) => {
    Booking.update(
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
    Booking.destroy({ where: {id: req.params.id}}).then(data => {
        res.send({
            message: "Berhasil"
        })
    })
}