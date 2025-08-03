import User from "../models/User.js";

export const createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}