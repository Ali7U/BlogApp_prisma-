import { Request, Response } from "express";
import prisma from "../config/db";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body;
    await prisma.blog.create({
      data: blog,
    });
    res.json({ msg: "Blog created successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const getAllBlog = async (req: Request, res: Response) => {
  try {
    const blog = await prisma.blog.findMany({});
    res.json(blog);
  } catch (error) {
    console.log(error);
  }
};

export const getUserWithBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = await prisma.blog.findMany({
      where: {
        userID: id,
      },
      select: {
        title: true,
        creatdata: true,
        author: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    });
    res.json(userId)
  } catch (error) {
    console.log(error);
    
  }
};
export const deletBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.blog.deleteMany({
      where: {
        userID: id,
      },
    });
    res.json({
      message: " blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
