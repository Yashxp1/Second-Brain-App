import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
});

const Tag = mongoose.model('Tag', tagSchema);

export default Tag;
