import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    backurl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export const Brand = mongoose.model("Brand", brandSchema);