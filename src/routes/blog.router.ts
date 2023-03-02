import { Router } from "express";

import {
  createBlog,
  getAllBlog,
  getUserWithBlog,
  deletBlog
} from "../controller/blog.controller";
const router = Router()

router.post ("/", createBlog)
router.get("/", getAllBlog)
router.get("/:id", getUserWithBlog)
router.delete("/:id", deletBlog);

export default router