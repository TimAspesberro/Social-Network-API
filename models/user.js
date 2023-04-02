const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema (
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address.'],
      },
      thoughts: 
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
      friends: 
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);
  
  
const User = model('User', userSchema);
  
module.exports = User;