import User from "../models/User.js";

export const register = async (req, res, next) => {
    try{
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        await user.save();
        res.status(201).json(user); 
    }catch(err){
        next(err);
    }
}