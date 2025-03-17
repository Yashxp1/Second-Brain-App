import mongoose, { model } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    minlength: 6,
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
