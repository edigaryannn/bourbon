import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js";
import { brand } from "../controllers/brand.controller.js";
import { addToFavs, delFromFavs } from "../controllers/favorites.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/brand", brand);
router.post("/add-to-favorites", addToFavs);
router.post("/del-from-favorites", delFromFavs);


router.get("/authCheck", protectRoute, authCheck);

export default router;