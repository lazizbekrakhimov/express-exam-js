import express from "express";
import { config } from "dotenv";
config();

import router from "./router/index.route.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());
await connectDB();

app.use('/api', router);

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})