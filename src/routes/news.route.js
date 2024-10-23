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

export default router;
