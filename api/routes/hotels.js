import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
    try{
        const newHotel = new Hotel(req.body);
        await newHotel.save();
        res.status(201).json(newHotel);
    }catch(err){
        res.status(500).json({message: "Internal server error"})
    }
})

// UPDATE

// DELETE

// GET

//GET ALL

export default router;