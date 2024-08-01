import { Brand } from "../models/brand.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function brand(req, res) {
    try {
        const { id, brand, company, backurl, description } = req.body;

        if (!id || !brand || !company || !backurl || !description) {
            return res.status(400).json({ success: false, message: "all fields are required" });
        }
        const newBrand = new Brand({
            id,
            brand,
            company,
            backurl,
            description,
        })

        await newBrand.save();

        res.status(201).json({
            success: true,
            brand: {...newBrand._doc}
        });


    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

