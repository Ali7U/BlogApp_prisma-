import { user } from "@prisma/client";
import prisma from "../config/db";
import { Request, Response } from "express";
// import { v4 as uuidv4 } from "uuid";

export const findUsers = async (req: Request, res: Response) => {
  let users = await prisma.user.findMany();
  res.json(users);
  //  users.map((user) => console.log(user));
};
export const createUser = async (req: Request, res: Response) => {
  let user = await prisma.user.create({
    data: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
  });
  res.json({ msg: "user created", user: user });
};

export const updateUser = async (req: Request, res: Response) => {
  let upd = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (upd) {
    console.log(upd);
  } else {
    console.log("err");
  }
  res.json({ msg: "Update seccesfully" });
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Deleted user has been succesful" });
  } catch (err) {
    res.json({ msg: err });
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as user;
    let user = await prisma.user.findMany({
      where: {
        username: username,
        password: password,
      },
    });
    if (!user) {
      return res.json({ msg: "username or password is wrong" });
    } else {
      res.json({ msg: `welcome back ` });
    }
  } catch (error) {
    console.log(error);
  }
};
