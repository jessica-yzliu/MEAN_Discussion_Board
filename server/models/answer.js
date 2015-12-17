// require mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// this is db collection model, il should be exactly same as your db collection
var AnswerSchema = new mongoose.Schema({
  text: String,
  _topic_id: {type: Schema.Types.ObjectId, ref: 'Topic'},
  _answered_by: {type: Schema.Types.ObjectId, ref: 'User'},
  likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  unlikes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

// register schema as a model
// this file will run when we require it using our config file
// since the model is defined, we will access it from our controller;
mongoose.model('Answer', AnswerSchema);