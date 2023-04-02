const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  
const User = model('User', userSchema);
  
module.exports = User;