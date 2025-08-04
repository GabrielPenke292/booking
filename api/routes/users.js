import express from "express";
import { createUser, updateUser, deleteUser, getUser, getUsers } from "../controllers/UserController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// verifyToken
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in");
});

// verifyUser
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete your account");
});

// CREATE
router.post("/", createUser);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

export default router;