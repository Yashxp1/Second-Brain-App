import { AuthenticationRequest } from '../lib/types';
import { Response, Request } from 'express';
import Tag from '../models/tagsModel';

export const createTag = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.body;
    const tag = await Tag.create({ title });

    res.json({
      success: true,
      message: 'Tag created',
      data: tag,
    });
  } catch (error) {
    console.error('Error in create tag:', error);
    res.status(500).json({ success: false, message: 'Server error' });

  }
};

export const getAllTag = async (req: Request, res: Response): Promise<void> => {
  try {
    const tags = await Tag.find({});

    res.json({
      success: true,
      tags: tags,
    });
  } catch (error) {
    console.error('Error in getall tag:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
