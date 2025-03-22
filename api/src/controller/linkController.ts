import { AuthenticationRequest } from '../lib/types';
import { v4 as uuidv4 } from 'uuid';
import { Response } from 'express';
import Link from '../models/linkModel';
import Content from '../models/contentModel';

export const createLink = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    const existingLink = await Link.findOne({ userId: req.userId });

    if (existingLink) {
      res.json({ hash: existingLink.hash });
      return;
    }

    const randomUUID = uuidv4();

    await Link.create({ hash: randomUUID, userId: req.userId, live: 'true' });

    res.status(200).json({
      success: true,
      hash: randomUUID,
      user: req.userId,
    });
  } catch (error) {
    console.error('Error in createLink:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const shareLink = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    const { shareLink: hash } = req.params;

    const link = await Link.findOne({ hash });
    if (!link) {
      res.status(411).json({ message: 'Invalid' });
      return;
    }

    const content = await Content.find({ userId: link.userId })
      .populate('userId', 'email')
      .populate('tags');

    res.status(200).json({ success: true, content });
  } catch (error) {
    console.error('Error in shareLink:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const checkStatus = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    console.log('From Check status');
    const userId = req.userId;

    if (req.body.unLive) {
      const deletedLink = await Link.findOneAndDelete({ userId });

      res.json({
        success: true,
        message: deletedLink ? 'Link deleted' : 'No link found to delete',
        link: deletedLink,
      });
      return;
    }

    const links = await Link.find({ userId });

    if (links.length === 0) {
      res.json({ success: false, message: 'Link not found' });
      return;
    }

    res.json({ success: true, message: 'Link found', links });
    return;
  } catch (err) {
    console.error('Error in checkStatus:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
