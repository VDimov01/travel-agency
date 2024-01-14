const router = require('express').Router();
const {Location} = require('../models/Locations.js');

router.get('/', (req, res) => {
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
    const location = new Location(req.body);
    location.save()
        .then(() => res.json('Location added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/', (req, res) => {
    const id = req.body.id;
    Location.findByIdAndUpdate(id, req.body)
        .then(() => res.json('Location updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.delete('/:id', (req, res) => {
        Location.findByIdAndDelete(req.params.id)
            .then(() => res.json('Location deleted.'))
            .catch(err => res.status(400).json('Error: ' + err));
})

router.get('/:id', (req, res) => {
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;