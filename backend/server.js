import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { connectClient, brands } from "./databases/database.js"; // Updated import for database functions

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

// Middleware
app.use(express.json()); // Allows us to parse req.body
app.use(cookieParser());

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions)); // Use the CORS middleware

// Routes
app.use("/api/v1/auth", authRoutes);

app.get('/api/v1/auth/brand', async (req, res) => {
    try {
        const dataset = await brands(); // Fetching data from database
        if (dataset) {
            res.status(200).json(JSON.parse(dataset)); // Sending JSON response
        } else {
            res.status(500).json({ error: "Failed to fetch data" });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Static assets in production
if (ENV_VARS.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

// Starting the server
app.listen(PORT, async () => {
    try {
        await connectClient(); // Connect to MongoDB when server starts
        console.log(`Server started at http://localhost:${PORT}`);
        connectDB();
    } catch (error) {
        console.error("Failed to start server due to database connection error:", error);
        process.exit(1); // Exit process with failure
    }
});
