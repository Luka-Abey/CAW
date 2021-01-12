const express = require('express');
const router = express.Router();
const Post = require('../models/Comment');
const showdown = require('showdown');

converter = new showdown.Converter();

router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: 1 })
    .then(comments => res.json(comments))
});

router.post('/', (req, res) => {
  const newComment = new Comment({
    user: req.body.user,
    commentBody: converter.makeHtml(req.body.commentBody),
    post: req.body.post
  });
  newComment.save().then(comment => res.json(comment));
});

router.delete('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => 
      comment.remove()
    .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;