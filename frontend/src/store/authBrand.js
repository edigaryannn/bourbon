import axios from "axios";

export const fetchBrandsFromServer = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/auth/brand");
    const brandData = response.data;
    return brandData;
}
