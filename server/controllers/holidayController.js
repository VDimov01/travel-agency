const router = require('express').Router();
const {Holiday} = require('../models/Holidays.js');

router.get('/', (req, res) => {
    Holiday.find().populate('location')
        .then(holidays => res.json(holidays))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.get('/', (req, res) => {
//     Holiday.find().populate('location')
//         .then((holidays) => {
//             holidays.filter((holiday) => {
//                 if(req.params.location){
//                     return holiday.location === req.params.location
//                 }
//                 if(req.params.startDate){
//                     return holiday.startDate === req.params.startDate
//                 }
//                 if(req.params.duration){
//                     return holiday.duration === req.params.duration
//                 }
//             })
//             res.json(holidays);
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// })

router.post('/', (req, res) => {
    const holiday = new Holiday(req.body);
    holiday.save()
        .then(() => res.json('Holiday added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/', (req, res) => {
    const id = req.body.id;
    Holiday.findByIdAndUpdate(id, req.body)
        .then(() => res.json('Holiday updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
        Holiday.findByIdAndDelete(req.params.id)
            .then(() => res.json('Holiday deleted.'))
            .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
    Holiday.findById(req.params.id).populate('location')
        .then(holiday => res.json(holiday))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;