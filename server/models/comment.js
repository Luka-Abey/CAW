const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  commentBody: {
    type: String,
    required: true
  },
  submission: {
    type: Schema.Types.ObjectId,
    ref: "Submission"
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);