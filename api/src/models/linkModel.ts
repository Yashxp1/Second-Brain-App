import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  live: {
    type: String,
    default: 'false',
  },
});

const Link = mongoose.model('Link', linkSchema);
export default Link;
