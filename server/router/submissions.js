const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

router.get('/', (req, res) => {
  Submission.find()
    .sort({ date: -1 })
    .then(submissions => res.json(submissions))
});

router.post('/', (req, res) => {
  const newSubmission = new Submission({
    name: req.body.name,
    title: req.body.title,
    image: req.body.image,
    date: req.body.date,
    text: req.body.text
  });
  newSubmission.save().then(submission => res.json(submission));
});

router.put('/:id', (req, res) => {
  var conditions = { _id : req.params.id };
    Submission.updateOne(conditions, req.body).then(doc => {
        if (!doc){
            return res.status(404).end();
        }
        else{
            return res.status(200).json(doc);
        }
    }).catch(err => next(err));
})

router.delete('/:id', (req, res) => {
  Submission.findById(req.params.id)
    .then(submission => 
      submission.remove()
    .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(500).json({ success: false }));
})

module.exports = router;