import { User } from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
    try {
        const { email, password, username, favorites } = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({ success: false, message: "all fields are required" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: "invalid email" });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "password must be at last 6 characters long" });
        }

        const emailAlreadyExists = await User.findOne({ email: email });

        if (emailAlreadyExists) {
            return res.status(400).json({ success: false, message: "email already exists" });
        }

        const usernameAlreadyExists = await User.findOne({ username: username });

        if (usernameAlreadyExists) {
            return res.status(400).json({ success: false, message: "username already exists" });
        }

        //hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            email,
            password: hashedPassword,
            username,
            favorites,
        })


        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({
            success: true,
            user: { ...newUser._doc, password: "" }
        });


    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export async function login(req, res) {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "all fields are required" });
        }

        const user = await User.findOne({email: email});

        if(!user){
            return res.status(404).json({ success: false, message: "Invalid credentials" });
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            success:true,
            user:{
                ...user._doc,
                password: ""
            }
        });
        
    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export async function logout(req, res) {
    try {
        res.clearCookie("jwt-bourbon");
        res.status(200).json({ success: true, message: "Successfully loged out" });
    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export async function authCheck(req, res) {
	try {
		console.log("req.user:", req.user);
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}