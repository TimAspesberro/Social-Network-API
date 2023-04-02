const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
      },
      username: {
        type: String,
        required: true,
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );


const Thought = model('Thought', thoughtSchema);
  
 module.exports = Thought;