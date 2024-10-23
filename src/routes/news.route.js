import { Router } from "express";
import {
  create,
  findAll,
  findById,
  topNews,
  searchByTitle,
  searchByUser,
  updateNews,
  deleteNews,
  likeNews,
  addComment,
  deleteComment
} from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, searchByUser);
router.get("/:id", authMiddleware, findById);
router.patch("/:id", authMiddleware, updateNews);
router.delete("/:id", authMiddleware, deleteNews);
router.patch("/like/:id", authMiddleware, likeNews);
router.patch("/comment/:id", authMiddleware, addComment);
router.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment);

export default router;
