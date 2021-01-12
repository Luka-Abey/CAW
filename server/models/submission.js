const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = Submission = mongoose.model('post', SubmissionSchema); 