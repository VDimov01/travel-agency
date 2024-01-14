const router = require('express').Router();
const {Reservation} = require('../models/Reservations.js');

router.get('/', (req, res) => {
    Reservation.find().populate({path: 'holiday', populate: {path: 'location'}})
        .then(reservations => res.json(reservations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
    const reservation = new Reservation(req.body);
    reservation.save()
        .then(() => res.json('Reservation added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/', (req, res) => {
    const id = req.body.id
    Reservation.findByIdAndUpdate(id, req.body)
        .then(() => res.json('Reservation updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
        Reservation.findByIdAndDelete(req.params.id)
            .then(() => res.json('Reservation deleted.'))
            .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
    Reservation.findById(req.params.id).populate({path: 'holiday', populate: {path: 'location'}})
        .then(reservation => res.json(reservation))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;