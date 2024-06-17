import express from "express";
import * as patientController from "../controllers/patientController";

const router = express.Router();

router.get("/patients", patientController.getPatients);

export default router;
