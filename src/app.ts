import express, { Application } from "express";
const app: Application = express();
import userRoutes from "./routes/user.route";
import blogRoutes from "./routes/blog.router";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
dotenv.config();
let PORT = process.env.PORT || 3003;

app.use(express.json());
connectDB();

app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.listen(PORT, () => console.log(`Server listining on ${PORT}`));

// sync
// async

// const createUser = async () => {
//   try {
//     let user = await prisma.user.create({
//       data: {
//         email: "tt@test.com",
//         name: "Turki",
//         courses: {
//           create: [{ name: "Node.ts" }, { name: "React.ts" }],
//         },
//       },
//     });
//     console.log(user);
//   } catch (err) {
//     console.log(`there is an error ${err}`);
//   }
// };
// // createUser();

// const updateUser = async () => {
//   let update = await prisma.user.update({
//     where: {
//       id: 1,
//     },
//     data: {
//       name: "updated",
//       email: "updated@test.com",
//     },
//   });
//   if (update) {
//     console.log(update);
//   } else {
//     console.log("err");
//   }
// };
// // updateUser()

// const deleteUser = async () => {
//   let deleteUs = await prisma.user.delete({
//     where: {
//       email: "updated@test.com",
//     },
//   });
//   if (deleteUs) {
//     console.log("Deleted successfully");
//   } else {
//     console.log("error");
//   }
// };
// // deleteUser();

// const findAllUser = async () => {
//   let users = await prisma.user.findMany({
//     include: {
//       courses: true,
//     },
//   });
//   console.log(users);
//   users.map((user) => console.log(user));
// };
// // findAllUser();
// console.log("2");

// const createCourse = async () => {
//   let post = await prisma.course.create({
//     data: {
//       name: "JS",
//       userId: 8,
//     },
//   });
//   if (post) {
//     console.log(post);
//   } else {
//     console.log("error");
//   }
// };
// // createCourse();

// const deleteCourse = async () => {
//   let deleteC = await prisma.course.delete({
//     where: {
//       id: 2,
//     },
//   });
// };
// // deleteCourse();

// const updateCourse = async () => {
//   let upd = await prisma.course.update({
//     where: {
//       id: 1,
//     },
//     data: {
//       name: "Javascript",
//     },
//   });
// };
// updateCourse();
