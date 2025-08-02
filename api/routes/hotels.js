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
router.put("/:id", async (req, res) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(500).json({message: "Internal server error"})
    }
})

// DELETE
router.delete("/:id", async (req, res) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        res.status(500).json({message: "Internal server error"})
    }
})
// GET

//GET ALL

export default router;