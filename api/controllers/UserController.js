import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}