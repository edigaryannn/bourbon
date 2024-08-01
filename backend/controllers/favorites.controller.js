import { User } from "../models/user.model.js";

export async function addToFavs(req, res) {
    const { userId, itemId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        if (!user.favorites.includes(itemId)) {
            user.favorites.push(itemId);
            await user.save();
            res.status(200).send('Item added to favorites');
        } else {
            res.status(400).send('Item already in favorites');
        }
    } catch (error) {
        console.log("Error in addToFavs controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
export async function delFromFavs(req, res) {
    const { userId, itemId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.favorites = user.favorites.filter(fav => fav !== itemId);
        await user.save();
        res.status(200).send('Item deleted from favorites');
    } catch (error) {
        console.log("Error in delFromFavs controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
