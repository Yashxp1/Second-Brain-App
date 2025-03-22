import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    String,
    enum: ['image', 'video', 'article', 'music', 'youtube', 'twitter', 'link'],
    required: true,
  },
  description: {
    type: String,
  },
  tags: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Tags',
    },
  ],

  link: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Content = mongoose.model('Content', contentSchema);

export default Content;
