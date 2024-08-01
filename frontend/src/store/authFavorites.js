import axios from 'axios';

export const addToFavs = async (user, id) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/auth/add-to-favorites", {
            userId: user._id,
            itemId: id
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data, user.favorites); // Optional: Log the response data
    } catch (error) {
        console.error("Error in addToFavs:", error.message);
    }
}

export const delFromFavs = async (user, id) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/auth/del-from-favorites", {
            userId: user._id,
            itemId: id
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data, user.favorites); // Optional: Log the response data
    } catch (error) {
        console.error("Error in delFromFavs:", error.message);
    }
}
