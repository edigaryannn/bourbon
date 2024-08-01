import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";


export const generateTokenAndSetCookie = (user_id, res) => {
    const token = jwt.sign({user_id}, ENV_VARS.JWT_SECRET, {expiresIn: "15d"});

    res.cookie("jwt-bourbon", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: ENV_VARS.NODE_ENV !== "development",
    });

    return token;
}