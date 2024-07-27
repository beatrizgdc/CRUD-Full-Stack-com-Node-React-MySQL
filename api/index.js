import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on port ${PORT}`);
});
