import express from "express";
import todoRoutes from "./routes/todos";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", todoRoutes);

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:3000");
});
