import Content from '../models/contentModel';
import { Response } from 'express';
import { AuthenticationRequest } from '../lib/types';

export const addContent = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    const { title, type, link, description, tags } = req.body;

    if (!title || !type || !link) {
      res.status(400).json({
        success: false,
        message: 'Title, type, and link are required',
      });
      return;
    }

    // await Content.create({
    //   link,
    //   type,
    //   title,
    //   description,
    //   tags,
    //   userId: req.userId,
    // });

    await Content.create({
      link,
      type,
      title,
      description: description || '', 
      tags: tags || [], 
      userId: req.userId,
    });

    const content = await Content.find({ userId: req.userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      user: req.userId,
      message: 'Content added',
      content: content,
    });
  } catch (error) {
    console.error('Error in add content', error);
    res.status(500).json({
      success: false,
    });
  }
};

export const getAllContent = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.userId;
    const content = await Content.find({ userId: userId })
      .populate('userId', ['email'])
      .sort({ createdAt: -1 })
      .populate('tags');

    res.status(200).json({
      success: true,
      content,
    });
  } catch (error) {
    console.error('Error in get all content', error);
    res.status(500).json({
      success: false,
    });
  }
};

export const deleteContent = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    const contentId = req.body.contentId;

    await Content.deleteOne({
      _id: contentId,
      userId: req.userId,
    });

    res.status(200).json({
      success: false,
      message: 'Deleted',
    });
  } catch (error) {
    console.error('Error in get all content', error);
    res.status(500).json({
      success: false,
    });
  }
};

export const editContent = async (
  req: AuthenticationRequest,
  res: Response
): Promise<void> => {
  try {
    const { link, title, type, description, tags, id } = req.body;

    if (!link || !type || !title || !description || !tags || !id) {
      res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
      return;
    }

    const content = await Content.findByIdAndUpdate(
      { id },
      {
        title,
        tags,
        type,
        description,
        link,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      updatedContent: content,
    });
  } catch (error) {
    console.error('Error in Edit content', error);
    res.status(500).json({
      success: false,
    });
  }
};
