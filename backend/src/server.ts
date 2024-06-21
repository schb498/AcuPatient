import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import patientRoutes from "./routes/patients";
import appointmentRoutes from "./routes/appointments";
import { connectToCluster } from "./cluster";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 4000;

console.log("PORT:", process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Set up routing
app.use("/", patientRoutes);
app.use("/", appointmentRoutes);

app.get("/", (req, res) => {
  return res.json("AcuPatient!");
});

async function startServer() {
  try {
    await connectToCluster();
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Failed to connect to cluster: " + error);
  }
}

startServer();
