import { ENV_VARS } from "../config/envVars.js";
import { MongoClient } from "mongodb";

const uri = ENV_VARS.MONGO_URI;

const client = new MongoClient(uri);

async function connectClient() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

async function brands() {
    try {
        const dataset = await client.db('bourbon_db').collection('brands').find().toArray();
        return JSON.stringify(dataset);
    } catch (error) {
        console.error("Error fetching brands:", error);
        return null;
    }
}

export { connectClient, brands };
