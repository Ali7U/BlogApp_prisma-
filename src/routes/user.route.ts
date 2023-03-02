import express from "express";
import {
  findUsers,
  createUser,
  updateUser,
  deleteUser,
  Login,
} from "../controller/user.controller";

let route = express.Router();

route.get("/", findUsers);

route.post("/", createUser);
route.post("/user", Login);

route.put("/:id", updateUser);

route.delete("/:id", deleteUser);


export default route
